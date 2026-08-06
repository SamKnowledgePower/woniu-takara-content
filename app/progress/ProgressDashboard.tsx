"use client";

import { useEffect, useState } from "react";
import {
  planProgressDefaults,
  planProgressMetricTaskNames,
  planProgressMonths,
  planProgressPrep,
  planVolume,
  woniuSupabaseConfig,
  type ProgressPhaseTemplate,
} from "../data/plan";

interface TaskLink {
  label: string;
  url: string;
  note?: string;
}

interface TaskRecord {
  name: string;
  status: "todo" | "active" | "review" | "complete";
  date: string;
  note: string;
  qty: number;
  links: TaskLink[];
}

interface ProgressData {
  status: string;
  updated: string;
  currentMonth: number | "prep";
  weekly: { done: string[]; wait: string[]; next: string[] };
  tasks: Record<string, TaskRecord>;
}

const stateLabel: Record<string, string> = {
  todo: "尚未開始",
  active: "進行中",
  review: "等待確認",
  complete: "已完成",
};

function defaultProgressData(): ProgressData {
  return {
    status: planProgressDefaults.status,
    updated: planProgressDefaults.updated,
    currentMonth: 0,
    weekly: planProgressDefaults.weekly,
    tasks: {},
  };
}

async function fetchProgress(): Promise<Partial<ProgressData> | null> {
  try {
    const res = await fetch(
      `${woniuSupabaseConfig.supabaseUrl}/rest/v1/rpc/get_public_progress`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: woniuSupabaseConfig.supabaseAnonKey,
          authorization: `Bearer ${woniuSupabaseConfig.supabaseAnonKey}`,
        },
        body: JSON.stringify({ project_slug: woniuSupabaseConfig.projectSlug }),
      },
    );
    if (!res.ok) return null;
    const rows = await res.json();
    const row = Array.isArray(rows) ? rows[0] : rows;
    return row?.data ?? null;
  } catch {
    return null;
  }
}

function taskRecord(tasks: Record<string, TaskRecord>, id: string, fallbackName: string): TaskRecord {
  return tasks[id] ?? { name: fallbackName, status: "todo", date: "", note: "", qty: 0, links: [] };
}

export default function ProgressDashboard() {
  const [data, setData] = useState<ProgressData>(defaultProgressData);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    fetchProgress().then((remote) => {
      if (!active) return;
      if (remote) {
        setData((prev) => ({
          ...prev,
          ...remote,
          weekly: remote.weekly ?? prev.weekly,
          tasks: remote.tasks ?? prev.tasks,
        }));
      }
      setLoaded(true);
    });
    return () => {
      active = false;
    };
  }, []);

  const tasks = data.tasks || {};
  const monthPhases = planProgressMonths.map((phase, i) => ({ prefix: `m${i + 1}`, phase }));

  let videoCount = 0;
  let visitCount = 0;
  for (const { prefix, phase } of monthPhases) {
    phase.tasks.forEach((t, i) => {
      const rec = tasks[`${prefix}-${i}`];
      if (!rec) return;
      if (t.kind === "qtyVideo") videoCount += Number(rec.qty) || 0;
      if (t.kind === "qtyVisit") visitCount += Number(rec.qty) || 0;
    });
  }
  const taskList = Object.values(tasks);
  const quarterlyDone = planProgressMetricTaskNames.quarterlyReviews.filter((name) =>
    taskList.some((t) => t.name === name && t.status === "complete"),
  ).length;
  const contentAssetDone = taskList.some(
    (t) => t.name === planProgressMetricTaskNames.contentAssetHandover && t.status === "complete",
  )
    ? 1
    : 0;
  const internalCapabilityDone = taskList.some(
    (t) => t.name === planProgressMetricTaskNames.internalCapabilityHandover && t.status === "complete",
  )
    ? 1
    : 0;
  const annualAssetDone = taskList.some(
    (t) => t.name === planProgressMetricTaskNames.annualAssetHandover && t.status === "complete",
  )
    ? 1
    : 0;

  const metricDefs = [
    { label: "短影音", n: videoCount, total: planVolume.annualVideoCount.value },
    { label: "到場服務", n: visitCount, total: planVolume.annualOnsiteVisitCount.value },
    { label: "季度檢核", n: quarterlyDone, total: planVolume.quarterlyReviewCount.value },
    { label: "內容資產系統", n: contentAssetDone, total: 1 },
    { label: "內部能力交接", n: internalCapabilityDone, total: 1 },
    { label: "年度成果與資產交接", n: annualAssetDone, total: 1 },
  ];

  const currentMonthLabel =
    data.currentMonth === "prep" ? "準備期" : data.currentMonth === 0 ? "尚未啟動" : `第 ${data.currentMonth} 個月`;

  const renderTask = (id: string, fallbackName: string, kind: string) => {
    const t = taskRecord(tasks, id, fallbackName);
    const links = (t.links || []).filter((l) => l.url);
    const qtyNote =
      kind === "qtyVideo"
        ? `本月完成 ${Number(t.qty) || 0} 支`
        : kind === "qtyVisit"
          ? `本月完成 ${Number(t.qty) || 0} 次`
          : null;
    return (
      <div key={id} className={`progressDash__task${t.status === "complete" ? " complete" : ""}`}>
        <span className="progressDash__check" aria-hidden="true" />
        <span className="progressDash__taskName">
          {t.name}
          {qtyNote ? <small className="progressDash__taskMeta">{qtyNote}</small> : null}
          {t.date ? <small className="progressDash__taskMeta">{t.date}</small> : null}
          {t.note ? <small className="progressDash__taskMeta">{t.note}</small> : null}
        </span>
        <span className="progressDash__taskLinks">
          <span className={`progressDash__taskState ${t.status}`}>{stateLabel[t.status] || stateLabel.todo}</span>
          {links.map((l, i) => (
            <a key={i} href={l.url} target="_blank" rel="noopener noreferrer">
              {l.label || "查看成果"} ↗
            </a>
          ))}
        </span>
      </div>
    );
  };

  const renderPhase = (prefix: string, phase: ProgressPhaseTemplate, isPrep: boolean) => {
    const ids = phase.tasks.map((_, i) => `${prefix}-${i}`);
    const doneCount = ids.filter((id) => tasks[id]?.status === "complete").length;
    const isOpen = isPrep ? data.currentMonth === "prep" : data.currentMonth === Number(phase.numberLabel);
    return (
      <details className="progressDash__month" key={prefix} open={isOpen}>
        <summary>
          <div className="progressDash__monthNum">
            {phase.numberLabel}
            <small>{isPrep ? "準備期" : "MONTH"}</small>
          </div>
          <div className="progressDash__monthTitle">{phase.title}</div>
          <div className="progressDash__monthFocus">{phase.focus}</div>
          <div className="progressDash__monthProgress">
            {doneCount} / {phase.tasks.length}
          </div>
          <div className="progressDash__chev">▶</div>
        </summary>
        <div className="progressDash__monthBody">
          {phase.tasks.map((t, i) => renderTask(`${prefix}-${i}`, t.name, t.kind))}
        </div>
      </details>
    );
  };

  return (
    <div className="progressDash">
      <header className="progressDash__header">
        <div className="progressDash__wrap progressDash__headerGrid">
          <div>
            <div className="progressDash__eyebrow">SAM KNOWLEDGE POWER × 窩牛 × Takara</div>
            <h1 className="progressDash__title">執行進度儀表板</h1>
            <p className="progressDash__subtitle">窩牛 × Takara 一年期內容行銷導入暨內部能力建置</p>
            <div className="progressDash__status">
              <span className="progressDash__dot" />
              <span>{data.status}</span>
            </div>
          </div>
          <div className="progressDash__meta">
            最近更新
            <strong>{data.updated}</strong>
            目前進行月份：{currentMonthLabel}
          </div>
        </div>
      </header>
      <main className="progressDash__main">
        <div className="progressDash__wrap">
          <p className="progressDash__label">年度數量總覽｜每 3 個月進行一次季度檢核，全年共 4 次</p>
          <section className="progressDash__metrics">
            {metricDefs.map((m) => {
              const pct = Math.min(100, (m.n / m.total) * 100);
              return (
                <article className="progressDash__metric" key={m.label}>
                  <strong>
                    {m.n} / {m.total}
                  </strong>
                  <span>{m.label}</span>
                  <div className="progressDash__bar">
                    <i style={{ width: `${pct}%` }} />
                  </div>
                </article>
              );
            })}
          </section>

          <p className="progressDash__label">每週進度摘要</p>
          <section className="progressDash__weekGrid">
            <article className="progressDash__weekCard done">
              <h2>本週完成</h2>
              <ul>
                {(data.weekly.done || []).map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </article>
            <article className="progressDash__weekCard wait">
              <h2>等待客戶確認</h2>
              <ul>
                {(data.weekly.wait || []).map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </article>
            <article className="progressDash__weekCard next">
              <h2>下一步安排</h2>
              <ul>
                {(data.weekly.next || []).map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </article>
          </section>

          <p className="progressDash__label">逐月進度</p>
          <p className="progressDash__prepBadge">一個月準備期｜贈送，不計入 12 個月</p>
          <section className="progressDash__months">
            {renderPhase("prep", planProgressPrep, true)}
            {monthPhases.map(({ prefix, phase }) => renderPhase(prefix, phase, false))}
          </section>

          <div className="progressDash__legend">
            <span className="l-done">已完成</span>
            <span className="l-active">進行中</span>
            <span className="l-review">等待確認</span>
            <span>尚未開始</span>
          </div>

          <div className="progressDash__footerNote">
            本頁是雙方共同查閱的公開進度依據，由 Sam 於後台更新；重新整理同一網址即可看到最新版本。短影音與到場次數依每月實際完成數累加，非固定配額推算。
            {!loaded ? "（正在載入最新資料…）" : null}
          </div>

          {/* 相對路徑在 client component hydrate 後會被 vinext 改寫成漏掉 basePath 的錯網址
              （見 app/data/plan.ts 的 PlanResourceCard 註解），因此這裡用完整網址。 */}
          <a className="progressDash__back" href="https://samknowledgepower.github.io/woniu-takara-content/">
            ← 返回合作提案
          </a>
        </div>
      </main>
    </div>
  );
}

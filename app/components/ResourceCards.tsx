"use client";

import { useState } from "react";
import Link from "next/link";
import { planResourceCards, type PlanResourceCard } from "../data/plan";

const stepLabels: Record<PlanResourceCard["key"], string> = {
  service: "01・完整交付內容",
  contract: "02・合作邊界與權利",
  contentMap: "03・策略與內容規劃",
  progress: "04・每週執行檢核",
};

// GitHub Pages 上這個網站部署在 /woniu-takara-content 子路徑。next/link 的 <Link>
// 會自動處理 basePath，但 iframe 的 src 屬性不會，需要手動補上前綴。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function ResourceCardItem({ card }: { card: PlanResourceCard }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const isExternal = card.href?.startsWith("http");
  const isInternal = card.href != null && !isExternal;

  return (
    <article className="resource">
      <div className="resourceStep">{stepLabels[card.key]}</div>
      <h3>{card.title}</h3>
      <p>{card.summary}</p>
      {card.status === "planned" ? (
        <div className="resourceActions">
          <span className="resourceBadge">規劃中／尚未建立</span>
        </div>
      ) : (
        <div className="resourceActions">
          {isInternal ? (
            <Link className="primary" href={card.href as string}>
              開啟專案進度表
            </Link>
          ) : (
            <a className="primary" href={card.href ?? undefined} target="_blank" rel="noopener">
              開啟 Google 文件
            </a>
          )}
          {card.previewUrl ? (
            <button
              className="previewToggle"
              type="button"
              aria-expanded={previewOpen}
              onClick={() => setPreviewOpen((open) => !open)}
            >
              頁內預覽
            </button>
          ) : null}
          {previewOpen && card.previewUrl ? (
            <div className="resourcePreview">
              <iframe
                src={isExternal ? card.previewUrl : `${basePath}${card.previewUrl}`}
                title={`${card.title}預覽`}
                loading="lazy"
              />
            </div>
          ) : null}
        </div>
      )}
    </article>
  );
}

export default function ResourceCards() {
  return (
    <div className="resourceGrid">
      {planResourceCards.map((card) => (
        <ResourceCardItem key={card.key} card={card} />
      ))}
    </div>
  );
}

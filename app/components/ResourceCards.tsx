"use client";

import { useState } from "react";
import { planResourceCards, type PlanResourceCard } from "../data/plan";

const stepLabels: Record<PlanResourceCard["key"], string> = {
  service: "01・完整交付內容",
  contract: "02・合作邊界與權利",
  contentMap: "03・策略與內容規劃",
  progress: "04・每週執行檢核",
};

function ResourceCardItem({ card }: { card: PlanResourceCard }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const isExternal = card.href?.startsWith("http");

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
          <a
            className="primary"
            href={card.href ?? undefined}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener" : undefined}
          >
            {card.key === "progress" ? "開啟專案進度表" : "開啟 Google 文件"}
          </a>
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
              <iframe src={card.previewUrl} title={`${card.title}預覽`} loading="lazy" />
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

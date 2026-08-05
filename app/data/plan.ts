// 窩牛 × Takara 契約、服務說明書、進度表共用資料骨架。
// 單一方案資料來源：三個頁面皆從這裡讀取，避免各自維護一套數字（見 D-007）。
// confirmed 欄位取自現行 app/page.tsx、Takara 新規格與 2026-08-05 的占星契約沿用指示。
// PlanField 仍保留 pending 型別供未來真正新增且尚未決策的欄位使用；目前契約欄位沒有 pending。

export type FieldStatus = "confirmed" | "pending";

export interface PlanField<T> {
  value: T;
  status: FieldStatus;
  note?: string;
}

function confirmed<T>(value: T): PlanField<T> {
  return { value, status: "confirmed" };
}

// 目前所有契約欄位皆已 confirmed；此函式保留供日後新增尚未決策的欄位時使用。
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function pending<T>(placeholder: T, note: string): PlanField<T> {
  return { value: placeholder, status: "pending", note };
}

export interface PlanIdentity {
  clientName: PlanField<string>;
  planName: PlanField<string>;
}

export interface PlanDuration {
  contractMonths: PlanField<number>;
  prepPeriodIncludedInContractMonths: PlanField<boolean>;
  prepPeriodIsComplimentary: PlanField<boolean>;
}

export interface PlanVolume {
  annualVideoCount: PlanField<number>;
  annualOnsiteVisitCount: PlanField<number>;
  onsiteVisitTypicalDuration: PlanField<string>;
  onsiteVisitMaxDuration: PlanField<string>;
  quarterlyReviewCount: PlanField<number>;
  weeklyReporting: PlanField<boolean>;
}

export interface PlanPricing {
  currency: PlanField<string>;
  monthlyFee: PlanField<number>;
  annualFee: PlanField<number>;
}

export interface PlanPhase {
  key: "prep" | "phase1to3" | "phase4to6" | "phase7to12";
  months: string;
  focus: string;
}

export interface PlanRights {
  finishedWorkAndRawFootageOwner: PlanField<string>;
  methodologyAndTemplateLicense: PlanField<string>;
}

export interface PlanServiceTrack {
  key: "woniu" | "takara" | "internalCapability";
  title: string;
  summary: string;
  items: string[];
}

export interface PlanScope {
  included: string[];
  excludedSeparateEngagement: string[];
}

// D-007 要求至少同步的欄位。2026-08-05 Sam 指示：未被 Takara 新規格取代的通用條款
// 沿用達氏占星正式契約；Takara 已有的修改、驗收與額外到場規則維持優先。
export interface PlanContractTerms {
  videoDurationSeconds: PlanField<string>;
  revisionPolicy: PlanField<string>;
  acceptanceWindow: PlanField<string>;
  paymentTerms: PlanField<string>;
  thirdPartyLicensing: PlanField<string>;
  terminationTerms: PlanField<string>;
  postContractConsulting: PlanField<string>;
  extraServicePricing: PlanField<string>;
  ipDisplayRights: PlanField<string>;
  legalReview: PlanField<string>;
}

export const planIdentity: PlanIdentity = {
  clientName: confirmed("窩牛 × Takara"),
  planName: confirmed("內容行銷導入暨內部能力建置"),
};

export const planDuration: PlanDuration = {
  contractMonths: confirmed(12),
  prepPeriodIncludedInContractMonths: confirmed(false),
  prepPeriodIsComplimentary: confirmed(true),
};

export const planVolume: PlanVolume = {
  annualVideoCount: confirmed(96),
  annualOnsiteVisitCount: confirmed(24),
  onsiteVisitTypicalDuration: confirmed("約 1 小時"),
  onsiteVisitMaxDuration: confirmed("最長不超過 2 小時"),
  quarterlyReviewCount: confirmed(4),
  weeklyReporting: confirmed(true),
};

export const planPricing: PlanPricing = {
  currency: confirmed("TWD"),
  monthlyFee: confirmed(32000),
  annualFee: confirmed(384000),
};

export const planPhases: PlanPhase[] = [
  {
    key: "prep",
    months: "準備期（不計入 12 個月）",
    focus: "素材蒐集、資料盤點、理解品牌與內容定位",
  },
  {
    key: "phase1to3",
    months: "第 1–3 月",
    focus: "確認雙主線題材、批次拍攝方式、送審與發布流程，建立第一批內容庫",
  },
  {
    key: "phase4to6",
    months: "第 4–6 月",
    focus: "持續拍攝與製作，依週進度追蹤交付；第 6 個月開始整理內容資產，並用真實任務帶入內部操作能力",
  },
  {
    key: "phase7to12",
    months: "第 7–12 月",
    focus: "維持內容產製，同步完成選題庫、素材規則、發布流程、教學紀錄與內部帶訓，讓系統逐步由窩牛接手",
  },
];

export const planRights: PlanRights = {
  finishedWorkAndRawFootageOwner: confirmed("窩牛"),
  methodologyAndTemplateLicense: confirmed("通用方法論與模板僅授權窩牛內部使用，不得轉售"),
};

export const planServiceTracks: PlanServiceTrack[] = [
  {
    key: "woniu",
    title: "窩牛本業",
    summary: "室內設計、裝修、統包工程、營造、自地自建；把現場判斷與案例經驗說成消費者聽得懂的內容。",
    items: ["案例拆解", "空間決策", "工程知識", "信任建立"],
  },
  {
    key: "takara",
    title: "Takara 代理",
    summary: "從產品規格走向真實生活情境，讓原廠優勢、收納、材質與使用價值成為可感受的購買理由。",
    items: ["產品教育", "展間體驗", "情境應用", "品牌差異"],
  },
  {
    key: "internalCapability",
    title: "內部能力",
    summary: "從素材命名、模板填寫與發布檢核開始，逐步帶入固定場景拍攝與簡易套版剪輯。",
    items: ["真實微任務", "既有教材", "權限盤點", "漸進交接"],
  },
];

export const planScope: PlanScope = {
  included: ["年度內容策略", "96 支短影音", "24 次到場", "主要製作", "發布協作", "進度檢核與帶訓"],
  excludedSeparateEngagement: [
    "廣告",
    "網站",
    "長影片",
    "課程",
    "企業對企業業務",
    "新品牌線",
    "重大活動",
    "高規格專案影片",
  ],
};

export const planOutcomeDisclaimer: PlanField<string> = confirmed(
  "以完成製作並送交確認作為交付認定；窩牛保有最終發布確認權；觸及、詢價與成交受市場、平台與後續服務影響，不作特定數字保證。",
);

// 原先的 10 個待確認欄位，已依 2026-08-05 補正表改為可執行條款。
export const planContractTerms: PlanContractTerms = {
  videoDurationSeconds: confirmed("60 秒內為基準；90 秒內為緩衝；90–120 秒仍計一支；超過 120 秒計兩支"),
  revisionPolicy: confirmed(
    "客觀瑕疵直接修正；主觀內容含一次結構性調整與合理微調；換題、重寫、重拍、換場景或推翻已確認方向為新增需求",
  ),
  acceptanceWindow: confirmed(
    "完成製作並送交確認即計入交付；窩牛保有最終發布確認權；不以未回覆視為同意",
  ),
  paymentTerms: confirmed(
    "每月 10 日前預付當月 NT$32,000；逾期得暫停，款項到帳後恢復，受影響交付時程順延",
  ),
  thirdPartyLicensing: confirmed(
    "窩牛提供或指定的日本原廠、案場、人物與客戶素材，由窩牛確認使用與公開授權；引弘自行選用的配樂、字型與素材庫，由引弘確認使用範圍；需另購的授權或第三方費用事前告知並由窩牛負擔",
  ),
  terminationTerms: confirmed(
    "原則一個月前以書面或通訊通知；當月已付費不退，已完成或已執行部分仍計費；終止後 10 日內移交窩牛帳號、成品與約定資產並刪除乙方持有的原始登入資料；不可抗力連續二個月得協議終止與結算",
  ),
  postContractConsulting: confirmed(
    "12 個月期滿即結束，沒有自動顧問期、月費或最低期間；如需顧問或維護，另行議約",
  ),
  extraServicePricing: confirmed(
    "超過 96 支的額外影片原則每支 NT$6,000；超過 24 次的額外到場原則每次 NT$2,000；人員更替含一次合理銜接，完整重訓、密集補訓或重建未整理資料依實際範圍另行報價",
  ),
  ipDisplayRights: confirmed(
    "引弘得將已公開成品作合理作品集展示；不得揭露窩牛營業秘密、未公開案場、客戶個資或未取得公開同意的內容",
  ),
  legalReview: confirmed(
    "依達氏占星 12 條架構完成契約草案，作為雙方簽署版本；不另送律師審閱",
  ),
};

// 首頁四文件卡片用連結。契約與服務說明書的正式載體是 Takara 專用 Google 文件
// （2026-08-05 建立），/contract 與 /service 僅為網站預覽、不取代正式文件。
// 文件目前僅擁有者（Sam 的帳號）可見；公開網站上線前需由 Sam 自行把分享權限
// 改成「知道連結的使用者」，Claude 沒有可用工具可以代為變更分享設定。
export interface PlanResourceCard {
  key: "service" | "contract" | "contentMap" | "progress";
  title: string;
  summary: string;
  status: "ready" | "planned";
  href: string | null;
  previewUrl: string | null;
  // 是否用新分頁開啟。href 一律用完整網址（含網域），因為 vinext 的用戶端
  // bundle 不會正確帶入 next.config 的 basePath／env，client component 裡的
  // next/link 或相對路徑在 hydrate 後會被改寫成漏掉 /woniu-takara-content
  // 前綴的錯網址（已於 2026-08-05 實際部署後驗證到這個 bug）。
  openInNewTab: boolean;
}

export const planResourceCards: PlanResourceCard[] = [
  {
    key: "service",
    title: "服務說明書",
    summary: "完整列出實際服務內容與交付方式，讓合作範圍、執行項目與預期產出有清楚依據。",
    status: "ready",
    href: "https://docs.google.com/document/d/1ptCxDhZfLZy4PA4GWBfX0mZQYMJ_SH4PO7RryjfO9ms/edit",
    previewUrl: "https://docs.google.com/document/d/1ptCxDhZfLZy4PA4GWBfX0mZQYMJ_SH4PO7RryjfO9ms/preview",
    openInNewTab: true,
  },
  {
    key: "contract",
    title: "合作契約",
    summary: "清楚約定十二個月的服務範圍、雙方權利責任、費用與交付認定。",
    status: "ready",
    href: "https://docs.google.com/document/d/1AV9unXnuS_vITKWO75DxTz33YHFqx2Aux8fASq6PK8Y/edit",
    previewUrl: "https://docs.google.com/document/d/1AV9unXnuS_vITKWO75DxTz33YHFqx2Aux8fASq6PK8Y/preview",
    openInNewTab: true,
  },
  {
    key: "contentMap",
    title: "窩牛 × Takara 內容行銷大地圖",
    summary: "雙主線題庫、選題邏輯與內容資產全貌一次看懂，規劃中，尚未建立。",
    status: "planned",
    href: null,
    previewUrl: null,
    openInNewTab: false,
  },
  {
    key: "progress",
    title: "專案進度表",
    summary: "依實際執行內容持續更新，作為完成項目、當前進度與後續安排的共同檢核依據。",
    status: "ready",
    href: "https://samknowledgepower.github.io/woniu-takara-content/progress",
    previewUrl: "https://samknowledgepower.github.io/woniu-takara-content/progress",
    openInNewTab: false,
  },
];

// 進度表用型別：目前尚無真實產製或到場紀錄，先定義結構、留空陣列，
// 之後每完成一支影片或一次到場才新增一筆，不得預先捏造進度。
export interface VideoProgressEntry {
  id: string;
  track: PlanServiceTrack["key"];
  topic: string;
  scriptStatus: string;
  shootingStatus: string;
  draftStatus: string;
  revisionCount: number;
  confirmedAt: string | null;
  publishedAt: string | null;
}

export interface VisitProgressEntry {
  sequence: number;
  date: string;
  hours: number;
  shootingContent: string;
  trainingContent: string;
  cumulativeCount: number;
}

export interface WeeklyReportEntry {
  weekOf: string;
  summary: string;
  blockers: string[];
}

export interface QuarterlyReviewEntry {
  quarter: 1 | 2 | 3 | 4;
  reviewDate: string;
  notes: string;
}

export interface HandoverAssetEntry {
  name: "選題庫" | "素材規則" | "發布流程" | "教學紀錄";
  version: string;
  signedOffBy: string | null;
  signedOffAt: string | null;
}

export interface BlockingIssueEntry {
  description: string;
  owner: string;
  expectedResolutionDate: string | null;
  resolvedAt: string | null;
}

// 付款規則已 confirmed；付款紀錄陣列維持空白是因為目前沒有真實請款或收款資料。
export interface PaymentRecordEntry {
  period: string;
  dueDate: string | null;
  amount: number;
  status: "待付款規則確認後啟用" | "已請款" | "已收款" | "逾期";
}

export const planProgress: {
  videos: VideoProgressEntry[];
  visits: VisitProgressEntry[];
  weeklyReports: WeeklyReportEntry[];
  quarterlyReviews: QuarterlyReviewEntry[];
  handoverAssets: HandoverAssetEntry[];
  blockingIssues: BlockingIssueEntry[];
  payments: PaymentRecordEntry[];
} = {
  videos: [],
  visits: [],
  weeklyReports: [],
  quarterlyReviews: [],
  handoverAssets: [],
  blockingIssues: [],
  payments: [],
};

// 供三頁或稽核腳本快速抓出所有還沒定案的欄位，逐一顯示待確認狀態。
export function listPendingFields(): Array<{ key: string; note: string }> {
  return Object.entries(planContractTerms)
    .filter(([, field]) => field.status === "pending")
    .map(([key, field]) => ({ key, note: field.note ?? "" }));
}

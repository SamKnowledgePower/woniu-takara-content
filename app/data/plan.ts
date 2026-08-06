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
  prepPeriodMonths: PlanField<number>;
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
  clientObligations: PlanField<string>;
  vendorObligations: PlanField<string>;
  scheduleExtension: PlanField<string>;
  voluntaryTermination: PlanField<string>;
  immediateTermination: PlanField<string>;
  terminationSettlement: PlanField<string>;
  terminationHandover: PlanField<string>;
  forceMajeure: PlanField<string>;
  confidentiality: PlanField<string>;
  thirdPartyPlatformLiability: PlanField<string>;
  amendmentProcedure: PlanField<string>;
  disputeResolution: PlanField<string>;
  publishingResponsibility: PlanField<string>;
  onsiteReschedulingAndTravel: PlanField<string>;
  rawAssetStorage: PlanField<string>;
}

export const planIdentity: PlanIdentity = {
  clientName: confirmed("窩牛 × Takara"),
  planName: confirmed("內容行銷導入暨內部能力建置"),
};

export const planDuration: PlanDuration = {
  contractMonths: confirmed(12),
  prepPeriodMonths: confirmed(1),
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
    months: "一個月準備期（不計入 12 個月）",
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
    "原則一個月前以書面或通訊通知；通知如跨入下一付款月份，次月月費仍應支付，雙方並於次月月底前完成提前結案；當月及次月已付費不退，已完成或已執行部分仍計費；終止後 10 日內移交窩牛帳號、成品與約定資產並刪除乙方持有的原始登入資料；不可抗力連續二個月得協議終止與結算",
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
    "本契約如有未盡事宜，依中華民國相關法令及雙方後續書面協議辦理",
  ),
  clientObligations: confirmed(
    "甲方應：(1) 於雙方約定期間內提供拍攝、企劃所需之工程進度、產品資訊、報價、保固及案例等正確資料；(2) 協調拍攝場地、出鏡人員與必要陪同，並於合理期間內完成內容確認與回覆；(3) 取得屋主、工班、員工、設計師及其他出鏡或入鏡人員之拍攝與公開同意，並留存同意紀錄；(4) 妥善保管雙方約定之帳號與權限，並於帶訓期間指派專責人員配合學習",
  ),
  vendorObligations: confirmed(
    "乙方應：(1) 依本契約規劃年度內容策略、選題與腳本，並執行主要拍攝、主要剪輯與品質控管；(2) 於發布前將完成內容送交甲方確認，不得於未經確認前逕自對外發布；(3) 對於履行過程中知悉之甲方營業秘密、未公開案場及客戶個資負保密義務；(4) 依約定進度提供每週進度回報及季度檢核，並配合內部能力建置與教學紀錄留存",
  ),
  scheduleExtension: confirmed(
    "如因甲方未能於合理期間內提供拍攝所需資料、場地、出鏡人員配合或內容確認，致乙方無法依原訂時程履行，該部分時程得順延至甲方完成配合後起算，不視為乙方遲延；因前述原因致乙方額外產生之合理費用，經甲方確認後由甲方負擔；乙方因第九條付款逾期暫停服務者，暫停期間之交付時程比照順延處理",
  ),
  voluntaryTermination: confirmed(
    "任一方得原則於一個月前以書面或雙方可辨識之電子訊息通知他方後終止本契約；通知如跨入下一付款月份，次月月費仍應支付，雙方並於次月月底前完成提前結案；通知期間內雙方仍應依約履行原有義務",
  ),
  immediateTermination: confirmed(
    "有下列情形之一者，他方得不經前條通知期間，以書面通知立即終止本契約：(1) 一方遲延給付服務費用逾 30 日，經書面催告 7 日仍未給付；(2) 一方違反本契約重大義務，經他方書面通知後 7 日內未改善或無法改善；(3) 一方喪失營業能力、解散、停業、破產或受重整、清算宣告；(4) 一方之行為涉及侵害他方或第三人權利、違反法令，致他方有受重大損害之虞；(5) 不可抗力事由持續達本契約不可抗力條款所定期間",
  ),
  terminationSettlement: confirmed(
    "本契約終止時，當月及依任意終止條款應支付之次月服務費用不予退還；已完成或已執行之交付項目仍計入應付費用，尚未支付部分甲方應於終止後 7 日內結清；因終止所生之必要合理費用，由可歸責之一方負擔",
  ),
  terminationHandover: confirmed(
    "本契約終止後 10 日內，乙方應將窩牛指定帳號之管理權限、已完成成品、原始拍攝素材，及依本契約應移交之選題庫、素材規則、發布流程與教學紀錄等資產，依窩牛指定方式移交，並刪除乙方持有之原始登入資料，不得保留副本供其他用途使用",
  ),
  forceMajeure: confirmed(
    "因天災、政府命令、傳染病防治措施、網路或電力等基礎設施中斷，或其他非可歸責於雙方之不可抗力事由，致本契約全部或一部無法履行者，受影響之義務暫停履行，相關時程順延至事由消滅後合理期間；不可抗力事由持續達連續 2 個月以上者，任一方得以書面通知他方終止本契約，並依終止後費用結算條款辦理",
  ),
  confidentiality: confirmed(
    "雙方對於因履行本契約知悉之他方營業秘密、未公開案場資訊、產品或報價資訊、客戶個人資料及帳號密碼等應負保密義務，非經他方書面同意不得對外揭露或作契約目的以外之使用；契約終止或期滿後仍應繼續遵守。雙方如因履行本契約蒐集、處理或利用個人資料（如出鏡人員、客戶或屋主之姓名、影像等），應遵循個人資料保護法及相關法令，並於本契約約定之目的範圍內為之",
  ),
  thirdPartyPlatformLiability: confirmed(
    "本契約所稱發布協作，係指乙方依約完成之內容依甲方指定管道協助發布；平台之演算法規則、觸及機制、廣告政策、帳號審核或服務中斷等第三方平台行為，非乙方所能控制，乙方不負保證觸及、成效或平台政策變動之責任；因平台政策變動需調整內容或發布方式時，雙方應另行協商因應方式",
  ),
  amendmentProcedure: confirmed(
    "本契約之修改、補充或變更，應經雙方以書面或雙方可清楚辨識之電子紀錄（如經雙方確認之通訊軟體訊息、電子郵件）合意後始生效力；任一方不得片面變更已確認之條款或執行內容",
  ),
  disputeResolution: confirmed(
    "本契約以中華民國法律為準據法。因本契約所生之爭議，雙方應本誠信原則先行協商；協商不成時，雙方同意以本契約履行地之地方法院為第一審管轄法院",
  ),
  publishingResponsibility: confirmed(
    "發布協作由引弘企業社主導執行，以降低甲方內部人員異動造成的操作中斷；甲方仍保有內容之最終專業與發布確認權。發布平台、帳號權限及排程由雙方於合作啟動時確認",
  ),
  onsiteReschedulingAndTravel: confirmed(
    "臨時取消、改期、遲到或超時不計入 24 次到場額度，未完成時間依雙方可配合時段順延；花蓮市及花蓮縣吉安鄉、壽豐鄉、新城鄉不另計交通費，其餘縣市之火車票由甲方依票價實報實銷",
  ),
  rawAssetStorage: confirmed(
    "影片成品、原始拍攝素材及約定工作檔存放於雙方確認之網路硬碟，交付後保存 5 年；期間甲方可自行下載備份，期滿後乙方得停止保存",
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

// ---- 進度儀表板（沿用 GD／達氏占星共用 Supabase 後台）----
// 同一個 progress_projects 資料表 + get_public_progress RPC，slug 為 woniu-takara。
// 96 支影片／24 次到場不是固定月配額，因此不用「命名任務數 × 平均值」推算，
// 改用「數量型」任務（qtyVideo／qtyVisit），由 Sam 在後台填入當月實際完成數，
// 累加得到年度總數；不得預先捏造平均進度（見 Sam 2026-08-06 指示）。
export const woniuSupabaseConfig = {
  supabaseUrl: "https://nnthlksbshrejlbcycwq.supabase.co",
  supabaseAnonKey: "sb_publishable_q8QMEzqTYCnetpPCtWJQIA_WdRhPjFx",
  projectSlug: "woniu-takara",
};

export type ProgressTaskKind = "checklist" | "qtyVideo" | "qtyVisit";

export interface ProgressTaskTemplate {
  name: string;
  kind: ProgressTaskKind;
}

export interface ProgressPhaseTemplate {
  key: string;
  numberLabel: string;
  title: string;
  focus: string;
  tasks: ProgressTaskTemplate[];
}

const checklist = (name: string): ProgressTaskTemplate => ({ name, kind: "checklist" });
const qtyVideoTask: ProgressTaskTemplate = { name: "當月短影音製作", kind: "qtyVideo" };
const qtyVisitTask: ProgressTaskTemplate = { name: "當月到場服務", kind: "qtyVisit" };
const weeklyReportTask = checklist("當月週進度回報");

export const planProgressPrep: ProgressPhaseTemplate = {
  key: "prep",
  numberLabel: "準備期",
  title: "準備期｜贈送，不計入 12 個月",
  focus: "素材蒐集、資料盤點、雙主線初步訪談",
  tasks: [
    checklist("素材蒐集"),
    checklist("品牌與服務資料盤點"),
    checklist("窩牛與 Takara 雙主線初步訪談"),
    checklist("現有帳號與權限盤點"),
    checklist("年度內容方向與執行流程確認"),
  ],
};

export const planProgressMonths: ProgressPhaseTemplate[] = [
  {
    key: "m1",
    numberLabel: "01",
    title: "合作啟動與雙主線盤點",
    focus: "啟動會議、雙主線訪談與第一批選題",
    tasks: [
      checklist("合作啟動會議與年度排程"),
      checklist("窩牛品牌與服務訪談"),
      checklist("Takara 產品與原廠資料盤點"),
      checklist("既有案例與素材整理"),
      checklist("第一批選題確認"),
      qtyVisitTask,
      qtyVideoTask,
      weeklyReportTask,
    ],
  },
  {
    key: "m2",
    numberLabel: "02",
    title: "內容支柱與拍攝流程",
    focus: "雙主線支柱定案、拍攝與發布流程建立",
    tasks: [
      checklist("窩牛內容支柱定案"),
      checklist("Takara 內容支柱定案"),
      checklist("批次拍攝流程建立"),
      checklist("送審與發布流程建立"),
      checklist("素材命名規則建立"),
      qtyVisitTask,
      qtyVideoTask,
      weeklyReportTask,
    ],
  },
  {
    key: "m3",
    numberLabel: "03",
    title: "第一季內容檢核",
    focus: "第一季成果整理與下一季選題調整",
    tasks: [
      checklist("第一季內容成果整理"),
      checklist("窩牛／Takara 題材比例檢核"),
      checklist("高反應主題整理"),
      checklist("下一季選題調整"),
      checklist("第一次季度檢核"),
      qtyVisitTask,
      qtyVideoTask,
      weeklyReportTask,
    ],
  },
  {
    key: "m4",
    numberLabel: "04",
    title: "內容庫穩定產出",
    focus: "案例與工程知識內容穩定產出",
    tasks: [
      checklist("第二季選題庫建立"),
      checklist("案例型內容製作"),
      checklist("工程與空間知識內容製作"),
      checklist("Takara 產品教育內容製作"),
      qtyVisitTask,
      qtyVideoTask,
      weeklyReportTask,
    ],
  },
  {
    key: "m5",
    numberLabel: "05",
    title: "內容轉譯與素材系統",
    focus: "專業語言轉譯與素材分類系統",
    tasks: [
      checklist("客戶常見問題整理"),
      checklist("專業語言轉譯"),
      checklist("展間與產品素材整理"),
      checklist("拍攝素材分類規則"),
      qtyVisitTask,
      qtyVideoTask,
      weeklyReportTask,
    ],
  },
  {
    key: "m6",
    numberLabel: "06",
    title: "半年檢核與內部帶訓啟動",
    focus: "半年成果檢核，內部帶訓正式啟動",
    tasks: [
      checklist("半年內容成果檢核"),
      checklist("第二次季度檢核"),
      checklist("內容資產整理"),
      checklist("內部素材命名與整理帶訓"),
      checklist("選題／腳本模板初步帶訓"),
      qtyVisitTask,
      qtyVideoTask,
      weeklyReportTask,
    ],
  },
  {
    key: "m7",
    numberLabel: "07",
    title: "內部操作微任務",
    focus: "內部人員實作與基礎拍攝帶訓",
    tasks: [
      checklist("內部人員素材整理實作"),
      checklist("選題模板填寫"),
      checklist("發布前檢核流程實作"),
      checklist("固定場景基礎拍攝帶訓"),
      qtyVisitTask,
      qtyVideoTask,
      weeklyReportTask,
    ],
  },
  {
    key: "m8",
    numberLabel: "08",
    title: "簡易製作與流程接手",
    focus: "簡易剪輯帶訓與流程接手測試",
    tasks: [
      checklist("簡易套版剪輯帶訓"),
      checklist("素材交接流程測試"),
      checklist("發布排程維護實作"),
      checklist("內部操作問題整理"),
      qtyVisitTask,
      qtyVideoTask,
      weeklyReportTask,
    ],
  },
  {
    key: "m9",
    numberLabel: "09",
    title: "第三季檢核",
    focus: "第三季檢核與第四季方向確認",
    tasks: [
      checklist("第三次季度檢核"),
      checklist("內部帶訓成熟度檢查"),
      checklist("題材與內容比例調整"),
      checklist("第四季內容方向確認"),
      qtyVisitTask,
      qtyVideoTask,
      weeklyReportTask,
    ],
  },
  {
    key: "m10",
    numberLabel: "10",
    title: "內容系統文件化",
    focus: "選題、素材與流程文件化",
    tasks: [
      checklist("選題庫整理"),
      checklist("素材命名規則整理"),
      checklist("腳本模板整理"),
      checklist("發布流程整理"),
      checklist("教學紀錄整理"),
      qtyVisitTask,
      qtyVideoTask,
      weeklyReportTask,
    ],
  },
  {
    key: "m11",
    numberLabel: "11",
    title: "交接測試與缺口補強",
    focus: "交接流程測試與素材文件缺口補強",
    tasks: [
      checklist("內部操作流程測試"),
      checklist("帳號及權限檢核"),
      checklist("素材庫與文件缺口補強"),
      checklist("未完成項目盤點"),
      checklist("年度資產清單初稿"),
      qtyVisitTask,
      qtyVideoTask,
      weeklyReportTask,
    ],
  },
  {
    key: "m12",
    numberLabel: "12",
    title: "年度總結與正式交接",
    focus: "全年檢核、成果報告與正式交接",
    tasks: [
      checklist("第四次季度檢核"),
      checklist("全年 96 支短影音交付檢核"),
      checklist("全年 24 次到場服務檢核"),
      checklist("年度成果報告"),
      checklist("選題庫、素材規則與發布流程交接"),
      checklist("教學紀錄與內部能力交接"),
      checklist("成品與原始素材交接"),
      checklist("第二年合作或自主營運建議"),
      weeklyReportTask,
    ],
  },
];

export const planProgressMetricTaskNames = {
  quarterlyReviews: ["第一次季度檢核", "第二次季度檢核", "第三次季度檢核", "第四次季度檢核"],
  contentAssetHandover: "選題庫、素材規則與發布流程交接",
  internalCapabilityHandover: "教學紀錄與內部能力交接",
  annualAssetHandover: "成品與原始素材交接",
};

export const planProgressDefaults = {
  status: "提案階段｜尚未啟動",
  updated: "2026-08-06",
  currentPhaseKey: "prep" as string,
  weekly: {
    done: ["專案尚未啟動"],
    wait: ["確認合作與正式啟動日"],
    next: ["簽署契約與安排啟動訪談", "安排準備期資料盤點與雙主線訪談"],
  },
};

// 供三頁或稽核腳本快速抓出所有還沒定案的欄位，逐一顯示待確認狀態。
export function listPendingFields(): Array<{ key: string; note: string }> {
  return Object.entries(planContractTerms)
    .filter(([, field]) => field.status === "pending")
    .map(([key, field]) => ({ key, note: field.note ?? "" }));
}

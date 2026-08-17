import type { Metadata } from "next";
import DocNav from "../components/DocNav";
import {
  planContractTerms,
  planDuration,
  planIdentity,
  planOutcomeDisclaimer,
  planPhases,
  planPricing,
  planPublishingDeliverables,
  planRights,
  planScope,
  planServiceTracks,
  planVolume,
} from "../data/plan";

export const metadata: Metadata = {
  title: "窩牛 × Takara｜服務說明書",
  description: "引弘企業社 × 窩牛 × Takara 年度內容產製暨議題行銷一年期服務說明書。",
};

const woniuTrack = planServiceTracks.find((t) => t.key === "woniu")!;
const takaraTrack = planServiceTracks.find((t) => t.key === "takara")!;
const distributionTrack = planServiceTracks.find((t) => t.key === "contentDistribution")!;

export default function ServicePage() {
  return (
    <main className="docMain">
      <DocNav current="/service" />
      <article className="docArticle">
        <p className="docEyebrow">引弘企業社 × 窩牛 × Takara</p>
        <h1 className="docTitle">{planIdentity.planName.value}｜一年期服務說明書</h1>
        <p className="docSubtitle">
          服務提供：引弘企業社｜正式合作期間：{planDuration.formalPeriod.value}，共 {planDuration.contractMonths.value} 個月｜服務費：每月新臺幣 {planPricing.monthlyFee.value.toLocaleString("zh-Hant-TW")} 元。
          本說明書用客戶角度說明這一年會得到什麼、我們如何執行、為什麼這樣安排；詳細權利義務、修改、終止與保密以雙方簽署之正式契約為準。
        </p>

        <section className="docSection">
          <h2>第一部分｜一年合作總覽</h2>
          <div className="docFieldGrid">
            <div><dt>正式合作期間</dt><dd>{planDuration.formalPeriod.value}，共 {planDuration.contractMonths.value} 個月</dd></div>
            <div><dt>第 0 月預備期</dt><dd>{planDuration.prepDiscussionCount.value} 次主題發想與訪談討論，不另收費</dd></div>
            <div><dt>短影音</dt><dd>{planVolume.annualVideoCount.value} 支／年</dd></div>
            <div><dt>到場服務</dt><dd>{planVolume.annualOnsiteVisitCount.value} 次／年</dd></div>
            <div><dt>季度檢核</dt><dd>每年 {planVolume.quarterlyReviewCount.value} 次</dd></div>
            <div><dt>進度回報</dt><dd>{planVolume.weeklyReporting.value ? "每週" : "依約定頻率"}</dd></div>
            <div><dt>內容主線</dt><dd>窩牛本業／Takara 代理雙主線</dd></div>
          </div>
          <p>這一年以持續產製與市場擴散為核心：完成 96 支短影音、96 組跨平台延伸短文，並於下半年逐月完成 6 篇 SEO／AEO 深度文章。</p>
        </section>

        <section className="docSection">
          <h2>第二部分｜年度內容策略</h2>
          <h3>我們會做什麼</h3>
          <ul>
            <li>盤點品牌、案例、服務、產品及原廠素材。</li>
            <li>建立窩牛本業與 Takara 雙主線內容支柱。</li>
            <li>規劃選題、腳本與批次拍攝安排。</li>
            <li>根據發布結果與週報回饋持續校準方向。</li>
          </ul>
          <h3>你獲得的價值</h3>
          <ul>
            <li>不再臨時想題目，內容有固定產出節奏。</li>
            <li>把專業知識轉成客戶聽得懂的內容。</li>
            <li>建立可以長期累積、不隨人員異動而流失的內容方向。</li>
          </ul>
        </section>

        <section className="docSection">
          <h2>第三部分｜窩牛本業內容線</h2>
          <p>{woniuTrack.summary}</p>
          <h3>我們會做什麼</h3>
          <ul>
            {woniuTrack.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>你獲得的價值</h3>
          <p>把現場判斷與案例經驗說成消費者聽得懂的內容，在諮詢前就建立專業信任，降低溝通與說服成本。</p>
        </section>

        <section className="docSection">
          <h2>第四部分｜Takara 產品教育線</h2>
          <p>{takaraTrack.summary}</p>
          <h3>我們會做什麼</h3>
          <ul>
            {takaraTrack.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>你獲得的價值</h3>
          <p>把規格與原廠優勢轉成消費者能理解的生活情境與購買理由，凸顯與其他品牌的差異。</p>
        </section>

        <section className="docSection">
          <h2>第五部分｜{planVolume.annualVideoCount.value} 支短影音</h2>
          <h3>我們會做什麼</h3>
          <ul>
            <li>企劃、選題與腳本撰寫。</li>
            <li>主要拍攝與主要剪輯。</li>
            <li>字幕與基本後製、品質控管。</li>
            <li>送審與多平台發布協作。</li>
          </ul>
          <p>
            全年共 {planVolume.annualVideoCount.value} 支短影音，原則上維持雙主線穩定發布；實際週次與題材比例依拍攝條件、素材成熟度及季度策略彈性安排，以 {planVolume.annualVideoCount.value} 支為限，不保證每次到場固定支數。單支規格：{planContractTerms.videoDurationSeconds.value}。交付與確認方式：{planContractTerms.acceptanceWindow.value}。
          </p>
          <h3>發布如何執行</h3>
          <p>{planContractTerms.publishingResponsibility.value}。</p>
          <div className="docTableWrap">
            <table className="docTable">
              <thead>
                <tr>
                  <th scope="col">管道</th>
                  <th scope="col">內容型態</th>
                  <th scope="col">交付服務</th>
                </tr>
              </thead>
              <tbody>
                {planPublishingDeliverables.map((item) => (
                  <tr key={item.channel}>
                    <td>{item.channel}</td>
                    <td>{item.contentType}</td>
                    <td>{item.service}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="docSection">
          <h2>第六部分｜{planVolume.annualOnsiteVisitCount.value} 次到場服務</h2>
          <p>
            每次{planVolume.onsiteVisitTypicalDuration.value}、{planVolume.onsiteVisitMaxDuration.value}，可用於拍攝、選題確認、專業訪談及現場內容確認，依實際排程安排，不等於每月固定次數。
          </p>
          <p>{planContractTerms.onsiteReschedulingAndTravel.value}。</p>
        </section>

        <section className="docSection">
          <h2>第七部分｜影音延伸與搜尋議題行銷</h2>
          <p>{distributionTrack.summary}</p>
          <h3>我們會做什麼</h3>
          <ul>
            {distributionTrack.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>你獲得的價值</h3>
          <ul>
            <li>讓每支影片不只停留在影音平台，而能進入網站、社團與 Threads。</li>
            <li>用 6 篇 SEO／AEO 深度文章累積長期搜尋與問答入口。</li>
            <li>全年內容由同一策略脈絡持續推進，不依賴額外聘用內部人員。</li>
          </ul>
        </section>

        <section className="docSection">
          <h2>第八部分｜每週回報與季度檢核</h2>
          <p>每週提供簡短進度：本週完成、累計交付、待確認、阻塞事項、下週安排、需要窩牛決定的事項。</p>
          <p>每 3 個月共同檢核一次，全年共 {planVolume.quarterlyReviewCount.value} 次：年度交付進度、影音與延伸短文發布狀況、窩牛／Takara 題材比例、SEO／AEO 文章進度，並視需要調整下一季方向。</p>
        </section>

        <section className="docSection">
          <h2>第九部分｜年度執行階段</h2>
          <div className="docTableWrap">
            <table className="docTable">
              <thead>
                <tr>
                  <th scope="col">期間</th>
                  <th scope="col">工作重點</th>
                </tr>
              </thead>
              <tbody>
                {planPhases.map((phase) => (
                  <tr key={phase.key}>
                    <td>{phase.months}</td>
                    <td>{phase.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="docSection">
          <h2>第十部分｜合作分工</h2>
          <h3>引弘企業社負責</h3>
          <ul>
            <li>策略、選題、腳本、主要拍攝與剪輯。</li>
            <li>品質控管與影片、網站文章、指定社團文字內容及 Threads 議題的發布協作。</li>
            <li>96 組影音延伸短文連動發布、6 篇 SEO／AEO 深度文章、進度回報與季度檢核。</li>
          </ul>
          <h3>窩牛負責</h3>
          <ul>
            <li>提供正確的工程、產品、原廠、價格、保固與案例資訊。</li>
            <li>安排出鏡者、場地與必要素材。</li>
            <li>取得屋主、工班、員工、設計師等相關人物與案場之公開同意。</li>
            <li>進行內容的最終專業與發布確認。</li>
            <li>自行負責實際諮詢、報價、成交、施工、保固與售後。</li>
          </ul>
        </section>

        <section className="docSection">
          <h2>第十一部分｜方案內與不包含</h2>
          <div className="docFieldGrid">
            <div>
              <dt>方案內</dt>
              <dd>{planScope.included.join("、")}</dd>
            </div>
            <div>
              <dt>不包含（另案報價）</dt>
              <dd>{planScope.excludedSeparateEngagement.join("、")}</dd>
            </div>
          </div>
          <h3>額外服務</h3>
          <p>{planContractTerms.extraServicePricing.value}。</p>
        </section>

        <section className="docSection">
          <h2>第十二部分｜年度內容成果</h2>
          <ul>
            <li>已完成影片成品與原始拍攝素材（歸{planRights.finishedWorkAndRawFootageOwner.value}所有）。</li>
            <li>96 組影音延伸短文與跨平台發布紀錄。</li>
            <li>6 篇 SEO／AEO 深度文章。</li>
            <li>平台帳號與管理權限。</li>
            <li>年度成果報告。</li>
            <li>{planContractTerms.rawAssetStorage.value}。</li>
          </ul>
          <p>{planRights.methodologyAndTemplateLicense.value}；{planContractTerms.ipDisplayRights.value}。</p>
        </section>

        <section className="docSection">
          <h2>第十三部分｜服務費用</h2>
          <div className="docTableWrap">
            <table className="docTable">
              <thead>
                <tr>
                  <th scope="col">合作期間</th>
                  <th scope="col">服務費安排</th>
                  <th scope="col">年度合計</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{planDuration.contractMonths.value} 個月</td>
                  <td>前 11 個月每月 NT${planPricing.monthlyFee.value.toLocaleString("zh-Hant-TW")}；第 12 個月 NT${planPricing.finalMonthFee.value.toLocaleString("zh-Hant-TW")}</td>
                  <td>NT${planPricing.annualFee.value.toLocaleString("zh-Hant-TW")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>{planContractTerms.paymentTerms.value}。第三方軟體、雲端、特殊場地與道具、廣告投放及外縣市交通住宿等費用另計，事前告知並經確認後由窩牛負擔。</p>
        </section>

        <section className="docSection">
          <h2>第十四部分｜期滿與提前終止</h2>
          <p>{planContractTerms.postContractConsulting.value}。</p>
          <p>{planContractTerms.voluntaryTermination.value}。</p>
          <p>{planContractTerms.terminationSettlement.value}。</p>
        </section>

        <section className="docSection">
          <h2>第十五部分｜我們的承諾與成效邊界</h2>
          <ul>
            <li>依約完成年度交付，交付透明可查核。</li>
            <li>每週進度透明，重大事項不延遲告知。</li>
            <li>約定資產全部歸屬窩牛，不保留副本另作他用。</li>
            <li>工程、產品等專業內容由窩牛確認後始對外發布。</li>
            <li>{planOutcomeDisclaimer.value}</li>
          </ul>
        </section>

        <p className="docFooterNote">
          本說明書用於說明合作內容與交付價值，詳細權利義務以雙方簽署之正式契約為準。本頁內容與正式 Google 文件一致，如有出入以雙方簽署之正式契約為準。
        </p>
      </article>
    </main>
  );
}

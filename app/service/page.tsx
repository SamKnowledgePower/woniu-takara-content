import type { Metadata } from "next";
import DocNav from "../components/DocNav";
import {
  planContractTerms,
  planDuration,
  planIdentity,
  planOutcomeDisclaimer,
  planPhases,
  planPricing,
  planRights,
  planScope,
  planServiceTracks,
  planVolume,
} from "../data/plan";

export const metadata: Metadata = {
  title: "窩牛 × Takara｜服務說明書",
  description: "窩牛 × Takara 內容行銷導入暨內部能力建置服務說明書。",
};

export default function ServicePage() {
  return (
    <main className="docMain">
      <DocNav current="/service" />
      <article className="docArticle">
        <p className="docEyebrow">窩牛 × Takara</p>
        <h1 className="docTitle">{planIdentity.planName.value}｜服務說明書</h1>
        <p className="docSubtitle">
          服務提供：引弘企業社｜合作期間：{planDuration.contractMonths.value} 個月｜服務費：每月新臺幣 {planPricing.monthlyFee.value.toLocaleString("zh-Hant-TW")} 元。
          本說明書用一般客戶看得懂的語言解釋合作內容與價值；詳細權利義務、修改、終止與保密以雙方簽署之契約為準。
        </p>

        <section className="docSection">
          <h2>這一年要完成的事</h2>
          <p>
            把窩牛在室內設計、裝修、統包、營造與自地自建的專業，以及 Takara 代理產品的價值，轉成穩定、可持續發布的 B2C 短影音內容。這不只是代拍影片，同時建立選題庫、素材整理規則、發布排程與內部操作能力，讓合作結束後窩牛仍能保有內容資產、帳號權限與持續運作的基礎。
          </p>
          <div className="docFieldGrid">
            <div><dt>短影音</dt><dd>{planVolume.annualVideoCount.value} 支／年</dd></div>
            <div><dt>到場服務</dt><dd>{planVolume.annualOnsiteVisitCount.value} 次／年</dd></div>
            <div><dt>每次到場</dt><dd>{planVolume.onsiteVisitTypicalDuration.value}，{planVolume.onsiteVisitMaxDuration.value}</dd></div>
            <div><dt>進度回報</dt><dd>{planVolume.weeklyReporting.value ? "每週" : "依約定頻率"}</dd></div>
            <div><dt>綜合檢核</dt><dd>每年 {planVolume.quarterlyReviewCount.value} 次</dd></div>
            <div><dt>單支影音規格</dt><dd>{planContractTerms.videoDurationSeconds.value}</dd></div>
          </div>
        </section>

        <section className="docSection">
          <h2>一、年度內容行銷</h2>
          <h3>我們會做什麼</h3>
          <ul>
            <li>盤點既有案例、展間、原廠素材與服務內容。</li>
            <li>規劃窩牛本業與 Takara 的全年 B2C 內容主軸。</li>
            <li>負責內容策略、選題、腳本、主要拍攝、主要剪輯與品質控管。</li>
            <li>採批次拍攝、累積內容庫、分批送審與發布。</li>
            <li>針對我們製作的內容提供發布協作。</li>
          </ul>
          <h3>雙主線內容</h3>
          <ul>
            {planServiceTracks.map((track) => (
              <li key={track.key}>
                <strong>{track.title}</strong>：{track.summary}（{track.items.join("、")}）
              </li>
            ))}
          </ul>
          <h3>交付如何認定</h3>
          <p>{planContractTerms.acceptanceWindow.value}。</p>
        </section>

        <section className="docSection">
          <h2>二、{planVolume.annualOnsiteVisitCount.value} 次到場服務</h2>
          <p>
            每年提供 {planVolume.annualOnsiteVisitCount.value} 次到場，{planVolume.onsiteVisitTypicalDuration.value}、{planVolume.onsiteVisitMaxDuration.value}，可用於拍攝、選題與專業資訊確認、現場交辦、真實任務帶訓。每次產出會依出鏡人員、現場條件與內容難度調整，不保證每次固定支數；全年以 {planVolume.annualVideoCount.value} 支總交付為驗收基準。
          </p>
        </section>

        <section className="docSection">
          <h2>三、內部能力建置</h2>
          <p>
            {planServiceTracks.find((track) => track.key === "internalCapability")?.summary}
          </p>
          <p>帶訓是年度主計畫的子計畫；每次到場仍以完成拍攝與主交付為優先。人員異動時的補訓安排，見下方額外服務說明。</p>
        </section>

        <section className="docSection">
          <h2>四、進度透明</h2>
          <p>每週提供簡短進度：本週完成與累計交付、本週送審／待確認／已發布、素材或拍攝阻塞、下週計畫與需要窩牛決定的事項。</p>
          <p>每 {12 / planVolume.quarterlyReviewCount.value} 個月共同檢核一次，共 {planVolume.quarterlyReviewCount.value} 次：年度交付進度、內容庫與發布狀況、窩牛／Takara 題材比例、內部帶訓與交接成熟度、是否需調整下一季方向。</p>
        </section>

        <section className="docSection">
          <h2>五、年度執行階段</h2>
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
          <h2>六、合作分工</h2>
          <h3>引弘企業社</h3>
          <ul>
            <li>策略、選題、腳本、主要拍攝與剪輯。</li>
            <li>品質控管與製作內容的發布協作。</li>
            <li>進度回報、季度檢核與漸進帶訓。</li>
          </ul>
          <h3>窩牛</h3>
          <ul>
            <li>提供正確的工程、產品、原廠、價格、保固與案例資訊。</li>
            <li>安排出鏡者、場地與必要素材。</li>
            <li>取得屋主、工班、員工、設計師、住戶等拍攝與公開同意。</li>
            <li>進行內容的最終專業與發布確認。</li>
            <li>自行負責諮詢、丈量、報價、成交、工程、保固與售後。</li>
          </ul>
        </section>

        <section className="docSection">
          <h2>七、修改原則</h2>
          <p>{planContractTerms.revisionPolicy.value}。</p>
        </section>

        <section className="docSection">
          <h2>八、不包含與可另案延伸</h2>
          <p>本服務不包含：{planScope.excludedSeparateEngagement.join("、")}。</p>
          <p>第三方素材授權：{planContractTerms.thirdPartyLicensing.value}。如有需要，可依目標另案規劃與報價。</p>
        </section>

        <section className="docSection">
          <h2>九、額外服務</h2>
          <p>{planContractTerms.extraServicePricing.value}。</p>
        </section>

        <section className="docSection">
          <h2>十、權利與資產</h2>
          <ul>
            <li>本案交付影片成品與原始拍攝素材歸{planRights.finishedWorkAndRawFootageOwner.value}所有。</li>
            <li>{planRights.methodologyAndTemplateLicense.value}。</li>
            <li>{planContractTerms.ipDisplayRights.value}。</li>
            <li>窩牛專屬選題庫、素材規則、發布排程與教學紀錄，可供內部持續使用。</li>
          </ul>
        </section>

        <section className="docSection">
          <h2>十一、期滿與後續</h2>
          <p>{planContractTerms.postContractConsulting.value}。</p>
        </section>

        <section className="docSection">
          <h2>十二、成效邊界</h2>
          <p>{planOutcomeDisclaimer.value}</p>
        </section>

        <section className="docSection">
          <h2>服務費用</h2>
          <div className="docTableWrap">
            <table className="docTable">
              <thead>
                <tr>
                  <th scope="col">合作期間</th>
                  <th scope="col">每月服務費</th>
                  <th scope="col">年度合計</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{planDuration.contractMonths.value} 個月</td>
                  <td>NT${planPricing.monthlyFee.value.toLocaleString("zh-Hant-TW")}</td>
                  <td>NT${planPricing.annualFee.value.toLocaleString("zh-Hant-TW")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>{planContractTerms.paymentTerms.value}。</p>
        </section>

        <p className="docFooterNote">
          本說明書用於說明合作內容與價值，詳細權利義務、改期、終止與保密以雙方簽署之正式契約為準。
        </p>
      </article>
    </main>
  );
}

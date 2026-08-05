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
  planVolume,
} from "../data/plan";

export const metadata: Metadata = {
  title: "窩牛 × Takara｜合作契約",
  description: "窩牛 × Takara 內容行銷導入暨內部能力建置合作契約草案。",
};

export default function ContractPage() {
  return (
    <main className="docMain">
      <DocNav current="/contract" />
      <article className="docArticle">
        <p className="docEyebrow">窩牛 × Takara</p>
        <h1 className="docTitle">{planIdentity.planName.value}合作契約</h1>
        <p className="docSubtitle">
          委託方（甲方）：{planIdentity.clientName.value}｜受託方（乙方）：引弘企業社。雙方就{planIdentity.planName.value}之年度合作，約定如下。
          本頁為契約草案，供雙方核對條款；正式簽署以雙方用印或電子簽署之版本為準。
        </p>

        <section className="docSection">
          <h2>第一條　合作目的與基本原則</h2>
          <p>
            本案以 {planDuration.contractMonths.value} 個月為一期，由引弘企業社協助窩牛與 Takara 代理業務建立可持續運作的年度內容行銷系統，並逐步將操作能力移轉予窩牛內部團隊。
          </p>
          <ul>
            <li>甲方（窩牛）負責工程、產品、原廠、價格、保固與案例等專業資訊之正確性，並保有內容之最終發布確認權。</li>
            <li>乙方（引弘企業社）負責市場轉譯、內容策略、選題、腳本、主要拍攝、主要剪輯、品質控管與發布協作。</li>
            <li>雙方以誠信原則合作，任一方對合作內容有疑義時，應先行溝通確認，不逕自變更已確認事項。</li>
          </ul>
        </section>

        <section className="docSection">
          <h2>第二條　合作期間</h2>
          <p>
            自民國＿＿年＿＿月＿＿日起至民國＿＿年＿＿月＿＿日止，共 {planDuration.contractMonths.value} 個月。
            {planDuration.prepPeriodIsComplimentary.value ? "正式期間開始前之準備期為贈送項目，不計入前述合作月數。" : null}
            若因可歸責於任一方之延誤而需調整期程，雙方應以書面或通訊軟體訊息確認。
          </p>
        </section>

        <section className="docSection">
          <h2>第三條　服務內容、影片規格與交付認定</h2>
          <p>
            全年完成 {planVolume.annualVideoCount.value} 支短影音之企劃、腳本、主要拍攝、主要剪輯與品質控管，原則每週窩牛本業與 Takara 代理各一支。
          </p>
          <p>單支影音規格：{planContractTerms.videoDurationSeconds.value}。</p>
          <p>交付認定：{planContractTerms.acceptanceWindow.value}。</p>
          <p>成效聲明：{planOutcomeDisclaimer.value}</p>
        </section>

        <section className="docSection">
          <h2>第四條　到場服務</h2>
          <p>
            全年提供 {planVolume.annualOnsiteVisitCount.value} 次到場，每次{planVolume.onsiteVisitTypicalDuration.value}、{planVolume.onsiteVisitMaxDuration.value}，可用於拍攝、選題與專業資訊確認、現場交辦及真實任務帶訓，採批次拍攝安排。
          </p>
        </section>

        <section className="docSection">
          <h2>第五條　修改原則</h2>
          <p>{planContractTerms.revisionPolicy.value}。</p>
        </section>

        <section className="docSection">
          <h2>第六條　內部能力建置</h2>
          <p>
            帶訓嵌入到場服務執行，不另開獨立工作坊；內容由素材整理與命名、發布準備、選題／腳本模板填寫等真實微任務起步，逐步導入固定場景基礎拍攝與簡易套版剪輯，讓窩牛內部人員可於合作期間漸進接手操作。
          </p>
        </section>

        <section className="docSection">
          <h2>第七條　年度執行階段</h2>
          <div className="docTableWrap">
            <table className="docTable">
              <caption>各階段為工作重點參考，實際進度以進度表為準</caption>
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
          <h2>第八條　服務費用與付款</h2>
          <div className="docFieldGrid">
            <div>
              <dt>每月服務費</dt>
              <dd>{planPricing.currency.value === "TWD" ? "新臺幣" : planPricing.currency.value} {planPricing.monthlyFee.value.toLocaleString("zh-Hant-TW")} 元</dd>
            </div>
            <div>
              <dt>年度合計</dt>
              <dd>{planPricing.currency.value === "TWD" ? "新臺幣" : planPricing.currency.value} {planPricing.annualFee.value.toLocaleString("zh-Hant-TW")} 元</dd>
            </div>
          </div>
          <p>{planContractTerms.paymentTerms.value}。</p>
          <p>上述費用未含第三方軟體、雲端、特殊場地與道具、廣告投放及外縣市交通、住宿等另案成本。</p>
        </section>

        <section className="docSection">
          <h2>第九條　額外服務與加購</h2>
          <p>{planContractTerms.extraServicePricing.value}。</p>
        </section>

        <section className="docSection">
          <h2>第十條　智慧財產權、素材授權與展示</h2>
          <ul>
            <li>本案交付影片成品與原始拍攝素材歸{planRights.finishedWorkAndRawFootageOwner.value}所有。</li>
            <li>{planRights.methodologyAndTemplateLicense.value}。</li>
            <li>{planContractTerms.thirdPartyLicensing.value}。</li>
            <li>{planContractTerms.ipDisplayRights.value}。</li>
          </ul>
        </section>

        <section className="docSection">
          <h2>第十一條　服務邊界</h2>
          <p>本服務包含：{planScope.included.join("、")}。</p>
          <p>不包含（如有需要另案報價）：{planScope.excludedSeparateEngagement.join("、")}。</p>
        </section>

        <section className="docSection">
          <h2>第十二條　期滿、終止與交接</h2>
          <p>{planContractTerms.postContractConsulting.value}。</p>
          <p>{planContractTerms.terminationTerms.value}。</p>
        </section>

        <section className="docSection">
          <h2>第十三條　保密、準據法與契約份數</h2>
          <ul>
            <li>雙方對合作中知悉之未公開營業資訊、案場資料、客戶個資及帳號資訊負保密義務；契約終止後仍有效。</li>
            <li>本契約以中華民國法律為準據法；爭議應先誠信協商，協商不成時以本契約履行地之地方法院為第一審管轄法院。</li>
            <li>本契約一式二份，雙方各執一份為憑；電子簽署或雙方可辨識之電子書面具有同等效力。</li>
          </ul>
        </section>

        <div className="docSignBlock">
          <div>
            <h3>甲方</h3>
            <p>代表人：＿＿＿＿＿＿＿</p>
            <p>地址：＿＿＿＿＿＿＿＿</p>
            <p>電話：＿＿＿＿＿＿＿＿</p>
            <p>簽章：</p>
            <p>簽署日期：民國＿＿年＿＿月＿＿日</p>
          </div>
          <div>
            <h3>乙方</h3>
            <p>引弘企業社</p>
            <p>代表人：楊引弘</p>
            <p>統編：95211217</p>
            <p>地址：花蓮縣吉安鄉南海四街211之一號</p>
            <p>電話：0916-009-363</p>
            <p>簽章：</p>
            <p>簽署日期：民國＿＿年＿＿月＿＿日</p>
          </div>
        </div>

        <p className="docFooterNote">
          {planContractTerms.legalReview.value}
        </p>
      </article>
    </main>
  );
}

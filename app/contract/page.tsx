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
  title: "窩牛 × Takara｜內容行銷導入暨內部能力建置服務契約",
  description: "引弘企業社 × 窩牛 × Takara 內容行銷導入暨內部能力建置服務契約。",
};

const woniuTrack = planServiceTracks.find((t) => t.key === "woniu")!;
const takaraTrack = planServiceTracks.find((t) => t.key === "takara")!;
const internalTrack = planServiceTracks.find((t) => t.key === "internalCapability")!;

export default function ContractPage() {
  return (
    <main className="docMain">
      <DocNav current="/contract" />
      <article className="docArticle">
        <p className="docEyebrow">引弘企業社 × 窩牛 × Takara</p>
        <h1 className="docTitle">內容行銷導入暨內部能力建置服務契約</h1>
        <p className="docSubtitle">
          立契約書人：委託方（甲方）：{planIdentity.clientName.value}；受託方（乙方）：引弘企業社。雙方就{planIdentity.planName.value}
          之年度合作，本誠信原則同意訂立本契約，條款如下。本頁為網站預覽版本，內容與正式簽署 Google 文件一致；正式簽署以雙方用印或電子簽署之版本為準。
        </p>

        <section className="docSection">
          <h2>第一條　合作目的與基本原則</h2>
          <p>
            本案以 {planDuration.contractMonths.value} 個月為一期，由乙方協助甲方旗下窩牛本業與 Takara 代理業務建立可持續運作的年度內容行銷系統，並逐步將操作能力移轉予甲方內部團隊。
          </p>
          <ul>
            <li>甲方負責工程、產品、原廠、價格、保固與案例等專業資訊之正確性，並保有內容之最終發布確認權。</li>
            <li>乙方負責市場轉譯、內容策略、選題、腳本、主要拍攝、主要剪輯、品質控管與約定管道之發布協作。</li>
            <li>雙方以誠信原則合作，任一方對合作內容有疑義時，應先行溝通確認，不逕自變更已確認事項。</li>
          </ul>
        </section>

        <section className="docSection">
          <h2>第二條　服務內容與範疇</h2>
          <p>本服務包含：{planScope.included.join("、")}。</p>
          <p>不包含（如有需要應另案報價）：{planScope.excludedSeparateEngagement.join("、")}。</p>
          <p>服務範疇以本契約及雙方另以書面或可辨識電子紀錄確認之內容為準，任一方不得逕自擴張或限縮。</p>
        </section>

        <section className="docSection">
          <h2>第三條　窩牛本業內容線</h2>
          <p>{woniuTrack.summary}</p>
          <p>內容主軸包含：{woniuTrack.items.join("、")}，並以此建立消費者對窩牛之專業信任。</p>
        </section>

        <section className="docSection">
          <h2>第四條　Takara 內容線</h2>
          <p>{takaraTrack.summary}</p>
          <p>內容主軸包含：{takaraTrack.items.join("、")}。</p>
        </section>

        <section className="docSection">
          <h2>第五條　96 支短影音規格、交付認定與發布協作</h2>
          <p>
            全年完成 {planVolume.annualVideoCount.value} 支短影音之企劃、選題、腳本、主要拍攝、主要剪輯與品質控管。原則上維持窩牛本業與 Takara 代理雙主線穩定發布；實際週次與題材比例依拍攝條件、素材成熟度及季度策略彈性安排，以 {planVolume.annualVideoCount.value} 支為限，不保證每次到場或每月固定產出支數。
          </p>
          <p>單支影音規格：{planContractTerms.videoDurationSeconds.value}。</p>
          <p>交付認定：{planContractTerms.acceptanceWindow.value}。</p>
          <p>發布責任：{planContractTerms.publishingResponsibility.value}。</p>
          <ul>
            {planPublishingDeliverables.map((item) => (
              <li key={item.channel}>{item.channel}：{item.contentType}，{item.service}。</li>
            ))}
          </ul>
          <p>成效聲明：{planOutcomeDisclaimer.value}</p>
        </section>

        <section className="docSection">
          <h2>第六條　24 次到場服務規格</h2>
          <p>
            全年提供 {planVolume.annualOnsiteVisitCount.value} 次到場，每次{planVolume.onsiteVisitTypicalDuration.value}、{planVolume.onsiteVisitMaxDuration.value}，可用於拍攝、選題與專業資訊確認、現場交辦及內部能力帶訓，依雙方實際排程安排，不代表每月固定次數。
          </p>
          <p>{planContractTerms.onsiteReschedulingAndTravel.value}。</p>
        </section>

        <section className="docSection">
          <h2>第七條　內部能力建置及帶訓範圍</h2>
          <p>{internalTrack.summary}</p>
          <p>
            帶訓內容包含{internalTrack.items.join("、")}
            等項目，嵌入到場服務執行，不另開獨立工作坊；帶訓期間仍以完成拍攝與主交付為優先，使甲方內部人員得於合作期間漸進接手操作。
          </p>
        </section>

        <section className="docSection">
          <h2>第八條　準備期與正式服務期間</h2>
          <p>
            自民國＿＿年＿＿月＿＿日起至民國＿＿年＿＿月＿＿日止，共 {planDuration.contractMonths.value} 個月，為正式服務期間。
            {planDuration.prepPeriodIsComplimentary.value ? `正式期間開始前另有 ${planDuration.prepPeriodMonths.value} 個月準備期，為贈送項目，不計入前述合作月數。` : null}
          </p>
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
          <h2>第九條　服務費用及付款方式</h2>
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
        </section>

        <section className="docSection">
          <h2>第十條　第三方費用與支出負擔</h2>
          <p>
            前條費用未含第三方軟體、雲端服務、特殊場地與道具租用、廣告投放，以及外縣市交通、住宿等另案成本；前述支出如有需要，應事前告知並經甲方確認後始得支出，並由甲方負擔。
          </p>
        </section>

        <section className="docSection">
          <h2>第十一條　超出數量及額外服務計費</h2>
          <p>{planContractTerms.extraServicePricing.value}。</p>
        </section>

        <section className="docSection">
          <h2>第十二條　修改、重拍及新增需求認定</h2>
          <p>{planContractTerms.revisionPolicy.value}。</p>
        </section>

        <section className="docSection">
          <h2>第十三條　甲方的資料、場地、出鏡與確認義務</h2>
          <p>{planContractTerms.clientObligations.value}。</p>
        </section>

        <section className="docSection">
          <h2>第十四條　乙方的企劃、製作與保密義務</h2>
          <p>{planContractTerms.vendorObligations.value}。</p>
        </section>

        <section className="docSection">
          <h2>第十五條　發布前確認及專業資訊責任</h2>
          <p>
            內容於發布前應送交甲方確認，{planContractTerms.acceptanceWindow.value}。工程、產品、價格、保固、原廠與案例等專業資訊之正確性，由甲方負責審閱確認；乙方依甲方提供或確認之資訊製作內容，不另就專業資訊內容之正確性負責。
          </p>
          <p>{planContractTerms.publishingResponsibility.value}。</p>
        </section>

        <section className="docSection">
          <h2>第十六條　智慧財產權與平台帳號歸屬</h2>
          <ul>
            <li>本案交付影片成品與原始拍攝素材歸{planRights.finishedWorkAndRawFootageOwner.value}所有。</li>
            <li>{planRights.methodologyAndTemplateLicense.value}。</li>
            <li>平台帳號與管理權限歸窩牛所有；乙方僅依約取得執行發布協作所需之操作權限。</li>
            <li>甲方專屬選題庫、素材規則、發布排程及教學紀錄，可供甲方內部持續使用。</li>
            <li>{planContractTerms.rawAssetStorage.value}。</li>
          </ul>
        </section>

        <section className="docSection">
          <h2>第十七條　日本原廠、案場、人物與客戶素材授權</h2>
          <p>{planContractTerms.thirdPartyLicensing.value}。</p>
        </section>

        <section className="docSection">
          <h2>第十八條　作品集展示權及保密限制</h2>
          <p>{planContractTerms.ipDisplayRights.value}。</p>
        </section>

        <section className="docSection">
          <h2>第十九條　服務暫停與時程順延</h2>
          <p>{planContractTerms.scheduleExtension.value}。</p>
        </section>

        <section className="docSection">
          <h2>第二十條　任意終止</h2>
          <p>{planContractTerms.voluntaryTermination.value}。</p>
        </section>

        <section className="docSection">
          <h2>第二十一條　雙方即時終止權</h2>
          <p>{planContractTerms.immediateTermination.value}。</p>
        </section>

        <section className="docSection">
          <h2>第二十二條　終止後費用結算</h2>
          <p>{planContractTerms.terminationSettlement.value}。</p>
        </section>

        <section className="docSection">
          <h2>第二十三條　終止後帳號、素材與資料移交</h2>
          <p>{planContractTerms.terminationHandover.value}。</p>
        </section>

        <section className="docSection">
          <h2>第二十四條　不可抗力</h2>
          <p>{planContractTerms.forceMajeure.value}。</p>
        </section>

        <section className="docSection">
          <h2>第二十五條　保密義務與個人資料保護</h2>
          <p>{planContractTerms.confidentiality.value}。</p>
        </section>

        <section className="docSection">
          <h2>第二十六條　第三方平台責任限制</h2>
          <p>{planContractTerms.thirdPartyPlatformLiability.value}。</p>
        </section>

        <section className="docSection">
          <h2>第二十七條　契約變更方式</h2>
          <p>{planContractTerms.amendmentProcedure.value}。</p>
        </section>

        <section className="docSection">
          <h2>第二十八條　爭議協商與第一審管轄法院</h2>
          <p>{planContractTerms.disputeResolution.value}。</p>
        </section>

        <section className="docSection">
          <h2>第二十九條　期滿後續</h2>
          <p>{planContractTerms.postContractConsulting.value}。</p>
        </section>

        <section className="docSection">
          <h2>第三十條　一式二份及電子簽署效力</h2>
          <p>本契約一式二份，雙方各執一份為憑；經雙方以電子簽署或雙方可辨識之電子書面確認者，與正本具有同等效力。</p>
        </section>

        <div className="docSignBlock">
          <div>
            <h3>甲方</h3>
            <p>{planIdentity.clientName.value}</p>
            <p>代表人：＿＿＿＿＿＿＿</p>
            <p>統一編號：＿＿＿＿＿＿＿＿</p>
            <p>地址：＿＿＿＿＿＿＿＿</p>
            <p>電話：＿＿＿＿＿＿＿＿</p>
            <p>簽章：</p>
            <p>簽署日期：民國＿＿年＿＿月＿＿日</p>
          </div>
          <div>
            <h3>乙方</h3>
            <p>引弘企業社</p>
            <p>代表人：楊引弘</p>
            <p>統一編號：95211217</p>
            <p>地址：花蓮縣吉安鄉南海四街211之一號</p>
            <p>電話：0916-009-363</p>
            <p>簽章：</p>
            <p>簽署日期：民國＿＿年＿＿月＿＿日</p>
          </div>
        </div>

        <p className="docFooterNote">
          {planContractTerms.legalReview.value}。本頁條款順序與內容與正式 Google 文件一致，如有出入以雙方簽署之正式文件為準。
        </p>
      </article>
    </main>
  );
}

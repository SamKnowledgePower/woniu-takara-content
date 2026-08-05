import type { Metadata } from "next";
import DocNav from "../components/DocNav";
import {
  planContractTerms,
  planIdentity,
  planProgress,
  planVolume,
} from "../data/plan";

export const metadata: Metadata = {
  title: "窩牛 × Takara｜進度表",
  description: "窩牛 × Takara 年度內容行銷進度追蹤表。",
};

export default function ProgressPage() {
  return (
    <main className="docMain">
      <DocNav current="/progress" />
      <article className="docArticle">
        <p className="docEyebrow">窩牛 × Takara</p>
        <h1 className="docTitle">{planIdentity.planName.value}｜進度表</h1>
        <p className="docSubtitle">
          更新頻率：每週更新；每 {planVolume.quarterlyReviewCount.value} 次進行綜合檢核。目前尚無真實產製或到場紀錄，以下為追蹤結構；每完成一支影片、一次到場或一項交接才新增一筆。
        </p>

        <section className="docSection">
          <h2>年度累計儀表板</h2>
          <div className="docTableWrap">
            <table className="docTable">
              <thead>
                <tr>
                  <th scope="col">指標</th>
                  <th scope="col">年度目標</th>
                  <th scope="col">累計</th>
                  <th scope="col">完成率</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>短影音完成送審</td>
                  <td>{planVolume.annualVideoCount.value}</td>
                  <td>{planProgress.videos.length}</td>
                  <td>{Math.round((planProgress.videos.length / planVolume.annualVideoCount.value) * 100)}%</td>
                </tr>
                <tr>
                  <td>到場服務</td>
                  <td>{planVolume.annualOnsiteVisitCount.value}</td>
                  <td>{planProgress.visits.length}</td>
                  <td>{Math.round((planProgress.visits.length / planVolume.annualOnsiteVisitCount.value) * 100)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>交付認定：{planContractTerms.acceptanceWindow.value}。</p>
        </section>

        <section className="docSection">
          <h2>內容交付明細</h2>
          <div className="docTableWrap">
            <table className="docTable docTable--wide">
              <thead>
                <tr>
                  <th scope="col">編號</th>
                  <th scope="col">品牌線</th>
                  <th scope="col">主題</th>
                  <th scope="col">拍攝日</th>
                  <th scope="col">送審日</th>
                  <th scope="col">確認日</th>
                  <th scope="col">發布平台／日期</th>
                  <th scope="col">狀態</th>
                </tr>
              </thead>
              <tbody>
                {planProgress.videos.length === 0 ? (
                  <tr className="docEmptyRow">
                    <td colSpan={8}>尚無紀錄，準備期完成後開始登記</td>
                  </tr>
                ) : (
                  planProgress.videos.map((video) => (
                    <tr key={video.id}>
                      <td>{video.id}</td>
                      <td>{video.track}</td>
                      <td>{video.topic}</td>
                      <td>{video.shootingStatus}</td>
                      <td>{video.scriptStatus}</td>
                      <td>{video.confirmedAt ?? "—"}</td>
                      <td>{video.publishedAt ?? "—"}</td>
                      <td>{video.draftStatus}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="docSection">
          <h2>到場紀錄</h2>
          <div className="docTableWrap">
            <table className="docTable docTable--wide">
              <thead>
                <tr>
                  <th scope="col">次數</th>
                  <th scope="col">日期</th>
                  <th scope="col">時長</th>
                  <th scope="col">拍攝／任務成果</th>
                  <th scope="col">帶訓內容</th>
                  <th scope="col">累計次數</th>
                </tr>
              </thead>
              <tbody>
                {planProgress.visits.length === 0 ? (
                  <tr className="docEmptyRow">
                    <td colSpan={6}>尚無紀錄</td>
                  </tr>
                ) : (
                  planProgress.visits.map((visit) => (
                    <tr key={visit.sequence}>
                      <td>{String(visit.sequence).padStart(2, "0")}</td>
                      <td>{visit.date}</td>
                      <td>{visit.hours} 小時</td>
                      <td>{visit.shootingContent}</td>
                      <td>{visit.trainingContent}</td>
                      <td>{visit.cumulativeCount}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="docSection">
          <h2>本週摘要</h2>
          <div className="docTableWrap">
            <table className="docTable">
              <thead>
                <tr>
                  <th scope="col">週次</th>
                  <th scope="col">摘要</th>
                  <th scope="col">阻塞事項</th>
                </tr>
              </thead>
              <tbody>
                {planProgress.weeklyReports.length === 0 ? (
                  <tr className="docEmptyRow">
                    <td colSpan={3}>尚無週報，合作開始後每週更新</td>
                  </tr>
                ) : (
                  planProgress.weeklyReports.map((report) => (
                    <tr key={report.weekOf}>
                      <td>{report.weekOf}</td>
                      <td>{report.summary}</td>
                      <td>{report.blockers.length ? report.blockers.join("；") : "無"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="docSection">
          <h2>阻塞與風險</h2>
          <div className="docTableWrap">
            <table className="docTable">
              <thead>
                <tr>
                  <th scope="col">問題</th>
                  <th scope="col">責任方</th>
                  <th scope="col">預計解除日期</th>
                  <th scope="col">狀態</th>
                </tr>
              </thead>
              <tbody>
                {planProgress.blockingIssues.length === 0 ? (
                  <tr className="docEmptyRow">
                    <td colSpan={4}>目前無阻塞事項</td>
                  </tr>
                ) : (
                  planProgress.blockingIssues.map((issue, index) => (
                    <tr key={`${issue.description}-${index}`}>
                      <td>{issue.description}</td>
                      <td>{issue.owner}</td>
                      <td>{issue.expectedResolutionDate ?? "—"}</td>
                      <td>{issue.resolvedAt ? "已解除" : "進行中"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="docSection">
          <h2>季度檢核</h2>
          <div className="docTableWrap">
            <table className="docTable">
              <thead>
                <tr>
                  <th scope="col">季度</th>
                  <th scope="col">檢核日期</th>
                  <th scope="col">備註</th>
                </tr>
              </thead>
              <tbody>
                {planProgress.quarterlyReviews.length === 0 ? (
                  <tr className="docEmptyRow">
                    <td colSpan={3}>尚未進行第一次季度檢核</td>
                  </tr>
                ) : (
                  planProgress.quarterlyReviews.map((review) => (
                    <tr key={review.quarter}>
                      <td>Q{review.quarter}</td>
                      <td>{review.reviewDate}</td>
                      <td>{review.notes}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="docSection">
          <h2>交接資產</h2>
          <div className="docTableWrap">
            <table className="docTable">
              <thead>
                <tr>
                  <th scope="col">資產</th>
                  <th scope="col">版本</th>
                  <th scope="col">簽收人</th>
                  <th scope="col">簽收日期</th>
                </tr>
              </thead>
              <tbody>
                {planProgress.handoverAssets.length === 0 ? (
                  <tr className="docEmptyRow">
                    <td colSpan={4}>選題庫、素材規則、發布流程、教學紀錄尚未產出</td>
                  </tr>
                ) : (
                  planProgress.handoverAssets.map((asset) => (
                    <tr key={asset.name}>
                      <td>{asset.name}</td>
                      <td>{asset.version}</td>
                      <td>{asset.signedOffBy ?? "—"}</td>
                      <td>{asset.signedOffAt ?? "—"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="docSection">
          <h2>付款紀錄</h2>
          <p>{planContractTerms.paymentTerms.value}。</p>
          <div className="docTableWrap">
            <table className="docTable">
              <thead>
                <tr>
                  <th scope="col">期間</th>
                  <th scope="col">應付日</th>
                  <th scope="col">金額</th>
                  <th scope="col">狀態</th>
                </tr>
              </thead>
              <tbody>
                {planProgress.payments.length === 0 ? (
                  <tr className="docEmptyRow">
                    <td colSpan={4}>尚無請款或收款紀錄</td>
                  </tr>
                ) : (
                  planProgress.payments.map((payment) => (
                    <tr key={payment.period}>
                      <td>{payment.period}</td>
                      <td>{payment.dueDate ?? "—"}</td>
                      <td>NT${payment.amount.toLocaleString("zh-Hant-TW")}</td>
                      <td>{payment.status}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="docSection">
          <h2>專案結案檢核</h2>
          <ul className="docChecklist">
            <li><span className="docCheckbox" aria-hidden="true" />{planVolume.annualVideoCount.value} 支內容完成送審</li>
            <li><span className="docCheckbox" aria-hidden="true" />{planVolume.annualOnsiteVisitCount.value} 次到場紀錄完成</li>
            <li><span className="docCheckbox" aria-hidden="true" />成品與原始拍攝素材存放至窩牛指定系統</li>
            <li><span className="docCheckbox" aria-hidden="true" />專屬選題庫、素材規則與發布排程移交</li>
            <li><span className="docCheckbox" aria-hidden="true" />教學紀錄與合理一次性上手說明完成</li>
            <li><span className="docCheckbox" aria-hidden="true" />未完成、暫緩發布或新增需求另列清單</li>
            <li><span className="docCheckbox" aria-hidden="true" />雙方確認後續顧問或延伸專案需求</li>
          </ul>
        </section>

        <p className="docFooterNote">
          本表所有數字以送交確認即計入交付為原則，待確認、暫緩發布或尚未發布不影響交付計數；欄位定義與契約、服務說明書一致，如有出入以契約為準。
        </p>
      </article>
    </main>
  );
}

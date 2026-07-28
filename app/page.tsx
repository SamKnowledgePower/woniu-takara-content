export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="窩牛首頁">
          <span className="mark">窩</span>
          <span>窩牛 × Takara</span>
        </a>
        <nav aria-label="主選單">
          <a href="#service">合作內容</a>
          <a href="#process">年度節奏</a>
          <a href="#scope">合作邊界</a>
        </nav>
        <a className="navCta" href="#contact">啟動合作</a>
      </header>

      <section id="top" className="hero">
        <div className="heroCopy">
          <p className="eyebrow">CONTENT SYSTEM · 12 MONTHS</p>
          <h1>把空間專業，<br />變成持續被看見的內容資產。</h1>
          <p className="lead">
            為窩牛室內設計、裝修與 Takara 代理業務建立一套能長期運作的 B2C
            內容系統：策略、拍攝、製作、發布協作，以及內部能力建置。
          </p>
          <div className="heroActions">
            <a className="primary" href="#service">查看年度方案</a>
            <a className="textLink" href="#promise">我們如何合作 <span>↘</span></a>
          </div>
        </div>
        <div className="heroVisual" aria-label="空間材質與內容節奏示意">
          <div className="material materialA" />
          <div className="material materialB" />
          <div className="heroCard">
            <span>YEARLY OUTPUT</span>
            <strong>96</strong>
            <p>支短影音</p>
          </div>
          <div className="lineNote">DESIGN · BUILD · LIVING</div>
        </div>
      </section>

      <section className="manifesto" id="promise">
        <p>好的空間需要被理解，好的產品需要被看見。</p>
        <h2>我們不只替你拍片，而是把案例、展間、原廠素材與日常專業，整理成一套窩牛能帶走、能延續的內容方法。</h2>
      </section>

      <section className="stats" aria-label="年度方案數據">
        <div><strong>12</strong><span>個月合作</span></div>
        <div><strong>96</strong><span>支年度短影音</span></div>
        <div><strong>24</strong><span>次到場服務</span></div>
        <div><strong>4</strong><span>次季度檢核</span></div>
      </section>

      <section id="service" className="section">
        <div className="sectionHead">
          <p className="eyebrow">THE SERVICE</p>
          <h2>雙主線內容，<br />同一套成長系統。</h2>
          <p>原則上每週一支窩牛本業內容、一支 Takara 內容。批次拍攝、累積內容庫，再依確認節奏分批發布。</p>
        </div>
        <div className="serviceGrid">
          <article className="serviceCard dark">
            <span>01</span>
            <h3>窩牛本業</h3>
            <p>室內設計、裝修、統包工程、營造、自地自建。把現場判斷與案例經驗，說成消費者聽得懂的內容。</p>
            <ul><li>案例拆解</li><li>空間決策</li><li>工程知識</li><li>信任建立</li></ul>
          </article>
          <article className="serviceCard warm">
            <span>02</span>
            <h3>Takara 代理</h3>
            <p>從產品規格走向真實生活情境，讓原廠優勢、收納、材質與使用價值，成為可感受的購買理由。</p>
            <ul><li>產品教育</li><li>展間體驗</li><li>情境應用</li><li>品牌差異</li></ul>
          </article>
          <article className="serviceCard outline">
            <span>03</span>
            <h3>內部能力</h3>
            <p>從素材命名、模板填寫與發布檢核開始，逐步帶入固定場景拍攝與簡易套版剪輯。</p>
            <ul><li>真實微任務</li><li>既有教材</li><li>權限盤點</li><li>漸進交接</li></ul>
          </article>
        </div>
      </section>

      <section id="process" className="process section">
        <div className="sectionHead">
          <p className="eyebrow">12-MONTH RHYTHM</p>
          <h2>每週看得見進度，<br />每季調整一次方向。</h2>
        </div>
        <div className="timeline">
          <div><span>00</span><h3>準備期</h3><p>素材蒐集、資料盤點、理解品牌與內容定位。此階段為贈送，不計入 12 個月。</p></div>
          <div><span>01–03</span><h3>建立節奏</h3><p>確認雙主線題材、批次拍攝方式、送審與發布流程，建立第一批內容庫。</p></div>
          <div><span>04–09</span><h3>穩定產出</h3><p>持續拍攝與製作，依週進度追蹤交付；用真實任務帶入內部操作能力。</p></div>
          <div><span>10–12</span><h3>整理交接</h3><p>完成年度量、補齊資產與教學紀錄，確認後續顧問或延伸合作方向。</p></div>
        </div>
      </section>

      <section className="deliver">
        <div>
          <p className="eyebrow">WHAT YOU GET</p>
          <h2>交付的不只是影片。</h2>
        </div>
        <div className="deliverList">
          {[
            ["年度內容策略", "窩牛與 Takara 的 B2C 內容主軸、選題與腳本。"],
            ["96 支短影音", "主要拍攝、剪輯、品質控管與發布協作。"],
            ["24 次到場", "每次約 1 小時，最長不超過 2 小時。"],
            ["內容資產系統", "專屬選題庫、素材規則、SOP 與發布排程。"],
            ["透明進度", "每週回報、季度檢核與阻塞事項追蹤。"],
            ["漸進式帶訓", "讓內部人員從可完成的小任務開始接手。"],
          ].map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="scope" className="scope section">
        <div className="scopePanel">
          <p className="eyebrow">CLEAR BOUNDARIES</p>
          <h2>清楚的邊界，<br />讓合作更長久。</h2>
          <p>以完成製作並送交確認作為交付認定。窩牛保有最終發布確認權；觸及、詢價與成交受市場、平台與後續服務影響，不作特定數字保證。</p>
        </div>
        <div className="scopeList">
          <div><strong>包含</strong><p>年度策略、96 支短影音、24 次到場、主要製作、發布協作、進度檢核與帶訓。</p></div>
          <div><strong>另案</strong><p>廣告、網站、長影片、課程、B2B、新品牌線、重大活動與高規格專案影片。</p></div>
          <div><strong>權利</strong><p>成品與原始拍攝素材歸窩牛；通用方法論與模板授權內部使用，不得轉售。</p></div>
        </div>
      </section>

      <section id="contact" className="pricing">
        <div>
          <p className="eyebrow">ANNUAL PARTNERSHIP</p>
          <h2>一年，把內容從臨時任務，變成日常能力。</h2>
        </div>
        <div className="priceCard">
          <p>12 個月合作</p>
          <div><span>NT$</span><strong>32,000</strong><em>/ 月</em></div>
          <p className="annual">年度合計 NT$384,000</p>
          <a href="mailto:blessingstable@gmail.com">開始討論合作</a>
          <small>詳細權利義務以雙方簽署之正式契約為準。</small>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="mark">窩</span><span>窩牛 × Takara</span></div>
        <p>內容行銷導入暨內部能力建置</p>
        <span>© 2026 引弘企業社</span>
      </footer>
    </main>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="窩牛首頁">
          <span className="mark">窩</span>
          <span>窩牛 × Takara</span>
        </a>
        <nav aria-label="主選單">
          <a href="#about">關於引弘</a>
          <a href="#method">方法論</a>
          <a href="#service">合作內容</a>
        </nav>
        <a className="navCta" href="#contact">啟動合作</a>
      </header>

      <section id="top" className="hero">
        <div className="heroCopy">
          <p className="eyebrow">引弘企業社年度合作提案 · 12 MONTHS</p>
          <h1>把空間專業，<br />變成持續被看見的內容資產。</h1>
          <p className="lead">
            為窩牛室內設計、裝修與 Takara 代理業務建立一套能長期運作的 B2C
            內容系統：策略、拍攝、製作、發布協作，以及內部能力建置。
          </p>
          <div className="heroActions">
            <a className="primary" href="#service">查看年度方案</a>
            <a className="textLink" href="#promise">我們如何合作 <span>↘</span></a>
          </div>
          <div className="proposer">
            <span className="proposerMark">楊</span>
            <div>
              <strong>楊引弘｜引弘企業社</strong>
              <small>內容策略、短影音製作與品牌營運顧問</small>
            </div>
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

      <section id="about" className="aboutProposal">
        <div className="aboutIntro">
          <div>
            <p className="eyebrow">WHO I AM</p>
            <p className="chapterNo">01</p>
          </div>
          <div>
            <h2>我不只交付影片，<br />而是協助業主建立能持續運作的內容能力。</h2>
            <p>
              我是楊引弘。深耕創業與內容變現主題超過 20 年，近年以顧問與代操身分，
              協助農業、餐飲、財務諮詢、烘焙教育與知識品牌，把原本只存在老闆腦中的專業，
              轉譯為一般消費者願意理解、記住與分享的內容。
            </p>
            <p>
              我能同時處理策略、訪談、腳本、拍攝、剪輯、發布與流程建置。對窩牛來說，
              這代表不需要分別管理多個供應商，也不必把每一支影片重新從零說明；
              我會先理解工程與產品，再把內容做成可累積、可檢核、可交接的品牌資產。
            </p>
          </div>
        </div>
        <div className="credibilityStats" aria-label="引弘企業社內容實績">
          <article><strong>152萬+</strong><span>展示作品累計觀看</span></article>
          <article><strong>57萬</strong><span>單支最高觀看</span></article>
          <article><strong>2萬</strong><span>YouTube 頻道訂閱</span></article>
          <article><strong>3+</strong><span>年顧問與代操經驗</span></article>
        </div>
      </section>

      <section className="proof section">
        <div className="sectionHead">
          <p className="eyebrow">PROOF, NOT PROMISES</p>
          <h2>先理解產業，<br />再決定內容怎麼說。</h2>
          <p>我不靠套版題材複製流量。每個品牌都從真實服務、客戶疑問與可長期累積的內容主軸開始。</p>
        </div>
        <div className="proofGrid">
          <article className="proofFeature">
            <span>CASE 01</span>
            <h3>和豐西瓜<br />產地全紀錄</h3>
            <p>以 DAY 1 到 DAY 100 的田間紀實，將種植、管理、採收與出貨轉成觀眾持續追看的連載內容。</p>
            <strong>一半以上作品破萬觀看，25% 作品突破 5 萬</strong>
          </article>
          <div className="proofNotes">
            <article>
              <span>跨產業轉譯</span>
              <h3>把專業語言，改寫成客戶願意理解的決策內容。</h3>
              <p>曾處理農業紀錄、品牌人物、餐飲、財務、烘焙教育與知識內容，不以單一產業模板限制品牌。</p>
            </article>
            <article>
              <span>完整執行</span>
              <h3>從訪談到發布，同一套判斷貫穿整個流程。</h3>
              <p>策略、腳本、拍攝、剪輯、發布與檢核由同一窗口統籌，降低溝通失真與重複交辦。</p>
            </article>
            <article>
              <span>資產留下</span>
              <h3>合作結束後，內容與方法仍留在企業內部。</h3>
              <p>同步建立選題庫、素材規則、發布排程與教學紀錄，讓成果不只存在社群動態裡。</p>
            </article>
          </div>
        </div>
      </section>

      <section id="method" className="methodology section">
        <div className="methodIntro">
          <p className="eyebrow">MY METHODOLOGY</p>
          <h2>一個內容引擎，<br />推進兩條品牌路線。</h2>
          <p>窩牛需要建立空間服務的信任；Takara 需要讓產品規格進入生活情境。兩條路線目的不同，但共享同一套素材、製作與檢核系統。</p>
        </div>
        <div className="methodTracks">
          <article>
            <header><span>TRACK A</span><strong>窩牛專業信任線</strong></header>
            <ol>
              <li><span>01</span>案場與服務訪談</li>
              <li><span>02</span>拆解消費者決策問題</li>
              <li><span>03</span>轉成案例與知識內容</li>
              <li><span>04</span>累積設計與工程信任</li>
            </ol>
            <p>讓客戶在諮詢之前，先理解窩牛如何判斷與解決問題。</p>
          </article>
          <div className="methodCore">
            <span>SHARED ENGINE</span>
            <strong>訪談 → 選題 → 腳本<br />拍攝 → 製作 → 發布<br />週回報 → 季檢核</strong>
          </div>
          <article>
            <header><span>TRACK B</span><strong>Takara 產品教育線</strong></header>
            <ol>
              <li><span>01</span>原廠與展間素材盤點</li>
              <li><span>02</span>把規格放入生活情境</li>
              <li><span>03</span>說明差異與選擇理由</li>
              <li><span>04</span>累積代理品牌認知</li>
            </ol>
            <p>讓產品不只被看見，而是被理解為空間生活的一部分。</p>
          </article>
        </div>
        <div className="methodSequence" aria-label="內容工作流程">
          {["採集真實專業", "轉譯客戶語言", "批次製作內容", "確認後發布", "數據與回饋校準", "整理交接資產"].map((item, index) => (
            <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>
          ))}
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

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
          <p className="eyebrow">窩牛 × Takara｜內容與商業成長</p>
          <h1>不是追一波聲量，<br />而是建立長期內容資產。</h1>
          <p className="lead">
            把窩牛累積的空間經驗與 Takara 的產品價值，整理成消費者看得懂、品牌能持續使用的內容。
            從理解專業、建立策略到穩定產製，這份提案的目標不是「做完 96 支影片」，而是建立一套能長期運作的內容系統。
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
            <span>年度產製</span>
            <strong>96</strong>
            <p>支短影音</p>
          </div>
          <div className="lineNote">設計｜建造｜生活</div>
        </div>
      </section>

      <section className="positioning section">
        <div className="sectionHead">
          <p className="eyebrow">我們要共同建立的成果</p>
          <h2>這次合作，<br />真正要留下什麼？</h2>
          <p>產量是履約基準，但不是最終目的。真正重要的是讓品牌知道要說什麼、能穩定說下去，並把每次發布轉成可持續使用的企業資產。</p>
        </div>
        <div className="positionCards">
          <article className="positionPrimary">
            <span>01｜策略</span>
            <h3>先找出值得被看見的核心</h3>
            <p>從案場、服務流程、產品、客戶問題與原廠資料中，整理窩牛與 Takara 各自最有價值的內容主軸。</p>
          </article>
          <article>
            <span>02｜內容</span>
            <h3>把專業轉成客戶看得懂的內容</h3>
            <p>不只介紹規格與案例，而是回答消費者在裝修、選材、使用與決策過程中真正關心的問題。</p>
          </article>
          <article>
            <span>03｜資產</span>
            <h3>讓每次產製回到品牌資產</h3>
            <p>影片之外，同步留下選題庫、素材規則、發布節奏、教學紀錄與可由內部接手的操作方法。</p>
          </article>
        </div>
      </section>

      <section id="about" className="aboutProposal">
        <div className="aboutIntro">
          <div>
            <p className="eyebrow">關於我</p>
            <p className="chapterNo">01</p>
          </div>
          <figure className="profileFigure">
            <img src="yang-yin-hong.jpg" alt="楊引弘" />
            <figcaption>楊引弘<br /><span>引弘企業社</span></figcaption>
          </figure>
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
          <article><strong>169萬+</strong><span>展示作品累計觀看</span></article>
          <article><strong>69萬</strong><span>單支最高觀看</span></article>
          <article><strong>2萬</strong><span>YouTube 頻道訂閱</span></article>
          <article><strong>3+</strong><span>年顧問與代操經驗</span></article>
        </div>
        <div className="studentResults">
          <div className="studentResultsIntro">
            <p className="eyebrow">陪跑與教學成果</p>
            <h2>從專業整理、品牌建立，<br />到真正產生商業成果。</h2>
            <p>除了代操，我也長期陪跑不同領域的專業者，把經驗整理成能被市場理解的品牌、服務與知識產品。這些成果證明，我的工作不只停在曝光，而是能陪企業走過定位、內容與轉化的完整過程。</p>
          </div>
          <div className="testimonyGrid">
            {[
              ["student-result-1.jpg", "預防醫學諮詢品牌成果"],
              ["student-result-2.jpg", "個人財務顧問品牌成果"],
              ["student-result-3.jpg", "形象美學品牌成果"],
              ["student-result-4.jpg", "酸種麵包教育品牌成果"],
              ["student-result-5.jpg", "美業溝通課品牌成果"],
              ["student-result-6.jpg", "投資教學品牌成果"],
              ["student-result-7.jpg", "個人知識品牌成果"],
            ].map(([src, alt]) => (
              <figure key={src}><img src={src} alt={alt} loading="lazy" /></figure>
            ))}
          </div>
        </div>
      </section>

      <section className="evidenceShowcase section">
        <div className="sectionHead">
          <p className="eyebrow">作品與實績證據</p>
          <h2>全部作品，<br />全部觀看數。</h2>
          <p>完整展示目前資料庫中的 17 件內容作品，涵蓋農業品牌、烘焙品牌與知識內容。觀看數為最近一次確認紀錄，並會隨平台持續累積。</p>
        </div>
        <div className="workGallery">
          {[
            ["work-69w.png", "69萬", "和豐會客室｜新生代盤商"],
            ["work-braised-pork.jpg", "28萬", "商用滷肉飯配方知識內容"],
            ["work-26w.png", "26萬", "西瓜蓋章師｜陳師傅"],
            ["work-9w.png", "9.1萬", "第 43 天｜西瓜期中考"],
            ["work-8w.png", "8.2萬", "第 44 天｜西瓜博士團"],
            ["work-day45.png", "6萬", "第 45 天｜沉浸式留瓜教學"],
            ["work-milkfish.jpg", "5.8萬", "台南虱目魚知識內容"],
            ["work-tour-bus.jpg", "5.1萬", "直播帶貨始祖｜遊覽車工商"],
            ["work-score.png", "2.7萬", "新生代盤商給西瓜幾分？"],
            ["work-0to100.png", "2.4萬", "西瓜 0 到 100 天"],
            ["work-second-gen.png", "2.2萬", "農二代沒這麼好當"],
            ["work-family.png", "1.9萬", "一家人的西瓜見面會"],
            ["work-shoes.png", "1.2萬", "鞋子長保如新的秘方"],
            ["work-bakery-intro.jpg", "4,606", "酸麵包入門款"],
            ["work-bakery-testimonial.jpg", "4,452", "酸麵包客戶見證"],
            ["work-bakery-natural.jpg", "3,124", "吃最天然的食物"],
            ["work-bakery-health.jpg", "1,822", "好食物與健康"],
          ].map(([src, views, title]) => (
            <figure key={src}>
              <img src={src} alt={`${title}，觀看 ${views}`} loading="lazy" />
              <figcaption><strong>{views}</strong><span>{title}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="caseEvidence" aria-labelledby="case-evidence-title">
        <div className="caseEvidenceIntro">
          <div>
            <p className="eyebrow">單一案例｜90 天實績</p>
            <h2 id="case-evidence-title">不是只展示作品，<br />也展示結果。</h2>
          </div>
          <p>以下為單一實際專案的公開後台紀錄。它不是一套只能複製到特定產業的題材公式，而是方法經過品牌理解、專業轉譯、持續發布與數據校準後，所留下的可驗證成果。</p>
        </div>
        <div className="caseEvidenceStats" aria-label="單一案例 90 天成果摘要">
          <div><strong>90</strong><span>天實際執行</span></div>
          <div><strong>138萬+</strong><span>總瀏覽次數</span></div>
          <div><strong>73萬+</strong><span>觀看超過 3 秒</span></div>
          <div><strong>496天</strong><span>累積觀看時間</span></div>
        </div>
        <figure className="caseEvidenceBanner">
          <img
            src="evidence-overview.png"
            alt="單一內容專案過去 90 天的 Facebook 後台成效截圖，顯示 138 萬次瀏覽及 496 天觀看時間"
            loading="lazy"
          />
          <figcaption>實際平台後台截圖｜統計區間：90 天</figcaption>
        </figure>
      </section>

      <section id="method" className="methodology section">
        <div className="methodIntro">
          <p className="eyebrow">我的方法論</p>
          <h2>一個內容引擎，<br />推進兩條品牌路線。</h2>
          <p>成果不是來自套用某一個成功案例，而是來自一套可以跨產業重複使用的方法：先理解真實專業，再轉譯成受眾問題，以持續產製與數據回饋校準方向。</p>
        </div>
        <div className="methodPrinciples">
          <article><span>01｜診斷</span><h3>先理解產業，不複製題材</h3><p>盤點品牌、客戶、服務、產品與現有素材，找出真正值得長期溝通的內容核心。</p></article>
          <article><span>02｜轉譯</span><h3>把專業轉成客戶問題</h3><p>將業內語言改寫為消費者會遇到的情境、疑問與決策，讓內容與業務建立關係。</p></article>
          <article><span>03｜系列化</span><h3>用系列累積，而非追單點爆量</h3><p>建立內容支柱與可連載題型，讓一次拍攝能形成內容庫，品牌也能持續被辨識。</p></article>
          <article><span>04｜執行</span><h3>同一套判斷貫穿製作</h3><p>策略、腳本、拍攝、剪輯與發布由同一脈絡推進，避免每個環節各自解讀品牌。</p></article>
          <article><span>05｜校準</span><h3>用發布結果校準下一輪</h3><p>每週檢查進度、每季檢視題材與發布狀況；數據是修正依據，不是空泛的成效承諾。</p></article>
          <article><span>06｜交接</span><h3>把方法留在企業內部</h3><p>同步整理選題庫、素材規則、排程與教學紀錄，讓合作成果能被接手與延續。</p></article>
        </div>
        <div className="methodTracks">
          <article>
            <header><span>路線一</span><strong>窩牛專業信任線</strong></header>
            <ol>
              <li><span>01</span>案場與服務訪談</li>
              <li><span>02</span>拆解消費者決策問題</li>
              <li><span>03</span>轉成案例與知識內容</li>
              <li><span>04</span>累積設計與工程信任</li>
            </ol>
            <p>讓客戶在諮詢之前，先理解窩牛如何判斷與解決問題。</p>
          </article>
          <div className="methodCore">
            <span>共用內容引擎</span>
            <strong>訪談 → 選題 → 腳本<br />拍攝 → 製作 → 發布<br />週回報 → 季檢核</strong>
          </div>
          <article>
            <header><span>路線二</span><strong>Takara 產品教育線</strong></header>
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

      <section className="proposalBridge">
        <p className="eyebrow">從既有能力到本次方案</p>
        <h2>因此，接下來不是一份<br />從零拼湊的行銷清單。</h2>
        <p>而是把上述策略、轉譯、製作與資產化方法，放進窩牛與 Takara 的真實業務情境，形成一套一年期、可追蹤、可調整、也能逐步交接的合作方案。</p>
        <a href="#service">進入年度合作方案 <span>↓</span></a>
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
          <p className="eyebrow">合作內容</p>
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
          <p className="eyebrow">十二個月執行節奏</p>
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
          <p className="eyebrow">實際交付內容</p>
          <h2>交付的不只是影片。</h2>
        </div>
        <div className="deliverList">
          {[
            ["年度內容策略", "窩牛與 Takara 的消費市場內容主軸、選題與腳本。"],
            ["96 支短影音", "主要拍攝、剪輯、品質控管與發布協作。"],
            ["24 次到場", "每次約 1 小時，最長不超過 2 小時。"],
            ["內容資產系統", "專屬選題庫、素材規則、標準作業流程與發布排程。"],
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
          <p className="eyebrow">清楚的合作邊界</p>
          <h2>清楚的邊界，<br />讓合作更長久。</h2>
          <p>以完成製作並送交確認作為交付認定。窩牛保有最終發布確認權；觸及、詢價與成交受市場、平台與後續服務影響，不作特定數字保證。</p>
        </div>
        <div className="scopeList">
          <div><strong>包含</strong><p>年度策略、96 支短影音、24 次到場、主要製作、發布協作、進度檢核與帶訓。</p></div>
          <div><strong>另案</strong><p>廣告、網站、長影片、課程、企業對企業業務、新品牌線、重大活動與高規格專案影片。</p></div>
          <div><strong>權利</strong><p>成品與原始拍攝素材歸窩牛；通用方法論與模板授權內部使用，不得轉售。</p></div>
        </div>
      </section>

      <section id="contact" className="pricing">
        <div>
          <p className="eyebrow">年度合作方案</p>
          <h2>一年，把內容從臨時任務，變成日常能力。</h2>
        </div>
        <div className="priceCard">
          <p>12 個月合作</p>
          <div><span>新台幣</span><strong>32,000</strong><em>/ 月</em></div>
          <p className="annual">年度合計新台幣 384,000 元</p>
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

import Link from "next/link";
import ResourceCards from "./components/ResourceCards";
import { planPhases, planPricing, planPublishingDeliverables, planVolume } from "./data/plan";

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="窩牛首頁">
          <span className="brandWord">窩牛 × Takara</span>
          <small>年度內容合作提案</small>
        </a>
        <nav aria-label="主選單">
          <a href="#about">關於我</a>
          <a href="#method">方法論</a>
          <a href="#works">作品實績</a>
          <a href="#service">合作內容</a>
          <a href="#documents">方案文件</a>
        </nav>
        <a className="navCta" href="#contact">討論合作</a>
      </header>

      <section id="top" className="hero">
        <img
          className="heroArtwork"
          src="hero-material-v2.jpg"
          alt="窩牛 × Takara 年度內容合作提案，深色木質、石材與建築圖面構成的主視覺"
          width="1731"
          height="909"
          decoding="async"
          fetchPriority="high"
        />
        <div className="heroControls">
          <a className="primary" href="#about">認識提案者</a>
          <a className="textLink" href="#service">查看年度方案 <span>↓</span></a>
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
            <p>對外，觀察同業與國內外對標帳號操作議題的策略；對內，從案場、服務流程、產品、客戶問題與原廠資料中，整理窩牛與 Takara 各自最有價值的內容主軸，並發展品牌 IP 規劃書與內容策略規劃書。</p>
          </article>
          <article>
            <span>02｜內容</span>
            <h3>把專業轉成客戶看得懂的內容</h3>
            <p>不單單介紹規格與案例，更進一步回答消費者在裝修、選材、使用與決策過程中真正關心的問題，並破除常見迷思。</p>
          </article>
          <article>
            <span>03｜內容資產建構</span>
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
            <h2>我協助的<br />遠超過影片企劃與製作。<br />最重要的<br />協助業主建立能<span className="wine">持續運作的內容能力</span>。</h2>
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
          <article><strong>176.9萬+</strong><span>展示作品累計觀看</span></article>
          <article><strong>72.8萬</strong><span>單支最高觀看</span></article>
          <article><strong>2萬</strong><span>YouTube 頻道訂閱</span></article>
          <article><strong>3+</strong><span>年顧問與代操經驗</span></article>
        </div>
        <div className="studentResults">
          <div className="studentResultsIntro">
            <p className="eyebrow">陪跑與教學成果</p>
            <h2>從專業整理<br />品牌建立<br />到真正產生<br /><span className="businessOutcome wine">商業成果</span></h2>
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
              <figure key={src}><img src={src} alt={alt} loading="lazy" decoding="async" /></figure>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="evidenceShowcase section">
        <div className="sectionHead">
          <p className="eyebrow">作品與實績證據</p>
          <h2>內容行銷，<br />最難的是<span className="wine">持續</span>創造好流量。</h2>
          <p>完整展示目前資料庫中的 17 件內容作品，涵蓋農業品牌、烘焙品牌與知識內容。觀看數為最近一次確認紀錄，並會隨平台持續累積。</p>
        </div>
        <div className="workGallery">
          {[
            { src: "work-69w.png", views: "749,440", title: "和豐會客室｜新生代盤商", videos: ["https://www.facebook.com/share/v/1Ui7kpMYDE/"] },
            { src: "https://i.ytimg.com/vi/S1kKuAUq-lQ/maxresdefault.jpg", views: "291,085", title: "商用滷肉飯配方知識內容", videos: ["https://youtu.be/S1kKuAUq-lQ"] },
            { src: "work-26w.png", views: "329,622", title: "西瓜蓋章師｜陳師傅", videos: ["https://www.facebook.com/reel/1247933740580920"] },
            { src: "work-9w.png", views: "94,396", title: "第 43 天｜西瓜期中考", videos: ["https://www.facebook.com/reel/1316874006994118"] },
            { src: "work-8w.png", views: "84,304", title: "第 44 天｜西瓜博士團", videos: ["https://www.facebook.com/reel/985560837209761"] },
            { src: "work-day45.png", views: "60,779", title: "第 45 天｜沉浸式留瓜教學", videos: ["https://www.facebook.com/share/r/1HEWABnp3S/"] },
            { src: "https://i.ytimg.com/vi/Iy6LtjvVuPc/maxresdefault.jpg", views: "59,986", title: "台南虱目魚知識內容", videos: ["https://youtu.be/Iy6LtjvVuPc"] },
            { src: "work-tour-bus.jpg", views: "51,977", title: "直播帶貨始祖｜遊覽車工商", videos: ["https://www.facebook.com/share/r/1DMCmSRJ5N/"] },
            { src: "work-score.png", views: "28,911", title: "新生代盤商給西瓜幾分？", videos: ["https://www.facebook.com/share/r/1D6goaMYA5/"] },
            { src: "work-0to100.png", views: "24,544", title: "西瓜 0 到 100 天", videos: ["https://www.facebook.com/share/r/1DPLPjMNQT/"] },
            { src: "work-second-gen.png", views: "22,185", title: "農二代沒這麼好當", videos: ["https://www.facebook.com/reel/3518267544988891"] },
            { src: "work-family.png", views: "30,372", title: "一家人的西瓜見面會", videos: ["https://www.facebook.com/reel/1057590556718092"] },
            { src: "work-shoes.png", views: "12,511", title: "鞋子長保如新的秘方", videos: ["https://www.facebook.com/reel/970422245558000"] },
            { src: "work-bakery-intro.jpg", views: "9,054", title: "酸麵包入門款", videos: ["https://www.facebook.com/reel/1495499355062283", "https://www.facebook.com/reel/27220347970941032"] },
            { src: "work-bakery-testimonial.jpg", views: "4,452", title: "酸麵包客戶見證", videos: [] },
            { src: "work-bakery-natural.jpg", views: "3,269", title: "吃最天然的食物", videos: ["https://www.facebook.com/share/r/14jQDTkktKq/"] },
            { src: "work-bakery-health.jpg", views: "1,857", title: "好食物與健康", videos: ["https://www.facebook.com/reel/2257212065110286"] },
          ].map(({ src, views, title, videos }) => (
            <figure key={src}>
              {videos.length ? (
                <a className="workMedia" href={videos[0]} target="_blank" rel="noopener noreferrer" aria-label={`觀看「${title}」影片`}>
                  <img src={src} alt={`${title}，觀看 ${views}`} loading="lazy" decoding="async" />
                  <span className="workPlay" aria-hidden="true">▶</span>
                </a>
              ) : <div className="workMedia"><img src={src} alt={`${title}，觀看 ${views}`} loading="lazy" decoding="async" /></div>}
              <figcaption><strong>{views}</strong><span>{title}</span></figcaption>
              {videos.length > 1 && <div className="workLinks">{videos.map((url, index) => <a key={url} href={url} target="_blank" rel="noopener noreferrer">影片 {index + 1} ↗</a>)}</div>}
            </figure>
          ))}
        </div>
      </section>

      <section className="caseEvidence" aria-labelledby="case-evidence-title">
        <div className="caseEvidenceIntro">
          <div>
            <p className="eyebrow">單一案例｜持續代操實績</p>
            <h2 id="case-evidence-title">展示結果，<br />比面子工程重要。</h2>
          </div>
          <p>以下為單一實際專案的公開後台紀錄。它不是一套只能複製到特定產業的題材公式，而是方法經過品牌理解、專業轉譯、持續發布與數據校準後，所留下的可驗證成果。</p>
        </div>
        <div className="caseEvidenceStats" aria-label="單一案例 3 月 1 日至 8 月 1 日成果摘要">
          <div><strong>154</strong><span>天統計期間</span></div>
          <div><strong>148萬+</strong><span>總瀏覽次數</span></div>
          <div><strong>79萬+</strong><span>觀看超過 3 秒</span></div>
          <div><strong>532天</strong><span>累積觀看時間</span></div>
          <div className="highlight"><span className="daily">每日</span><strong>3–5 位</strong><span className="inquiry">主動詢問客戶</span></div>
        </div>
        <figure className="caseEvidenceBanner">
          <img
            src="evidence-overview.png"
            alt="單一內容專案 2026 年 3 月 1 日至 8 月 1 日的 Facebook 後台成效截圖，顯示 148 萬次瀏覽及 532 天觀看時間"
            loading="lazy"
            decoding="async"
          />
          <figcaption>實際平台後台截圖｜統計區間：2026/03/01–2026/08/01</figcaption>
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
        <p>重點要放在發展策略、轉譯、製作與資產化方法，放進窩牛與 Takara 的真實業務情境，形成一套一年期、可追蹤、可調整、也能逐步交接的合作方案。</p>
        <a href="#service">進入年度合作方案 <span>↓</span></a>
      </section>

      <section className="manifesto" id="promise">
        <p>好的空間需要被理解，好的產品需要被看見。</p>
        <h2 className="methodStatement">把案例、展間、Takara原廠素材與日常專業<br />整理成一套<br />窩牛能帶走、能延續的內容方法。</h2>
      </section>

      <section className="stats" aria-label="年度方案數據">
        <div><strong>12</strong><span>個月合作</span></div>
        <div><strong>96</strong><span>支年度短影音</span></div>
        <div><strong>24</strong><span>次到場服務</span></div>
        <div><strong>4</strong><span>次季度檢核</span></div>
      </section>

      <section id="system-map" className="systemMap section">
        <div className="systemMapIntro">
          <div>
            <p className="eyebrow">年度合作系統圖</p>
            <h2>一張圖，看懂內容如何<br />產製、發布，再交回窩牛。</h2>
          </div>
          <p>這不是另一份獨立簡報，而是與方案資料同步的網站原生系統圖。從雙主線內容、四類發布協作到最後的資產交接，都放在同一條可追蹤的路徑上。</p>
        </div>
        <a className="systemMapFrame" href="woniu-takara-system-map.svg" target="_blank" rel="noreferrer" aria-label="開啟窩牛 × Takara 年度內容、發布與交接系統圖大圖">
          <img src="woniu-takara-system-map.svg" alt="窩牛與 Takara 雙主線，經策略選題、批次產製、確認發布、多管道分發及回饋校準，最後形成可由窩牛接手的內容資產。" width="1920" height="1080" loading="lazy" />
        </a>
        <div className="systemMapSummary" aria-label="系統圖文字摘要">
          <article><span>產製</span><strong>{planVolume.annualVideoCount.value} 支短影音 × {planVolume.annualOnsiteVisitCount.value} 次到場</strong><p>窩牛本業與 Takara 代理雙主線，依年度策略彈性配置。</p></article>
          <article><span>發布</span><strong>{planPublishingDeliverables.length} 類發布協作</strong><p>影片多平台、網站文章、指定社團與 Threads 議題操作。</p></article>
          <article><span>節奏</span><strong>{planPhases.length} 個階段 × {planVolume.quarterlyReviewCount.value} 次季檢核</strong><p>從免費準備期、建立節奏到資產化與內部交接。</p></article>
          <article><span>方案</span><strong>每月 NT${planPricing.monthlyFee.value.toLocaleString("zh-TW")}</strong><p>十二個月完成內容產製、發布協作與能力建置。</p></article>
        </div>
        <a className="systemMapExpand" href="woniu-takara-system-map.svg" target="_blank" rel="noreferrer">開啟完整大圖 ↗</a>
      </section>

      <section id="service" className="section">
        <div className="sectionHead">
          <p className="eyebrow">合作內容</p>
          <h2>雙主線內容，<br />同一套成長系統。</h2>
          <p>全年共 96 支短影音，原則上維持雙主線穩定發布。實際週次與題材比例依拍攝條件、素材成熟度及季度策略彈性安排，以 96 支為限。</p>
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
          <div><span>00</span><h3>一個月準備期</h3><p>素材蒐集、資料盤點、理解品牌與內容定位。此階段為贈送，不計入 12 個月。</p></div>
          <div><span>01–03</span><h3>建立節奏</h3><p>確認雙主線題材、批次拍攝方式、送審與發布流程，建立第一批內容庫。</p></div>
          <div><span>04–06</span><h3>穩定產出</h3><p>持續拍攝與製作，依週進度追蹤交付；第 6 個月開始整理內容資產，並用真實任務帶入內部操作能力。</p></div>
          <div><span>07–12</span><h3>資產化與系統交接</h3><p>維持內容產製，同步完成選題庫、素材規則、發布流程、教學紀錄與內部帶訓，讓系統逐步由窩牛接手。</p></div>
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
            ["影片多平台代上架", "Facebook、Instagram、YouTube 與 TikTok。"],
            ["文字內容發布協作", "網站文章、3 個指定社團代上架及 Threads 行銷議題操作。"],
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
          <div><strong>包含</strong><p>年度策略、96 支短影音、24 次到場、主要製作、Facebook／Instagram／YouTube／TikTok 影片代上架、網站文章代上架、3 個指定社團文字內容代上架、Threads 行銷議題操作、進度檢核與帶訓。</p></div>
          <div><strong>另案</strong><p>廣告、網站、長影片、課程、企業對企業業務、新品牌線、重大活動與高規格專案影片。</p></div>
          <div><strong>權利</strong><p>成品與原始拍攝素材歸窩牛；通用方法論與模板授權內部使用，不得轉售。</p></div>
        </div>
      </section>

      <section id="documents" className="resources section">
        <div className="sectionHead">
          <p className="eyebrow">合作依據與執行工具</p>
          <h2>提案確認方向後，<br />實際合作以這四份文件銜接。</h2>
          <p>從完整交付內容、雙方權利邊界，到內容規劃與每週執行紀錄，都有一致的查閱依據。</p>
        </div>
        <ResourceCards />
      </section>

      <section id="contact" className="pricing">
        <div>
          <p className="eyebrow">年度合作方案</p>
          <h2>一年，把內容從臨時任務，變成日常能力。</h2>
        </div>
        <div className="priceCard">
          <p>12 個月合作</p>
          <div><span>新台幣</span><strong>33,500</strong><em>/ 月</em></div>
          <p className="annual">年度合計新台幣 402,000 元</p>
          <a href="mailto:blessingstable@gmail.com">開始討論合作</a>
          <small>詳細權利義務以雙方簽署之正式契約為準。</small>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="mark">窩</span><span>窩牛 × Takara</span></div>
        <p>內容行銷導入暨內部能力建置</p>
        <span>© 2026 引弘企業社</span>
        <nav className="footerDocs" aria-label="方案文件">
          <a href="#documents">合作依據與執行工具</a>
          <Link href="/progress">專案進度表</Link>
        </nav>
      </footer>
    </main>
  );
}

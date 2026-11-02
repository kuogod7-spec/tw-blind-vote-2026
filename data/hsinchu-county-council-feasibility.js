/*
 * 2026 新竹縣議員政見：可行性評估
 *
 * 評估日期：2026-11-02。由本站依統一標準評估，不是專家意見。
 * 評估時政見已匿名並打亂順序，評估者不知道每則政見屬於哪位候選人。
 * 議員政見的「權責」依議員職權判斷（見方法說明第 6 節）：需要縣府採納執行屬常態，不拉低總評。
 * 一般政見與長期建設的評估面向同 new-taipei-feasibility.js。
 * 預算比較基準：新竹縣 115 年度總預算案歲出約 471.5 億元（同 hsinchu-county-feasibility.js）。
 * 2026-11-02 經 Codex 獨立查核、逐條裁決後修正（事實、來源、粗估與評等一致性）。
 */
window.FEASIBILITY = Object.assign(window.FEASIBILITY || {}, {
  // 敬老愛心卡每月點數由 500 點提高到 600 點，並開放折抵掛號費及農會、藥局消費
  "hhc1-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"敬老愛心卡屬縣府自辦福利，對象含 65 歲以上長者、55 歲以上原住民及身心障礙者，至 2025 年底核發約 9.05 萬張。以 1 點 1 元、全數用滿為上限粗估，每月加 100 點每年約 9.05 萬×100×12≈1.09 億元，約占總歲出 0.23%；2025 年實際核銷約 4,642 萬元，實際增幅應低於上限。開放掛號費與農會、藥局消費需另簽特約，縣府已答應研議；之後逐年增加的幅度未說明。","sources":["https://ws.hsinchu.gov.tw/Download.ashx?n=56S%2B5pyD6JmVMTE05bm05bqm5pa95pS%2F6KiI55Wr57i%2B5pWI5aCx5ZGKLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvMS9yZWxmaWxlLzg3MDEvMjgxOTE2L2VmNGZkOGQ4LTc5ODktNDE5MC1iYzJlLTQwNTRkYjVmOTAzYS5wZGY%3D","https://ws.hsinchu.gov.tw/Download.ashx?n=5paw56u557ij6ICB5Lq65Y%2BK6Lqr5b%2BD6Zqc56SZ6ICF5LmY6LuK6KOc5YqpKOewoeeoseaEm%2BW%2Fg%2BS5mOi7iuitiSnnlLPoq4vlj4rkvb%2FnlKjoqqrmmI4ucGRm&u=LzAwMS9VcGxvYWQvOC9yZWxmaWxlLzg2NjgvMzgyNy9lMzI0MTZmNS1kZjEwLTQ4N2QtOGU3Ni1lMTIzNjA1MTc0ZDcucGRm"]},
  // 清寒學生獎學金取消成績門檻
  "hhc1-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"清寒獎學金的申請要件由縣府自訂要點，修訂成績門檻屬行政裁量，教育主管機關已答應研議。增加的經費有限，短期可以完成。","sources":[]},
  // 在竹北西區非法棄置垃圾熱點設置高解析度、車牌辨識與夜視監視器
  "hhc1-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"在棄置熱點增設車牌辨識與夜視監視器，屬縣府環保與警察單位權責，有許多縣市的科技執法先例。以點位計算經費有限，短期可建置。","sources":[]},
  // 放大鳳岡國中、國小前大貨車禁行時段標誌並加繪路面標示
  "hhc1-1-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"標誌與路面標線屬縣府交通工程事項，經費極小，數週內即可施作。","sources":[]},
  // 清疏豆仔埔溪河道、加大排水斷面
  "hhc1-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"縣管區域排水清疏屬縣府例行維護，縣府已同意清除約 3.5 公里河道雜草並將淤土夯實護岸。清疏工程經費小、期程短，可在汛期前完成，後續需逐年編列維護經費。","sources":[]},
  // 重新檢討台 1 線竹北段中華路新設標線並加強宣導
  "hhc1-2-p1": {"level":"medium","authority":"low","cost":"high","timeline":"high","reason":"台 1 線屬省道，標線檢討與調整由中央公路主管機關負責，地方無權自行修改。縣府可彙整陳情與事故資料向中央反映，並配合加強宣導，這部分花費小、可立即進行；標線是否重新調整則取決於中央。","sources":[]},
  // 每所學校設置駐點心理師
  "hhc1-3-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"學校專業輔導人員的員額由中央法規規範，縣府可自籌增聘。每校都設駐點心理師，需數十到上百名人力，屬長期經常支出且財源未說明，加上心理師招募不易，四年內難以全面到位。","sources":[]},
  // 改善學區通學安全
  "hhc1-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"通學步道、減速平台及學區速限調整屬縣府交通、工務主管機關權責，中央亦有人本交通補助可申請。單點工程經費小、工期短，四年內可逐校推動。","sources":[]},
  // 爭取竹北西區親子館與挑戰型共融公園，建立行動育兒資源庫
  "hhc1-3-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"親子館、共融公園與行動育兒資源庫屬縣府社政與公園業務。資源庫可較快建立；親子館與公園未指明地點與規模，經費無法估算，需經選址、設計與施工，任內能否完工視場址而定。","sources":[]},
  // 推動在宅醫療整合平台
  "hhc1-3-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"居家醫療主要由中央健保支付，縣府可建置整合平台媒合醫療院所與長照資源。平台功能與規模未說明，經費無法估算；建置與推廣一任內可完成。","sources":[]},
  // 竹北中正國小、義民中學周邊打通騎樓、劃設通學步道
  "hhc1-4-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"清除騎樓占用、劃設綠色通學步道、尖峰禁停，都屬縣府交通、工務、警察單位現有權責，以標線與執法為主，經費小。騎樓整平與店家協調需要時間，但最低限度的措施短期內可落實。","sources":[]},
  // 修訂營建土石方自治條例，讓有價土石方可直送砂石場
  "hhc1-4-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"修正自治條例屬議會立法職權，縣府已著手草擬修正草案，且有其他縣市先例。不涉及經費，修法可在一年內完成。","sources":[]},
  // 放寬敬老福利津貼的不動產排富門檻
  "hhc1-4-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"敬老福利津貼屬縣府自辦，排富門檻可由縣府自行修訂，但主管機關答詢表示要等中央國民年金法放寬後跟進，時程受中央牽動。放寬後增加多少請領人數沒有說明，無法估算經費。","sources":[]},
  // 將竹北光明六路底一處縣有地納入社會住宅評估
  "hhc1-4-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求把特定縣有地納入社宅評估，屬縣府可辦理的評估工作，議員可透過質詢推動，評估本身花費不大，一年內可完成。該地現況規劃引進民間開發、都市計畫審議中（現況，非政見內容），評估結果是否改作社宅屬縣府政策取捨，不影響評估本身的可行性。","sources":[]},
  // 協助竹北私立幼兒園突破準公共化 80% 門檻
  "hhc1-4-p4": {"level":"medium","authority":"low","cost":"high","timeline":"high","reason":"準公共化門檻與個別認定屬中央權限，縣府能做的是協助業者備妥人口快速移入等資料送審，教育主管機關已答應協助。地方協助幾乎不需經費、短期可辦，但送審後能否突破 80% 門檻由中央決定。","sources":[]},
  // 加速竹北交流道周邊交通改善與公車候車亭建置
  "hhc1-4-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"交流道周邊交通改善與候車亭建置屬縣府交通與工務業務。候車亭單座經費小，可用第二預備金支應，任內可完成；交通改善部分未說明採取哪些措施，經費與期程無法估算。","sources":[]},
  // 學童乳品補助擴大到 2 至 15 歲、寒暑假不中斷，並推動數位牛奶卡
  "hhc1-6-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"乳品補助屬縣府自辦福利，需縣府採納並編列預算。擴大到 2 至 15 歲且寒暑假不中斷，但補助頻率、額度與受益人數都未說明，經費無法估算，規模可能不小。數位牛奶卡兌換系統與偏鄉配送需要建置時間，縣府目前只答應評估。","sources":[]},
  // 盤點公有地，加速興建平價住宅與社會住宅
  "hhc1-6-p1": {"track":"long","level":"unclear","authority":"medium","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"縣內社宅已動工 132 戶，竹北多數在評估（現況，非政見內容）","horizon":"無法判斷","reason":"盤點公有地屬縣府權責，可短期完成；興建社宅可申請中央補助或委由中央興辦。政見未說明目標戶數、基地與財務方案，規劃成熟度、財務與期程都無法判斷。","sources":[]},
  // 有身心障礙學生就讀的班級落實減收 1 至 3 人，無法減額則給導師減課補貼或代課鐘點費
  "hhc1-6-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"特殊教育法規已允許有身心障礙學生的班級減少人數，或改以人力資源協助，執行屬縣府教育主管機關權責。減課補貼或代課鐘點費的經費規模有限，主管機關已答詢會研議，短期內可推動。","sources":[]},
  // 比照鄰近直轄市發放代理代課教師留任獎金
  "hhc1-6-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"代理代課教師留任獎金屬縣府教育預算可自行編列的項目，已有直轄市先例。發放額度與人數未說明，經費無法估算。要做的事明確，下一年度即可實施。","sources":[]},
  // 推動救護車通過路口時感應切換紅綠燈號誌
  "hhc1-6-p4": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"緊急車輛號誌優先屬縣府交通號誌管理，國內已有縣市建置的先例，技術可行。路口數量、救護車車載設備與系統介接範圍都未說明，經費無法估算。","sources":[]},
  // 推動人本交通與智慧交通管理
  "hhc2-2-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"保障行人路權、智慧交通、升級公共運輸、共享運具都是原則性方向，沒有具體地點、措施或規模，無法評估。","sources":[]},
  // 增設公托、公幼並落實在地就學
  "hhc2-2-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只提增設公托、公幼的方向，未說明增設數量、地點與期程，無法估算經費與可行性。","sources":[]},
  // 擴大長者照護據點並爭取各年齡層疫苗補助
  "hhc2-2-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只有標題，沒有說明擴大據點的數量、地點，也沒說要爭取哪些疫苗、補助哪些年齡層，無法估算經費與期程。疫苗補助有部分屬中央公費疫苗政策範圍。","sources":[]},
  // 增建特色公園與綠地，加強環境污染稽查與食安把關
  "hhc2-2-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只有標題，沒有說明公園、綠地的地點與數量，也沒寫稽查要加強到什麼程度，無法評估經費與期程。","sources":[]},
  // 持續推動議會資訊公開，強化市民參與公共事務
  "hhc2-2-p4": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"推動議會資訊公開屬議員自身職權，可透過提案、要求議事資料上網與公開個人問政資訊達成，經費低，任內可做到。內容未列具體措施。","sources":[]},
  // 開放大型重機與駕艙機車停放機車格，或劃設專用車格
  "hhc2-2-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"路邊停車格劃設與停放規則由縣府交通主管機關依停車場法訂定，已有其他縣市先例，主管機關答詢同意研議。劃設車格經費極小，一年內可實施。","sources":[]},
  // 三民路、福興路、嘉興路增設人行道，嘉豐南路與莊敬南路路口增設左轉車道
  "hhc2-2-p6": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"增設人行道與左轉車道屬縣府及公所道路工程權責。人行道常需退縮或取得用地，各路段條件不一。經費未說明，福興路約 1.5 公里優先改善可望在一任內完成，其他路段要看用地協調。","sources":[]},
  // 光明六路打除中央分隔島設左轉車道，取消強制機車待轉
  "hhc2-2-p7": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"拆除分隔島、設左轉車道、劃設機車格與調整待轉規定，都屬縣府交通與工務主管機關權責。工程規模小、路段明確，有完整配套，一任內可完成。","sources":[]},
  // 增加取締非法棄置廢棄物的監視器預算
  "hhc2-2-p8": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"增購監視器屬縣府環保主管機關的設備採購，主管機關答詢同意增編，經費小，次年度即可實施。","sources":[]},
  // 監督社會住宅進度並倡議可負擔住宅
  "hhc2-3-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"監督社宅屬議員職權，但倡議可負擔住宅、完善租金補貼、擴大創業基地都只是方向，沒有具體作法與規模，無法評估。","sources":[]},
  // 升級公共托育並推動臨時與夜間托育
  "hhc2-3-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只列出升級公共托育、臨時與夜間托育、親子館與兒科資源等方向，沒有地點、數量與規模。兒科醫療資源也非縣府能直接增加，無法評估。","sources":[]},
  // 爭取補助孕婦與嬰幼兒疫苗
  "hhc2-3-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"補助孕婦及嬰幼兒自費疫苗屬地方自治事項，已有縣市補助 RSV 抗體或腸病毒疫苗的先例。RSV 單劑價格較高，總經費取決於補助對象範圍，政見未說明額度與財源。","sources":[]},
  // 加速校舍興建擴容並推動通學步道
  "hhc2-3-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"校舍擴容、通學步道、雙語與心理輔導均屬縣府教育業務，但未指明學校、規模或班級數，也未說明經費與期程，無法估算成本或判斷能否在任內完成。","sources":[]},
  // 擴大敬老卡使用範圍與長者疫苗補助
  "hhc2-3-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"敬老卡擴大使用範圍與社區關懷據點屬縣府權責，可行；敬老卡用於農會與合作診所已預定 12 月實施。帶狀疱疹疫苗擴大到 55 歲以上，受益人數多，但補助比例與金額未說明；各地有全額補助兩劑與每人定額 2,000 元等不同作法，經費無法估算。","sources":["https://www.cna.com.tw/news/aloc/202608180149.aspx","https://www.storm.mg/article/11135601","https://dg-srv.hccg.gov.tw/serviceNotice.do?id=1201&rule=guest"]},
  // 將老屋與閒置空間改造為藝文基地
  "hhc2-3-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"沒有指明要改造哪些老屋或閒置空間、數量多少，也沒有市集、藝術季的規模與頻率，無法評估。","sources":[]},
  // 盤點竹北公有地，加速新建社會住宅
  "hhc2-5-p0": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"尚無地方自建社宅，僅提出盤點公有地","horizon":"約 6–10 年","reason":"盤點公有地屬縣府可立即執行的行政工作，新建社宅可申請中央補助。戶數、基地與經費未說明，財務規劃無法判斷；目前僅有盤點構想，從選地、規劃到完工需多年。","sources":[]},
  // 竹北第八公墓規劃為環保葬，並提前啟動第一、第二公墓遷葬查估
  "hhc2-5-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"公墓規劃為環保葬與遷葬查估屬縣府殯葬管理權責，規劃與查估一任內可以完成。補償費需編列預算，但墓數與補償標準都未說明，經費無法估算；政見要求提前查估與編列，並未承諾任內完成遷葬。","sources":[]},
  // 研議鳳山溪橋台遺址登山步道，串聯竹北、湖口、新埔低碳觀光
  "hhc2-5-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"內容是研議並先規劃步道，委託規劃花費有限，可結合中央的步道或自行車道補助。若涉及遺址，須依文化資產相關規定評估，但不影響先期規劃。","sources":[]},
  // 新建總圖書館納入日治時期州立圖書館藏書返鄉典藏
  "hhc2-5-p3": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"典藏空間與修護人力可納入縣立總圖營運計畫。舊藏書目前由其他機關保管，返鄉需與保管機關協商移轉或寄存，非縣府單方可決定；期程也受總圖興建進度影響。","sources":[]},
  // 敬老愛心卡點數由 500 點提高到 800 至 1,000 點，並擴大到農會、藥局
  "hhc2-7-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"現況已實施部分：縣府自 115 年 10 月起把敬老愛心卡每月點數由 500 點提高到 1,000 點，並新增長照交通接送折抵。農會、合作藥局及診所掛號費預定 12 月 1 日起開放，尚未上路。家屬代購紙尿布、營養品等長照用品則不在已公布範圍內。","sources":["https://www.cna.com.tw/news/aloc/202608180149.aspx","https://udn.com/news/story/6656/9525774"]},
  // 竹北設置都會型追思會館
  "hhc2-7-p1": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"medium","stage":"主管機關答詢將於 2027 年度編列設計規劃與環境可行性評估經費","horizon":"約 5–8 年","reason":"治喪設施屬縣府民政業務，主管機關答詢將在 2027 年度編列設計規劃與環境可行性評估經費，尚未進入正式規劃。規模與經費未說明；殯葬設施常有鄰避抗爭，需經環評、設計與興建，屬多年期建設。","sources":[]},
  // 因應物價調升營養午餐餐費
  "hhc2-7-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"營養午餐餐費由縣府訂定，新竹縣國中小現況已實施免費營養午餐，調升餐費由縣府負擔。2026 年 11 月報導指出，縣府自 115 學年度起每餐加碼 10 元，國小由 60 元調為 70 元，調升部分現況已實施。用餐時間與廚餘成因調查屬行政作業，短期可辦。","sources":["https://news.ltn.com.tw/news/life/breakingnews/5626555"]},
  // 增闢快捷 9 號支線，服務竹北國道西側社區
  "hhc2-7-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"增闢公車支線屬縣府交通權責，縣府已表示將納入年底啟動的路網規劃案評估。新路線需持續編列營運補貼，屬中小型經費，一任內可以開辦。","sources":[]},
  // 加速舊量販店大樓 2、3 樓閒置店面招商，帶動縣治區商圈
  "hhc2-7-p4": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"建物產權與招商主體未說明，若屬縣有或開發契約標的，縣府可督促招商；若為民間產權，縣府只能輔導。招商成效受市場影響，難保證期程。","sources":[]},
  // 犬貓緊急救援醫療預算一次編足，並推動動物保護園區
  "hhc2-8-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"unclear","reason":"醫療救援預算增編屬縣府動保業務，主管機關答詢擬由 280 萬元提高到 413 萬元，增加 133 萬元，約占縣總歲出 0.003%，可行。動物保護園區未說明地點、規模與經費，成本與期程無法判斷。","sources":[]},
  // 研議補助認養傷殘犬的飼主
  "hhc2-8-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"針對傷殘犬認養人提供飼料或醫療補助，屬縣府動物保護主管機關可自訂的補助，對象有限、經費小，主管機關已答詢研議額度制，短期可推出。","sources":[]},
  // 研議寵物友善公車
  "hhc2-8-p2": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"寵物搭乘規則可由縣府與客運業者協商訂定，已有直轄市先例，經費小。主管機關答詢需等客運汰換低底盤大客車後才研議，期程取決於車輛汰換進度。","sources":[]},
  // 比照鄰近縣市補助篩檢異常者做無痛大腸鏡
  "hhc2-8-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"篩檢異常者的大腸鏡加碼補助屬縣府自辦衛生福利，說明參考每人約 3,000 元，並優先照顧經濟困難家庭，已有鄰近縣市先例。補助人數與資格門檻未說明，總經費無法估算。衛生主管機關已答應評估，一任內可以開辦。","sources":[]},
  // 為身心障礙者辦理就業媒合
  "hhc2-8-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"身心障礙者就業媒合屬縣府勞政主管機關既有業務，中央有職業重建經費補助，加強媒合以人力與行政資源為主，短期可推動。","sources":[]},
  // 補助新生兒自費健檢項目
  "hhc2-9-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"新生兒自費篩檢補助屬縣府衛生福利自治事項，地方可自行編列。政見已列出基因檢測、結構異常超音波、聽損等項目，但各項補助額度、資格與涵蓋人數未說明，經費無法估算。到校主動篩檢嬰幼兒發展還需專業人力配合，須逐步建置。","sources":[]},
  // 托育補助每月加碼
  "hhc2-9-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"托育補助加碼需縣府編列預算。衛福部要求地方原則上依中央一致標準，加碼明顯偏高時中央可能不再足額補助，但托育費用負擔偏高者，地方可用自有財源協助，新竹縣是否適用尚待確認。2025 年縣內托育補助發放約 5.1 億元，加碼後增加多少取決於受益人數口徑，無法精算。","sources":["https://www.mohw.gov.tw/cp-4427-43098-1.html","https://ws.hsinchu.gov.tw/Download.ashx?n=56S%2B5pyD6JmVMTE05bm05bqm5pa95pS%2F6KiI55Wr57i%2B5pWI5aCx5ZGKLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvMS9yZWxmaWxlLzg3MDEvMjgxOTE2L2VmNGZkOGQ4LTc5ODktNDE5MC1iYzJlLTQwNTRkYjVmOTAzYS5wZGY%3D"]},
  // 文興高中、自強高工增設體育班
  "hhc2-9-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"文興高中與自強高工均為縣立學校，文興將於 116 學年改制、自強已於 115 學年改制，增設體育班屬縣府教育主管機關可核定事項。需增聘教練與場地設備，經費中等未說明，兩校新設高中部正可同步規劃，任內可開班。","sources":["https://news.ltn.com.tw/news/life/breakingnews/5562743","https://n.yam.com/Article/20260719218133"]},
  // 六家車站高架橋下闢設滑板場等青少年運動場域
  "hhc2-9-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"高架橋下設滑板場由縣府執行，主管機關答詢已取得鐵路單位同意無償租用 10 年並將編列建置預算。屬小型運動設施，經費小，一任內可完成。","sources":[]},
  // 通盤檢討公車路網，快捷 5 號延駛東平、鹿場、隘口里
  "hhc2-9-p4": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"路網檢討、路線延駛與候車亭設置屬縣府交通主管機關權責。延駛需增加營運補貼，全面改設電子站牌也有一定經費，但規模皆屬中小型，一任內可分批完成。","sources":[]},
  // 成人健檢加入糖化血色素篩檢
  "hhc2-9-p5": {"level":"medium","authority":"low","cost":"high","timeline":"high","reason":"成人預防保健服務的項目由衛福部規範，要納入全國方案屬中央權限。地方可自籌經費在成人健檢或整合篩檢中加做糖化血色素，單項檢驗成本低，下一年度即可辦理。飲料店標示稽查屬縣府既有業務。","sources":["https://gazette.nat.gov.tw/EG_FileManager/eguploadpub/eg032187/ch08/type2/gov70/num31/Eg.htm"]},
  // 高風險工廠依違規紀錄排定稽查順序，嚴管動火作業
  "hhc2-10-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"依違規紀錄排定稽查順序、整合消防與環保稽查，屬縣府既有權責的行政調整，主要成本是人力調度。有明確管考指標，任內可建立並看到成效。","sources":[]},
  // 重新盤點竹北公車與跨縣市通學需求，與新竹市建立交通資料協調機制
  "hhc2-10-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"盤點公車路線與載客數據屬縣府交通主管機關職權，跨縣市資料協調可透過既有縣市合作平台處理。主要是行政與分析成本，任內可完成並據以調整班次。","sources":[]},
  // 交通罰鍰專款專用，依執法紀錄排定道路改善優先順序
  "hhc2-10-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"交通罰鍰收入可透過預算編列或設立基金指定用於道路改善，屬縣府財務調度；專款專用只是指定用途，不代表總支出不變，實際改善工程的規模另需編列。依執法紀錄排序與追蹤成效是行政作業，一任內可以建立。","sources":[]},
  // 針對行人死亡事故做專案檢討並公開分析
  "hhc2-10-p3": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求縣府公開事故分析並據以調整執行工作，屬議員質詢監督職權。資料已有，經費極低，短期可以實現。","sources":[]},
  // 主動推動犬貓絕育並公開異地回置標準
  "hhc2-10-p4": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"犬貓絕育、飼主責任追蹤及異地回置標準公開，屬縣府動物保護主管機關權責，中央亦有絕育補助。需要穩定編列預算與人力，金額未說明，但屬可逐年擴大的常態業務。","sources":[]},
  // 公開全縣校園運動設施安全盤點與履歷進度
  "hhc2-10-p5": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求縣府公開校園運動設施盤點進度與數據，屬議員質詢監督職權。建立彙整與定期公開機制只需行政人力，經費很低，短期內可以實現。","sources":[]},
  // 竹北推動海綿城市，人行道改用透水鋪面
  "hhc2-11-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"人行道改用透水鋪面屬縣府工務權責，已有不少縣市先例。政見要求公部門建設率先採用，但適用範圍、面積與經費都未說明，無法估算；工務主管機關答詢將先在淹水潛勢較高區域試辦，這是現況回應，非政見內容。新工程逐步改採透水鋪面可在一任內開始。","sources":[]},
  // 路燈統一升級為智慧路燈
  "hhc2-11-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"路燈升級與訂定規範屬縣府權責。政見要求統一升級為整合監視器、緊急按鈕、無線網路與空品監測的智慧路燈，但未說明數量、單價與分期，經費無法估算。全縣統一汰換加上後續通訊與維運，一任內全面完成有難度。","sources":[]},
  // 夜間與支線路口改設感應式號誌
  "hhc2-11-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"號誌控制屬縣府交通主管機關權責，感應式號誌需在路口加裝車流偵測器，單一路口經費不高，可逐年擴充，任內可見成效。","sources":[]},
  // 啟動行道樹普查並成立行道樹景觀委員會
  "hhc2-11-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"行道樹普查與成立景觀委員會屬縣府權責，已有其他縣市訂定行道樹管理辦法及設置審議機制的先例。普查委託經費有限，一至兩年內可完成。","sources":[]},
  // 竹北試辦電動滑板車等個人行動器具低速示範計畫
  "hhc2-12-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"道路交通管理處罰條例第 69 條已授權直轄市、縣（市）政府訂定個人行動器具的規格、行駛路段、時間、速度與安全管理辦法，地方可自行訂定示範辦法。先在園區與封閉路線試辦，經費小；需完成辦法訂定與保險、安全設計等配套，任內可啟動試辦。","sources":["https://web.law.ntpc.gov.tw/Scripts/PrintFLAWDOC02.aspx?RCODE2=B0080002&RNO=69&rtype=H"]},
  // 將水塔清洗納入公寓大廈修繕補助
  "hhc2-12-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公寓大廈修繕補助屬縣府建管業務，比照其他直轄市將水塔清洗納入補助項目屬修改補助要點，單件補助金額小，次年度即可實施。","sources":[]},
  // 公共自行車前 30 分鐘免費，並與鄰近縣市跨區整合
  "hhc2-12-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"公共自行車費率補貼屬縣府交通主管機關權責，前 30 分鐘免費已有鄰近縣市先例。補貼經費隨使用量增加，未說明財源；跨縣市與園區協調需時間，但費率調整本身一年內可實施。","sources":[]},
  // 以 AI 防跌倒與即時通報推動長者照護，整合醫療、日照與喘息服務
  "hhc2-12-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只提出 AI 防跌倒、即時通報與整合醫療、日照、喘息服務的方向，未說明實施對象、規模、方式與經費，無法判斷可行性。","sources":[]},
  // 推動約 22 公里的郊山連稜縱走路線
  "hhc2-12-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"路線串接蓮華寺、文山步道、犁頭山稜線、文林古道至飛鳳山步道，推動郊山健走觀光屬縣府可規劃的事項。政見未說明施作方式、銜接段長度與安全設施，經費無法估算。銜接段的土地權屬與主管機關同意需先確認，期程有變數。","sources":[]},
  // 督促縣府啟動竹北高鐵特區周邊國際規格棒球場的先期可行性評估
  "hhc2-13-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"內容是督促縣府啟動先期可行性評估與公聽會，委託評估的經費有限，一年內可以完成。球場本身的興建另當別論，評估結果才會決定是否推動。","sources":[]},
  // 追蹤竹北東海社區活動中心工程儘速決標開工
  "hhc2-13-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"追蹤工程招標、要求說明流標原因並公開進度，是議員質詢監督職權即可做到。工程經費已編列約 8,163 萬元，決標後工期約 380 天，一任內可望完工。","sources":[]},
  // 督促鄉鎮市公所申請中央幸福巴士，由縣府統籌公車路網
  "hhc2-14-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"督促公所提案屬縣府行政協調；說明稱中央補助 85%，此比例未另行查證，地方實際負擔依核定計畫而定。由縣府統籌公車路網是組織分工問題，一任內可以推動。","sources":[]},
  // 以縣款拓寬竹 12 線湖口國中旁最後 350 公尺
  "hhc3-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"縣道拓寬屬縣府權責，約 350 公尺、約 2,000 多萬元縣款，占年度歲出不到 0.1%，負擔不大。徵收加施工約 1 至 2 年，一任內可完成。","sources":[]},
  // 在王爺壟文小用地新建國小，分流新湖國小學生
  "hhc3-1-p1": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"medium","stage":"2024 年縣府稱進行校舍先期規劃，用地先建非營利幼兒園；2026 年 4 月答詢改稱定期滾動調查後再做先期規劃，尚無核定經費與動工時程","horizon":"約 5–8 年","reason":"新建國小屬縣府教育權責，王爺壟已有都市計畫保留的國小校地約 2.34 公頃，用地取得負擔較小，但撥用與配置細節未見公開。縣府 2024 年稱已進行先期規劃，2026 年 4 月答詢仍表示要滾動調查後再做先期規劃，未見核定經費與時程。新建國小從規劃到招生通常需五年以上。","sources":["https://news.ltn.com.tw/news/HsinchuCounty/breakingnews/4713137","https://news.housefun.com.tw/news/article/447333484165.html"]},
  // 下班時段開放湖口服務區北上出口，分流湖口交流道
  "hhc3-1-p2": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"服務區出入口開放屬高速公路主管機關權限，縣府與議員只能爭取。若服務區既有便道可利用，限時段開放的工程成本不高，但需經中央評估交流道間距與交通安全，核准與否不確定。","sources":[]},
  // 湖口戶政事務所遷建至王爺壟
  "hhc3-1-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"戶政事務所屬縣府民政業務。新建綜合辦公大樓規模與經費未說明，經費無法估算；王爺壟用地取得情形未明，從用地、設計到完工，四年內完成偏緊。","sources":[]},
  // 調高鄰長津貼
  "hhc3-1-p4": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"鄰長事務補助費由縣府訂定標準，需縣府採納並編列預算。每月增加 1,000 或 2,000 元，即每人每年多 1.2 萬或 2.4 萬元；全縣鄰長人數未查得，總額無法估算。屬單純調整補助標準，可在下一年度預算實施。","sources":[]},
  // 放寬敬老年金設籍年限
  "hhc3-1-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"敬老福利津貼為縣府自辦，設籍年限可由縣府修正。現行津貼每月 3,000 元；2005 年 8 月 1 日以後設籍、連續設籍滿 10 年且通過排富者，改領每年 1 萬元敬老禮金，2025 年約 4,082 人。若這些人轉領津貼，每人每年約增 2.6 萬元，粗估合計約 1.06 億元；其他新納入者人數未說明，政見本身也提到要視財政而定。","sources":["https://ws.hsinchu.gov.tw/Download.ashx?n=5paw56u557ij5pS%2F5bqcMTE05bm05pWs6ICB56au6YeR5a%2Bm5pa96KiI55WrLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvOC9yZWxmaWxlLzg2NjcvMjQwOTg0L2I1MzBhZTQ2LTIyZTgtNDZkYi1iNjM0LTk4NWI4MGEzOWE4MC5wZGY%3D","https://ws.hsinchu.gov.tw/Download.ashx?n=56S%2B5pyD6JmVMTE05bm05bqm5pa95pS%2F6KiI55Wr57i%2B5pWI5aCx5ZGKLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvMS9yZWxmaWxlLzg3MDEvMjgxOTE2L2VmNGZkOGQ4LTc5ODktNDE5MC1iYzJlLTQwNTRkYjVmOTAzYS5wZGY%3D"]},
  // 擴大學校、醫療院所與機關周邊禁菸範圍至 50 公尺以上
  "hhc3-1-p6": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"菸害防制法允許地方主管機關指定公告禁菸場所，多個縣市已公告校園周邊禁菸區。擴大範圍只需公告與稽查，經費低，短期可以實施。","sources":[]},
  // 勞工教育經費專款專用，勞動法規與職安課程不低於七成
  "hhc3-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"勞工教育經費用途比例、講師費清冊公開與利益迴避條款需縣府採納並訂定規範，議員可在預算審議與質詢時要求。縣府首長已答詢同意，不需新增經費，短期內可落實。","sources":[]},
  // 提出勞動檢查員擴編計畫與時程
  "hhc3-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"增加勞動檢查人力屬縣府勞工主管機關的員額編制，議員可透過預算審議推動，縣府首長答詢已表示支持。增聘數名人員的人事費用很低，任內可完成。","sources":[]},
  // 王爺壟文小用地新建 36 至 48 班中型國小並結合幼兒園
  "hhc3-3-p2": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"medium","stage":"議會質詢提出，縣府答詢將研究評估","horizon":"約 5–7 年","reason":"新建國小與幼兒園屬縣府教育主管機關權責，政見指定在文小用地興建，但用地所有權與取得情形未說明。36 至 48 班國小屬多年興建的實體建設，縣府僅答詢研究評估，尚在構想階段；經費與財源未說明，無法估算。主張 3 到 5 年建成偏緊但非不可能。","sources":[]},
  // 湖口火車站至公五特色公園打通騎樓、設實體人行道示範廊道
  "hhc3-3-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"人行道與騎樓整平屬縣府工務與交通業務，中央有人本交通相關補助可申請。打通騎樓需逐戶協調住戶與商家，並同步找到替代停車空間，是主要障礙；6 個月內提出規劃可行，全線完工需較長時間。","sources":[]},
  // 全面開放湖口服務區出入口銜接市區道路，分流湖口交流道
  "hhc3-3-p4": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"服務區開放需高速公路主管機關同意，河堤闢設便道還需河川管理機關許可，均非縣府權限。湖口服務區已有北上聯外便道，經審查後於平日上午限時單向開放，有先例；全面開放雙向出入及新闢河堤便道須另經交通安全與河川許可評估，規模未說明，經費無法估算。","sources":["https://www.freeway.gov.tw/Publish.aspx?cnid=193&p=14839"]},
  // 國小及公立學校普設 2 歲幼兒專班
  "hhc3-4-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"2 歲專班屬縣府教育主管機關權責，中央有公共化幼兒園擴充補助可申請。「普設」到國小及公立學校涉及多少校舍、班級與新增教保人力均未說明，經費無法估算。全面設置需空間改建與人員招募，須分年推動，一任內可望部分達成。","sources":[]},
  // 老人年金恢復每人 6,000 元，設籍滿 10 年即可請領並放寬排富
  "hhc3-4-p1": {"level":"low","authority":"medium","cost":"low","timeline":"medium","reason":"敬老福利津貼為縣府自辦，現行每月 3,000 元，2025 年發放 39,862 人、466,960 人次，金額約 13.8 億元。以此人次粗估恢復為 6,000 元，每年約增 466,960×3,000≈14 億元，約占總歲出 3.0%，等於整項支出倍增；再放寬設籍與排富，支出更高，且未說明財源。","sources":["https://ws.hsinchu.gov.tw/Download.ashx?n=56S%2B5pyD6JmVMTE05bm05bqm5pa95pS%2F6KiI55Wr57i%2B5pWI5aCx5ZGKLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvMS9yZWxmaWxlLzg3MDEvMjgxOTE2L2VmNGZkOGQ4LTc5ODktNDE5MC1iYzJlLTQwNTRkYjVmOTAzYS5wZGY%3D"]},
  // 科技執法路口提前 100 公尺設置明顯標示
  "hhc3-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"在科技執法路口前設置預告標誌屬交通工程與警政配合事項，經費極小，短期可以完成。","sources":[]},
  // 鄉道山葉路改列縣道並爭取中央經費拓寬
  "hhc3-5-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"道路改列縣道需縣府提出、經中央核定，拓寬經費也仰賴中央補助。拓寬需徵收土地，經費與期程未說明；工務主管機關答詢已納入道路清查，任內可完成改列，拓寬完工較難。","sources":[]},
  // 快捷公車延駛湖口火車站並與幸福巴士銜接
  "hhc3-5-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"公車路線延駛屬縣府公路主管機關可與業者協調的營運調整。延駛里程、班次與所需車輛未說明，補貼增加多少無法估算。主管機關已答詢會與業者研議，若業者運能可配合，短期內可實施。","sources":[]},
  // 在湖口興建縣立防災教育館
  "hhc3-5-p3": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"medium","schedule":"medium","stage":"已完成土地撥用，尚未發包規劃設計","horizon":"約 5–6 年","reason":"縣府已完成湖口用地撥用，粗估經費約 5.9 億元，預計分年編列。依規劃，2027 年發包設計，2028 年下半年才開工，完工落在 2031 年左右，期程超過一任。5.9 億元約占年度歲出 1.3%，分年編列可以負擔，但尚未看到中央補助來源。","sources":["https://news.ltn.com.tw/news/life/breakingnews/5439811"]},
  // 改善新湖國小教室、活動空間與老舊運動設施
  "hhc3-5-p4": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"校舍與運動設施改善屬縣府教育預算及中央補助範圍，改善項目與規模未說明，經費無法估算。追蹤湖口高中人工智慧實驗班設備經費屬議員質詢監督，可以直接執行。單一學校的設施改善在一任內可以看到成效。","sources":[]},
  // 加速湖口第二交流道動工並改善列管危險路口
  "hhc3-5-p5": {"track":"long","level":"medium","authority":"low","maturity":"medium","financing":"medium","schedule":"medium","stage":"2026 年 4 月報導：可行性評估已完成，依高公局初核意見改採半套 Y 型，預定 5 月送審，之後進度未查得","horizon":"約 6–10 年","reason":"國道交流道須由交通部高速公路主管機關核定，縣府只能爭取、配合規劃並分攤經費。2026 年 4 月報導指可行性評估已完成，總經費預估約 12.5 億元，地方分攤比例未定，之後的審查結果未查得。從核定、綜合規劃、用地到動工通常需數年；危險路口號誌與車道改善則屬縣府短期可做的工程。","sources":["https://news.housefun.com.tw/news/article/447333484165.html"]},
  // 建立客家獅長期培訓與校園傳承制度
  "hhc3-8-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"客家獅培訓據點、師資傳承與校園推廣屬縣府文化及教育主管機關可辦理的事項，經費以師資鐘點與活動費為主，規模小。可結合既有客家文化補助，四年內可建立制度。爭取全運會演出則需視主辦單位安排。","sources":[]},
  // 加速湖口營區旁勝利一路拓寬
  "hhc3-8-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"道路拓寬由縣府主辦，依說明已向中央申請 8,200 萬元補助，尚未確定核定。拓寬需取得軍方管理的土地，答詢稱以徵收方式取得，實際程序仍須與軍方協調，是主要關卡；補助若通過，一任內可望完成。","sources":[]},
  // 延長特教助理員服務時數，並提供鑑定等待期的過渡支援
  "hhc3-8-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"特教助理員由縣府聘用，部分經費仰賴中央補助，主管機關答詢將向中央建議，並研議提高私幼補助。時數由 4 小時延長至 6 至 8 小時，人事費約增加五成到一倍，未說明財源，是主要障礙。","sources":[]},
  // 幼兒營養與托育政策全縣統一標準
  "hhc4-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"幼兒園托育補助的主要架構（準公共化、育兒津貼）由中央訂定，縣府可就自辦的營養與托育補助統一對象與標準，屬地方可補位部分；未說明補助項目與金額，經費無法估算。","sources":[]},
  // 要求縣府儘速核定新興路通學步道改善工程
  "hhc4-1-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"通學步道改善工程的核定與發包屬縣府權責，議員可爭取並督促；路段明確，但工程經費未說明，無法估算。核定後一般步道工程可在任期內完成。","sources":[]},
  // 新豐公共自行車站點延伸到海岸地區，並爭取前 30 分鐘免費
  "hhc4-5-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"公共自行車設站由縣府與公所協調，增設數個站點經費不大。前 30 分鐘免費需持續編列補貼，金額隨使用量而定，屬中等，可在一任內實施。","sources":[]},
  // 協助新豐申請幸福巴士，並要求中央提高客運補助
  "hhc4-5-p1": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"協助公所申請幸福巴士屬縣府行政協助，中央已有補助機制，短期可提案。提高客運營運補助與司機補貼屬中央公路主管機關權限，地方只能反映，結果不受地方控制。","sources":[]},
  // 停工的新庄子非營利幼兒園園舍改作消防分隊、派出所與戶政事務所用地
  "hhc4-5-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"閒置園舍改作消防、警政與戶政用地，需縣府民政、消防、警政與公所協商土地交換，涉及多機關與產權調整。後續是沿用原建物、補強或另建尚待評估，經費也沒有說明。協商可在一任內推動，但完成時程有變數。","sources":[]},
  // 加快松林國小擴建工程
  "hhc4-5-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"擴建工程由縣府教育主管機關執行，議員可透過質詢與預算審議督促提前施工。工程已在推動中，任內完工可期。","sources":[]},
  // 推動關西外環道儘早動土
  "hhc5-1-p0": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"unclear","schedule":"unclear","stage":"舊案曾因環保團體抗議停擺；2020 年 3 月辦理新路線說明會，部分居民因拆遷反對；之後核定、設計與用地進度未查得","horizon":"約 6–10 年（粗估）","reason":"外環道由縣府主辦，舊案曾因環保團體抗議停擺，2020 年重提新路線並辦說明會，屬列入政府計畫的階段。新路線需拆遷民宅，部分居民反對，用地取得是主要關卡。最新核定與經費進度未查得，本屆任期結束前能否動土無法判斷。","sources":["https://news.pts.org.tw/article/470381"]},
  // 提高敬老愛心卡點數並擴大使用範圍
  "hhc5-1-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"敬老愛心卡屬縣府自辦福利，對象含 65 歲以上長者、55 歲以上原住民及身心障礙者，至 2025 年底核發約 9.05 萬張。以 1 點 1 元、全數用滿為上限粗估，每月由 500 點增為 800 點，每年約 9.05 萬×300×12≈3.26 億元，約占總歲出 0.69%，且未說明財源；2025 年實際核銷約 4,642 萬元，但開放醫院掛號、藥局後使用率可能提高。擴大使用範圍需另簽特約，技術上不難。","sources":["https://ws.hsinchu.gov.tw/Download.ashx?n=56S%2B5pyD6JmVMTE05bm05bqm5pa95pS%2F6KiI55Wr57i%2B5pWI5aCx5ZGKLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvMS9yZWxmaWxlLzg3MDEvMjgxOTE2L2VmNGZkOGQ4LTc5ODktNDE5MC1iYzJlLTQwNTRkYjVmOTAzYS5wZGY%3D","https://ws.hsinchu.gov.tw/Download.ashx?n=5paw56u557ij6ICB5Lq65Y%2BK6Lqr5b%2BD6Zqc56SZ6ICF5LmY6LuK6KOc5YqpKOewoeeoseaEm%2BW%2Fg%2BS5mOi7iuitiSnnlLPoq4vlj4rkvb%2FnlKjoqqrmmI4ucGRm&u=LzAwMS9VcGxvYWQvOC9yZWxmaWxlLzg2NjgvMzgyNy9lMzI0MTZmNS1kZjEwLTQ4N2QtOGU3Ni1lMTIzNjA1MTc0ZDcucGRm"]},
  // 要求關西往新竹通學客運準點並建立監督機制
  "hhc5-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"客運準點監督可透過補貼契約考核與罰則約束業者，即時到站資訊已有成熟系統。路線若屬公路客運，需與公路主管機關合作。經費小，短期可以完成。","sources":[]},
  // 社區關懷據點供餐收費訂定標準
  "hhc5-1-p3": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"社區關懷據點由社政主管機關輔導補助，多由民間團體經營。政見要的是一致的收費標準，縣府可透過補助要點訂定，但各據點午餐月費從免費到 1,200 元不等，反映人力、補助與食材來源不同，統一前需先釐清成本與補助分擔，避免部分據點縮減供餐。訂定標準本身經費不高，一任內可以完成，但需與據點協調。","sources":[]},
  // 爭取經費整修百年東溪書房
  "hhc5-1-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"書房整修可由縣府文化主管機關向中央申請文資或古蹟修復補助。是否具文化資產身分、產權歸屬與修復規模均未說明，若需先辦理文資審議或調查研究，一任內可能只能完成調查與設計。","sources":[]},
  // 要求對鳳山溪淨水場上游違規鑿井工廠再辦聯合稽查
  "hhc5-1-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"違規鑿井與排放污水的稽查屬縣府環保、水利單位職權，聯合稽查與勒令停工是既有行政手段，經費極小，短期內可以執行。","sources":[]},
  // 竹 118 線與台三線交叉路口劃設左轉專用車道
  "hhc5-1-p6": {"level":"medium","authority":"low","cost":"high","timeline":"high","reason":"路口位於省道台三線，車道配置由中央公路主管機關核定，地方無權自行劃設。縣府可做交通調查、提出申請並協調，這部分花費小；左轉專用道能否劃設取決於中央核定與路寬條件。","sources":[]},
  // 台三線關西南新里路段設定點測速照相
  "hhc5-1-p7": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"固定式測速照相由縣府警察局評估設置，位於省道須與公路主管機關協調。單一地點設備經費小，有地點、有事故需求即可在一年內完成。","sources":[]},
  // 推動關西生命禮儀園區納骨設施新建
  "hhc5-2-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"納骨設施由鎮公所主辦，依說明縣府 2026 年度已編 2,017 萬元補助，但總工程費未說明，鎮代會又刪減配合款，整體財源尚未確定。縣府只能協調鎮公所與代表會追加預算。地下 1 層、地上 5 層的建築，即使預算通過，興建也需數年。","sources":[]},
  // 加速關西外環道審議並爭取年底送大會
  "hhc5-2-p1": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"關西外環道的審議與是否排入大會屬中央權限，地方無法決定。縣府可做的是儘速回覆中央專案小組意見、補正後送內政部，這部分可透過質詢督促、不增加經費。工程本身約 39.8 億元，屬後續問題。","sources":[]},
  // 公路客運駕駛比照市區公車每月補貼 1 萬元
  "hhc5-2-p2": {"level":"medium","authority":"low","cost":"unclear","timeline":"high","reason":"公路客運主管機關為中央，提高每公里補貼需中央同意；縣府可自籌補貼行駛縣內路線的駕駛。每人每月 1 萬元，但受補貼駕駛人數未說明，總經費無法估算；能否動用停車管理基金未查證。自籌補貼部分次年度可實施。","sources":[]},
  // 爭取中壢往關西客運晚間增班
  "hhc5-2-p3": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"中壢往關西屬跨縣市路線，增班需由桃園市或公路主管機關核准，並由業者配合，新竹縣只能協調或分攤補貼。經費不大，但能否實現取決於其他機關。","sources":[]},
  // 升級警方影像分析系統為即時攔截並全面自動巡檢
  "hhc5-2-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"影像系統升級屬縣府警察局權責。依說明轉述整體估需 6,000 多萬元，並非已查證的工程預算，約占總歲出 0.13%，可分年編列。車牌即時比對已有各地警方使用的先例，一任內可以建置。","sources":[]},
  // 敬老卡點數可全額扣抵長照就醫交通車資
  "hhc5-2-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"敬老卡使用規則由縣府訂定。現況已實施：2026 年 10 月起點數可折抵長照交通接送車資，無單次扣點上限，自付額與自費額均可折抵。每月點數總額不變，經費可控。","sources":["https://www.cna.com.tw/news/aloc/202608180149.aspx","https://www.storm.mg/article/11166878"]},
  // 以較高薪點約聘工程人員補足縣府缺額
  "hhc5-2-p6": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"約聘人員可在聘用人員薪點規定範圍內核定較高薪點，屬縣府人事權責，但須符合相關人事法規與職務條件。政見涉及多個局處，聘用人數、薪點與期間未說明，經費無法估算。要做的事明確，可在下一年度預算中辦理。","sources":[]},
  // 增設公共托育與室內親子活動空間
  "hhc6-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"增設公共托育與室內親子空間需縣府取得場地並編列建置與營運經費，中央有公共托育設施補助可申請；數量、地點與經費均未說明，經費無法估算。尋找場地與建置在任期內可完成部分。","sources":[]},
  // 複雜路口導入智慧號誌
  "hhc6-1-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出複雜路口導入智慧號誌的方向，未說明路口位置、數量與系統內容，屬方向性構想，資訊不足以判斷可行性。","sources":[]},
  // 設智慧醫療服務站並串聯鄰近醫療資源
  "hhc6-1-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出設智慧醫療服務站、串聯竹北醫療資源的方向，未說明服務內容、地點、營運方式與經費，屬方向性構想，資訊不足以判斷可行性。","sources":[]},
  // 社會救助金開放線上捐款與多元支付
  "hhc6-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"捐款管道數位化屬縣府行政作業，可採用既有的線上金流服務，經費小，短期可以完成。","sources":[]},
  // 提高敬老愛心卡點數並擴及長照專車與農會、藥局
  "hhc6-2-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"敬老愛心卡屬縣府社政業務。現況已實施：2026 年 10 月 1 日起每月點數由 500 點提高至 1,000 點，並可折抵長照交通接送車資；農會、合作藥局與診所掛號費預定 12 月 1 日起實施。復康巴士與紙本核銷未見於公告。","sources":["https://www.cna.com.tw/news/aloc/202608180149.aspx","https://www.storm.mg/article/11166878"]},
  // 長照專車建立線上預約平台
  "hhc6-2-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"長照交通接送的線上預約可委外建置或整合既有平台，屬縣府行政數位化，一年內可以上線。額度查詢與車輛排班的介接範圍、既有系統能否沿用尚待確認，經費無法估算。","sources":[]},
  // 改善新埔新湖路 117 號 T 字路口
  "hhc6-2-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"路口改善屬縣府工務與交通業務，以縣款調整道路配置屬小型工程，經費小，一年內可完成。","sources":[]},
  // 加速寶石大橋拓寬
  "hhc6-2-p4": {"track":"long","level":"unclear","authority":"medium","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"未確認","horizon":"無法判斷","reason":"橋梁拓寬屬多年實體建設，由縣府或中央公路主管機關辦理，視橋梁層級而定。政見只說加速並增設機車道、人行道，未說明目前進度、經費與期程，橋梁改建還涉及河川審查，規劃成熟度、財務與期程都無法判斷。","sources":[]},
  // 新埔市場用地評估多目標使用與 BOT 活化
  "hhc6-2-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市場用地多目標使用與促參評估屬縣府權責，可委託辦理，評估經費不高，一任內可以完成。後續能否招商、財務是否可行，是評估要回答的問題，政見並未承諾任內完成招商。","sources":[]},
  // 加速新埔寶石里文德路自來水延管
  "hhc6-2-p6": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"自來水延管需由縣府協調自來水事業單位並申請中央延管補助，涉及 104 戶，規模明確。土地與河川公地使用是主要障礙，需逐一協調，一任內可望完成但存在變數。","sources":[]},
  // 督導新埔通學公車完成定位與動態資訊系統
  "hhc6-2-p7": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"5619、5621 屬公路主管機關核管的公路客運，定位與動態資訊需由業者配合公路主管機關系統建置，縣府無法直接要求。縣府可協調業者與公路主管機關、設置查詢與異常通報窗口，技術成熟、經費小，但完成時程取決於其他機關。","sources":["https://ws.thb.gov.tw/Download.ashx?icon=.pdf&n=5qGD56u556u56IuXMTAxMi5wZGY%3D&u=LzAwMS9VcGxvYWQvNDM2L3JlbGZpbGUvLTEvNDM2L2U3NGU0OTc5LTA1NDctNGU0OS1hNWVkLTlmZjA4NmI1MzJkMS5wZGY%3D"]},
  // 爭取縣府分攤偏鄉自來水延管經費
  "hhc6-3-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"medium","reason":"偏鄉延管已有經濟部水利署補助、縣府與鄉鎮公所分攤的模式，如2024年寶山鄉4件延管工程總經費3,216萬元，縣府分攤316.8萬元；提高縣府分攤比例需縣府編列預算。延管範圍與分攤比例未說明，經費無法估算。","sources":["https://news.ltn.com.tw/amp/news/life/breakingnews/4771061"]},
  // 編列預算協助橫山聯通管沿線居民接用自來水
  "hhc7-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"縣府編列預算協助居民接用自來水屬地方權責。政見稱中央 2026 年起不再補助，但 115 年度水利署「無自來水地區供水改善計畫」仍有核定其他縣市延管補助的案例，地方多以配合款方式分擔。需延管的長度與戶數未說明，經費無法估算，且須自來水事業配合施工。","sources":["https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=8790707"]},
  // 與台鐵合作重新推廣合興車站觀光
  "hhc7-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"由縣府觀光單位與鐵路營運機構合作推廣車站觀光，有多處支線車站的先例，以行銷與活動為主，經費小、期程短。","sources":[]},
  // 專案補助鄉公所整修內灣吊橋
  "hhc7-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"吊橋由鄉公所管理，經檢測為 U4 危橋，公所估計僅換鋼索約需 1,500 萬元，整座更新至少 3,000 多萬元。中央觀光主管機關不予補助，由縣府專案補助公所屬地方可行做法，金額占縣年度歲出不到 0.1%，一至兩年內可修復。","sources":["https://news.ltn.com.tw/news/life/breakingnews/5275624"]},
  // 橫山警察分局易地重建
  "hhc7-1-p3": {"track":"long","level":"unclear","authority":"medium","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"僅提出需求，用地未定","horizon":"無法判斷","reason":"警察分局廳舍重建由縣警察局提報，通常需警政主管機關補助並由縣府配合款支應。政見未說明新址、規模與經費，也未見已核定的規劃，規劃成熟度、財務與期程都無法判斷。","sources":[]},
  // 竹東開設兒童夜間門診
  "hhc9-1-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"夜間兒科門診須由醫院排班開設，縣府只能協商並提供補助。兒科醫師人力普遍不足，能否固定開診取決於醫院意願與人力，一任內可望先試辦部分診次。","sources":[]},
  // 建立竹東、竹北、新竹之間的兒童急重症轉診後送機制
  "hhc9-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"建立轉診窗口、啟動條件與流程屬縣府衛生主管機關可協調的事項，需與竹北、竹東及新竹市醫院簽訂合作，主要是行政成本。機制本身不涉及新增病床或醫師，一任內可建立。","sources":[]},
  // 爭取中央計畫並編列預算補足夜間兒科人力
  "hhc9-1-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"夜間診療費、值班加成與護理津貼屬縣府可編列的補助，也可申請中央急重症或偏鄉醫療計畫。金額未說明，且兒科醫師供給不足，有錢也未必找得到人，人力到位是主要障礙。","sources":[]},
  // 建立兒童夜間就醫資訊平台
  "hhc9-1-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"整合夜間門診、急診與 119 資訊的查詢平台，屬縣府衛生主管機關可自建或擴充既有網站的事項，主要是資料整合，經費小，一年內可上線。","sources":[]},
  // 將五峰納入夜間兒童醫療網
  "hhc9-1-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"串接衛生所與消防救護、訂定夜間聯繫及後送流程屬縣府衛生、消防單位權責，以行政協調為主。兒科遠距諮詢已有偏鄉案例，經費不大，一年內可建立。","sources":[]},
  // 推動孕產婦營養補助、臨時托嬰與育兒卡
  "hhc9-1-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"孕產婦營養補助、臨時托嬰與育兒卡屬縣府社政業務，可自籌辦理。補助金額、資格與服務規模未說明，經費無法估算，規模大小影響財政負擔；制度建立一任內可完成。","sources":[]},
  // 推動長者與兒童智慧照護
  "hhc9-1-p6": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"智慧手環與緊急通報屬縣府社政可採購的服務，各縣市已有獨居長者緊急救援系統先例。服務對象人數與補助方式未說明，經費無法估算，規模大小影響財政負擔；系統建置一任內可完成。","sources":[]},
  // 以數據分析改善壅塞路段與號誌
  "hhc9-1-p7": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"號誌與動線調整屬縣府交通主管機關權責，以車流資料分析調整時制已有許多縣市先例，經費小，一任內可見成效。","sources":[]},
  // 建立公園設施長期維護管理機制
  "hhc9-1-p8": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"公園維護屬縣府與鄉鎮公所業務，建立定期巡檢與維護預算機制屬行政制度調整。維護經費需逐年編列，金額未說明；制度建立一任內可完成。","sources":[]},
  // 竹東員山路閒置道路用地活化為鄰里公園
  "hhc9-2-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"閒置道路用地活化為鄰里公園屬縣府或鎮公所權責，地點明確。土地權屬、面積與是否需變更使用未說明，經費無法估算；若為公有地可較快完成，若涉及私有地則需先處理取得。","sources":[]},
  // 補助 65 歲以上長者健保自付保費
  "hhc9-2-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"補助長者健保自付保費屬地方自治事項，已有縣市開辦，補助上限每人每月 826 元，並排除已獲其他政府全額補助者。縣內 65 歲以上長者約 9.1 萬人，若全數補足，粗估上限 9.1 萬 × 826 元 × 12 月 ≈ 9 億元／年，約占年度歲出 1.9%；實際人數扣除已獲補助者後會較低。屬長期經常支出且財源未說明，是主要障礙。","sources":["https://udn.com/news/story/6656/9525774","https://health.tvbs.com.tw/life/363244"]},
  // 督導鄰近住宅的私有山坡地落實水土保持
  "hhc9-2-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"縣府為水土保持法地方主管機關，可依法要求私有山坡地所有人實施水土保持處理，主要是稽查與行政命令。工程費由土地所有人負擔，縣府成本低，任內可執行。","sources":[]},
  // 竹東中興路一段北二高橋面接縫蓋板防滑改善
  "hhc9-2-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"橋面接縫蓋板防滑屬小型道路維護工程，需由道路養護機關辦理，若橋梁屬高速公路管理機關則需協調。經費小，一年內可完成。","sources":[]},
  // 在竹東興建風雨籃球場
  "hhc9-3-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"風雨籃球場由縣府或鎮公所興建，屬地方可自辦的設施。地點、規模與經費都沒有說明，需先找到合適用地，這是主要變數；經費無法估算。","sources":[]},
  // 推動寵物疫苗與基礎除蟲補助計畫
  "hhc9-3-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"寵物疫苗與除蟲補助屬縣府動物保護主管機關可自辦的項目，已有縣市開辦類似補助。補助對象、額度與財源未說明，經費無法估算。要做的事明確，地方有權開辦，一年內可上路。","sources":[]},
  // 寶山水庫水源保護區地主每公頃補償 6 萬元
  "hhc9-4-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"粗估補償總額 264 公頃 × 6 萬元 = 1,584 萬元，占縣總歲出約 0.03%，金額小；政見未說明是一次或每年發放。指定財源科學園區回饋金須經園區管理機關核定撥用，縣府已有申請撥用的先例，但能否用於地主補償不確定。解除保護區須依自來水法由主管機關會商相關機關辦理，程序複雜。","sources":["https://www.hsinchu.gov.tw/News_Content.aspx?n=153&s=261518"]},
  // 爭取竹東頭重、二重、三重污水下水道
  "hhc9-4-p1": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"medium","schedule":"unclear","stage":"列為縣內優先爭取中央補助的第一名，尚未核定","horizon":"約 6–10 年","reason":"污水下水道由縣府規劃，興建經費主要仰賴中央補助，地方需負擔配合款。已列縣內優先爭取項目，但尚未核定；管網施工與用戶接管通常需分期多年，未說明時程。","sources":[]},
  // 新竹縣市輕軌藍線設竹中站
  "hhc9-4-p2": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"unclear","schedule":"medium","stage":"紅藍線整合可行性研究評估中，竹中站列為紅線候選站","horizon":"約 10–15 年","reason":"輕軌站點由縣市政府在可行性研究中規劃，路線需中央核定。紅藍線整合可行性研究已獲交通部補助並啟動，目標 2027 年底前提報；目前竹中站是評估納入紅線、服務竹東轉乘，並非藍線。財務規劃尚未公布。","sources":["https://www.cna.com.tw/news/aloc/202609220203.aspx"]},
  // 農路工程預算加倍至 1 億 2,000 萬元
  "hhc9-4-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"農路預算由縣府提出、議會審議，議會不能自行增加支出，需縣府採納。依說明現行約 6,000 萬元，加倍後多出約 6,000 萬元，約占總歲出 0.13%，可在年度預算調整。頭重路拓寬沒有說明長度、用地與經費，這部分無法評估。","sources":[]},
  // 外五里設立公立幼兒園
  "hhc9-4-p4": {"level":"medium","authority":"medium","cost":"medium","timeline":"low","reason":"設立公立幼兒園屬縣府權責，中央有公共化幼兒園補助。但要把保護區土地變更後徵收，須經都市計畫變更與徵收程序，再規劃興建，一任內完成的機會低。若改用閒置校舍或公有地會較快。","sources":[]},
  // 編列預算評估國道 3 號二重交流道銜接台 68 線
  "hhc9-4-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"只要求編列可行性評估預算，評估費用小，可列入下一年度預算。交流道實際興建須經交通部高速公路主管機關核定，不屬本則範圍。","sources":[]},
  // 敬老愛心卡計程車單趟補助提高至 300 點
  "hhc9-4-p6": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"調整計程車單趟折抵上限及納入復康巴士，屬縣府修正敬老卡使用規定即可辦理。總點數仍受每月額度限制，額外支出有限。縣府已擴大敬老卡用途，配合調整屬行政作業。","sources":["https://udn.com/news/story/6656/9525774"]},
  // 竹東河濱公園下公館段編列預算整體改善
  "hhc9-5-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"unclear","reason":"河濱公園改善與增設公廁屬縣府或公所權責，管理施工車輛停放可透過行政措施短期處理。「整體改善」的範圍與經費未說明，工程部分的經費與期程都無法估算。","sources":[]},
  // 噪音防制優先增購半固定式聲音照相設備
  "hhc9-5-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"噪音管制屬縣府環保主管機關權責，增購聲音照相設備為設備採購，單價不高，可列入年度預算，一年內可完成。","sources":[]},
  // 公有市場與夜市攤販契約納入產品責任險
  "hhc9-5-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公有市場攤商契約由縣府或公所訂定，納入產品責任險條款屬行政作業，保費由攤商負擔，公部門成本低。夜市若非公有，則需另訂自治規範或改用輔導方式。","sources":[]},
  // 改善快捷 8 號支線準點與車況，配合新設高工增班
  "hhc9-5-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公車班次、車輛汰換由縣府交通主管機關與業者協調，新生宣導屬教育行政配合，皆為一般行政作為。依搭乘人數增班的經費有限，一任內可見成效。","sources":[]},
  // 數位發展處剩餘預算暫停動用並向議會專案報告
  "hhc9-5-p4": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求局處專案報告、對預算動支提出凍結或附帶決議，屬議會預算審議與監督職權，議員可直接提案，不需經費。","sources":[]},
  // 增設竹東工研院東、西大門公共自行車站
  "hhc9-5-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公共自行車站點增設由縣府交通主管機關與營運業者規劃，單站成本低。設在機構大門口需取得用地同意，屬一般協調，短期可完成。","sources":[]},
  // 研擬學齡前兒童牛奶補助
  "hhc9-5-p6": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"承諾是研擬學齡前兒童牛奶補助，研究與方案設計屬縣府可自辦事項，一任內可以完成。補助對象、額度與頻率都未說明，日後實際發放的經費無法估算，研擬後是否實施也未承諾。","sources":[]},
  // 營養午餐每餐補助調高 10 元
  "hhc9-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"營養午餐補助屬縣府教育業務。縣府已自 115 學年起每生每餐增加 10 元，國小由 60 元調為 70 元、國中由 63 元調為 73 元，全年預算由 5.6 億增至 6.8 億元，訴求已實現。","sources":["https://news.ltn.com.tw/news/HsinchuCounty/breakingnews/5557970"]},
  // 敬老卡點數提高至 800 至 1,000 點並擴大用途
  "hhc9-6-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"現況已實施：2026 年 10 月起敬老卡每月點數提高至 1,000 點。掛號費（每次 50 點）、農會與合作藥局（每月各上限 200 點）已宣布 12 月 1 日起實施，尚未上路；健保部分負擔未列入公告，屬縣府可調整的使用規則。","sources":["https://www.cna.com.tw/news/aloc/202608180149.aspx","https://www.storm.mg/article/11166878"]},
  // 竹東外五里二重埔社區增設公共托育
  "hhc9-6-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"公共托育屬縣府社政業務，中央有設置補助可申請。服務模式、容額與場地未說明，經費無法估算；需在二重埔找到合適場地，任內能否完成視場址而定。","sources":[]},
  // 二重公五公園增設兒童共融遊戲設施
  "hhc9-6-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"在既有公園增設共融遊具屬縣府或公所的公園管理事項，各縣市已有不少先例，一年內可以完成。設施規模未說明，經費無法估算。","sources":[]},
  // 竹東警察分局重建
  "hhc9-6-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"警察分局重建由縣警察局辦理，可申請中央補助。規模、基地與經費未說明，經費無法估算；需經設計、發包與施工，四年內完工偏緊。","sources":[]},
  // 竹東大禾埕以空中步道串連河濱公園
  "hhc9-6-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"政見說明本身表示仍是構想、尚非具體計畫，空中步道的路線、長度、經費都未交代，無法估算規模與期程。","sources":[]},
  // 整建竹東五豐里油車窩溪上游駁崁
  "hhc9-6-p6": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"溪流駁崁整建屬縣府或鎮公所的防災工程，可申請中央治理經費。駁崁長度、損壞情況與用地未說明，經費無法估算；地點明確，需經工程調查與設計後施工。","sources":[]},
  // 在竹東鎮中心建立長照服務系統
  "hhc9-7-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"長照服務屬縣府社政與衛生業務，但「建立長照服務系統」未說明服務內容、據點、規模或經費，無法判斷成本與期程。","sources":[]},
  // 協調改善竹東大眾運輸
  "hhc9-7-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"未說明具體作法、路線或經費，無法判斷成本與期程。","sources":[]},
  // 交通罰款專款專用於偏鄉山區通學交通
  "hhc9-8-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"交通違規罰鍰75%分配縣市，現行辦法僅規定至少12%作交通執法與安全改善，其餘用途由縣府編列，縣府可透過預算或自治條例專款用於偏鄉通學交通。專款比例與金額未說明，經費無法估算；需縣府與議會共同完成。","sources":["https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040041"]},
  // 竹東河濱公園加裝路燈與監視器
  "hhc9-9-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"河濱公園加裝路燈、監視器及重鋪路面屬縣府或公所一般養護工程，經費小、技術單純。橋墩間施工需與橋梁管理單位及河川管理機關協調，屬例行程序，一年內即可完成。","sources":[]},
  // 聯通管工程復舊時於河濱公園設停車場並種植四季花卉
  "hhc9-9-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"在河濱公園設停車場、種花卉帶屬縣府或公所可推動的事項。停車容量、花卉帶面積未說明，經費無法估算；能否併入聯通管復舊工程，也未見已納入契約的資料。河川區域內設施需經河川管理機關許可，期程視核准而定。","sources":[]},
  // 竹林大橋下方空間設置風雨球場
  "hhc9-9-p2": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"橋下設置球場已有各地先例，造價不高。但橋下空間多位於河川區域或屬橋梁管理單位，需取得河川公地使用許可，並確認不影響橋梁維護與防洪，核准是主要變數。","sources":[]},
  // 盤點老舊垃圾車並向中央爭取汰換
  "hhc9-9-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"垃圾車汰換可申請中央環保補助，盤點屬縣府與公所行政作業，經費小。說明列出竹東 27 輛中有 11 輛逾 15 年，但政見重點是盤點與爭取補助，實際汰換數量與地方配合款未說明。","sources":[]},
  // 竹東行政中心遷移後舊廳舍改為樂齡與親子設施
  "hhc9-9-p4": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"舊廳舍分屬鎮公所、代表會與縣府，改設樂齡、輔助資源中心與親子館需縣府與鎮公所協調。整修經費未說明；需等行政中心遷移完成後才能動工，期程取決於遷移進度。","sources":[]},
  // 竹東分局與派出所改建
  "hhc9-9-p5": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"警察廳舍改建由縣府警察局辦理，需取得戶政遷出後的土地、先完成暫遷再拆除新建。改建經費通常達數億元，且未說明財源；暫遷、設計、發包、興建串聯，一任內完工有一定難度。","sources":[]},
  // 竹東北興路、中興路及二三重埔設噪音與測速科技執法
  "hhc9-9-p6": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"噪音與測速科技執法由縣府警察局、環保局設置，已有法源，各縣市普遍採用，一年內可以上線。設置路段與設備數量未說明，經費無法估算。","sources":[]},
  // 新湖路（竹 40 線）拓寬納入 2027 年度縣預算
  "hhc10-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"竹 40 線屬鄉道，以縣款列入縣預算辦理拓寬屬縣府可決定的事項，議員可在預算審議時爭取。路段約 1.15 公里，但拓寬寬度與經費未說明，無法估算。拓寬多半涉及用地取得，列入預算後能否在一任內完工取決於徵收進度。","sources":[]},
  // 建立寶山水庫周邊地主補償機制
  "hhc10-1-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"水源保護區地主補償需縣府或中央設立回饋機制，但未說明補償標準、範圍與財源，無法估算經費與期程。","sources":[]},
  // 寶山分駐所改建
  "hhc10-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"medium","reason":"分駐所改建由縣警察局辦理，可申請中央老舊廳舍改建補助。單一分駐所屬小型公共建築，經費相對縣總歲出很小；需經設計、發包與施工，約 3 至 4 年可完成，未說明用地與經費來源。","sources":[]},
  // 整併偏鄉鄉立與國小附設幼兒園
  "hhc10-1-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"鄉立幼兒園屬鄉公所，附幼屬縣府，整併需縣府與公所協調並依幼照法辦理設立變更。招生不足時整併可以節省經費，一任內可以完成。","sources":[]},
  // 敬老卡提高至每月 1,000 點並放寬使用範圍
  "hhc10-1-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"點數提高到每月 1,000 點現況已實施（115 年 10 月起）。農會、合作藥局及診所掛號費預定 12 月 1 日起開放，尚未上路；藝文場館購票未列入，需另行修訂使用規定。","sources":["https://www.cna.com.tw/news/aloc/202608180149.aspx","https://udn.com/news/story/6656/9525774"]},
  // 寶山雙溪生命紀念園區第二期增設禮廳
  "hhc10-1-p5": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"紀念園區由鄉公所規劃，縣府可補助經費。禮廳屬殯葬設施，需依法申請設置；規模與經費未說明，在既有園區內擴建可降低用地困難，任內完成需看縣府撥款時程。","sources":[]},
  // 寶山水庫兩座老舊吊橋改建
  "hhc10-1-p6": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"吊橋改建需縣府或鄉公所編列工程經費，若位於水庫管理範圍或水源保護區，另需與水庫管理機關協調。兩座吊橋規模與經費未說明，工程本身可在任內完成，協調程序是主要變數。","sources":[]},
  // 補助寶山鄉壘球場暨周邊遊憩設施 4,200 萬元
  "hhc10-1-p7": {"level":"high","authority":"medium","cost":"high","timeline":"medium","reason":"補助 4,200 萬元約占總歲出 0.09%，額度明確。需縣府採納並編列預算，再由鄉公所設計發包；施工期程未說明，任內能否完工尚待確認。","sources":[]},
  // 北埔客運站與峨眉隆聖宮設置公共自行車站
  "hhc11-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公共自行車設站屬縣府交通主管機關業務，需縣府採納執行。兩處站點屬小規模設置，經費占縣總歲出比例極低，且有既有營運系統可擴充，一任內可完成。","sources":[]},
  // 台三線北埔至三灣路段設噪音科技執法
  "hhc11-1-p1": {"level":"medium","authority":"low","cost":"high","timeline":"high","reason":"噪音科技執法與查處由縣府環保機關辦理，縣內已有固定式聲音照相設備上路。路段延伸至鄰縣，跨縣部分需協調；台三線屬省道，速限與道路改善需中央公路主管機關配合。縣內設置聲音照相設備經費小，一年內可上路。","sources":["https://www.hsinchu.gov.tw/News_Content.aspx?n=153&s=261518"]},
  // 盤點北埔、峨眉淹水熱區並強化排水與預警
  "hhc11-1-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"unclear","reason":"盤點淹水熱區、設置預警屬縣府水利主管機關權責，盤點與預警設備可在短期內完成。後續強化排水的工程內容與規模未說明，經費與期程都無法估算，因此整體只能部分確認可行。","sources":[]},
  // 放寬敬老愛心卡使用項目並提高點數
  "hhc11-1-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"現況已實施部分：縣府自 115 年 10 月起提高敬老愛心卡點數至每月 1,000 點，並新增長照交通接送折抵。農會、合作藥局及診所掛號費預定 12 月 1 日起開放，尚未上路，政見方向大致已在落實中。","sources":["https://www.cna.com.tw/news/aloc/202608180149.aspx","https://udn.com/news/story/6656/9525774"]},
  // 教室冷氣開啟標準由 28 度調為 26 度
  "hhc11-1-p4": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"國中小冷氣使用規範由縣府教育主管機關訂定，調整開啟溫度或授權教師彈性屬行政決定。調低兩度會增加電費，金額未估算；次學期即可實施。","sources":[]},
  // 補助帶狀疱疹疫苗
  "hhc11-1-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"疫苗補助屬縣府衛生業務，已有直轄市自籌全額補助弱勢長者兩劑、鄰近城市每人定額補助 2,000 元等不同作法。政見只說優先補助高齡、低收入與高風險族群，補助人數與金額未說明，經費無法估算；次年度即可實施。","sources":["https://www.storm.mg/article/11135601","https://dg-srv.hccg.gov.tw/serviceNotice.do?id=1201&rule=guest"]},
  // 改善北埔消防分隊廳舍漏水
  "hhc11-1-p6": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"消防廳舍漏水修繕屬縣府消防局的一般維護工程，經費小，一年內可以完成。","sources":[]},
  // 原住民建購修繕補助與急難紓困開放線上申辦
  "hhc12-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"補助案改為線上申辦屬縣府行政數位化，可沿用既有申辦平台，經費小，一年內可以完成。","sources":[]},
  // 輔導鄉鎮市公所申辦戶役政電子閘門
  "hhc12-2-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"協助公所申請戶役政資訊連結作業屬行政輔導，依既有申請程序辦理即可，經費小，一年內可完成。","sources":[]},
  // 縣府自籌補足原住民急難救助經費
  "hhc12-2-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"急難救助屬縣府社政業務，中央計畫刪除後改由縣府自籌在預算編列上可行，議員可透過預算審議推動。急難救助經費規模相對縣總歲出很小，次年度預算即可編列。","sources":[]},
  // 文化健康站長者接送改採特約車隊
  "hhc12-2-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"把購車與聘駕駛經費改為向運輸業者購買接送服務，是調整既有經費用途，不需新增大筆預算。文化健康站經費多來自中央原住民族主管機關，用途變更需依補助規定報核，屬行政程序，短期內可推動。","sources":[]},
  // 提高體育選手營養金
  "hhc12-2-p4": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"體育選手營養金由縣府教育單位編列，調高屬縣府可自行決定的事項，可在下一年度預算調整。補助對象、現行金額與調高幅度都未說明，經費無法估算。","sources":[]},
  // 關西馬武督部落文化彩繪與美化專案輔導
  "hhc12-2-p5": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"部落彩繪美化可由縣府原民單位以專案計畫輔導，屬縣府可自辦事項，短期可以執行。彩繪範圍與規模未說明，經費無法估算。","sources":[]},
  // 全面體檢尖石後山部落用水
  "hhc13-2-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"部落用水普查與排序屬縣府與鄉公所可辦理的事項，調查本身經費不高，一任內可以完成。後續改善工程的規模尚未說明，經費需另行爭取，常見來源是中央原民或水利補助。","sources":[]},
  // 研議制定新竹縣原住民族自治條例
  "hhc14-3-p0": {"level":"medium","authority":"high","cost":"unclear","timeline":"medium","reason":"研議與提案制定自治條例屬議員職權。原住民族土地權益與自治制度多屬中央法律規範，地方自治條例不能逾越，能處理的範圍限於縣府資源分配與經費保障。條文與經費保障方式未提出，經費無法估算；研議與審議可在任內完成。","sources":[]},
  // 弱勢老人看護補助免先墊付並簡化申請
  "hhc14-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"改為免先墊付、簡化申請，屬縣府社會福利主管機關修正作業規定即可辦理，例如改由特約單位向縣府請款，不增加補助總額，短期內可推動。","sources":[]},
  // 編列 2027 年度坑溝野溪整治預算
  "hhc14-3-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"編列野溪整治預算屬縣府權責，議員可在預算審議時要求。未說明整治地點與規模，經費無法估算。山區野溪整治常仰賴中央水土保持補助，縣款能編多少要看財政。","sources":[]},
  // 改善五峰、尖石山區道路標誌標線
  "hhc14-3-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"縣道及鄉道標誌標線改善屬縣府與公所例行道路維護，經費小、工期短。路段若屬省道，則需請公路主管機關辦理。","sources":[]},
});

/*
 * 2026 新竹市議員政見：可行性評估
 *
 * 評估日期：2026-11-02。由本站依統一標準評估，不是專家意見。
 * 評估時政見已匿名並打亂順序，評估者不知道每則政見屬於哪位候選人。
 * 議員政見的「權責」依議員職權判斷（見方法說明第 6 節）：需要市府採納執行屬常態，不拉低總評。
 * 一般政見與長期建設的評估面向同 new-taipei-feasibility.js。
 * 預算比較基準：新竹市 116 年度歲出約 423 億元（同 hsinchu-city-feasibility.js）。
 * 2026-11-02 經 Codex 獨立查核、逐條裁決後修正（事實、來源、粗估與評等一致性）。
 */
window.FEASIBILITY = Object.assign(window.FEASIBILITY || {}, {
  // 十八尖山周邊興建立體停車場
  "hcc1-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"立體停車場屬市府交通處權責。須取得十八尖山周邊用地，並考量山區景觀與環境影響。未說明地點、席位數與經費，經費無法估算；用地與設計審查使期程具不確定性。","sources":[]},
  // 敬老卡點數開放用於復健
  "hcc1-1-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"敬老卡點數使用範圍由市府社福規定決定，增列復健通路屬行政調整。點數額度不變，但新增用途可能提高實際核銷支出；未說明適用費用與合作院所，新增經費無法估算。市府近年已陸續擴充使用範圍，點數使用率由 112 年 8% 升至 115 年 48%，有擴充先例可循。","sources":["https://n.yam.com/Article/20260928884172"]},
  // 推動輕軌並擴大先導公車路網，改善科學園區通勤與行人安全
  "hcc1-2-p0": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"unclear","schedule":"unclear","stage":"紅藍線整合可行性研究進行中，目標 2027 年底提報中央","horizon":"約 10–15 年（粗估）","reason":"輕軌需中央審查核定並補助，大新竹輕軌整合可行性研究 2026 年 3 月決標，目標 2027 年底提報交通部審查，任期內不會通車；政見未公布期程與經費，財務無從判斷。先導公車路網擴大屬市府權責，可在四年內推動，但不能抵銷輕軌的不確定性。期程為粗估，依據是可行性研究後仍須綜合規劃、設計與施工。","sources":["https://www.cna.com.tw/news/aloc/202609220203.aspx","https://news.pchome.com.tw/realestate/myhousing/20260917/index-78961147879191259101.html"]},
  // 增加就近入學量能、改善通學環境並爭取教師合理待遇
  "hcc1-2-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"涵蓋入學量能、通學環境與教師待遇等方向，但未說明地點、做法與經費；教師待遇亦部分屬中央規範，無法判斷可行性。","sources":[]},
  // 改善頭前溪水質、推動垃圾處理改革與親子共融公園
  "hcc1-2-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"頭前溪水質涉及中央與上游縣市，垃圾處理與公園屬市府權責。三項皆未說明具體作法與經費，資訊不足以判斷。","sources":[]},
  // 規劃串聯關埔與光復路、學府路沿線高中的通學專車
  "hcc1-2-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"通學專車屬市府交通處與客運業者可辦理的公車業務，市府已回應擴大需求調查。免費免預約模式需市府補貼營運，經費未說明但屬路線級支出，四年內可望開行。","sources":[]},
  // 要求市府對關埔二期與周邊學區做教育量能總體檢
  "hcc1-4-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求市府進行學區教育量能盤點，可透過質詢與預算審議督促，屬行政規劃作業，經費小，短期內可完成。","sources":[]},
  // 爭取興建新學校或加速 K-12 科技雙語示範學校規劃
  "hcc1-4-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"新設學校屬市府教育處權責，議員可透過質詢與預算審查推動，政見主張以興建或加速規劃二擇一，屬爭取性質。未說明地點、規模與經費，經費無法估算；加速規劃四年內可見進度，但學校實際落成通常超過一任。","sources":[]},
  // 提高特教助理員待遇並增設校園專任心理諮商師與社工
  "hcc1-4-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"特教助理員待遇、培訓制度與校園專任心理師、社工增聘屬市府教育處權責。未說明加薪幅度與增聘人數，經費無法估算；屬逐年增加的經常性人事支出，財源未說明。","sources":[]},
  // 設置學童課後諮詢中心並提供平價或免費學習支持
  "hcc1-4-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"課後學習支持屬市府教育處權責，可結合既有課後照顧與公私協力資源。未說明中心數量、人力、服務量與經費，經費無法估算；財源未說明。","sources":[]},
  // 汰換添購可調式課桌椅並定期檢討營養午餐餐費與食材品質
  "hcc1-4-p4": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"課桌椅汰換與午餐餐費檢討屬市府教育處權責，可分年編列預算辦理。汰換數量與餐費調整幅度未說明，經費無法估算；兩者都是常態教育業務，無法令障礙，四年內可推動。","sources":[]},
  // 科學園區周邊導入 AI 智慧號誌，推動停車場立體化並以空橋銜接
  "hcc1-4-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"智慧號誌屬市府交通權責，可較快導入；立體停車場與空橋銜接則需用地、設計與工程，經費未說明。整體可部分於四年內推動，但立體化與空橋工程期程較不確定。","sources":[]},
  // 建請設置含托育、托嬰服務的地區樂齡活動中心
  "hcc1-4-p6": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"樂齡活動中心與托育服務屬市府社福權責，可爭取中央補助。未說明地點、規模與經費，新設據點需覓得合適空間並符合托嬰設置標準。","sources":[]},
  // 重劃區規劃大型親水公園、兒童運動遊樂設施與寵物活動公園
  "hcc1-4-p7": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"公園、遊憩設施與閒置空間轉型屬市府權責。政見未指明是哪個重劃區、公園與觀景台的地點與規模，也未說明哪些閒置空間要轉為公托、親子館或學習據點，建物條件與營運需求都無從判斷，可行性資訊不足。","sources":[]},
  // 爭取在東區興辦幼兒園至高中的 K-12 學校，並加速高中擴校
  "hcc1-5-p0": {"track":"long","level":"unclear","authority":"medium","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"未提供用地、規模與規劃資料","horizon":"無法估計","reason":"新設學校、高中擴校與校舍重建屬多年興建的實體建設，市立學校屬市府權責，國立高中則屬中央。政見未說明用地、規模、經費與期程，也未附正式規劃資料，規劃成熟度、財務與期程都無法判斷。","sources":[]},
  // 爭取東區青少年館並督促加速日治時期燃料廠遺址修復活化
  "hcc1-5-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"青少年館屬市府設施，需覓地或活化既有空間；燃料廠遺址修復屬文資修復工程，期程受文資審議與產權影響。政見未說明地點與經費。","sources":[]},
  // 研議以敬老愛心卡點數折抵醫療院所掛號費
  "hcc1-5-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"研議以敬老愛心卡折抵掛號費屬市府擴充點數使用範圍的行政調整，先與公立醫療院所合作再擴及民間診所，作法可行。點數額度不變，但新增用途可能提高實際核銷支出，增加幅度無法估算。鄰近的新竹縣已宣布預定 115 年 12 月 1 日起開放折抵診所掛號費。","sources":["https://www.cna.com.tw/news/aloc/202608180149.aspx"]},
  // 補助認養 15 歲以上老犬醫療費並增列動物緊急醫療預算
  "hcc1-5-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"動物醫療補助屬市府動保業務。政見自估緊急醫療連同器材約 220 萬元，占總歲出比例極低；老犬醫療補助與動保擴編未說明數量與金額，整體經費無法估算。擴大編制與應變編組需市府人事調整，無法令障礙，四年內可推動。","sources":[]},
  // 另覓地點新建 250 公尺國際標準自由車場
  "hcc1-5-p4": {"track":"long","level":"unclear","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"僅議會建議，未有選址或規劃","horizon":"無法估計（尚未選址）","reason":"新建國際標準自由車場需另覓用地、規劃設計並編列經費，目前僅為構想，未提出地點與財源，財務與期程都無法判斷。現況：既有場地前次整修投入約 1.18 億元，驗收後仍傳出漏水、龜裂問題。","sources":["https://news.ltn.com.tw/news/politics/breakingnews/5570535","https://www.cna.com.tw/news/aspt/202401240185.aspx"]},
  // 訂立選手外縣市移地訓練補助制度
  "hcc1-6-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"運動選手移地訓練補助屬市府教育處權責。現況已有補助要點與績優選手培訓站實施計畫，符合條件的體育團隊可申請國內移地訓練補助，但未涵蓋所有缺乏本地場地的學生與選手。新制度的補助對象與額度未說明，經費無法估算；督促雙語教育資源屬質詢監督範圍。","sources":["https://news.ltn.com.tw/news/politics/breakingnews/5570535","https://law.hccg.gov.tw/LawContent.aspx?id=FL087607"]},
  // 爭取兒童藝術節、地方藝術節每年在關埔地區辦理專場
  "hcc1-6-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"藝術節場次安排屬市府文化活動權責，增辦一個地區專場經費有限，次年度即可辦理。","sources":[]},
  // 評估敬老愛心卡與長照交通接送整合，以點數折抵車資
  "hcc1-6-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"政見標的是評估敬老卡與長照交通接送整合，評估作業由市府辦理即可，四年內可完成。實際整合時，長照交通接送以中央長照經費為主，需配合中央給付規定並調整系統；實施成本尚待評估，經費無法估算。","sources":[]},
  // 學生上下學尖峰增加公車班次並開設關埔地區通學專車
  "hcc1-7-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"公車尖峰加班與通學專車屬市府交通處與客運業者可辦理的事項，已請業者評估。經費屬營運補貼等級，四年內可落實。","sources":[]},
  // 要求市府為視障重點國小編列更適合的教材
  "hcc1-8-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"為視障重點學校編製教材屬市府教育處權責，議員質詢可促成。教材編製或採購屬小額經費，對照總歲出影響極小，一任內可完成。","sources":[]},
  // 結合志工協助長輩使用新軟體並防範詐騙
  "hcc1-9-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"結合志工辦理長輩數位與防詐教育，可由社會處、警察局與社區據點辦理，經費小，短期內可推動。","sources":[]},
  // 舊城區設置共享辦公空間，並結合商圈設置托育空間
  "hcc1-9-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"仍屬構想階段，未說明地點、規模、經營方式與經費，無法判斷可行性。","sources":[]},
  // 設置具遮風避雨、夜間照明與 Wi-Fi 的智慧候車亭及智慧垃圾設施
  "hcc1-9-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"候車亭與垃圾設施屬市府交通、環保權責。仍在構想階段，未說明設置數量與智慧功能內容，經費無法估算；設置須逐站檢討人行道空間與電力、網路供應，可分批設置。","sources":[]},
  // 推動科學園區周邊通勤交通改善與大眾運輸
  "hcc1-10-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出科學園區交通改善與大眾運輸的方向，未說明路線、預算與期程；園區聯外交通亦涉及中央管理單位，無法判斷可行性。","sources":[]},
  // 要求重新檢討民族路路平後停車格與標線劃設
  "hcc1-12-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"停車格與標線劃設屬市府交通處權責，議員質詢即可促成檢討，重新劃設成本低，短期可完成。","sources":[]},
  // 放寬敬老卡代領機制並加強公園遊民管理與環境清潔
  "hcc1-13-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"敬老卡代領規定、公園遊民管理與環境清潔皆屬市府社福、環保權責，以行政規定調整與加強巡查即可推動，經費小，一任內可完成。","sources":[]},
  // 推動人行道改善與公共運輸
  "hcc1-14-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有方向性標題，未說明路段、內容與經費，無法判斷可行性。","sources":[]},
  // 增加兒少休閒空間並推動校園心理健康服務
  "hcc1-14-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"兒少休閒空間與校園心理健康服務屬市府權責，但未說明具體地點、數量與經費，資訊不足以判斷。","sources":[]},
  // 推動大新竹輕軌分期建設
  "hcc1-15-p0": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"unclear","schedule":"unclear","stage":"紅藍線整合可行性研究進行中，目標 2027 年底提報中央","horizon":"約 10–15 年","reason":"輕軌屬大眾捷運系統，需中央審查核定並補助。大新竹輕軌紅、藍線整合可行性研究已獲交通部核定補助，2026 年 3 月決標，目標 2027 年底提報交通部審查，核定後尚需綜合規劃、環評與設計。政見未公布期程與經費，財務與分期方式無從判斷；期程「約 10–15 年」為粗估，依據是可行性研究核定後仍須綜合規劃、設計與施工等階段。","sources":["https://www.cna.com.tw/news/aloc/202609220203.aspx","https://news.pchome.com.tw/realestate/myhousing/20260917/index-78961147879191259101.html"]},
  // 以數位工具發展智慧共乘媒合
  "hcc1-15-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有方向性標題，未說明平台形式、對象與經費，無法判斷可行性。","sources":[]},
  // 深化親子品格教育並強化親師合作
  "hcc1-15-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有方向性標題，未說明具體做法與經費，無法判斷可行性。","sources":[]},
  // 加強校園安全與通報機制，落實反霸凌教育
  "hcc1-15-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"校園安全與反霸凌屬市府教育處權責，但未說明具體措施、人力或經費，資訊不足以判斷。","sources":[]},
  // 確保學生穩定使用數位教學資源
  "hcc1-15-p4": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"數位教學資源屬市府教育處權責，但未說明具體指設備、網路或授權內容，也無規模與經費，資訊不足以判斷。","sources":[]},
  // 推動預防型社區照顧服務，保障長者醫療
  "hcc1-15-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有方向性標題，未說明服務內容、對象、規模與經費，無法判斷可行性。","sources":[]},
  // 建議警察分局遷入新建派出所並改善消防災害應變中心空間
  "hcc1-19-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"警察分局搬遷與消防應變中心空間調整屬市府警消權責。須檢討新建派出所空間是否足以容納分局，並規劃舊址用途；未說明所需面積、裝修與設備內容，經費無法估算，期程取決於空間協調。","sources":[]},
  // 持續推動眷村文化廊帶建置並處理社區活動中心產權問題
  "hcc1-19-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"文化廊帶建置屬市府文化權責。政見未說明廊帶範圍、涉及哪些活動中心及其產權問題內容，經費與期程無法判斷，可行性資訊不足。","sources":[]},
  // 青草湖停車場一樓閒置空間改作戶政作業站或親子休閒場館
  "hcc2-1-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"活化公有停車場閒置空間屬市府權責，議員質詢可促成。是否需變更建物使用、消防與無障礙改善等條件未說明，裝修規模與經費無法估算；利用既有建物，一任內可完成。","sources":[]},
  // 在青草湖服務中心設置南區便民服務站
  "hcc2-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"利用既有服務中心設置便民收件站屬市府民政行政調整，經費小，短期內可實施。","sources":[]},
  // 將兒童適性發展評估等待時間縮短至一個月內
  "hcc2-2-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"兒童發展評估由衛生局與評估醫院辦理，公私協力可擴增量能。目前本市實際等待時間、案件量與評估人力未查得，無法判斷縮短至一個月內的目標四年內能否達成，經費亦未說明。","sources":[]},
  // 校園全面導入社會情緒學習（SEL）課程
  "hcc2-2-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"課程推動屬市府教育處可督導的事項，但課綱屬中央，全面導入可能需透過校訂課程或彈性時間並辦理師資培訓。政見未說明實施範圍、課程時數與培訓方式，規模未說明，經費無法估算，全面落實需時。","sources":[]},
  // 推動二度就業女性數位培訓與心理諮詢
  "hcc2-2-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"職業訓練與心理諮詢屬市府勞工、社福單位權責，可結合既有就業服務資源，但未說明課程規模、對象與經費，資訊不足以判斷。","sources":[]},
  // 試辦以小時為單位的彈性育嬰假
  "hcc2-2-p3": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"育嬰留職停薪屬中央勞動法規，目前最小以日為單位申請，地方無權改為以小時計。地方可做的是自編預算獎勵企業自願提供優於法令的彈性措施，中央也鼓勵企業這麼做；獎勵規模未說明，經費無法估算。","sources":["https://www.mol.gov.tw/1607/28162/28166/28284/28294/84873/post"]},
  // 孕婦搭乘計程車補助延伸至產後一年
  "hcc2-2-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府已有「好孕專車」每胎 6,000 元車資補助，乘車期限 9 月起已延長至預產期後六個月，再延長至產後一年屬行政調整。獎勵計程車配備汽座經費小，次年度可實施。","sources":["https://udn.com/news/story/7324/9704793"]},
  // 補助長輩住家加裝扶手、防滑地板與照明
  "hcc2-2-p5": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"居家無障礙改善補助屬市府社福權責。現況：中央長照對長照需要等級第 2 級以上者提供居家無障礙環境改善給付，未涵蓋所有長輩。地方新增補助的對象、金額與戶數未說明，經費無法估算；屬單戶小額工程補助，四年內可推動。","sources":["https://www.mohw.gov.tw/cp-2704-85367-1.html"]},
  // 爭取長輩健保費補助並擴大敬老愛心卡使用範圍
  "hcc2-2-p6": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"現況已實施：市府自 115 年 9 月起補助設籍 65 歲以上長者及 55 歲以上原住民的健保費自付額，每人每月最高 826 元，免申請，預估逾 7 萬人受益。擴大敬老卡使用範圍屬行政調整，但未說明擴及哪些項目，新增經費無法估算。","sources":["https://dep.hcchb.gov.tw/ch/home.jsp?dataserno=501d23c2-8e15-40f7-a6e9-dcf2773c5d10&id=5&mcustomize=municipalnews_view.jsp&mserno=201601300127&parentpath=&t=MunicipalNews&toolsflag=Y","https://n.yam.com/Article/20260928884172"]},
  // 增加各校藝文教育預算
  "hcc2-2-p7": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"增加藝文教育預算與辦理工作坊屬市府教育、文化單位權責，議員可透過預算審議推動，四年內可見成效。增加幅度未說明，經費無法估算。","sources":[]},
  // 爭取藝文活動每年固定在選區設場並規劃市立美術館空間
  "hcc2-2-p8": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"爭取藝文活動於選區設場屬市府文化局權責，經費小；市立美術館空間政見只要求規劃，四年內可完成規劃作業。場地與規模未說明，經費無法估算。","sources":[]},
  // 布建長照 3.0、社區巡迴駐診與遠距智慧醫療
  "hcc2-3-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"長照服務多由中央長照基金補助、地方布建，巡迴駐診與遠距醫療需市府衛生局與醫療院所合作。未說明據點數量與經費；長照 3.0 由中央主導，地方可配合布建。","sources":[]},
  // 以愛心卡折抵掛號費並推動愛心卡搭車不拒載
  "hcc2-3-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"愛心卡折抵掛號費屬市府擴充點數使用範圍的行政調整。點數額度不變，但新增用途可能提高實際核銷支出，增加幅度無法估算。鄰近的新竹縣已宣布預定 115 年 12 月 1 日起開放折抵診所掛號費，可作參考。搭車不拒載可透過特約車隊契約要求落實。","sources":["https://www.cna.com.tw/news/aloc/202608180149.aspx"]},
  // 導入 AI 智慧號誌、增加公車班次並爭取輕軌延伸至南區
  "hcc2-3-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"AI 智慧號誌與增加公車班次屬市府交通處權責，四年內可推動，但號誌數與班次未說明，經費無法估算。輕軌延伸至南區屬需中央核定的多年軌道建設，一任內無法完成，這部分只評估爭取的可行性。","sources":[]},
  // 打造三代共融公園，增設體健器材、遮陽與戲水設施及籃球場
  "hcc2-3-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"公園設施增設與改善屬市府權責，體健器材、遮陽、戲水設施與籃球場都是常見公共工程。政見未說明地點、規模與經費，經費無法估算；若於既有公園增設，無法令或權責障礙。","sources":[]},
  // 設置社區共讀空間、青年活動據點與多語文化中心，開辦親職及隔代教養課程
  "hcc2-3-p4": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"共讀空間、青年據點、多語文化中心與親職課程涵蓋多項設施與服務，需市府多個單位執行，但未說明數量、地點與經費，資訊不足以判斷。","sources":[]},
  // 推動老屋修繕與無障礙住宅，爭取社會住宅與青年住宅
  "hcc2-3-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"老屋修繕、無障礙住宅、巷弄照明與道路改善屬市府可執行事項；社會住宅與青年住宅的取得方式（新建、包租代管或其他）未說明。政見各項都未說明數量、地點與經費，可行性資訊不足。","sources":[]},
  // 改善易淹水地點、升級排水系統並強化社區防災網絡
  "hcc2-3-p6": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有方向性標題，未說明地點、工程內容與經費，無法判斷可行性。","sources":[]},
  // 要求市府加快南門市場後續硬體改善並提出營運計畫
  "hcc2-4-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"督促市場硬體改善與提出營運計畫屬議員質詢監督，執行屬市府市場管理權責。後續硬體改善範圍與經費未說明，無法估算；提出營運計畫屬行政作業，四年內可完成。","sources":[]},
  // 以專案變更方式儘速規劃新市政中心選址
  "hcc2-5-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"新市政中心選址與規劃需市府主導，並可能涉及都市計畫專案變更，審議程序常需一至數年。政見僅要求規劃與選址，未說明規模與經費，無法估算；任期內完成選址與規劃可行，興建則需更長時間。","sources":[]},
  // 調查南門溪上游違法傾倒營建廢棄物並清理溪流
  "hcc2-6-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"違法傾倒營建廢棄物的稽查屬環保與水利單位權責，可依廢棄物清理法等規定查處並要求行為人負擔清除費用；清理規模未說明，經費無法估算，但調查與清理可在短期內進行。","sources":[]},
  // 要求市府介入協助大樓火災受災戶取得修繕資料
  "hcc2-6-p1": {"level":"medium","authority":"medium","cost":"high","timeline":"high","reason":"公寓大廈管理條例賦予區分所有權人查閱管委會財務資料的權利，地方主管機關可依法輔導或處理；但管委會屬私權團體，市府介入多以協調、限期改善為主，強制力有限。所需行政經費小，短期可辦理。","sources":[]},
  // 營養午餐補助提高至國小每餐 70 元、國中 75 元
  "hcc3-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"營養午餐補助屬市府教育自治事項。市府已宣布 116 年啟動營養午餐 PLUS 方案，每餐再加 10 元，國小提高至 70 元、國中 75 元，與主張相同；目前為已宣布、預定實施，尚待預算通過。","sources":["https://www.storm.mg/article/11166897","https://n.yam.com/Article/20260922465479"]},
  // 升級親師生平台並以 AI 減輕教師與行政人員重複性工作
  "hcc3-1-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"親師生平台升級與 AI 導入屬市府教育處權責，但未說明平台範圍、功能與經費，資訊不足以判斷。","sources":[]},
  // 結合西區傳統米粉產業規劃在地特色藝文活動
  "hcc3-1-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"結合在地產業辦理藝文活動屬市府文化、產業單位權責，可納入年度活動辦理，四年內可完成。活動規模與經費未說明，無法估算。","sources":[]},
  // 要求延平路地下停車場提出調整方案、確保完工
  "hcc3-3-p0": {"level":"medium","authority":"high","cost":"medium","timeline":"medium","reason":"質詢監督屬議員職權。延平路地下停車場總經費約 3.66 億元、中央核定補助約 2.07 億元，因成本上漲四度流標；報導引述議會質詢指中央補助已遭撤銷，市府未正面回應，僅表示預計 116 年底前完成決標。後續財源與能否重新取得補助仍待確認。","sources":["https://www.cna.com.tw/news/aloc/202606120269.aspx"]},
  // 督促南寮消防分隊新廳舍遷建工程如期動工完工
  "hcc4-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"南寮消防廳舍遷建案已完成規劃設計並於2026年9月公開招標，消防局表示預計11月中旬動土、117年第4季完工；經費已在既有計畫內，議員督促進度屬監督職權，任期內可完工。","sources":["https://n.yam.com/Article/20260917970100"]},
  // 要求完善市立棒球場大型賽事散場交通疏運
  "hcc4-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"大型賽事散場疏運屬市府交通處權責，以交通管制、接駁與停車配套為主，經費小，可即時執行。","sources":[]},
  // 推動客語跨局處推廣，市府總機增設客語語音選項
  "hcc4-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"總機語音增設客語選項與市場客語標示屬市府行政事項，經費小，市府已回應總機將朝增設辦理。跨局處推廣機制亦可由市府內部調整，四年內可見成效。","sources":[]},
  // 推動台大醫院新竹分院湳雅院區興建
  "hcc4-7-p0": {"track":"long","level":"medium","authority":"low","maturity":"low","financing":"unclear","schedule":"unclear","stage":"院方規劃多年未有具體進展，市有土地將以有償撥用辦理","horizon":"無法估計","reason":"湳雅院區由新竹台大分院主導，興建與否取決於院方及中央，市府角色是協助土地撥用、交通配套等行政程序。預定地涉及國有及市有土地，院方已來函表示市有土地採有償撥用，地方可做的部分有推動空間；但院區推動多年仍無具體進展，財務與期程都未見資料。","sources":["https://udn.com/news/story/7324/9773724"]},
  // 活化閒置的湳雅退舍土地，建議改設公園
  "hcc4-7-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"閒置宿舍土地若屬國有或中央機關管理，需協商撥用或取得管理權，再由市府規劃開闢公園。政見未說明土地權屬與經費，取得土地的時程是主要變數。","sources":[]},
  // 改善公園遊具高溫問題並加速增設遮陽設施
  "hcc4-8-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"遊具量測、遮陽設施與鋪面改善屬市府公園管理權責，議員以質詢要求即可推動。政見說明市府今年預計先改善 5 處，但全部改善範圍與設施形式未說明，經費無法估算。量測、加設遮陽與訂定指引多屬既有公園維護工作，四年內可見成效。","sources":[]},
  // 校園導入電子圍籬與即時通報系統，補足輔導人力
  "hcc4-8-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"校園安全設備與輔導人力屬市府教育處權責。依政見所述市府回應，明年度已編列約 8,000 多萬元用於第一線校安人力與科技設備（8,000 萬÷423 億≈0.19%），但是否涵蓋電子圍籬與心理師、社工師增聘未能確認。心理師、社工師招募受人力市場影響，可逐年補足。","sources":[]},
  // 住宅區飲酒店家比照麻將館實質審查
  "hcc4-9-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"對特定行業設審查門檻需透過土地使用管制或自治條例規範，議員可提案、市府執行。涉及營業自由與既有店家，法制作業需時，但經費小。","sources":[]},
  // 爭取北門市場停車優惠與攤商月租折扣
  "hcc4-10-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"市場停車優惠與攤商租金折扣屬市府市場管理權責，議員質詢可促成，行政調整即可實施。優惠幅度、期間與適用攤位未說明，租金與停車收入減少的幅度無法估算。","sources":[]},
  // 改善基層運動設施，強化在地運動人才培育
  "hcc4-11-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出基層運動設施與人才培育的方向，未有具體地點、預算或期程，無法判斷可行性。","sources":[]},
  // 爭取社區共餐據點與公共托育資源
  "hcc4-12-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"共餐據點與公共托育屬市府社福權責，可爭取中央補助。只提出爭取方向，未說明數量、地點與期程，資訊不足以判斷。","sources":[]},
  // 盤點北區校園與運動設施並爭取修繕整建
  "hcc4-13-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"盤點與修繕校園及運動設施屬市府教育處權責，議員可透過質詢與預算審議推動。修繕整建範圍視盤點結果而定，規模未說明，經費無法估算；盤點與一般修繕屬例行工作，四年內可見成效。","sources":[]},
  // 本土語言認證獎勵金翻倍，本土語教師納入教師節禮金
  "hcc4-13-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"語言認證獎勵金與教師節禮金屬市府自治事項，以行政規定調整即可實施。現行獎勵金額、年度核發人數及新增禮金對象與單價皆未說明，經費無法估算。","sources":[]},
  // 增加公共托育、臨時托育與育兒支持
  "hcc5-1-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"公共托育與臨時托育屬市府社福權責，可爭取中央補助。只提出增加與串聯資源的方向，未說明增設數量、據點、服務量與經費，資訊不足以判斷。","sources":[]},
  // 擴大長者共餐、長照服務與就醫交通
  "hcc5-1-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"共餐、長照與就醫交通屬市府社福與衛生權責，但未說明擴大的規模、據點數或經費，資訊不足以判斷。","sources":[]},
  // 強化弱勢急難救助與福利陪伴機制
  "hcc5-1-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有方向性標題，未說明具體措施、對象與經費，無法判斷可行性。","sources":[]},
  // 加強校園營養午餐、市場、共餐據點與社區活動的食品安全把關
  "hcc5-1-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"食品安全稽查屬市府衛生與教育單位權責，但未說明具體作法、稽查頻率或經費，資訊不足以判斷。","sources":[]},
  // 重新評估機場周邊噪音分級並擴大房屋稅減免
  "hcc5-2-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"依噪音管制法，轄內噪音防制區劃定屬地方主管機關職責，劃定原則由中央訂定，軍用機場的噪音改善與補償措施由國防部主導，重新評估需與軍方協調。房屋稅減免地方可依自治條例調整。擴大區域、戶數與減免幅度未說明，稅損無法估算；重新劃定需監測與審議程序。","sources":["https://oaout.moenv.gov.tw/law/LawContent.aspx?id=FL015471"]},
  // 爭取 65 歲以上長輩健保費全額補助
  "hcc5-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"現況已實施：市府長者健保費補助已於 2026 年 9 月開辦，設籍 65 歲以上長者（及 55 歲以上原住民）每人每月最高補助 826 元，即全額自付額，免申請、不排富。政見內容與現行制度相符，財源已由市府編列，維持辦理即可。","sources":["https://dep.hcchb.gov.tw/ch/home.jsp?dataserno=501d23c2-8e15-40f7-a6e9-dcf2773c5d10&id=5&mcustomize=municipalnews_view.jsp&mserno=201601300127&parentpath=&t=MunicipalNews&toolsflag=Y"]},
  // 推出長者眼科、耳科定期檢查補助
  "hcc5-3-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"長者健康檢查補助屬市府衛生局權責，可與醫院合作辦理。政見未說明年齡門檻、檢查項目與補助額度，規模未說明，經費無法估算；做法屬常見地方衛生補助，無法令障礙，次年度可實施。","sources":[]},
  // 敬老愛心卡提升至 1,000 元
  "hcc5-3-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"敬老卡點數屬市府社福權責。市府已自 115 年 10 月起將每月點數由 800 點提高至 1,200 點，持卡人數逾 7 萬人，已超過 1,000 元的目標，現行制度即已達成。","sources":["https://n.yam.com/Article/20260928884172"]},
  // 補助租賃契約公證費
  "hcc5-3-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"補助租賃契約公證費屬市府自治事項，可以行政計畫實施。公證費依租金總額等價額分級，20 萬元以下 1,000 元、逾 20 萬至 50 萬元 2,000 元，附強制執行條款加收二分之一。補助額度與件數未說明，經費無法估算，但屬單件小額補助。","sources":["https://www.judicial.gov.tw/tw/cp-1358-2751-f6a88-1.html"]},
  // 大湖里、美山里設立活動中心，香村里興建公園
  "hcc5-3-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"新建活動中心與公園屬市府權責，需市府編列預算並取得用地。政見已指明三處地點，但未說明用地、規模與經費，經費無法估算；若需新覓用地或辦理都市計畫程序，四年內完成有不確定性。","sources":[]},
  // 爭取市政大樓遷至香山
  "hcc5-3-p5": {"track":"long","level":"unclear","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"僅有構想","horizon":"無法估計","reason":"市政大樓遷建屬市府權責，但需選址、取得用地、辦理都市計畫與新建工程，屬多年大型建設。政見未說明地點、規模、經費與期程，所提供內容也未附正式規劃資料，財務與期程都無法判斷。","sources":[]},
  // 為隔代教養家庭爭取顧孫津貼
  "hcc5-3-p6": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"自辦顧孫津貼屬市府社福權責，需新設補助制度並逐年編列經常性預算。未說明補助金額、資格與對象人數，經費無法估算，財源也未說明；訂定補助辦法屬一般行政程序，四年內可完成。","sources":[]},
  // 0–12 歲兒童生養補助每年 1 萬元
  "hcc5-3-p7": {"level":"medium","authority":"medium","cost":"low","timeline":"high","reason":"生養補助屬市府自治事項，可由市府編列預算發放。粗估：65 歲以上約 7.2 萬人占 15.8%，推得全市約 45.6 萬人；0–14 歲占 14.82% 約 6.8 萬人，假設各歲人數平均，0–12 歲約占其 13/15，約 5.9 萬人。每人每年 1 萬元約需 5.9 億元，約占總歲出 1.4%，屬長期固定支出且未說明財源。","sources":["https://udn.com/news/story/7266/9573845","https://money.udn.com/money/story/5621/9795706"]},
  // 爭取新闢茄苳、東香接西濱的道路
  "hcc5-3-p8": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"新闢道路屬市府權責，連接西濱快速公路也需與中央公路主管機關協調。政見未說明路線、長度、工程內容與經費，無法判斷用地、環評等關卡與期程，可行性資訊不足。","sources":[]},
  // 賞蟹步道延伸至惠明宮段
  "hcc5-3-p9": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"步道延伸屬市府觀光與工務權責。賞蟹步道位於國家級重要濕地香山濕地，延伸工程須符合濕地保育相關審查，期程受影響。未說明延伸長度、寬度與工程形式，經費無法估算。","sources":["https://n.yam.com/Article/20260511595113"]},
  // 爭取果菜批發市場與小巨蛋設於香山區
  "hcc5-3-p10": {"track":"long","level":"unclear","authority":"medium","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"僅主張選址香山區，未說明既有計畫或用地","horizon":"無法估計","reason":"果菜批發市場與小巨蛋皆屬需多年興建的大型設施，需市府規劃、取得用地並籌措經費。政見只主張設於香山區，未說明是否已有計畫、用地、規模或財源，規劃成熟度、財務與期程都無法判斷。","sources":[]},
  // 社區發展協會活動費由 5 萬元調升至 10 萬元
  "hcc5-3-p11": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"社區發展協會活動補助屬市府社福預算，調整標準由市府決定即可。每會每年增加 5 萬元；全市協會確切數量未查得，粗估假設約一百至一百五十個，每年約增加 500–750 萬元，即使數量再多數倍，占總歲出約 423 億元的比例仍極低，次一年度即可實施。","sources":[]},
  // 建議市府孵蛋計畫選址香山
  "hcc5-4-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"計畫選址屬市府決策，議員可透過質詢建議。政見未說明計畫規模、用地與經費，選址能否改至香山取決於市府既有規劃與用地條件。","sources":[]},
  // 推動美山聯絡道早日興建
  "hcc5-4-p1": {"track":"long","level":"unclear","authority":"medium","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"曾一度暫緩，目前進度未查得","horizon":"無法估計","reason":"道路興建屬市府權責，議員可持續質詢追蹤。聯絡道屬多年興建的實體工程，但政見未說明路線、經費與期程，曾一度暫緩，目前的設計、用地與財源進度未查得，規劃成熟度、財務與期程都無法判斷。","sources":[]},
  // 評估武陵高架橋延伸銜接景觀大道
  "hcc5-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求重新評估高架橋延伸可行性屬質詢監督範圍，評估作業由市府辦理，委託規劃費用小，一任內可完成。實際興建須另行規劃、取得用地與龐大經費，不在本項範圍內。","sources":[]},
  // 啟動第 11 公墓遷葬並召開公聽會
  "hcc5-6-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"medium","reason":"要求研擬遷葬計畫並辦理公聽會，屬市府民政單位權責，議員質詢即可推動啟動程序。召開公聽會成本低；實際遷葬須查估、公告與發放補償，經費與期程未說明，完成全部遷葬通常需數年。","sources":[]},
  // 完善香山區學童通學步道
  "hcc5-7-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"通學步道屬市府工務與交通權責。涉及公有地撥用與私有地徵收，須經用地取得程序，期程易受地主協商影響。政見涵蓋多所學校，未說明路段長度與用地面積，經費無法估算；可分段推動。","sources":[]},
  // 市府運動地圖 APP 增設健走功能
  "hcc5-7-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府 APP 增加功能屬資訊系統擴充，經費小，短期內可完成。","sources":[]},
  // 爭取香山區 24 里每里都設置公共自行車站點
  "hcc5-8-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"公共自行車設站屬市府交通權責。目標是香山區 24 里都有站點，但未扣除已有站點的里，也未提站數與期程，新增站數與經費無法估算。設站工程本身單純，四年內可完成大部分。","sources":[]},
  // 香山區增設心理諮商據點，加開夜間與視訊諮商
  "hcc5-8-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"心理諮商據點、夜間與視訊時段屬市府衛生局權責，可利用既有衛生所空間，經費小。衛生局已回應將於香山衛生所提供心理健康諮詢；擴大補助對象需編列預算，但規模有限。","sources":[]},
  // 青青草原設施盤點、定期維護並規劃接駁
  "hcc5-8-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"設施盤點、定期維護、導覽指引與步道改善均屬市府公園管理權責，經費以維護修繕等級為主。觀光巴士與接駁車可由市府試辦，四年內可見成效。","sources":[]},
  // 爭取原住民族歲時祭儀跨縣市返鄉交通費補助
  "hcc6-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"返鄉交通費補助屬市府原住民族事務權責，市府已回應將估算預算、預計下一年度實施。設籍原住民人數有限，總經費規模小，四年內可落實。","sources":[]},
  // 原住民學生學用費每學期由 2,000 元提高至 2,500 元
  "hcc7-1-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"原住民學生學用費屬市府自編補助，調整金額由市府決定。每生每年增加 500 元 × 兩學期＝1,000 元，但符合資格的學生人數未查得，總經費無法估算；以單價調幅看屬小額補助，次一年度即可實施。","sources":[]},
  // 原住民族語言能力認證獎勵金翻倍
  "hcc7-1-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"族語與客語認證獎勵金、教師節禮金發放對象都屬市府自編預算，調整由市府決定。政見未說明現行獎勵標準、受領人數及新增納入的教師人數，經費無法估算；做法屬行政調整，無法令障礙，次一年度即可實施。","sources":[]},
  // 市立圖書館總館與各分館常設原住民族專書專區
  "hcc7-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市立圖書館館藏規劃屬市府文化局權責，設立專書專區主要是購書與空間調整，經費小，短期內即可完成。","sources":[]},
  // 原住民長輩定點巡迴健檢、建立健康資料庫並增設文化健康站
  "hcc7-1-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"文化健康站主要由中央原民會補助、地方申設，巡迴健檢與健康資料庫屬市府衛生、原民單位權責，增設站數須視中央核定。未說明健檢頻率、資料庫內容、設站數與人力需求，經費無法估算。","sources":[]},
  // 加碼原住民族租屋補貼
  "hcc7-1-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"租屋補貼主要為中央計畫，地方可自籌加碼。未提出加碼金額與對象人數，經費無法估算；本市原住民人口規模有限，所需經費應不大。","sources":[]},
  // 設立原住民文化館並開設文化體驗課程
  "hcc7-1-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"文化館設置與體驗課程需市府原民及文化單位採納執行。未說明是新建館舍或利用既有空間，也未說明規模與地點，經費與期程都無法判斷，資訊不足以評估。","sources":[]},
});

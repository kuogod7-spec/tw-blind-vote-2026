/*
 * 2026 新竹市議員政見：可行性評估
 *
 * 評估日期：2026-11-02。由本站依統一標準評估，不是專家意見。
 * 評估時政見已匿名並打亂順序，評估者不知道每則政見屬於哪位候選人。
 * 議員政見的「權責」依議員職權判斷（見方法說明第 6 節）：需要市府採納執行屬常態，不拉低總評。
 * 一般政見與長期建設的評估面向同 new-taipei-feasibility.js。
 * 預算比較基準：新竹市 116 年度歲出約 423 億元（同 hsinchu-city-feasibility.js）。
 */
window.FEASIBILITY = Object.assign(window.FEASIBILITY || {}, {
  // 十八尖山周邊興建立體停車場
  "hcc1-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"立體停車場屬市府交通處權責。須取得十八尖山周邊用地，並考量山區景觀與環境影響；未提出經費與期程，立體停車場粗估數億元，從規劃到完工約需 3–5 年。","sources":[]},
  // 敬老卡點數開放用於復健
  "hcc1-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"敬老卡點數使用範圍由市府社福規定決定，增列復健通路屬行政調整。點數總額不變，僅可能提高使用率，增加支出有限；市府近年已陸續擴充使用範圍，有先例可循。","sources":["https://n.yam.com/Article/20260928884172"]},
  // 推動輕軌並擴大先導公車路網，改善科學園區通勤與行人安全
  "hcc1-2-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"先導公車路網擴大屬市府權責，四年內可推動；輕軌須經中央審查，大新竹輕軌目前仍在可行性研究階段，目標 2027 年底送審，任期內不會通車。政見未公布期程與經費。","sources":["https://news.pchome.com.tw/realestate/myhousing/20260917/index-78961147879191259101.html"]},
  // 增加就近入學量能、改善通學環境並爭取教師合理待遇
  "hcc1-2-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"涵蓋入學量能、通學環境與教師待遇等方向，但未說明地點、做法與經費；教師待遇亦部分屬中央規範，無法判斷可行性。","sources":[]},
  // 改善頭前溪水質、推動垃圾處理改革與親子共融公園
  "hcc1-2-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"頭前溪水質涉及中央與上游縣市，垃圾處理與公園屬市府權責。三項皆未說明具體作法與經費，資訊不足以判斷。","sources":[]},
  // 規劃串聯關埔與光復路、學府路沿線高中的通學專車
  "hcc1-2-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"通學專車屬市府交通處與客運業者可辦理的公車業務，市府已回應擴大需求調查。免費免預約模式需市府補貼營運，經費未說明但屬路線級支出，四年內可望開行。","sources":[]},
  // 要求市府對關埔二期與周邊學區做教育量能總體檢
  "hcc1-4-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求市府進行學區教育量能盤點，可透過質詢與預算審議督促，屬行政規劃作業，經費小，短期內可完成。","sources":[]},
  // 爭取興建新學校或加速 K-12 科技雙語示範學校規劃
  "hcc1-4-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"新設學校屬市府教育處權責，議員可透過質詢與預算審查推動。未說明地點、規模與經費，新建學校從規劃到開學通常需 4 年以上，加速規劃則四年內可見進度。","sources":[]},
  // 提高特教助理員待遇並增設校園專任心理諮商師與社工
  "hcc1-4-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"特教助理員待遇與校園專任心理師、社工增聘屬市府教育處權責。未說明加薪幅度與增聘人數，屬經常性人事支出，粗估每年數千萬元等級；財源未說明，但相對總歲出可負擔。","sources":[]},
  // 設置學童課後諮詢中心並提供平價或免費學習支持
  "hcc1-4-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"課後學習支持屬市府教育處權責，可結合既有課後照顧與公私協力資源。未說明據點數量與經費；以線上課程與民間合作為主，所需經費可控。","sources":[]},
  // 汰換添購可調式課桌椅並定期檢討營養午餐餐費與食材品質
  "hcc1-4-p4": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"課桌椅汰換與午餐餐費檢討屬市府教育處權責，可分年編列預算辦理。經費未說明，但屬常態教育支出，四年內可推動。","sources":[]},
  // 科學園區周邊導入 AI 智慧號誌，推動停車場立體化並以空橋銜接
  "hcc1-4-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"智慧號誌屬市府交通權責，可較快導入；立體停車場與空橋銜接則需用地、設計與工程，經費未說明。整體可部分於四年內推動，但立體化與空橋工程期程較不確定。","sources":[]},
  // 建請設置含托育、托嬰服務的地區樂齡活動中心
  "hcc1-4-p6": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"樂齡活動中心與托育服務屬市府社福權責，可爭取中央補助。未說明地點、規模與經費，新設據點需覓得合適空間並符合托嬰設置標準。","sources":[]},
  // 重劃區規劃大型親水公園、兒童運動遊樂設施與寵物活動公園
  "hcc1-4-p7": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"公園與遊憩設施開闢屬市府權責，重劃區若已有公園用地可較快推動；山丘電梯觀景台需評估地形與工程。政見未說明地點、規模與經費。","sources":[]},
  // 爭取在東區興辦幼兒園至高中的 K-12 學校，並加速高中擴校
  "hcc1-5-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"low","reason":"新設學校與高中擴校屬市府教育權責（國立高中則屬中央），需學校用地、校舍興建與員額，規模與經費未說明。新設學校從規劃到開校通常需多年，四年內完成難度高。","sources":[]},
  // 爭取東區青少年館並督促加速日治時期燃料廠遺址修復活化
  "hcc1-5-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"青少年館屬市府設施，需覓地或活化既有空間；燃料廠遺址修復屬文資修復工程，期程受文資審議與產權影響。政見未說明地點與經費。","sources":[]},
  // 研議以敬老愛心卡點數折抵醫療院所掛號費
  "hcc1-5-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"敬老愛心卡折抵掛號費屬市府擴充點數使用範圍的行政調整，先從公立醫療院所合作再擴及民間診所，作法可行；點數總額不變，增加支出有限，鄰近縣市已有先例。","sources":["https://n.yam.com/Article/20260928884172"]},
  // 補助認養 15 歲以上老犬醫療費並增列動物緊急醫療預算
  "hcc1-5-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"動物醫療補助屬市府動保業務。政見自估緊急醫療連同器材約 220 萬元，占總歲出比例極低；擴大編制與應變編組需市府人事調整，四年內可推動。","sources":[]},
  // 另覓地點新建 250 公尺國際標準自由車場
  "hcc1-5-p4": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"low","schedule":"unclear","stage":"僅議會建議，未有選址或規劃","horizon":"約 6–10 年","reason":"新建國際標準自由車場需另覓用地、規劃設計並編列大筆經費，目前僅為構想，未提出地點與財源。現有場地市府甫斥資約 1.18 億元整修完成，短期內再另建新場的預算排序不易。","sources":["https://news.ltn.com.tw/news/politics/breakingnews/5570535"]},
  // 訂立選手外縣市移地訓練補助制度
  "hcc1-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"運動選手移地訓練補助屬市府教育處權責；市府現有績優選手培訓站實施計畫已含國內移地訓練補助，訂立專門制度屬行政調整，經費小。督促雙語教育資源屬質詢監督範圍。","sources":["https://news.ltn.com.tw/news/politics/breakingnews/5570535"]},
  // 爭取兒童藝術節、地方藝術節每年在關埔地區辦理專場
  "hcc1-6-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"藝術節場次安排屬市府文化活動權責，增辦一個地區專場經費有限，次年度即可辦理。","sources":[]},
  // 評估敬老愛心卡與長照交通接送整合，以點數折抵車資
  "hcc1-6-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"敬老卡屬市府福利，長照交通接送則以中央長照經費為主，兩者整合需配合中央給付規定並調整系統。仍屬評估階段，經費與期程未說明。","sources":[]},
  // 學生上下學尖峰增加公車班次並開設關埔地區通學專車
  "hcc1-7-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"公車尖峰加班與通學專車屬市府交通處與客運業者可辦理的事項，已請業者評估。經費屬營運補貼等級，四年內可落實。","sources":[]},
  // 要求市府為視障重點國小編列更適合的教材
  "hcc1-8-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"為視障重點學校編製教材屬市府教育處權責，議員質詢可促成。教材編製或採購屬小額經費，對照總歲出影響極小，一任內可完成。","sources":[]},
  // 結合志工協助長輩使用新軟體並防範詐騙
  "hcc1-9-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"結合志工辦理長輩數位與防詐教育，可由社會處、警察局與社區據點辦理，經費小，短期內可推動。","sources":[]},
  // 舊城區設置共享辦公空間，並結合商圈設置托育空間
  "hcc1-9-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"仍屬構想階段，未說明地點、規模、經營方式與經費，無法判斷可行性。","sources":[]},
  // 設置具遮風避雨、夜間照明與 Wi-Fi 的智慧候車亭及智慧垃圾設施
  "hcc1-9-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"候車亭與垃圾設施屬市府交通、環保權責。仍在構想階段，未說明設置數量與經費；智慧候車亭單座粗估數十萬至百萬元以上，須逐站檢討人行道空間，可分批設置。","sources":[]},
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
  "hcc1-15-p0": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"unclear","schedule":"unclear","stage":"紅藍線整合可行性研究進行中，目標 2027 年底提報中央","horizon":"約 10–15 年","reason":"輕軌屬大眾捷運系統，需中央審查核定並補助。大新竹輕軌紅、藍線整合可行性研究已獲交通部補助並決標，目標 2027 年底完成報告送審，核定後尚需綜合規劃、環評與設計。政見未公布期程與經費，財務與分期方式無從判斷。","sources":["https://news.pchome.com.tw/realestate/myhousing/20260917/index-78961147879191259101.html"]},
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
  "hcc1-19-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"警察分局搬遷與消防應變中心空間調整屬市府警消權責。須檢討新建派出所空間是否足以容納分局，並規劃舊址用途；未說明經費，搬遷與裝修粗估數千萬元內，期程取決於空間協調。","sources":[]},
  // 持續推動眷村文化廊帶建置並處理社區活動中心產權問題
  "hcc1-19-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"文化廊帶建置屬市府文化權責；社區活動中心產權若涉及國有或國防部土地，需與中央機關協商撥用或租用。政見未說明範圍與經費，產權處理期程不確定。","sources":[]},
  // 青草湖停車場一樓閒置空間改作戶政作業站或親子休閒場館
  "hcc2-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"活化公有停車場閒置空間屬市府權責，利用既有建物改作戶政站或親子空間，裝修經費小，議員質詢可促成，一任內可完成。","sources":[]},
  // 在青草湖服務中心設置南區便民服務站
  "hcc2-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"利用既有服務中心設置便民收件站屬市府民政行政調整，經費小，短期內可實施。","sources":[]},
  // 將兒童適性發展評估等待時間縮短至一個月內
  "hcc2-2-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"low","reason":"兒童發展評估由衛生局與評估醫院辦理，縮短等待時間取決於醫療專業人力。公私協力可擴增量能，但專業人力不足是普遍限制，縮短至一個月內的目標四年內達成有難度，經費亦未說明。","sources":[]},
  // 校園全面導入社會情緒學習（SEL）課程
  "hcc2-2-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"課程推動屬市府教育處可督導的事項，但課綱屬中央，全面導入需透過校訂課程或彈性時間並辦理師資培訓。政見未說明實施方式與經費，全面落實需時。","sources":[]},
  // 推動二度就業女性數位培訓與心理諮詢
  "hcc2-2-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"職業訓練與心理諮詢屬市府勞工、社福單位權責，可結合既有就業服務資源，但未說明課程規模、對象與經費，資訊不足以判斷。","sources":[]},
  // 試辦以小時為單位的彈性育嬰假
  "hcc2-2-p3": {"level":"low","authority":"low","cost":"medium","timeline":"medium","reason":"育嬰假制度屬中央勞動法規規範，地方政府無權改變請假單位；獎勵企業可由市府自編預算辦理，但「試辦以小時為單位」本身超出地方權限。","sources":[]},
  // 孕婦搭乘計程車補助延伸至產後一年
  "hcc2-2-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府已有「好孕專車」每胎 6,000 元車資補助，乘車期限 9 月起已延長至預產期後六個月，再延長至產後一年屬行政調整。獎勵計程車配備汽座經費小，次年度可實施。","sources":["https://udn.com/news/story/7324/9704793"]},
  // 補助長輩住家加裝扶手、防滑地板與照明
  "hcc2-2-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"居家無障礙改善補助屬市府社福權責，中央長照已有輔具與居家無障礙補助可銜接。每戶粗估數萬元，補助數百戶約數千萬元內，對照總歲出可負擔。","sources":[]},
  // 爭取長輩健保費補助並擴大敬老愛心卡使用範圍
  "hcc2-2-p6": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"長輩健保費補助與敬老卡使用範圍屬市府社福權責。健保費補助若普及全市 7 萬多名長者，每人每月數百元，粗估每年數億元，財源未說明；擴大敬老卡使用範圍屬行政調整。","sources":["https://n.yam.com/Article/20260928884172"]},
  // 增加各校藝文教育預算
  "hcc2-2-p7": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"增加藝文教育預算與辦理工作坊屬市府教育、文化單位權責，議員可透過預算審議推動。未說明增加幅度，經費無法估算。","sources":[]},
  // 爭取藝文活動每年固定在選區設場並規劃市立美術館空間
  "hcc2-2-p8": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"爭取藝文活動於選區設場屬市府文化局權責，經費小；規劃市立美術館空間則需覓地或利用既有建物，未說明規模與經費，四年內較可能完成規劃而非落成。","sources":[]},
  // 布建長照 3.0、社區巡迴駐診與遠距智慧醫療
  "hcc2-3-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"長照服務多由中央長照基金補助、地方布建，巡迴駐診與遠距醫療需市府衛生局與醫療院所合作。未說明據點數量與經費；長照 3.0 由中央主導，地方可配合布建。","sources":[]},
  // 以愛心卡折抵掛號費並推動愛心卡搭車不拒載
  "hcc2-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"敬老愛心卡折抵掛號費屬市府擴充點數使用範圍的行政調整，點數總額不變，增加支出有限；鄰近縣市已有將掛號費納入的先例。搭車不拒載可透過特約車隊契約要求落實。","sources":["https://n.yam.com/Article/20260928884172"]},
  // 導入 AI 智慧號誌、增加公車班次並爭取輕軌延伸至南區
  "hcc2-3-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"AI 智慧號誌與增加公車班次屬市府交通處權責，四年內可推動。輕軌延伸至南區須以輕軌主線核定為前提，屬中央核定的大型軌道建設，一任內無法完成，僅能爭取納入規劃。","sources":[]},
  // 打造三代共融公園，增設體健器材、遮陽與戲水設施及籃球場
  "hcc2-3-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"公園設施增設與改善屬市府權責，屬常見公共工程。政見未說明地點、規模與經費，無法估算，但無重大障礙。","sources":[]},
  // 設置社區共讀空間、青年活動據點與多語文化中心，開辦親職及隔代教養課程
  "hcc2-3-p4": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"共讀空間、青年據點、多語文化中心與親職課程涵蓋多項設施與服務，需市府多個單位執行，但未說明數量、地點與經費，資訊不足以判斷。","sources":[]},
  // 推動老屋修繕與無障礙住宅，爭取社會住宅與青年住宅
  "hcc2-3-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"老屋修繕補助、巷弄照明與道路改善屬市府可執行事項；社會住宅與青年住宅需用地與興建，多仰賴中央補助與多年工程。政見未說明數量、地點與經費。","sources":[]},
  // 改善易淹水地點、升級排水系統並強化社區防災網絡
  "hcc2-3-p6": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有方向性標題，未說明地點、工程內容與經費，無法判斷可行性。","sources":[]},
  // 要求市府加快南門市場後續硬體改善並提出營運計畫
  "hcc2-4-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"督促市場硬體改善與提出營運計畫屬議員質詢監督，執行屬市府市場管理權責。後續改善經費未說明；提出營運計畫屬行政作業，四年內可完成。","sources":[]},
  // 營養午餐補助提高至國小每餐 70 元、國中 75 元
  "hcc3-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"營養午餐補助屬市府教育自治事項。市府已宣布 116 年啟動營養午餐 PLUS 方案，每餐再加 10 元，國小提高至 70 元、國中 75 元，與主張相同，預算已規劃。","sources":["https://www.storm.mg/article/11166897"]},
  // 升級親師生平台並以 AI 減輕教師與行政人員重複性工作
  "hcc3-1-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"親師生平台升級與 AI 導入屬市府教育處權責，但未說明平台範圍、功能與經費，資訊不足以判斷。","sources":[]},
  // 結合西區傳統米粉產業規劃在地特色藝文活動
  "hcc3-1-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"結合在地產業辦理藝文活動屬市府文化、產業單位權責，可納入年度活動。未說明活動規模與經費，一般節慶活動經費有限。","sources":[]},
  // 要求延平路地下停車場提出調整方案、確保完工
  "hcc3-3-p0": {"level":"medium","authority":"high","cost":"medium","timeline":"medium","reason":"質詢監督屬議員職權。延平路地下停車場總經費約 3.66 億元、中央核定補助約 2.07 億元，因成本上漲四度流標，市府已調整預算準備重新招標，預計 116 年底前決標；能否完工仍取決於招標結果與補助是否保留。","sources":["https://www.cna.com.tw/news/aloc/202606120269.aspx"]},
  // 要求完善市立棒球場大型賽事散場交通疏運
  "hcc4-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"大型賽事散場疏運屬市府交通處權責，以交通管制、接駁與停車配套為主，經費小，可即時執行。","sources":[]},
  // 推動客語跨局處推廣，市府總機增設客語語音選項
  "hcc4-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"總機語音增設客語選項與市場客語標示屬市府行政事項，經費小，市府已回應總機將朝增設辦理。跨局處推廣機制亦可由市府內部調整，四年內可見成效。","sources":[]},
  // 推動台大醫院新竹分院湳雅院區興建
  "hcc4-7-p0": {"level":"low","authority":"low","cost":"unclear","timeline":"low","reason":"湳雅院區由新竹台大分院主導推動，興建與否取決於院方及中央，市府角色為協助土地撥用、交通評估等行政程序。預定地涉及國有及市有土地，院方推動多年仍無具體進展，四年內動工興建難度高。","sources":["https://udn.com/news/story/7324/9773724"]},
  // 活化閒置的湳雅退舍土地，建議改設公園
  "hcc4-7-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"閒置宿舍土地若屬國有或中央機關管理，需協商撥用或取得管理權，再由市府規劃開闢公園。政見未說明土地權屬與經費，取得土地的時程是主要變數。","sources":[]},
  // 改善公園遊具高溫問題並加速增設遮陽設施
  "hcc4-8-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"遊具量測、遮陽設施與鋪面改善屬市府公園管理權責，議員以質詢要求即可推動。遮陽棚、遮陽網每處粗估數十萬至數百萬元，相對約 423 億元總歲出很小。市府已回應今年先改善 5 處，四年內可見成效。","sources":[]},
  // 校園導入電子圍籬與即時通報系統，補足輔導人力
  "hcc4-8-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"校園安全設備與輔導人力屬市府教育處權責。市府已回應明年度編列約 8,000 多萬元用於校安人力與科技設備，約占總歲出 0.2%；心理師、社工師增聘受人力市場影響，但可逐年補足。","sources":[]},
  // 住宅區飲酒店家比照麻將館實質審查
  "hcc4-9-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"對特定行業設審查門檻需透過土地使用管制或自治條例規範，議員可提案、市府執行。涉及營業自由與既有店家，法制作業需時，但經費小。","sources":[]},
  // 爭取北門市場停車優惠與攤商月租折扣
  "hcc4-10-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市場停車優惠與攤商租金折扣屬市府市場管理權責，議員質詢可促成。未說明優惠幅度，但單一市場的租金與停車收入減少有限，行政調整即可實施。","sources":[]},
  // 改善基層運動設施，強化在地運動人才培育
  "hcc4-11-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出基層運動設施與人才培育的方向，未有具體地點、預算或期程，無法判斷可行性。","sources":[]},
  // 爭取社區共餐據點與公共托育資源
  "hcc4-12-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"共餐據點與公共托育屬市府社福權責，可爭取中央補助。未提出數量與期程，經費無法估算；新設托育據點需覓得合適空間。","sources":[]},
  // 盤點北區校園與運動設施並爭取修繕整建
  "hcc4-13-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"盤點與修繕校園及運動設施屬市府教育處權責，議員可透過質詢與預算審議推動。修繕經費視盤點結果而定，未說明規模；增設匹克球場等多屬小型工程，四年內可見成效。","sources":[]},
  // 本土語言認證獎勵金翻倍，本土語教師納入教師節禮金
  "hcc4-13-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"語言認證獎勵金與教師節禮金屬市府自治事項。未公布金額，但認證獎勵金與禮金人數有限，翻倍與擴大發放對象粗估每年數百萬元等級，對照總歲出極小。","sources":[]},
  // 增加公共托育、臨時托育與育兒支持
  "hcc5-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"公共托育與臨時托育屬市府社福權責，可爭取中央補助。未說明增設數量與經費；新設托育據點需覓得合適空間並招募保母人力，四年內可增設部分，規模不明。","sources":[]},
  // 擴大長者共餐、長照服務與就醫交通
  "hcc5-1-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"共餐、長照與就醫交通屬市府社福與衛生權責，但未說明擴大的規模、據點數或經費，資訊不足以判斷。","sources":[]},
  // 強化弱勢急難救助與福利陪伴機制
  "hcc5-1-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有方向性標題，未說明具體措施、對象與經費，無法判斷可行性。","sources":[]},
  // 加強校園營養午餐、市場、共餐據點與社區活動的食品安全把關
  "hcc5-1-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"食品安全稽查屬市府衛生與教育單位權責，但未說明具體作法、稽查頻率或經費，資訊不足以判斷。","sources":[]},
  // 重新評估機場周邊噪音分級並擴大房屋稅減免
  "hcc5-2-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"機場周邊噪音分級依中央噪音管制規定劃定，重新評估需與中央、軍方協調；房屋稅減免地方可依自治條例調整。擴大減免區域稅損粗估有限；重新劃定噪音區需監測與審議程序。","sources":[]},
  // 爭取 65 歲以上長輩健保費全額補助
  "hcc5-3-p0": {"level":"medium","authority":"medium","cost":"low","timeline":"high","reason":"地方政府可自籌補助長者健保費。粗估全市 65 歲以上約 7.2 萬人，以每人每月保費約 800 元計，全額補助每年約 6.9 億元，約占總歲出 1.6%，屬長期固定支出且未說明財源。","sources":["https://udn.com/news/story/7266/9573845"]},
  // 推出長者眼科、耳科定期檢查補助
  "hcc5-3-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"長者健康檢查補助屬市府衛生局權責，可與醫院合作辦理。政見未說明補助金額，全市 65 歲以上約 7.2 萬人，依使用率不同經費約千萬元等級，屬可負擔範圍，次年度可實施。","sources":["https://udn.com/news/story/7266/9573845"]},
  // 敬老愛心卡提升至 1,000 元
  "hcc5-3-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"敬老卡點數屬市府社福權責。市府已自 115 年 10 月起將每月點數由 800 點提高至 1,200 點，持卡人數逾 7 萬人，已超過 1,000 元的目標，現行制度即已達成。","sources":["https://n.yam.com/Article/20260928884172"]},
  // 補助租賃契約公證費
  "hcc5-3-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"補助租賃契約公證費屬市府自治事項，可以行政計畫實施。公證費每件約數百至千餘元，即使每年補助數千件，粗估也僅數百萬元，對照總歲出極小。","sources":[]},
  // 大湖里、美山里設立活動中心，香村里興建公園
  "hcc5-3-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"新建活動中心與公園屬市府權責，需市府編列預算並取得用地。標題未說明用地、規模與經費，活動中心若需新覓用地或辦理都市計畫程序，四年內完成有不確定性。","sources":[]},
  // 爭取市政大樓遷至香山
  "hcc5-3-p5": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"僅有構想","horizon":"約 8–12 年","reason":"市政大樓遷建屬市府權責，但需選址、取得用地、辦理都市計畫與新建工程，屬多年大型建設。政見未說明地點、規模、經費與期程，目前看不到正式規劃。","sources":[]},
  // 為隔代教養家庭爭取顧孫津貼
  "hcc5-3-p6": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"自辦顧孫津貼屬市府社福權責，但需新設補助制度並編列預算。未說明補助金額、資格與對象人數，經費無法估算。","sources":[]},
  // 0–12 歲兒童生養補助每年 1 萬元
  "hcc5-3-p7": {"level":"medium","authority":"medium","cost":"low","timeline":"high","reason":"生養補助屬市府自治事項，可由市府編列預算發放。粗估全市人口約 45.6 萬（65 歲以上 7.2 萬占 15.8% 推算），0–14 歲占 14.82%，0–12 歲約 5.9 萬人，每人每年 1 萬元約需 5.9 億元，約占總歲出 1.4%，屬長期固定支出且未說明財源。","sources":["https://udn.com/news/story/7266/9573845","https://money.udn.com/money/story/5621/9795706"]},
  // 爭取新闢茄苳、東香接西濱的道路
  "hcc5-3-p8": {"level":"medium","authority":"medium","cost":"unclear","timeline":"low","reason":"新闢道路屬市府權責，但需辦理用地取得、可能涉及都市計畫或非都市土地變更與環評，連接西濱快速公路亦需與中央公路主管機關協調。政見未說明路線、經費與期程，四年內完工難度高。","sources":[]},
  // 賞蟹步道延伸至惠明宮段
  "hcc5-3-p9": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"步道延伸屬市府觀光與工務權責。沿海步道可能涉及海岸管理與生態環境審查；未說明長度與經費，小型步道工程粗估數千萬元內。","sources":[]},
  // 爭取果菜批發市場與小巨蛋設於香山區
  "hcc5-3-p10": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"果菜批發市場遷建與小巨蛋皆屬大型建設，需市府規劃並取得用地。僅提出設於香山區的主張，未說明是否已有計畫、用地或經費，資訊不足以判斷。","sources":[]},
  // 社區發展協會活動費由 5 萬元調升至 10 萬元
  "hcc5-3-p11": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"社區發展協會活動補助屬市府社福預算，調整補助標準由市府決定即可。粗估以全市約百個協會、每會增加 5 萬元計，每年約 500 萬元，占總歲出約 423 億元比例極低，次一年度即可實施。","sources":[]},
  // 建議市府孵蛋計畫選址香山
  "hcc5-4-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"計畫選址屬市府決策，議員可透過質詢建議。政見未說明計畫規模、用地與經費，選址能否改至香山取決於市府既有規劃與用地條件。","sources":[]},
  // 推動美山聯絡道早日興建
  "hcc5-4-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"unclear","reason":"道路工程屬市府權責，議員可持續質詢追蹤。政見未說明經費、用地與目前設計進度，曾一度暫緩，四年內能否完工無從判斷。","sources":[]},
  // 評估武陵高架橋延伸銜接景觀大道
  "hcc5-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求重新評估高架橋延伸可行性屬質詢監督範圍，評估作業由市府辦理，委託規劃費用小，一任內可完成。實際興建須另行規劃、取得用地與龐大經費，不在本項範圍內。","sources":[]},
  // 啟動第 11 公墓遷葬並召開公聽會
  "hcc5-6-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"medium","reason":"要求研擬遷葬計畫並辦理公聽會，屬市府民政單位權責，議員質詢即可推動啟動程序。召開公聽會成本低；實際遷葬須查估、公告與發放補償，經費與期程未說明，完成全部遷葬通常需數年。","sources":[]},
  // 完善香山區學童通學步道
  "hcc5-7-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"通學步道屬市府工務與交通權責。涉及公有地撥用與私有地徵收，須經用地取得程序，期程易受地主協商影響；經費未說明，單一路段粗估數千萬元內，可分段推動。","sources":[]},
  // 市府運動地圖 APP 增設健走功能
  "hcc5-7-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府 APP 增加功能屬資訊系統擴充，經費小，短期內可完成。","sources":[]},
  // 爭取香山區 24 里每里都設置公共自行車站點
  "hcc5-8-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"公共自行車設站屬市府交通權責，香山區每里設一站約二十餘站，屬中小型支出。政見未提站數與期程，但設站工程簡單，四年內可完成大部分。","sources":[]},
  // 香山區增設心理諮商據點，加開夜間與視訊諮商
  "hcc5-8-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"心理諮商據點、夜間與視訊時段屬市府衛生局權責，可利用既有衛生所空間，經費小。衛生局已回應將於香山衛生所提供心理健康諮詢；擴大補助對象需編列預算，但規模有限。","sources":[]},
  // 青青草原設施盤點、定期維護並規劃接駁
  "hcc5-8-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"設施盤點、定期維護、導覽指引與步道改善均屬市府公園管理權責，經費以維護修繕等級為主。觀光巴士與接駁車可由市府試辦，四年內可見成效。","sources":[]},
  // 爭取原住民族歲時祭儀跨縣市返鄉交通費補助
  "hcc6-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"返鄉交通費補助屬市府原住民族事務權責，市府已回應將估算預算、預計下一年度實施。設籍原住民人數有限，總經費規模小，四年內可落實。","sources":[]},
  // 原住民學生學用費每學期由 2,000 元提高至 2,500 元
  "hcc7-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"原住民學生學用費屬市府自編補助，調整金額由市府決定。粗估設籍學生以千人計，每生每年多 1,000 元，約百萬元等級，次一年度即可實施。","sources":[]},
  // 原住民族語言能力認證獎勵金翻倍
  "hcc7-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"族語認證獎勵金屬市府自編預算，翻倍後總額仍小，次一年度即可實施。","sources":[]},
  // 市立圖書館總館與各分館常設原住民族專書專區
  "hcc7-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市立圖書館館藏規劃屬市府文化局權責，設立專書專區主要是購書與空間調整，經費小，短期內即可完成。","sources":[]},
  // 原住民長輩定點巡迴健檢、建立健康資料庫並增設文化健康站
  "hcc7-1-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"文化健康站主要由中央原民會補助、地方申設，巡迴健檢與健康資料庫屬市府衛生、原民單位權責。未說明站數與經費，原民長輩人口規模有限，所需經費中等，可逐年推動。","sources":[]},
  // 加碼原住民族租屋補貼
  "hcc7-1-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"租屋補貼主要為中央計畫，地方可自籌加碼。未提出加碼金額與對象人數，經費無法估算；本市原住民人口規模有限，所需經費應不大。","sources":[]},
  // 設立原住民文化館並開設文化體驗課程
  "hcc7-1-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"文化館設置與體驗課程需市府原民及文化單位採納執行。未說明規模、地點與是否利用既有空間，經費無法估算；若新建館舍需覓地與設計，四年內完成有難度，以既有空間設置較可行。","sources":[]},
});

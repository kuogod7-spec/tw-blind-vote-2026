/*
 * 2026 新北市議員政見：可行性評估
 *
 * 評估日期：2026-11-02。由本站依統一標準評估，不是專家意見。
 * 評估時政見已匿名並打亂順序，評估者不知道每則政見屬於哪位候選人。
 * 議員政見的「權責」依議員職權判斷（見方法說明第 6 節）：需要市府採納執行屬常態，不拉低總評。
 * 一般政見與長期建設的評估面向同 new-taipei-feasibility.js。
 * 預算比較基準：新北市 115 年度歲出約 2,605 億元（同 new-taipei-feasibility.js）。
 */
window.FEASIBILITY = Object.assign(window.FEASIBILITY || {}, {
  // 加速興建配水池並更新供水管路
  "ntc1-1-p0": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"新北淡水地區供水由台灣自來水公司負責，配水池與管線更新屬台水投資計畫，市府與議員只能協調爭取；淡海新市鎮開發另涉國土署。未說明規模與經費，配水池興建通常需數年。","sources":[]},
  // 依偏鄉距離加發三芝、石門孕婦就醫交通補助
  "ntc1-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"孕婦就醫交通補助由市府衛生局或社會局辦理，需市府採納。三芝、石門人口少，孕婦人數有限，補助總額粗估每年數百萬元以內，訂定補助辦法後一年內可上路。","sources":[]},
  // 要求市府提出淡海醫院的定位、規模與期程
  "ntc1-1-p2": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求市府提出醫院定位、規模與期程屬質詢監督職權。淡海二期醫療專區目前中央劃設約1公頃，市府已表示向中央爭取擴大；醫院本身興建另需用地與經費，但政見訴求本身可直接執行。","sources":["https://news.ltn.com.tw/news/NewTaipei/breakingnews/5574856"]},
  // 建立八里土方車輛的地方回饋機制
  "ntc1-1-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"建立回饋機制需市府訂定辦法，議員也可提出自治條例草案。向土方業者收取回饋金須有法律依據，政見未說明回饋來源、金額與對象，無法估算；制定法規與協調業者需時，但任內可望完成。","sources":[]},
  // 八里國中校舍興建時同步規劃運動中心與地下停車場
  "ntc1-1-p4": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"構想階段","horizon":"約 6–10 年","reason":"校舍興建同步共構運動中心與地下停車場，國內已有校地共構運動中心的先例，可節省用地。政見未說明校舍改建是否已列入計畫、經費與分擔方式；運動中心加地下停車場粗估需數億元，且須配合校舍工程期程。","sources":[]},
  // 規劃三芝行政園區，整合行政服務與公共設施
  "ntc1-1-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"三芝衛生所、消防隊、活動中心等建物多逾40年，但市府表示活動中心無急迫重建需求、另需覓地評估。行政園區整合須先取得用地與規劃，經費未說明，四年內較可能完成規劃而非完工。","sources":["https://udn.com/news/story/7323/9418957"]},
  // 串聯三芝景點、商圈與青年創業培力
  "ntc1-1-p6": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"觀光串聯與青年創業培力需市府觀旅局、經發局執行。政見只有方向，未說明串聯方式、培力內容、經費或期程，無法判斷可行性。","sources":[]},
  // 反對石門區清潔隊遷入國小校地
  "ntc1-1-p7": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"清潔隊設址由市府環保局決定，議員可透過質詢與預算審議反對。能否撤回需市府採納並另覓替代用地，政見未說明替代方案，若找不到合適地點可能延宕。","sources":[]},
  // 淡北道路沿線完善人行空間與公車專用道
  "ntc1-1-p8": {"level":"high","authority":"medium","cost":"high","timeline":"medium","reason":"淡北道路2020年通過環評，二階環評承諾具法律拘束力，人行空間與公車專用道屬開發單位應履行事項。議員可監督落實，經費包含於道路工程內，期程依道路完工進度而定。","sources":["https://www.setn.com/news/673112"]},
  // 要求八里娛樂專區提出定位、推動期程與招商進度
  "ntc1-1-p9": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求市府說明娛樂專區定位、期程與招商進度，屬質詢監督職權，幾乎不需經費。專區土地已陸續標售但未附開發條件、至今未見開發，監督重點明確；實際開發仍取決於業者。","sources":["https://udn.com/news/story/7323/9755294"]},
  // 淡水、八里兩岸整體規劃大型煙火活動
  "ntc1-1-p10": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"跨淡水、八里辦理大型煙火與配套交通、人流管理屬市府活動權責，有歷年大型煙火活動前例。單場煙火與配套經費粗估數千萬元，相對歲出小，任期內可辦理。","sources":[]},
  // 爭取公共自行車進駐石門洞
  "ntc1-1-p11": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公共自行車站點設置屬市府交通局權責，單一站點建置經費小。景點周邊用地可能涉及國家風景區管理單位，需協調設站位置，但一年內可完成。","sources":[]},
  // 三芝社區籃球場地坪改為運動場地規格材質
  "ntc1-1-p12": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"社區籃球場地坪更新由市府體育處或區公所辦理，議員可爭取經費。單一球場改鋪運動地坪粗估數十萬至百餘萬元，經費小，數月內即可完工。","sources":[]},
  // 淡海輕軌路廊升級為中運量系統，自紅樹林站南延銜接大度路
  "ntc1-2-p0": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"unclear","schedule":"low","stage":"構想","horizon":"約 12–20 年","reason":"輕軌路廊升級中運量並南延跨市銜接，需市府提出可行性研究、綜合規劃並報交通部核定，且涉及臺北市協調。說明自標為構想，未提經費；跨河、跨市的中運量路線規模龐大，依國內捷運經驗從可行性研究到通車常超過十年。","sources":[]},
  // 研議淡水、八里直達北投士林科技園區的點對點通勤快線
  "ntc1-2-p1": {"level":"medium","authority":"medium","cost":"high","timeline":"high","reason":"跨市通勤快線需新北與臺北兩市交通局協調核定路線，屬跨縣市公車常見做法。開辦點對點路線的營運補貼經費小，一任內可試辦；成效取決於道路壅塞情況。","sources":[]},
  // 淡水、八里重要路口推動行人友善改善
  "ntc1-2-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"行人庇護島與路口轉角改善屬市府交通、工務局常態工程，議員可爭取並列管。單一路口改善多在數十萬至數百萬元，雖未列路口數，整體規模仍小，一任內可完成。","sources":[]},
  // 要求公開淡海科學城規劃進度，招商人工智慧供應鏈與智慧製造業者
  "ntc1-2-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"要求公開規劃進度屬質詢監督職權；招商與行政便利需市府執行。租稅優惠中，國稅屬中央權限，地方僅能就地方稅減免，須另訂自治條例；招商成效取決於產業意願。","sources":[]},
  // 在淡海新市鎮二期興建第二座國民運動中心
  "ntc1-2-p4": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"國民運動中心興建屬市府權責，可申請中央補助。粗估單座興建經費數億元，占歲出約 0.1–0.3%，未說明財源；從選址、設計到完工通常需 4–6 年，四年內完工有難度。","sources":[]},
  // 淡水國中新市鎮校區提前招生、校舍分段啟用
  "ntc1-2-p5": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"新設校區提前招生與分段啟用屬市府教育局權責，但須配合校舍工程進度。地下停車由一層增為兩層300席以上，須變更設計並增加經費（粗估增加一層地下室數億元），可能延後工期。","sources":[]},
  // 訂定停水災害補助自治條例
  "ntc1-2-p6": {"level":"medium","authority":"high","cost":"medium","timeline":"high","reason":"提出自治條例屬議員職權，議會通過即可施行。市府先行補助再代位求償，須有肇責單位的請求權讓與或法律依據，自治條例能否直接創設代位權有疑義，需妥善設計法制；補助金額視停水事件規模而定，政見未說明上限。","sources":[]},
  // 透過行動服務站、法律諮詢與公益活動深入社區服務
  "ntc1-3-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"行動服務站、法律諮詢與公益活動屬議員服務處可自行辦理的選民服務，不需市府預算，可立即執行。","sources":[]},
  // 八里警政轄區調整前，先大幅增加八里警力
  "ntc1-4-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"警力調配屬市府警察局權責，可於轄區調整前先增派員警或專案勤務。政見未說明增加人數；全市警力總員額有限，增派需從其他轄區調度或補足缺額，但一任內可執行。","sources":[]},
  // 爭取增加淡水地區公車班次與跨區快速客運
  "ntc1-5-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"公車班次與新闢路線由市府交通局核定，需與客運業者協調。增班與新路線須負擔營運虧損補貼，政見未說明經費，粗估每年數千萬元以內。駕駛人力是常見限制，但屬可克服的障礙，一任內可見成效。","sources":[]},
  // 爭取增設公共托育與長照據點
  "ntc1-5-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有爭取增設公共托育與長照據點的方向，未說明地點、數量或做法，無法評估經費與期程。設置需市府取得場地並編列預算。","sources":[]},
  // 提高長者健保補助
  "ntc2-1-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"地方政府可自籌補助長者健保自付保費，但未說明對象、年齡門檻與補助額度，無法估算經費，資訊不足。","sources":[]},
  // 提升公共托育量能
  "ntc2-1-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅寫提升公共托育量能，未說明增設數量、地點或經費，資訊不足以評估。","sources":[]},
  // 爭取在五股地區興建大型醫療院所
  "ntc2-1-p2": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"構想","horizon":"約 8–12 年","reason":"大型醫院設置需用地、醫療網計畫核准與營運主體（公立或引進醫學中心體系），市府需與中央協調。未說明地點、床數、經費與合作對象，屬構想階段；國內新建區域醫院從規劃到開業多需八年以上。","sources":[]},
  // 連任後持續捐出選舉補助款作為學童急難救助
  "ntc2-3-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"捐出選舉補助款屬候選人個人決定，不需公帑，選後即可執行，並可公開捐款收據供查核。","sources":[]},
  // 推動五泰輕軌、林口輕軌及聯外交通改善
  "ntc2-4-p0": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"medium","schedule":"medium","stage":"五泰輕軌已過環評、待中央核定綜合規劃；林口輕軌已整併為跨市新桃林線規劃中","horizon":"約 8–12 年","reason":"五泰輕軌 2026 年 3 月通過環評大會，市府稱行政院核定綜合規劃後約 7 年完工；林口輕軌同年 4 月與桃園長庚線整併為新桃林線，仍在規劃。軌道建設需中央核定與補助，匝道與聯外道路也涉及交通部，政見未說明財務規劃。","sources":["https://news.pchome.com.tw/living/cna/20260304/index-17726216846188218009.html","https://www.chinatimes.com/realtimenews/20260414004004-260421","https://money.udn.com/money/story/7307/9433677"]},
  // 將五股垃圾山轉型為 AI 智慧產業園區
  "ntc2-4-p1": {"track":"long","level":"unclear","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"構想","horizon":"無法估計","reason":"將垃圾掩埋場址轉型為產業園區需市府主導都市計畫變更、土壤與地質整治及招商，並可能涉及環評。標題外未說明面積、開發方式與經費，屬構想階段，無從評估財務與期程。","sources":[]},
  // 推動五股、泰山舊市區都市更新
  "ntc2-4-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"low","reason":"都市更新需市府都更處推動，並仰賴地主與住戶整合。政見指出路段並納入停車與公共空間，但未說明採公辦或民辦、規模與財源。都更從整合到核定通常超過四年，任內較可能完成啟動與規劃。","sources":[]},
  // 塭仔圳重劃區的主要幹道、公園、公托、親子與長照設施與住宅開發同步完成
  "ntc2-4-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"塭仔圳重劃區首座社宅2026年10月開工、預計2031年完工，公設多由重劃與市府分年興建。要求幹道、公園與托育長照設施與住宅同步完成，涉及多局處與多項工程，部分恐超出一任期間。","sources":["https://news.ltn.com.tw/news/NewTaipei/breakingnews/5603559"]},
  // 擴充五股、泰山、林口的公托、課後照顧及長照資源
  "ntc2-4-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"公托、課後照顧與長照據點都屬市府社會局、教育局業務，需市府編列預算執行。政見未說明擴充的數量與經費，無法估算。增設據點需覓得合適空間並招標營運單位，一任內可部分達成，但成效取決於用地取得。","sources":[]},
  // 活化成洲抽水站周邊，打造五股水岸生活廊道
  "ntc2-4-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有活化抽水站周邊、打造水岸廊道的方向，未說明範圍、設施內容或經費。抽水站周邊多屬河川區域或防洪設施用地，開發須符合河川管理規定，內容不足以評估。","sources":[]},
  // 結合林口醫學中心醫療資源與 AI 產業，打造科技廊帶
  "ntc2-4-p6": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出結合醫療資源與 AI 產業的方向，未說明廊帶範圍、招商方式、用地或經費，無法評估。產業園區開發與招商需市府主導。","sources":[]},
  // 因應林口人口遷入擴增校舍、改善通學步道
  "ntc2-4-p7": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"擴增校舍與通學步道屬市府教育局與工務局權責，議員可爭取預算。未說明校數與規模，經費無法估算；校舍增建需設計發包，通常 2–4 年，通學步道較快。","sources":[]},
  // 推動高速公路、快速道路到平面道路的整體系統化規劃
  "ntc2-5-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"國道與快速道路匝道屬交通部權責，平面道路屬市府，整體規劃需中央與市府協調。北入匝道 2026 年 10 月底通車後仍有平面車流交織問題，議員可反映要求檢討；未說明具體改善方案與經費。","sources":["https://udn.com/news/story/7323/9812173"]},
  // 推動五泰輕軌機廠立體化
  "ntc2-7-p0": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"medium","stage":"五泰輕軌綜合規劃待中央核定，機廠立體化僅為建議","horizon":"約 8–12 年（隨五泰輕軌主體）","reason":"五泰輕軌已過環評、尚待中央核定綜合規劃，機廠立體化仍屬地方建議，未見納入正式規劃。若變更機廠設計，可能需修正綜合規劃或環評內容，影響期程。政見未說明立體化的經費與財源，例如是否以聯合開發挹注。","sources":["https://news.pchome.com.tw/living/cna/20260304/index-17726216846188218009.html"]},
  // 活化五股堤防荒地
  "ntc2-7-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"堤防周邊空地活化需市府水利局及河川管理機關同意，議員可爭取。未說明位置、面積與活化用途，無法判斷經費與期程。","sources":[]},
  // 興建泰山大型地下停車場
  "ntc2-7-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公有停車場興建屬市府交通局權責，可爭取中央補助。未說明地點與車位數；粗估大型地下停車場每格造價約百萬元以上，數百格即需數億元，財源未說明，從規劃到完工約 3–5 年。","sources":[]},
  // 爭取機場捷運 A5 泰山站設置空中廊道
  "ntc2-7-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"機場捷運車站屬中央營運系統，設置空中廊道須市府與捷運公司、交通部協調結構與用地。人行廊道依長度粗估數億元，未說明經費；從設計到完工通常需數年，四年內有機會但不確定。","sources":[]},
  // 焚化爐收回市府自營
  "ntc2-7-p4": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"焚化廠營運方式由市府環保局決定，需市府採納。收回自營須等既有委託契約到期或協議終止，並自行招募操作人力，政見未說明人力、經費與時程，轉換成本與營運效率是主要考量。","sources":[]},
  // 推動林口展演中心
  "ntc2-7-p5": {"track":"long","level":"unclear","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"僅有構想，未見正式規劃","horizon":"無法估計","reason":"展演中心屬多年興建的大型場館，須市府取得用地、完成可行性評估並編列經費。政見僅寫推動，未說明規模、地點與財源，查無正式規劃，無法判斷期程。","sources":[]},
  // 開辦五股、泰山、林口雙層巴士
  "ntc2-7-p6": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"公車路線與車型由市府交通局核定，可透過補貼業者或新闢路線辦理，國內已有雙層公車營運先例。購車與營運補貼經費中等，未說明財源；需檢查路線淨高與彎道條件，一任內可開辦。","sources":[]},
  // 規劃台 61 線沿海自行車道
  "ntc2-7-p7": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"台61線屬中央公路系統，沿線設置自行車道須與公路主管機關協調用地與設計，市府可主導規劃。政見僅到「規劃」層次，未說明路線長度與經費，規劃可於任期內完成，施作則視協調結果。","sources":[]},
  // 改善泰山明志路二段人行空間
  "ntc2-7-p8": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市區道路人行空間改善屬市府工務局權責，議員可爭取經費。單一路段人行道改善屬常態工程，經費規模小，一任內可完成；路寬與騎樓整平可能涉及住戶協調。","sources":[]},
  // 導入 AI 智慧紅綠燈
  "ntc2-7-p9": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"號誌控制屬市府交通局權責，AI 適應性號誌已有國內城市實施先例，可分路口逐步導入。政見未說明路口數與範圍，無法估算經費，但可依預算規模分期推動，一任內可見成效。","sources":[]},
  // 要求市府預算與資源重新分配至林口、泰山、五股
  "ntc2-7-p10": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"預算由市府編列，議會只能刪減不能增加支出，資源重分配需市府採納。政見只表達方向，未說明要重新分配哪些預算、規模多大或要推動哪些建設，無法判斷可行性。","sources":[]},
  // 要求市府加速五股、泰山汙水處理與排水設施建設
  "ntc2-7-p11": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"污水下水道與區域排水由市府水利局辦理，常需中央前瞻或水環境計畫補助。政見未說明範圍與經費，管線與排水工程期程多需數年，能加速但不易在一任內全面完成。","sources":[]},
  // 監督第二國民運動中心與現代化市場用地開發
  "ntc3-4-p0": {"level":"high","authority":"high","cost":"high","timeline":"medium","reason":"兩處用地開發已由市府規劃，監督進度屬議員質詢與預算審議職權，不需額外經費。運動中心與市場興建通常需數年，任內是否完工視既有計畫進度而定，政見未說明期程。","sources":[]},
  // 快速道路新增出口匝道納入汽機車分流
  "ntc3-5-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"快速道路匝道設計屬中央工程機關權責，議員只能向中央與市府反映並監督，汽機車分流設計是否納入取決於主辦機關。分流措施於設計階段納入，增加經費有限；匝道工程進度未說明。","sources":[]},
  // 禁止民宅以「太空艙」形式對外出租
  "ntc4-1-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"high","reason":"市府已成立公安小組，會同警消與工務聯合稽查太空艙出租。可依建築法、消防法規查處違規隔間與消防缺失，但全面「禁止」特定出租型態須有明確法源，恐需制定自治條例並可能涉及中央法規，有法制障礙。","sources":["https://money.udn.com/money/story/7307/9763584"]},
  // 在蘆洲成蘆橋下增設 2 面匹克球場
  "ntc4-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"橋下運動場地由市府高灘地管理單位設置，需市府採納。設於既有運動設施之間，經費約 100 多萬元，規模小，數月內可完工。","sources":[]},
  // 持續追蹤光華段社會住宅、蘆洲醫院與蘆洲擴大都市計畫
  "ntc4-3-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"持續追蹤社宅、醫院與都市計畫進度屬議員監督職權，透過質詢與預算審議即可執行，不涉及額外經費。","sources":[]},
  // 以 AI 演算調整交通號誌，取代固定時制號誌
  "ntc4-4-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"號誌時制系統由市府交通局建置，需市府採納。全面改為 AI 動態號誌需偵測設備與系統整合，政見未說明範圍與預算，可能需數億元；每天省 30 分鐘為本人說法，缺乏實證，實際成效受車流量與路網限制。","sources":[]},
  // 導入通路管理經驗，改善傳統市場的購物與經營
  "ntc4-4-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"傳統市場管理由市府市場處負責，需市府採納。政見未說明導入哪些通路管理做法、適用哪些市場或經費，無法判斷可行性。","sources":[]},
  // 以物聯網技術為老舊公寓建立智慧保全
  "ntc4-4-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"老舊公寓智慧保全需市府補助或試辦，並需住戶同意安裝。未說明補助對象、規模與經費，無法判斷可行性。","sources":[]},
  // 協助住戶、大樓管委會與店家做電費健檢，找出最佳電費方案
  "ntc4-4-p3": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"以服務處提供電費方案諮詢，屬議員可自行提供的選民服務，不需公部門預算，可立即執行。可省下的金額為本人說法，實際效果因用電型態而異。","sources":[]},
  // 設立數位服務處，提供線上服務
  "ntc4-4-p4": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"議員服務處的經營方式由議員自行決定，設立線上服務管道經費小，可在任期開始即執行。","sources":[]},
  // 以交通建設加強與臺北市的連結
  "ntc4-5-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅寫以交通建設加強與臺北市連結，未說明具體建設項目，資訊不足以評估。","sources":[]},
  // 以醫療與教育資源照顧家庭
  "ntc4-5-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"醫療與教育資源分屬市府衛生局、教育局，需市府執行。政見只有方向，未說明具體措施、對象或經費，無法判斷可行性。","sources":[]},
  // 以都市更新改善居住安全
  "ntc4-5-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有標題，未說明地區、推動方式或目標，資訊不足以評估。","sources":[]},
  // 持續爭取在地教育資源，縮小與其他地區的差距
  "ntc4-5-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅寫爭取在地教育資源，未說明項目與目標，資訊不足以評估。","sources":[]},
  // 持續監督三重地區重大建設
  "ntc4-6-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"監督市府第二辦公區、第二總館與醫療大樓等建設屬議員質詢與預算審議職權，可直接執行。","sources":[]},
  // 將托育、教育、兒童安全與親子友善公共空間列為問政重點
  "ntc4-7-p0": {"level":"unclear","authority":"high","cost":"unclear","timeline":"unclear","reason":"僅列出問政重點，未提出具體措施或目標。質詢監督屬議員職權，但內容不足以評估經費與成效。","sources":[]},
  // 社會住宅租金應貼近年輕人與弱勢家庭的負擔能力
  "ntc4-8-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"社宅租金計算方式由市府依住宅法訂定，需市府採納。降低租金或擴大租金分級會減少租金收入，影響住宅基金財務自償，政見未說明差額由何支應。調整計租辦法屬行政程序，任內可完成。","sources":[]},
  // 優先增加失智、失能者照顧資源
  "ntc4-8-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"失智、失能照顧資源屬市府長照業務，議員可爭取預算。未說明增加哪些資源、數量或地點，無法判斷經費與期程。","sources":[]},
  // 反對三重銀髮照護園區開發案以 BOT 方式辦理
  "ntc4-8-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"開發方式由市府決定，議員可透過質詢與預算審議表達反對，但能否改變需議會多數或市府採納。若改為公辦，市府須自行負擔興建與營運成本，政見未說明替代方案的經費來源。","sources":[]},
  // 建立支持第一線教師的完整機制
  "ntc4-8-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"特教助理員時數、行政減量與親師衝突處理機制，部分屬市府教育局可調整的事項，部分涉及中央法規與經費補助。政見未說明具體措施與預算，增加助理員時數需持續人事經費，可在任內逐步改善。","sources":[]},
  // 持續監督第二總圖書館興建完成
  "ntc4-8-p4": {"level":"high","authority":"high","cost":"high","timeline":"medium","reason":"監督工程屬議員職權。第二總館已於2026年7月開工，經費約40億元，預計2031年完工，超過一任期間，但監督工作本身可持續執行。","sources":["https://news.ltn.com.tw/news/life/paper/1763048"]},
  // 推動雙語環境與 AI 教育
  "ntc4-8-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"雙語與 AI 教育屬市府教育局業務，需市府採納。政見只有方向，未說明推動內容、對象、經費或期程，無法判斷可行性。","sources":[]},
  // 取消三重果菜批發市場遷往蘆洲的規劃，歸還 3.5 公頃綠地公園
  "ntc4-10-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"果菜市場選址屬市府決策，議員可透過質詢、預算與都市計畫審議施壓，但取消需市府改變既定計畫。市府已舉辦說明會並將遷建納入蘆洲都市計畫，居民反對強烈；原地重建或改址的經費差異未說明。","sources":["https://news.pchome.com.tw/politics/upmedia/20250731/index-75390779030326236001.html"]},
  // 優先辦理蘆洲保新里污水納管
  "ntc4-10-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"污水用戶接管屬市府水利局權責，約一千多戶，以每戶接管粗估約10萬元計約1億餘元。訴求不等都市計畫先行處理，可能面臨巷道狹小、管線密集等施工限制，惟四年內有機會完成。","sources":[]},
  // 要求果菜市場選址相關會議公開透明
  "ntc4-10-p2": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求選址會議公開、提出交通與環境評估，可透過質詢、預算審議與提案監督完成，屬議員職權。評估報告由市府委辦，費用相對全市歲出極小，一任內可要求完成。","sources":["https://news.pchome.com.tw/politics/upmedia/20250731/index-75390779030326236001.html"]},
  // 推動第三胎生育補助 100 萬元
  "ntc4-11-p0": {"level":"medium","authority":"medium","cost":"low","timeline":"high","reason":"生育補助屬地方自治可自訂的福利。2025 年全國出生 10 萬 7,812 人，新北約占兩成弱，粗估約 1.8 萬人，第三胎以上若約 8%，每年約 1,500 人；每人 100 萬元粗估每年 15 億元（50 萬元則約 7.5 億元），約占歲出 0.6%，為長期經常支出且未說明財源，是主要障礙。","sources":["https://udn.com/news/story/7238/9382765"]},
  // 推動交通改革
  "ntc4-14-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有「推動交通改革」標題，未說明內容，資訊不足以評估。","sources":[]},
  // 監督新建跨河大橋相關爭議
  "ntc4-14-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"監督市府建設、透過質詢與預算審議反映居民意見，屬議員本身職權，不需額外經費，任內即可持續執行。政見未具體說明要處理哪些爭議，成效需視個案而定。","sources":[]},
  // 增加社會住宅供給
  "ntc4-14-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"社會住宅興辦屬市府權責，需市府與中央協力。政見未說明增加戶數、地點或財源，無法估算經費與期程。","sources":[]},
  // 提高青年補貼
  "ntc4-14-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"未說明是哪一類青年補貼、提高多少，無法估算經費與判斷可行性。","sources":[]},
  // 促進在地創業
  "ntc4-14-p4": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出促進在地創業的方向，未說明做法、對象或經費，無法評估。","sources":[]},
  // 定期公布問政內容
  "ntc4-15-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"公布自身問政內容屬議員自行可完成的事，透過網站或社群定期發布即可，幾乎不需公帑，當選後立即可執行。","sources":[]},
  // 競選資金如實申報並全面公開
  "ntc4-15-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"競選經費申報為政治獻金法規定的義務，額外全面公開明細則是候選人自身可完成的事，不需公帑，選後即可執行。","sources":[]},
  // 推動蘆洲設置醫院，與大型開發計畫分開規劃以加快進度
  "ntc4-17-p0": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"unclear","schedule":"medium","stage":"醫療設施用地已劃設，配合內政部辦理都市計畫變更中","horizon":"約 8–12 年","reason":"蘆洲北側已規劃約三公頃醫療設施用地，衛生局表示正配合內政部辦理都市計畫變更，用地取得後才籌設醫院。將醫院與周邊開發案分開審議，可能縮短都市計畫程序，但仍須內政部核定及引進醫療機構經營，政見未說明經費與營運模式。","sources":["https://udn.com/news/story/7323/9796526"]},
  // 成立跨局處食安應變中心
  "ntc5-1-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"成立跨局處應變平台與擴大自主檢驗屬市府衛生局權責，可行政整合；檢驗量能與AI稽查需增購設備與人力，經費中等未說明，任期內可推動。","sources":[]},
  // 強化校園反毒教育並建立校園預警機制
  "ntc5-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"校園反毒宣導、志工招募與教師支援屬教育局與學校可辦理事項，已有校園藥物濫用防制體系可擴充，經費小，任期內可推動。","sources":[]},
  // 新板特區持續發展的同時，同步升級周邊生活圈
  "ntc5-1-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只列出浮洲、溪崑等地區名稱，未說明要升級哪些設施或做法，無法判斷經費與期程。","sources":[]},
  // 延伸通學步道並補齊中斷的人行道
  "ntc5-1-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"通學步道與人行道改善由市府工務、交通單位施作，需市府採納。標線改善經費小、可快速完成；但人行道中斷處常涉及私有地、騎樓或路幅不足，需協調用地，政見未說明路段與規模，全面補齊需較長時間。","sources":[]},
  // 依各校路況劃設家長接送區與合法臨停區
  "ntc5-1-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"劃設接送區與臨停區屬市府交通局與學校可辦理的標線與交通管理措施，各縣市已普遍實施。標線經費小，一任內可逐校完成。","sources":[]},
  // 盤點通學需求，增設候車亭並增加上下學時段公車班次
  "ntc5-1-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"候車亭設置與公車班次調整屬市府交通局權責，候車亭單座經費小，增班可透過與客運業者協調或補貼，一年內可見成效。","sources":[]},
  // 試辦偏鄉學童視力巡迴保健，引進驗光師入校初篩分流
  "ntc5-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"學童視力保健屬市府教育與衛生局業務，試辦範圍限偏鄉少數學校，委請驗光師入校的經費小。就醫證明折抵視力回條屬行政程序調整，一任內可試辦。","sources":[]},
  // 建立青年房貸壓力預警機制與諮詢窗口
  "ntc5-2-p1": {"level":"medium","authority":"medium","cost":"high","timeline":"high","reason":"設置房貸壓力諮詢窗口與盤點購屋熱區，市府可辦理，經費小。但房貸逾期率等資料掌握在金融機構與金管會、央行，地方追蹤需中央或銀行提供資料，預警機制成效受限。","sources":[]},
  // 研議試辦 12 歲以下子女父母提早 1 小時下班
  "ntc5-2-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"臺北市2026年起試辦育兒減工時，補助企業減少工時對應薪資的8成、每家上限10萬元，勞動部同年也推出全國措施，地方試辦有前例。市府估全面實施約70多億元，約占歲出2.7%，試辦規模可控，但全面推行財源不明。","sources":["https://news.ltn.com.tw/news/Taipei/breakingnews/5570434","https://ubrand.udn.com/ubrand/story/123656/9531131"]},
  // 營養午餐改採定食定量供餐，由營養師依熱量精算份量
  "ntc5-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"medium","reason":"午餐菜單與供餐方式由教育局與學校規範，可由營養師調整份量設計，經費增加有限。改為定量供餐涉及廚房作業與學生飲食習慣調整，需試辦後推廣，一任內可看到成效。","sources":[]},
  // 嬰幼兒輪狀病毒疫苗補助擴及全市
  "ntc5-4-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"自費疫苗補助屬地方衛生預算可決定事項，臺北市已實施分級補助（弱勢全額、一般定額）多年，有先例可循。粗估新北每年新生兒約 2–3 萬人，以每人數千元計，年經費約 1 億元上下，不到歲出 0.1%；可列入次年度預算。","sources":["https://www.setn.com/news/365990"]},
  // 提高運動選手獎金並建立運動醫療補助
  "ntc5-4-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"運動選手獎金與醫療補助由市府體育處編列，需市府修訂獎勵辦法。以全運會第一名每面加發 6 萬元計，即使數十面金牌，加發額度粗估數百萬元，加上醫療補助，占歲出比例極小，修訂辦法可在一年內完成。","sources":[]},
  // 盤點社工安全裝備，建立社工與派出所協力訪視機制
  "ntc5-4-p2": {"level":"medium","authority":"medium","cost":"high","timeline":"high","reason":"盤點並補足社工安全裝備、建立與派出所的協力訪視機制，屬社會局與警察局可協調完成的事項，經費不高。比照警消的危險加給涉及中央訂定的加給制度，地方難以自行調整，是較難達成的部分。","sources":[]},
  // 幼兒園午餐從公立幼兒園起導入產銷履歷等標章食材
  "ntc5-4-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"幼兒園午餐食材規範與補助基準屬市府教育局權責，補助基準法制化可透過提案自治條例推動。公立幼兒園先行改用標章食材，每餐成本增幅有限，但總經費與財源未說明；稽查機制建立不需大型建設，任期內可實施。","sources":[]},
  // 殯葬與公益捐款流向比照台北市按月公開
  "ntc5-4-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"殯葬與公益捐款流向公開屬市府行政資訊公開，可由議員提案或要求市府比照他市按月揭露，不需大量經費，任期內可落實。","sources":[]},
  // 導入 AI 動態調整紅綠燈秒數改善塞車
  "ntc5-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"號誌控制屬市府交通局權責，議員可爭取示範路口。AI適應性號誌已有多個縣市導入前例，單一路口設備與系統建置粗估數十萬至數百萬元，先示範再推廣，四年內可見成效。","sources":[]},
  // 要求市府對學校周邊停車場建案提出交代
  "ntc5-5-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求市府說明學校周邊停車場建案進度與結構評估結果，屬議員質詢監督職權，可直接執行。","sources":[]},
  // 租屋補助逐步提高至與台北市相同
  "ntc5-5-p2": {"level":"medium","authority":"medium","cost":"low","timeline":"medium","reason":"中央300億租金補貼依縣市分級，臺北市每月最高8,000元、其他縣市最高5,000元，拉齊差額須由市府自籌加碼。全國核定約九十餘萬戶，新北若以二十萬戶、每月加碼最多3,000元粗估，上限每年約72億元，約占歲出2.8%，財源僅寫「財政許可」，逐步推動可行但負擔重。","sources":["https://more-news.tw/745827/","https://www.nownews.com/news/6866819"]},
  // 增加公共托育與公立幼兒園名額
  "ntc5-5-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公共托育與公立、非營利幼兒園由市府社會局、教育局設置，需市府編列預算。政見未說明增加名額數量與經費。新設據點需取得空間、改建並招聘人力，四年內可增加部分名額，但受用地與師資供給限制。","sources":[]},
  // 評估引進可負擔住宅模式
  "ntc5-5-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"評估引進可負擔住宅模式屬研究階段，市府可委託研究或參考他市作法，經費小；房屋稅差別稅率屬地方可調整範圍。內容僅到「評估」層次，四年內完成評估無明顯障礙。","sources":[]},
  // 推動北北基桃共同周遊券
  "ntc5-5-p5": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"跨四縣市整合旅宿、伴手禮與交通票證，須各市府與業者、營運機構協商分潤與票證系統，非單一市府可決定。經費規模未說明，協商時程不確定，屬可克服但需時間的障礙。","sources":[]},
  // 打造 10 分鐘全齡運動生活圈
  "ntc5-6-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"包含運動數據平台、健康點數折抵與河濱廊道照明升級，皆屬市府權責。數據平台與點數制度需要系統建置與營運經費，河濱設施須符合河川管理規定；政見未說明經費與期程，多項整合推動有一定難度，但可分期執行。","sources":[]},
  // 建構社區醫療網，推動醫療與照顧結合
  "ntc5-6-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"社區醫療網與喘息服務屬中央長照計畫與市府衛生、社會局執行範圍，議員可爭取。未說明擴大幅度、據點數或經費，資訊不足以判斷。","sources":[]},
  // 活化閒置空間作為青年創業基地與藝文工作室，串聯古蹟與周邊商圈
  "ntc5-6-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"閒置空間活化與商圈串聯屬市府文化、經發部門業務，議員可爭取。未說明標的空間、規模與經費，無法判斷可行性。","sources":[]},
  // 監督校園安全與通學路線，強化輔導與特教支持，減輕教師行政負擔
  "ntc5-6-p3": {"level":"unclear","authority":"high","cost":"unclear","timeline":"unclear","reason":"標題涵蓋校園安全、通學路線、輔導特教與教師行政減量四個方向，僅以監督為手段，無具體措施、對象或目標。質詢監督屬議員職權，但內容不足以判斷經費與成效。","sources":[]},
  // 改善危險路口與無障礙人行道，盤點巷弄照明死角，建立即時整合交通資訊服務
  "ntc5-6-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"路口改善、無障礙人行道、照明與交通資訊服務都屬市府權責，議員可爭取。項目多但未說明範圍、數量與經費；個別改善一任內可完成，「即時整合交通資訊服務」需系統建置，成效較難在四年內全面呈現。","sources":[]},
  // 推動老屋安心計畫
  "ntc5-6-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"老屋盤點、耐震評估與補強補助需市府編列預算執行，中央已有耐震評估補強補助可搭配。未說明涵蓋棟數與補助額度，經費無法估算；補強與都更涉及住戶同意，四年內只能看到部分成效。","sources":[]},
  // 加速板橋未納戶污水接管工程發包
  "ntc5-7-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"污水接管工程由市府水利局發包，議員可透過質詢督促。工程經費已在既有計畫內，不需另籌財源。流標兩次多與單價偏低或廠商意願有關，需調整預算或契約條件後重新招標，可在一年內改善，但接管施工仍需數年。","sources":[]},
  // 心理健康諮商補助對象擴大至 7 至 14 歲
  "ntc5-7-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"現行15至45歲心理諮商補助為衛福部方案，衛福部表示暫不下修年齡，延伸至7至14歲需市府自籌。以新北該年齡層約三十萬人、使用率2%、每人3次每次1,600元粗估，每年約3千萬元，規模可控；兒少諮商需監護人同意與專業人力，可克服。","sources":["https://udn.com/news/story/7266/9790942"]},
  // 評估在實踐國小增設地下停車場，並訂定電動貨箱三輪車停放規範
  "ntc5-7-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"地下停車場可行性評估與停放規範訂定屬市府交通局權責，需市府採納。評估本身經費小，粗估數百萬元以內；訂定規範屬行政作業，任內可完成。若評估後決定興建，地下停車場另需數億元與多年工期，不在本政見範圍。","sources":[]},
  // 補足公立幼兒園室內監視器
  "ntc5-7-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公立幼兒園設置室內監視器屬教育局權責，需市府編列預算執行。單一班級攝影機與錄影設備粗估數萬元，補足剩餘設置率的總經費在數千萬元以內（粗估），占歲出比例極低，採購安裝一年內可完成，主要須處理隱私與影像調閱規範。","sources":[]},
  // 以自治條例訂定防偷拍罰則
  "ntc5-7-p4": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"自治條例可由議員提案並經議會三讀，屬議員職權。臺北市已於 2026 年三讀通過公共場所防制隱匿式攝影自治條例，有先例；行政經費小，一任內可完成立法。","sources":["https://cnews.com.tw/262170910a02/"]},
  // 爭取預算更新第一線員警防彈裝備
  "ntc5-8-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"警察裝備採購由市府警察局編列預算並由議會審議，議員可透過預算審議推動。以第一線員警數千人、每件防彈裝備數萬元粗估，全面汰換約一至二億元（粗估），可分年編列，一任內可完成。","sources":[]},
  // 要求市府檢視警力缺口、落實合理排班以改善員警過勞
  "ntc5-8-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"勤務排班與警力配置由市警局決定，需市府採納。補足警力缺口受中央警察考試分發員額限制，增加員額須負擔人事經費；殉職認定依中央規定辦理，非市府可決定。排班改善可短期進行，補足員額需較長時間。","sources":[]},
  // 要求對已獲不起訴的人頭帳戶當事人撤銷告誡書
  "ntc5-8-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"告誡處分由警察機關作成，撤銷屬市警局可依行政程序辦理的事項，需市府採納。主要是行政程序調整，幾乎不需經費，可在短期內建立撤銷流程。","sources":[]},
  // 公共工程保固期滿前強制辦理第二次檢驗
  "ntc5-9-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"保固期滿前複驗可由市府工程主管機關訂定作業規定或納入契約條款，議員可透過質詢要求。複驗作業費用小，一任內可建立制度。","sources":[]},
  // 整合規劃商用三輪貨車、大型重機與身障機車停車並分類收費
  "ntc5-9-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"路邊停車格規劃與收費標準由市府交通局訂定，分類設置車格與差別費率屬地方權責，經費以標線與標誌為主，一年內可實施。","sources":[]},
  // 鄰長報紙補貼改為電信補貼，並檢討清潔隊員待遇
  "ntc5-9-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"鄰長福利項目與清潔隊員待遇由市府訂定，議員可透過質詢與預算要求調整。報紙補貼改為電信補貼屬預算用途轉換，經費接近持平；清潔隊待遇檢討未說明幅度，一任內可辦理。","sources":[]},
  // 員工請孕產假時，由市府加碼核發代理同事獎勵津貼
  "ntc5-10-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"勞動部2026年已推出中小企業職務代理等育兒友善補助，市府在中央之外加碼屬地方可自行辦理的福利措施。每年新北孕產假人數有限，加碼規模可控，但金額與財源未說明。","sources":["https://ubrand.udn.com/ubrand/story/123656/9531131"]},
  // 加速客家文化園區轉型、擴大辦理客家義民祭
  "ntc5-11-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"客家文化園區轉型與義民祭擴大辦理屬市府客家局權責，但未列具體做法、規模與經費，資訊不足以評估。","sources":[]},
  // 優化客語教育與師資環境，打造客語友善環境
  "ntc5-11-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出優化客語教育與師資的方向，且未列具體做法，無法評估經費與期程。","sources":[]},
  // 參考新加坡經驗檢討板橋道路設計、行人空間與公車專用道
  "ntc5-12-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"道路設計、行人空間與公車專用道屬市府交通、工務局權責，議員可要求檢討。全面檢討與局部改善一任內可行，但公車專用道需調整車道配置，影響汽機車通行，推動阻力大；未說明範圍與經費。","sources":[]},
  // 推動路口斑馬線退縮
  "ntc7-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"行人穿越道位置調整屬市府交通局權責，需市府採納執行。斑馬線退縮主要是重新劃設標線與停止線，單一路口經費低，可分批於任內完成；國內已有地方政府推動路口退縮的作法。","sources":[]},
  // 擴大公辦都更至捷運站周邊以外的老舊街區
  "ntc7-3-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公辦都更屬市府權責，可由市府或都更專責機構擔任實施者。擴大至非捷運站周邊需逐案整合產權與住戶意願，整合時間長，任內多僅能完成選址與啟動程序；政見未說明範圍與經費。","sources":[]},
  // 由市府提供都更契約健檢諮詢
  "ntc7-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府可結合專業公會提供都更契約簽約前諮詢，屬行政服務，經費小，任期內可開辦。","sources":[]},
  // 盤點夜間高風險路口，增設行穿線專用照明與醒目標誌
  "ntc7-3-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"路口照明與標誌設置屬市府工務與交通部門權責，行穿線專用照明每處經費小，可依肇事資料分批施作，一年內可見成效。","sources":[]},
  // 爭取放寬危老重建容積獎勵
  "ntc7-4-p0": {"level":"low","authority":"low","cost":"high","timeline":"unclear","reason":"危老重建的容積獎勵上限與項目由中央條例與中央主管機關訂定的辦法規範，獎勵後容積不得超過基準容積 1.3 倍或原建築容積 1.15 倍，地方政府無權自行放寬。市府只能向中央建議修法。","sources":["https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0070249&flno=6"]},
  // 爭取設置社區都更諮詢站
  "ntc7-4-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"都更諮詢站設置屬市府都更處業務，議員可爭取設立。諮詢站人力與海砂屋氯離子檢測補助經費有限，粗估每年數百萬元等級，法律媒合可結合律師公會，短期內可開辦。","sources":[]},
  // 擴大老舊公寓增設電梯與結構補強補助
  "ntc7-4-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"增設電梯與結構補強補助屬市府城鄉、工務單位的補助計畫，需市府編列預算。政見未說明補助金額或戶數，經費隨申請量浮動。實際推動常卡在住戶同意與建築法規限制，補助加碼本身不難，但執行件數成長受限。","sources":[]},
  // 監督捷運萬大線工程進度
  "ntc7-4-p3": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"監督工程進度與施工期間交通維持屬質詢監督職權，不需額外經費。第一期截至 9 月底進度約 87%，目標 2027 年底完工，一任內可看到通車成效。","sources":["https://tw.news.yahoo.com/%E9%9B%99%E5%8C%97%E4%BA%BA%E5%BF%AB%E7%AD%89%E5%88%B0%E4%BA%86-%E6%8D%B7%E9%81%8B%E8%90%AC%E5%A4%A7%E7%B7%9A-%E9%80%99%E6%99%82%E5%AE%8C%E5%B7%A5-%E9%80%B2%E5%BA%A687-%E4%B8%B2%E8%81%AF%E4%B8%AD%E6%B0%B8%E5%92%8C-000000310.html"]},
  // 爭取增設 YouBike 2.0 站點與社區巡迴巴士
  "ntc7-4-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"YouBike 站點與社區巴士路線由市府交通局規劃，議員可爭取增設。單一站點設置成本低，社區巡迴巴士的營運補貼通常每年數百萬元等級，占年度歲出比例極小，且有既有制度可循，短期內可見成效。","sources":[]},
  // 盤點閒置公共空間增設公共托育中心與非營利幼兒園
  "ntc7-4-p5": {"level":"high","authority":"medium","cost":"medium","timeline":"medium","reason":"利用閒置公共空間設置公托與非營利幼兒園，需市府社會局、教育局執行。活化既有空間可省下用地成本，主要為裝修與營運補助，政見未說明數量。改建與委託營運需 1 至 2 年，任內可增加部分名額。","sources":[]},
  // 爭取市府增加在地育兒津貼
  "ntc7-4-p6": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"育兒津貼由市府社會局編列預算發放，需市府採納。政見未說明加發金額與對象，無法估算經費；津貼屬全市性制度，若只針對特定行政區加發，可能面臨公平性質疑。制度調整本身可在一個預算年度內完成。","sources":[]},
  // 擴大銀髮俱樂部據點、社區共餐與長者課程
  "ntc7-4-p7": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"新北截至2026年9月已有1,148個銀髮俱樂部、660處社區照顧關懷據點。若以現有俱樂部倍增計，四年需再增千餘處，須仰賴民間團體與場地，目標偏高；基準與經費未說明。","sources":["https://life.tw/article/泰山義學據點揭牌-新北社區照顧關懷據點增至660處-3198873"]},
  // 強化喘息服務與居家照顧網絡
  "ntc7-4-p8": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有方向，未說明增加的服務量、對象或做法。喘息與居家服務主要由長照十年計畫的中央經費支應，市府負責布建與核定，內容不足以評估經費與期程。","sources":[]},
  // 盤點並整平人行道與騎樓高低差
  "ntc7-4-p9": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"人行道整平由市府工務局施作，騎樓整平需市府補助並取得住戶同意。政見未說明範圍與經費。人行道改善可分批進行，但騎樓多屬私有，協調耗時，全面整平需較長時間。","sources":[]},
  // 整治瓦磘溝
  "ntc7-4-p10": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"瓦磘溝整治市府已投入約2.7億元，水質改善已見成效。續做除臭、清淤、截流與親水步道屬市府水利局權責，延續既有工程，四年內可見成效，惟新增經費未說明。","sources":["https://www.chinatimes.com/realtimenews/20250218002189-260421"]},
  // 河濱公園增設寵物友善區、夜間照明與運動設施
  "ntc7-4-p11": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"河濱公園設施屬市府高灘處管理，增設寵物區、照明與運動設施為常態工程，單項經費小，一任內可完成；須符合河川區域使用規定。","sources":[]},
  // 共融公園與口袋公園
  "ntc7-4-p12": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"公園改造與巷弄綠化由市府景觀、工務單位施作，需市府採納。政見未說明改造數量與經費，單座共融公園改造約數百萬至千萬元，可分批施作，任內可完成多處。","sources":[]},
  // 成立專業服務團隊提供居家建築免費諮詢
  "ntc7-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"居家漏水、結構與裝修合約諮詢可由市府結合技師、建築師公會與律師開辦，或由服務處邀集專業人士提供，經費小，任期內可運作。","sources":[]},
  // 協助住戶了解都更、危老重建與耐震評估
  "ntc7-5-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"以服務處提供都更、危老與耐震評估諮詢，屬議員可自行提供的選民服務，市府亦有相關補助與輔導資源，可立即執行。","sources":[]},
  // 駐點輔導簡化市府補助申請流程
  "ntc7-5-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"協助長者處理高樓層住宅問題、簡化補助申請流程，可由市府行政改善或服務處駐點協助，屬行政程序調整，不需大量經費，任期內可落實。","sources":[]},
  // 監督市府加速海砂屋與危老重建審查
  "ntc7-5-p3": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"監督審查流程屬議員質詢職權，不需額外經費。加速審查可透過簡化程序與增加人力，但政見未說明具體要求。","sources":[]},
  // 研議召開建築公共安全專案會議
  "ntc7-5-p4": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"邀集公會與工務局召開專案會議屬議員可自行發起的協調工作，幾乎不需經費。公共安全申報與門扇開啟方向的規定部分屬中央建築法規，會議可提出檢討建議，修法仍需權責機關處理。","sources":[]},
  // 研議召開交通安全專案小組會議
  "ntc7-5-p5": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"邀集公會與交通局召開專案會議，屬議員可自行發起的協調工作，幾乎不需經費，短期內即可辦理。會議能否轉化為實際改善措施，仍需市府後續採納。","sources":[]},
  // 推動 AI 輔助城市治理專案
  "ntc7-5-p6": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"以AI輔助城市治理屬市府可推動事項，但未說明應用場域、資料範圍與經費，產出不明確，資訊不足以評估。","sources":[]},
  // 推動宜居環境專案討論
  "ntc7-5-p7": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"邀集建築師公會、景觀專家與城鄉局進行專案討論，議員可自行召集座談或協調會，經費小；惟產出僅為討論，後續成果需市府採納。","sources":[]},
  // 爭取 0 至 6 歲兒童就醫免門診及住院部分負擔
  "ntc8-1-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"健保部分負擔屬中央制度，但地方可另編預算補助兒童就醫部分負擔。粗估新北 0–6 歲兒童約 20 萬人，若每人每年補助數百至千餘元，年經費約數億元，占歲出約 0.1–0.2%，未說明財源；以補助方式一任內可上路。","sources":[]},
  // 爭取兒童免費接種腸病毒與輪狀病毒疫苗
  "ntc8-1-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"兒童自費疫苗補助屬地方可自辦的衛生福利。腸病毒疫苗完整接種費用破萬元；以新北每年約 1.8 萬名新生兒、兩種疫苗合計每人約 1.5 萬元粗估，每年約 3 億元（粗估），約占歲出 0.1%，未說明財源，但規模可負擔。","sources":["https://tw.news.yahoo.com/%E5%B1%8F%E6%9D%B1%E8%85%B8%E7%97%85%E6%AF%92%E9%9B%B6%E9%87%8D%E7%97%87-%E8%AD%B0%E5%93%A1%E7%B1%B2%E8%A3%9C%E5%8A%A9%E5%BC%B1%E5%8B%A2%E5%B9%BC%E5%85%92%E6%8E%A5%E7%A8%AE%E7%96%AB%E8%8B%97-091209981.html","https://udn.com/news/story/7238/9382765"]},
  // 爭取青年就業津貼、成家補助，並搭配生育補助
  "ntc8-1-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"同時提出就業津貼、成家補助與生育補助，未說明對象、金額或財源，無法估算經費。內容不足以評估。","sources":[]},
  // 爭取 65 歲以上長者裝假牙補助
  "ntc8-1-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"長者假牙補助屬地方可自辦的福利。若對全體 65 歲以上長者開放，以全市長者約 70 餘萬人、每年 1–2% 申請、每人數萬元粗估，每年約 3 至 6 億元（粗估），屬經常支出且未說明資格門檻與財源，規模不確定。","sources":[]},
  // 將敬老卡點數提高到 1,000 點
  "ntc8-1-p4": {"level":"medium","authority":"medium","cost":"low","timeline":"high","reason":"敬老卡點數屬市府自訂福利，新北已自 2026 年 7 月起提高為每月 600 點。提高到 1,000 點，以長者約 70 餘萬人、每人每月增加 400 點粗估，全數使用時每年約 30 餘億元（粗估），約占歲出 1.3%，即使實際使用率僅一半也達十餘億元，且未說明財源。","sources":["https://www.storm.mg/lifestyle/11174308"]},
  // 爭取將鄰長補助提高到 2,500 元
  "ntc8-1-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"鄰長補助費屬市府自訂標準。市長已於議會總質詢宣布將鄰長補助費提高至 2,500 元，政策方向與政見一致，預算已在編列程序中，一年內可落實。","sources":["https://tw.news.yahoo.com/%E4%BE%AF%E5%8F%8B%E5%AE%9C%E6%8F%90%E9%AB%98%E9%84%B0%E9%95%B7%E8%A3%9C%E5%8A%A9%E8%B2%BB-%E5%8D%93%E5%86%A0%E5%BB%B7-%E8%98%87%E5%B7%A7%E6%85%A7%E5%88%97%E5%85%A5%E6%94%BF%E8%A6%8B%E5%B0%B1%E7%AA%81%E7%84%B6%E6%9C%89%E9%8C%A2%E5%8A%A0%E7%A2%BC-071403863.html"]},
  // 大型場館若設於樹林，先完成交通、道路與停車配套
  "ntc8-2-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"道路拓寬與橋梁改建屬市府工務、交通單位權責，需市府採納。政見以場館設於樹林為前提，未說明拓寬路段與經費；橋梁改建或新闢聯絡道需經評估、設計與用地取得，通常需多年，一任內較可能完成評估與部分道路改善。","sources":[]},
  // 評估在俊英街設置簡易火車站分散活動人流
  "ntc8-2-p1": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"火車站設置屬國營臺灣鐵路公司與交通部權責，市府只能提出需求與分擔經費。政見內容是評估，評估本身可在任內完成；但設站須檢討路線容量、站距與營運效益，政見未說明經費。","sources":[]},
  // 看守所遷移後的土地及早規畫
  "ntc8-2-p2": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"及早規劃屬議員可要求市府辦理的事項，規劃本身經費小。看守所土地屬國有，遷移時程與土地移撥取決於中央，市府能否取得用地有不確定性。","sources":[]},
  // 推動大柑園產業園區，吸引 AI 與高科技產業
  "ntc8-2-p3": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"構想","horizon":"約 8–15 年","reason":"產業園區開發需都市計畫或區段徵收、環評與招商，並連帶台 65 線延伸、系統交流道等需中央核定的交通建設。未說明面積、開發方式與經費，世貿中心等也只是方向，屬構想階段。","sources":[]},
  // 嚴格審查市政預算，爭取中央與地方建設資源
  "ntc8-2-p4": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"審查預算是議員法定職權，向中央與市府爭取建設資源也是常態工作，不需額外經費，任期內可持續執行。","sources":[]},
  // 督促社會住宅興建，提高土樹三鶯社宅量
  "ntc8-3-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"社宅興建屬市府權責，議員可監督進度並爭取增量。未說明增加戶數、基地與期程，無法判斷經費與可行性。","sources":[]},
  // 督促市府完善校園安全體系
  "ntc8-3-p1": {"level":"unclear","authority":"high","cost":"unclear","timeline":"unclear","reason":"僅提出督促完善校園安全體系，未說明具體項目或目標。質詢監督屬議員職權，但內容不足以評估經費與成效。","sources":[]},
  // 監督市府減少舉債，落實財政紀律
  "ntc8-3-p2": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"審議預算與監督舉債屬議員法定職權，不需額外經費，可在每年預算審查中執行。實際舉債規模仍取決於市府施政與財政狀況。","sources":[]},
  // 倡議市府帶頭縮減工時，獎勵民間企業跟進
  "ntc8-3-p3": {"level":"low","authority":"low","cost":"unclear","timeline":"unclear","reason":"公務人員工時由中央法令統一規範，民間企業工時依勞動基準法，地方政府無權自行縮減市府員工法定工時。市府可提供獎勵措施鼓勵企業，但政見未說明獎勵方式與經費，核心部分有法制障礙。","sources":[]},
  // 大型場館開發期間同步完成道路拓寬、電纜下地與交通疏導動線
  "ntc8-4-p0": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"medium","stage":"構想階段，配合大型場館開發期程","horizon":"約 8–10 年","reason":"道路拓寬與電纜下地需市府與電力公司協調施作，配合大型開發同步進行可減少重複施工。政見未說明道路範圍、用地取得與經費；道路拓寬涉及徵收，期程與開發案連動。","sources":[]},
  // 場館周邊規畫大面積公園綠地與人行、休憩空間
  "ntc8-4-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"公園綠地與人行空間屬市府都市計畫與工務權責，議員可在預算與都市計畫審議中爭取。未說明是哪座場館、面積與用地取得方式，經費與期程都無從估算。","sources":[]},
  // 調整三鶯線周邊公車路線與轉乘，增加公車班次
  "ntc8-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公車路線、轉乘與班次屬市府交通局權責，配合捷運通車調整為常態作業。增班營運補貼經費小，一任內可完成。","sources":[]},
  // 推動長照政策
  "ntc8-5-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅寫推動長照政策，未列具體做法，資訊不足以評估。","sources":[]},
  // 在三峽爭取更多公托用地與課後照顧資源
  "ntc8-5-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公托與課後照顧屬市府權責，課後照顧可利用校舍較易推動。公托需取得公有土地或空間，政見未說明地點與數量，用地取得是主要關卡。","sources":[]},
  // 在三峽引進青年基地等就業資源，扶植在地品牌
  "ntc8-5-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"青年創業與就業基地屬市府青年及經濟部門可自行設置的據點，主要經費為空間整修與營運，規模不大。政見未說明地點與經費，扶植在地品牌的做法亦未具體化。","sources":[]},
  // 以三峽老街為核心，串聯藍染、茶、竹筍與森林公園的觀光網絡，促進過夜旅遊
  "ntc8-5-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"觀光行銷與遊程串聯屬市府觀旅局業務，需市府採納。政見未說明具體做法與經費。行銷與遊程整合短期可推動，但促進過夜旅遊需住宿供給配合，成效受民間投資影響。","sources":[]},
  // 浮洲橋下河濱設置共融式親子遊憩設施
  "ntc8-6-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"橋下河濱設施需市府執行，經費約數百萬元至千萬元規模（粗估）。用地位於河川區域，須取得河川管理機關許可並配合防洪與疏濬要求，市府亦表示需在不影響防洪前提下研議，是主要關卡。","sources":[]},
  // 編列專案預算，跨局處加強學校、公園、市場防鼠清消
  "ntc8-6-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"編列預算屬市府權責，議員只能要求市府提出，無法自行增加支出。重點場域委外清消屬一般勞務採購，粗估每年數百萬至數千萬元，占約 2,605 億元歲出極小比例，可在一個預算年度內上路。","sources":[]},
  // 以三鶯線捷運站為核心重新盤點三峽公車路網
  "ntc8-6-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公車路網調整與新闢路線屬市府交通局權責，議員可要求盤點。配合捷運通車調整路網是常態作業，增班與新闢路線的營運補貼規模小，一任內可完成。","sources":[]},
  // 為校園廚工編列人事補助並建立加薪機制
  "ntc8-6-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"校園廚工的人事費由學校午餐經費與市府補助支應，增加補助或建立調薪機制需市府編列預算。政見未說明補助額度與人數；以數千名廚工、每月加薪數千元粗估，每年約數千萬至一億餘元，占歲出比例低，可在一個預算年度內上路。","sources":[]},
  // 大型場館開發若涉及土地取得或搬遷，市府應儘早辦地方說明會
  "ntc8-7-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"要求市府在開發前辦理說明會、建立安置與補償配套，屬市府可執行的程序，議員可透過質詢與預算監督推動。土地徵收與補償已有法定程序，安置配套的實際經費視開發規模而定，政見未說明。","sources":[]},
  // 加速推動大柑園、防洪三期及機五周邊都市計畫
  "ntc8-7-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"新訂大柑園都市計畫面積約621公頃，市府已辦公告徵求意見，但新訂與擴大都市計畫須經內政部審議，整體開發多以區段徵收或市地重劃自償。加速審議能由議員督促，但四年內能完成的多為計畫核定，實際開發仍需更長時間。","sources":["https://news.housefun.com.tw/news/article/181147487226.html"]},
  // 儘速打通土城柑城橋銜接中山路
  "ntc8-8-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"柑城橋銜接中山路需市府與管理工業區道路的經濟部協調，工業區業者反對並表示將提法律行動，卡關多年。工程本身規模小，關鍵在協調；能否在一任內打通取決於中央與業者態度。","sources":["https://news.ltn.com.tw/news/NewTaipei/breakingnews/5458097"]},
  // 大型場館周邊同步推動都市計畫及交通建設
  "ntc8-9-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅說明大型場館周邊同步推動都市計畫與交通建設，未指明範圍、項目與經費；高鐵增站屬中央權限。內容不足以判斷經費與期程。","sources":[]},
  // 爭取國中小註冊免學費
  "ntc8-10-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"公立國中小依法已免學費，家長繳交的主要是代收代辦費，過去報導每學期約 650 元。以全市國中小學生約 30 餘萬人、每生每年一千餘元粗估，每年約 4 至 5 億元（粗估），約占歲出 0.2%，屬市府可自行決定的補助，未說明財源。","sources":["https://www.setn.com/news/10609"]},
  // 要求三鶯線三峽沿線落實隔音牆與噪音改善方案
  "ntc8-10-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"監督捷運主管機關落實噪音改善屬議員質詢職權。市府已啟動三鶯線隔音牆優化計畫，首波投入約 6 億元，優先施作學校與人口密集區，政見方向與既有計畫一致。","sources":["https://www.setn.com/news/1804598"]},
  // 督促三峽中山路排水改善工程與長福橋周邊配套
  "ntc8-10-p2": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"在議會監督既有排水工程、停車場與自行車路網的進度，屬議員質詢與預算審議職權，不需額外經費，任內可持續執行。工程本身由市府辦理。","sources":[]},
  // 大型場館定案後，市府同步推動交通、都市計畫及城鄉規畫
  "ntc8-11-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"交通與都市計畫配套需市府交通局、城鄉局執行。政見以大型場館定案為前提，未說明場館地點、配套範圍或經費，都市計畫變更期程也無從判斷。","sources":[]},
  // 建立線上陳情追蹤平台
  "ntc9-1-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"線上陳情並提供案件追蹤碼，可由服務處自建表單與追蹤系統，或沿用現成工具，經費小，任期內可上線。","sources":[]},
  // 推動防詐 ATM 計畫
  "ntc9-1-p1": {"level":"low","authority":"low","cost":"unclear","timeline":"unclear","reason":"ATM 由金融機構營運，異常交易監控與攔阻由金融監理機關規範，打詐屬中央權責，市府無法要求銀行導入人臉辨識。人臉辨識涉及個人資料保護，須有法律依據；政見未說明市府角色與經費。","sources":[]},
  // 推動育兒減稅
  "ntc9-1-p2": {"level":"low","authority":"low","cost":"unclear","timeline":"unclear","reason":"所得稅屬國稅，免稅額與扣除額由所得稅法規定，地方政府無權對0至18歲子女提供所得稅減免；地方稅中亦無對應稅目，屬中央權限。","sources":[]},
  // 推動公共托育普及化，托嬰中心監視器制度透明化
  "ntc9-1-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"增設公托與托嬰中心監視器管理屬市府社會局權責，議員可要求並監督。未說明增設數量與期程，經費無法估算；公托需覓得空間，普及化在四年內難以全面達成，監視器制度透明化則較易推動。","sources":[]},
  // 改善市場周邊人車爭道並增設汽機車停車位
  "ntc9-1-p4": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"改善市場周邊交通與增設停車位屬市府權責，但未說明地點與數量；市場周邊多為既成市區，停車用地取得難易差異大，資訊不足以判斷經費與期程。","sources":[]},
  // 振興老舊商圈
  "ntc9-1-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"商圈振興屬市府經發局業務，議員可爭取經費。未說明哪些商圈、具體做法與經費，資訊不足。","sources":[]},
  // 推動寵物病歷雲端化
  "ntc9-1-p6": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"寵物病歷雲端化需市府動保處建置平台，並需民間動物醫院配合上傳；目前無法規強制獸醫院使用，推動靠誘因或試辦。系統建置經費不大但未說明，四年內可做到試辦與部分院所加入。","sources":[]},
  // 交通號誌導入 AI 即時車流判斷
  "ntc9-2-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"號誌系統建置與升級由市府交通局主辦，需市府採納並編列預算。AI 車流判斷搭配緊急車輛優先通行涉及偵測設備、通訊與系統整合，政見未說明範圍與預算，若全區建置可能需數億元；試辦路廊則可在一任內完成。","sources":[]},
  // 市政服務導入 AI
  "ntc9-2-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"市政服務數位化與 AI 應用由市府資訊單位主導，需市府採納。政見未說明導入哪些服務、規模與預算，無法估算經費或判斷期程。","sources":[]},
  // 以新店為起點設立 AI 城市治理示範區
  "ntc9-2-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"設立示範區需市府科技與研考單位採納執行。政見未說明示範區的範圍、應用項目、預算與期程，無法估算經費或判斷四年內能否看到成效，屬資訊不足。","sources":[]},
  // 分析市政資料找出被忽略的地方問題
  "ntc9-2-p3": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"運用議員可取得的公開資料與陳情紀錄進行分析並追蹤，屬議員問政職權，所需為助理人力與工具，經費小，當選後即可執行。","sources":[]},
  // 推動地方 AI 教育
  "ntc9-2-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"銀髮族數位與 AI 課程可透過市府社會局、社區大學或樂齡學習中心開設，需市府採納。開課經費小，粗估每年數百萬元以內，有既有學習據點可利用，短期內可開辦。","sources":[]},
  // 推動青少年自殺成因的系統性研究
  "ntc9-2-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"委託個案層級研究屬市府衛生、教育部門可辦理的研究案，議員可透過質詢與預算要求。研究委託經費通常為數百萬元等級，相對歲出極小，一任內可完成。","sources":[]},
  // 定期公布問政內容並公開申報競選資金
  "ntc9-3-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"公布問政內容與申報競選資金屬議員自身可完成的事項，政治獻金本即依法申報，主動公開不需額外經費，任期內即可落實。","sources":[]},
  // 持續改善校園通學環境與行人安全
  "ntc9-4-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出方向，未說明具體路段、措施或規模，無法評估經費與期程。通學環境改善屬市府交通與教育部門權責。","sources":[]},
  // 持續爭取托育、長者福利與偏鄉醫療資源
  "ntc9-4-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅列托育、長者福利與偏鄉醫療三個方向，未說明具體做法、地點或規模，無法評估經費與期程。爭取資源需市府採納執行。","sources":[]},
  // 改善瑠公圳水質
  "ntc9-5-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"水圳整治需市府水利局、環保局與農田水利單位協調。源頭補水、污水截流與清除阻水障礙都屬工程手段，政見未說明經費，截流工程粗估數千萬至數億元。跨單位協調與施工需數年，一任內可看到部分改善。","sources":[]},
  // 推動雙北共同處理交界地區管理問題
  "ntc9-5-p1": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"雙北交界管理需兩市政府協調權責，議員可推動但無法單方決定。以具體巷道為示範盤點分工，經費不高，但跨市協調耗時，成效取決於兩市合作意願。","sources":[]},
  // 建立數位陳情平台
  "ntc9-6-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"建立陳情管道並承諾24小時回應，屬議員服務處可自行運作的事項，線上表單或通訊軟體即可建置，經費小，任期內即可上線。","sources":[]},
  // 結合坪林茶園、烏來溫泉、石碇老街推動觀光與農業升級
  "ntc9-6-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"觀光與農業升級屬市府觀旅局、農業局業務。說明自承未提經費，也未列具體措施或目標數字，資訊不足以判斷可行性。","sources":[]},
  // 鼓勵青年返鄉創業
  "ntc9-6-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"創業貸款利息補貼與培訓課程屬市府經發局、勞工局可辦理的業務，需市府採納。政見未說明貸款額度與補貼規模，利息補貼與信保成本隨核貸量增加，粗估每年數千萬元以內。多數縣市已有類似方案可參照，任內可上路。","sources":[]},
  // 爭取中央資源拓寬新烏路
  "ntc9-6-p3": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"新烏路屬省道台9甲線，拓寬由交通部公路局主辦，地方議員只能協助爭取。政見未說明拓寬路段長度與規模，山區道路拓寬涉及用地徵收與邊坡工程，經費無法估算；分段改善可在數年內完成部分路段。","sources":[]},
  // 爭取加速碧潭吊橋周邊開發並活化深坑老街
  "ntc9-6-p4": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"周邊開發與老街活化屬市府權責，但未說明開發內容、期程與經費，資訊不足以評估。","sources":[]},
  // 保護烏來原住民文化
  "ntc9-6-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出保護原住民文化與永續發展的方向，未說明做法、對象或經費，無法評估。","sources":[]},
  // 爭取設置安坑運動中心
  "ntc9-8-p0": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"unclear","schedule":"medium","stage":"市府已納入規劃，預定地已確定","horizon":"約 5–7 年","reason":"國民運動中心屬市府興建，常見中央體育主管機關補助。據報導市府已將安坑運動中心納入規劃，但未見核定預算或設計進度；從規劃、設計到完工通常需五年以上，政見未說明經費。","sources":[]},
  // 持續推動校園無人機巡迴教學
  "ntc9-9-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"巡迴教學屬市府教育局可辦理的推廣活動，講師與設備費用小，說明為「持續推動」，已有既有基礎，一任內可持續執行。","sources":[]},
  // 爭取在新北設立無人機操作證術科練習場
  "ntc9-9-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"無人機術科測驗與場地認可屬交通部民航局權責，市府可提供用地並申請設置。需覓得符合空域限制的場地，雙北空域管制多，選址是主要關卡；未說明地點與經費。","sources":[]},
  // 啟動偏鄉老屋整建輔導計畫
  "ntc10-1-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"老屋盤點與補辦證明、產權釐清需市府城鄉局、地政單位執行。以行政輔導為主，經費不大，粗估每年數百萬元等級。產權複雜與都市計畫前建物的合法性認定程序繁瑣，四年內可啟動並處理部分案件，但全面完成不易。","sources":[]},
  // 爭取經費美化瑞芳東和路擋土牆
  "ntc10-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"擋土牆美化屬小型工程，經費小，已與區公所會勘並規劃分階段施作，預計 2027 年初完成剩餘牆面（服務處說法）。","sources":[]},
  // 推動汐止基層棒球三級制發展
  "ntc11-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"區內中小學已有棒球隊，建立國小、國中、高中三級銜接需市府教育局支持設隊、編列教練與訓練經費，高中端可能涉及非市立學校。未列經費與期程，屬可推動但需逐步建置。","sources":[]},
  // 監督捷運汐東線進度，推動場站周邊交通導向開發
  "ntc11-2-p0": {"level":"high","authority":"high","cost":"high","timeline":"medium","reason":"監督工程進度屬議員質詢職權。汐東線主體工程已於 2025 年開工，2026 年 7 月整體進度約 31%，市府目標 2032 年完工，通車在任期之後；場站周邊交通導向開發需市府與捷運主管機關辦理都市計畫，任內可推動規劃。","sources":["https://tw.news.yahoo.com/%E6%8D%B7%E9%81%8B%E6%B1%90%E6%9D%B1%E7%B7%9A%E9%80%B2%E5%BA%A6%E9%81%9431-23-%E4%BE%AF%E5%8F%8B%E5%AE%9C%E7%9B%BC2032%E5%B9%B44%E6%9C%88%E5%AE%8C%E5%B7%A5-113402929.html"]},
  // 爭取興建立體停車場，改善公車通勤接駁
  "ntc11-2-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"立體停車場與公車接駁屬市府交通局權責，議員可爭取。未說明地點、規模與接駁路線，無法估算經費與期程。","sources":[]},
  // 串聯山海自行車路網
  "ntc11-2-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有串聯山海自行車路網的方向，未說明路線、長度或經費，無法評估。自行車道建設屬市府權責，跨越河川或山區路段可能涉及其他管理機關。","sources":[]},
  // 汐止增設社區長照巷弄站（C 級據點），擴大日照與樂齡活動
  "ntc11-2-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"社區照顧關懷據點與巷弄長照站多由民間單位申設，中央長照經費與市府補助開辦及營運，經費規模小。增設據點主要取決於場地與承辦單位，一任內可見成效；政見未說明增設數量。","sources":[]},
  // 增加復康巴士量能
  "ntc11-2-p4": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"復康巴士由市府社會局委託營運，增車需市府編列購車與營運經費。政見未說明增加車輛數，經費隨規模增加，粗估每輛每年營運成本約百萬元等級。購車與委託營運可在一兩年內完成。","sources":[]},
  // 推動居家藥事照護
  "ntc11-2-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"居家藥事照護已有健保與長照相關給付，地方可擴大推廣，但政見未說明對象、規模或做法，資訊不足以評估。","sources":[]},
  // 整合北海岸觀光路網
  "ntc11-2-p6": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"北海岸觀光涉及市府觀旅局與中央的國家風景區管理單位，需跨機關協調。政見未說明整合內容、範圍或經費，無法判斷可行性。","sources":[]},
  // 輔導青年創業，推動傳統市場轉型
  "ntc11-2-p7": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"青年創業輔導與市場轉型屬市府經發局業務，已有相關補助可延伸。未說明做法、對象市場與經費，無法判斷可行性。","sources":[]},
  // 改善河濱公園設施，規劃全齡運動廊道
  "ntc11-2-p8": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"河濱公園由市府高灘地管理單位維護，在河川區域內施作須符合河川管理規定並申請許可。政見未說明廊道長度與設施規模，經費無法估算。設施改善可分期施作，任內可完成部分路段。","sources":[]},
  // 以影像記錄社區並找出鄰里問題
  "ntc11-3-p0": {"level":"unclear","authority":"high","cost":"unclear","timeline":"unclear","reason":"僅提出以影像記錄社區的方向，未列具體做法或目標，無法評估。屬議員服務處可自行執行的工作。","sources":[]},
  // 捷運施工圍籬縮減路幅路段優化號誌系統
  "ntc11-4-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"號誌時制調整屬市府交通局權責，議員可透過質詢與陳情要求執行。針對特定路口導入感應或動態時制，多為既有號誌控制器的設定或局部設備更新，粗估數百萬元以內，占年度歲出極小，短期內可完成。","sources":[]},
  // 結合學校與市府資源舉辦親子及社區交流活動
  "ntc11-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"親子與社區交流活動屬學校與市府常態辦理項目，議員可協助爭取與串聯資源。說明未列經費與期程，但活動型政見規模小，一任內可執行。","sources":[]},
  // 持續督促已動工的捷運汐東線至通車
  "ntc11-6-p0": {"level":"medium","authority":"high","cost":"high","timeline":"medium","reason":"監督已開工的捷運工程屬質詢與預算審議職權，本身不需額外經費。主體工程 114 年 3 月開工，115 年 7 月進度約 31%，預計 2032 年完工，「至通車」超出一任四年，四年內只能看到工程推進。","sources":["https://news.housefun.com.tw/news/article/140478489389.html"]},
  // 道路銜接工程依進度推動
  "ntc11-6-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"同興路穿越國道工程原包商解約後已重新發包約12.39億元，2026年10月開工，目標2029年3月完工，完工後串聯同興路與康寧街。經費已編列、期程在一任內，依進度推動可行。","sources":["https://www.scooptw.com/taiwanpost/547784/%e6%b1%90%e6%ad%a2%e5%90%8c%e8%88%88%e8%b7%af%e7%a9%bf%e8%b6%8a%e5%9c%8b%e9%81%93%e5%b7%a5%e7%a8%8b%e5%be%a9%e5%b7%a5%e3%80%80%e4%be%af%e5%8f%8b%e5%ae%9c%e8%a6%96%e5%af%9f%e6%8b%9a118%e5%b9%b43/"]},
  // 排水防洪、學校建設與公園優化依進度推動
  "ntc11-6-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"排水、學校與公園工程由市府執行。政見未說明具體項目、地點或規模，「依進度推動」也未說明是哪些既有計畫，無法判斷可行性。","sources":[]},
  // 捷運施工期間即時公開施工資訊，滾動檢討交通維持計畫
  "ntc11-7-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求公開施工資訊與檢討交維計畫屬質詢監督職權，施工資訊公開多可透過既有網站辦理，經費小，一任內可執行。","sources":[]},
  // 選舉活動以民防、健身課程取代發放金錢與禮品
  "ntc11-9-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"自身選舉活動的辦理方式完全由參選人決定，不需市府配合，也不涉公帑。不發放金錢與禮品本屬選罷法要求，以課程取代可立即執行。","sources":[]},
  // 檢討原民住宅租期規定，為弱勢族人建立彈性續租機制
  "ntc12-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"原民住宅租期與續租規定屬市府自訂管理規則，可由原民局修正並建立例外機制，市府已表示續約完成後檢討。屬行政規章調整，經費小，任期內可完成。","sources":[]},
  // 全面強化失聯與非法移工稽查
  "ntc12-5-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"high","reason":"失聯移工查緝主要屬移民署與警政等中央體系，地方勞工局依就業服務法可辦理雇主非法聘僱稽查。地方可強化查察頻率，但「全面」稽查須與中央合作，成效受限於中央執法量能。","sources":[]},
  // 設立單一窗口，輔導烏來原鄉民宿合法化
  "ntc13-4-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"設立單一窗口屬市府行政協調事項，由區公所與相關局處協力即可運作，經費小。市府已在質詢中同意設立，四年內可看到運作；民宿實際合法化仍受建築、消防與土地使用條件限制。","sources":[]},
});

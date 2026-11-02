/*
 * 2026 桃園市議員政見：可行性評估
 *
 * 評估日期：2026-11-02。由本站依統一標準評估，不是專家意見。
 * 評估時政見已匿名並打亂順序，評估者不知道每則政見屬於哪位候選人。
 * 議員政見的「權責」依議員職權判斷（見方法說明第 6 節）：需要市府採納執行屬常態，不拉低總評。
 * 一般政見與長期建設的評估面向同 new-taipei-feasibility.js。
 * 預算比較基準：桃園市 116 年度總預算案歲出約 1,873 億元（同 taoyuan-feasibility.js）。
 * 2026-11-02 經 Codex 獨立查核、逐條裁決後修正（事實、來源、粗估與評等一致性）。
 */
window.FEASIBILITY = Object.assign(window.FEASIBILITY || {}, {
  // 爭取國中小免費營養午餐、教科書與鮮奶延伸至高中職
  "tyc1-1-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"桃園國中小免費午餐現行每餐補助一般學校 71.3 元、偏遠學校 75.3 元。延伸至高中職的學生人數未查證；粗估假設每萬名學生、每年 200 餐，午餐約 1.4 億元，若涵蓋數萬名學生則達數億至十億元級，另加教科書與鮮奶，財源未說明。轄內國立與私立高中職多，需與中央及私校協調，市府未具體承諾。","sources":["https://udn.com/news/story/6898/9715095"]},
  // 孕產婦乘車補助使用期限延長至產後兩年
  "tyc1-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"孕產婦乘車補助屬市府自辦福利，延長使用期限主要增加已核發額度的使用率，經費增幅小。市府已表示研議延伸，修正作業規定即可上路。","sources":[]},
  // 提高捷運公司人員待遇，增加專業及輔導加給
  "tyc1-1-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"捷運公司由市府持股，員工待遇由董事會決定，議員可以透過預算審查與質詢推動。政見沒有說明調薪幅度與人數，規模未說明，經費無法估算；調高待遇會增加捷運公司營運成本，實際財務影響待確認，調整加給一任內可以完成。","sources":[]},
  // 比照國民運動中心規格改建老舊市立游泳池
  "tyc1-1-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"游泳池改建屬市府權限，說明中市府已承諾改善。改建範圍與面積未說明，經費無法估算；比照國民運動中心規格需經規劃、設計、發包與施工，一任內能否完工有不確定性。","sources":[]},
  // 推動虎頭山三聖路延伸至長壽路工程
  "tyc1-1-p4": {"level":"high","authority":"medium","cost":"unclear","timeline":"medium","reason":"道路開闢屬市府權限。說明中用地徵收已獲核定、進行細部設計，後續發包施工一任內可望完成或接近完成。工程預算與工期未說明，經費無法估算。","sources":[]},
  // 提高公共自行車理賠額度並放寬理賠條件，改善公車脫班誤點
  "tyc1-1-p5": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公共自行車理賠條件可由市府與營運商協商調整，經費小。公車脫班與駕駛不足相關，屬長期結構問題，難以短期解決。","sources":[]},
  // 市立游泳池由零星修繕改為整體翻修
  "tyc1-3-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"市立游泳池整修屬市府體育局權責，改為整體翻修可透過預算編列推動。政見未說明涉及哪些場館、翻修範圍與設施現況，無法估算經費與期程。","sources":[]},
  // 以合理補貼維持必要的虧損公車路線，並建立駕駛服務獎懲制度
  "tyc1-3-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"虧損路線補貼與業者考核屬市府交通局權責，中央亦有補貼制度可配合，一任內可推動。路線、補貼缺口與獎懲支出未說明，規模未說明，經費無法估算。","sources":[]},
  // 整合跨局處重大工程，避免道路反覆開挖
  "tyc1-3-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"道路挖掘管理屬市府權限，整合管線與工程排程屬行政協調，經費小，可透過既有挖掘管理機制強化，一任內可見成效。","sources":[]},
  // 強化特殊學生陪伴輔導與教師支持機制
  "tyc1-3-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"特教助理與輔導人力屬市府教育局權責，部分人力編制依中央特教法規。專人陪伴需大量增聘人員，經費中等且未說明財源，特教人力招募也普遍不易。","sources":[]},
  // 在校園推動情緒認知教育
  "tyc1-4-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"情緒教育可由教育局在現行課綱的綜合活動、輔導課程中推動，或辦理教師研習，屬地方教育權責。經費以教材與研習為主，成本小，四年內可實施。","sources":[]},
  // 嚴格審查托育機構與從業人員
  "tyc1-4-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"托育機構與從業人員審查屬市府社政單位權限，強化審查與查核屬行政措施，經費小，可立即推動。","sources":[]},
  // 推動職場彈性工時
  "tyc1-4-p2": {"level":"unclear","authority":"low","cost":"unclear","timeline":"unclear","reason":"工時制度由勞動基準法規範，屬中央勞動部權限，市府能做的只有宣導、獎勵企業或調整自家機關的差勤。政見只有一句標題，對象與做法都沒有說明，無法判斷。","sources":[]},
  // 推動寵物醫療價格透明化並加重虐待動物罰則
  "tyc1-4-p3": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"加重虐待動物罰則須修正中央《動物保護法》，非地方權限。獸醫診療收費標準依《獸醫師法》由獸醫師公會擬訂、報地方主管機關核備，地方並可裁處超收或未開立收費明細，價格透明化有部分地方著力點；校園生命教育屬市府可推動事項，經費小。主要訴求之一有權責障礙。","sources":["https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=M0130001"]},
  // 活化舊城商圈並輔導青年在地創業
  "tyc1-4-p4": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"商圈活化、地下通道利用與青年創業輔導屬市府經發局與青年局權責。政見未說明地下通道使用方式、徒步空間範圍與輔導制度內容，無法估算經費與期程。","sources":[]},
  // 公園運動場與兒童遊具加裝頂棚
  "tyc1-4-p5": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"公園設施改善屬市府權限，需市府採納，加裝頂棚工程單純，一任內可見成效。加裝的處數、面積與結構未說明，經費無法估算。","sources":[]},
  // 檢討公車路網與班次並擴大公共自行車站點
  "tyc1-4-p6": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"公車路網、班次與公共自行車站點皆屬市府交通局權限，屬常態檢討業務，一任內可見成效。增加班次會提高營運補貼，新增站點數量也未說明，經費無法估算。","sources":[]},
  // 落實人車分道並建置無障礙人行道
  "tyc1-4-p7": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"人車分道與無障礙人行道屬市府工務局與交通局權責。未說明路段或規模，經費無法估算；道路寬度不足與騎樓整平需逐段協調，四年內可改善部分路段。","sources":[]},
  // 交通違規罰鍰專款用於道路安全與大眾運輸
  "tyc1-4-p8": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"議員可提案並透過預算審議要求罰鍰專款專用，但實際建立專款制度須由市府編列執行。罰鍰分配與用途受中央《道路交通違規罰鍰收入分配及運用辦法》規範；交通部 2026 年 10 月預告修正，擬將地方獲配罰鍰提撥率由至少 12％提高至 100％，並納入道路安全環境改善，目前仍屬預告草案。屬既有收入用途調整，不增加新支出，但可能排擠原本用於一般支出的部分。","sources":["https://www.motc.gov.tw/ch/app/news_list/view?id=14&module=news&serno=8496b582-459a-413a-a2da-1c13da0cc625"]},
  // 在捷運綠線蘆興埤站周邊設立市立科學博物館
  "tyc1-5-p0": {"track":"long","level":"unclear","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"清單載市府表示啟動規劃，尚無可行性研究","horizon":"尚無規劃資料，無法估計","reason":"科學博物館是大型場館，屬市府權責，清單載站旁有約 5 公頃機關用地可用。市府只表示將啟動規劃、逐年編列預算，尚未看到可行性研究、建館規模與總經費，財務規劃與期程都無法判斷。","sources":[]},
  // 在捷運綠線蘆竹中正北站周邊規劃大型森林公園與國際級野生動物園
  "tyc1-5-p1": {"track":"long","level":"unclear","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"僅有構想，清單載市府表示納入規劃考量","horizon":"尚無規劃資料，無法估計","reason":"森林公園加國際級野生動物園是大型建設，屬市府權責，但目前只有構想，沒有規模、經費與財源。清單所稱周邊約 42 公頃綠地的土地權屬、使用分區與環評適用情形都未確認，財務與期程無法判斷。","sources":[]},
  // 公車駕駛薪資以每月 7 萬元為目標
  "tyc1-5-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"駕駛薪資由客運業者決定，市府只能以補貼或營運契約誘導；2023 年報導市府每人每月補貼 4,000 元、業者另加 2,000 元，現行補貼與薪資差距未見最新資料。粗估：以 2022 年市區公車駕駛 842 人、每人每月補差 1 至 2 萬元計，每年約 1 至 2 億元，占市府歲出約 0.05% 至 0.11%；說明未提財源。","sources":["https://www.setn.com/news/1241792"]},
  // 國小學童鮮乳供應擴大至國中
  "tyc1-5-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"現況已實施：市府已自 2026 年 8 月 31 日開學日起，將學童喝鮮乳政策擴大至 15 歲、納入國中生，政見訴求已實現。","sources":["https://www.chinatimes.com/realtimenews/20261030001790-260421","https://udn.com/news/story/7324/9686144"]},
  // 在大潭電廠旁市有地設立 AI 算力中心
  "tyc1-5-p4": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有標題，未說明設置主體、規模、用地現況、電力取得與經費來源。算力中心多屬民間投資，市有地出租或設定地上權需市府辦理，資訊不足無法判斷可行性。","sources":[]},
  // 明年第二季前將本市納入北台灣跨縣市觀光通行票卡，並結合捷運推出聯名一日票
  "tyc1-5-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"加入跨縣市觀光票卡與推出聯名一日票屬市府觀旅局與捷運公司權責，需與他縣市協調，市府已以明年第二季為目標評估。經費小，期程明確。","sources":[]},
  // 爭取捷運橘線列為第二階段優先路線並改採中運量系統
  "tyc1-6-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"爭取路線列為優先並改採中運量系統屬一般政見，需市府採納；路網優先順序檢討與重新辦理可行性研究的成本相對有限。改變系統型式須重新研究並送交通部審議，一任內可推進至規劃審議階段，但審議結果不確定。說明未提期程。","sources":[]},
  // 敬老卡額度由 800 點提高至 1,000 點並擴大使用項目
  "tyc1-6-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"點數由市府自訂。報導指敬老愛心卡發出約 47 萬張（含愛心卡）；粗估每人每月增 200 點、全數使用，每年約 11 億元（47 萬×200×12），約占總歲出 0.6％，為上限估計，實際依使用率而定，財源未說明。擴大使用項目部分，市府已宣布自 2027 年起新增醫療、肌力課程、農會消費等用途。","sources":["https://news.pts.org.tw/article/807160","https://sab.tycg.gov.tw/News_Content.aspx?Create=1&n=7372&s=1875084"]},
  // 研議坐月子期間每月 5,000 元營養補助
  "tyc1-6-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"市府可用自籌財源辦理生育相關現金補助，要求市府研議屬質詢監督，研議本身一任內可以完成。政見沒有說明補助月數、對象範圍（孕婦及照顧配偶）與人數，補助規模未說明，經費無法估算。","sources":[]},
  // 加速規劃捷運青線並提出往返青埔的替代道路方案
  "tyc1-6-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"捷運規劃由市府捷運工程局辦理，替代道路方案屬市府權責。政見要求加速規劃並提出替代道路方案，未承諾興建完成；規劃與方案提出經費不大，但替代道路路線與規模未說明，經費無法估算。四年內可推進規劃並提出方案。","sources":[]},
  // 公車研議尖峰半職駕駛與彈性排班，並導入需求反應式預約運輸
  "tyc1-9-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公車排班與需求反應式運輸屬市府交通局權責，各地已有預約式小巴先例。半職駕駛須業者配合並符合勞動與職業駕照規定，駕駛短缺難以短期解決。","sources":[]},
  // 逐路檢討桃園區禁行機車與強制兩段式左轉規定
  "tyc1-9-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"禁行機車與兩段式左轉屬市府交通局權限，議員可透過質詢要求提出檢討路段與期程。檢討與標誌號誌調整經費小，一任內可完成。","sources":[]},
  // 捷運綠線 G11 站周邊盤點空地增設收費停車場
  "tyc1-9-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"站點周邊盤點空地、設置收費停車場屬市府交通局權責。土地權屬、停車場形式與收支均未說明，設置成本無法估算；盤點工作本身容易推動，能否設置與規模取決於盤點結果及土地取得方式。","sources":[]},
  // 2027 年燈會串聯 13 區宮廟、商圈與公共運輸分散人流
  "tyc1-9-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"燈會活動規劃與接駁屬市府觀旅局與交通局權責，串聯各區宮廟商圈以分散人潮屬活動設計調整，經費小，期程明確。","sources":[]},
  // 以大數據分析通勤尖峰，成立應變車隊支援國道客運
  "tyc1-10-p0": {"level":"medium","authority":"low","cost":"medium","timeline":"medium","reason":"9005、9023 屬國道客運，路線與班次由中央公路主管機關核准、業者經營，非市府權限。地方可做的是以數據分析尖峰需求、協調業者增班或以市區公車接駁，分析成本低；成立應變車隊需業者配合，2023 年報導亦顯示客運駕駛不足。","sources":["https://news.tycg.gov.tw/News_Content.aspx?n=5016&s=1594742&sms=7885","https://www.setn.com/news/1241792"]},
  // 建立毒駕風險地圖並充實防護裝備
  "tyc1-10-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"low","reason":"毒駕風險地圖與警用防護裝備屬市府警察局權責，可在一任內推動。讓車輛立即失去動力的技術涉及研發、中央車輛法規與安全疑慮，超出地方權責與短期可行範圍；總評依地方可執行部分判斷。","sources":[]},
  // 依長者人數彈性增設社區關懷據點
  "tyc1-10-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"社區關懷據點設置與補助屬市府社會局權責，依長者人數調整設置數量是行政規劃。未說明新增據點數與服務項目，經費無法估算；主要挑戰是找到承辦單位與場地，四年內可逐步推動。","sources":[]},
  // 建立公車脫班陳情的完整追蹤流程並掌握裁罰與改善機制
  "tyc1-11-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公車陳情追蹤與業者裁罰屬市府交通局權責，議員可透過質詢監督。主要是行政流程與考核機制調整，經費小，短期可建立。","sources":[]},
  // 推動果菜市場遷建
  "tyc1-12-p0": {"track":"long","level":"unclear","authority":"medium","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"未說明","horizon":"無法估計","reason":"果菜市場遷建屬多年期大型設施，須市府取得新址、與市場經營單位協調。政見未說明遷建地點、規模、經費與期程，無法判斷成熟度與可行性。","sources":[]},
  // 打通國際路與南平路，推動國道一號甲線東段
  "tyc1-12-p1": {"track":"long","level":"unclear","authority":"low","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"國道一號甲線已核定路段為台61線至國道一號；所稱東段本次未查得正式計畫資料","horizon":"無法估計","reason":"國道一號甲線屬國道系統，由交通部高速公路局主辦；已核定的計畫範圍是台61線至國道一號，全長約11公里、建設期程至118年3月，這是現況，非政見內容。所稱東段本次未查得規劃或核定資料，成熟度、財務與期程都無法判斷。打通國際路與南平路屬市府權責，但沒有說明路段、用地與經費。","sources":["https://www.freeway.gov.tw/Publish.aspx?cnid=3736"]},
  // 推動桃園監獄遷移並重新規劃土地使用
  "tyc1-12-p2": {"level":"low","authority":"low","cost":"unclear","timeline":"low","reason":"監獄屬法務部矯正署管轄，遷移須中央覓得新址、編列預算並興建，市府只能協調；土地重新規劃須待遷移後才能進行。未查得中央遷建計畫，地方可做的部分無法推進核心目標，一任內難見成效。","sources":[]},
  // 爭取行政中心續留中路地區
  "tyc1-12-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"標題僅寫爭取行政中心續留中路地區，未說明是哪一個行政機關、目前是否有遷移計畫，也沒有說明替代方案或期程。行政中心選址屬市府決策，議員可質詢、爭取，但資訊不足以判斷經費與可行性。","sources":[]},
  // 推動設立市立大學
  "tyc1-12-p4": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"設立市立大學須依大學法報教育部核准，並需校地、經費與師資規劃。未說明新設或改制、規模與財源，無法判斷可行性。","sources":[]},
  // 加速污水下水道建設
  "tyc1-12-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有標題，未說明區域、目標接管率或期程。污水下水道建設為市府持續推動事項，接管率已提升至 115 年 8 月的 29.05%，但無具體內容無法判斷。","sources":["https://www.cdns.com.tw/articles/1481239"]},
  // 在車站、市場、醫院及學校周邊建置連續遮雨設施
  "tyc1-12-p6": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"在公共設施周邊設置遮雨設施屬市府權責，但常涉及騎樓、私人建物與人行道寬度，需逐點協調。未說明範圍與經費，四年內可完成部分示範路段。","sources":[]},
  // 改善巷弄照明，消除暗巷
  "tyc1-12-p7": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"增設或改善巷弄路燈屬區公所與市府工務單位常態業務，議員可透過建議與預算審議推動。單盞路燈經費有限，屬常態維護預算可負擔範圍，一任內可見成效。","sources":[]},
  // 建立高齡安全防護網並擴大敬老卡使用範圍
  "tyc1-12-p8": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"敬老卡擴大使用範圍屬市府社政權限，但「高齡安全防護網」沒有具體內容，擴大範圍也未說明新增哪些項目或點數，經費與期程都無從估算。","sources":[]},
  // 設立閩南事務處與新住民事務局
  "tyc1-12-p9": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"增設一級機關須修正市府組織自治條例並經議會通過；地方行政機關組織準則規定，人口 200 萬人以上的直轄市，一級單位與一級機關合計不得超過 32 個，若已接近上限，就得裁併其他局處才騰得出名額。兩個新機關的編制與業務範圍沒有說明，經費無法估算；修法與籌設可在一任內完成，但阻力不小。","sources":["https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=A0040004"]},
  // 每個里配置幹事與活動場所
  "tyc1-12-p10": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"里幹事員額與里活動場所由市府編制與提供，需市府採納。說明空白，未交代現有缺口、幹事是否專任，以及活動場所以新建、租借或共用方式取得，無法估算經費與期程。","sources":[]},
  // 南門市場改建
  "tyc1-12-p11": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"公有零售市場改建屬市府經發局權責。政見未說明改建範圍（局部或整體）、經費與期程，無法判斷可行性。","sources":[]},
  // 推動防災社區、培訓防災士並推廣每戶一個防災包
  "tyc1-12-p12": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"防災社區、防災士培訓屬市府消防局既有業務，可擴大辦理；防災包以推廣為主時成本小。若改為全面發放，經費會大幅增加，但政見未寫發放，四年內可推動。","sources":[]},
  // 建置 AI 智慧市政服務系統，一站查詢補助與申辦資源
  "tyc1-12-p13": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"整合補助與申辦資訊的查詢平台屬市府資訊、研考單位的權責，技術上已有成熟做法。政見沒有說明功能範圍與介接系統數量，規模未說明，經費無法估算；以查詢平台而言，一任內可以上線。","sources":[]},
  // 成立特定工廠轉型合法化跨局處聯合審查小組
  "tyc1-12-p14": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府可以依工廠管理輔導法成立跨局處聯合審查小組、巡迴輔導並提供計畫書範本，屬行政組織與流程的調整，成本低，一任內可以運作。清單載全市 530 家特定工廠截至 2026 年 5 月轉型核准率為零，本次未查得官方統計，該數字所指的是哪一階段的核准也不明確。","sources":[]},
  // 推動製造業 AI 轉型三年計畫
  "tyc1-12-p15": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"產業輔導屬市府經發局權責，也能銜接經濟部的相關計畫。政見沒有說明輔導企業數、補助額度，示範專區是否涉及實體建置也不清楚，規模未說明，經費無法估算；三年計畫在一任內可以執行完畢。","sources":[]},
  // 利用公有空間、社宅與少子化學校餘裕空間設置青銀共融中心
  "tyc1-12-p16": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"利用公有空間、社宅與學校餘裕空間設置托育與照顧設施，屬市府社政與教育單位可整合的業務，公共托育與日照中心也有中央補助可以申請。政見沒有說明設置數量與改建範圍，規模未說明，經費無法估算；以分批設立來看，一任內可以看到成果。","sources":[]},
  // 儘速打通南山街，作為地下道施工期間替代道路
  "tyc1-12-p17": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"道路開闢屬市府工務權限，需市府採納。說明空白，未提打通路段長度、用地取得狀況與經費，無法判斷能否趕在地下道施工期間完成。","sources":[]},
  // 後站建國路與桃鶯路口市有地興建多功能複合式公共場館
  "tyc1-14-p0": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"議會質詢提出，體育局回應將研議","horizon":"約 6–10 年","reason":"利用市有交通用地興建結合活動中心、國民運動中心、親子館與停車場的複合場館，屬市府權責，國民運動中心並有中央補助管道。目前僅有構想，未說明量體、經費與財源，需跨局處整合、用地變更與設計，非一任內可完工。","sources":[]},
  // 擴大推動流浪動物「認養小站」，建立社區型動保網絡
  "tyc1-14-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"動物保護屬市府權責，以里長、社區與志工設置認養小站並由市府提供認證、輔導，屬既有業務擴充。站點數與補助未說明，經費無法估算，但單點成本低，可逐步推廣，短期即可見效。","sources":[]},
  // 設置校園食安專責人員並落實吹哨者檢舉獎金
  "tyc1-15-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"校園食安稽查屬市府衛生局與教育局權責，食安檢舉獎金已有法規依據。一個月內提出人力與經費評估屬行政作業，可行；實際設置專責人員的人數與配置方式未說明，經費無法估算。","sources":[]},
  // 學校午餐國產可溯源食材比例不低於 98.98%，擴大有機蔬菜供餐並公開食材資訊
  "tyc1-15-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"學校午餐食材規範由地方政府決定，中央的國產可溯源食材指南僅具指導性質。市府已實施國中小免費營養午餐，每週三天有機蔬菜、一天產銷履歷蔬菜，具既有基礎；但現行國產可溯源比例未見公開資料，達 98.98% 及擴大有機供餐需面對國產食材成本與供應量限制，原中央獎勵金也改由地方編列。公開食材資訊成本低。","sources":["https://www.chinatimes.com/realtimenews/20261030001790-260421","https://www.setn.com/news/1916529","https://news.ltn.com.tw/news/life/breakingnews/5552916","https://sdgs.tycg.gov.tw/News_Content.aspx?n=17888&s=1261415"]},
  // 改善建德國小門口接送動線，延平路增設人行道與照明
  "tyc1-15-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"人行道、照明與臨停接送彎屬市府工務、交通局權責，為單一路段改善，經費小，一任內可完成。","sources":[]},
  // 強化特殊需求幼兒入園支持，增加巡迴特教人力並評估特教交通車
  "tyc1-15-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"增加巡迴特教人力與評估特教交通車屬市府教育局權責；增聘人數未說明，經費無法估算，特教師資供給是實際瓶頸。幼兒園師生比法定標準屬中央，但地方可透過公幼及準公共幼兒園的締約與督導推動；現行準公共要點已要求相關班級至遲 115 學年度達每位教保員照顧 12 名幼兒。","sources":["https://edu.law.moe.gov.tw/LawContent.aspx?id=GL001795"]},
  // 推動騎樓整平、人行道淨空與路口無障礙改善
  "tyc1-16-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"unclear","reason":"人行道與路口無障礙改善屬市府工務權責；騎樓整平牽涉私有地，需要所有權人配合，可能是推動上的阻力。政見沒有指明路段與規模，經費與期程都無法估算。","sources":[]},
  // 檢討孕婦乘車服務的付款與派單機制
  "tyc1-17-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"孕婦乘車服務由市府辦理，檢視付款與派單機制屬行政改善，可調整補助券結算方式提高接單意願，經費小，一任內可完成。","sources":[]},
  // 盤點匹克球場地並建立公開場地地圖
  "tyc1-17-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"盤點場地並公開地圖屬體育局的行政作業，幾乎不需經費，一個月內完成盤點是合理的要求。評估既有場地改造是後續工作，可以分年進行。","sources":[]},
  // 要求提出補足清潔隊人力的明確期程
  "tyc1-17-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"清潔隊員額與招募屬市府環保局權責，要求市府提出補足人力的明確期程是質詢監督，提出期程本身只需行政作業，成本低。清單所載的人力差距約 280 人是質詢時的估算，實際補足多少人、需要多少人事費，要看市府提出的方案。","sources":[]},
  // 加強對家庭照顧者的支持
  "tyc1-18-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有方向性主張，說明表示未公布具體措施，無法判斷權責、經費與期程。","sources":[]},
  // 定期公開問政內容並公開競選資金
  "tyc1-18-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"公開自己的問政紀錄與競選資金，議員自己就能做到，幾乎不需經費，可立即執行。","sources":[]},
  // 評估捷運路網由迴龍延伸至機場捷運 A7 站
  "tyc2-1-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"評估捷運由迴龍延伸至 A7 站涉及新北、桃園兩市及中央協調，可行性研究經費小。跨縣市路網需雙方共識，評估本身在一任內可完成，但協調是主要變數。","sources":[]},
  // 推動國道一號甲線相關路網延伸
  "tyc2-1-p1": {"track":"long","level":"low","authority":"low","maturity":"low","financing":"low","schedule":"unclear","stage":"僅有構想","horizon":"約 15 年以上","reason":"國道路網屬交通部高速公路局權責，市府與議員僅能爭取。延伸路線僅有構想，未見可行性研究或核定計畫；國道 1 號甲線本線目前仍在施工中，延伸案須另經研究、核定與財務規劃。","sources":["https://www.freeway.gov.tw/Publish.aspx?cnid=93&p=44109"]},
  // 打通華亞科技三路銜接縱貫一路並規劃輔助道路
  "tyc2-1-p2": {"track":"long","level":"unclear","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"構想階段，路線、用地與經費待評估","horizon":"尚無規劃資料，無法估計","reason":"新闢市區道路屬市府權責。清單所述 2.5 公里、40 公尺寬，毛面積約 10 公頃，實際須取得的用地要扣除既有道路等公有地；政見也說明路線、用地與經費仍待評估。目前只有構想，財務與期程都無法判斷。","sources":[]},
  // 推動龜山智慧科學園區規劃
  "tyc2-1-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"直轄市可依產業創新條例規劃產業園區，屬市府權責。政見是推動規劃、整合既有產業園區資源並檢視周邊交通與公共設施，未承諾新設園區或實體開發；規劃規模未說明，經費無法估算，規劃工作四年內可完成。","sources":[]},
  // A7 產業專用區住宅污水幹管延管費用由市府負擔
  "tyc2-2-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"污水用戶接管費用由市府負擔屬地方政策選擇，可透過預算與補助辦法處理。未說明戶數與金額，經費無法估算；接管工程期程取決於幹管完成時程，過渡期抽水肥協助可短期實施。","sources":[]},
  // 評估公共設施保留地轉作公園
  "tyc2-2-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"內容是要求評估公設保留地轉作公園及建立公園建設 SOP，屬都發、工務單位可做的研究與行政程序，經費以委託評估為主，金額小。評估與 SOP 一任內可完成；後續若真要變更使用並開闢，則需另走都市計畫程序。","sources":[]},
  // 迴龍消防分隊配合捷運與都市發展整體規劃
  "tyc2-2-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"消防分隊與圖書館等屬市府權責。政見主張提前整體規劃，現況市府規劃 116 至 118 年度約 4,000 萬元耐震補強（現況，非政見內容）。規劃與跨設施整合可在一任內完成；後續工程方式與經費未定，無法估算。","sources":[]},
  // 加速完成學童通學廊道
  "tyc2-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"通學廊道改善由市府推動中，已於 115 年 9 月完成 100 校，預計年底達 120 校、116 年朝 140 校推進，加速完成剩餘學校在一任內可行。","sources":["https://www.businesstoday.com.tw/article/category/183027/post/202610210027/"]},
  // 提高人行道普及率
  "tyc2-3-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"人行道建置、路口設計與速限調整屬市府交通局與工務局權責。未說明目標普及率、路段或經費，規模無法估算；既有道路寬度不足、騎樓占用與停車空間重分配常引起地方反彈，四年內只能逐段改善。","sources":[]},
  // 研議龜山舊城區都市更新與老城再生方案
  "tyc2-4-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"研議都市更新與 TOD 方案屬市府都發局權責，主要是委託規劃與研究，經費不高，方案研擬一任內可以完成。後續若要變更都市計畫並推動都更，須經市府與內政部審議、整合私有地主，那是方案提出後的工作，不是本則的完成門檻。","sources":[]},
  // 優先補足龜山區清潔隊員額
  "tyc2-4-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"清潔隊員額分配屬市府環保局權責，調整分配標準屬行政作業，一任內可完成。若須新增聘用，缺額人數未說明，人事經費無法估算。","sources":[]},
  // 將龜山山區納入非法棄置智慧圍籬布建
  "tyc2-4-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"智慧圍籬布建點位由市府環保局規劃，依熱點與陳情案件重新評估納入龜山山區屬行政調整，單處設置經費有限，一任內可完成。","sources":[]},
  // 強化深夜噪音車科技執法
  "tyc2-4-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"現況已實施噪音車聯合稽查，一年內再犯可移請監理機關吊扣牌照；中央裁罰規定 2026 年 7 月修正後，罰鍰已考量夜間違規與一年內累積違規次數。政見增量在設備位置、辨識準確度與深夜熱區固定式設備，屬環保局權責；設備數量未說明，經費無法估算，四年內可落實。","sources":["https://www.noise.tydep.gov.tw/Traffic.aspx?gid=10","https://www.chinatimes.com/realtimenews/20260706002371-260405"]},
  // 加速取得用地、完整開闢樂善與長樂公園綠廊
  "tyc2-4-p4": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"公園用地僅剩 288 平方公尺未取得，市府已編列 6,000 餘萬元協議價購，經費已到位。但用地取得已拖延一年，若協議不成須另循徵收程序，完成取得與開闢的時間無法確定，四年內有機會完成。","sources":[]},
  // 推動捷運棕線加速興建與路網銜接
  "tyc2-6-p0": {"track":"long","level":"high","authority":"medium","maturity":"high","financing":"high","schedule":"medium","stage":"綜合規劃 2024 年 3 月經行政院核定，先期工程 2026 年 6 月開工","horizon":"官方預估 2032 年 3 月通車，距今約 5 年餘","reason":"捷運棕線綜合規劃 2024 年 3 月經行政院核定，財務計畫隨核定確立。捷運局預估 2032 年 3 月通車，先期工程 2026 年 6 月開工、截至 10 月進度略超前。議員可督促進度與轉乘銜接，但「加速」空間受工程本身限制。","sources":["https://dorts.tycg.gov.tw/cp.aspx?n=23134","https://www.setn.com/news/1455312"]},
  // 爭取規劃捷運銀線服務華亞科技園區通勤
  "tyc2-6-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"爭取規劃捷運路線屬市府捷運工程局可辦理的規劃研究，議員可透過質詢與預算推動。規劃費用未說明，經費無法估算，但研究工作本身不涉用地與工程。政見是爭取規劃，四年內可完成規劃研究；後續能否獲中央核定不屬本政見承諾範圍。","sources":[]},
  // 加強公共自行車人車共道規範宣導，並在 APP 與車體加註多語系警語
  "tyc2-9-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"宣導與在 APP、車體加註多語警語，屬市府交通局可以要求營運商配合的事項，成本低，短期內就能完成。","sources":[]},
  // 每年新增 150 站以上公共自行車站點
  "tyc3-2-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公共自行車擴站屬交通局權責。以清單所載現有 685 站計算，每年新增 150 站、四年約 600 站，每年新增量約為現有站數的兩成；設站之外，車輛採購與營運補貼也會跟著增加，沒有說明財源。每年都要找到足夠站址並編足經費，持續達標有一定難度。","sources":[]},
  // 配合捷運綠線通車建立完整自行車路網
  "tyc3-2-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"自行車道路網屬市府交通、工務單位權責。政見沒有說明路網範圍、長度與路線，經費與期程都無從判斷。","sources":[]},
  // 加速規劃八德行政園區
  "tyc3-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"行政園區規劃屬市府權責，需求評估已辦理、可行性評估進行中。加速規劃本身經費小，四年內可完成規劃設計並編列興建預算；實際興建經費與完工時程則超出本政見範圍。","sources":[]},
  // 推動八德、大湳兩都市計畫區縫合
  "tyc3-3-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"low","reason":"都市計畫擬定與通盤檢討由市府辦理，但須經內政部都市計畫委員會審議核定，並須配合國土計畫。兩都市計畫區合併屬大規模檢討，依往例需多年審議，一任內難以完成，但屬可推動的程序性工作。","sources":[]},
  // 擴大敬老愛心卡使用範圍
  "tyc3-3-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"敬老愛心卡使用範圍由市府自行訂定。市府已公告 2027 年 1 月起新增醫療、肌力課程、農會消費等用途，但未包含特約藥局及代購，這兩項仍待研議。擴大範圍會提高使用率，增加部分支出。","sources":["https://sab.tycg.gov.tw/News_Content.aspx?Create=1&n=7372&s=1875084"]},
  // 建置市府自有 AI 算力與平台
  "tyc3-3-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"建置自有算力與平台屬市府資訊治理權責。算力規模、硬體與機房配置、應用範圍均未說明，無法估算經費與期程。","sources":[]},
  // 增設公共自行車站點並提高電動輔助車比例
  "tyc3-6-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"公共自行車設站與車種配置屬市府交通局與營運商契約範圍，一任內可推動。新增站數與電輔車目標比例未說明，規模未說明，經費無法估算。","sources":[]},
  // 評估成立市級食品安全實驗室
  "tyc3-7-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"內容為評估成立市級食安實驗室並增加抽驗與專業人力，屬市府衛生局權責，議員可透過質詢與預算審議推動。評估工作本身成本低；增加的抽驗量與人力數未說明，經費無法估算。四年內可完成評估並增加抽驗量。","sources":[]},
  // 追蹤福德一路 177 巷拓寬工程
  "tyc3-8-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"道路拓寬由市府辦理，議員角色為追蹤進度。說明中市府已預估明年完成用地取得、後年底完工，在一任內可完成。","sources":[]},
  // 要求八德第二交流道提出短期替代方案
  "tyc3-8-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求市府提出時程與短期疏解方案、檢核交通量預測，屬議員質詢監督範圍，市府可透過號誌、路型調整等短期措施回應，經費小，一任內可完成。","sources":[]},
  // 追蹤捷運三鶯線延伸八德及綠線延伸工程
  "tyc3-8-p2": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"追問捷運延伸線的轉乘規劃、聯合開發分工、審議進度與決標時程，屬議員質詢監督的職權，不需額外經費，可以持續進行。","sources":[]},
  // 調整桃小巴路線串聯公所與醫療院所
  "tyc4-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"桃小巴路線與班次由市府交通局規劃，調整路線屬常態業務，經費增加有限，一任內可完成。","sources":[]},
  // 檢視南崁地區道路開闢與路網銜接
  "tyc4-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"道路開闢檢討屬市府工務與都發局權責，議員可透過質詢要求檢討。訴求以檢視與規劃為主，經費小；實際開闢則視後續計畫。","sources":[]},
  // 加強校園微型電動二輪車安全宣導
  "tyc4-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"校園交通安全宣導屬交通、警察、教育單位常態業務，經費小，可立即推動。","sources":[]},
  // 爭取在蘆竹設立公立技術型高中
  "tyc4-2-p0": {"track":"long","level":"unclear","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"僅有構想，未查得市府設校計畫","horizon":"無法估計","reason":"設立市立高中職屬市府權責，須取得校地、規劃科別與師資，屬多年期實體建設。政見未說明校地、設立方式（新設或分校）與經費，財源與期程均無法判斷。","sources":[]},
  // 尖峰時段增設點對點桃小巴或中型巴士
  "tyc4-2-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"增設公車與桃小巴路線屬市府交通局權限，需市府採納。桃小巴採九人座車輛，駕駛只需小客車職業駕照，人力門檻較大型公車低。增設路線數與班次未說明，營運補貼經費無法估算。","sources":["https://news.tycg.gov.tw/News_Content.aspx?n=5016&s=1331953&sms=7885"]},
  // 評估公共設施共構停車空間
  "tyc4-2-p2": {"level":"high","authority":"medium","cost":"high","timeline":"medium","reason":"評估公共設施共構停車屬市府權限，評估本身成本低；後續共構需配合新建公共設施期程。已有既有設施地下停車場先例。","sources":[]},
  // 推動安心通學路網
  "tyc4-2-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"通學步道、路口改善與號誌調整屬市府交通、工務與教育局權責，多為既有計畫可延續的工程項目，可分校逐步推動，一任內可看到成效。","sources":[]},
  // 設立家長諮詢與申訴平台
  "tyc4-2-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"諮詢與申訴平台可由教育局整合既有專線、網站與輔導資源設置，成本以系統與專責人力為主，經費小，一兩年內可上線。","sources":[]},
  // 五福重劃區規劃 0 至 6 歲整合托育園區
  "tyc4-3-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"政見是有條件的規劃：重劃區國小用地經評估無設校需求，才改作托育園區。用地改作托育設施屬地方權責，需教育局完成設校需求評估，並依都市計畫變更或公共設施多目標使用辦理；新建或改建、樓地板規模未說明，經費無法估算。用地程序是主要變數，四年內可完成評估與規劃。","sources":[]},
  // 五福重劃區納入藝文展演設施
  "tyc4-3-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"要求教育局、文化局跨局處將藝文展演設施納入重劃區整體規劃，需市府採納；納入規劃屬行政作業，一任內可完成。設施規模、用地與後續興建經費未說明，經費無法估算，興建時程亦不在說明範圍內。","sources":[]},
  // 提前規劃宏竹里生活圈公共設施
  "tyc4-3-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"公園、人行道與停車空間的盤點與規劃屬市府權責。建議活化的軍方閒置土地須國防部同意撥用或合作，這部分屬中央權限，是跨層級協調的障礙。設施規模未說明，經費無法估算。","sources":[]},
  // 串聯濱海觀光廊道與桃林鐵路綠廊
  "tyc4-3-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"濱海觀光廊道與綠廊串聯屬市府權責，可分段推動。掩埋場轉型須待封場與穩定化評估，漁港清淤與觀景平台也需辦理工程與相關許可；政見未說明規模與經費，四年內可完成部分節點。","sources":[]},
  // 蘆竹新行政園區設計納入地方參與並增加綠地
  "tyc4-4-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"園區設計納入地方參與屬市府執行層面，市府已表示決標後將廣納在地意見並召開說明會，議員可透過質詢與預算審議持續監督。增加綠地是否涉及設計變更、容積配置或工程經費調整，仍須確認，經費影響無法估算。","sources":[]},
  // 增設跳站快速公車路線
  "tyc4-4-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"新闢或調整公車路線屬市府交通局權責，透過路線規劃與營運補貼即可推動，各縣市已有快速公車先例。路線、班距與車輛數未說明，規模未說明，經費無法估算。","sources":[]},
  // 增加蘆竹區小型公車路線，納入通勤與醫療接駁
  "tyc4-4-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"小型公車路線規劃與補貼屬市府交通局權責。新增路線數與班次未說明，經費無法估算；市府已表示重新評估並公告釋出路線，四年內可增加路線。","sources":[]},
  // 爭取恢復蘆竹往臺北國道客運班次並增設往新竹直達路線
  "tyc4-4-p3": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"國道客運路線與班次屬中央公路主管機關核准、業者經營，市府只能協調；說明中已協調尖峰增開 2 班。全面恢復與新增往新竹直達線受駕駛人力與業者營運考量限制。","sources":[]},
  // 在蘆竹區兒一公園旁增設營盤市民活動中心
  "tyc4-4-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市民活動中心屬市府民政局權責，且市府已表示優先推動。可比案例為蘆竹區兩座活動中心合計工程費約 6,263 萬元、預計約 16 個月完工，粗估單座數千萬元，占總歲出比例很小。用地與設計進度未說明，若用地無礙，一任內可完成。","sources":["https://www.chinatimes.com/realtimenews/20260323002290-264210"]},
  // 擴建幼兒托育機構與社區長照據點
  "tyc4-5-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"托育機構與長照據點的擴建屬市府社政權責，也有中央補助可以申請。但政見沒有說明數量、地點與期程，無從判斷規模與可行性。","sources":[]},
  // 加速區域聯外道路建設、優化大眾運輸路網
  "tyc4-5-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"聯外道路、大眾運輸與公設均屬市府權責，但未指明路段、路線或設施，無法估算經費與期程。","sources":[]},
  // 將公車到站準確率納入業者營運績效指標
  "tyc4-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公車營運評鑑與補貼指標由市府交通局訂定，將到站準確率納入只要修訂評鑑項目，現有動態系統就有資料可用，幾乎不需新增經費。","sources":[]},
  // 加速大園客運園區外圍道路拓寬，改善環區北路瓶頸
  "tyc5-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"道路拓寬屬市府權責，環區北路瓶頸位置明確。未說明拓寬長度與用地狀況，經費無法估算；若需取得私有地，徵收程序可能拉長期程，四年內有機會完成。","sources":[]},
  // 加速大園多項通勤道路瓶頸改善與新橋興建
  "tyc5-1-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"unclear","reason":"多項道路拓寬、瓶頸改善與新橋都是市府既有工程，政見要求的是追蹤並加速進度，屬質詢監督與市府執行。各案目前的階段、經費與預定完工時間都沒有說明，無法判斷一任內能推進多少；拓寬與電纜地下化可能涉及用地取得與管線遷移，能加速的幅度取決於各案條件。","sources":[]},
  // 航空城重建戶搬遷期限延後一年，並補齊安置住宅生活機能
  "tyc5-1-p2": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"搬遷期限涉及市府與交通部民航局共同執行的航空城計畫，需中央同意，屬跨層級協調。安置區生活機能配套多屬市府權責，部分設施興建需時。","sources":[]},
  // 大園客運園區規劃立體停車場並整體檢討停車配置
  "tyc5-2-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"立體停車場與停車配置屬市府交通局權責。政見為提前規劃與整體檢討，需求調查、選址與方案規劃一任內可完成；停車場規模未說明，後續工程經費無法估算。","sources":[]},
  // 優先改善客運園區人口密集區與學校周邊人行道及公園
  "tyc5-2-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"人行道與公園維護屬市府工務局權責，電力設施遷移需與台電協調。經費小，一任內可完成。","sources":[]},
  // 串聯機場門戶與在地景點規劃半日遊、一日遊行程
  "tyc5-2-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"規劃套裝行程與夜間經濟活動屬市府觀旅局的業務，主要支出是行銷與接駁，規模小；串聯既有景點，一任內就能推出。","sources":[]},
  // 提出大漢溪沿線跨河橋與兩側道路的整體銜接計畫
  "tyc6-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"medium","reason":"要求市府提出整體交通網絡與銜接計畫，並檢討機車道、待轉區、號誌配置，屬質詢監督範圍。規劃與號誌調整經費小，一任內可完成；若後續新建道路則另需經費與用地。","sources":[]},
  // 捷運綠線延伸大溪河東地區時納入站體、停車與分流需求
  "tyc6-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"綠線延伸大溪還在規劃與審議階段，要求在規劃中納入站體、停車與分流需求，屬議員監督與市府捷運工程局可以採納的意見，現在提出不需要額外經費。","sources":[]},
  // 雙色溫路燈優先擴及通學廊道、易肇事路口及醫院周邊
  "tyc6-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"路燈更換屬市府工務局權責，雙色溫路燈為既有推動項目，調整優先順序即可。經費小，一任內可完成。","sources":[]},
  // 大溪醫院分院定位為急重症醫療及聯合門診中心
  "tyc6-1-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"醫院分院功能定位需市府與經營醫院協調，急重症醫療還需達到醫院評鑑與急救責任醫院標準。最大障礙在急重症醫師與護理人力招募，偏遠地區尤其困難；分院即將開工，四年內可完成建物，但急重症能量需更長時間建立。","sources":[]},
  // 農機補助納入吹葉機、堆高機及栽培機具
  "tyc6-1-p4": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"市府自辦的農業補助可以自行增列品項，只要修訂補助要點，並配合辦理培訓與查核。市府有機農業補助計畫的設備附表已列電動吹葉機與堆高機，現況已有部分對象可申請；政見要擴大到哪些對象與機型、單價與數量都沒有說明，新增經費無法估算。","sources":["https://ws.tycg.gov.tw/Download.ashx?n=5pyJ5qmf6L6y5qWt5o6o5buj6KOc5Yqp6KiI55WrLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvODUvcmVsZmlsZS8xMTA1Ny8xMjUyMTc4LzZiMTU1YWMzLWY5YWQtNDM1YS1hNTE3LWJiYTljMjUwMWNlOC5wZGY%3D"]},
  // 評估大溪第一公有市場重建並增設地下停車場
  "tyc6-1-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市場改建評估屬市府經發局權責，政見要求的是可行性評估，經費小，一任內可完成。報導指出市府已啟動活化與轉型評估，並提及受建築使用年限限制、拆除重建短期難以推動，這是評估須處理的條件。","sources":["https://news.ltn.com.tw/news/Taoyuan/breakingnews/5613002"]},
  // 推動豆渣轉作飼料的去化與示範模式
  "tyc6-4-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"媒合豆製品業者與養豬場屬農業局的輔導業務，經費小。豆渣作為飼料，須符合飼料與廢棄物再利用的相關規範，但已有業界做法可以參考，示範模式一任內可以建立。","sources":[]},
  // 大溪休閒農業區推動友善耕作與智慧農業，導入省工設備
  "tyc6-4-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"休閒農業區的示範輔導與省工設備補助屬農業局業務，也有中央農業部的相關補助可以申請。以單一農業區先行示範，規模小，一任內可見成效。","sources":[]},
  // 活化大漢溪河域與埔頂舊址，發展自行車道與運動休閒
  "tyc6-4-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"大漢溪為中央管河川，河岸使用需經河川管理機關許可，市府可申請設置自行車道與休閒設施，已有先例。未說明範圍與經費，埔頂舊址活化也需確認土地權屬，四年內可完成部分路段。","sources":[]},
  // 加速南桃園市立醫院或分院規劃，補足急重症醫療
  "tyc6-4-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"市府已規劃市立醫院八德總院（預計 123 年完工營運）與多處分院，其中大溪分院預計今年 11 月動工、醫院部分約 2 年後完工，復興分院仍在辦理環評與地質鑽探，這是現況，非政見內容。政見要求加速分院規劃以補足南桃園急重症醫療，屬監督與市府執行，一任內可以看到規劃推進；分院的急重症規模與經費未說明，無法估算。","sources":["https://news.cts.com.tw/cna/local/202610/202610283094810.html","https://news.ebc.net.tw/news/living/578621"]},
  // 營養午餐改採部分補助、部分自付
  "tyc7-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"午餐補助方式由市府自訂，改為部分自付可減少支出而非增加。主要爭議在政策取捨，執行上可在新學年度實施。","sources":[]},
  // 重新檢討中壢體育園區促參案的公益回饋設施
  "tyc7-1-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"中壢體育園區 BOT 案目前仍在招商，市府已辦理第二次補充公告，收件期限延至 115 年 12 月 31 日，尚未簽約，這是現況，非政見內容。招商規範由市府主辦機關決定，議員可以質詢要求調整公益回饋內容；但再修改招商條件須另行公告，可能影響廠商投資意願與招商時程。","sources":["https://tw.news.yahoo.com/%E4%B8%AD%E5%A3%A2%E9%AB%94%E8%82%B2%E5%9C%92%E5%8D%80bot%E6%A1%88%E5%BB%B6%E9%95%B7-%E6%8D%B7%E9%81%8B%E7%B6%A0%E7%B7%9A%E5%BB%B6%E4%BC%B8%E9%80%B2%E5%BA%A6%E7%B4%8D%E8%A6%8F%E7%AF%84-%E6%94%B6%E4%BB%B6%E8%87%B3%E5%B9%B4%E5%BA%95-094157299.html"]},
  // 中壢舊城再生整合跨局處，改善復興路人行環境並以商圈活動導入人流
  "tyc7-1-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"跨局處整合與商圈活動屬市府權限，可推動。復興路人行環境改善的範圍與經費未說明，無法估算；整體舊城再生成效需較長時間。","sources":[]},
  // 重新檢討環保公園開放機制，串聯新街溪步道斷點
  "tyc7-3-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"公園開放機制屬環保局管理權責，調整開放時段與管理方式成本低、容易推動。新街溪步道斷點串聯需與水務局協調，斷點數量、長度、用地及是否需設橋均未說明，經費無法估算，期程取決於用地與工程條件。","sources":[]},
  // 強化清潔隊資源回收分類稽核
  "tyc7-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"清潔隊作業稽核屬環保局內部管理事項，議員可透過質詢監督。強化稽核主要是作業流程與人力調度，成本低，短期內可落實。","sources":[]},
  // 國中小免費營養午餐延伸至寒暑假
  "tyc7-4-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"桃園已全面實施國中小免費營養午餐，115 學年度起一般地區每餐補助 71.3 元。延伸至寒暑假，以每 1 萬名學生、約 55 個平日計，需約 3,900 萬元（粗估），且未說明財源；寒暑假學校廚房停伙、學生不到校，供餐與領餐方式需另行設計，是主要執行障礙。","sources":["https://udn.com/news/story/6898/9500390"]},
  // 擴大敬老福利點數用途，可兌換牛奶、豆漿等營養物資及搭乘計程車
  "tyc7-4-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"敬老愛心卡每月 800 點，現行已可搭乘台鐵、公車與愛心計程車，計程車部分現況已實施；擴大至營養物資則需市府修訂使用範圍，市府已表示研議中。目前每月用逾 500 點者不到一成，擴大用途會提高點數使用率，需增加預算，但點數上限固定，總額可控。","sources":["https://news.pts.org.tw/article/807160"]},
  // 加速布建社區型照護據點並簡化弱勢補助申請
  "tyc7-5-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"社區照護據點與補助流程屬市府社會局、衛生局權責。簡化申請流程容易推動，但照服員短缺為全國性結構問題，地方難以單獨解決。","sources":[]},
  // 檢討科技執法設置地點並定期公開執法數據
  "tyc7-5-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"科技執法設置地點由市府交通局與警察局決定，檢討選址、加強告示與定期公開數據都屬行政作為，成本低，一任內即可落實。","sources":[]},
  // 推動市民卡 2.0，以單一數位身分整合多重福利
  "tyc7-6-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"需市府資訊與社政、教育單位採納，議員可透過質詢推動。整合學生、身障等身分資格涉及不同主管機關的資料串接與個資授權，系統建置規模未說明，無法估算經費；一任內完成部分身分整合可行，全面整合需較長時間。","sources":[]},
  // 社宅研議生育延長租期與育兒修繕補助
  "tyc7-6-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"社宅租期與修繕補助規定屬市府住宅出租辦法，可由市府自行修訂，研議制度在行政上可行。補助金額、適用戶數與延租條件未說明，規模未說明，經費無法估算。","sources":[]},
  // 市場改建研議攤商自願提前退場機制
  "tyc7-7-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"市場改建與攤商安置屬市府市場主管機關權責，研議自願提前退場機制是行政規劃，可以配合改建時程辦理。退場機制是否包含補償或獎勵、退場人數多少都未說明，經費無法估算。","sources":[]},
  // 身障停車優惠建立統一車號登錄並開放線上申辦
  "tyc7-7-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"身障停車優惠屬市府交通局與社會局行政措施，建立車號登錄與線上申辦主要是資訊系統調整，經費小，一任內可完成。","sources":[]},
  // 研議處理私人土地遭廢棄車占用
  "tyc7-7-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"現行桃園市廢棄車輛自治條例只適用於市府及所屬機關管理的公共區域，不含一般私人土地。處理私人土地廢棄車須另有法源，並兼顧地主與車主的權利，不能只靠地主同意；政見要求的是環保局研議，研議本身屬行政作業、成本低，四年內可完成，但能否形成可執行的制度仍待法制設計。","sources":["https://gazette.tycg.gov.tw/TYBulletin/Doc/11503.pdf?v=122619"]},
  // 串聯莒光公園與滯洪池打造景觀廊帶，並納入公益回饋空間
  "tyc7-11-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"公園與滯洪池景觀串聯屬市府工務、水務單位權責，景觀工程本身一任內可以完成。市民活動中心或集會場所等公益回饋空間須與周邊開發案協調，能否納入、何時完成取決於開發案進度；串聯範圍與設施規模都沒有說明，經費無法估算。","sources":[]},
  // 優先修繕龍興國中周邊人行道
  "tyc7-14-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"人行道修繕屬工務局常態養護業務，經費小。說明中已提及工務局答詢預計暑假進場施工，一任內可完成。","sources":[]},
  // 中壢體育園區規劃 50 公尺標準競賽游泳池與匹克球場
  "tyc7-14-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"建議在體育園區規劃中納入 50 公尺標準競賽游泳池與匹克球場，屬市府權限，需市府採納；納入規劃一任內可完成。場館規模與興建經費未說明，無法估算，實際興建不在說明範圍內。","sources":[]},
  // 建立公共設施瑕疵致傷的跨機關代位求償與追蹤機制
  "tyc7-16-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"國家賠償案件由市府各機關依國家賠償法處理，若瑕疵屬管線單位或其他機關的責任，可依法求償。建立跨機關的代位求償與追蹤流程屬行政程序的整合，成本低，一任內可以建立。","sources":[]},
  // 國中遷校新校區提出周邊施工規範、交通維持計畫與整地時程
  "tyc7-16-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求市府在師生進駐前提出施工規範、交通維持計畫與整地時程，屬質詢監督與行政規劃，主要成本是行政作業。國有地整理需要和國產署協調，但提出計畫本身沒有障礙。","sources":[]},
  // 人口稠密區放寬公共自行車站距並評估路側設站
  "tyc8-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公共自行車站點規劃屬市府交通局權責，放寬站距與路側設站為設站標準調整，經費小，一任內可完成。","sources":[]},
  // 補助公幼與國小課後照顧經費並增聘專職人力
  "tyc8-3-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"課後照顧補助與人力屬市府教育局權責，建請研議在行政上可行。補助額度、增聘人數與配置方式未說明，規模未說明，經費無法估算；增聘專職人力亦須招募時間與經常性人事預算。","sources":[]},
  // 市民卡 APP 整合停車資訊與公車動態
  "tyc8-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市民卡 APP 現況已有停車資訊、路邊停車費查繳及特約商店優惠，公車動態是否整合未見說明。系統整合與特約商店推廣屬市府權責，增量是補上公車動態與強化店家推廣，開發成本小，四年內可完成。","sources":["https://apps.apple.com/tw/app/桃園市市民卡/id956114150"]},
  // 代課教師鐘點費提高至每堂 432 元並研議年資留才獎勵
  "tyc8-4-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"教育部已將國小代課鐘點費由 336 元調至 405 元、國中調至 455 元，地方可用自有財源再加給，需市府採納編列預算。每堂提高約 28 元，總額取決於全市代課節數，政見未說明，經費無法估算，但單價調幅小，下一學年即可實施；年資獎勵則需另訂辦法。","sources":["https://news.pts.org.tw/article/790066"]},
  // 由專責辦公室統一受理與審理教師申訴
  "tyc8-4-p1": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"教師申訴的程序與評議機制依教師法及中央訂定的評議準則辦理，市府可調整受理流程與人力，但不能自行改變法定的申訴評議架構，需在法規框架內整合。行政成本低，一任內可完成組織調整。","sources":[]},
  // 加速開闢龍南路銜接宵裡大池道路
  "tyc8-4-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"市區道路開闢屬市府工務權責。路段長度、用地取得與經費未說明，無法估算；若需徵收私有地，期程會拉長，四年內能否通車視用地狀況而定。","sources":[]},
  // 以促參方式改造忠貞市場並納入托嬰與日照空間
  "tyc8-4-p3": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"medium","schedule":"unclear","stage":"議會質詢建議，尚無規劃","horizon":"約 8–12 年","reason":"整合市場、停車場與機關用地以促參改建，屬市府權責，並已指明以 BOT 或促參引進民間資金，可減輕市府負擔。但目前僅有構想，需整合多筆用地、辦理可行性評估與招商，並安置既有攤商與居民，期程難以在一任內完成。","sources":[]},
  // 各局處政策整合至市府 APP 供一站式查詢
  "tyc8-4-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府 APP 整合各局處政策資訊屬市府資訊與新聞業務，屬既有系統功能擴充，經費小，一年內可上線。打擊網路不實廣告則多屬中央與檢警權責，市府僅能通報與宣導。","sources":[]},
  // 平鎮義興重劃區採聯合開發以紓解老舊社區停車
  "tyc8-4-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"重劃區土地處分與聯合開發屬市府地政權責。聯合開發需招商、地主協議與都市計畫配合，期程較長；政見未說明開發方式與停車位數，經費無法估算。","sources":[]},
  // 重劃區污水處理責任不轉嫁購屋住戶
  "tyc8-4-p6": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"要求市府在重劃區開發與產權登記上把關，屬市府地政與水務權責，市府不需直接出資。但能否要求開發商負擔已估約 3 億元的接管與營運費用，取決於既有開發契約與法規依據，追償可能涉訟，執行效果有不確定性。","sources":[]},
  // 設置公托進校園示範點
  "tyc8-5-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"校園閒置空間改設公托屬市府社會局與教育局權責。政見訂有 116 年完成盤點並設置示範點的期程，但盤點是目標，尚未確認可用空間的樓層、消防與用途條件及收托規模，裝修經費無法估算；單一示範點規模小，四年內有機會完成。","sources":[]},
  // 0 至 6 歲兒童門急診掛號費與部分負擔補助擴及一般家庭
  "tyc8-5-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"地方政府可用自籌財源補助就醫掛號費與部分負擔。市府說明目前各區衛生所已免收掛號費、未滿 3 歲兒童免收部分負擔，這是現況，非政見內容，新增支出應扣除既有措施。擴及一般家庭並對多胎加碼屬常年性支出，會隨就醫次數累積，政見沒有說明補助額度與財源，經費無法估算；補助辦法一任內可上路，長期財政負擔是主要考驗。","sources":["https://wc-phc.tycg.gov.tw/News_Content.aspx?n=22094&s=1609697"]},
  // 研議學生通勤費用補助
  "tyc8-5-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"學生通勤補助屬市府自治事項，研議與既有通勤票整合在行政上可行。補助對象資格、人數與補助月份未說明，規模未說明，經費無法估算；若普及至全體學生，將形成每年經常性支出，財源未說明。","sources":[]},
  // 路口導入 AI 視覺辨識與感應式延長綠燈號誌
  "tyc8-5-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"號誌控制屬市府交通局權責，可先從學校、醫院、車站周邊評估導入。偵測行人與車流調整號誌的技術已有市售產品；政見沒有說明路口數量與設備規格，規模未說明，經費無法估算。以分批評估、建置來看，一任內可以看到成果。","sources":[]},
  // 優先評估捷運自機場捷運環北站往平鎮、龍潭延伸
  "tyc8-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"medium","reason":"屬爭取「評估」的一般政見，可行性研究由市府委託辦理，研究經費遠小於捷運建設本身，相對市府年度歲出有限。一任內可完成評估；後續建設仍需交通部審議與中央補助，不在此政見範圍。","sources":[]},
  // 醫美診所偷拍疑慮啟動跨局處專案稽查
  "tyc8-6-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"衛生局依醫療法可稽查診所，警察、消防、法務局可配合聯合稽查與申訴協助，屬市府既有職權。以既有人力執行，經費小，短期內即可啟動。","sources":[]},
  // 推動免費法律諮詢與服務機制
  "tyc8-7-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"免費法律諮詢可由市府委託律師駐點辦理，也可由議員服務處自行提供，執行門檻低。服務規模未說明，經費無法估算，但單次諮詢成本低，短期即可實施。","sources":[]},
  // 長者社福點數由 800 點提高至 1,200 至 1,500 點，可用於運動服務
  "tyc9-2-p0": {"level":"medium","authority":"medium","cost":"low","timeline":"high","reason":"點數由市府自訂。報導指敬老愛心卡發出約 47 萬張（含愛心卡）；粗估每人每月增 400–700 點、全數使用，每年約 22.6–39.5 億元，約占總歲出 1.2–2.1％，為上限估計，實際依使用率而定，財源未說明。開放運動服務屬用途調整，可由市府自訂。","sources":["https://news.pts.org.tw/article/807160"]},
  // 與在地健身場館合作開設免費入門教練課程
  "tyc9-2-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"市府體育單位可以採購或補助民間健身場館開課，屬行政可以辦理的事項，下一年度就能編列試辦。政見沒有說明開課頻率、名額與合作場館數，規模未說明，經費無法估算。","sources":[]},
  // 更新老舊公園設施、改善無障礙動線並增設寵物友善專區
  "tyc9-2-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"公園設施更新、無障礙改善及寵物友善區屬市府常態公園維護業務，需市府採納，一任內可見成效。涉及幾座公園與改善規模未說明，經費無法估算。","sources":[]},
  // 檢視改善省道、國道銜接路段標線，提升夜間行車安全
  "tyc9-2-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"依《公路法》，國道由中央管理，省道經直轄市路段由中央與市府協商管理，銜接的市區道路標線則屬市府權責，市府可自行改善並與中央協調。標線改善經費小，一任內可完成；商圈停車研議也屬市府權責。","sources":["https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040001"]},
  // 加速老舊校舍整建並強化通學步道安全
  "tyc9-2-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"校舍整建與通學步道屬市府教育局與工務局權責，可申請中央補助。整建可能是修繕、耐震補強或拆除重建，工程類型與校數均未說明，經費無法估算；校舍工程需多年分批，四年內可完成部分學校與通學步道改善。","sources":[]},
  // 評估捷運路網延伸至楊梅，加速國道高架延伸頭份工程
  "tyc9-2-p5": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"國道拓寬屬交通部高速公路局主辦，地方只能配合用地與都市計畫；捷運延伸楊梅需市府規劃並經中央核定。市府已重新踏勘內壢宋屋楊梅線路廊，評估可在四年內推進；瓶頸道路改善屬市府權責，但未說明路段與經費。","sources":["https://www.chinatimes.com/realtimenews/20261016002253-260421"]},
  // 爭取半導體與 AI 產業鏈進駐龍潭科學園區三期，加速擴大幼獅工業區
  "tyc9-2-p6": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"龍科三期由國科會與竹科管理局主導，廠商是否進駐取決於企業投資決策，地方只能配合周邊交通、水電等配套；幼獅擴大工業區二期則有市府都計通檢可推。龍科三期目標 118 年底前完成用地取得、119 年起開發，四年內可見進展但未必完成進駐。","sources":["https://news.cts.com.tw/cna/local/202608/202608143067329.html"]},
  // 四維國小啟動校舍興建規劃並評估增設幼兒園兩歲專班
  "tyc9-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"校舍規劃與增設兩歲專班屬教育局權責。清單載市府已爭取鄰近國防部用地，啟動規劃與評估兩歲專班主要是行政與委託規劃作業，經費不高，一任內可以完成；用地撥用的進度會影響後續正式施工，校舍興建經費則未說明。","sources":[]},
  // 加速中興路周邊通學廊道改善與楊明國小校舍重建
  "tyc9-3-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"通學廊道改善與校舍重建屬工務、教育單位的權責，政見要求的是加速推動。通學廊道改善一任內可以完成；老舊校舍重建須經規劃、設計與發包，政見沒有說明規模與經費，完工時間取決於目前進度，一任內未必能完成重建。","sources":[]},
  // 加速楊明國小周邊道路用地取得與動工
  "tyc9-4-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"市區道路的用地取得與開闢屬市府工務權責。政見沒有說明道路長度與需徵收的面積，經費無法估算；徵收或協議價購常因地主協商延宕，是一任內完工的主要變數。","sources":[]},
  // 依法維護梅江國宅周邊道路公共通行權
  "tyc9-4-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"維護公共通行權需市府依既成道路認定或協調、徵收等方式處理，涉及私人土地權利，可能需經司法或徵收程序。若需徵收，經費視面積而定，說明未提，無法估算。","sources":[]},
  // 推動「小黃公車」
  "tyc9-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"預約共乘的計程車公車是交通部公路主管機關推動的偏鄉需求反應式運輸模式，已有多個縣市實施，市府可申請中央補助辦理，並結合敬老愛心卡。經費小，一任內可以上路。","sources":[]},
  // 楊梅自立停車場由新工處統籌並整合多目標使用
  "tyc9-6-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"停車場開發與主辦機關調整屬市府權責，由新工處統籌並整合多目標使用，是市府內部分工與規劃的決定。清單載市府答詢將預算提高至 3.2 億元，約占總歲出 0.17%，但尚未看到預算核定或財源文件。統籌與整合規劃一任內可以完成；完工期程不在政見範圍內。","sources":[]},
  // 活化楊梅火車站舊宿舍空間並改善小楊梅步道
  "tyc9-6-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"步道防滑改善屬市府權責，成本小、可快速完成。車站舊宿舍若屬鐵路機構資產，市府需取得同意或租用後才能活化，且歷史建物修繕經費與期程未說明，是主要變數。","sources":[]},
  // 編列預算推動楊梅污水下水道與治水工程
  "tyc9-6-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"污水下水道與治水工程由市府水務局推動，經費多仰賴中央補助。政見要求編列預算積極推動，未說明工程範圍與金額，經費無法估算；可推動的工程進度取決於預算編列與中央補助核定，四年內可見部分進展。","sources":[]},
  // 改善既有自行車道斷點與高低落差，串聯龍潭大池與十一份觀光園區
  "tyc10-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"自行車道斷點與高低差改善屬市府交通、工務局權責，議員可透過質詢與預算審議督促。工程以局部銜接、整平為主，經費相對小，一任內可完成並看到路網串聯成效。","sources":[]},
  // 在地節慶活動結合商圈與市場導流，並增加民眾可參與的體驗活動
  "tyc10-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"節慶活動結合商圈導流與體驗活動，屬市府文化、經發與教育單位的業務，可利用既有活動預算辦理，成本低，下一次節慶就能實施。","sources":[]},
  // 爭取國道客運尖峰時段增開由龍潭直接發車的班次
  "tyc10-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"所舉 709 路屬市區公車，班次與區間發車可由市府交通主管機關與業者協調。政見內容為反映並爭取評估，經費小，一任內可完成；實際增班仍受業者營運與駕駛人力影響。","sources":["https://news.tycg.gov.tw/News_Content.aspx?n=5016&s=1594742&sms=7885"]},
  // 捷運橘線延伸龍潭時納入龍潭科學園區支線並於關鍵節點設站
  "tyc10-4-p0": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"unclear","schedule":"medium","stage":"橘線可行性研究（含龍科支線）2026 年 10 月提報交通部審議","horizon":"約 12–15 年","reason":"市府已將長約 4.37 公里、4 站的龍科支線納入橘線可行性研究並提報交通部，訴求已列入正式規劃。後續須經中央審議、綜合規劃核定，財務分攤尚未確立。","sources":["https://n.yam.com/Article/20261028519189"]},
  // 加速在梅龍路、梅花莊周邊設立新國小
  "tyc10-4-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"設校屬市府教育局權責，議員負責爭取與監督。說明已載明校地約 1.8 公頃，教育局答詢目標 118 學年度招生，期程落在一任內。新建國小工程經費未說明，財源亦未說明。","sources":[]},
  // 拓寬工二路、民族路與龍源路口等瓶頸路段，開闢大同路 226 巷
  "tyc10-4-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"道路拓寬與巷道開闢屬市府工務權責，議員可質詢、爭取預算。所列路段未說明拓寬範圍與用地取得方式，經費無法估算；若涉及私有地徵收或拆遷，協議與徵收程序可能拉長期程，四年內仍有機會完成部分路段。","sources":[]},
  // 龍潭轉運站啟用後整合公車、小巴、公共自行車與號誌，研議增設直達機場路線
  "tyc10-4-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"龍潭轉運站已在 2026 年 9 月底啟用，整合公車、小巴、自行車與號誌屬市府交通局權責。增設機場直達路線需要客運業者配合，可以用營運補貼或招標開闢；成本有限，一任內可完成。","sources":["https://n.yam.com/Article/20260927263481"]},
  // 檢討龍潭都市計畫，增加科學園區周邊住宅供給
  "tyc10-4-p4": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"都市計畫檢討屬市府都發局權責，都發局已答詢將發包研究，研究經費不高。農業區變更為住宅區須經市都委會與內政部審議，並受農地政策限制，從研究到發布實施通常要好幾年，一任內未必能增加住宅供給。","sources":[]},
  // 敬老愛心卡研議擴大用途，納入診所掛號費、高鐵等
  "tyc10-4-p5": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"敬老愛心卡用途由市府訂定，研議擴大用途屬行政作業。市府已公告自 116 年 1 月 1 日起新增每月 100 點醫療補助，可用於掛號費，尚未生效。納入高鐵需與業者協商，補助方式與額度未說明，經費無法估算。","sources":["https://sab.tycg.gov.tw/News_Content.aspx?Create=1&n=7372&s=1875084","https://news.pchome.com.tw/politics/cnews/20260805/index-78591278533529227001.html"]},
  // 龍潭科學園區三期擴建要求市府做好徵收溝通、安置補償與生態評估
  "tyc10-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求市府做好徵收溝通、安置補償與生態評估，屬議員監督範圍。市府已因應園區三期推動周邊區段徵收地主意願調查，相關溝通程序進行中，可透過質詢持續監督。","sources":["https://udn.com/news/story/7324/9793609"]},
  // 舊圖書館旁公有停車場改建立體停車場，並開闢龍青路、東華街周邊道路
  "tyc10-5-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"立體停車場與道路開闢屬市府權責。停車場規模與道路長度未說明，經費無法估算；改建須設計發包與施工，道路開闢須先確認路權與用地，一任內完成需時程配合。","sources":[]},
  // 拓寬湧光路，並爭取沿自由街、工二路、龍平路的橫向外環道路
  "tyc10-5-p2": {"track":"long","level":"unclear","authority":"medium","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"未查得公開規劃資料","horizon":"無法估計","reason":"道路拓寬與新闢屬市府權責，議員可爭取預算；新闢外環道路屬多年期實體建設。政見未說明路段長度、寬度與經費，須確認用地取得需求及方式，規劃成熟度、財務與期程均無法判斷。","sources":[]},
  // 推動龍潭都市計畫變更，活化原圖書館、區公所、代表會所在的行政區土地
  "tyc10-5-p3": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"都市計畫變更由市府都委會審議，主要計畫變更須報內政部核定。經費小，但審議程序常需二至四年。","sources":[]},
  // 爭取已報編未開發的烏樹林工業區納入中央工業主管機關所屬工業區
  "tyc10-5-p4": {"level":"medium","authority":"low","cost":"unclear","timeline":"unclear","reason":"烏樹林工業區屬報編未開發的工業區，道路寬度不足且欠缺公共設施；要納入經濟部所屬工業區，決定權在中央，市府與議員只能提出爭取。地方可以先做的是道路拓寬與排水改善，市府已表示正與地主協調，並考慮結合龍科三期爭取道路經費。中央是否接手沒有已知的時程，期程無法判斷。","sources":["https://tw.news.yahoo.com/%E9%BE%8D%E6%BD%AD%E7%83%8F%E6%A8%B9%E6%9E%97%E4%BA%A4%E9%80%9A-%E6%93%AC%E7%B5%90%E5%90%88%E9%BE%8D%E7%A7%913%E6%9C%9F%E6%94%B9%E5%96%84-201000177.html"]},
  // 推動機場捷運由中壢經平鎮延伸至龍潭、捷運綠線由八德延伸至龍潭
  "tyc10-5-p5": {"track":"long","level":"unclear","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"構想階段；未見列入規劃（現況：市府以橘線含龍科支線規劃平鎮、龍潭軌道）","horizon":"無法估計","reason":"捷運路線需市府規劃、交通部審議及行政院核定。所提機場捷運經平鎮延伸龍潭與綠線八德延伸龍潭，未見列入任何規劃；現況是市府以橘線可行性研究（含約 4 公里龍科支線）提報交通部，優先推平鎮、龍潭段，此為不同路線，只作背景。兩條延伸線未說明路線、經費與財源，財務與期程無從評估。","sources":["https://news.cts.com.tw/cna/local/202610/202610283094723.html","https://udn.com/news/story/7324/9841732"]},
  // 推動新梅龍快速道路，以及板橋沿大漢溪左岸至龍潭的環河快速道路
  "tyc10-5-p6": {"track":"long","level":"unclear","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"構想階段，未說明路線與規劃進度","horizon":"無法估計","reason":"快速道路屬中央公路主管機關與市府合作推動，跨縣市路段需中央核定與補助。環河快速道路從板橋沿大漢溪左岸至龍潭，跨新北與桃園、沿河川區域，須處理河川管理與環評。政見未說明路線長度、經費與財源，也未見可行性研究，成熟度低，財務與期程無法判斷。","sources":[]},
  // 爭取在北二高橋下新增匹克球場
  "tyc10-5-p7": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"國道橋下空間由交通部高速公路局管理，市府須向高公局申請使用。國道橋下設置運動場已有不少先例，球場鋪面與照明費用低，一任內可完成。","sources":[]},
  // 爭取提高客家事務主管機關對地方社團的補助款
  "tyc10-5-p8": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"未指明是市府客家事務局或中央客家主管機關。市府自身的社團補助可透過議會質詢與預算審議爭取，屬地方權責；中央機關的補助則只能爭取，地方無權決定。加碼額度、社團數與頻率未說明，經費無法估算。","sources":[]},
  // 新屋埤運動公園用地儘速取得或研議替代方案
  "tyc11-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"公園用地取得屬市府權限，可以價購、徵收或租用處理。用地面積與地價未說明，經費無法估算；地主有意收回，時程有壓力，但可研議替代方案。","sources":[]},
  // 改善海岸侵蝕熱點護岸，保留部分緩坡或步道兼顧親水
  "tyc11-1-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"海岸防護設施屬市府與中央水利單位分工辦理，需市府採納。護岸改善工程規模與熱點範圍未說明，無法估算經費；工法調整需配合海岸防護計畫，一任內可完成部分熱點。","sources":[]},
  // 協助加速農會穀倉完成審查並啟用
  "tyc11-1-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"協助加速審查屬市府行政權責，議員可質詢督促，行政成本低。已投入逾 6,500 萬元仍未啟用，未啟用原因與是否需補正設備或建管項目未說明，追加經費與所需時間無法判斷，四年內啟用有機會但不確定。","sources":[]},
  // 盤點觀音具客庄歷史的埤塘、水圳與周邊空間，與居民共同規劃並爭取中央水環境改善計畫
  "tyc12-1-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"盤點埤塘與水圳並與居民規劃可由市府辦理，經費小。中央水環境改善計畫採競爭型補助，能否獲核定不確定，是主要變數。","sources":[]},
  // 請市府結合農會協助觀音青年農民參加中央青農輔導遴選，並連結品牌、加工與通路輔導
  "tyc12-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"協助青農參加中央遴選與品牌、加工、通路輔導，市府農業局可與農會合作辦理，經費以輔導與行銷活動為主，成本小，四年內可實施。","sources":[]},
  // 請市府媒合藝文團隊進入觀音學校開設藝術課程
  "tyc12-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"媒合藝文團隊入校屬市府教育、文化單位可辦理事項，經費以講師鐘點費為主，規模小，可立即推動。","sources":[]},
  // 在觀音區七富溪段市場用地設置現代化傳統市場
  "tyc12-2-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"公有市場興建屬市府經發局權責，已有市場用地約 1,902 平方公尺，市府承諾三個月內完成可行性評估。市場量體與經費未說明，經費無法估算；若評估可行，後續設計、發包與興建在一任內完成較緊。","sources":[]},
  // 重啟觀音都市計畫檢討，整體規劃觀音、新坡、草漯三大生活圈
  "tyc12-2-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"都市計畫通盤檢討由市府都發局辦理，清單載都發局已答詢將重啟檢討，委託規劃經費不高。重啟檢討並提出三大生活圈的整體規劃，一任內可以推進；主要計畫變更最後須經市都委會與內政部審議，發布實施可能超過一任，但政見本身是重啟檢討，不以發布實施為門檻。","sources":[]},
  // 增設聲音照相科技執法，並在長直路段施作震動標線等防飆車措施
  "tyc12-2-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"聲音照相科技執法已有法源，國內多個縣市已在使用；震動標線屬道路交通設施，由市府交通局決定設置。設備與標線的費用有限，一任內可以完成。","sources":[]},
  // 增加觀音往返高鐵站小巴的尖峰與假日班次
  "tyc12-2-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"小巴路線班次由市府交通局核定並補貼，增加尖峰與假日班次只需調整營運契約與補貼，成本有限，短期內可以實施。","sources":[]},
  // 重新檢討觀音納骨塔收費與回饋範圍
  "tyc12-2-p4": {"level":"high","authority":"high","cost":"unclear","timeline":"high","reason":"納骨塔收費與回饋範圍由市府殯葬管理法規訂定，議員可提案修正或透過審議要求檢討，重新檢討一任內可完成。回饋方式、適用範圍與收費調整幅度未說明，經費或收入影響無法估算。","sources":[]},
  // 公益性社團借用市民活動中心提供租金優惠
  "tyc12-2-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市民活動中心收費標準由市府或區公所訂定，調整優惠屬行政措施，減收租金影響有限，可立即推動。","sources":[]},
  // 天然氣接收站公共藝術經費留用觀音，打造展演空間與旅遊服務中心
  "tyc12-3-p0": {"level":"medium","authority":"low","cost":"medium","timeline":"medium","reason":"公共藝術經費原則上由興辦機關（國營事業）辦理公共藝術；依法經審議會核准免辦或未達造價 1% 時，經費可納入主管機關基金或專戶，統籌辦理文化藝術事務，範圍包括展演場館與文化觀光。因此移作展演空間並非依法不可行，但須興辦機關申請、審議會核准，且基金屬哪一級主管機關、能否留用觀音仍待確認，市府只能協調爭取。","sources":["https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=H0170012","https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0170006"]},
  // 加速開放富林溪防汛道路與步道，分流工業區車潮
  "tyc12-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"防汛道路開放通行屬市府水務與交通單位權責，主要為既有道路的開放與安全設施，經費小，一任內可完成。","sources":[]},
  // 超高壓變電所若推動，應同步以主要電纜地下化作為回饋
  "tyc12-3-p2": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"超高壓變電所與輸電線路由國營電力事業興建，電纜地下化回饋需該事業同意並負擔經費，市府只能協調爭取。地下化經費取決於路線長度、電壓與土建條件，政見未說明，經費無法估算；屬有條件的訴求，可透過地方協商爭取。","sources":[]},
  // 檢討並提高焚化爐垃圾處理回饋金
  "tyc12-3-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"焚化廠回饋金標準由市府訂定，可透過修正回饋辦法調整，議員亦可透過預算審議推動。提高幅度與適用範圍未說明，增加的支出無法估算；回饋金財源需一併檢討。","sources":[]},
  // 建立原住民健康地圖與長期追蹤制度
  "tyc13-1-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"健康地圖與追蹤制度屬市府衛生局、原民局可執行的資料整合與服務規劃，議員可質詢、爭取預算。未說明追蹤對象、資料範圍與人力，規模未說明，經費無法估算；需處理個資與跨機關資料串接，但無根本障礙，四年內可建置並看到初步成果。","sources":[]},
  // 媒合個管師、營養師與醫療團隊巡迴進駐文化健康站
  "tyc13-1-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"媒合醫療團隊巡迴文化健康站屬市府原民局與衛生局可協調的業務。現況 38 處文化健康站中已有 26 處有相關醫療服務；政見未說明媒合站數與服務頻率，經費無法估算，但沒有法規或用地障礙，四年內可推動。","sources":[]},
  // 改善長者前往文化健康站的交通接送
  "tyc13-1-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"文化健康站交通接送可由原民局編列交通車或計程車補助，屬地方權責。服務人數、車次與路程未說明，經費無法估算；沒有法規障礙，四年內可實施。","sources":[]},
  // 由副市長層級召集跨局處原住民政策會議
  "tyc13-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"由副市長召集跨局處會議屬市府內部行政安排，幾乎不需經費，市長同意後即可召開。","sources":[]},
  // 返鄉參加歲時祭儀交通補助增為一年兩次
  "tyc13-2-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"返鄉交通補助屬市府原民業務，增加補助次數經費有限，可以年度預算支應。其他縣市亦有推動原住民歲時祭儀返鄉交通補助的先例。","sources":["https://www.cna.com.tw/postwrite/chi/445629"]},
  // 修正原住民族發展及保障自治條例，增設文化活動設施設備補助
  "tyc13-2-p2": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"修正自治條例屬議員可直接提案的職權，增設文化活動設施設備補助項目屬地方自治事項。補助金額可由年度預算控制，經費小；條例修正若獲議會通過，任期內即可施行。","sources":[]},
  // 保留各族歲時祭儀既有補助，跨族群交流另行規劃
  "tyc13-2-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"既有祭儀補助可透過議會預算審議監督保留，但另行規劃跨族群交流活動需市府採納並編列，議會依法不得為增加支出之提議。維持既有補助不增加成本，交流活動經費通常不大，可在下一年度預算落實。","sources":["https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=A0040003&flno=40"]},
  // 整合學校空間、志工與社區據點補強原住民學童課後照顧
  "tyc13-2-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"運用學校空間、志工與社區據點補強課後照顧，屬教育局、原民局可以協調的業務，主要支出是人力與活動費，規模小。整合既有資源的做法在一任內可見成效。","sources":[]},
  // 通盤盤點 12 區需求，推動平鎮、桃園、楊梅等地的原住民文化與集會場域
  "tyc13-2-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"原住民文化與集會場域屬市府原民局權責。說明中楊梅二期約 1 億多元只代表該子案；12 區通盤盤點後的整體需求與經費未說明，無法估算。平鎮基地仍待簽土地契約，楊梅二期待編預算並爭取中央補助。","sources":[]},
  // 國中小學生每學期提供一組免費文具
  "tyc13-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"文具補助屬市府教育局可辦理的福利措施。粗估：市府每餐午餐補助增 6 元、每年增約 2.4 億元，推算全市國中小學生約 20 萬人；每組文具假設 300 至 500 元，每年兩學期，約 1.2 億至 2 億元，占市府年度歲出約 1,873 億元的 0.06% 至 0.11%，可以年度預算支應。","sources":["https://sdgs.tycg.gov.tw/News_Content.aspx?n=17888&s=1261415"]},
  // 試辦獨居原住民長者及失能者智慧手環
  "tyc13-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"試辦智慧手環屬市府原民與社政單位可辦理事項，試辦規模經費有限，一任內可完成。","sources":[]},
  // 非設籍復興區原住民長者敬老愛心卡點數提高至 1,000 點，並開放扣抵就醫掛號費
  "tyc13-3-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"敬老愛心卡的點數與用途由市府自訂，市府已宣布 116 年起擴大用途，包括 100 點的醫療補助，開放扣抵掛號費有現成機制可以沿用。提高非設籍復興區原民長者的點數，對象人數有限，經費小。","sources":["https://news.tvbs.com.tw/life/4006237"]},
  // 建置線上部落大學平台，整合線上課程、族語教學與文化影音
  "tyc13-3-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"線上平台屬市府原民局可委辦的數位建置，族語與文化影音可整合既有資源。課程製作量與維運人力未說明，經費無法估算；平台開發本身沒有法規或用地障礙，四年內可上線。","sources":[]},
  // 提高原住民護理師與社工進用比例
  "tyc13-3-p4": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"市府社工進用可在考試與約聘制度內提高原住民比例，經費小；護理師多在醫療機構任職，市府只能以獎勵或培育方式鼓勵。原住民護理與社工人才供給有限，四年內能提高但幅度受限。","sources":[]},
  // 輔導原住民企業品牌建立、通路媒合、優先採購與經營培訓
  "tyc13-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"品牌輔導、通路媒合與經營培訓屬市府原民局與經發局可辦理的業務，優先採購可依既有原住民族工作權保障規定推動。經費以委辦與活動為主，成本小，四年內可實施。","sources":[]},
  // 建立原住民運動選手主動選才、培訓與參賽輔導機制
  "tyc13-5-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"由體育與原民主管機關和各單項委員會合作建立選才培訓機制，屬市府權限內行政措施，一任內可建立制度。培訓人數、項目與參賽補助規模未說明，持續性支出無法估算。","sources":[]},
  // 原住民學生比例高的學校結合文化課程、職涯探索與產業體驗
  "tyc13-5-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"文化課程與職涯探索可由教育局在校訂課程與既有計畫內推動，屬地方教育權責。未說明涵蓋校數、班級數與辦理頻率，經費無法估算；沒有法規障礙，四年內可實施。","sources":[]},
  // 研議適合部落的聚落型住宅，協助青年返鄉
  "tyc14-1-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"研議部落住宅屬市府原民、住宅單位的權責，研議一任內可以完成。部落多在非都市土地，可能涉及原住民保留地、山坡地與建築管理限制，是研議時須處理的事項；實際興建的規模與經費沒有說明，無法估算。","sources":[]},
  // 加碼原住民大專生住宿補助，並與大專院校協調宿舍資源
  "tyc14-1-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"住宿補助加碼屬市府原民局可自辦的福利。補助資格、增額與人數未說明，經費無法估算；與大專院校協調宿舍需對方配合，成效不確定，但補助部分可在年度預算落實。","sources":[]},
  // 復興區文化健康站串聯智慧醫療，經同意後應用長者健康量測資料
  "tyc14-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"文健站由市府原民局主管，清單載復興區有 14 處，規模有限，量測設備與資料串接的費用不高。健康量測資料屬個資法第 6 條的特種個資，以當事人同意為依據時須取得書面同意、事先告知，且不得逾越特定目的的必要範圍，並做好安全維護；這些都可在制度設計時處理，一任內可以建置。","sources":["https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=I0050021"]},
  // 跨局處依各里特色發展復興區主題文化旅遊
  "tyc14-1-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"主題文化旅遊屬市府觀旅局、原民局可跨局處推動的行銷與輔導工作。未說明活動、設施與各里投入規模，經費無法估算；觀旅局已表示將盤點原鄉旅遊資源，四年內可推出路線與活動。","sources":[]},
  // 媒合原住民專長人才與大專學生投入文化健康站服務
  "tyc14-1-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"人才媒合與學生服務屬原民、社政單位可自行試辦的業務，需市府採納執行。主要成本為交通補貼、培訓與保險，規模小；以試辦方式推動，一任內可見成效。","sources":[]},
  // 擴大原住民心理健康服務年齡範圍，導入具文化敏感度的諮商人力
  "tyc14-1-p5": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"擴大服務年齡範圍屬市府原民與衛生單位可調整的行政措施，經費不大。但具文化敏感度的諮商人力供給有限，招募培訓需時間，為主要障礙。","sources":[]},
  // 整理族人可申請的資源與對應窗口，並加強跨局處協調
  "tyc14-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"整理資源清單與窗口、加強跨局處協調屬市府行政作業，經費極小，一任內可完成。","sources":[]},
  // 爭取部落在地醫療照護點與行動醫療
  "tyc14-3-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"部落醫療照護點與巡迴醫療屬市府衛生局權責，可結合中央偏鄉醫療計畫。政見未說明服務地區、設點數量、頻率與人力來源，無法判斷經費與期程。","sources":[]},
  // 擴大原鄉弱勢家庭扶助，強化幼兒教育與原鄉學童學習資源
  "tyc14-3-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"弱勢扶助與原鄉教育資源屬市府社會局、教育局與原民局權責，但未說明扶助對象、項目與規模，無法估算經費與期程。","sources":[]},
  // 扶植部落在地產業與特色旅遊，創造青年留鄉機會
  "tyc14-3-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只寫扶植部落產業與特色旅遊、創造青年留鄉機會，未說明具體措施、對象或經費，資訊不足以判斷可行性。","sources":[]},
  // 加速推動復興區醫療、行政與社福園區
  "tyc14-6-p0": {"track":"long","level":"unclear","authority":"medium","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"未說明園區規劃進度；現況復興分院因環評尚需研究","horizon":"無法估計","reason":"以原國中周邊腹地整合長照、社福機構與醫院分院，屬多年興建的實體園區，由市府規劃推動。現況是復興分院因環評作業複雜仍需進行研究，非政見內容；園區範圍、經費與財源均未說明，成熟度、財務與期程無法判斷，分期先做的部分能否四年內完成也無法確認。","sources":["https://udn.com/news/story/7324/9841536"]},
  // 結合區農會既有空間設置在地長照服務據點
  "tyc14-6-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"結合農會既有空間設置長照據點，屬市府衛生、社政單位常態業務，可申請中央長照基金補助，利用既有空間降低成本，一任內可完成。","sources":[]},
  // 強化復興區無人機隊訓練與設備，提升山區救災效率
  "tyc14-6-p2": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"無人機隊訓練與設備屬市府消防局權責。機型、增購數量與訓練規模未說明，經費無法估算；沒有法規障礙，訓練與採購四年內可完成。","sources":[]},
  // 衛生單位主動稽查醫美診所
  "tyc14-6-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"醫療機構稽查屬市府衛生局權限，主動稽查屬常態行政措施，經費小，可立即推動。","sources":[]},
  // 改善族語教師待遇，鬆綁資格認證與聘用辦法，建立培育與補充機制
  "tyc14-7-p0": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"族語教師資格認證與聘用辦法屬中央教育與原住民族主管機關訂定，地方無法自行鬆綁；改善待遇則可由市府自編預算加給，經費小。培育補充機制可由市府辦理，但師資養成需時。","sources":[]},
  // 推動族語教學數位化，發展數位教材與線上平台
  "tyc14-7-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"medium","reason":"族語數位教材與線上平台可由市府原民、教育單位推動，需市府採納。教材語別、數量與平台功能未說明，經費無法估算；一任內可完成初步建置，全面完成需視範圍而定。","sources":[]},
  // 檢討原住民租金補貼申請門檻與補助機制
  "tyc14-7-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"檢討補助門檻與機制需市府原民單位採納，盤點制度與提出檢討屬行政作業，經費小，一任內可完成。中央亦有租金補貼制度，涉及中央制度的部分地方只能反映；調整後的補助幅度未說明。","sources":[]},
});

/*
 * 2026 桃園市議員政見：可行性評估
 *
 * 評估日期：2026-11-02。由本站依統一標準評估，不是專家意見。
 * 評估時政見已匿名並打亂順序，評估者不知道每則政見屬於哪位候選人。
 * 議員政見的「權責」依議員職權判斷（見方法說明第 6 節）：需要市府採納執行屬常態，不拉低總評。
 * 一般政見與長期建設的評估面向同 new-taipei-feasibility.js。
 * 預算比較基準：桃園市 116 年度總預算案歲出約 1,873 億元（同 taoyuan-feasibility.js）。
 */
window.FEASIBILITY = Object.assign(window.FEASIBILITY || {}, {
  // 爭取國中小免費營養午餐、教科書與鮮奶延伸至高中職
  "tyc1-1-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"國中小免費午餐每餐補助 71.3 元；延伸至高中職，若以約 7 萬名學生、每年 200 餐粗估，午餐約 10 億元，加教科書與鮮奶約 15 億元，約占歲出 0.8%，財源未說明。轄內國立與私立高中職較多，需與中央及私校協調，市府已表示未具體承諾。","sources":["https://udn.com/news/story/6898/9715095"]},
  // 孕產婦乘車補助使用期限延長至產後兩年
  "tyc1-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"孕產婦乘車補助屬市府自辦福利，延長使用期限主要增加已核發額度的使用率，經費增幅小。市府已表示研議延伸，修正作業規定即可上路。","sources":[]},
  // 提高捷運公司人員待遇，增加專業及輔導加給
  "tyc1-1-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"捷運公司由市府持股，員工待遇由董事會決定，議員可以透過預算審查與質詢推動。政見沒有說明調薪的幅度與人數，經費無法估算；調整加給一任內可以完成，但會影響捷運公司的營運成本與市府補貼。","sources":[]},
  // 比照國民運動中心規格改建老舊市立游泳池
  "tyc1-1-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"游泳池改建屬市府權限，說明中市府已承諾改善。比照國民運動中心規格改建，粗估需數億元，說明未提財源；改建工期約 2 至 3 年，一任內可完成但需及早編列預算。","sources":[]},
  // 推動虎頭山三聖路延伸至長壽路工程
  "tyc1-1-p4": {"level":"high","authority":"medium","cost":"high","timeline":"medium","reason":"道路開闢屬市府權限。說明中用地徵收已獲核定、進行細部設計，後續發包施工一任內可望完成或接近完成。","sources":[]},
  // 提高公共自行車理賠額度並放寬理賠條件，改善公車脫班誤點
  "tyc1-1-p5": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公共自行車理賠條件可由市府與營運商協商調整，經費小。公車脫班與駕駛不足相關，屬長期結構問題，難以短期解決。","sources":[]},
  // 市立游泳池由零星修繕改為整體翻修
  "tyc1-3-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"市立游泳池整修屬市府體育局權責，改為整體翻修可透過預算編列達成。涉及場館數量未說明，單座翻修多為數千萬元等級，一任內可完成部分場館。","sources":[]},
  // 以合理補貼維持必要的虧損公車路線，並建立駕駛服務獎懲制度
  "tyc1-3-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"虧損路線補貼與業者考核屬市府交通局權責，中央亦有補貼制度可配合。補貼經費為既有支出的調整，一任內可推動。","sources":[]},
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
  "tyc1-4-p3": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"加重虐待動物罰則須修正中央《動物保護法》，非地方權限；獸醫診療收費主要依中央法規管理，地方僅能以宣導或公開資訊方式推動。校園生命教育屬市府可推動事項，經費小。主要訴求有權責障礙。","sources":[]},
  // 活化舊城商圈並輔導青年在地創業
  "tyc1-4-p4": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"商圈活化、地下通道利用與青年創業輔導屬市府經發局與青年局權責，多屬軟硬體小型計畫，一任內可推動。規模與經費未說明。","sources":[]},
  // 公園運動場與兒童遊具加裝頂棚
  "tyc1-4-p5": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"公園設施改善屬市府權限。加裝頂棚的數量未說明，單處經費約數十萬至數百萬元，可分批以年度預算辦理，一任內可見成效。","sources":[]},
  // 檢討公車路網與班次並擴大公共自行車站點
  "tyc1-4-p6": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公車路網、班次與公共自行車站點皆屬市府交通局權限，屬常態檢討業務，經費有限，一任內可見成效。","sources":[]},
  // 落實人車分道並建置無障礙人行道
  "tyc1-4-p7": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"人車分道與無障礙人行道屬市府工務局與交通局權責。未說明路段或規模，經費無法估算；道路寬度不足與騎樓整平需逐段協調，四年內可改善部分路段。","sources":[]},
  // 交通違規罰鍰專款用於道路安全與大眾運輸
  "tyc1-4-p8": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"議員可提案或透過預算審議要求罰鍰收入專款專用，例如設置特種基金，屬地方財政自治範圍。不增加新支出，屬既有收入的用途調整，一任內可完成制度建置。","sources":[]},
  // 在捷運綠線蘆興埤站周邊設立市立科學博物館
  "tyc1-5-p0": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"市府表示啟動規劃，尚無可行性研究","horizon":"約 8–12 年","reason":"科學博物館是大型場館，屬市府權責，站旁約 5 公頃的機關用地有利於推動。市府只表示將啟動規劃、逐年編列預算，尚未看到可行性研究、建館規模與總經費；這類場館的建館費多達數十億元，還有長期營運成本。","sources":[]},
  // 在捷運綠線蘆竹中正北站周邊規劃大型森林公園與國際級野生動物園
  "tyc1-5-p1": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"low","schedule":"unclear","stage":"僅有構想，市府表示納入規劃考量","horizon":"約 10–15 年以上","reason":"森林公園加國際級野生動物園是大型場館，屬市府權責，但目前只有構想。動物園的建設與動物引進、保育營運成本高，每年也需要長期的營運經費，政見沒有提出財源或規模；42 公頃的用地取得與環評也還沒有著落。","sources":[]},
  // 公車駕駛薪資以每月 7 萬元為目標
  "tyc1-5-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"駕駛薪資由客運業者決定，市府只能以補貼或營運契約誘導；市府現行補貼每人每月約 4,000 元。說明未提現行薪資差距與財源，若每人每月補差額 1 至 2 萬元、以數千名駕駛計，粗估每年數億至十億元。","sources":["https://www.setn.com/news/1241792"]},
  // 國小學童鮮乳供應擴大至國中
  "tyc1-5-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府已自 2026 年 8 月 31 日起將「生生喝鮮乳」擴大至 15 歲、納入國中生，受惠人數由約 21 萬增至約 27 萬人，政見訴求已實現。","sources":["https://www.chinatimes.com/realtimenews/20261030001790-260421"]},
  // 在大潭電廠旁市有地設立 AI 算力中心
  "tyc1-5-p4": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有標題，未說明設置主體、規模、用地現況、電力取得與經費來源。算力中心多屬民間投資，市有地出租或設定地上權需市府辦理，資訊不足無法判斷可行性。","sources":[]},
  // 明年第二季前將本市納入北台灣跨縣市觀光通行票卡，並結合捷運推出聯名一日票
  "tyc1-5-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"加入跨縣市觀光票卡與推出聯名一日票屬市府觀旅局與捷運公司權責，需與他縣市協調，市府已以明年第二季為目標評估。經費小，期程明確。","sources":[]},
  // 爭取捷運橘線列為第二階段優先路線並改採中運量系統
  "tyc1-6-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"low","reason":"爭取列為優先路線屬一般政見，需市府採納。改採中運量系統須重新辦理可行性研究與綜合規劃，並送交通部審議，經費以百億元計；說明未提期程與財源，一任內僅能完成規劃階段。","sources":[]},
  // 敬老卡額度由 800 點提高至 1,000 點並擴大使用項目
  "tyc1-6-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"點數由市府自訂。敬老愛心卡持卡約 40 萬人，粗估每人每月增 200 點，全數使用每年約 9.6 億元，依約三成使用率約 3 億元，約占總歲出 0.2–0.5%，財源未說明。擴大使用項目市府已於 2027 年推動。","sources":["https://news.pchome.com.tw/society/tyenews/20260324/index-77431956670748343002.html","https://news.pchome.com.tw/politics/cnews/20260805/index-78591278533529227001.html"]},
  // 研議坐月子期間每月 5,000 元營養補助
  "tyc1-6-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府可用自籌財源辦理生育相關現金補助。若一次補助一個月 5,000 元，以年出生 1.5–2 萬人粗估，每年約 0.75–1 億元，約占總歲出 0.05%；只要修訂補助辦法，一任內即可上路。","sources":[]},
  // 加速規劃捷運青線並提出往返青埔的替代道路方案
  "tyc1-6-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"捷運規劃由市府捷運工程局辦理，核定與補助需中央同意；替代道路方案屬市府權責。加速規劃本身經費不大，但未說明替代道路路線與規模，四年內可完成規劃進度，興建則需更長時間。","sources":[]},
  // 公車研議尖峰半職駕駛與彈性排班，並導入需求反應式預約運輸
  "tyc1-9-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公車排班與需求反應式運輸屬市府交通局權責，各地已有預約式小巴先例。半職駕駛須業者配合並符合勞動與職業駕照規定，駕駛短缺難以短期解決。","sources":[]},
  // 逐路檢討桃園區禁行機車與強制兩段式左轉規定
  "tyc1-9-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"禁行機車與兩段式左轉屬市府交通局權限，議員可透過質詢要求提出檢討路段與期程。檢討與標誌號誌調整經費小，一任內可完成。","sources":[]},
  // 捷運綠線 G11 站周邊盤點空地增設收費停車場
  "tyc1-9-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"盤點公有空地設置收費停車場屬市府交通局權責，平面停車場建置成本低，收費可回收營運支出。主要限制是站點周邊是否有可用公有地，若有，一兩年內即可設置。","sources":[]},
  // 2027 年燈會串聯 13 區宮廟、商圈與公共運輸分散人流
  "tyc1-9-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"燈會活動規劃與接駁屬市府觀旅局與交通局權責，串聯各區宮廟商圈以分散人潮屬活動設計調整，經費小，期程明確。","sources":[]},
  // 以大數據分析通勤尖峰，成立應變車隊支援國道客運
  "tyc1-10-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"國道客運路線屬中央公路主管機關核准、業者經營，市府僅能以市區公車接駁或協調業者增班。以數據分析尖峰成本低，但成立應變車隊受駕駛人力不足限制。","sources":["https://www.setn.com/news/1241792"]},
  // 建立毒駕風險地圖並充實防護裝備
  "tyc1-10-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"low","reason":"毒駕風險地圖與警用裝備屬市府警察局權責。讓車輛立即失去動力的技術涉及研發、車輛法規與安全疑慮，超出地方權責與短期可行範圍。","sources":[]},
  // 依長者人數彈性增設社區關懷據點
  "tyc1-10-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"社區關懷據點設置與補助屬市府社會局權責，依長者人數調整設置數量是行政規劃。單一據點年補助粗估數十萬元，增設數十處約千萬元級，占歲出極小；主要挑戰是找到承辦單位與場地，四年內可逐步推動。","sources":[]},
  // 建立公車脫班陳情的完整追蹤流程並掌握裁罰與改善機制
  "tyc1-11-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公車陳情追蹤與業者裁罰屬市府交通局權責，議員可透過質詢監督。主要是行政流程與考核機制調整，經費小，短期可建立。","sources":[]},
  // 推動果菜市場遷建
  "tyc1-12-p0": {"track":"long","level":"unclear","authority":"medium","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"未說明","horizon":"無法估計","reason":"果菜市場遷建屬多年期大型設施，須市府取得新址、與市場經營單位協調。政見未說明遷建地點、規模、經費與期程，無法判斷成熟度與可行性。","sources":[]},
  // 打通國際路與南平路，推動國道一號甲線東段
  "tyc1-12-p1": {"level":"low","authority":"low","cost":"unclear","timeline":"low","reason":"國道一號甲線屬國道系統，主辦機關是交通部高速公路局，地方只能爭取；東段至今尚未啟動，從規劃、環評到完工遠超過一任。打通國際路與南平路屬市府權責，但沒有說明路段與用地狀況。","sources":[]},
  // 推動桃園監獄遷移並重新規劃土地使用
  "tyc1-12-p2": {"level":"low","authority":"low","cost":"low","timeline":"low","reason":"監獄屬法務部矯正署管轄，遷移需中央覓得新址、編列預算並處理地方反彈，市府只能協調。監獄遷建常須十年以上，一任內難見成效。","sources":[]},
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
  "tyc1-12-p9": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"增設一級機關必須修正市府組織自治條例並經議會通過，還受地方行政機關組織準則的機關總數上限約束，可能要裁併其他局處才騰得出名額。人事與業務經費每年粗估數千萬至上億元，沒有說明財源；修法與籌設可在一任內完成，但阻力不小。","sources":[]},
  // 每個里配置幹事與活動場所
  "tyc1-12-p10": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"里幹事員額與里活動場所皆由市府編制與興建，需市府採納。每里設專屬幹事須增加大量員額，每里設活動場所則牽涉用地取得，規模與經費均未說明，全面落實在一任內難度不低。","sources":[]},
  // 南門市場改建
  "tyc1-12-p11": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"公有零售市場改建屬市府經發局權責。政見未說明改建範圍（局部或整體）、經費與期程，無法判斷可行性。","sources":[]},
  // 推動防災社區、培訓防災士並推廣每戶一個防災包
  "tyc1-12-p12": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"防災社區、防災士培訓屬市府消防局既有業務，可擴大辦理；防災包以推廣為主時成本小。若改為全面發放，經費會大幅增加，但政見未寫發放，四年內可推動。","sources":[]},
  // 建置 AI 智慧市政服務系統，一站查詢補助與申辦資源
  "tyc1-12-p13": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"整合補助與申辦資訊的查詢平台屬市府資訊、研考單位的權責，技術成熟。系統建置與維運粗估每年數千萬元以內，占總歲出比例很低，但沒有說明財源；一任內可上線。","sources":[]},
  // 成立特定工廠轉型合法化跨局處聯合審查小組
  "tyc1-12-p14": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府可以依工廠管理輔導法，成立跨局處的聯合審查小組、巡迴輔導並提供範本，屬行政組織與流程的調整，成本低。530 家工廠截至 2026 年 5 月核准率為零，推動的需求明確，一任內可以看到審查件數增加。","sources":[]},
  // 推動製造業 AI 轉型三年計畫
  "tyc1-12-p15": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"產業輔導屬市府經發局權責，也能銜接經濟部的相關計畫。六階段輔導加示範專區的經費粗估每年數千萬至上億元，沒有說明財源；三年計畫在一任內可以執行完畢。","sources":[]},
  // 利用公有空間、社宅與少子化學校餘裕空間設置青銀共融中心
  "tyc1-12-p16": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"利用公有空間、社宅與學校餘裕空間設置托育與照顧設施，屬市府社政與教育單位可整合的業務，公共托育與日照中心也有中央補助可以申請。每處的改建與營運費用中等，沒有說明設置數量，一任內可分批設立。","sources":[]},
  // 儘速打通南山街，作為地下道施工期間替代道路
  "tyc1-12-p17": {"level":"medium","authority":"medium","cost":"unclear","timeline":"unclear","reason":"道路開闢屬市府工務權限，需市府採納。說明未提及打通路段長度、用地取得狀況與經費，無法判斷能否趕在地下道施工期間完成。","sources":[]},
  // 設置校園食安專責人員並落實吹哨者檢舉獎金
  "tyc1-15-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"校園食安稽查屬市府衛生局與教育局權責，食安檢舉獎金已有法規依據。增設專責人員經費小，一任內可完成。","sources":[]},
  // 學校午餐國產可溯源食材比例不低於 98.98%，擴大有機蔬菜供餐並公開食材資訊
  "tyc1-15-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"學校午餐食材規範由市府教育局訂定。市府已實施國中小免費營養午餐並逐年提高每餐補助，推動在地、有機食材入校，國產可溯源比例目標可在既有制度上落實，公開食材資訊成本低。","sources":["https://www.chinatimes.com/realtimenews/20261030001790-260421"]},
  // 改善建德國小門口接送動線，延平路增設人行道與照明
  "tyc1-15-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"人行道、照明與臨停接送彎屬市府工務、交通局權責，為單一路段改善，經費小，一任內可完成。","sources":[]},
  // 強化特殊需求幼兒入園支持，增加巡迴特教人力並評估特教交通車
  "tyc1-15-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"增加巡迴特教人力與評估特教交通車屬市府教育局權責；每名特教教師年人事費粗估約百萬元，增聘數十人為數千萬元，財源未說明。特教師資供給不足是實際瓶頸；降低幼兒園師生比的法定標準屬中央，地方只能在公幼自行加碼。","sources":[]},
  // 推動騎樓整平、人行道淨空與路口無障礙改善
  "tyc1-16-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"人行道與路口無障礙改善屬市府工務權責；騎樓整平則牽涉私有地，需要所有權人配合，經常是推動上的主要阻力。政見沒有指明路段與規模，經費無法估算，只能分區逐步推動。","sources":[]},
  // 檢討孕婦乘車服務的付款與派單機制
  "tyc1-17-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"孕婦乘車服務由市府辦理，檢視付款與派單機制屬行政改善，可調整補助券結算方式提高接單意願，經費小，一任內可完成。","sources":[]},
  // 盤點匹克球場地並建立公開場地地圖
  "tyc1-17-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"盤點場地並公開地圖屬體育局的行政作業，幾乎不需經費，一個月內完成盤點是合理的要求。評估既有場地改造是後續工作，可以分年進行。","sources":[]},
  // 要求提出補足清潔隊人力的明確期程
  "tyc1-17-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"清潔隊員額與招募屬市府環保局權責，要求提出補足期程是質詢監督。若補足約 280 人，以每人年人事費 60–80 萬元粗估，每年約 1.7–2.2 億元，約占總歲出 0.1%；可分年招考。","sources":[]},
  // 加強對家庭照顧者的支持
  "tyc1-18-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有方向性主張，說明表示未公布具體措施，無法判斷權責、經費與期程。","sources":[]},
  // 定期公開問政內容並公開競選資金
  "tyc1-18-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"公開自己的問政紀錄與競選資金，議員自己就能做到，幾乎不需經費，可立即執行。","sources":[]},
  // 評估捷運路網由迴龍延伸至機場捷運 A7 站
  "tyc2-1-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"評估捷運由迴龍延伸至 A7 站涉及新北、桃園兩市及中央協調，可行性研究經費小。跨縣市路網需雙方共識，評估本身在一任內可完成，但協調是主要變數。","sources":[]},
  // 推動國道一號甲線相關路網延伸
  "tyc2-1-p1": {"track":"long","level":"low","authority":"low","maturity":"low","financing":"low","schedule":"unclear","stage":"僅有構想","horizon":"約 15 年以上","reason":"國道路網屬交通部高速公路局權責，市府與議員僅能爭取。延伸路線僅有構想，未見可行性研究；國道 1 號甲線本身仍在施工且東段進度落後，延伸路網短期難以啟動。","sources":["https://news.pchome.com.tw/society/tyenews/20260324/index-77431956670748343002.html"]},
  // 打通華亞科技三路銜接縱貫一路並規劃輔助道路
  "tyc2-1-p2": {"level":"low","authority":"medium","cost":"low","timeline":"low","reason":"新闢市區道路屬市府權責，但 2.5 公里、40 公尺寬約需 10 公頃用地，加上工程費，粗估需數十億元，政見也承認路線、用地與經費仍待評估。從可行性研究、都市計畫變更、徵收到施工，一任內難以完成。","sources":[]},
  // 推動龜山智慧科學園區規劃
  "tyc2-1-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"直轄市可依產業創新條例規劃設置產業園區，屬市府權責；推動規劃本身經費不大，但園區用地、環評與都市計畫變更程序耗時，四年內可完成規劃，開發則需更久。","sources":[]},
  // A7 產業專用區住宅污水幹管延管費用由市府負擔
  "tyc2-2-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"污水用戶接管費用由市府負擔屬地方政策選擇，可透過預算與補助辦法處理。未說明戶數與金額，經費無法估算；接管工程期程取決於幹管完成時程，過渡期抽水肥協助可短期實施。","sources":[]},
  // 評估公共設施保留地轉作公園
  "tyc2-2-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"內容是要求評估公設保留地轉作公園及建立公園建設 SOP，屬都發、工務單位可做的研究與行政程序，經費以委託評估為主，金額小。評估與 SOP 一任內可完成；後續若真要變更使用並開闢，則需另走都市計畫程序。","sources":[]},
  // 迴龍消防分隊配合捷運與都市發展整體規劃
  "tyc2-2-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"消防分隊與圖書館等屬市府權責。由耐震補強（約 4,000 萬元）改為結合捷運的整體規劃，經費將大幅增加且財源未說明，整體重建一任內完工有難度。","sources":[]},
  // 加速完成學童通學廊道
  "tyc2-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"通學廊道改善由市府推動中，已於 115 年 9 月完成 100 校，預計年底達 120 校、116 年朝 140 校推進，加速完成剩餘學校在一任內可行。","sources":["https://www.businesstoday.com.tw/article/category/183027/post/202610210027/"]},
  // 提高人行道普及率
  "tyc2-3-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"人行道建置、路口設計與速限調整屬市府交通局與工務局權責。未說明目標普及率、路段或經費，規模無法估算；既有道路寬度不足、騎樓占用與停車空間重分配常引起地方反彈，四年內只能逐段改善。","sources":[]},
  // 研議龜山舊城區都市更新與老城再生方案
  "tyc2-4-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"研議都市更新與 TOD 方案屬市府都發局權責。方案研擬一任內可完成，但後續的都市計畫變更要經市府與內政部審議，整合私有地主的都更推動也很耗時，要實際看到街廓改善需要更長時間。","sources":[]},
  // 優先補足龜山區清潔隊員額
  "tyc2-4-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"清潔隊員額分配屬市府環保局權責，調整分配標準並增聘人員經費小，一任內可完成。","sources":[]},
  // 將龜山山區納入非法棄置智慧圍籬布建
  "tyc2-4-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"智慧圍籬布建點位由市府環保局規劃，依熱點與陳情案件重新評估納入龜山山區屬行政調整，單處設置經費有限，一任內可完成。","sources":[]},
  // 強化深夜噪音車科技執法
  "tyc2-4-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"聲音照相設備配置與執法屬市府環保局與警察局權責，增設固定式設備每套粗估數十萬至百萬元，經費小。累犯加重裁罰須在中央法定罰鍰範圍內調整，四年內可落實。","sources":[]},
  // 加速取得用地、完整開闢樂善與長樂公園綠廊
  "tyc2-4-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公園用地僅剩 288 平方公尺未取得，市府已編列 6,000 餘萬元協議價購，經費已到位。若協議不成可走徵收程序，一兩年內可完成取得並開闢。","sources":[]},
  // 推動捷運棕線加速興建與路網銜接
  "tyc2-6-p0": {"track":"long","level":"high","authority":"medium","maturity":"high","financing":"high","schedule":"medium","stage":"綜合規劃已獲行政院核定，進入專案管理與設計施工階段","horizon":"約 8–10 年（官方目標約 9 年完工）","reason":"捷運棕線綜合規劃 2024 年 3 月經行政院核定，財務計畫隨核定確立中央與地方分攤。市府規劃約 9 年完工，議員可督促進度與轉乘銜接，但「加速」空間受工程本身限制。","sources":["https://www.setn.com/news/1455312"]},
  // 爭取規劃捷運銀線服務華亞科技園區通勤
  "tyc2-6-p1": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"爭取規劃捷運路線屬市府捷運工程局可辦理的可行性研究，議員可透過質詢與預算推動。規劃費用約數千萬元級，經費不大；但從可行性研究到交通部審議通常需數年，四年內可完成研究、未必能獲核定。","sources":[]},
  // 加強公共自行車人車共道規範宣導，並在 APP 與車體加註多語系警語
  "tyc2-9-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"宣導與在 APP、車體加註多語警語，屬市府交通局可以要求營運商配合的事項，成本低，短期內就能完成。","sources":[]},
  // 每年新增 150 站以上公共自行車站點
  "tyc3-2-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公共自行車擴站屬交通局權責，現有 685 站。每年新增 150 站，四年約 600 站，接近翻倍；設站之外，車輛採購與營運補貼也會跟著增加，沒有說明財源。適合設站的地點越來越難找，每年都要達標並不容易。","sources":[]},
  // 配合捷運綠線通車建立完整自行車路網
  "tyc3-2-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"自行車道路網屬市府交通、工務單位權責。政見沒有說明路網範圍與長度，經費無從估算；配合捷運綠線通車分段建置是可行的，但要形成「完整」路網，期程取決於範圍大小。","sources":[]},
  // 加速規劃八德行政園區
  "tyc3-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"行政園區規劃屬市府權責，需求評估已辦理、可行性評估進行中。加速規劃本身經費小，四年內可完成規劃設計並編列興建預算；實際興建經費與完工時程則超出本政見範圍。","sources":[]},
  // 推動八德、大湳兩都市計畫區縫合
  "tyc3-3-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"low","reason":"都市計畫擬定與通盤檢討由市府辦理，但須經內政部都市計畫委員會審議核定，並須配合國土計畫。兩都市計畫區合併屬大規模檢討，依往例需多年審議，一任內難以完成，但屬可推動的程序性工作。","sources":[]},
  // 擴大敬老愛心卡使用範圍
  "tyc3-3-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"敬老愛心卡使用範圍由市府自行訂定。市府已宣布 2027 年起新增醫療、肌力課程、農會採購等項目，政見方向與既有政策一致；擴大範圍會提高使用率，增加部分支出。","sources":["https://news.pchome.com.tw/politics/cnews/20260805/index-78591278533529227001.html"]},
  // 建置市府自有 AI 算力與平台
  "tyc3-3-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"建置自有算力與平台屬市府資訊治理權責。算力規模未說明，GPU 叢集視規模可由數千萬到數億元不等，加上維運人力，經費與期程難以估算。","sources":[]},
  // 增設公共自行車站點並提高電動輔助車比例
  "tyc3-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公共自行車設站與車種配置屬市府交通局與營運商契約範圍，經費小，一任內可推動。","sources":[]},
  // 評估成立市級食品安全實驗室
  "tyc3-7-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"內容為評估成立市級食安實驗室與增加抽驗人力，屬市府衛生局權責，議員可透過預算審議推動。評估本身成本低；若後續真的設置實驗室，儀器與人力粗估數千萬元以上，財源未說明。四年內可完成評估並增加抽驗量。","sources":[]},
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
  "tyc4-2-p0": {"level":"medium","authority":"medium","cost":"low","timeline":"low","reason":"設立市立高中職屬市府權責，惟須取得校地、規劃科別與師資；新設學校經費常達十億元以上且財源未說明。從評估、用地到招生通常超過四年，一任內較可能完成規劃而非開校。","sources":[]},
  // 尖峰時段增設點對點桃小巴或中型巴士
  "tyc4-2-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"增設公車路線屬市府交通局權限。桃園公車駕駛長期不足，市府持續以每月加薪補貼招募，增設尖峰班次受駕駛人力限制，為主要障礙。","sources":["https://www.setn.com/news/1241792"]},
  // 評估公共設施共構停車空間
  "tyc4-2-p2": {"level":"high","authority":"medium","cost":"high","timeline":"medium","reason":"評估公共設施共構停車屬市府權限，評估本身成本低；後續共構需配合新建公共設施期程。已有既有設施地下停車場先例。","sources":[]},
  // 推動安心通學路網
  "tyc4-2-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"通學步道、路口改善與號誌調整屬市府交通、工務與教育局權責，多為既有計畫可延續的工程項目，可分校逐步推動，一任內可看到成效。","sources":[]},
  // 設立家長諮詢與申訴平台
  "tyc4-2-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"諮詢與申訴平台可由教育局整合既有專線、網站與輔導資源設置，成本以系統與專責人力為主，經費小，一兩年內可上線。","sources":[]},
  // 五福重劃區規劃 0 至 6 歲整合托育園區
  "tyc4-3-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"學校用地改作托育設施需市府教育局評估無設校需求，並依都市計畫變更或公共設施多目標使用辦理，屬地方權責。整合園區的建築經費未說明，粗估數億元等級；評估、設計與興建四年內偏緊，但若用地確定可望動工。","sources":[]},
  // 五福重劃區納入藝文展演設施
  "tyc4-3-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"屬建議市府在重劃區公共設施中納入藝文空間，需教育局、文化局採納。設施規模、用地與經費皆未說明，無法估算；若僅要求納入規劃一任內可行，實際興建需視用地與預算。","sources":[]},
  // 提前規劃宏竹里生活圈公共設施
  "tyc4-3-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公園、人行道與停車空間屬市府權責；活化軍方閒置土地須國防部同意撥用或合作，屬跨層級協調的障礙。設施規模與經費未說明。","sources":[]},
  // 串聯濱海觀光廊道與桃林鐵路綠廊
  "tyc4-3-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"濱海觀光廊道與綠廊串聯屬市府權責，可分段推動。掩埋場轉型須待封場與穩定化評估，漁港清淤與觀景平台也需辦理工程與相關許可；政見未說明規模與經費，四年內可完成部分節點。","sources":[]},
  // 蘆竹新行政園區設計納入地方參與並增加綠地
  "tyc4-4-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"園區設計納入地方參與屬市府執行層面，說明會與設計調整成本在約 45 億元總經費內可吸收，增加綠地主要是配置調整。市府已表示決標後將廣納意見，議員可透過質詢與預算審議持續監督。","sources":[]},
  // 增設跳站快速公車路線
  "tyc4-4-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"新闢或調整公車路線屬市府交通局權責，透過路線規劃與營運補貼即可推動。路線數與經費未說明，一般快速公車路線補貼規模不大，一任內可上路。","sources":[]},
  // 增加蘆竹區小型公車路線，納入通勤與醫療接駁
  "tyc4-4-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"小型公車路線規劃與補貼屬市府交通局權責，每條路線年營運補貼粗估數百萬元，經費小。市府已表示重新評估並公告釋出路線，四年內可增加路線。","sources":[]},
  // 爭取恢復蘆竹往臺北國道客運班次並增設往新竹直達路線
  "tyc4-4-p3": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"國道客運路線與班次屬中央公路主管機關核准、業者經營，市府只能協調；說明中已協調尖峰增開 2 班。全面恢復與新增往新竹直達線受駕駛人力與業者營運考量限制。","sources":[]},
  // 在蘆竹區兒一公園旁增設營盤市民活動中心
  "tyc4-4-p4": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"市民活動中心屬市府民政局權責，且市府已表示優先推動。活動中心造價多為數千萬元等級，一任內可完成。","sources":[]},
  // 擴建幼兒托育機構與社區長照據點
  "tyc4-5-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"托育機構與長照據點的擴建屬市府社政權責，也有中央補助可以申請。但政見沒有說明數量、地點與期程，無從判斷規模與可行性。","sources":[]},
  // 加速區域聯外道路建設、優化大眾運輸路網
  "tyc4-5-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"聯外道路、大眾運輸與公設均屬市府權責，但未指明路段、路線或設施，無法估算經費與期程。","sources":[]},
  // 將公車到站準確率納入業者營運績效指標
  "tyc4-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公車營運評鑑與補貼指標由市府交通局訂定，將到站準確率納入只要修訂評鑑項目，現有動態系統就有資料可用，幾乎不需新增經費。","sources":[]},
  // 加速大園客運園區外圍道路拓寬，改善環區北路瓶頸
  "tyc5-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"道路拓寬屬市府權責，環區北路瓶頸位置明確。未說明拓寬長度與用地狀況，經費無法估算；若需取得私有地，徵收程序可能拉長期程，四年內有機會完成。","sources":[]},
  // 加速大園多項通勤道路瓶頸改善與新橋興建
  "tyc5-1-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"多項道路拓寬、瓶頸改善與新橋屬市府工務權責，而且是既有工程，要求的是加速。各案的經費與進度沒有說明；拓寬與電纜地下化常卡在用地取得與管線遷移，新建橋梁的工期也長，要全部完工並不容易。","sources":[]},
  // 航空城重建戶搬遷期限延後一年，並補齊安置住宅生活機能
  "tyc5-1-p2": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"搬遷期限涉及市府與交通部民航局共同執行的航空城計畫，需中央同意，屬跨層級協調。安置區生活機能配套多屬市府權責，部分設施興建需時。","sources":[]},
  // 大園客運園區規劃立體停車場並整體檢討停車配置
  "tyc5-2-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"立體停車場屬市府交通局權責。粗估數百格立體停車場造價數億元等級，財源未說明，用地與設計發包需時，一任內完工偏緊。","sources":[]},
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
  "tyc6-1-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府自辦的農機補助可以自行增列品項，只要修訂補助要點，配合辦理培訓與查核。新增品項單價不高，經費小，下一年度即可實施。","sources":[]},
  // 評估大溪第一公有市場重建並增設地下停車場
  "tyc6-1-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"市場改建屬市府經發局權責，市府已辦理活化與轉型評估。報導指出受建築使用年限限制，拆除重建短期難以推動，市府傾向分階段整建；增設地下停車場經費未說明。","sources":["https://news.ltn.com.tw/news/Taoyuan/breakingnews/5613002"]},
  // 推動豆渣轉作飼料的去化與示範模式
  "tyc6-4-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"媒合豆製品業者與養豬場屬農業局的輔導業務，經費小。豆渣作為飼料，須符合飼料與廢棄物再利用的相關規範，但已有業界做法可以參考，示範模式一任內可以建立。","sources":[]},
  // 大溪休閒農業區推動友善耕作與智慧農業，導入省工設備
  "tyc6-4-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"休閒農業區的示範輔導與省工設備補助屬農業局業務，也有中央農業部的相關補助可以申請。以單一農業區先行示範，規模小，一任內可見成效。","sources":[]},
  // 活化大漢溪河域與埔頂舊址，發展自行車道與運動休閒
  "tyc6-4-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"大漢溪為中央管河川，河岸使用需經河川管理機關許可，市府可申請設置自行車道與休閒設施，已有先例。未說明範圍與經費，埔頂舊址活化也需確認土地權屬，四年內可完成部分路段。","sources":[]},
  // 加速南桃園市立醫院或分院規劃，補足急重症醫療
  "tyc6-4-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"low","reason":"市府已規劃市立醫院八德總院與大溪、觀音、復興等分院，總院預計 123 年完工營運，議員能做的是監督並要求加速。醫院興建期程長，即使加速，一任內也只能推進到規劃、用地或設計階段，看不到開業。","sources":["https://news.cts.com.tw/cna/local/202610/202610283094810.html","https://news.ebc.net.tw/news/living/578621"]},
  // 營養午餐改採部分補助、部分自付
  "tyc7-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"午餐補助方式由市府自訂，改為部分自付可減少支出而非增加。主要爭議在政策取捨，執行上可在新學年度實施。","sources":[]},
  // 重新檢討中壢體育園區促參案的公益回饋設施
  "tyc7-1-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"促參案的規劃與契約由市府主辦機關決定，議員可以質詢、要求調整。如果案子已公告或簽約，變更公益回饋內容需要和民間機構重新協商，可能影響財務可行性與時程；增設游泳池等設施的經費也沒有說明。","sources":[]},
  // 中壢舊城再生整合跨局處，改善復興路人行環境並以商圈活動導入人流
  "tyc7-1-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"跨局處整合與商圈活動屬市府權限，可推動。復興路人行環境改善的範圍與經費未說明，無法估算；整體舊城再生成效需較長時間。","sources":[]},
  // 重新檢討環保公園開放機制，串聯新街溪步道斷點
  "tyc7-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公園開放機制屬環保局管理權責，調整開放時段與管理方式成本低。新街溪步道斷點串聯需與水務局協調，若涉及私有地或河道用地會稍慢，但規模不大，四年內可完成。","sources":[]},
  // 強化清潔隊資源回收分類稽核
  "tyc7-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"清潔隊作業稽核屬環保局內部管理事項，議員可透過質詢監督。強化稽核主要是作業流程與人力調度，成本低，短期內可落實。","sources":[]},
  // 加速布建社區型照護據點並簡化弱勢補助申請
  "tyc7-5-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"社區照護據點與補助流程屬市府社會局、衛生局權責。簡化申請流程容易推動，但照服員短缺為全國性結構問題，地方難以單獨解決。","sources":[]},
  // 檢討科技執法設置地點並定期公開執法數據
  "tyc7-5-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"科技執法設置地點由市府交通局與警察局決定，檢討選址、加強告示與定期公開數據都屬行政作為，成本低，一任內即可落實。","sources":[]},
  // 推動市民卡 2.0，以單一數位身分整合多重福利
  "tyc7-6-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"需市府資訊與社政、教育單位採納，議員可透過質詢推動。整合學生、身障等身分資格涉及不同主管機關的資料串接與個資授權，系統建置規模未說明，無法估算經費；一任內完成部分身分整合可行，全面整合需較長時間。","sources":[]},
  // 社宅研議生育延長租期與育兒修繕補助
  "tyc7-6-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"社宅租期與修繕補助規定屬市府住宅出租辦法，可由市府自行修訂。補助對象僅限社宅生育家庭，經費小，一任內可完成修法並實施。","sources":[]},
  // 市場改建研議攤商自願提前退場機制
  "tyc7-7-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市場改建與攤商安置屬市府市場主管機關權責，訂定自願退場的補償或獎勵機制，只要修訂自治法規或要點。經費規模取決於退場人數，金額小，可以配合改建時程辦理。","sources":[]},
  // 身障停車優惠建立統一車號登錄並開放線上申辦
  "tyc7-7-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"身障停車優惠屬市府交通局與社會局行政措施，建立車號登錄與線上申辦主要是資訊系統調整，經費小，一任內可完成。","sources":[]},
  // 研議處理私人土地遭廢棄車占用
  "tyc7-7-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"廢棄車處理屬環保局依廢棄物清理相關規定執行，私人土地涉及所有權人同意與告知程序，可參考他縣市作法訂定作業流程。主要是行政程序與拖吊、保管費用，經費小，四年內可完成研議並上路。","sources":[]},
  // 串聯莒光公園與滯洪池打造景觀廊帶，並納入公益回饋空間
  "tyc7-11-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"公園與滯洪池景觀串聯屬市府工務、水務單位權責，植栽與步道工程的經費中等。公益回饋空間若要納入既有開發案，需和開發計畫協調；景觀工程本身一任內可完成。","sources":[]},
  // 優先修繕龍興國中周邊人行道
  "tyc7-14-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"人行道修繕屬工務局常態養護業務，經費小。說明中已提及工務局答詢預計暑假進場施工，一任內可完成。","sources":[]},
  // 中壢體育園區規劃 50 公尺標準競賽游泳池與匹克球場
  "tyc7-14-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"體育設施興建屬市府權限，需市府採納。50 公尺標準競賽游泳池粗估需數億元，說明未提財源與期程；匹克球場經費小可較快完成。","sources":[]},
  // 建立公共設施瑕疵致傷的跨機關代位求償與追蹤機制
  "tyc7-16-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"國家賠償案件由市府各機關依國家賠償法處理，若瑕疵屬管線單位或其他機關的責任，可依法求償。建立跨機關的代位求償與追蹤流程屬行政程序的整合，成本低，一任內可以建立。","sources":[]},
  // 國中遷校新校區提出周邊施工規範、交通維持計畫與整地時程
  "tyc7-16-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求市府在師生進駐前提出施工規範、交通維持計畫與整地時程，屬質詢監督與行政規劃，主要成本是行政作業。國有地整理需要和國產署協調，但提出計畫本身沒有障礙。","sources":[]},
  // 人口稠密區放寬公共自行車站距並評估路側設站
  "tyc8-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公共自行車站點規劃屬市府交通局權責，放寬站距與路側設站為設站標準調整，經費小，一任內可完成。","sources":[]},
  // 補助公幼與國小課後照顧經費並增聘專職人力
  "tyc8-3-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"課後照顧補助與人力屬市府教育局權責。若各國小與公幼增聘專職人力，粗估 200 校、每人年薪約 60 萬元即約 1.2 億元／年，屬中等經費且財源未說明；人力招募亦需時間。","sources":[]},
  // 市民卡 APP 整合停車資訊與公車動態
  "tyc8-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市民卡 APP 系統整合與特約商店推廣屬市府權責，停車與公車資料多已有開放資料可串接，開發成本小，四年內可完成。","sources":[]},
  // 設置公托進校園示範點
  "tyc8-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"校園閒置空間改設公托屬市府社會局與教育局權責，其他縣市已有先例。單一示範點裝修與設備粗估數千萬元以內，並訂有 116 年盤點的明確期程，四年內可完成。","sources":[]},
  // 0 至 6 歲兒童門急診掛號費與部分負擔補助擴及一般家庭
  "tyc8-5-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"地方政府可用自籌財源補助就醫掛號費與部分負擔。擴及所有 0 至 6 歲兒童、每年反覆就醫，經費會隨門急診次數累積，粗估每年數億元，約占總歲出 0.1%–0.5%，而且沒有說明財源。補助辦法一任內可上路，主要的考驗是長期財政負擔。","sources":[]},
  // 研議學生通勤費用補助
  "tyc8-5-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"補助屬市府自治事項，可與既有通勤月票整合。對象範圍未說明；粗估若 10 萬名學生每月 600 元、全年 10 個月，約 6 億元，約占總歲出 0.3%，財源未說明。","sources":[]},
  // 路口導入 AI 視覺辨識與感應式延長綠燈號誌
  "tyc8-5-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"號誌控制屬市府交通局權責。行人偵測延長綠燈已有國內縣市試辦的先例，可先從學校、醫院、車站周邊做起。每處路口的設備與維護費不高，但擴大後總額會增加，且沒有說明財源。","sources":[]},
  // 優先評估捷運自機場捷運環北站往平鎮、龍潭延伸
  "tyc8-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"medium","reason":"屬爭取「評估」的一般政見，可行性研究由市府委託辦理，經費以千萬元計，相對市府年度歲出約 1,873 億元甚小。一任內可完成評估；後續建設仍需交通部審議與中央補助，不在此政見範圍。","sources":[]},
  // 醫美診所偷拍疑慮啟動跨局處專案稽查
  "tyc8-6-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"衛生局依醫療法可稽查診所，警察、消防、法務局可配合聯合稽查與申訴協助，屬市府既有職權。以既有人力執行，經費小，短期內即可啟動。","sources":[]},
  // 長者社福點數由 800 點提高至 1,200 至 1,500 點，可用於運動服務
  "tyc9-2-p0": {"level":"medium","authority":"medium","cost":"low","timeline":"high","reason":"點數由市府自訂。持卡約 40 萬人，粗估每人每月增 400–700 點，全數使用每年約 19–34 億元，約占總歲出 1–1.8%，財源未說明。市府另試算 1,200 點且可累積版本每年約 70 億元。","sources":["https://news.pchome.com.tw/society/tyenews/20260324/index-77431956670748343002.html","https://news.pchome.com.tw/living/nownews/20260729/index-78531481961604207009.html"]},
  // 與在地健身場館合作開設免費入門教練課程
  "tyc9-2-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府體育單位可以採購或補助民間健身場館開課，定期定額的入門課程經費小，下一年度就能編列試辦。","sources":[]},
  // 更新老舊公園設施、改善無障礙動線並增設寵物友善專區
  "tyc9-2-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公園設施更新、無障礙改善及寵物友善區屬市府常態公園維護業務，可分批以年度預算辦理，單一公園改善經費有限，一任內可見成效。","sources":[]},
  // 檢視改善省道、國道銜接路段標線，提升夜間行車安全
  "tyc9-2-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市區道路標線屬市府權責，省道、國道路段須由交通部公路局或高公局改善，市府可協調。標線改善經費小，一任內可完成；商圈停車研議也屬市府權責。","sources":[]},
  // 加速老舊校舍整建並強化通學步道安全
  "tyc9-2-p4": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"校舍整建與通學步道屬市府教育局與工務局權責，可申請中央補助。單一學校改建粗估數億元，未說明校數與財源；校舍改建從規劃到完工常需三至五年，四年內可完成部分學校。","sources":[]},
  // 評估捷運路網延伸至楊梅，加速國道高架延伸頭份工程
  "tyc9-2-p5": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"國道拓寬屬交通部高速公路局主辦，地方只能配合用地與都市計畫；捷運延伸楊梅需市府規劃並經中央核定。市府已重新踏勘內壢宋屋楊梅線路廊，評估可在四年內推進；瓶頸道路改善屬市府權責，但未說明路段與經費。","sources":["https://www.chinatimes.com/realtimenews/20261016002253-260421"]},
  // 爭取半導體與 AI 產業鏈進駐龍潭科學園區三期，加速擴大幼獅工業區
  "tyc9-2-p6": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"龍科三期由國科會與竹科管理局主導，廠商是否進駐取決於企業投資決策，地方只能配合周邊交通、水電等配套；幼獅擴大工業區二期則有市府都計通檢可推。龍科三期目標 118 年底前完成用地取得、119 年起開發，四年內可見進展但未必完成進駐。","sources":["https://news.cts.com.tw/cna/local/202608/202608143067329.html"]},
  // 四維國小啟動校舍興建規劃並評估增設幼兒園兩歲專班
  "tyc9-3-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"校舍規劃與增設兩歲專班屬教育局權責。增建需等國防部用地撥用完成，這是時程的主要變數；校舍興建經費沒有說明，從規劃、設計到完工通常需要 4 年以上。","sources":[]},
  // 加速中興路周邊通學廊道改善與楊明國小校舍重建
  "tyc9-3-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"通學廊道改善與校舍重建屬工務、教育單位的權責。廊道改善一任內可完成；老舊校舍重建則要經規劃、設計、發包與分期施工，經費通常達數億元，政見沒有說明規模，一任內未必能完工。","sources":[]},
  // 加速楊明國小周邊道路用地取得與動工
  "tyc9-4-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"市區道路的用地取得與開闢屬市府工務權責。政見沒有說明道路長度與需徵收的面積，經費無法估算；徵收或協議價購常因地主協商延宕，是一任內完工的主要變數。","sources":[]},
  // 依法維護梅江國宅周邊道路公共通行權
  "tyc9-4-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"維護公共通行權需市府依既成道路認定或協調、徵收等方式處理，涉及私人土地權利，可能需經司法或徵收程序。若需徵收，經費視面積而定，說明未提，無法估算。","sources":[]},
  // 推動「小黃公車」
  "tyc9-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"預約共乘的計程車公車是交通部公路主管機關推動的偏鄉需求反應式運輸模式，已有多個縣市實施，市府可申請中央補助辦理，並結合敬老愛心卡。經費小，一任內可以上路。","sources":[]},
  // 楊梅自立停車場由新工處統籌並整合多目標使用
  "tyc9-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"medium","reason":"停車場開發與主辦機關調整屬市府權責，市府已答詢經費將提高到 3.2 億元，約占總歲出 0.17%，財源有著落。多目標使用要經規劃、設計與發包，興建大約需 3–4 年，一任內完工有可能，但時程偏緊。","sources":[]},
  // 活化楊梅火車站舊宿舍空間並改善小楊梅步道
  "tyc9-6-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"步道防滑改善屬市府權責，成本小、可快速完成。車站舊宿舍若屬鐵路機構資產，市府需取得同意或租用後才能活化，且歷史建物修繕經費與期程未說明，是主要變數。","sources":[]},
  // 編列預算推動楊梅污水下水道與治水工程
  "tyc9-6-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"污水下水道與治水工程由市府水務局推動，多仰賴中央補助。未說明工程範圍與金額，污水下水道建設多以十億元計、多年分期，四年內可見部分接管與排水改善，難以全面完成。","sources":[]},
  // 改善既有自行車道斷點與高低落差，串聯龍潭大池與十一份觀光園區
  "tyc10-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"自行車道斷點與高低差改善屬市府交通、工務局權責，議員可透過質詢與預算審議督促。工程以局部銜接、整平為主，經費相對小，一任內可完成並看到路網串聯成效。","sources":[]},
  // 在地節慶活動結合商圈與市場導流，並增加民眾可參與的體驗活動
  "tyc10-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"節慶活動結合商圈導流與體驗活動，屬市府文化、經發與教育單位的業務，可利用既有活動預算辦理，成本低，下一次節慶就能實施。","sources":[]},
  // 爭取國道客運尖峰時段增開由龍潭直接發車的班次
  "tyc10-3-p0": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"國道客運班次與發車站屬中央公路主管機關核准、業者經營，市府與議員僅能反映與協調。增開區間班次經費不大，但受業者營運意願與駕駛人力限制。","sources":[]},
  // 捷運橘線延伸龍潭時納入龍潭科學園區支線並於關鍵節點設站
  "tyc10-4-p0": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"unclear","schedule":"medium","stage":"橘線可行性研究（含龍科支線）2026 年 10 月提報交通部審議","horizon":"約 12–15 年","reason":"市府已將長約 4.37 公里、4 站的龍科支線納入橘線可行性研究並提報交通部，訴求已列入正式規劃。後續須經中央審議、綜合規劃核定，財務分攤尚未確立。","sources":["https://n.yam.com/Article/20261028519189"]},
  // 加速在梅龍路、梅花莊周邊設立新國小
  "tyc10-4-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"設校屬市府教育局權責，議員負責爭取與監督。說明已載明校地約 1.8 公頃、目標 118 學年度招生，期程落在一任內；新建國小經費數億元等級但為教育常態支出，未說明財源。","sources":[]},
  // 拓寬工二路、民族路與龍源路口等瓶頸路段，開闢大同路 226 巷
  "tyc10-4-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"道路拓寬與巷道開闢屬市府工務權責，議員可質詢、爭取預算。所列路段未說明拓寬範圍與用地取得方式，經費無法估算；若涉及私有地徵收或拆遷，協議與徵收程序可能拉長期程，四年內仍有機會完成部分路段。","sources":[]},
  // 龍潭轉運站啟用後整合公車、小巴、公共自行車與號誌，研議增設直達機場路線
  "tyc10-4-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"龍潭轉運站已在 2026 年 9 月底啟用，整合公車、小巴、自行車與號誌屬市府交通局權責。增設機場直達路線需要客運業者配合，可以用營運補貼或招標開闢；成本有限，一任內可完成。","sources":["https://n.yam.com/Article/20260927263481"]},
  // 檢討龍潭都市計畫，增加科學園區周邊住宅供給
  "tyc10-4-p4": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"都市計畫檢討屬市府都發局權責，都發局已答詢將發包研究，研究經費不高。農業區變更為住宅區須經市都委會與內政部審議，並受農地政策限制，從研究到發布實施通常要好幾年，一任內未必能增加住宅供給。","sources":[]},
  // 敬老愛心卡研議擴大用途，納入診所掛號費、高鐵等
  "tyc10-4-p5": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"敬老愛心卡用途由市府訂定。市府已宣布自 116 年起新增醫療補助、肌力訓練等用途，診所掛號費部分已有基礎；納入高鐵涉及跨縣市與業者協商，且單趟票價高，經費壓力較大。","sources":["https://news.pchome.com.tw/politics/cnews/20260805/index-78591278533529227001.html"]},
  // 龍潭科學園區三期擴建要求市府做好徵收溝通、安置補償與生態評估
  "tyc10-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求市府做好徵收溝通、安置補償與生態評估，屬議員監督範圍。市府已因應園區三期推動周邊區段徵收地主意願調查，相關溝通程序進行中，可透過質詢持續監督。","sources":["https://udn.com/news/story/7324/9793609"]},
  // 舊圖書館旁公有停車場改建立體停車場，並開闢龍青路、東華街周邊道路
  "tyc10-5-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"立體停車場與道路開闢屬市府權責。停車場改建數億元等級、財源未說明；道路開闢需用地取得，一任內完工有難度。","sources":[]},
  // 拓寬湧光路，並爭取沿自由街、工二路、龍平路的橫向外環道路
  "tyc10-5-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"道路拓寬與新闢屬市府權責，議員可爭取預算。拓寬與外環道路均需徵收用地，路段長度與經費未說明；用地取得常是主要瓶頸，外環道路一任內完工有難度。","sources":[]},
  // 推動龍潭都市計畫變更，活化原圖書館、區公所、代表會所在的行政區土地
  "tyc10-5-p3": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"都市計畫變更由市府都委會審議，主要計畫變更須報內政部核定。經費小，但審議程序常需二至四年。","sources":[]},
  // 爭取已報編未開發的烏樹林工業區納入中央工業主管機關所屬工業區
  "tyc10-5-p4": {"level":"low","authority":"low","cost":"unclear","timeline":"low","reason":"烏樹林工業區屬報編未開發的工業區，道路與公共設施不足。要納入經濟部所屬工業區，必須由中央接手開發或管理，決定權在中央，市府與議員只能爭取；這類轉換也缺少明確的先例，一任內難以完成。","sources":["https://www.chinatimes.com/newspapers/20260529000635-260107"]},
  // 推動機場捷運由中壢經平鎮延伸至龍潭、捷運綠線由八德延伸至龍潭
  "tyc10-5-p5": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"low","schedule":"low","stage":"構想階段；市府另以橘線及龍科支線規劃平鎮、龍潭軌道","horizon":"約 15 年以上","reason":"捷運路線需市府規劃、交通部審議及行政院核定，屬需中央核定的地方建設。所提機場捷運經平鎮延伸龍潭與綠線八德延伸龍潭，未見已列入計畫；市府目前是以橘線可行性研究（含龍科支線）提報交通部，優先推平鎮、龍潭段。兩條延伸線未說明經費與路線，財務與期程無從評估。","sources":["https://news.cts.com.tw/cna/local/202610/202610283094723.html"]},
  // 推動新梅龍快速道路，以及板橋沿大漢溪左岸至龍潭的環河快速道路
  "tyc10-5-p6": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"low","schedule":"unclear","stage":"構想階段，未說明路線與規劃進度","horizon":"約 15 年以上","reason":"快速道路屬中央公路主管機關與市府合作推動，跨縣市路段需中央核定與補助。環河快速道路從板橋沿大漢溪左岸至龍潭，跨新北與桃園、沿河川區域，涉及河川管理與環評；政見未說明路線長度、經費與財源，粗估為數百億元等級，期程無法判斷。","sources":[]},
  // 爭取在北二高橋下新增匹克球場
  "tyc10-5-p7": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"國道橋下空間由交通部高速公路局管理，市府須向高公局申請使用。國道橋下設置運動場已有不少先例，球場鋪面與照明費用低，一任內可完成。","sources":[]},
  // 爭取提高客家事務主管機關對地方社團的補助款
  "tyc10-5-p8": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"地方客家事務機關的社團補助可透過議會預算審議爭取，中央客家主管機關的補助則需另行爭取。社團補助加碼金額通常為數百萬至千萬元級，經費小，可在年度預算落實。","sources":[]},
  // 新屋埤運動公園用地儘速取得或研議替代方案
  "tyc11-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"公園用地取得屬市府權限，可以價購、徵收或租用處理。用地面積與地價未說明，經費無法估算；地主有意收回，時程有壓力，但可研議替代方案。","sources":[]},
  // 改善海岸侵蝕熱點護岸，保留部分緩坡或步道兼顧親水
  "tyc11-1-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"海岸防護設施屬市府與中央水利單位分工辦理，需市府採納。護岸改善工程規模與熱點範圍未說明，無法估算經費；工法調整需配合海岸防護計畫，一任內可完成部分熱點。","sources":[]},
  // 協助加速農會穀倉完成審查並啟用
  "tyc11-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"穀倉已投入逾 6,500 萬元，剩餘工作是審查與啟用，市府可協助加速建管或相關行政程序，額外經費小。若沒有重大違規須補正，四年內可啟用。","sources":[]},
  // 盤點觀音具客庄歷史的埤塘、水圳與周邊空間，與居民共同規劃並爭取中央水環境改善計畫
  "tyc12-1-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"盤點埤塘與水圳並與居民規劃可由市府辦理，經費小。中央水環境改善計畫採競爭型補助，能否獲核定不確定，是主要變數。","sources":[]},
  // 請市府結合農會協助觀音青年農民參加中央青農輔導遴選，並連結品牌、加工與通路輔導
  "tyc12-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"協助青農參加中央遴選與品牌、加工、通路輔導，市府農業局可與農會合作辦理，經費以輔導與行銷活動為主，成本小，四年內可實施。","sources":[]},
  // 請市府媒合藝文團隊進入觀音學校開設藝術課程
  "tyc12-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"媒合藝文團隊入校屬市府教育、文化單位可辦理事項，經費以講師鐘點費為主，規模小，可立即推動。","sources":[]},
  // 在觀音區七富溪段市場用地設置現代化傳統市場
  "tyc12-2-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公有市場興建屬市府經發局權責，已有市場用地約 1,902 平方公尺且市府承諾完成評估。新建市場經費數億元等級、財源未說明，從評估、設計到完工一任內完成較緊。","sources":[]},
  // 重啟觀音都市計畫檢討，整體規劃觀音、新坡、草漯三大生活圈
  "tyc12-2-p1": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"都市計畫通盤檢討由市府都發局辦理，都發局已答詢將重啟，委託規劃經費不高。但主要計畫變更要經市都委會與內政部審議，整合三大生活圈的檢討通常要好幾年，一任內未必能發布實施。","sources":[]},
  // 增設聲音照相科技執法，並在長直路段施作震動標線等防飆車措施
  "tyc12-2-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"聲音照相科技執法已有法源，國內多個縣市已在使用；震動標線屬道路交通設施，由市府交通局決定設置。設備與標線的費用有限，一任內可以完成。","sources":[]},
  // 增加觀音往返高鐵站小巴的尖峰與假日班次
  "tyc12-2-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"小巴路線班次由市府交通局核定並補貼，增加尖峰與假日班次只需調整營運契約與補貼，成本有限，短期內可以實施。","sources":[]},
  // 重新檢討觀音納骨塔收費與回饋範圍
  "tyc12-2-p4": {"level":"high","authority":"high","cost":"medium","timeline":"high","reason":"納骨塔收費與回饋範圍由市府殯葬管理自治法規訂定，議員可提案修正或透過審議要求檢討。回饋範圍擴大屬中小額支出。","sources":[]},
  // 公益性社團借用市民活動中心提供租金優惠
  "tyc12-2-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市民活動中心收費標準由市府或區公所訂定，調整優惠屬行政措施，減收租金影響有限，可立即推動。","sources":[]},
  // 天然氣接收站公共藝術經費留用觀音，打造展演空間與旅遊服務中心
  "tyc12-3-p0": {"level":"low","authority":"low","cost":"high","timeline":"medium","reason":"天然氣接收站的公共藝術經費依文化藝術相關法規由興辦機關（國營事業）辦理，用途限於公共藝術設置；拿約 9 億元蓋展演空間與旅遊服務中心，與公共藝術經費的法定用途不同。市府只能協調爭取，能否挪作建築與觀光設施有法規障礙。","sources":[]},
  // 加速開放富林溪防汛道路與步道，分流工業區車潮
  "tyc12-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"防汛道路開放通行屬市府水務與交通單位權責，主要為既有道路的開放與安全設施，經費小，一任內可完成。","sources":[]},
  // 超高壓變電所若推動，應同步以主要電纜地下化作為回饋
  "tyc12-3-p2": {"level":"medium","authority":"low","cost":"medium","timeline":"medium","reason":"超高壓變電所與輸電線路由國營電力事業興建，電纜地下化回饋需該事業同意並負擔經費，市府只能協調爭取。地下化經費視長度可達數億元，期程依變電所計畫而定；屬有條件的訴求，可透過地方協商取得。","sources":[]},
  // 檢討並提高焚化爐垃圾處理回饋金
  "tyc12-3-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"焚化廠回饋金標準由市府訂定，可透過修正回饋辦法調整，議員亦可透過預算審議推動。提高幅度未說明，回饋金財源與垃圾處理費相關，提高後需檢討財源，屬可克服的財務考量。","sources":[]},
  // 建立原住民健康地圖與長期追蹤制度
  "tyc13-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"健康地圖與追蹤制度屬市府衛生局、原民局可執行的資料整合與服務規劃，主要成本為資料系統與人力，粗估每年數百萬至千萬元，相對全市約 1,873 億元歲出極小。需處理個資與跨機關資料串接，但四年內可建置並看到初步成果。","sources":[]},
  // 媒合個管師、營養師與醫療團隊巡迴進駐文化健康站
  "tyc13-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"媒合醫療團隊巡迴文化健康站屬市府原民局與衛生局可協調的業務，現有 38 處中已有 26 處有醫療服務，補足其餘 12 處成本小，四年內可完成。","sources":[]},
  // 改善長者前往文化健康站的交通接送
  "tyc13-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"文化健康站交通接送可由原民局編列交通車或計程車補助，屬地方權責。經費以車輛租賃與補助為主，每年數百萬至千萬元級，四年內可實施。","sources":[]},
  // 由副市長層級召集跨局處原住民政策會議
  "tyc13-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"由副市長召集跨局處會議屬市府內部行政安排，幾乎不需經費，市長同意後即可召開。","sources":[]},
  // 返鄉參加歲時祭儀交通補助增為一年兩次
  "tyc13-2-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"返鄉交通補助屬市府原民業務，增加補助次數經費有限，可以年度預算支應。其他縣市亦有推動原住民歲時祭儀返鄉交通補助的先例。","sources":["https://www.cna.com.tw/postwrite/chi/445629"]},
  // 修正原住民族發展及保障自治條例，增設文化活動設施設備補助
  "tyc13-2-p2": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"修正自治條例屬議員可直接提案的職權，增設文化活動設施設備補助項目屬地方自治事項。補助金額可由年度預算控制，經費小；條例修正若獲議會通過，任期內即可施行。","sources":[]},
  // 保留各族歲時祭儀既有補助，跨族群交流另行規劃
  "tyc13-2-p3": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"保留既有祭儀補助、另編跨族群交流預算，屬議員預算審議可直接把關的事項。維持既有補助不增加額外成本，另行規劃的交流活動經費小，可在下一年度預算落實。","sources":[]},
  // 整合學校空間、志工與社區據點補強原住民學童課後照顧
  "tyc13-2-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"運用學校空間、志工與社區據點補強課後照顧，屬教育局、原民局可以協調的業務，主要支出是人力與活動費，規模小。整合既有資源的做法在一任內可見成效。","sources":[]},
  // 通盤盤點 12 區需求，推動平鎮、桃園、楊梅等地的原住民文化與集會場域
  "tyc13-2-p5": {"level":"high","authority":"medium","cost":"medium","timeline":"medium","reason":"原住民文化與集會場域屬市府原民局權責，平鎮基地與楊梅二期已有具體進度，二期約 1 億多元並將爭取中央補助，經費規模可負擔。","sources":[]},
  // 國中小學生每學期提供一組免費文具
  "tyc13-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"文具補助屬市府教育局可辦理的福利措施。每組文具約數百元，以全市國中小學生計，粗估每年約一至二億元，占市府年度歲出約 1,873 億元不到千分之一，可以年度預算支應。","sources":[]},
  // 試辦獨居原住民長者及失能者智慧手環
  "tyc13-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"試辦智慧手環屬市府原民與社政單位可辦理事項，試辦規模經費有限，一任內可完成。","sources":[]},
  // 非設籍復興區原住民長者敬老愛心卡點數提高至 1,000 點，並開放扣抵就醫掛號費
  "tyc13-3-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"敬老愛心卡的點數與用途由市府自訂，市府已宣布 116 年起擴大用途，包括 100 點的醫療補助，開放扣抵掛號費有現成機制可以沿用。提高非設籍復興區原民長者的點數，對象人數有限，經費小。","sources":["https://news.tvbs.com.tw/life/4006237"]},
  // 建置線上部落大學平台，整合線上課程、族語教學與文化影音
  "tyc13-3-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"線上平台屬市府原民局可委辦的數位建置，族語與文化影音可整合既有資源。建置與維運粗估每年數百萬元，占歲出比例極小；平台開發一般一至兩年可上線，四年內可完成。","sources":[]},
  // 提高原住民護理師與社工進用比例
  "tyc13-3-p4": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"市府社工進用可在考試與約聘制度內提高原住民比例，經費小；護理師多在醫療機構任職，市府只能以獎勵或培育方式鼓勵。原住民護理與社工人才供給有限，四年內能提高但幅度受限。","sources":[]},
  // 輔導原住民企業品牌建立、通路媒合、優先採購與經營培訓
  "tyc13-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"品牌輔導、通路媒合與經營培訓屬市府原民局與經發局可辦理的業務，優先採購可依既有原住民族工作權保障規定推動。經費以委辦與活動為主，成本小，四年內可實施。","sources":[]},
  // 建立原住民運動選手主動選才、培訓與參賽輔導機制
  "tyc13-5-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"由體育與原民主管機關建立選才培訓機制屬市府權限內行政措施，經費主要為培訓與參賽補助，規模不大，一任內可建立制度並見初步成效。","sources":[]},
  // 原住民學生比例高的學校結合文化課程、職涯探索與產業體驗
  "tyc13-5-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"文化課程與職涯探索可由教育局在校訂課程與既有計畫內推動，屬地方教育權責。經費以課程、講師與參訪費用為主，每年數百萬元級，占歲出極小，四年內可實施。","sources":[]},
  // 研議適合部落的聚落型住宅，協助青年返鄉
  "tyc14-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"研議部落住宅屬市府原民、住宅單位的權責。部落多在非都市土地，常涉及原住民保留地、山坡地與建築管理限制，要真正興建還須處理土地使用與財源；研議一任內可完成，但規模與經費都沒有說明。","sources":[]},
  // 加碼原住民大專生住宿補助，並與大專院校協調宿舍資源
  "tyc14-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"住宿補助加碼屬市府原民局自辦福利，以數千名學生每人每年數千至一萬元粗估，約數千萬元以內，經費小。與大專院校協調宿舍需對方配合，成效不確定，但補助部分可在下年度預算落實。","sources":[]},
  // 復興區文化健康站串聯智慧醫療，經同意後應用長者健康量測資料
  "tyc14-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"文健站由市府原民局主管，復興區有 14 處，規模有限，量測設備與資料串接的費用不高。在長者同意的前提下運用健康資料，符合個資法；一任內可完成建置。","sources":[]},
  // 跨局處依各里特色發展復興區主題文化旅遊
  "tyc14-1-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"主題文化旅遊屬市府觀旅局、原民局可跨局處推動的行銷與輔導工作，經費以規劃、活動與小型設施改善為主，每年數百萬至千萬元級。觀旅局已表示將盤點原鄉旅遊資源，四年內可推出路線與活動。","sources":[]},
  // 媒合原住民專長人才與大專學生投入文化健康站服務
  "tyc14-1-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"人才媒合與學生服務屬原民、社政單位可自行試辦的業務，需市府採納執行。主要成本為交通補貼、培訓與保險，規模小；以試辦方式推動，一任內可見成效。","sources":[]},
  // 擴大原住民心理健康服務年齡範圍，導入具文化敏感度的諮商人力
  "tyc14-1-p5": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"擴大服務年齡範圍屬市府原民與衛生單位可調整的行政措施，經費不大。但具文化敏感度的諮商人力供給有限，招募培訓需時間，為主要障礙。","sources":[]},
  // 整理族人可申請的資源與對應窗口，並加強跨局處協調
  "tyc14-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"整理資源清單與窗口、加強跨局處協調屬市府行政作業，經費極小，一任內可完成。","sources":[]},
  // 爭取部落在地醫療照護點與行動醫療
  "tyc14-3-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"部落醫療照護點與巡迴醫療屬市府衛生局權責，可結合中央偏鄉醫療計畫。設點數量與經費未說明，偏鄉醫事人力不足是主要障礙。","sources":[]},
  // 擴大原鄉弱勢家庭扶助，強化幼兒教育與原鄉學童學習資源
  "tyc14-3-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"弱勢扶助與原鄉教育資源屬市府社會局、教育局與原民局權責，但未說明扶助對象、項目與規模，無法估算經費與期程。","sources":[]},
  // 扶植部落在地產業與特色旅遊，創造青年留鄉機會
  "tyc14-3-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只寫扶植部落產業與特色旅遊、創造青年留鄉機會，未說明具體措施、對象或經費，資訊不足以判斷可行性。","sources":[]},
  // 加速推動復興區醫療、行政與社福園區
  "tyc14-6-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"整合醫療、行政與社福設施的園區屬市府規劃權責，可分期先做。未說明規模與經費，粗估為數億元等級；山區用地、建築與醫療人力是主要限制，四年內可完成部分設施，全區完成需更久。","sources":[]},
  // 結合區農會既有空間設置在地長照服務據點
  "tyc14-6-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"結合農會既有空間設置長照據點，屬市府衛生、社政單位常態業務，可申請中央長照基金補助，利用既有空間降低成本，一任內可完成。","sources":[]},
  // 強化復興區無人機隊訓練與設備，提升山區救災效率
  "tyc14-6-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"無人機隊訓練與設備屬市府消防局權責，救災用無人機每架粗估數十萬至百萬元，經費小，訓練與採購一兩年內可完成。","sources":[]},
  // 衛生單位主動稽查醫美診所
  "tyc14-6-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"醫療機構稽查屬市府衛生局權限，主動稽查屬常態行政措施，經費小，可立即推動。","sources":[]},
  // 改善族語教師待遇，鬆綁資格認證與聘用辦法，建立培育與補充機制
  "tyc14-7-p0": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"族語教師資格認證與聘用辦法屬中央教育與原住民族主管機關訂定，地方無法自行鬆綁；改善待遇則可由市府自編預算加給，經費小。培育補充機制可由市府辦理，但師資養成需時。","sources":[]},
  // 推動族語教學數位化，發展數位教材與線上平台
  "tyc14-7-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"族語數位教材與線上平台可由市府原民、教育單位推動，並可結合中央既有族語數位資源，經費小，一任內可完成。","sources":[]},
  // 檢討原住民租金補貼申請門檻與補助機制
  "tyc14-7-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"檢討補助門檻需市府原民單位採納；中央亦有租金補貼制度，地方可調整的範圍取決於補助來源。調整幅度未說明，經費無法估算。","sources":[]},
});

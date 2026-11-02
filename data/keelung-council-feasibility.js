/*
 * 2026 基隆市議員政見：可行性評估
 *
 * 評估日期：2026-11-02。由本站依統一標準評估，不是專家意見。
 * 評估時政見已匿名並打亂順序，評估者不知道每則政見屬於哪位候選人。
 * 議員政見的「權責」依議員職權判斷（見方法說明第 6 節）：需要市府採納執行屬常態，不拉低總評。
 * 一般政見與長期建設的評估面向同 new-taipei-feasibility.js。
 * 預算比較基準：基隆市 116 年度歲出 287.5 億元，不含債務還本（同 keelung-feasibility.js）。
 * 2026-11-02 經 Codex 獨立查核、逐條裁決後修正（事實、來源、粗估與評等一致性）。
 */
window.FEASIBILITY = Object.assign(window.FEASIBILITY || {}, {
  // 建立重大事件改善追蹤機制並定期公開進度
  "klc1-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"建立重大事件改善追蹤與公開機制屬市府行政作為，議員可透過質詢與決議要求；以既有管考制度擴充即可，經費小，一任內可建立。","sources":[]},
  // 天災造成土石崩塌時由市府先行搶修，直接動用災害預備金
  "klc1-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"災害防救法與預算法已允許地方政府動支災害準備金先行搶修，再向中央申請補助，屬市府權責與既有制度，主要是作業流程調整，經費依災情而定。","sources":[]},
  // 道路拓寬工程併同改善排水，加寬側溝並設深層陰井
  "klc1-3-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"道路拓寬工程已在市府規劃中，將側溝加寬與深層陰井納入設計屬設計調整，可在設計階段由市府採納。排水設計內容、工程總額與主工程期程均未說明，增加的經費無法估算。","sources":[]},
  // 和豐街口邊坡優先辦理水土保持
  "klc1-3-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"邊坡水土保持與滯洪池、抽水機組維護屬市府權責，可爭取中央補助，設施維護可立即執行。邊坡範圍、地質與治理工法未說明，經費無法估算，需先調查設計，工期視工法而定。","sources":[]},
  // 建議出售長期虧損的市有觀景塔設施
  "klc1-3-p2": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"出售市有財產需依地方公有財產管理規定經議會同意，屬市府權責；但觀景塔為特殊用途設施，市場買家有限、可能流標，處分程序需時。","sources":[]},
  // 改建後的市立田徑場設施免費開放市民使用
  "klc1-3-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"田徑場收費屬市府自治事項，議員可透過質詢與預算審議要求調整收費規定或研議差別費率。現況已部分實施：跑道區採 24 小時免費開放，戶外跑道、籃球場及網球場於 2026 年 12 月 31 日前試營運期間免費（現況，非政見內容）。其餘設施的收費標準與長期免費造成的收入影響尚無資料，經費無法估算。","sources":["https://www.klcg.gov.tw/tw/klcg1/3168-318045.html","https://www.klcg.gov.tw/tw/development/2631-323149.html"]},
  // 加強巡查故障的有聲號誌
  "klc1-3-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"有聲號誌巡查維護屬市府交通單位既有業務，加強巡查頻率經費極小，可立即執行。","sources":[]},
  // 儘速整修老舊破損的古蹟步道
  "klc1-3-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"古蹟步道整修屬市府文化與工務權責，須依文化資產保存法程序辦理；步道修繕經費屬小額至中額，一任內可完成。","sources":[]},
  // 爭取中正區戶外共融遊戲場與親子友善空間
  "klc1-4-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"共融遊戲場需市府覓地並編列建置經費，各縣市已普遍設置，一任內可完成。中正區內的地點、數量與規模未說明，經費無法估算；其餘兒少意見表達與親子服務內容較抽象。","sources":[]},
  // 在八斗子興建旗艦型戶外共融遊戲場
  "klc1-4-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"旗艦型共融遊戲場需市府選定用地並編列建置經費，各縣市已有先例。八斗子僅指出區域，基地、面積與設施內容未說明，經費無法估算；期程視選地而定。","sources":[]},
  // 建立青少年心理健康支持網絡
  "klc1-4-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"心理諮詢專線或線上諮詢可委外辦理，經費不大；但青少年福利基地需覓得場地、編列人力與營運經費，說明未交代規模與財源，設置期程視場地取得而定。","sources":[]},
  // 分階段改善新豐街壅塞
  "klc1-4-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"號誌與標線優化、人行環境改善屬市府權責，短中期可完成；替代聯外道路僅承諾評估，評估工作可於任內完成，實際興建不在本項範圍。改善路段與規模未說明，經費無法估算。","sources":[]},
  // 爭取國道客運尖峰增班、延後週五週六末班車、假日提早首班車
  "klc1-4-p4": {"level":"medium","authority":"low","cost":"medium","timeline":"medium","reason":"國道客運路線與班次由中央公路主管機關核定、業者營運，地方只能協調爭取；增班與延長營運時間牽涉司機人力與業者成本，候車處改善則屬市府權責。","sources":[]},
  // 改善學校、市場、社區周邊人行環境
  "klc1-4-p5": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"人行道與騎樓整平、照明、行穿線改善屬市府權責，可分段施作並爭取中央人本交通補助。路段、長度與騎樓權屬未說明，經費無法估算，任內可完成的範圍視路段而定。","sources":[]},
  // 強化社區長照、喘息服務與家庭照顧者支持
  "klc1-4-p6": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"社區長照與喘息服務以中央長照經費為主、市府執行；說明空白，未提出具體增加項目或規模，資訊不足。","sources":[]},
  // 推動職業傷病評估、復健與重返職場支持服務
  "klc1-4-p7": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"職業傷病評估、復健與復工支持屬勞政業務，市府可依勞工職業災害保險及保護法配合中央推動。說明空白，未交代服務內容、服務量與辦理方式，無法估算經費與期程。","sources":[]},
  // 支持將長者敬老禮金加碼延續一年以上
  "klc1-4-p8": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"敬老禮金加碼屬市府自治事項，議會不能自行增列支出，只能在市府編列後審議支持。加碼金額、適用人數與延續期間未說明，「財政許可」只是條件，經費無法估算。","sources":[]},
  // 建立服務案件追蹤與定期回報機制
  "klc1-4-p9": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"建立服務案件追蹤與定期回報機制，可由議員服務處自行建置，經費極小，一任內可完成。","sources":[]},
  // 推動老街活化並串聯港區周邊觀光點
  "klc1-6-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"老街活化與景點串聯屬市府觀光與文化權責，但說明僅為借鏡國外經驗的構想，且自述尚非正式政見，未說明具體作法、範圍與經費，資訊不足以判斷。","sources":[]},
  // 整頓海產街與美食街的宰客爭議，振興觀光
  "klc1-7-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"整頓消費爭議可透過標價稽查、消保申訴等既有行政手段，屬市府權責；但只說參考日韓市場模式，未說明具體措施、範圍與經費，資訊不足以判斷。","sources":[]},
  // 協助曾從事家庭代工的女性重返職場
  "klc1-7-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"開班授課或培訓文化導覽員可運用勞政職訓與文化單位既有資源，屬市府權責，一任內可辦理。未說明開班規模與對象人數，經費無法估算。","sources":[]},
  // 協助申請寵物疫苗與絕育補助，爭取寵物福利
  "klc1-7-p2": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"協助民眾申請既有的寵物疫苗與絕育補助，屬議員選民服務，運用既有補助制度即可，不需額外經費，一任內即可執行。標題另提「爭取寵物福利」，但未說明具體內容，不列入評估。","sources":[]},
  // 倒塌擋土牆動支緊急預備金儘速復建
  "klc2-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"擋土牆倒塌屬災後搶修，市府可依預算法動支災害準備金或第二預備金辦理；單一擋土牆復建屬中小型工程，可在短期內完成。","sources":[]},
  // 幼兒園不當對待案啟動完整行政調查並檢討準公共化資格
  "klc2-2-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求主管機關依幼兒教育及照顧法與兒少權益法啟動調查、檢討準公共化資格，屬議員監督職權，執行端為既有行政程序，不需額外經費。","sources":[]},
  // 建議市府建立公開平台，讓居民與民意代表的建議事項可供檢視與監督
  "klc2-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"建置公開平台屬市府行政作為，需市府採納；議員亦可憑質詢與預算審議持續要求。平台多以既有資訊系統擴充，經費小，一任內可上線。","sources":[]},
  // 推動老屋延壽
  "klc2-5-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"老屋延壽可涉及結構補強補助、外牆修繕或都更，說明明確指出未說明具體做法，無法估算規模與期程。","sources":[]},
  // 推動設置寵物公園
  "klc2-7-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"寵物公園需市府提供用地並編列建置與維護經費，各縣市已有設置先例。未說明地點與規模，經費無法估算；用地取得是主要變數，期程視覓地而定。","sources":[]},
  // 增設匹克球場
  "klc2-8-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"增設匹克球場屬市府權責，內容是請市府盤點適合地點增設，多個縣市已有設置先例，一任內可完成盤點與設置。地點、數量與設置方式均未說明，經費無法估算。","sources":[]},
  // 重整市公車路網，不再要求各線繞回市中心轉乘
  "klc3-4-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"市公車路網重整屬市府權責，無需大型建設；但需重新設計路線、調度車輛與司機，在司機不足下推動有難度，需時間分階段調整。","sources":[]},
  // 要求市府提出逐年汰換老舊公車的具體計畫
  "klc3-4-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求市府提出逐年汰換計畫，可透過質詢與預算審議達成，提出計畫本身不需額外經費；實際汰換另需市府編列預算並爭取中央電動公車補助。","sources":[]},
  // 觀光夜市周邊增設有聲號誌
  "klc3-4-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"增設有聲號誌屬市府交通權責，單點設置經費小，可在短期內完成。","sources":[]},
  // 爭取醫學中心等級醫療資源
  "klc3-5-p0": {"level":"unclear","authority":"low","cost":"unclear","timeline":"unclear","reason":"醫學中心評鑑屬中央衛生主管機關權責，地方可協調醫院擴充專科服務與醫療合作。政見未說明要爭取的具體醫療資源項目，經費與期程無法判斷。現有醫院已有癌症中心認證與醫學中心同級放射治療（現況，非政見內容）。","sources":["https://www.cgmh.org.tw/tw/Systems/AreaInfo/1"]},
  // 導入公共自行車與共享機車
  "klc3-5-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"公共自行車與共享機車可由市府委外或開放業者營運，屬市府權責。基隆目前尚無公共自行車，市府正研議分期分區推動，並指出地形坡度大、道路狹小、人行道未完整等困難（現況，非政見內容）。站點與車輛規模未說明，經費無法估算。","sources":["https://udn.com/news/story/7328/9760927"]},
  // 推動身心障礙者友善就業空間
  "klc3-5-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"身障就業可運用勞政單位庇護工場與職務再設計等既有補助，屬市府權責。「更大場地」需覓得適當空間，場地取得方式、規模與服務量未說明，經費無法估算。","sources":[]},
  // 推動電線桿地下化
  "klc3-5-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"電線地下化涉及台電與電信業者，屬市府協調推動事項。說明空白，未指出路段或範圍，無法估算經費與期程。","sources":[]},
  // 活化閒置運動中心空間為街舞與健身場館
  "klc3-5-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"活化既有運動中心閒置空間屬市府或營運委外單位權責，改作街舞與健身空間以室內改裝為主，經費小，一任內可完成。","sources":[]},
  // 利用天橋或高架道路下方空間設置有遮蔽的寵物公園
  "klc3-5-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"利用橋下空間設置寵物公園可減少用地取得問題，屬市府權責，建置經費小，但需取得橋梁管理單位同意，一任內可完成。","sources":[]},
  // 建立老舊建築外牆安全管理制度
  "klc4-4-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"建立老舊建築外牆安全管理制度屬市府建管權責，可依建築法與公寓大廈相關規定訂定檢查、通報或補助措施。未提出具體做法，通報、定期檢查或補助的成本差異大，經費無法估算；制度設計與議會立法需時間。","sources":[]},
  // 廢除娛樂稅
  "klc4-5-p0": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"娛樂稅法 2026 年 5 月修正，刪除電影、藝文表演與球賽等項目，仍保留舞廳、舞場、高爾夫球場等項目；永久廢除須由中央修法。修正後第 2 條允許地方視政策需要停徵，經議會通過、報財政部備查，但須定明實施期限並有合理政策目的，地方可部分達成。停徵造成的稅收影響無資料，經費無法估算。","sources":["https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340106","https://news.ltn.com.tw/news/life/breakingnews/5530662"]},
  // 推動極限運動公園
  "klc4-5-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"極限運動公園需市府提供用地與建置經費，各地已有先例；但說明空白，未指出地點與規模，無法評估。","sources":[]},
  // 推動串連山海的長程步道路線
  "klc4-5-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"長程步道串連需市府與林業、中央河川或土地管理單位協調；說明空白，未指出路線與規模，無法評估。","sources":[]},
  // 發展 24 小時郵輪經濟圈
  "klc4-5-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"郵輪經濟涉及港務公司、商家營業時間與交通接駁，港埠屬中央國營事業管理；說明空白，未提出具體做法，無法評估。","sources":[]},
  // 推動地標建築與會展經濟
  "klc4-5-p4": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"地標建築與會展經濟屬大型建設與招商方向，但未說明地點、規模、經費與推動方式，資訊不足以判斷。","sources":[]},
  // 推動人本交通、停車改革與大眾運輸升級
  "klc4-5-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"人本交通、停車改革與大眾運輸升級涵蓋範圍廣，說明空白，未提出具體措施、經費或期程，資訊不足。","sources":[]},
  // 協助弱勢、獨居及急難家庭連結社福資源
  "klc4-6-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"協助弱勢家庭連結社福資源屬議員選民服務，運用既有社福體系，不需額外經費，一任內即可執行。","sources":[]},
  // 追蹤並督促改善危險路口、通學動線與人行環境
  "klc4-6-p1": {"level":"unclear","authority":"high","cost":"unclear","timeline":"unclear","reason":"追蹤督促危險路口、通學動線與人行環境改善，屬議員質詢與監督職權。內容以關注方向為主，未列具體地點、改善措施或期程，資訊不足以判斷成效與經費。","sources":[]},
  // 盤點易淹水區域並升級排水系統
  "klc4-6-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"盤點易淹水區屬市府權責，可於任內辦理，排水升級可爭取中央補助。升級工程的地點、長度與內容均未說明，無法估算經費與工期。","sources":[]},
  // 要求改善公車智慧站牌功能與到站資訊準確度
  "klc4-8-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"公車智慧站牌軟硬體與動態資訊屬市府公車主管機關權責。改善單一站牌連線與時刻資料，經費小，數月內可完成。","sources":[]},
  // 建議市府建立山坡地房屋監測機制
  "klc4-8-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"山坡地房屋監測屬市府建管與水保權責，監測項目（排水、水路、坡地滑動）已具體列出。監測範圍與戶數未說明，經費無法估算；監測機制可由既有巡查與儀器擴充建立，一任內可落實。","sources":[]},
  // 要求改善大慶大城社區周邊停車
  "klc4-8-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"增設停車場屬市府權責。依市府答詢，已覓得兩處平面停車場用地，預定 2026 年底完成，現況已在執行中；平面停車場經費小。","sources":[]},
  // 加強中山一路至中山四路沿線道路照明
  "klc4-8-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"道路照明改善屬市府工務權責，已經議會大會通過。增設或汰換路燈單價低，可分段施作，短期內即可完成。","sources":[]},
  // 研議發放 7 至 12 歲兒童成長津貼
  "klc4-9-p0": {"level":"medium","authority":"medium","cost":"low","timeline":"medium","reason":"市府可依自治財源發放現金津貼，但屬長期經常性支出且未說明財源。以每人每年 3.6 萬元計，每 1 萬名受益兒童即需 3.6 億元，約占歲出 287.5 億元的 1.3%（粗估，未計實際兒童數）。另中央已預告 0–18 歲每月 5,000 元成長津貼，兩者如何疊加需先釐清。","sources":["https://www.setn.com/news/1912869"]},
  // 辦理東西岸跨海大橋可行性評估
  "klc4-9-p1": {"level":"medium","authority":"medium","cost":"high","timeline":"high","reason":"辦理可行性評估屬市府可委託執行的工作，評估本身經費遠小於大橋工程，可在一任內完成。但港區水域與航道屬港務單位管理，評估需與港務及中央協調；後續興建則是另一層級的大型建設。","sources":[]},
  // 盤點公有閒置畸零地設置微型立體停車塔
  "klc4-9-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"盤點閒置公有地屬市府可立即辦理的行政作業；但國有地需向國產署申請撥用或租用，畸零地面積小、設置機械式停車塔的效益與維運成本需逐案評估。數量與經費未說明，經費無法估算。","sources":[]},
  // 以每區設置托嬰與托老資源為長期目標
  "klc4-9-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"增設公共托嬰與日照據點屬市府權責，並有中央補助管道，已經議會大會通過。政見自述為長期目標，未說明據點數與經費，經費無法估算；全市各區皆設需逐年覓地，四年內可望部分達成。","sources":[]},
  // 研議長者中央廚房統一供餐並建立送餐訪視網
  "klc4-9-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"長者送餐與關懷訪視屬市府社福權責，可結合既有老人營養餐飲服務擴充。設置中央廚房需場地、設備與營運單位，並需整合里鄰送餐人力；服務人數與經費未說明，經費無法估算，四年內可望分區試辦。","sources":[]},
  // 活化太平國小、大德國中舊校地打造全齡運動公園
  "klc4-9-p5": {"level":"high","authority":"medium","cost":"unclear","timeline":"medium","reason":"利用舊校地與公園建置運動設施屬市府權責，並已指明以電廠促進電力開發協助金為財源，經議會大會通過。設施內容與規模未說明，經費無法估算；說明採「逐步建置」，四年內可望看到部分成果。","sources":[]},
  // 擴大住宅用火災警報器補助與安裝
  "klc4-9-p6": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"住宅用火災警報器補助屬消防機關可擴大辦理的既有業務，已經議會大會通過。擴大幅度與戶數未說明，經費無法估算，但單價低，可逐年編列，短期即可見效。","sources":[]},
  // 跨域規劃八斗子至八里濱海自行車道
  "klc4-9-p7": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"跨縣市自行車道需市府、北海岸觀光主管機關與新北市共同規劃，路線長、涉及多個權責單位與濱海路段用地。政見著重於跨域規劃，四年內可完成規劃與部分路段，全線串聯較難；路線長度與經費未說明。","sources":[]},
  // 要求減少船舶停泊排煙空污
  "klc4-9-p8": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"港區岸電設施由港務單位建置，屬中央權限；市府環保單位可就船舶排煙加強稽查，屬可補位部分。依市府答詢，港務單位年底將增設一套高壓岸電，但一套岸電能涵蓋的泊位有限，全面減排仍需中央持續投資。","sources":[]},
  // 爭取大武崙棒球場改善並興建滯洪池、停車場與游泳池
  "klc5-3-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"大武崙棒球場滯洪園區已由水利署核定 2026–2027 年補助 3,600 萬元設計費，規劃地下一層兼作停車、二層滯洪，但工程總經費與施工期程未公布，且既有規劃未見游泳池。棒球場、滯洪池與停車場有中央財源支撐，游泳池需另覓經費與空間；政見未說明規模，經費無法估算，四年內恐僅能完成部分工程。","sources":["https://news.ltn.com.tw/news/life/breakingnews/5552721"]},
  // 安樂區崇德路 10 巷路面全面刨鋪
  "klc5-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"巷道刨鋪屬市府道路養護權責，已經議會大會通過。單一巷道刨鋪經費小，可納入年度道路維護預算，數月內即可完工。","sources":[]},
  // 基金三路 51 號至 63 號社區道路重新刨鋪
  "klc5-3-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"社區道路重新刨鋪屬市府道路養護權責，路段短且已經議會大會通過，可納入年度養護預算，數月內完工。","sources":[]},
  // 武崙街口與社區出口交界處增設黃網線
  "klc5-3-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"劃設黃網線屬市府交通標線權責，已經議會大會通過，只待市府執行。標線費用極低，數週內即可完成，無用地或法規關卡。","sources":[]},
  // 安樂路二段未施作路段縮減人行道寬度、優先維持車道
  "klc5-4-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"high","reason":"人行道寬度調整屬市府道路設計權責，未施作路段變更設計經費小；但縮減人行道與人本交通、無障礙設計規範可能衝突，需市府重新評估取捨。","sources":[]},
  // 改建後的市立田徑場設施免費開放市民使用
  "klc5-4-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"田徑場收費屬市府自治事項，議員可透過質詢與預算審議要求調整收費規定或研議差別費率。現況已部分實施：跑道區採 24 小時免費開放，戶外跑道、籃球場及網球場於 2026 年 12 月 31 日前試營運期間免費（現況，非政見內容）。其餘設施的收費標準與長期免費造成的收入影響尚無資料，經費無法估算。","sources":["https://www.klcg.gov.tw/tw/klcg1/3168-318045.html","https://www.klcg.gov.tw/tw/development/2631-323149.html"]},
  // 督促市府優化通勤動線與運輸效率
  "klc5-7-p0": {"level":"unclear","authority":"high","cost":"unclear","timeline":"unclear","reason":"督促市府屬議員監督職權，但未提出具體動線、路段或改善措施，資訊不足以判斷成效。","sources":[]},
  // 補強在地長照量能
  "klc5-7-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出補強長照量能、串聯社區據點的方向，未說明增設據點數、服務項目或經費，無法評估規模與期程。","sources":[]},
  // 要求市府提出招商獎勵與補助機制
  "klc5-7-p2": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求市府提出招商獎勵與補助機制，可透過質詢與預算審議達成，提出方案本身不需額外經費。後續實際補助金額、財源與產業進駐成效未說明，不在本項評估範圍。","sources":[]},
  // 推動外木山、大武崙山海環境保育
  "klc5-8-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"high","reason":"景區清理垃圾屬市府環保權責，經費小可立即執行；但「山海環境保育」範圍與做法未說明，持續性難以判斷。","sources":[]},
  // 改善交通設施
  "klc5-8-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"標題僅為改善交通設施，說明空白，未提出任何具體地點、項目或規模，無法判斷。","sources":[]},
  // 加強樂齡服務
  "klc5-8-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"標題僅為加強樂齡服務，說明空白，未提出具體服務內容或規模，無法判斷。","sources":[]},
  // 主張議員建議工程經費刪至象徵性金額，重建公平透明的分配機制
  "klc5-9-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"將零星工程與里鄰工程經費刪至象徵性金額，屬議員預算審議職權，可直接在審議中提案。日後重新編列追加預算需市府配合，屬常態程序；新分配機制的內容未說明，無法評估其透明程度。","sources":[]},
  // 國道聯外道路改用既有巷道路幅銜接交流道
  "klc5-10-p0": {"level":"medium","authority":"low","cost":"medium","timeline":"medium","reason":"聯外道路規劃與用地協調屬市府權責，可由市府提出申請；但須取得國道管理機關土地同意，交流道銜接須辦可行性評估並經高速公路局審議通過，屬中央核定。利用既有巷道路幅可降低用地與工程費，但審議結果與期程不確定。","sources":["https://www.freeway.gov.tw/Publish.aspx?cnid=526&p=5390"]},
  // 假日塞車尖峰時段主幹道號誌同步
  "klc5-10-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"號誌時制調整屬市府交通主管機關權責，透過既有號誌控制系統重設時相即可，經費極小、技術成熟，短期內可實施。","sources":[]},
  // 捷運二階規劃保留台鐵，與捷運並存
  "klc5-10-p2": {"level":"medium","authority":"low","cost":"unclear","timeline":"unclear","reason":"捷運二階路線由中央核定，台鐵為國營鐵路，存廢屬中央權限，議員只能表態與督促。據報導，市府已表態二階朝保留台鐵方向推動，並表示將送交通部辦理可行性評估，路線尚未定案（現況，非政見內容）。","sources":["https://news.pts.org.tw/article/831282"]},
  // 改建後的市立田徑場設施免費開放市民使用
  "klc5-10-p3": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"田徑場收費屬市府自治事項，議員可透過質詢與預算審議要求調整收費規定或研議差別費率。現況已部分實施：跑道區採 24 小時免費開放，戶外跑道、籃球場及網球場於 2026 年 12 月 31 日前試營運期間免費（現況，非政見內容）。其餘設施的收費標準與長期免費造成的收入影響尚無資料，經費無法估算。","sources":["https://www.klcg.gov.tw/tw/klcg1/3168-318045.html","https://www.klcg.gov.tw/tw/development/2631-323149.html"]},
  // 要求公開鼠患防治進度與滅鼠藥分配方式，並整合清消與熱點管理
  "klc5-11-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求公開鼠患防治進度與分配依據並整合跨局處，屬議員質詢監督職權，執行端為既有環保業務，不需大量新增經費。","sources":[]},
  // 主張議員建議工程經費刪至象徵性金額，重建公平透明的分配機制
  "klc5-11-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"將零星工程與里鄰工程經費刪至象徵性金額，屬議員預算審議職權，可直接在審議中提案。日後重新編列追加預算需市府配合，屬常態程序；新分配機制的內容未說明，無法評估其透明程度。","sources":[]},
  // 以更高規格改建大武崙棒球場並結合滯洪池多功能停車場
  "klc5-12-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"low","reason":"既有大武崙棒球場滯洪園區規劃地面一層為標準棒壘球場，水利署補助的是設計費；改為可吸引職業球隊的規格，需增設看台、照明與附屬設施，經費大增且需另覓財源。政見未說明規模，經費無法估算；若變更設計，四年內完工困難。","sources":["https://news.ltn.com.tw/news/life/breakingnews/5552721"]},
  // 爭取增開 9026、1815 等客運班次
  "klc5-12-p1": {"level":"medium","authority":"low","cost":"unclear","timeline":"high","reason":"四碼編號屬公路客運路線，班次核定與監理屬交通部公路主管機關，市府只能協調業者或以補貼爭取增班，故權責偏低。要做的事明確，但增班幅度未說明，經費無法估算；若業者配合，短期即可見效。","sources":[]},
  // 要求快速道路引道規劃不得將車流轉嫁大武崙
  "klc5-12-p2": {"level":"medium","authority":"low","cost":"unclear","timeline":"unclear","reason":"快速道路引道規劃屬中央交通主管機關權責，議員與市府只能在規劃階段提出意見、要求交通影響評估。訴求方向明確，但引道本身尚屬「可能規劃」，期程與經費均無從判斷。","sources":[]},
  // 規劃推動暖暖行政中心都市更新
  "klc6-2-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"規劃推動行政中心都市更新需市府主導，議員可透過質詢與預算審議督促。說明未交代規劃工作的範圍、階段目標與經費，無法判斷規劃進度能否於任內達成。","sources":[]},
  // 設置長者免費健身空間
  "klc6-2-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"長者健身空間可利用既有據點設置，屬市府權責；但說明明確指出未說明地點與期程，無法評估規模與經費。","sources":[]},
  // 市府自辦消防人員招考補足人力，並提高消防員危險加給
  "klc6-4-p0": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"消防人員須經國家考試分發，地方無法自辦招考；危險加給加成上限由中央加給表規定，本島其他縣市最高加四成，無法只靠市府編列比照雙北。市府已編列追加預算，自 2026 年 5 月起按三至四成分級加成（現況，非政見內容）。以每人每月 1 萬元、256 人試算約 3,072 萬元，約占歲出 0.11％，屬政見目標試算，非現行可合法支給額。","sources":["https://www.nfa.gov.tw/cht/index.php?code=list&ids=976","https://www.klcg.gov.tw/tw/development/2631-314362.html"]},
  // 要求市府定期提出月眉土資場營運監督報告
  "klc6-4-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求市府定期提出營運監督報告，可透過質詢、議會決議或預算附帶決議達成，屬議員監督職權，幾乎不需額外經費，一任內即可落實。","sources":[]},
  // 全面盤點暖東峽谷設施並建立長期管理機制
  "klc6-4-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"盤點設施、建立管理機制屬市府權責，可透過質詢要求；步道更新經費中等，需釐清與林業單位的管理權責，一任內可完成盤點與部分更新。","sources":[]},
  // 爭取雙北快捷公車路線優化並增加班次
  "klc6-5-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"跨縣市快捷公車路線優化需市府與雙北及客運業者協調，涉及營運補貼；說明空白，未指出路線、班次目標，無法評估。","sources":[]},
  // 增加公共托嬰與公立幼兒園名額
  "klc6-5-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"增設公共托嬰與公立幼兒園屬市府權責，可爭取中央少子化相關補助。說明空白，未說明增加名額、地點與利用既有空間或新建，無法估算經費與期程。","sources":[]},
  // 爭取串連七堵段基隆河兩岸堤防步道
  "klc7-1-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"串連河堤步道需市府與中央河川管理單位協調，市府已表示爭取明年度預算興建跨溪箱型橋（現況，非政見內容）。橋長、基礎與工程規模均未說明，經費無法估算；工作物若位於河川區域，依河川管理辦法須經河川管理機關許可，期程受許可與協調影響。","sources":["https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0110029"]},
  // 在七堵車站前打造彩繪街區，行銷七堵、活絡地方經濟
  "klc7-2-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"彩繪街區經費不高，屬市府權責，已有多地先例；但須逐戶取得私有住宅所有權人同意，整合難度是主要障礙。","sources":[]},
  // 建議七堵實踐橋增設側板或遮蔽設施擋風雨
  "klc7-4-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"橋梁加設側板或遮蔽屬市府工務權責，小型附屬設施經費小，經結構與通風評估後可在短期內施作。","sources":[]},
  // 光明路停車場改建多目標立體停車場並遷入部分市府機關
  "klc7-5-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"既有公有停車場改建立體多目標停車場並遷入機關，屬市府權責，已經議會大會通過。量體與經費未說明，經費無法估算；需規劃設計、多目標使用審查與施工，四年內可能僅完成規劃至發包，完工較難。","sources":[]},
  // 長興公園興建地下停車場，地面興建國民運動中心
  "klc7-5-p1": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"議會提案通過，尚無規劃或可行性研究","horizon":"約 6–10 年","reason":"公園地下停車場結合國民運動中心屬市府可推動的建設，國民運動中心另有中央補助管道。目前僅為議會提案，未說明規模、經費與財源，需經可行性評估、都市計畫多目標使用審查與設計，難在一任內完工。","sources":[]},
  // 爭取國道 1 號五堵交流道增設七堵北出匝道
  "klc7-5-p2": {"level":"low","authority":"low","cost":"unclear","timeline":"low","reason":"國道增設匝道屬交通部高速公路主管機關權責，地方只能提出申請並通常須分擔經費。需經可行性評估、交通影響與設計審查，一般耗時多年，且受交流道間距與既有路網限制，四年內完成可能性低；規模未說明，經費無法估算。","sources":[]},
  // 公路客運 1573 路線延伸至調和街轉運站並評估新闢七堵國道客運
  "klc7-5-p3": {"level":"medium","authority":"low","cost":"unclear","timeline":"high","reason":"公路客運路線延伸與新闢國道客運由交通部公路主管機關核定、業者經營，市府只能協調申請，權責偏低。延伸至既有轉運站技術門檻不高，若業者配合短期可實施；新闢國道客運則需評估運量。","sources":[]},
  // 七堵區長興社區污水接管
  "klc7-5-p4": {"level":"high","authority":"medium","cost":"unclear","timeline":"medium","reason":"用戶污水接管屬市府污水下水道建設，常見中央前瞻或水環境計畫補助。已經議會大會通過，但戶數與主幹管是否已到位未說明，經費無法估算；接管工程需逐段施工，四年內可望完成或見到進度。","sources":[]},
  // 俊賢路與大華二路口評估設置智慧號誌
  "klc7-5-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"路口號誌評估與設置屬市府交通權責，已經議會大會通過。單一路口智慧號誌經費小，評估與建置可在一年內完成。","sources":[]},
  // 七堵區設置農漁產品、伴手禮及地方創生商品展售中心
  "klc7-5-p6": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"設置在地產品展售中心屬市府產業發展權責，可利用既有公有空間辦理，已經議會大會通過。場地與規模未說明，經費無法估算，但展售中心工程量小，一任內可設立。","sources":[]},
  // 推動明德國中中正堂改建並增設地下停車場
  "klc7-5-p7": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"校舍改建與增設地下停車場屬市府權責，市府已答詢有初步規劃（約 133 至 140 格）。經費未說明，無法估算；地下停車場需設計、審查與施工，並須兼顧學校使用，一任內可推進至施工，完工時間較緊。","sources":[]},
  // 建議評估設立原住民族事務專責局處
  "klc8-1-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"內容是建議市府評估設立原住民族事務專責局處，評估工作由市府辦理，議員可透過質詢與預算審議要求，評估本身經費小，一任內可完成。實際設局需修正組織自治條例並受中央組織準則限制，屬後續事項，不在本項承諾範圍。","sources":[]},
  // 補助勞工參加營造業職安卡課程
  "klc8-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"屬市府勞工主管機關可自編預算辦理的參訓補助，需市府採納。每人補助 3,000 元／回訓 1,500 元，單價明確且偏低，即使補助千人次也僅約數百萬元，對 287.5 億元歲出影響甚微；一年內即可上路。","sources":[]},
  // 提前盤點需求並開設足額職安卡課程
  "klc8-2-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"盤點需求並開設職安訓練課程、加強宣導，屬市府勞工主管機關可辦理事項，可委託訓練單位開班。課程經費小，在新制上路前一年內即可規劃完成。","sources":[]},
  // 設立原住民關懷據點
  "klc9-1-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"設立原住民關懷據點需市府辦理，可運用中央原住民族相關補助。說明空白，未說明服務對象、內容、地點與設置方式，無法評估經費與期程。","sources":[]},
});

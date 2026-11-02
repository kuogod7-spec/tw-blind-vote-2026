/*
 * 2026 臺北市議員政見：可行性評估
 *
 * 評估日期：2026-11-02。由本站依統一標準評估，不是專家意見。
 * 評估時政見已匿名並打亂順序，評估者不知道每則政見屬於哪位候選人。
 * 議員政見的「權責」依議員職權判斷（見方法說明第 6 節）：需要市府採納執行屬常態，不拉低總評。
 * 一般政見與長期建設的評估面向同 new-taipei-feasibility.js。
 * 預算比較基準：臺北市 116 年度總預算案歲出約 2,389 億元（同 taipei-feasibility.js）。
 */
window.FEASIBILITY = Object.assign(window.FEASIBILITY || {}, {
  // 重新檢討社子島開發方式，改為保留聚落、增加公設
  "tpc1-1-p0": {"level":"low","authority":"medium","cost":"unclear","timeline":"low","reason":"社子島細部計畫已審議通過、區段徵收送中央審議中，改為保留聚落須推翻現行計畫並重啟都市計畫程序，需市府改變政策，屬根本障礙。開發方式改變後的財務來源未說明；弱勢住戶的法律協助與居住支持則較容易推動。","sources":["https://www.cna.com.tw/news/aloc/202605220144.aspx"]},
  // 社子島解除禁限建與區段徵收脫鉤
  "tpc1-1-p1": {"level":"low","authority":"medium","cost":"low","timeline":"low","reason":"社子島細部計畫已由都委會審議通過、送內政部審議區段徵收，與現行開發方式相反，需市府改變政策並重啟規劃。防洪與基礎建設原以區段徵收籌措財源，脫鉤後經費須由市庫負擔，未說明財源；環評訴訟結果亦非市府能掌控。","sources":["https://www.cna.com.tw/news/aloc/202605220144.aspx"]},
  // 重整大型醫院周邊交通動線
  "tpc1-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"醫院周邊臨停區、計程車候車與公車站位調整屬市府交通局權責，經費低；社區彈性接駁或小黃公車已有運作模式可參考，需編列營運補貼但規模有限，任期內可見成效。","sources":[]},
  // 人流大的路口增設行人庇護島與高齡友善號誌
  "tpc1-1-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"增設行人庇護島、高齡友善號誌與調整行穿線，屬市府交通工程的例行業務。單一路口改善經費有限，已有既有作法可循，一任內可分批完成。","sources":[]},
  // 要求市府在北士科重大廠商進駐前公開交通承載評估
  "tpc1-1-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求市府公開交通承載評估並提出接駁與停車期程，屬質詢監督可施壓的範圍，實際公開與規劃需市府配合。評估與公開資料成本低，一任內可完成；企業通勤計畫需市府以開發條件或協商要求。","sources":[]},
  // 北士科公共回饋空間優先用於社宅、托嬰、日照
  "tpc1-1-p5": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"公共回饋空間的用途可由市府在開發協議或都市計畫中指定，優先作為社宅、托嬰與日照屬地方權限。實際可用時間取決於園區開發與建物完工進度，回饋空間的面積與數量未說明。","sources":[]},
  // 高齡老屋與危險建物由市府列冊管理並主動提出都更方案
  "tpc1-1-p6": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"列冊管理與主動提出都更方案屬市府都更單位可辦理事項，容積誘因、中繼住宅亦有既有制度。但都更須住戶整合與產權協調，一任內能否看到成效取決於住戶意願，屬明顯但可克服的障礙。","sources":[]},
  // 檢視懷孕、生產、托育到入學各階段補助的銜接，並加碼育兒及托育補助
  "tpc1-4-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"補助銜接與加碼屬社會局、教育局權限，需市府採納並編列預算。檢視銜接空窗屬行政作業，容易推動；加碼金額未說明，育兒補助為常態性支出，總經費可能可觀且未說明財源。","sources":[]},
  // 要求特教經費準時到位，推動情緒教育進校園
  "tpc1-4-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"特教經費撥付與情緒教育屬教育局權限，議員可透過預算審議與質詢督促。未說明經費延遲的情形與具體做法，無法判斷。","sources":[]},
  // 比照鄰近縣市，提供國小半日班學童免費營養午餐
  "tpc1-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"國中小午餐屬市府教育局權責。臺北市自 115 學年度起已全面實施公私立國中小免費營養午餐，約 18.6 萬名學生受惠，半日班學童的午餐費用已在範圍內，剩下低年級用餐時段與教師留校指導的配套問題。","sources":["https://www.storm.mg/lifestyle/11170518"]},
  // 校園午餐廚餘改由環保單位清運或協助媒合去化，不轉嫁供餐業者
  "tpc1-6-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"校園午餐廚餘改由環保單位清運或媒合去化，屬市府環保與教育部門可協調的事項。新增清運量與處理成本未說明，但屬既有清運體系的擴充，可在禁令上路前規劃完成。","sources":[]},
  // 無菸城市政策先訂自治條例並做分期分區吸菸熱區調查
  "tpc1-6-p2": {"level":"high","authority":"high","cost":"medium","timeline":"high","reason":"議員可提出自治條例草案，並在預算審議時要求編足稽查人力；菸害防制法授權地方公告禁菸場所。稽查人力需增加經費，但規模不大；三至五年分期計畫的期程合理。","sources":[]},
  // 協助北士科 T17、T18 基地進駐廠商排除法規問題、儘速開工
  "tpc1-6-p3": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"協助進駐廠商排除法規問題屬市府招商與都市計畫、建管單位可辦理的行政協調，議員可質詢督促。但基地涉及既有地上權契約與多方權利關係，排除障礙所需時間取決於契約處理，具不確定性。","sources":[]},
  // 加速社子島開發，區段徵收計畫儘速送中央核定
  "tpc1-7-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"社子島細部計畫已由都委會通過，市府預計送內政部審議區段徵收，最快年底至明年上半年完成。議員以質詢督促送審時程，與現行進度一致，可行性高。","sources":["https://www.cna.com.tw/news/aloc/202605220144.aspx"]},
  // 爭取輪狀病毒疫苗與腸病毒 71 型疫苗納入嬰幼兒公費疫苗
  "tpc1-8-p0": {"level":"medium","authority":"low","cost":"medium","timeline":"medium","reason":"公費疫苗項目屬中央權限。輪狀病毒疫苗已定 2027 年 1 月 1 日起納入幼兒公費接種；腸病毒 71 型疫苗尚未納入，需中央審議，或由市府自行編列預算補助。","sources":["https://n.yam.com/Article/20260630924310"]},
  // 擴充並改善孕婦接送專車服務
  "tpc1-8-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"擴大孕婦接送服務並與叫車平台合作屬市府可辦理的服務擴充，已有服務基礎。未說明擴大規模，經費為中等以下，一任內可完成。","sources":[]},
  // 改善中央南路二段及中山站施工路段的人行空間
  "tpc1-8-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"施工路段人行空間屬工務、交通與捷運主管機關可要求承包商改善的事項，議員可透過質詢督促。針對特定路段調整圍籬與臨時通道，經費小，短期內可改善。","sources":[]},
  // 推動全齡交通教育
  "tpc1-8-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"交通安全教育屬交通局業務，需市府採納。高齡駕訓課程可委託駕訓班或監理單位合作開辦，經費小，一任內可推動。","sources":[]},
  // 拓寬淡北道路與周邊路網
  "tpc1-9-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"淡北道路目前由鄰近縣市主辦施工中，預計 2029 年底全線通車，進入臺北市後銜接北投、關渡路段。報導未說明「拓寬」是指哪一段或哪些周邊道路，無法判斷經費與期程。","sources":["https://newtalk.tw/news/view/2026-08-24/1055296"]},
  // 推動水路通勤
  "tpc1-9-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"水路通勤需市府規劃航線與碼頭，並涉及河川管理單位。未說明航線、規模與經費，無法判斷可行性。","sources":[]},
  // 以溫泉相關收益補助溫泉區硫磺氣體造成的損害
  "tpc1-9-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"溫泉取用費依法須專款用於溫泉相關事務，用於補助硫磺氣體損害須確認是否符合用途。未說明補助對象、金額與做法，無法判斷。","sources":[]},
  // 活化運用北士科回饋金
  "tpc1-9-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"回饋金運用需市府依規定辦理。未說明回饋金規模、用途與做法，無法判斷。","sources":[]},
  // 推動士林北投汽車城建設
  "tpc1-9-p4": {"level":"unclear","authority":"unclear","cost":"unclear","timeline":"unclear","reason":"「汽車城」內容、地點、規模與做法均未說明，報導亦無細節，無法判斷屬產業招商、用地規劃或其他性質，資訊不足。","sources":[]},
  // 加速關渡平原與社子島開發，督促都市計畫通盤更新
  "tpc1-9-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"都市計畫通盤檢討與開發需市府主導，部分須送內政部審議。未說明加速的具體做法、開發方式與範圍，無法判斷經費與期程。","sources":[]},
  // 爭取流浪教師獎勵機制，推動老少共學
  "tpc1-9-p6": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"「流浪教師獎勵機制」與「老少共學」均未說明對象、內容與做法，報導亦未提具體措施；教師聘任受中央法規規範，地方可著力範圍需視設計而定，資訊不足無法判斷。","sources":[]},
  // 爭取警消勤務加給，增加青年巡守隊及義警義消資源
  "tpc1-9-p7": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"警消勤務加給標準由中央訂定，地方難以自行增設加給，此部分屬中央權限。青年巡守隊與義警義消資源則可由市府編列預算補助，但未說明具體做法與經費。","sources":[]},
  // 育兒減工時措施納入職務代理津貼
  "tpc1-10-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"育兒減工時屬市府勞動局自辦試辦計畫，2026 年 3 月上路，已將企業補助上限提高至 20 萬元，約 480 家企業參與。若依轉述的普及率 15% 估算約需 6 億元，約占歲出 0.25%，未說明財源，屬可克服的財務門檻。","sources":["https://news.pchome.com.tw/public/taipei/20260504/index-77788328037538126016.html","https://udn.com/news/story/124652/9748435"]},
  // 以就業、住宅、托育、創業等指標衡量青年政策並每年公布
  "tpc1-12-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"設定青年政策指標並每年公布，屬市府可自行建立的施政評核機制，資料多可由既有統計取得，經費極低；議員可藉質詢與預算審議督促，任期內可完成。","sources":[]},
  // 串連在地產業與大專院校，增加青年實習、跨域培訓與就業媒合
  "tpc1-12-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"媒合在地產業與大專院校辦理實習、培訓與就業媒合，屬市府勞動與產業單位既有業務可擴充，無法規障礙。未說明名額與經費，但此類計畫規模通常不大。","sources":[]},
  // 建立青年從租屋到購屋的居住階梯
  "tpc1-12-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"主張建立青年從租屋到購屋的居住階梯，但說明已註明未提出具體做法，無法評估權責、經費與期程，資訊不足以判斷。","sources":[]},
  // 增加夜間、假日臨托與寒暑假照顧服務
  "tpc1-12-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"臨托與寒暑假照顧屬社會局、教育局業務，需市府採納執行。可串聯圖書館、運動中心、親子館等既有場館，不必新建設施；但服務量與經費未說明，人力成本隨規模增加。","sources":[]},
  // 北士科進駐前提早辦理並公開交通衝擊與商圈影響評估
  "tpc1-12-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"在科技園區進駐前辦理並公開交通衝擊與商圈影響評估，屬市府交通與產業部門的規劃作業，委託評估經費有限，應在進駐前完成，時程可行。","sources":[]},
  // 爭取社子線區域路網延伸串聯至石牌、榮總
  "tpc1-12-p5": {"track":"long","level":"medium","authority":"medium","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"僅有延伸構想，未見正式規劃","horizon":"約 10–15 年","reason":"軌道延伸須經市府提報可行性研究、綜合規劃並由中央核定補助，議員只能爭取。主線本身尚在推動中，延伸段需等主線定案後才能接續規劃；未說明經費與期程，財務與時程都無法評估，但並無法規上的根本障礙。","sources":[]},
  // 社會住宅優先保留給北投、石牌在地醫療人員與青年
  "tpc1-12-p6": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"社宅可保留一定比例給特定對象，屬市府出租規定可調整的範圍，不需新增經費。但住宅法規定須保留一定比例給弱勢對象，可專案保留的戶數有限，一任內可執行。","sources":[]},
  // 推動士林、北投成為人工智慧教育示範區
  "tpc1-12-p7": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"教育示範區屬教育局權限，需市府採納。未說明示範內容、範圍與經費，無法判斷可行性。","sources":[]},
  // 公開承德路與士商路口新路型評估報告並定期公布成效
  "tpc1-12-p8": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求主管機關公開路口改道評估報告，並定期公布事故、壅塞、行人等待時間等指標，屬資訊公開與監督，由市府以既有交通監測資料整理即可，經費極低，短期內可完成。","sources":[]},
  // 將北士科園區至捷運芝山站路線單獨規劃為一條捷運線
  "tpc1-13-p0": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"僅有構想，提出路線與機廠用地建議","horizon":"約 10–15 年","reason":"捷運路網規劃由市府主辦，但須經交通部核定並爭取中央補助。目前僅提出構想與機廠地點建議，尚無可行性研究；路線長度、經費與財務規劃未說明。捷運新線從可行性研究到通車通常需十年以上。","sources":[]},
  // 研議北士科停車空間，包括活化 T3、T4 土地及在蜆仔港公園設地下停車場
  "tpc1-13-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"活化市有地與公園地下設停車場屬市府交通局、工務局權責，公園多目標使用有前例可循。但地下停車場未說明車位數與經費，每處動輒數億元，且需經設計、發包與施工，四年內完工有難度；本身多為「研議」，研議部分可行。","sources":[]},
  // 北士科捷運路網延伸至天母
  "tpc1-13-p2": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"市府 2026 年宣布重啟天母捷運規劃，預計送件評估","horizon":"約 12–15 年","reason":"捷運路網延伸屬市府提案、中央核定補助的建設，需經可行性研究、綜合規劃與環評。市府 2026 年中才宣布重啟規劃並送件評估，路線與北士科路網的銜接方式未定；未說明經費與期程，從評估到通車通常需十年以上。","sources":["https://n.yam.com/Article/20260629771861"]},
  // 持續爭取北士科二期開發與交通地下化
  "tpc1-13-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"北士科開發與交通地下化需市府主導，部分須中央核定。未說明範圍、方式與期程，無法判斷經費與可行性。","sources":[]},
  // 推動坐月子與帶狀疱疹疫苗補助
  "tpc1-13-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"坐月子部分市府已於 2026 年 8 月推出每胎 3 萬元月子加菜金，年約 1.1 萬名產婦受惠。帶狀疱疹疫苗兩劑自費約 1.7–1.9 萬元，補助對象與金額未說明，若普及長者經費可能達數億元，規模無法估算。屬市府可自行開辦的福利，期程不成問題。","sources":["https://news.cts.com.tw/cts/life/202608/202608193068867.html","https://www.commonhealth.com.tw/article/94442"]},
  // 爭取興建洲美幼兒園暨國中小停車場
  "tpc1-13-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"學校附設停車場可結合新設校舍工程或以公共設施多目標使用辦理，屬市府權責。未說明車位數與經費，地下停車場造價可能達數億元；若需併入校舍設計變更，四年內完工具不確定性。","sources":[]},
  // 改善教師勞動條件、減輕行政負擔並加速代理教師甄選
  "tpc1-14-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"減輕行政負擔與加速代理教師甄選屬市府教育局可調整的事項，但教師勞動條件多由中央法規規範，教師短缺也受全國供給影響。未說明經費與期程。","sources":[]},
  // 加速重要橋梁重置與延壽評估，優先改善士林、北投老舊高車流橋梁
  "tpc1-16-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"要求主管機關優先對高齡、高車流及跨河橋梁提出改善、重建或延壽計畫與期程，屬質詢監督，評估與規劃費用不高。後續實際重建屬多年工程，經費另計，不在本項要求內。","sources":[]},
  // 建請中央提高通用計程車補助與獎勵
  "tpc1-16-p1": {"level":"medium","authority":"low","cost":"medium","timeline":"medium","reason":"通用計程車購車補助與營運獎勵主要由中央交通主管機關訂定，議員只能建請中央調整，結果不在地方掌握。市府可另以自有預算加碼補助作為補充，但規模與財源未說明。","sources":[]},
  // 從 65 歲起提前介入高齡駕駛風險管理
  "tpc1-16-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"擴大安駕課程宣導管道與建立跨機關事故分析機制，皆屬市府交通、警察單位可辦理的行政措施，監理單位雖屬中央，可透過協調合作。經費以宣導與資料整合為主，金額小；參訓結合交通優惠需另估成本，但規模可控。","sources":[]},
  // 提出教師留任方案並爭取教師首都加給
  "tpc1-16-p3": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"減輕行政負擔與改善工作環境屬市府教育局可辦理事項；但教師待遇與加給由中央法規規範，地方另設首都加給需中央同意，有法規障礙。未說明經費。","sources":[]},
  // 生育獎勵金增設續留年限，防止領取後遷出
  "tpc1-16-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"生育獎勵金的發放條件由市府自治法規或補助規定訂定，增設設籍續留年限屬地方自治事項，不增加支出。追繳已發款項需設計配套。助婚、租金優惠、托育獎勵等建議則需另行研議。","sources":[]},
  // 關注長者照顧、兒童托育與弱勢家庭
  "tpc1-17-p0": {"level":"unclear","authority":"unclear","cost":"unclear","timeline":"unclear","reason":"僅表達關注對象，未提出具體措施、對象或經費，無法評估可行性。","sources":[]},
  // 全面檢討豪雨應變並提出改善方案與時程
  "tpc1-18-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求市府檢討豪雨應變、抽水設備部署與資訊公開並提出改善時程，屬議員質詢監督職權。檢討報告本身經費極小，後續硬體改善由市府依結果編列。","sources":[]},
  // 市府對北士科供電提出自身方案，不必堅持變電所全面地下化
  "tpc1-18-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"變電所由台電興建，市府握有都市計畫與用地審議角色，可提出方案協商。2026 年 5 月已定案採變壓器地下型，不全面地下化，工期約 6–7 年並另設臨時變電所提前供電，方向已與主張一致。","sources":["https://news.pchome.com.tw/finance/cna/20260527/index-17798873211604518003.html"]},
  // 公開行道樹修剪、移植與砍除紀錄並檢討樹木列管制度
  "tpc1-18-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"行道樹修剪、移植與砍除紀錄由市府既有管理資料整理公開即可，檢討列管制度可透過修訂作業規範或樹木保護相關規定辦理，經費極低，議員可藉質詢持續督促，任期內可完成。","sources":[]},
  // 以資源配置效率檢視市府補助與公共服務
  "tpc1-20-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"檢視補助與公共服務的效率、提出不增加公帑的做法，屬議員質詢與預算審議職權，不需額外經費，任內即可持續進行。","sources":[]},
  // 檢討市府對大型企業的節能設備與 ESG 輔導補助
  "tpc1-20-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"檢討市府對大型企業的補助成效，屬議員預算審議與質詢監督職權，可直接在審預算時要求提出成效評估或刪減，不需額外經費，任期內可執行。","sources":[]},
  // 監督通學步道計畫確實達標，並實地檢驗施工品質
  "tpc2-1-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"監督既有通學步道計畫執行並實地檢驗施工品質，屬議員質詢與監督職權，不需額外經費，任期內即可持續執行。","sources":[]},
  // 盤點醫療院所周邊通道，清除障礙、拓寬人行道、改善路口視距
  "tpc2-1-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"醫療院所周邊人行道拓寬、障礙清除與路口改善屬市府工務局、交通局權責，可分批納入年度道路改善預算，單點經費小，任期內可見成效；少數拓寬涉及私有騎樓或路型調整，需個案協調。","sources":[]},
  // 針對高風險建築設立單一協助窗口，主動進行結構鑑定與預防性補強
  "tpc2-1-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"建築安全屬建管處權限，需市府採納。主動鑑定與預防性補強涉及私有建物，須取得所有權人同意與分擔費用；高風險建物數量與補助規模未說明，經費可能不小，一任內只能部分完成。","sources":[]},
  // 盤點轄區防空避難場所的日常維護管理
  "tpc2-1-p3": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"以質詢監督防空避難場所維護屬議員職權，盤點與檢查屬市府警察與民政單位常態業務，經費小，可在短期內完成。","sources":[]},
  // 推動設立臺北市第一所臺語實驗小學
  "tpc2-1-p4": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"依實驗教育相關法規，市府可核定公立學校轉型為實驗學校，議員可督促。須取得學校與家長共識、建置師資與課程，規劃到核定約需 2–3 年，一任內可望完成但時程偏緊。","sources":[]},
  // 地名英譯以本土語言優先，並為文化景點製作本土語言導覽資訊
  "tpc2-1-p5": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"地名英譯須依內政部訂的譯寫原則統一採用拼音系統，地方改採本土語言優先須先與中央協調，屬明顯障礙。文化景點製作本土語言導覽屬市府權限，製作成本低，可先推動。","sources":[]},
  // 擴大忠孝西路開放機車通行時段
  "tpc2-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"忠孝西路機車通行管制屬市府交通局權責，過去即由市府決定夜間開放，擴大時段只需交通評估與標誌調整，經費極低。主要考量是公車專用道與尖峰交通安全，需評估後決定。","sources":["https://www.setn.com/news/1217403"]},
  // 重新檢視社會住宅準公托保母的托育限制，保障保母工作權
  "tpc2-2-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"社宅使用規範由都發局訂定，重新檢視準公托保母是否適用禁止營利規定，屬行政解釋或規範修正，需市府採納。不需經費，短期內可完成。","sources":[]},
  // 檢討環保裁罰的行政救濟與強制執行流程，追回未繳罰款
  "tpc2-2-p2": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"在質詢中要求檢討環保裁罰的行政救濟與強制執行流程，屬議員監督職能，檢討流程本身不需大筆經費。約 3 億元呆帳能否追回，取決於移送行政執行的成效與受處分人的清償能力；稽查人力與待遇改善則需另編預算。","sources":[]},
  // 在商圈、公園、交通節點與年輕人口多的社區設置智慧垃圾桶，取代傳統公共垃圾桶
  "tpc2-3-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"公共垃圾桶設置屬環保局權限，需市府採納。智慧垃圾桶建置與維護成本高於傳統垃圾桶，數量未說明；公共垃圾桶改為使用者付費，可能造成垃圾隨地丟棄，需先試辦評估成效。","sources":[]},
  // 市府同步設置智慧回收箱，回收玻璃、乾電池、塑膠可獲回饋點數
  "tpc2-3-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"設置智慧回收箱並給予回饋點數，國內已有地方政府設置類似回收機的先例，屬市府環保部門可辦事項。設置數量與經費未說明；點數折抵智慧垃圾桶使用費需配合相關收費制度，一任內可推動。","sources":[]},
  // 重建港墘橋或增設聯外橋梁
  "tpc2-4-p0": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"僅有構想","horizon":"約 6–10 年","reason":"跨基隆河新建或重建橋梁屬市府工務局權責，但須經可行性研究、河川區域使用審查與綜合規劃，兩端銜接道路的交通衝擊也需評估。未說明經費與期程，目前僅有構想，跨河橋梁從規劃到通車通常需多年。","sources":[]},
  // 加速捷運東環段完工，並建立內科快速公車與接駁系統
  "tpc2-4-p1": {"track":"long","level":"medium","authority":"medium","maturity":"high","financing":"high","schedule":"medium","stage":"東環段已於 2026 年動工","horizon":"約 8–10 年","reason":"東環段已核定並於 2026 年動工，財務已有中央與市府分擔架構，屬既定建設；「加速完工」未說明具體做法，捷運施工期程受地下工程與管線遷移限制，能壓縮的空間有限。快速公車與接駁可由市府交通局於短期內規劃。","sources":["https://n.yam.com/Article/20261030731939"]},
  // 優化國道匝道與聯外道路，增設轉乘停車場（P+R）並導入智慧交通管理系統
  "tpc2-4-p2": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"國道匝道屬交通部高速公路局管轄，地方只能爭取協調；轉乘停車場與智慧交控才屬市府權限，需市府採納。地點、規模與經費都未說明，無法估算；停車場需覓地，一任內可部分完成。","sources":[]},
  // 推動中南街再造更新與老舊建物整合
  "tpc2-4-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"low","reason":"老舊建物整合更新需多數產權人同意，市府可提供輔導或以公辦都更介入，但未說明範圍與方式。都更從整合到核定、拆除重建通常超過四年，任期內多半只能看到整合或計畫階段的進展。","sources":[]},
  // 推動誠正國中前高鐵引道地下化，以公園綠地取代隔開社區與學校的高牆
  "tpc2-4-p4": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"unclear","schedule":"low","stage":"屬構想，未見正式規劃","horizon":"約 10 年以上","reason":"高鐵引道地下化屬中央高鐵與鐵道主管機關的設施，須經中央同意並與營運單位協調，市府只能爭取或分擔經費。地下化須在營運中線路旁施工，技術與經費門檻高，未說明經費與財源，可行性低。","sources":[]},
  // 誠正國中周邊的社福長照 BOT 規劃結合鄰近文化廊道
  "tpc2-4-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"在既有 BOT 規劃中加入文化廊道與步行動線屬市府規劃設計調整，議員可督促。須與 BOT 招商條件及期程協調，未說明範圍與經費。","sources":[]},
  // 提高生育補助，第三胎補助提高至 100 萬元
  "tpc2-5-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"生育補助屬市府自治事項，可自行加碼。全市年出生約 1.1 萬人，若第三胎約占一成，粗估第三胎補助 100 萬元每年需約 11 億元，約占歲出 0.46%，屬持續性支出且未說明財源，財政壓力明顯但非不可克服。","sources":["https://news.cts.com.tw/cts/life/202608/202608193068867.html"]},
  // 成功路四段邊坡崩落後，一併檢測鄰近社區邊坡裂縫並整治
  "tpc2-6-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"由工程主管機關檢測鄰近社區邊坡並一併整治，屬市府坡地防災的例行業務。說明已列出坡面修整、岩釘、掛網噴漿、排水管等具體工法，市府預估兩個月完工，屬局部工程，經費有限。","sources":[]},
  // 儘速訂定吸菸區設置標準，戶外吸菸區改以屏風式阻絕二手菸
  "tpc2-7-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"以總質詢要求市府訂定吸菸區設置標準、修正地圖標示，屬議員監督職權；屏風式吸菸區設置屬市府環保與衛生單位行政措施，單點成本低，一任內可完成。","sources":[]},
  // 訂定河濱大型音樂活動的重低音使用準則
  "tpc2-7-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"河濱場地屬市府管理，可透過場地使用許可附加重低音音量與音響配置準則，召集專家研議經費極低。噪音管制標準由中央訂定，但市府在場地租借條件上有裁量空間，任期內可完成。","sources":[]},
  // 南港機廠社會住宅電梯限期完成第三方總體檢並維修
  "tpc2-7-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"在質詢中要求主管機關對社宅電梯進行第三方總體檢、限期維修並公開紀錄，屬議員監督職能，由市府以既有維護預算執行，經費不大。是否如期完成需看市府執行，但技術上不難，短期內可完成。","sources":[]},
  // 保障入住社會住宅的準公托保母在家托育
  "tpc2-7-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"是否允許社宅住戶在家從事準公共托育，屬市府對社宅租約的解釋與管理規範，由市府調整認定即可，不需新增經費。保母已依托育準公共契約合法登記，有法制基礎，一任內可完成。","sources":[]},
  // 增設夜間與假日臨時托育
  "tpc2-8-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"夜間與假日臨時托育須由市府社政單位規劃，活化閒置校舍屬市府可決定事項。主要障礙在夜間與假日托育人員招募與排班，以及校舍改建須符合托育機構設置標準；未說明據點數與經費，屬可克服但需時間。","sources":[]},
  // 托育監視器影像雲端備援，提升教保員薪資
  "tpc2-8-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"托育監視器影像雲端備援經費小，市府可透過公共托育委辦契約或補助推動。提高教保員薪資在公共托育部分可經由契約調整，但私立機構薪資須以補助誘導，未說明加薪幅度，持續性人事支出需編列財源。","sources":[]},
  // 遊戲場加裝遮陽降溫設施，公園嚴格落實禁菸
  "tpc2-8-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"遊戲場加裝遮陽設施與公園禁菸稽查屬市府公園與環保單位權責，單點工程小、經費低，一任內可完成。","sources":[]},
  // 社宅輪候制改為一次選填
  "tpc2-8-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"社宅申請與配租方式由市府的社宅出租規定訂定，改為一次選填屬作業與系統調整，經費低，一任內可完成；需注意與既有輪候名單的銜接。","sources":[]},
  // 聯合開發宅不出售，優先作為都更中繼住宅
  "tpc2-8-p4": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"聯合開發分回住宅的處分方式由市府決定，改為保留出租作都更中繼住宅無法規障礙。代價是放棄出售收入，需在財務上評估，但不需新增建設經費。","sources":[]},
  // 都更設專人輔導，擴大老屋電梯與管線修繕補助
  "tpc2-8-p5": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"都更專人輔導與老屋電梯、管線補助屬市府都發局可自行辦理的業務，已有相關補助制度可擴充。未說明擴大幅度、名額與經費，財政負擔無法估算；行政上任期內可上路。","sources":[]},
  // 加碼育兒家庭租金補貼
  "tpc2-8-p6": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"租金補貼加碼、外牆修繕補助與充電樁安全檢查都屬市府可自訂的補助或行政措施，中央租金補貼已有基礎可疊加。未說明加碼金額、對象與補助戶數，經費無法估算。","sources":[]},
  // 補助傳統市場轉型符合法規
  "tpc2-8-p7": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"補助傳統市場改善消防、建築等法規缺失屬市府市場處可辦理的業務，但未說明補助對象、項目與金額；市場改建常涉及產權與攤商協調，經費與期程無法估算。","sources":[]},
  // 校園增設風雨球場
  "tpc2-8-p8": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"校園設施改善屬教育局權限，需市府編列預算。未說明校數與規模，單座風雨球場造價依面積而定；可分年編列，在校內用地施作，一任內可完成部分學校。","sources":[]},
  // 擴充公辦早療據點與療育課程，提高早療人員待遇
  "tpc2-8-p9": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"公辦早療據點與療育課程屬市府社會局權責，提高人員待遇可透過委辦契約或預算調整。未說明增設數量與加薪幅度，經費無法估算；若僅擴充既有據點，任期內可見成效，但專業人力招募可能是瓶頸。","sources":[]},
  // 增設負壓吸菸室，心理衛教推廣至校園與里鄰
  "tpc2-8-p10": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"增設負壓吸菸室需符合菸害防制相關設置規範，選址與設備經費未說明；心理衛教推廣到校園與里鄰屬衛生部門既有業務。兩項主張都沒有數量、地點與期程，只能大致判斷可行。","sources":[]},
  // 簡化詐騙通報流程，市有場館售票實施實名制
  "tpc2-8-p11": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"市有場館售票實名制可在場館營運契約或售票規範中要求，但委外或 BOT 場館需與營運廠商協商契約。詐騙通報主要經由中央的反詐騙專線體系，市府只能就自身受理流程簡化。兩項做法都未說明細節。","sources":[]},
  // 補助採購毒品快篩試劑，高風險區加強防毒
  "tpc2-8-p12": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"由市府編列經費採購毒品快篩試劑，並在高風險區加強防毒宣導與查緝，屬地方警政與衛政可辦事項。快篩試劑單價低，整體經費占總預算比例很小，一任內可執行。","sources":[]},
  // 整合動物救援夜間醫療，定期清除公園外來種
  "tpc2-8-p13": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"動物救援與公園外來種移除屬動保處、公園處業務，需市府採納。夜間醫療可與民間動物醫院簽約合作，經費未說明但規模有限，一任內可推動。","sources":[]},
  // 敬老卡點數擴大用於看診、運動與休閒
  "tpc2-8-p14": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"敬老卡點數目前已可折抵市立醫院掛號費、運動中心泳池與健身房等，擴大到更多看診與休閒場域屬既有制度的延伸。點數有每月上限，增加的支出有限，但未說明擴及哪些項目。","sources":["https://www.storm.mg/lifestyle/11174308"]},
  // 普設長輩肌力訓練據點
  "tpc2-8-p15": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"長輩肌力訓練據點屬衛生局、社會局業務，需市府採納執行。「普設」的據點數與經費未說明，可利用社區關懷據點、運動中心等既有空間，一任內可擴點。","sources":[]},
  // 健康存摺 APP 導入 AI
  "tpc2-8-p16": {"level":"low","authority":"low","cost":"unclear","timeline":"unclear","reason":"健康存摺由中央健保主管機關開發營運，地方政府無權改版或導入功能；若改在市府自有 APP 實作，則涉及醫囑資料取得與個資授權。未說明做法與經費。","sources":[]},
  // 專案改善內湖成功園環路型
  "tpc2-8-p17": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只有專案改善特定路型的標題，未說明要改善的問題或手段（號誌、車道、立體化等），無法判斷經費與期程。","sources":[]},
  // 爭取捷運信義線東延至南港公園與中研院
  "tpc2-8-p18": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"東延段已於 2026 年 8 月通車至廣慈／奉天宮站；再延伸至南港、中研院未見正式規劃","horizon":"約 12–15 年以上","reason":"捷運路線延伸須經市府規劃、中央審議核定並取得補助。目前的東延段僅約 1.4 公里，從動工到通車將近十年；再延伸目前僅見地方期待，未見可行性研究。政見未說明路線、經費與財源。","sources":["https://udn.com/news/story/7323/9723477"]},
  // 更新內湖、南港聯外橋梁與人行環境，改善河濱自行車道
  "tpc2-8-p19": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"聯外橋梁、人行環境與河濱自行車道改善屬市府工務局權責。未指明哪些橋梁與更新內容，若涉及橋梁改建經費可能達數十億元，規模與期程無法估算；人行與自行車道改善則較易於任期內完成。","sources":[]},
  // 導入歐規清晰路牌，簡化交通標誌
  "tpc2-8-p20": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"交通標誌的樣式與設置依中央訂定的標誌標線號誌設置規則，市府無法自行改採歐規樣式，需建請中央修法。市府能做的是精簡重複標誌、改善路名牌與指引設計。規模與經費未說明。","sources":[]},
  // 完善校園投訴分流機制
  "tpc2-8-p21": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"校園投訴分流屬教育局可自行訂定的行政機制，需市府採納。主要調整流程，經費小，短期內可完成。","sources":[]},
  // 調降師生比，提高鐘點費與首都加給
  "tpc2-8-p22": {"level":"medium","authority":"low","cost":"unclear","timeline":"medium","reason":"教師待遇與加給由中央法規訂定，地方不能自行增設「首都加給」，屬明顯障礙；調降師生比與鐘點費在中央標準內可由市府加碼，但需增聘教師、編列預算。調降幅度未說明，經費無法估算。","sources":[]},
  // 校園巡迴推廣媒體識讀、防霸凌與性平教育
  "tpc2-8-p23": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"校園巡迴推廣媒體識讀、防霸凌與性平教育可由教育局委託團體或講師辦理，經費小，且與現行課綱及性平法規要求方向一致，任期內可實施。","sources":[]},
  // 運用 AI 與科技改善市區交通壅塞
  "tpc2-9-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只有「運用 AI 與科技改善交通壅塞」標題，未說明技術項目、適用範圍與經費，無法評估，資訊不足以判斷。","sources":[]},
  // 建立營養午餐成本調整、流標預警、備援供餐與固定協商四項機制
  "tpc2-10-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"午餐價格調整、流標輔導、備援供餐與協商會議都屬教育局可自行訂定的行政機制，需市府採納。價格隨物價調整會增加支出，但調幅與財源未說明；制度建立不需用地，一任內可上路。","sources":[]},
  // 升級校園食材登錄平台、建立家長數位反映管道，學童每週增加鮮奶或豆漿
  "tpc2-10-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"午餐平台升級、數位反映管道與增加乳品屬市府教育局權責，首長已原則同意。以國中小約 18.6 萬名學生、每週 2 瓶、每瓶約 15 元、一年約 40 週粗估，約 2.2 億元，占歲出約 0.1%；平台改善屬資訊系統小額經費。","sources":["https://www.storm.mg/lifestyle/11170518"]},
  // 研議將 65 至 85 歲長者重陽敬老禮金提高至 3,000 元，敬老卡點數可跨月累積
  "tpc2-10-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"現行 65–84 歲重陽禮金 1,500 元、85–98 歲 3,000 元，屬市府自治事項。全市 65 歲以上約 60 萬人，若 65–84 歲多數提高 1,500 元，粗估每年增加約 8 億元，約占歲出 0.3%，未說明財源；點數跨月累積僅需調整系統。","sources":["https://www.nownews.com/news/6863604","https://mknews.com.tw/2026/10/1006229/"]},
  // 評估在內湖既有橋梁增建雙層橋
  "tpc2-11-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"政見本身為「評估」雙層橋，可由市府委託可行性研究，經費數百萬至千萬元等級，任期內可完成評估。實際興建經費高、技術與工期難度大，已自承列為長期方案，不在本則評估範圍。","sources":[]},
  // 評估以稅務或租屋補助鼓勵內湖企業員工就近居住
  "tpc2-11-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"租屋補助市府可自訂，但地方可運用的稅目有限，以稅務誘因鼓勵企業員工就近居住的空間小。政見僅為評估，未說明補助額度與對象。","sources":[]},
  // 增加技職實作、企業體驗、產學合作與生涯探索課程資源
  "tpc2-11-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"增加技職實作、企業體驗與生涯探索課程資源，屬教育主管機關可推動的事項，可運用既有的產學合作與職涯探索計畫擴充。經費規模未說明，但無法規障礙。","sources":[]},
  // 國小、國中階段導入生涯探索、心理測驗與實作課程
  "tpc2-11-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"現行課綱已有生涯規劃與綜合活動領域，教育局可透過校本課程、教材與師資研習加強生涯探索與實作，經費小，任期內可推動。","sources":[]},
  // 重視家政、美術、工藝課程，避免被主科借課
  "tpc2-11-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"課程是否依課綱正常教學，屬教育主管機關的督導事項，可透過查核與宣導要求各校不得借課，不需額外經費，一任內可推動。","sources":[]},
  // 訂定全市統一的校園手機管理規範
  "tpc2-12-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"學校衛生法修正後，由教育主管機關訂定全市統一的校園手機管理規範，屬地方教育行政權限，經費極低。1 至 2 個月的時程偏緊，但一任內可完成。","sources":[]},
  // 在人潮熱點設置具垃圾壓縮與即時通報功能的智慧清潔箱
  "tpc2-12-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"智慧清潔箱可由市府環保局採購設置，國內外已有應用案例。未說明數量與地點，經費無法精確估算，但單價有限、可分批試辦，任期內可見成效。","sources":[]},
  // 爭取社會住宅與租金補助
  "tpc3-1-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"方向性主張，未提出社會住宅數量或租金補助金額，無法估算經費與期程。","sources":[]},
  // 推動流行音樂與藝文產業發展
  "tpc3-1-p1": {"level":"unclear","authority":"unclear","cost":"unclear","timeline":"unclear","reason":"僅為方向性主張，未提出具體措施、對象或經費，無法評估可行性。","sources":[]},
  // 從國家安全角度檢視松山機場遷建與大巨蛋營運
  "tpc3-1-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"方向性主張，未提出具體做法；機場遷建屬中央權限，從國安角度檢視營運的內容與手段皆不明確，無法評估。","sources":[]},
  // 市立運動中心泳池提供孕婦友善水道
  "tpc3-2-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"由市府在運動中心服務規範中加入孕婦彈性水道安排，屬營運管理調整，不需新增設施，額外經費極低。採現場人員依需求協助、不固定保留水道，對其他泳客影響小；市府已表示評估納入規範，一任內可完成。","sources":[]},
  // 捷運聯合開發住宅出售前須提出完整財務與公共住宅影響評估
  "tpc3-3-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"市有財產處分須經議會同意，議員可在審議時要求市府先提出財務比較、估價與公共住宅影響評估，屬議員職權可施力的範圍。所需為行政作業與報告，經費小，下次送審即可要求。","sources":[]},
  // 以市府補助推動老屋加裝外掛電梯
  "tpc3-4-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"市府可訂定補助辦法推動老屋加裝電梯，國內已有地方政府補助先例。但未說明補助額度與期程；實際執行常卡在住戶意見整合、法定空地與建築法規限制，完成案量可能有限。","sources":[]},
  // 規劃寵物公園並訂定寵物友善規範
  "tpc3-4-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"設置寵物公園與訂定友善規範屬市府公園與動保單位權責，臺北市已有寵物公園先例。未說明地點與規模，經費無法估算，但單一公園工程小，一任內可完成。","sources":[]},
  // 借鏡國外經驗推動城市綠化植樹，再延伸至綠建築
  "tpc3-4-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"綠化植樹與綠建築推動屬市府權限，需市府採納。只有方向，未說明數量、地點與期程，無法判斷。","sources":[]},
  // 督促市府運用姊妹市關係舉辦論壇與交流
  "tpc3-4-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"督促市府運用姊妹市關係辦論壇與交流，屬質詢監督，市府外事單位可在既有預算內辦理，經費低，一任內可執行；說明未列具體活動規劃。","sources":[]},
  // 建議中央建立全國性食安通報平台，並建立第三方驗證、產品追溯與預警制度
  "tpc3-5-p0": {"level":"low","authority":"low","cost":"unclear","timeline":"unclear","reason":"建立全國性食安通報平台、第三方驗證、產品追溯與加工製品標準，皆屬中央食品衛生主管機關權限，地方議員只能建議，無法自行推動或掌握期程。","sources":[]},
  // 就松山機場遷移改建產業園區案發起地方性公民投票
  "tpc3-6-p0": {"level":"low","authority":"low","cost":"high","timeline":"medium","reason":"市民可依法提案發起地方性公投，但地方性公投限於地方自治事項。松山機場屬中央民航與國防事務，題目恐被認定不屬地方權限而遭駁回，屬根本障礙。辦理公投需成本，但能否和全國選舉同日投票，也須視法規與審議結果。","sources":[]},
  // 提案以累計歲計賸餘普發每位市民現金 2 萬元
  "tpc3-7-p0": {"level":"low","authority":"medium","cost":"low","timeline":"medium","reason":"普發現金須由市府編列預算並經議會審議，議員只能以建議案推動。以臺北市約 250 萬人粗估，每人 2 萬元約需 500 億元，約占年度歲出 2,389 億元的 21%；即使降為 1 萬元也約 250 億元（約 10%），規模龐大，且累計賸餘能否支應未說明。","sources":[]},
  // 統一行人優先區鋪面與標示，檢討限速執法
  "tpc3-7-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"以議會質詢監督交通標示與執法一致性，屬議員職權；統一鋪面、標誌與以地面標示取代減速丘屬市府交通工程常態業務，經費小。主管機關已承諾一個月內提出執法標準與設置 SOP，可追蹤落實。","sources":[]},
  // 推動信義路五段 150 巷周邊電箱地下化、道路鋪面更新與綠色標線型人行道
  "tpc3-8-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"單一巷道的鋪面更新與標線型人行道屬市府工務局、交通局權責，經費小，可接續既有工程辦理。電箱地下化需台電配合與住戶同意，是主要變數，但範圍僅限單一巷弄，任期內完成可期。","sources":[]},
  // 推動居住正義
  "tpc3-9-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只有「居住正義」方向，未提出任何具體做法、對象或規模，無法判斷權責、經費與期程。","sources":[]},
  // 推動行人路權
  "tpc3-9-p1": {"level":"unclear","authority":"unclear","cost":"unclear","timeline":"unclear","reason":"僅為方向性主張，未提出具體路段、措施或經費，無法評估可行性。","sources":[]},
  // 推動環境保護
  "tpc3-9-p2": {"level":"unclear","authority":"unclear","cost":"unclear","timeline":"unclear","reason":"僅為方向性主張，未提出任何具體措施、對象或經費，無法評估可行性。","sources":[]},
  // 推動智慧教育
  "tpc3-9-p3": {"level":"unclear","authority":"unclear","cost":"unclear","timeline":"unclear","reason":"僅為方向性主張，未提出具體措施、對象或經費，無法評估可行性。","sources":[]},
  // 要求訂定無菸城市自治條例
  "tpc3-11-p0": {"level":"high","authority":"high","cost":"high","timeline":"medium","reason":"議員可自行提出自治條例草案，菸害防制法亦授權地方主管機關公告禁菸場所，地方立法有空間。條例須經議會三讀與行政院備查，與中央法規的競合需處理，但一任內可完成。","sources":[]},
  // 校園午餐有兩名以上學童同餐送醫即預防性停餐
  "tpc3-11-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"以委員會預算審議與要求專案報告施壓屬議員職權；訂定同餐多名學童送醫即預防性停餐的標準作業程序屬市府教育與衛生單位行政措施，經費極小，可迅速施行。","sources":[]},
  // 要求市府各機關以預備金或特別費採購庇護工場產品
  "tpc3-11-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"採購庇護工場產品屬各局處行政裁量，以預備金或特別費支應即可，每年數十萬至數百萬元等級，相對全市歲出微小。質詢時首長已當場允諾，落實與否可由議員持續追蹤，無法規或期程障礙。","sources":[]},
  // 要求重新檢視行道樹修剪工程的計點制度
  "tpc3-12-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"行道樹修剪預約工程的計點方式屬市府契約設計，可於下一期招標時修正，幾乎不增加經費，議員可藉質詢督促，任期內可完成。","sources":[]},
  // 要求市府與地方商圈合作，依各商圈需求提出輔導及振興方案
  "tpc4-2-p0": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"商圈輔導與振興方案屬市府產業單位既有業務，以質詢要求提出方案屬議員監督職權。未說明預算規模，但輔導計畫一般經費不大，可在一任內推動。","sources":[]},
  // 及早規劃花博園區改建期間的替代商圈與配套措施
  "tpc4-2-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"改建期間的替代商圈與配套措施屬市府規劃事項，議員可透過質詢督促及早規劃。以規劃與協調為主，經費小，可配合改建時程推動。","sources":[]},
  // 在大直橋至臺北橋河段舉辦水上摩托車計時賽
  "tpc4-3-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"在淡水河與基隆河段舉辦水上摩托車賽事，須取得河川管理、航行安全與水域遊憩管理等許可，牽涉中央河川管理機關與市府多單位。單次賽事可行，但安全、水質與噪音疑慮需克服；未說明經費。","sources":[]},
  // 設置划船訓練基地，簡化借船申請流程並提供器材補助
  "tpc4-3-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"划船訓練基地與借船流程、器材補助屬市府體育局權責，簡化流程與小額補助容易推動。設置基地需覓得河岸用地並取得河川區域使用許可，未說明地點與經費，硬體部分期程不確定。","sources":[]},
  // 規劃河岸光影步道，並在大稻埕碼頭周邊打造連續景觀與市集
  "tpc4-3-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"河岸步道與碼頭景觀改善屬市府可推動的建設，大稻埕碼頭已有舉辦活動的經驗。但工程位於河川區域，須取得河川管理機關許可並符合防洪要求；規模與經費未說明。","sources":[]},
  // 在市府新建的環保火化設施中規劃一座寵物專用火化爐
  "tpc4-6-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"在市府新建火化設施內增設寵物火化爐，需市府納入工程設計；單座設備屬既有工程中的增項，但經費未說明。寵物遺體處理涉及殯葬與廢棄物法規的適用及鄰里接受度，跨縣市寵物殯葬專區更需多方協調，市府目前僅表示研議，期程取決於火化設施本身的興建進度。","sources":[]},
  // 建立全齡支持體系
  "tpc4-7-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出全齡支持體系的理念，未提出具體措施、對象或規模，無法判斷可行性。","sources":[]},
  // 公園遊戲場增設遮陽設施
  "tpc4-8-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"遮陽設施免辦建照的處理原則可由市府依自治權限訂定，且已有其他縣市先例；市府已成立專案小組並選定示範公園。遮陽設施單價不高，一任內可擴大設置。","sources":[]},
  // 訂定吸菸區距離標準並改善查詢與清潔維護
  "tpc4-8-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"資訊專區、吸菸區設置前溝通、地圖補照片與英語介面、編列清潔人力預算，都是市府行政與小額經費可辦的事項。吸菸區距離標準可由市府訂為設置準則，與菸害防制的中央規範不衝突，一任內可完成。","sources":[]},
  // 協調團膳業者並訂定校園午餐招標備援計畫
  "tpc4-8-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"要求教育主管機關邀集團膳業者協調、訂定開學備援計畫，屬監督與行政協調；針對食材價格波動與偏遠學校運輸成本的補貼機制需編列預算，但未說明金額。","sources":[]},
  // 以累計歲計賸餘普發每位市民 2 萬 1 千元
  "tpc4-9-p0": {"level":"low","authority":"medium","cost":"low","timeline":"medium","reason":"以全市約 243 萬人、每人 2.1 萬元粗估，約需 510 億元，占 116 年度總歲出約 2,389 億元的兩成多。市府表示扣除已指定用途後，116 年度可用賸餘僅約 332 億元，財政局也表示需舉債、目前不宜發放。議會決議僅要求市府研議，不具強制力。","sources":["https://news.tvbs.com.tw/politics/4020014","https://news.cts.com.tw/cts/politics/202608/202608193069150.html"]},
  // 依人流與違規熱點規劃吸菸區，建立吸菸亭認養管理
  "tpc4-12-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"以質詢要求依人流與違規熱點選址並建立吸菸亭管理與認養機制，屬議員監督職權；首長已允諾研議企業認養。認養可降低市府支出，一任內可落實。","sources":[]},
  // 從制度面改善家事、性別平等與兒少保護問題
  "tpc4-14-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"家事、性平與兒少保護涉及社會局、教育局與中央法規。只有方向性主張，未提出具體做法，無法判斷。","sources":[]},
  // 改造大型區域公園為多代共享、親子共融、無障礙的生活空間
  "tpc5-1-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"公園改造屬市府工務局權責，但未指明哪些公園、改造內容與經費，資訊不足無法判斷規模與期程。","sources":[]},
  // 擴大輔具補助
  "tpc5-1-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"輔具補助由中央與地方共同辦理，市府可自行加碼或放寬資格。未說明放寬幅度與補助金額，經費無法估算；行政上任期內可調整。","sources":[]},
  // 強化老屋健檢制度並推動危老重建
  "tpc5-1-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"老屋健檢與耐震評估補助屬市府都發局、建管處可擴充的業務，危老重建依中央條例辦理、市府負責審核與輔導。未說明補助擴大幅度，經費屬中等；任期內可強化制度，實際重建進度則取決於住戶意願。","sources":[]},
  // 加速萬華都市更新
  "tpc5-1-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只有「加速萬華都市更新」標題，未列具體做法、範圍或期程，無法評估，資訊不足以判斷。","sources":[]},
  // 擴大街友安置與社工資源
  "tpc5-1-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"擴充街友臨時居所與社工人力需市府社政部門編列預算執行，方向明確，但未說明增設床位數、人力規模與經費。臨時居所需取得適合空間，常遇鄰里反對，可能拖慢設置進度。","sources":[]},
  // 設立局處層級的台語復振專責單位
  "tpc5-1-p5": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"新設局處層級機關須修訂組織自治條例，並受中央地方行政機關組織準則的一級機關數量上限約束，需市府提案、議會通過。人事與業務經費未說明；組織調整費時，但一任內可完成。","sources":[]},
  // 支持學校以台語作為授課語言或課室語言
  "tpc5-1-p6": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"國家語言發展法已允許以本土語言授課，方向上無法規障礙；但未列具體做法、學校數或師資規劃，無法評估經費與期程。","sources":[]},
  // 當選後以台語進行議會質詢
  "tpc5-1-p7": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"以台語進行質詢屬議員自身的問政方式，國家語言發展法保障國家語言的使用，議員可自行決定，無經費與期程障礙。","sources":[]},
  // 訂定學生出國參與國際競賽與活動的公假標準
  "tpc5-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"學生請假與公假規定可由教育局訂定，教育局已允研議。屬行政規範，經費小，短期內可完成。","sources":[]},
  // 以 AI 與數位工具盤點老城區閒置空間與人流
  "tpc5-4-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"標題是以 AI 盤點老城區閒置空間與人流，說明卻是市民服務與申辦便民，兩者對不上；也沒有具體工具、範圍與經費，資訊不足以判斷。","sources":[]},
  // 建立青年就業與微型創業支持網
  "tpc5-4-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"盤點共創空間、媒合與輔導屬產業局既有業務範圍，需市府採納執行。以盤點與媒合為主，不涉新建設施，經費小；一任內可建立網絡並看到初步成效。","sources":[]},
  // 推動跨城市交流與國際資源連結
  "tpc5-4-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只有推動跨城市交流與國際資源連結的方向，未說明合作對象、項目或預算，資訊不足以判斷。","sources":[]},
  // 公開行程與問政資料供市民查詢
  "tpc5-4-p3": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"公開自身行程與問政資料、不收政治獻金，議員本人即可決定並執行，幾乎不需經費，就任後即可實施。","sources":[]},
  // 盤點老舊街區人行道、路燈與無障礙環境
  "tpc5-4-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"盤點老舊街區人行道、路燈與無障礙設施屬市府工務局例行業務範圍，盤點本身經費小，議員可藉質詢督促，任期內可完成；後續改善工程規模則未說明。","sources":[]},
  // 推動社區長照與托育服務
  "tpc5-4-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只有推動社區長照與托育服務的方向，未說明據點數、服務量或經費，無法評估。","sources":[]},
  // 串連在地店家與觀光動線
  "tpc5-4-p6": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅提出串連店家與觀光動線、結合文化科技導覽的方向，未說明範圍、做法或預算，資訊不足以判斷。","sources":[]},
  // 推動時間銀行
  "tpc5-5-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"時間銀行可由社會局建置平台推動，需市府採納。營運成本不高，但服務時數多年後才兌現，須有長期保證與信任機制，國內多為小規模試辦；未說明規模與做法。","sources":[]},
  // 由市府協助老舊公寓無障礙修繕
  "tpc5-5-p1": {"level":"high","authority":"medium","cost":"unclear","timeline":"high","reason":"協助老舊公寓移除門檻、加裝扶手屬市府社政或建管可辦理的補助與服務，已有居家無障礙改善補助等類似機制可擴充。未說明補助戶數與金額，經費無法估算，但單戶工程小、一任內可推動。","sources":[]},
  // 補助獨居長者安裝非接觸式監測設備
  "tpc5-5-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"補助獨居長者安裝監測設備屬市府社會局可自行開辦的福利，可結合既有獨居長者關懷與緊急救援服務。未說明補助對象規模，若以列冊獨居長者為對象，粗估每年數千萬元等級；任期內可上路。","sources":[]},
  // 在人潮熱區彈性重設公共垃圾桶
  "tpc5-5-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"在熱區重設公共垃圾桶屬市府環保單位權責，設置與清運成本低，可在短期內試辦。","sources":[]},
  // 垃圾桶加裝滿溢感測器
  "tpc5-5-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"垃圾桶加裝滿溢感測器屬市府環保局權責，感測器單價不高，即使全市數千個行人垃圾桶全數加裝，粗估經費約千萬元等級，且已有國內外案例，任期內可推動。","sources":[]},
  // 假日與節慶增設巡迴清運班次
  "tpc5-5-p5": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"假日與節慶加開清運班次屬市府環保局調度權責，需增加加班費與車輛調度，未說明班次數量，經費屬中小規模，任期內可實施。","sources":[]},
  // 由教育局提供現成教案模組
  "tpc5-5-p6": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"教案模組可由教育局委託輔導團或教師社群開發，需市府採納。屬內容製作，經費小，一任內可陸續上線。","sources":[]},
  // 舉辦以市政為辯題的辯論賽
  "tpc5-5-p7": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"辦理以市政為題的辯論賽屬市府教育或青年單位一般活動，經費小、無法規障礙，一年內即可舉辦。","sources":[]},
  // 以補助引導畢業旅行結合文化與政策議題
  "tpc5-5-p8": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"畢業旅行補助屬教育局權限，需市府採納並編列預算。補助額度與對象未說明，總經費依參與校數而定；可在既有補助架構下推動，一任內可實施。","sources":[]},
  // 要求補教從業人員每年完成性平與防災課程
  "tpc5-5-p9": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"補習班管理屬地方權責，議員可提案修正補習班管理自治條例或要求市府修訂規則，要求從業人員每年完成各 2 小時課程。課程可線上辦理，經費小，一任內可施行。","sources":[]},
  // 公布補習班安全等級表並補助老舊班舍升級
  "tpc5-5-p10": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"補習班由教育主管機關依法管理，市府可依稽查結果建立並公布安全分級。補助私人班舍升級照明與警報屬補助民間業者，需訂定補助辦法，經費規模未說明。","sources":[]},
  // 建立校外性平保護專線
  "tpc5-5-p11": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"設立專線與要求補習班張貼宣導屬市府教育、社政主管機關可執行的行政措施，補習班管理亦屬地方權責。專線可結合既有保護通報系統，經費小，一任內可完成。","sources":[]},
  // 建立強制性租屋保險
  "tpc5-5-p12": {"level":"low","authority":"low","cost":"unclear","timeline":"low","reason":"強制民眾投保屬保險與租賃法制事項，須由中央修法，地方政府無權課予房東或房客強制投保義務。","sources":[]},
  // 對長期簽約且不漲租的包租代管業者減免地價稅與房屋稅
  "tpc5-5-p13": {"level":"medium","authority":"high","cost":"medium","timeline":"high","reason":"北市已依租賃住宅市場發展及管理條例訂定自治條例，對包租代管住宅減徵地價稅與房屋稅各 40%、每屋上限 1 萬元。加上長期簽約、不漲租的條件，可由議員提案修正自治條例；稅收減損規模、減免幅度與條件細節未說明，且須受中央母法授權範圍限制。","sources":["https://laws.gov.taipei/law/LawSearch/LawPrint/FL097617?type=0"]},
  // 將閒置公共空間轉為微型社宅
  "tpc5-5-p14": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"市有閒置空間活化屬都發局與財政局權限，需市府採納。未說明空間來源、戶數與經費；閒置空間改為住宅須符合建築與消防法規，變更使用需時間。","sources":[]},
  // 由政府直接包租住宅供弱勢使用
  "tpc5-5-p15": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"市府可自行或配合中央包租代管制度承租民宅轉租弱勢家庭，有前例可循。未說明戶數與租金補貼水準，經費無法估算；民間房東參與意願是推動關鍵，大規模擴張需時間。","sources":[]},
  // 盤點公有市場耗電空調並訂定分年汰換期程
  "tpc5-6-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"盤點市場空調並訂分年汰換期程，屬市府市場處的設備管理事項。全市 47 處市場中未明列一級能效者約 30 處，可分年編列汰換預算；總經費未說明，但相對總預算規模小，一任內可看到成效。","sources":[]},
  // 市場電費補助與節能設備更新、用電改善成效連動
  "tpc5-6-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市場電費補助與節能獎勵屬市場處權限，需市府採納。把既有補助改為和節能成效連動，設備汰換補助規模有限，一任內可實施。","sources":[]},
  // 行道樹補植速度須跟上移除速度，並公開補植時間、地點與數量
  "tpc5-6-p2": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"要求市府公開補植時間、地點與數量並加快補植，屬議員監督職權與市府公園路燈單位常態業務。引用的移除與補植落差需逐年補足，但行道樹苗木與植栽成本相對低。","sources":[]},
  // 補助 25 至 40 歲女性每年一次卵子庫存量（AMH）檢測
  "tpc5-7-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"AMH 檢測自費約一兩千元，市府可自行開辦補助。即使每年數萬人受檢，粗估經費約數千萬元，占歲出比例極低，行政上可透過合約醫療院所辦理，任期內可上路。","sources":[]},
  // 爭取坐月子補助金
  "tpc5-7-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只有「坐月子補助金」標題，未說明補助對象、金額或財源。依受益人數與每案金額不同，經費可從數千萬到數億元不等，無法估算，資訊不足以判斷。","sources":[]},
  // 增加孕期免費心理諮商服務
  "tpc5-7-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"孕期免費心理諮商可由衛生部門以既有社區心理衛生資源擴充，屬地方可自辦的服務。未說明次數與服務人數，但以全市每年出生數估算，所需經費占總預算比例很小，一任內可上路。","sources":[]},
  // 推動幼兒園公共化並逐年免學費，制定 2 至 6 歲義務教育
  "tpc5-7-p3": {"level":"low","authority":"low","cost":"low","timeline":"low","reason":"將 2 至 6 歲納入義務教育須修正國民教育法，屬中央立法權限，中央教育主管機關對向下延伸義務教育也持保留態度。幼兒園全面公共化與逐年免學費需大量園舍、師資與經常性經費，未說明財源。","sources":[]},
  // 鼓勵祖父母考取照顧證照並給予津貼
  "tpc5-7-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"由市府提供照顧證照課程並對取得證照的祖父母發放津貼，屬地方可自訂的補助，但需訂定資格、津貼額度與照顧對象等規範。未說明津貼金額與適用人數，經費無法估算。","sources":[]},
  // 以 AI 推動智慧長照
  "tpc5-8-p0": {"level":"unclear","authority":"unclear","cost":"unclear","timeline":"unclear","reason":"僅為競選文宣標語，未列出應用場景、服務對象或經費，無法評估可行性。","sources":[]},
  // 以 AI 推動學校教育
  "tpc5-8-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅為看板文宣「以 AI 推動學校教育」，未列具體做法、對象或經費，無法評估，資訊不足以判斷。","sources":[]},
  // 以 AI 推廣中正萬華在地美食
  "tpc5-8-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"觀光行銷屬市府觀光傳播局業務，需市府採納。只有方向口號，未說明 AI 的應用方式、規模與經費，無法判斷可行性。","sources":[]},
  // 西寧中繼市場在攤商遷入前備齊基礎設施
  "tpc5-9-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"西寧中繼市場由市府市場處興建，自治會已於 2026 年 5 月提出 13 項缺失，補齊基礎設施屬市府既有工程範圍，經費小，於攤商遷入前改善具可行性。","sources":["https://www.chinatimes.com/realtimenews/20260520003597-260405"]},
  // 推動為 2 歲以上幼兒教保場所監視錄影設備建立法律依據
  "tpc5-11-p0": {"level":"medium","authority":"low","cost":"medium","timeline":"medium","reason":"幼兒教保場所設置監視器的法律依據須修正中央幼兒教育及照顧相關法規，議員只能推動或透過地方自治法規先行規範部分事項。涉及隱私與教保人員權益，修法共識需時間。","sources":[]},
  // 成立都市更新專責機關
  "tpc5-12-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"新設一級機關「都更局」須修正市府組織自治條例並經議會通過，且受地方行政機關組織準則對一級機關數量的限制，可能需要整併其他機關。另需新增人力與辦公預算，經費未說明。集中人力能否實際加快都更，還要看審議與住戶整合等環節。","sources":[]},
  // 放寬老屋修繕補助門檻
  "tpc5-12-p1": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"老屋修繕補助門檻由市府補助要點自訂，下修申請條件屬行政修正即可。門檻放寬會增加申請件數與補助支出，但總額可由年度預算控制。","sources":[]},
  // 敬老卡點數累積至年底並擴大使用範圍
  "tpc5-12-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"市府已宣布敬老卡每月 600 點，並規劃在換發二代卡後開放其中 300 點於超商、超市、藥局使用，剩餘點數可累積至次月。改為累積至年底、擴及量販店，屬既有方案的延伸，但未用點數減少，會使實際支出增加，財源未說明。","sources":["https://news.pchome.com.tw/politics/nownews/20260608/index-78090236908537207001.html"]},
  // 提供每週 4 小時免費臨時托育
  "tpc5-12-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"每週 4 小時免費臨時托育須市府編列預算並擴充人力。以 0–6 歲約 13 萬名幼兒、使用率 20%、每小時 200 元、全年 52 週粗估，約 11 億元，占歲出約 0.5%；主要障礙在合法保母與臨托人力量能不足，需逐步擴充。","sources":[]},
  // 提高凍卵補助
  "tpc5-12-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"high","reason":"中央已有醫療性凍卵補助，市府可自行加碼或擴大適用對象，屬地方福利自治事項。未列補助金額與對象，經費無法估算；行政上任期內可開辦。","sources":[]},
  // 推動市場改建與商圈活絡
  "tpc5-12-p5": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"市場改建與商圈活絡屬市場處、產業局業務，需市府採納。未說明改建哪些市場、規模與做法，經費與期程無法判斷。","sources":[]},
  // 改善區內交通網絡
  "tpc5-12-p6": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有「改善區內交通網絡」方向，未列具體路段、措施或規模，無法判斷可行性。","sources":[]},
  // 推動寵物友善措施
  "tpc5-12-p7": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只有「推動寵物友善措施」標題，未列任何具體做法、規模或經費，無法評估，資訊不足以判斷。","sources":[]},
  // 要求年內通過大眾運輸導向開發（TOD）容積獎勵 3.0 方案
  "tpc5-13-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"TOD 容積獎勵屬都市計畫事項，需市府擬定並經都市計畫委員會審議後發布，議員可藉質詢督促。「年內通過」受審議程序與公開展覽期程限制，時程偏緊；市府本身支出低。","sources":[]},
  // 要求年內完成第三種住宅區提升為住三之一（容積率 300%）的都市計畫審議
  "tpc5-13-p1": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"住宅區分區變更屬市府都市計畫審議，議員只能要求加速。案件已進入審議程序，但都市計畫變更需經公展、委員會審議等法定流程，年內完成時程偏緊。","sources":[]},
  // 捷運沿線公車等候亭與捷運出入口不採原樣復舊，改結合人行道拓寬與綠色植栽
  "tpc5-13-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"捷運施工後的復舊設計屬捷運局、工務局權限，議員可透過質詢督促。改為拓寬人行道與植栽，成本高於原樣復舊，但可併入工程預算；配合工程期程即可完成。","sources":[]},
  // 艋舺公園改造後引導物資捐贈至指定地點，並以輔導街友重返社會為目標
  "tpc5-13-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"由社政與警政部門引導捐贈至指定地點、以輔導取代驅趕，屬市府既有社福與秩序管理業務，不需大筆經費。捐贈行為能否改變要看引導成效，但執行面無重大障礙。","sources":[]},
  // 加速移除人行道上的電桿等障礙物
  "tpc6-2-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"人行道電桿多屬台電或電信業者設施，遷移或地下化須由市府協調管線單位並分擔費用。未說明範圍，經費依數量而定；個案協調與施工耗時，一任內能完成部分路段。","sources":[]},
  // 調整山坡地限制發展區內不合理的限制
  "tpc6-2-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"山坡地限制發展區的檢討牽涉都市計畫變更與水土保持、地質安全等規範，未說明要調整哪些限制、範圍為何，無法評估。","sources":[]},
  // 規劃老舊違建逐步退場
  "tpc6-2-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只有「規劃老舊違建逐步退場」標題，未說明對象範圍、退場順序、拆除或補償方式與期程，無法評估經費與執行難度，資訊不足以判斷。","sources":[]},
  // 以市庫歲計賸餘加碼普發現金
  "tpc6-4-p0": {"level":"low","authority":"medium","cost":"low","timeline":"medium","reason":"議會只能提案要求，預算須由市府編列，議會不得增加支出。北市人口不到 244 萬，每人 2 萬元粗估約 488 億元，約占年度歲出 2,389 億元的兩成；市府稱扣除已指定用途後的歲計賸餘僅約 332 億元，一次性支出大且財源不足。","sources":["https://news.cts.com.tw/cts/politics/202608/202608193069150.html","https://news.ltn.com.tw/news/Taipei/breakingnews/5413484"]},
  // 於懷愛館吸菸區設置負壓式吸菸室示範
  "tpc6-5-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"於單一地點設置負壓式吸菸室示範屬市府環保或衛生單位可辦理的小型設施，經費低，市府已允評估，一年內可完成。","sources":[]},
  // 向中央爭取犬貓用人藥新制延後施行
  "tpc6-5-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"要求市府向中央反映屬可執行的行政協調。主管機關已於 2026 年 4 月宣布暫緩並註銷原訂 7 月施行的管理辦法，另訂新制，訴求已實現。","sources":["https://www.chinatimes.com/realtimenews/20260415001861-260405"]},
  // 由市府主導成立危老與都市更新推動中心
  "tpc6-6-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"由市府主導成立危老與都更推動中心，可透過既有都更主管機關的組織或委託方式設立，屬地方權限。人力與營運經費未說明，但規模有限，一任內可成立；能否實際縮短審議時程則需後續觀察。","sources":[]},
  // 擴大敬老卡使用範圍
  "tpc6-6-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"敬老卡用途與點數屬市府自治事項，擴大至計程車、市場、餐食需增設特約商家與核銷系統，行政上可行。用途擴大會提高點數使用率，若同時提高點數，以約 60 萬名長者計，每增加 100 點每月即增加可觀支出，且未說明財源。","sources":["https://mknews.com.tw/2026/10/1006229/"]},
  // 編列專款提高護理師薪資加給
  "tpc6-6-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"市立醫院護理師加給可由市府編列預算支應，屬地方權限。未說明加給金額與人數，經費無法精算，但相對總預算規模有限；加薪能否吸引人力回流、開放床位，還要看整體護理人力市場。","sources":[]},
  // 加強取締大型 LED 動態廣告車並檢討管理規定
  "tpc6-8-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"加強取締違規改裝、違停的廣告車屬地方警察與交通、環保部門既有執法權限；修訂廣告物管理等地方規定也屬自治事項，經費低。涉及車輛改裝的罰則屬中央法規，地方只能加強執法。","sources":[]},
  // 全面清查高人流區域的大型招牌並專案列管
  "tpc6-8-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"招牌管理屬建管處權限，議員可透過質詢督促清查與列管。清查為行政作業，經費小；可依既有招牌廣告管理規定執行，一任內可完成。","sources":[]},
  // 檢討市立運動中心泳池防溺系統並加強救生人員訓練
  "tpc6-8-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"運動中心由市府委外營運，檢討防溺系統、釐清監管責任與加強救生員訓練，屬體育局可要求的管理事項，議員可透過質詢督促。主要是行政檢討與訓練，經費小，短期內可完成。","sources":[]},
  // 加快毒駕尿液檢驗速度
  "tpc6-9-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"毒駕尿液檢驗流程可由市府委託或自設檢驗單位改善，但檢驗須符合中央認證規範；中央設速件中心則非市府權限。自設實驗室需設備與人力，未說明經費，屬可克服的障礙。","sources":[]},
  // 研議捷運拒載性犯罪累犯
  "tpc6-10-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"依捷運運送章則拒載屬捷運公司可研議的措施，警捷資料統一統計亦屬行政協調。但以犯罪紀錄拒載特定人涉及個資取得、比例原則與執行辨識等法律爭議，需先釐清法源。","sources":[]},
  // 恢復調查並長期監測鼠類數量
  "tpc6-10-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"鼠類密度調查過去曾辦理，市府環保局或衛生局恢復即可，方法有前例，粗估每年經費數百萬元等級，任期內可恢復並累積監測資料。","sources":[]},
  // 吸菸區須與校園、醫療機構保持距離並擴大禁菸範圍
  "tpc6-10-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"吸菸區設置與禁菸場所公告屬衛生局權限，需市府採納，市府已允提出設置要點。主要為行政規範與公告，經費小，短期內可完成。","sources":[]},
  // 暫緩出售位於新北市的捷運聯合開發住宅
  "tpc6-10-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"暫緩處分市有財產屬市府決策，議會可透過質詢與財產處分審議表達意見。暫緩出售本身不需支出，只是延後約 272 億元資產的處分收入；新北市新任首長年底就任，等待期間不長。","sources":[]},
  // 各行政區增設運動中心第二館，校園場地夜間開放租用
  "tpc6-11-p0": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"low","schedule":"low","stage":"僅有構想，未提地點","horizon":"約 8–12 年","reason":"全市 12 個行政區各增設運動中心第二館，屬多處大型場館興建，每館經費數億元以上，合計可能達數十億元且未說明財源。各區需另覓適當用地並經規劃、設計、施工，僅屬構想；校園夜間開放部分則較易推動。","sources":[]},
  // 擴大育兒與托嬰補助、推動公幼普及並鼓勵職場托育
  "tpc6-11-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"育兒與托嬰補助、公幼增設屬市府權責，職場托育可透過獎勵企業推動。未說明補助金額與財源，經費無法估算；公幼普及需空間與師資，四年內大幅擴充有難度。","sources":[]},
  // 盤點閒置市有房舍與土地，設置社區長照與日照據點
  "tpc6-11-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"盤點閒置市有房舍設置長照與日照據點屬市府權責，可申請中央長照經費補助。未說明據點數量，經費與期程無法精算，但已有類似活化先例。","sources":[]},
  // 推動動物零撲殺配套並擴大動物救援
  "tpc6-11-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"動物收容與救援屬動物保護處業務，需市府採納執行。未說明現行制度不足之處、配套內容與經費，無法判斷可行性與期程。","sources":[]},
  // 檢討警察進入校園的規定
  "tpc6-13-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"校園緊急事件的警方介入程序可由市府教育局與警察局以作業規範或協定調整，議員可透過質詢推動，經費極低。部分涉及中央校安規定，但地方訂定執行流程不受影響，任期內可完成。","sources":[]},
  // 爭取市府提供教師法律諮詢與律師費用協助
  "tpc6-13-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"由教育局設置教師法律諮詢窗口或律師費補助，屬市府可自行開辦的業務，粗估每年數百萬至千萬元等級，相對全市歲出微小，任期內可實施。","sources":[]},
  // 爭取經費讓學校聘任法律顧問
  "tpc6-13-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"學校聘任法律顧問可由教育局編列經費補助，粗估全市約 250 所公立學校、每校每年數萬元，合計約千萬元等級，佔全市歲出比例極低，亦可採區域共聘方式降低成本，任期內可推動。","sources":[]},
  // 提高 65 歲以上市民預立醫療照護諮商補助
  "tpc6-13-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"預立醫療照護諮商補助與敬老卡點數用途調整屬市府權限，需市府採納。諮商使用人數有限，提高補助的經費小，一任內可實施。","sources":[]},
  // 都更案件中長者及身障者比例較高者提高補助額度
  "tpc6-13-p4": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"市府可修正都更補助規定，對長者與身障者比例高的案件提高補助額度，屬地方自治事項。加碼幅度與經費未說明，但受益案件數有限，一任內可完成修法。","sources":[]},
  // 移除占用人行道的舊衣回收箱
  "tpc6-14-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"人行道占用物移除屬市府道路管理權限，議員可透過質詢督促。移除或遷移回收箱幾乎不需經費，只需與設置團體協調另覓地點，短期內可完成。","sources":[]},
  // 推動防災流程標準化與消防設備汰換
  "tpc6-15-p0": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"防災流程標準化與消防設備汰換屬市府消防局權責，可逐年編列預算。未說明汰換規模與增補人力數量，經費無法估算；消防人力補足受考試分發與訓練期程限制，四年內補足有難度。","sources":[]},
  // 建立社區互助安全網
  "tpc6-15-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"整合監視系統與志工照顧屬市府警察局、社會局權責，可擴充既有守望相助與獨居關懷體系。AI 監控涉及個資保護與隱私爭議，需建立規範；未說明範圍與經費，規模無法估算。","sources":[]},
  // 建立公正的第三方校園霸凌與性騷擾申訴機制
  "tpc6-15-p2": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"校園霸凌與性騷擾申訴程序由中央法規規範，地方須在既有框架內調整，例如擴大外部委員或獨立調查人才庫。未說明「第三方」的組成與運作方式，經費與期程難以精算。","sources":[]},
  // 推廣樂齡運動處方箋
  "tpc6-15-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"媒合教練進入長照據點屬衛生局、體育局業務，需市府採納執行。以既有據點與教練人力為基礎，經費不大，一任內可推廣。","sources":[]},
  // 改善護病比與夜班津貼
  "tpc6-15-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"護病比與護理人員待遇主要由中央醫療法規與健保支付制度規範，市府能直接影響的範圍限於市立醫院。未說明對象、標準與經費。","sources":[]},
  // 擴大以 AI 防詐並推動加重網路平台裁罰
  "tpc6-16-p0": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"警察機關擴大以 AI 防詐屬地方可辦事項。但加重網路平台裁罰、要求境外平台設立分公司屬中央立法權限，市府只能彙整建議送中央，主要訴求能否實現不在地方掌握。","sources":[]},
  // 簡化路邊停車費超商繳費流程，減少補單
  "tpc6-17-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"停車繳費流程屬停管處權限，主管機關已回應研議 QR Code 產生超商條碼。系統調整成本低，短期內可上線。","sources":[]},
  // 建立敬老愛心計程車司機獎勵機制
  "tpc6-17-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"敬老卡計程車司機獎勵可由市府社政與交通部門以補貼辦法推動。市府初估補貼 2.5% 清分服務費每年約 943 萬元，占總預算不到萬分之一，經費負擔小，一任內可上路。","sources":[]},
  // 擴編都市更新與建築管理人力
  "tpc6-17-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"擴編都更與建管人力屬市府組織與預算調整，議會可透過預算審議推動。市府已規劃增設一科、增加 105 名人力；以人事費每人每年約百萬元粗估，約 1 億元，占總預算不到千分之一，一任內可到位。","sources":[]},
  // 建置議員索資公開平台
  "tpc6-18-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"索資公開平台需市府或議會建置與維運，市府已允研議。系統建置與去識別作業經費有限，依法不得公開者可排除；一任內可完成。","sources":[]},
  // 強化本市聯合豐年祭與歲時祭儀等原住民族文化傳承與復振
  "tpcmi-1-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅有強化原住民族祭儀與文化復振的方向，未列具體措施、規模、期程或財源，無法評估經費與執行面，資訊不足以判斷。","sources":[]},
  // 爭取都會原住民在居住、就業、教育、文化方面的權益與福利
  "tpcmi-2-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"僅列出居住、就業、教育、文化等權益方向，未提具體措施、期程或財源，無法評估可行性。","sources":[]},
  // 推動原住民族金融教育推廣計畫
  "tpcmi-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"推動原住民族金融教育計畫屬市府原民單位可辦理的推廣業務，可與金融機構合作，經費小、無法規障礙。未提出場次與預算，但規模可控。","sources":[]},
  // 建立原住民族防詐騙宣導機制
  "tpcmi-3-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"防詐宣導可由原民會與警察局辦理，需市府採納。未說明宣導對象、管道與做法，無法判斷經費與成效。","sources":[]},
  // 設立原住民青年創業與購屋金融輔導平台
  "tpcmi-3-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"設立創業與購屋金融輔導平台屬市府原民單位可辦理的業務，可結合既有原民貸款與創業補助。未說明具體做法、規模與期程。","sources":[]},
  // 社會住宅對無子女、無自有住宅的高齡長者提供續住至終身的保障
  "tpcpi-1-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"社會住宅租期與續租規則由市府依住宅法訂定，延長特定弱勢長者租期屬地方可調整範圍。但終身續住會減少周轉率、影響其他申請者權益，市府已表達疑慮，政策共識需時間。","sources":[]},
  // 建立都市原住民職涯與職訓整合服務
  "tpcpi-2-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"都市原住民職訓與轉職服務屬原民會、勞動局權限，需市府採納。課程與線上服務成本有限，但培訓期間補貼的金額與人數未說明，總經費無法精算；可沿用既有職訓體系，一任內可推動。","sources":[]},
  // 增加原住民創業的小額週轉與信用保證
  "tpcpi-2-p1": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"在創業利息補貼之外，增加小額週轉、信用保證、信用修復與業師陪伴，屬市府可自辦的融資與輔導措施，可參照既有創業貸款與信保模式。項目多，但未說明保證額度、基金規模與財源，經費仍不明。","sources":[]},
  // 公開社會住宅原住民申請與入住統計
  "tpcpi-2-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"社宅統計公開與保障戶比例屬都發局權限，需市府採納。去識別化儀表板建置成本低；保障比例可在招租規定中調整，一任內可完成。","sources":[]},
  // 將閒置房舍與空屋轉為可負擔住宅
  "tpcpi-2-p3": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"盤點市有閒置房舍與老舊公宅並轉作可負擔住宅，市府可透過既有社宅與包租代管機制推動，但修繕經費與戶數規模未說明。民間空屋釋出要看屋主意願，優先對象的資格也須符合住宅法規定，成效不確定。","sources":[]},
  // 分階段推動原住民警消、軍職人員安居
  "tpcpi-2-p4": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"社會住宅對特定族群保留名額或加分屬市府可訂的出租規則，住宅法亦有保障原住民等族群的比例規定。但軍職屬中央人員、對象擴及多種職業需釐清優先序；未說明戶數與經費。","sources":[]},
  // 設置具文化敏感度的整合支持窗口
  "tpcpi-2-p5": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"整合原民、社政、勞政、衛政、警政與法扶資源成立單一窗口，屬市府跨局處協調事項。需配置具文化敏感度的人力，並讓當事人可選擇諮商人員，人力招募與培訓需要時間；經費與規模未說明。","sources":[]},
  // 設置常態原住民文化聚會所與母語行動圖書館
  "tpcpi-2-p6": {"level":"high","authority":"medium","cost":"medium","timeline":"medium","reason":"盤點市有空間設置原住民文化聚會所，並以行動圖書館把族語教材帶入校園與社區，屬市府原民與文化部門可辦事項。市區合適空間取得不易，常態營運人力與經費未說明。","sources":[]},
  // 建立族語師資與代課人才庫，公開族語選習資料
  "tpcpi-2-p7": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"族語師資人才庫與選習資料公開屬教育局、原民會業務，需市府採納。屬行政建置與資料公開，經費小，一任內可完成。","sources":[]},
  // 成立族語支持顧問團與城市族語教材庫
  "tpcpi-2-p8": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"族語推廣屬原民會、教育局業務，需市府採納。成立顧問團、建置教材庫與年度檢視為行政與內容建置，經費小；數位工具開發可與中央或學術單位合作，一任內可完成。","sources":[]},
  // 打造都市原住民青銀共創空間
  "tpcpi-2-p9": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"盤點閒置市有空間並設置諮詢窗口屬市府原民會與財產管理機關可辦理的業務，經費小，可利用既有空間，任期內可見成效；跨機關空間借用需協調，但無根本障礙。","sources":[]},
  // 在市立醫院試辦原住民長者健康導航服務
  "tpcpi-2-p10": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"在市立醫院試辦健康導航、加強文化訓練與照顧者支持，屬市府衛生局、原民會可辦理的業務；試辦規模小、經費低，任期內可實施並評估成效。","sources":[]},
  // 提供長者自願選用的居家安全裝置
  "tpcpi-2-p11": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"提供長者自願選用的居家安全裝置屬市府社會局可辦理的福利，可擴充既有緊急救援服務，並納入教學、維護與個資規範。未說明補助人數，經費屬中等規模；任期內可上路。","sources":[]},
});

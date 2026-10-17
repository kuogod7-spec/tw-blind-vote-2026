/*
 * 2026 基隆市長政見：可行性評估
 *
 * 評估日期：2026-10-17。由本站依統一標準評估，不是專家意見。
 * 評估時政見已匿名並打亂順序，評估者不知道每則政見屬於哪位候選人。
 * 預算比較基準：基隆市 116 年度（2027 年）總預算於 2026 年 10 月 14 日經市議會三讀通過、未刪減。依市府主計處公布的總預算案收支簡明比較分析表，歲出 287.5 億元，另債務還本 60 億元，收支合計 347.5 億元（媒體報導的 347.5 億元即此合計數）；歲入歲出差短約 26.6 億元，債務舉借約 86.6 億元。以下比例均以歲出 287.5 億元為分母。來源：https://www.klcg.gov.tw/tw/accounting/2404-322367.html 、https://www.klcg.gov.tw/wSite/public/Attachment/02205/f1789436106537.pdf 、https://news.ltn.com.tw/news/Keelung/breakingnews/5606351
 * 一般政見與長期建設的評估面向同 new-taipei-feasibility.js。粗估數字標「粗估」並寫出算式依據。
 */
window.FEASIBILITY = Object.assign(window.FEASIBILITY || {}, {
  // 三節敬老禮金由每節 3,000 元提高至 6,500 元
  "klm-1-p0": {"level":"medium","authority":"high","cost":"medium","timeline":"high","reason":"現況是三節慰問金每節 3,000 元，原限 2001 年前設籍者（約 2.8 萬人），2026 年中秋已對設籍滿 3 年長者普發 6,500 元。以 8.7 萬人計，每年支出粗估約 16.97 億元（8.7 萬 × 6,500 元 × 3 節），約占歲出 5.9%，屬經常性支出。116 年度總預算已有約 26.6 億元差短以舉債支應，政見未說明具體財源。","sources":["https://health.tvbs.com.tw/life/361888","https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 在捷運站周邊科技園區優先引進 AI 資料中心
  "klm-1-p1": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"unclear","schedule":"unclear","stage":"園區規劃階段，尚待都市計畫變更與市地重劃","horizon":"都市計畫變更與重劃完成後才能招商，粗估 2030 年後","reason":"現況是市府規劃在捷運五堵站（SB18）周邊約 30 公頃土地推動智慧科技園區，須經都市計畫變更與市地重劃。資料中心用電量大，供電須由台電評估，非市府可單獨決定；政見本身也以供電無虞為前提。政見未提出經費、財務機制與期程。","sources":["https://n.yam.com/Article/20260731382688","https://www.ctee.com.tw/news/20260324701551-430201"]},
  // 推動捷運聯合開發
  "klm-1-p2": {"track":"long","level":"unclear","authority":"medium","maturity":"unclear","financing":"unclear","schedule":"unclear","stage":"僅有口號，未指明站點與範圍","horizon":"無法判斷","reason":"政見未說明是哪一階段、哪些站點或土地，也未提出經費與期程，無法評估。現況是基隆捷運第一階段（南港至八堵）由新北市政府主辦興建，聯合開發須與主辦機關及土地所有權人協調；第二階段路線尚在可行性研究，市府曾表示麥金路沿線有多處可開發基地。","sources":["https://news.pts.org.tw/hotTopic/761","https://udn.com/news/story/7328/9442739"]},
  // 5 年內完成三座購物中心
  "klm-1-p3": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"medium","schedule":"medium","stage":"東岸已由民間 ROT 經營；八斗子遊艇港已簽約；暖暖港務公司土地招商中","horizon":"三案進度不一，五年內全部完成有不確定性","reason":"三案多以民間投資為主。現況是東岸停車場商場 2023 年底以 ROT 招商、2024 年 1 月簽約交民間經營；八斗子遊艇港（碧砂漁港旁）招商案已簽約，投資逾 20 億元，含約 200 間客房飯店與約 3,000 坪商場，分三區開發；暖暖東暖新村北側約 2,207 坪住三用地由港務公司招商，土地非市府所有。市府對港務公司土地無主導權，招商結果取決於業者意願。","sources":["https://udn.com/news/story/7321/9234977","https://udn.com/news/story/7328/9506985","https://udn.com/news/story/7241/9656103"]},
  // 保留臺鐵與捷運並行，捷運另由麥金路進入市區
  "klm-1-p4": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"low","schedule":"unclear","stage":"第二階段可行性研究中，市府擬於 2026 年底向中央提報麥金路方案","horizon":"可研定案後尚需綜合規劃、核定與施工，粗估 2035 年後","reason":"現況是基隆捷運第二階段（八堵至基隆）由市府辦理可行性研究，比較麥金路與臺鐵路廊兩案；2026 年 5 月市府表示評估以麥金路方案較佳，預定年底只向中央提報該案。麥金路方案長約 4.76 公里，採高架與山岳隧道，市府稱優先利用公有地與既有道路，是否拆屋待確認。交通部 2021 年曾表示第二階段至少是十年後的事。政見未提經費與完工時程，且須經中央核定與補助。","sources":["https://udn.com/news/story/7328/9512985","https://www.cna.com.tw/news/aloc/202605050046.aspx","https://news.pts.org.tw/article/552428"]},
  // 青年電動機車補助方案明年度續辦
  "klm-1-p5": {"level":"medium","authority":"high","cost":"low","timeline":"medium","reason":"現況是青年電動機車補助自 2023 年推出，逾 2 萬人申請，2026 年 1 月因財政吃緊暫停；審計單位指出原規劃四年 5 萬輛、總經費 27.5 億元，僅編 12 億元。政見未說明數量、經費與新財源，以原規劃每輛約 5.5 萬元粗估（27.5 億 ÷ 5 萬輛），每 1 萬輛約需 5.5 億元，約占歲出 1.9%。","sources":["https://udn.com/news/story/7328/9659619","https://news.ltn.com.tw/news/politics/breakingnews/5522803"]},
  // 重陽敬老金加倍
  "klm-3-p0": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"現行基隆市重陽敬老禮金為 65–99 歲 1,000 元、100 歲以上 6,000 元，屬市府自辦福利。基隆市 65 歲以上人口占比約 23.01%（2026 年 8 月），以總人口約 36 萬人計，粗估約 8.3 萬人；每人增加 1,000 元，年增支出粗估約 0.83 億元（8.3 萬 × 1,000 元），約占歲出 0.29%。政見未說明財源，但金額相對小，次年即可實施。","sources":["https://www.nownews.com/news/6861734","https://money.udn.com/money/story/5621/9795706"]},
  // 長者三節慰問金加倍，每年最高可領 2 萬元
  "klm-3-p1": {"level":"medium","authority":"high","cost":"low","timeline":"medium","reason":"現行三節慰問金每節 3,000 元，加倍為 6,000 元，若以 65 歲以上約 8.3 萬人粗估，年支出約 14.9 億元（8.3 萬 × 6,000 元 × 3 節），約占歲出 5.2%；不受設籍日限制後受益人數可能更多。政見自述財源視財政收支劃分法修正與刪減市府預算而定，修法屬中央權限，財源不確定。116 年度總預算已有約 26.6 億元差短以舉債支應。","sources":["https://health.tvbs.com.tw/life/361888","https://money.udn.com/money/story/5621/9795706","https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 身心障礙者三節慰問金由每節 1,500 元提高至 3,000 元
  "klm-3-p2": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"身心障礙者慰問金屬地方自辦福利。以約 2.2 萬人計，年支出由約 0.99 億元增至約 1.98 億元（2.2 萬 × 9,000 元），增加約 0.99 億元，約占歲出 0.34%。政見未說明財源，但規模相對小。","sources":["https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 新生兒補助 16 萬元起
  "klm-3-p3": {"level":"medium","authority":"high","cost":"medium","timeline":"high","reason":"政見未說明 16 萬元是否包含中央自 2026 年起每名新生兒 10 萬元的給付，也未說明分項與財源。現行基隆市生育津貼每胎 2 萬元，市議會 2025 年通過提高至 3 萬元。若全由市府支出，以每年出生約 1,000 人粗估約 1.6 億元（1,000 × 16 萬元），約占歲出 0.56%；若含中央 10 萬元，市府增加支出明顯較少。","sources":["https://www.gvm.com.tw/article/119162","https://news.pts.org.tw/article/798480"]},
  // 每月發放 1,000 元育兒消費券
  "klm-3-p4": {"level":"medium","authority":"high","cost":"medium","timeline":"high","reason":"發放消費券屬地方自治事項，但政見未說明發放年齡範圍與財源。基隆市 2025 年粗出生率 2.89‰，以總人口約 36 萬人計，每年出生約 1,000 人；若以 0–6 歲約 6,500 人粗估（假設，政見未載明），年支出約 0.78 億元（6,500 × 12,000 元），約占歲出 0.27%；年齡範圍若擴大，經費隨之增加。","sources":["https://news.pts.org.tw/article/798480","https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 國小、國中、高中入學各發 1 萬元入學禮金
  "klm-3-p5": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"入學禮金屬地方自治的現金給付。政見未說明財源；以國小、國中、高中三個入學年級各約 2,000 人粗估（假設），年支出約 0.6 億元（6,000 × 1 萬元），約占歲出 0.21%。發放方式單純，次年即可實施。","sources":["https://udn.com/news/story/6898/7913503","https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 每個國中學區設置一處公共托育
  "klm-3-p6": {"level":"medium","authority":"high","cost":"medium","timeline":"medium","reason":"公共托育設置屬地方權限，可申請衛福部前瞻或少子化對策補助。現況是全市公托據點由 2022 年的 3 處增加至 8 處，市府長期目標為 24 處。各學區須覓得場地並招募托育人員，政見未說明經費與期程。","sources":["https://udn.com/news/story/7328/9668448"]},
  // 免費接種輪狀病毒疫苗
  "klm-3-p7": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"現況是行政院已於 2025 年 12 月同意輪狀病毒疫苗納入幼兒公費疫苗，預計 2027 年 1 月 1 日起實施，屆時地方幾乎無須另行負擔。政見未說明與中央公費計畫的關係，市府僅須配合銜接過渡期。","sources":["https://udn.com/news/story/7266/9597927"]},
  // 設置國家級職訓基地
  "klm-3-p8": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"「國家級」職訓基地須由勞動部規劃、核定與編列經費，市府只能爭取與提供土地。查無勞動部已核定此計畫的資料。政見未提經費、規模與期程。","sources":["https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 以閒置國小校地與工會合辦勞工大學
  "klm-3-p9": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"基隆市因少子化已有小學退場，公立國小 39 所中有 9 校學生數低於 100 人，閒置校舍活化屬市府權限。與工會合辦職業課程可申請勞動部職訓補助，校舍整修經費相對有限。","sources":["https://udn.com/news/story/7323/9035416"]},
  // 加碼初次尋職津貼與穩定就業獎勵金
  "klm-3-p10": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"中央現行支援青年就業計畫對初次尋職青年發給尋職津貼最高 1.8 萬元、就業獎勵金最高 3.6 萬元，地方等額加碼屬自治範圍。受益人數限於符合中央計畫資格的基隆籍青年，經費規模相對小。須與勞動部資料勾稽，實施難度不高。","sources":["https://health.tvbs.com.tw/nutrition/360339","https://blog.104.com.tw/youth-first-job-seeking-employment-subsidies/"]},
  // 任內讓捷運實質動工
  "klm-3-p11": {"track":"long","level":"medium","authority":"medium","maturity":"high","financing":"medium","schedule":"medium","stage":"第一階段工程總經費已通過行政院公共工程委員會審議，先期工程已開工","horizon":"第一階段主體工程可望任內動工，目標 2033 年通車；第二階段任內動工可能性低","reason":"政見未說明指哪一階段。現況是第一階段（南港至八堵）綜合規劃 2024 年 1 月經行政院核定，由新北市政府興建營運；先期工程 2025 年 12 月開工，基隆市分擔 47.92 億元；2026 年 10 月工程總經費 696.89 億元通過行政院公共工程委員會審議，主體工程任內動工機率高。若指第二階段，路線仍在可行性研究，任內動工難度高。","sources":["https://www.nownews.com/news/6882977","https://www.nownews.com/news/6770637","https://udn.com/news/story/7328/9442739"]},
  // 將現有鐵路路廊改建為捷運第二階段進入市區
  "klm-3-p12": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"low","schedule":"unclear","stage":"第二階段可行性研究中，臺鐵路廊為比較方案之一，市府擬提報麥金路方案","horizon":"可研定案後尚需綜合規劃、核定與施工，粗估 2035 年後","reason":"現況是第二階段可行性研究比較麥金路與臺鐵路廊兩案，市府 2026 年 5 月表示預定年底只向中央提報麥金路方案。交通部 2021 年曾表示臺鐵與捷運若並存都難以營運、須二選一，並表示第二階段至少是十年後的事；臺鐵屬中央國營事業，路廊改建須中央同意。政見未提經費與完工時程。","sources":["https://udn.com/news/story/7328/9442739","https://udn.com/news/story/7328/9512985","https://news.pts.org.tw/article/552428"]},
  // 將 5,000 萬元預算改用於汰換老舊公車、改善駕駛待遇與調整路線班次
  "klm-3-p13": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"市議會已在 2026 年 6 月審查追加減預算時刪除雙層觀光巴士採購 5,000 萬元，改列公車汰換、司機待遇與路線調整屬市府與公車處權限，但須重新編列預算並經議會通過。5,000 萬元約占歲出 287.5 億元的 0.17%。現況是公車處司機員額 271 人、實際約 229 人，已因缺工停駛部分班次，市府已調薪招考；班次能否恢復取決於招募成效。","sources":["https://udn.com/news/story/7328/9548762","https://udn.com/news/story/7266/9639105","https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 推動國道客運增設直達臺北、快速折返的支線並優化既有路線
  "klm-3-p14": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"國道客運屬公路汽車客運業，依公路法須向中央主管機關申請並取得營運路線許可，市府角色為協調與爭取。報導指出業者預計 2026 年 9 月向交通部申請 1813 支線基隆發車、直達臺北、快速折返的新班次，行政院表示會協助加快審核。增班主要由業者營運，市府經費負擔小。","sources":["https://cna.com.tw/news/aipl/202609010090.aspx","https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040001"]},
  // 開辦水上計程車
  "klm-3-p15": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"載客船舶營運須依航業法向航港局申請，碼頭與停靠點涉及漁港與商港管理單位，市府須協調並委由業者經營。東北季風期間海象不佳，可能影響全年營運。政見未說明經費、船數與營運模式。","sources":["https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 推出醫療巡迴公車並強化急重症、兒科醫療量能
  "klm-3-p16": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"醫療巡迴公車可由市府自辦或委託，屬地方權限。強化急重症與兒科量能須仰賴轄內醫院（含衛福部所屬醫院與民間醫院）增聘醫師，涉及醫事人力供給與中央醫療政策，市府能直接掌控的部分有限。政見未說明經費與做法。","sources":["https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 對里長辦理防災訓練，建立社區安全網
  "klm-3-p17": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"對里長辦理防災訓練屬地方自治的災害防救業務，經費小，一年內即可辦理。政見未說明訓練內容、頻率與「社區安全網」的具體做法，成效難以量化。","sources":["https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 社工依年資分級加給，市長親自主持社會安全網與警社合作會議
  "klm-3-p18": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"市府自聘社工的加給與召開跨局處會議屬市府權限。政見未說明加給金額與適用人數，但社工人數有限，經費規模相對歲出 287.5 億元應屬小額。須修訂相關支給規定並編列預算。","sources":["https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 發展夜間觀光
  "klm-3-p19": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"輔導旅宿、漁市導覽、鼓勵酒吧與 Live House 多屬市府權限，但港區住宿與遊艇夜宿涉及港務公司土地與航港法規，古蹟夜間開放須依文資法與管理單位協調。精品旅館須由民間投資，政見自述為中長期。各項未列經費與期程。","sources":["https://udn.com/news/story/7328/9506985"]},
  // 提高寵物絕育補助並增設寵物友善公園
  "klm-3-p20": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"絕育補助提高屬地方動物保護業務，總預算 100 萬元約占歲出 0.003%，財源規模明確。七個行政區各設寵物友善公園可利用既有公園改設，經費與期程未說明，但工程規模小，任內可完成。","sources":["https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 寵物看診補助每次 200 元、每年最多 3 次，並推動寵物醫院夜間急診
  "klm-3-p21": {"level":"medium","authority":"high","cost":"medium","timeline":"medium","reason":"寵物看診補助屬地方自治事項，但政見未說明補助對象與總預算，經費取決於登記寵物數與使用率。寵物醫院夜間急診須由民間動物醫院投入，涉及獸醫人力與營運成本，市府只能以補助或合作方式推動，成效不確定。","sources":["https://news.ltn.com.tw/news/life/paper/1774607"]},
  // 興建新市政大樓，提供一站式智慧服務並帶動舊市區再生
  "klm-3-p22": {"track":"long","level":"medium","authority":"high","maturity":"medium","financing":"low","schedule":"unclear","stage":"現行市府已有合建招商規劃，尚有爭議","horizon":"以同類合建案粗估，招商後設計施工約需 5–7 年","reason":"興建市政大樓屬地方自治事項，但政見未提出經費、地點與期程。現況是市府規劃在中正路舊公車修理廠舊址以公辦都更合建方式興建，2025 年 4 月招商說明會估開發金額逾 50 億元，由市府提供土地、投資人出資興建；議員 2025 年 10 月向監察院檢舉，指合建方式恐造成公有地流失，市府回應依法合規。不同財務模式對市府負擔差異大。","sources":["https://www.ctee.com.tw/news/20250422702061-430602","https://www.cna.com.tw/news/ahel/202510160111.aspx"]},
  // 在暖暖區增設青年住宅與公共托育
  "klm-3-p23": {"track":"long","level":"unclear","authority":"medium","maturity":"low","financing":"unclear","schedule":"unclear","stage":"僅有構想，未指明基地與戶數","horizon":"無法判斷","reason":"政見未說明青年住宅的基地、戶數、經費與期程，也未說明公共托育規模，無法評估。社會住宅一般可與中央合作或申請補助，從選址到完工通常需 4–6 年。","sources":["https://udn.com/news/story/7328/9668448"]},
  // 改造信義區田寮河水岸並規劃夜間燈光
  "klm-3-p24": {"level":"high","authority":"high","cost":"medium","timeline":"high","reason":"田寮河為市區河道，水岸改造與夜間照明屬市府工程權限，可爭取中央水環境或景觀補助。政見未說明範圍、經費與期程；一般景觀照明工程規模有限，任內可完成。","sources":["https://news.ltn.com.tw/news/life/paper/1774607"]}
});

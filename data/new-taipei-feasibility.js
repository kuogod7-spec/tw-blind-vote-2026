/*
 * 2026 新北市長政見：可行性評估
 *
 * 評估日期：2026-10-13。由本站依統一標準評估，不是專家意見。
 * 評估時政見已匿名並打亂順序，評估者不知道每則政見屬於哪位候選人。
 * 一般政見：authority 權責、cost 財源、timeline 期程（一任四年），各分 high / medium / low / unclear；level 為總評。
 * 長期建設（track: "long"）：不以四年為標準，改用 authority 權責、maturity 規劃成熟度、
 *   financing 財務規劃、schedule 期程合理性，並附 stage 目前階段、horizon 合理預估期程。另行盲評。
 * 預算比較基準：新北市 115 年度歲出約 2,605 億元（部分項目引用 116 年度約 2,701 億元）。
 */
window.FEASIBILITY = {
  // 公立國中小營養午餐全面免費
  "ntp-1-p0": {"level":"high","authority":"high","cost":"medium","timeline":"high","reason":"新北國中小免費午餐已於2026年上路，以每餐75元為基準，每年約48億元，約占歲出2,605億元的1.8%，今年以墊付方式支應。團膳設備補助的金額未說明。","sources":["https://udn.com/news/story/7323/9640053","https://www.cna.com.tw/news/aloc/202601070325.aspx"]},
  // 0–6 歲兒童免門診及住院部分負擔
  "ntp-1-p1": {"level":"high","authority":"high","cost":"medium","timeline":"high","reason":"臺北市已由衛生局編預算，補助未滿6歲兒童住院部分負擔，部分對象含門診。輪狀病毒疫苗每人約4,000–6,000元，新北已補助部分族群。全面實施經費依就醫量而定，未見官方估算。","sources":["https://laws.gov.taipei/law/LawSearch/LawPrint/FL013743?type=0","https://health.tvbs.com.tw/nutrition/359394"]},
  // 提高敬老卡點數並補助長者假牙
  "ntp-1-p2": {"level":"medium","authority":"high","cost":"low","timeline":"medium","reason":"敬老卡約89萬人受惠，1,000點全額使用時理論上限每年約107億元（89萬×1,000×12）。市府估假牙全面補助約41億元。合計可達歲出2,605億元的數個百分點，財源未說明。","sources":["https://udn.com/news/story/7323/9509914","https://www.ctee.com.tw/news/20250924700991-431401","https://www.cna.com.tw/news/aloc/202601070325.aspx"]},
  // 提高住宿式長照機構入住補助
  "ntp-1-p3": {"level":"medium","authority":"high","cost":"medium","timeline":"medium","reason":"中央自115年起每年補助最高18萬元，提高至24萬元須由市府自籌，每人每年加6萬元，每1萬名住民約6億元。新北住民數未取得。夜間喘息量能受人力限制。","sources":["https://www.mohw.gov.tw/cp-16-87895-1.html"]},
  // 加碼提供免費心理諮商
  "ntp-1-p4": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"中央方案每次補助1,600元，至2025年底共服務約8.8萬人。若新北以人口約1/6比例推估約1.5萬人，再加碼3次，每年約0.7億元，約占歲出0.03%。","sources":["https://udn.com/news/story/7266/9253939","https://www.cna.com.tw/news/aloc/202601070325.aspx"]},
  // 媒合企業合作設置托育並開辦夜間托育
  "ntp-1-p5": {"level":"medium","authority":"high","cost":"medium","timeline":"medium","reason":"新北已與勞動部合辦企業托育補助，新設最高400萬元，另有弱勢家庭夜托補助。虧損補助50%及夜間托育須招募托育人員，經費依參與規模而定。","sources":["https://www.1111.com.tw/news/jobns/151740"]},
  // 教師節禮金加倍並補發假日出勤加班費
  "ntp-1-p6": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"禮金與加班費屬地方人事預算。2025年約4.3萬人受領1,000元，加倍後每年約增0.43億元，約占115年度歲出2,605億元的0.02%。加班費須符合中央支給規定，補休有前例可循。","sources":["https://www.ctee.com.tw/news/20250918700991-431401","https://www.cna.com.tw/news/aloc/202601070325.aspx"]},
  // 獎勵提供友善家庭措施的企業
  "ntp-1-p7": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"市府已有企業友善家庭獎勵，每家上限5萬元，首年15家獲獎、共35萬元。上限提高到100萬元，若百家獲獎約1億元，占歲出約0.04%，可自行編列。","sources":["https://newtalk.tw/news/view/2021-03-02/543538","https://udn.com/news/story/6656/9761268"]},
  // 提高青農免息貸款額度並加倍證照獎金
  "ntp-1-p8": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"中央青農貸款一般戶5年200萬元免息、百大青農500萬元，本案屬市府加碼利息補貼與獎金，可自行編列。每人增加約數萬元利息補貼，占2,701億元歲出比例極小。","sources":["https://www.cna.com.tw/news/ahel/202302170262.aspx","https://udn.com/news/story/6656/9761268"]},
  // 新建國際會展中心並加速科技園區開發
  "ntp-1-p9": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"medium","schedule":"medium","stage":"科學城都計公展中；大柑園待送政策環評","horizon":"約 8–12 年分期開發","reason":"淡海科學城約662公頃，國土署2026年7月公展都市計畫，採區段徵收；大柑園約621.59公頃，預計2026下半年送政策環評。兩案都有區段徵收方向，但沒有經費估算。會展中心與算力中心查無經費或期程。期程約估：參照區段徵收前期約5年，再加開發期。","sources":["https://udn.com/news/story/7241/9660660","https://udn.com/news/story/7241/9641586","https://www.cna.com.tw/news/aipl/202405270337.aspx"]},
  // 提高職災與退休煤礦工慰問金
  "ntp-1-p10": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"退休煤礦工慰問金是市府現行措施，每年2,000元，提高後每人每年多4,000元。領取人數未公開，但對象限高齡且有設籍條件，總額小，可由勞工局預算支應。","sources":["https://www.storm.mg/article/11146794","https://news.ltn.com.tw/news/NewTaipei/breakingnews/5492513"]},
  // 成立都市更新局並改革都更審議
  "ntp-1-p11": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"都更處目前是城鄉局下的二級機關。升格需修正組織自治條例並經議會通過；直轄市人口200萬以上，一級機關上限32個。主要成本為人事與系統建置，金額小。","sources":["https://laws.gov.taipei/law/LawSearch/LawArticleContent/FL001121","https://cna.com.tw/news/aloc/202608190134.aspx"]},
  // 試辦長租型育兒家庭住宅
  "ntp-1-p12": {"level":"high","authority":"high","cost":"medium","timeline":"high","reason":"社宅租期由地方出租辦法訂定。現行育兒家庭最長可租12年，延長到20年需修正市府辦法，市府可自行辦理。成本主要來自房源周轉率下降，試辦規模未說明。","sources":["https://www.ctee.com.tw/news/20260804700832-430104","https://money.udn.com/money/amp/story/5621/9484652"]},
  // 以 AI 與大數據重整公車路網，研議低價月票
  "ntp-1-p13": {"level":"medium","authority":"high","cost":"medium","timeline":"high","reason":"市區公車路網調整屬市府權責，一任內可執行。600元公車月票仍在研議，無經費估算。現行TPASS由中央、地方分擔補貼，近年總經費約數十億元，新票種的財源與中央分攤方式尚未說明。","sources":["https://udn.com/news/story/6656/9739111","https://news.pts.org.tw/article/609935"]},
  // 成立北北基桃首長級跨域交通治理平台
  "ntp-2-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"基北北桃合作平台已有市長層級與副市長層級會議，並曾列管捷運跨域案件。提升層級的成本低，但國道與快速道路屬中央權責；30分鐘生活圈目標未列預算與期程，成效取決於各案推進。","sources":["https://www.rde.ntpc.gov.tw/userfiles/1160700/files/114%E5%B9%B48%E6%9C%887%E6%97%A5%E7%AC%AC5%E6%AC%A1%E5%89%AF%E5%B8%82%E9%95%B7%E5%B1%A4%E7%B4%9A%E6%9C%83%E8%AD%B0%E7%B4%80%E9%8C%84.pdf","https://newtalk.tw/news/view/2023-04-05/865162"]},
  // 增加路外停車並打通人行道斷點
  "ntp-2-p1": {"level":"high","authority":"high","cost":"medium","timeline":"high","reason":"利用公有地興建停車場屬市府權責，已有先例：重陽公園地下停車場約4.6億元、257格；信義國小地下停車場約6.9億元、259格。單案經費占2605億元總預算比例低，但須逐案編列預算。","sources":["https://www.cna.com.tw/news/aipl/202412260262.aspx","https://udn.com/news/story/7323/9454444"]},
  // 樹林段鐵路地下化並延伸至鶯歌
  "ntp-2-p2": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"low","schedule":"medium","stage":"構想階段，尚無地下化可行性研究","horizon":"約 12–15 年以上","reason":"樹林段查無正式可行性研究與經費，鶯歌2021年僅辦平交道改善可研。鐵路立體化須交通部、行政院核定，經費由中央與地方分擔。參考台南新市案：可研送審約1年仍未核定，綜規核定後施工約6–8年，故約估12–15年以上。","sources":["https://news.ltn.com.tw/news/Tainan/breakingnews/5256117","https://www.dorts.ntpc.gov.tw/cdn/file/20211125/ce634ae2-8434-4452-a69e-5e1798f01bb8.pdf","https://www.mirrormedia.mg/story/20260731-166inv-122212"]},
  // 規劃大漢溪捷運縱貫線
  "ntp-2-p3": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"low","schedule":"medium","stage":"路廊構想，尚無正式研究","horizon":"約 15–20 年以上","reason":"目前僅公布路廊構想，查無長度、經費與可行性研究，且須跨北市、桃園、基隆協調。可比的土城樹林線13.3公里，經費由555.3億元增至約770億元，2022年開工、預計2031年完工。據此約估新線需15–20年以上。","sources":["https://www.mirrormedia.mg/story/20260731-166inv-122212","https://www.nownews.com/news/6732999","https://udn.com/news/story/7266/9069877"]},
  // 淡海輕軌廊道升級為中運量快線
  "ntp-2-p4": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"low","schedule":"medium","stage":"升級構想，尚無正式可行性研究","horizon":"約 15 年以上","reason":"目前僅為升級中運量的構想，查無路線長度、經費與可行性研究，須與台北市整合並經中央核定。參考土城樹林線：2022年開工、預計2031年完工，施工約9年；再加可研與綜規審議，約估15年以上。","sources":["https://www.nownews.com/news/6861554","https://www.mirrormedia.mg/story/20260731-166inv-122212","https://www.nownews.com/news/6732999"]},
  // 以交通零死亡為目標改善道路與路口安全
  "ntp-2-p5": {"level":"medium","authority":"high","cost":"medium","timeline":"medium","reason":"道路設計、號誌、速限屬市府權責，新北已推動路口改善與科技執法（如目標300處無號誌路口）。但2026年1月新北交通死亡44人，較前一年同期增31人，四年內達成零死亡的難度高。","sources":["https://udn.com/news/story/7266/9426737","https://tw.stock.yahoo.com/news/%E4%BA%A4%E9%80%9A-%E9%AB%98%E9%BD%A1%E8%80%85%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%E6%AD%BB%E4%BA%A1%E4%BA%BA%E6%95%B8%E5%89%B5%E6%96%B0%E9%AB%98-%E6%96%B0%E5%8C%97%E5%B9%B3%E5%9D%87%E6%AF%8F%E5%B9%B4%E5%82%B7%E4%BA%A16173%E4%BA%BA-053645023.html"]},
  // 在樹林興建大型巨蛋並帶動周邊發展
  "ntp-2-p6": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"high","schedule":"medium","stage":"已選址樹林機五，待都計與招商","horizon":"約 8–10 年（市府自估）","reason":"市府粗估600–700億元，採BOT並以區段徵收開發100多公頃。前期都計、徵收與招商約5年，最快4年後動工，保守估2032年動工。都市計畫須送部都委會審議。8年內完工需壓縮前期並快速施工，偏樂觀但仍有可能。","sources":["https://www.worldjournal.com/wj/story/121221/9645807","https://udn.com/news/story/7323/9643202"]},
  // 提高青年創業貸款額度並放寬資格
  "ntp-2-p7": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"現行新北青創貸款上限200萬元，5年利息全額補貼，約省15萬元。上限提高到500萬元後，每案補貼約37萬元，屬市府自辦方案，可調整資格；需留意信保與銀行授信承擔。","sources":["https://today.line.me/tw/v2/article/oqQ9VQq","https://udn.com/news/story/6656/9761268"]},
  // 補助因照顧家庭離職者重返職場
  "ntp-2-p8": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"每人最高1.5萬元，以1萬人計約1.5億元，占歲出約0.06%。中央婦女再就業計畫已有最高6萬元的獎勵先例，市府可自行加碼，並結合職訓與媒合。","sources":["https://www.1111.com.tw/news/jobns/165280","https://udn.com/news/story/6656/9761268"]},
  // 提高勞工因公死亡慰問金並補助高溫作業防護
  "ntp-2-p9": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"慰問金每案增加6萬元，總額視職災死亡件數而定，規模小。台北市自治條例已將職災死亡慰問金定為36萬元，有先例；防暑設備補助也屬市府可自辦項目。","sources":["https://laws.gov.taipei/law/LawSearch/LawArticleContent/FL015010","https://udn.com/news/story/6656/9761268"]},
  // 沿捷運與開發區擴大社會住宅供給
  "ntp-2-p10": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"medium","schedule":"medium","stage":"社宅屬既有政策，新增基地未公布","horizon":"單案開工至完工約 4–5 年","reason":"至2025年6月，中央在新北達成13,558戶，地方自辦8,245戶。樹德安居578戶約33.7億元，由中央全額出資（約583萬元／戶）；以此推估，1.2萬戶約需700億元。新增戶數未列基地與財源。土城案2027年開工、2032年完工。","sources":["https://www.ctee.com.tw/news/20250724700740-430104","https://www.ctee.com.tw/news/20240820701467-431401"]},
  // 長者居家安全檢查與改善補助
  "ntp-2-p11": {"level":"medium","authority":"high","cost":"medium","timeline":"medium","reason":"臺北市已有居家安全簡易修繕補助，屬社會局預算。新北約82萬名長者，每1萬戶申請約需3億元，總額視申請率而定。到府服務須有評估與施工人力。","sources":["https://laws.gov.taipei/law/LawSearch/LawExport/FL079437?type=2","https://udn.com/news/story/7323/9509914"]},
  // 敬老卡部分點數可轉為電子票證點數
  "ntp-2-p12": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"這是既有600點的用途調整，不增加發放點數，成本主要來自使用率上升。市府已規劃約116年下半年開放每月300點用於農會、藥局、超商；新竹市已有藥局用途先例。","sources":["https://udn.com/news/story/7323/9649258","https://www.ctee.com.tw/news/20250924700991-431401"]},
  // 延長孕產婦交通服務並試辦運動中心免費臨托
  "ntp-2-p13": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"好孕專車現行每趟最高補貼250元、最多36趟、合計9,000元，可用至預產期後6個月，延長期限屬行政調整。運動中心臨托為每週一個時段試辦，經費較小，但須與營運單位協調並配置托育人員。","sources":["https://www.sw.ntpc.gov.tw/userfiles/1100300/files/1150201%E6%96%B0%E5%8C%97%E5%B8%82%E5%A5%BD%E5%AD%95%E5%B0%88%E8%BB%8A%E8%BB%8A%E8%B3%87%E8%A3%9C%E8%B2%BCQA.pdf","https://udn.com/news/story/124652/9641070"]},
  // 開放未婚者一夫二妻或一妻二夫合法化
  "ntp-3-p0": {"level":"low","authority":"low","cost":"unclear","timeline":"low","reason":"民法第985條規定有配偶者不得重婚，一人不得同時與二人以上結婚。婚姻制度屬中央民法，須立法院修法，市府無權變更，亦無台灣先例。","sources":["https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=B0000001&flno=985"]},
  // 派出所提供免費飲食、洗澡、住宿與喪葬協助
  "ntp-3-p1": {"level":"low","authority":"medium","cost":"unclear","timeline":"low","reason":"警察法第3條規定警察勤務制度由中央立法。遊民安置依社會救助法第17條由社政主責、警察通報協助。派出所缺住宿與盥洗空間，須改建並調整勤務，經費無法估算。","sources":["https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0080001","https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0050078&flno=17"]},
  // 道路設自行車專用道並限制大型車進市區
  "ntp-3-p2": {"level":"medium","authority":"high","cost":"high","timeline":"medium","reason":"依道交條例第5條，地方可公告限制大型車行駛的路段與時段，高雄、台北都有先例。新闢或重鋪道路時一併設置專用道，成本可控；但壓縮車道、影響物流，需逐路段協調，全面推行需時較長。","sources":["https://laws.gov.taipei/law/LawSearch/LawExport/FL024819?type=0","https://orgws.kcg.gov.tw/001/KcgOrgUploadFiles/10/relfile/7312/469551/f06658c5-f54b-42f8-8564-c5c54eb00119.odt"]},
  // 加強中小學英語與台語教學
  "ntp-3-p3": {"level":"unclear","authority":"high","cost":"unclear","timeline":"unclear","reason":"教學屬市府權責，新北已推動2030雙語政策，雙語策略聯盟有13校參與。本政見沒有具體做法、目標與經費，無法估算。","sources":["https://www.taiwannews.com.tw/zh/news/6124864","https://news.pts.org.tw/article/783910"]},
  // 提升警察英語能力
  "ntp-3-p4": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"員警在職訓練屬市警局權責，可配合中央2030雙語政策推動；屬訓練性質，經費占總預算比例低。國內外都有警察語言訓練的先例，一任內可實施並看到成效。","sources":["https://www.angle.com.tw/BookPre_pdf/5R005RA.pdf","https://www.police.ntpc.gov.tw/dl-18796-a286b7c2-b53c-4178-a76d-84efb2bf9e3e.html"]},
  // 增設學校周邊及重要路口監視器
  "ntp-3-p5": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"治安監視系統由市警局依自訂管理要點設置，可在既有e化天眼系統上擴充。政見未列數量，無法精確估算，但屬設備擴充、經費相對總預算小，一任內可完成。","sources":["https://www.sanxia.police.ntpc.gov.tw/dl-14106-70fdb79b-45ec-4634-8d51-7f05d81efdfb.html","https://www.police.ntpc.gov.tw/dl-13990-c4d5b7c7-a910-413b-b814-1601b7f8929a.html"]},
  // 爭取新北市加入國際刑警組織
  "ntp-3-p6": {"level":"low","authority":"low","cost":"unclear","timeline":"low","reason":"國際組織會籍屬中央外交事務。國際刑警組織2017年決議限主權國家方得成為會員，台灣自1984年起已非會員，觀察員申請也多次未獲邀請。市府在法律上無權以城市身分加入。","sources":["https://www.cna.com.tw/news/aopl/202411080015.aspx"]},
  // 爭取國際賽事與國際會議在新北舉辦
  "ntp-3-p7": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"政見沒有列出具體賽事、會議或做法，無法估算經費與期程。國際賽事申辦多需與中央、單項協會協調。","sources":["https://udn.com/news/story/6656/9761268"]},
  // 市府與中央定期開會合力處理市政
  "ntp-3-p8": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"本政見沒有具體機制、議題或頻率。召開會議須中央配合；115年度預算案中，中央對部分項目不補助，由市府自行編列。內容不足以評估。","sources":["https://www.cna.com.tw/news/aloc/202509240340.aspx"]},
  // 不分黨派聘請市政顧問
  "ntp-3-p9": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"新北已訂有市政顧問遴聘要點，明定顧問為無給職，由市長召集會議。聘任由市長決定，成本低，可立即實施。","sources":["https://www.rde.ntpc.gov.tw/userfiles/ntpc/files/1060119%E4%BF%AE%E6%AD%A3%E5%85%A8%E6%96%87(1).pdf"]},
};

/*
 * 新北市議員第 3 選區（新莊）政見可行性評估（2026-10-13，盲評）
 * 議員沒有行政權，authority 依議員職權判斷：high 自身職權可完成／medium 需市府執行（常態，不算障礙）／low 中央權限。
 */
Object.assign(window.FEASIBILITY, {
  // 在南新莊塔寮坑溪沿岸闢建大型公園
  "ntc3-1-p0": {"level":"low","authority":"medium","cost":"low","timeline":"low","reason":"範圍為逾5公頃私有農地。既有公園僅約0.5公頃，闢建大型公園需變更都市計畫並取得用地（徵收或重劃），地價成本龐大且未說明財源，一任內難以完成。","sources":["https://www.xinzhuang.ntpc.gov.tw/userfiles/3050200/files/%E8%90%AC%E5%AE%89(1).pdf","https://www-ws.wra.gov.tw/001/Upload/423/relfile/0/32934/4fdcd5af-6737-44ba-93e6-81e887b22999.pdf"]},
  // 評估在南新莊大型公園地下共構停車場
  "ntc3-1-p1": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"low","schedule":"medium","stage":"構想，未指定基地","horizon":"約4至6年（依同類工程推估）","reason":"政見是爭取評估，評估本身可行。參照新莊運動公園地下3層、636格汽車位的停車場，總工程經費約10.1億元。地下3至5層的經費應更高，政見沒說明財源。","sources":["https://www.storm.mg/article/4586222","https://news.ltn.com.tw/news/NewTaipei/breakingnews/3196694"]},
  // 推動塔寮坑溪第三期改善工程
  "ntc3-1-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"塔寮坑溪屬中央管區域排水，第一期環境整理已完工，第二期持續推動。查無第三期的範圍、經費與期程等公開資料，需爭取中央與市府編列。","sources":["https://news.ltn.com.tw/news/life/paper/1733814","https://www.ntpc.gov.tw/ch/home.jsp?id=e8ca970cde5c00e1&dataserno=17f8be02e9f3cc36a65df92c339ef54d"]},
  // 加速興建新泰國小地下停車場
  "ntc3-1-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"low","reason":"2026年7月報導指新泰國小周邊地下3層停車場（約450汽機車位）仍屬初步研議，已送交通局、教育局審查。同區民安國小共構停車場經費2.6億元，從規劃設計到完工一任內恐難完成。","sources":["https://cnews.com.tw/248260704a02/","https://www.mygonews.com/news/detail/news_id/202253"]},
  // 評估在中港國小興建地下停車場
  "ntc3-1-p4": {"track":"long","level":"medium","authority":"medium","maturity":"low","financing":"medium","schedule":"medium","stage":"構想，未見正式規劃","horizon":"約5至8年（含校舍改建）","reason":"政見是爭取評估，評估本身可行。沒查到中港國小校舍改建併建停車場的公開計畫。可參照新北新埔國小分期改建並興建地下停車場的案例，該案第二期預算8.7億元。","sources":["https://www.publicwork.ntpc.gov.tw/userfiles/1061400/files/a4.pdf","https://news.ltn.com.tw/news/NewTaipei/breakingnews/3196694"]},
  // 完善大型賽事期間的交通配套
  "ntc3-1-p5": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"新莊運動公園地下停車場已有636個汽車位，過去也辦過賽事接駁。交通疏導與保障居民停車可由交通局在賽事期間執行，政見未列具體措施。","sources":["https://news.ltn.com.tw/news/life/breakingnews/4104360","https://www.tripool.app/articles/xinzhuang-baseball-stadium-transportation"]},
  // 新莊棒球場觀賽交通採預約接駁與大型包車
  "ntc3-3-p0": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"過去曾有新埔站至球場的接駁車，可由球團與市府協調辦理，經費規模小。預約與包車上車點的道路占用，需交通局配合規劃。","sources":["https://cpbl.com.tw/field/cont08","https://www.tripool.app/articles/xinzhuang-baseball-stadium-transportation"]},
  // 改善捷運站到新莊棒球場的步行路線
  "ntc3-3-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"捷運新莊站步行至球場約10–15分鐘。人行道與號誌改善屬市府常規工程，市府也推過捷運站周邊友善步行計畫。政見未列具體路段與做法，經費規模無法精算。","sources":["https://www.tripool.app/articles/xinzhuang-baseball-stadium-transportation","https://www.cna.com.tw/news/aspt/201711090352.aspx"]},
  // 棒球場周邊補上住宅、商業、文化與休閒配套
  "ntc3-3-p2": {"level":"medium","authority":"medium","cost":"unclear","timeline":"low","reason":"周邊配套需都發、文化等多個局處推動。都更多由民間主導，整合期長，一任內難見完整成效。要求球場經營方與地方建立聯繫的部分可直接推動。","sources":["https://www.cna.com.tw/news/aspt/201711090352.aspx","https://news.ltn.com.tw/news/NewTaipei/breakingnews/3233843"]},
  // 塭仔圳輕軌串接五股、泰山、新莊、板橋
  "ntc3-3-p3": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"medium","schedule":"medium","stage":"五泰綜規中；泰板可研送審","horizon":"約 2032–2035 年以後","reason":"五泰輕軌可行性研究已核定，2026年3月通過環評，經費約514億元，綜規核定後約7年完工，終點在塭仔圳。泰板輕軌（新莊至板橋）可行性研究遭中央四度退回，2025年10月第五度送審，自償性仍有爭議。","sources":["https://www.housefeel.com.tw/article/五泰輕軌-五股泰山輕軌-五泰輕軌路線/","https://udn.com/news/story/7323/9066499"]},
  // 提供大眾運輸即時動態資訊
  "ntc3-3-p4": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"新北自106年起推公車動態系統，智慧站牌已超過2,200座，並有多款APP可查詢即時到站。政見屬既有服務的延伸，未說明新增範圍。","sources":["https://www.kingautos.net/345385"]},
  // 處理新莊老街都更中登記在神明名下土地的簽署問題
  "ntc3-3-p5": {"level":"medium","authority":"low","cost":"high","timeline":"medium","reason":"神明會、寺廟土地的處分與同意權涉及地籍清理、寺廟管理等中央法規。市府可協調或請內政部釋示，但根本解決需要中央法令配合。","sources":["https://medium.com/@taishu945/c9de82b067cb","https://laws.gov.taipei/law/Interpretation/ContentExport/FE265447?type=5"]},
  // 提升教師待遇、挹注教育資源
  "ntc3-6-p0": {"level":"unclear","authority":"low","cost":"unclear","timeline":"unclear","reason":"教師本俸與加給主要由中央法規規定，憲法法庭113年憲判字第7號也限縮了地方自訂教師敘薪的空間。增加教育預算屬地方權責，但政見沒寫具體項目和金額，無法評估。","sources":["https://cons.judicial.gov.tw/download/download.aspx?id=485519","https://udn.com/news/story/6885/9529402"]},
  // 改善學校軟硬體設施
  "ntc3-6-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只寫「爭取資源改善軟硬體」，沒有指出學校、項目或經費規模，無法評估可行性。","sources":[]},
  // 推動國家語言及客語教育資源
  "ntc3-6-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"新北已在推幼兒園客語沉浸式教學，也有客語輔導團，可以擴大辦理。政見沒有細節，無法判斷規模和經費。","sources":["https://www.taiwannews.com.tw/zh/news/6042625"]},
  // 爭取客家文化資源、推廣客家產業
  "ntc3-6-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"新莊有客家開墾淵源，市府客家局也有既有預算和計畫可爭取。政見沒寫具體項目和金額，無法評估。","sources":["https://www.hakka-affairs.ntpc.gov.tw/archive/content/110年至112年新北市政府客家事務局推動客語深根服務計畫概況分析.pdf"]},
  // 擴大臨時托育並開辦夜間托育
  "ntc3-6-p4": {"level":"medium","authority":"medium","cost":"low","timeline":"high","reason":"新北的夜間和臨時托育補助目前只給弱勢家庭，疫苗補助也限特定族群。輪狀病毒疫苗每人約4,000至6,000元，腸病毒疫苗每劑約4,000至4,300元、需打2至3劑，全面免費支出龐大，政見沒寫財源。","sources":["https://tw.news.yahoo.com/%E7%A7%8B%E5%86%AC%E8%BC%AA%E7%8B%80%E7%97%85%E6%AF%92%E8%82%86%E8%99%90-%E6%96%B0%E5%8C%9713%E5%81%8F%E5%8D%80%E5%AC%B0%E5%B9%BC%E5%85%92%E4%BA%AB%E7%96%AB%E8%8B%97%E5%85%A8%E9%A1%8D%E8%A3%9C%E5%8A%A9-031719344.html","https://www.edh.tw/article/33727","https://www.sw.ntpc.gov.tw/userfiles/1102400/files/%E5%BC%B1%E5%8B%A2%E5%AE%B6%E5%BA%AD%E5%85%92%E7%AB%A5%E5%A4%9C%E9%96%93%E6%9A%A8%E8%87%A8%E6%99%82%E6%89%98%E8%82%B2%E8%A3%9C%E5%8A%A9%E8%A8%88%E7%95%AB(11504%E4%BF%AE%E8%A8%82).pdf"]},
  // 獎勵延長產假企業、設顧老假
  "ntc3-6-p5": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"勞工局曾獎勵企業提供法定以上的產假，每項1萬元，最高5萬元，有前例可循。每家上限100萬元遠高於前例，總經費和財源未說明。法定假別屬中央權限，地方只能用獎勵方式推動。","sources":["https://newtalk.tw/news/view/2021-03-02/543538","https://www.businesstoday.com.tw/article/category/183034/post/201506300023/"]},
  // 運用財劃法新增預算為新莊爭取資源
  "ntc3-6-p6": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"市府表示財劃法修正後，中央挹注新北淨增約257億元，115年度歲出約2,612億元。如何分配屬議會預算審議職權，議員可透過審議爭取地方建設，不另外增加支出。","sources":["https://udn.com/news/story/7323/9027215","https://city.gvm.com.tw/article/124253"]},
  // 改善騎樓與人行道障礙
  "ntc3-7-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"high","reason":"市府自2010年起推騎樓整平，已完成超過149公里，有既有計畫可擴大。障礙在於部分住戶不同意，電箱遷移也要台電等管線單位配合，需要逐點協調。","sources":["https://news.pts.org.tw/article/810844","https://data.gov.tw/dataset/124301"]},
  // 以兒童視角檢視公共空間設計
  "ntc3-7-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"政見只是設計理念，沒有具體項目，無法評估可行性。","sources":[]},
  // 兼顧重劃區與舊社區需求
  "ntc3-7-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只說兩類社區需求並重，沒有具體措施或項目，無法評估可行性。","sources":[]},
  // 與鄰近選區民意代表跨區合作
  "ntc3-7-p3": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"新店、板橋、土城都在新北市內，跨區問題可由議員之間協調，再一起質詢市府，不涉及跨縣市協議，經費也很少。","sources":["https://laws.gov.taipei/Law/Interpretation/RelatedLaw/FE353508"]},
  // 監督塭仔圳產業與住宅規劃，吸引人口移入新莊
  "ntc3-8-p0": {"level":"medium","authority":"high","cost":"high","timeline":"medium","reason":"監督規劃屬議員質詢與預算職權。重劃區約400公頃，報導指出預計2027年完成配地，產業用地已在招商。人口能否移入還要看開發和市場進度，議員無法直接控制。","sources":["https://www.techbang.com/posts/108891-kunda-development-joins-hands-with-puyuan-puyuan-construction","https://wantrich.chinatimes.com/news/20260701900584-420101"]},
  // 復興新莊老街風貌
  "ntc3-8-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"市府已有老店新妝、廟街特色店家再造及文化活動等計畫。政見沒說明要用什麼方式、在哪些範圍推動，無法判斷成本和期程。","sources":["https://www.storm.mg/article/5232197","https://www.thenewslens.com/feature/ntpc2025/269703"]},
  // 廣設社區老人關懷據點
  "ntc3-8-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"新北已有633處社區照顧關懷據點（2025年12月），由民間單位或里辦公處申設，市府補助，制度成熟。增設主要取決於場地與承辦單位。政見未說明增設數量。","sources":["https://www.ctee.com.tw/news/20251201701006-431401"]},
  // 守護婦幼安全，落實跟騷法執法
  "ntc3-8-p3": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"跟騷法自2022年施行，執法由市警局負責。新北警察局已有執行成效的專案報告。議員可透過質詢監督，不需大筆新增經費，政見沒寫具體指標。","sources":["https://www.police.ntpc.gov.tw/dl-25143-e738736a-1f3f-415e-ab73-7df17c686f08.html","https://n.yam.com/Article/20220601432282"]},
  // 中小學普及 AI 基礎教育
  "ntc3-8-p4": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"市府已推動從國小到高中的 AI 學習體系，並編寫國小 AI 與運算思維教材。政見方向與現行政策一致，但未說明新增內容。","sources":["https://www.gvm.com.tw/article/129479","https://udn.com/news/story/6898/7667177"]},
  // 活化閒置土地設置智慧共享充電站
  "ntc3-8-p5": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"市府已在388處公有停車場預留充電管線，也與業者合作建置充電樁，並有農地轉作充電站的前例。政見未說明土地來源、規模與財源，閒置地取得與營運模式待確認。","sources":["https://cars.tvbs.com.tw/car-news/210676","https://udn.com/news/story/7323/8923275"]},
  // 加強數位金融安全，推廣正確認識加密貨幣
  "ntc3-8-p6": {"level":"medium","authority":"medium","cost":"high","timeline":"high","reason":"市府已與金融業合作在國高中辦識詐宣導，可納入加密貨幣主題，經費小。加密貨幣監理屬中央金管會權限，政見未說明具體做法。","sources":["https://money.udn.com/money/story/5613/9519941"]},
  // 擴大孕產婦乘車補助
  "ntc3-9-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"現制為2026年2月起每胎36趟、上限9,000元、限產後半年內使用。維持總額、取消趟數上限並延長期限，增支有限但未精算。納入多元計程車，市府已與業者洽談，需處理核銷與系統串接。","sources":["https://udn.com/news/story/7323/9301842","https://newtalk.tw/news/view/2025-10-20/1000039"]},
  // 推動行人穿越道照明系統
  "ntc3-9-p1": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"報導指每處低於30萬元、約一天可裝設，試辦1–3處總額不到90萬元。台北、台中等市已實施，交通局承諾研議並會勘，板橋已有類似設施試辦。","sources":["https://udn.com/news/story/7323/9498452"]},
  // 檢討海砂屋都更重建程序
  "ntc3-9-p2": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"檢討程序本身花費少，議員可透過質詢推動。不過同意門檻等核心規定屬中央都更法規，地方只能調整輔導與審議作業。市府已有都更輔導及中繼宅安置計畫可銜接。","sources":["https://www.storm.mg/article/11082446","https://news.ltn.com.tw/amp/news/life/breakingnews/5403694"]},
  // 工業區周邊設空品微型感測器並提供肺癌篩檢
  "ntc3-9-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"全市有950處微型感測器，每年滾動調整，移設可行。現行公費低劑量電腦斷層以家族史、重度吸菸者為對象，依居住地擴大篩檢缺乏既有依據，僅桃園有污染源周邊的先例，需市府另編預算。","sources":["https://news.ltn.com.tw/news/NewTaipei/breakingnews/5042934","https://health.tvbs.com.tw/cancer/326594"]},
  // 因應溪北轉運站重整公車路網
  "ntc3-9-p4": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"重整公車路網經費少，屬交通局權責。轉運站為BOT案，預計2030年完工，動工時程報導不一，路網調整要配合啟用時間，可能落在任期末或之後。","sources":["https://udn.com/news/story/7241/9010368","https://www.ctee.com.tw/news/20250314700947-431401"]},
  // 爭取中港國小地下停車場
  "ntc3-9-p5": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"medium","schedule":"medium","stage":"國影二期已核定，中港國小僅構想","horizon":"約5至8年（依同類地下停車場推估）","reason":"國影二期修正計畫總經費80億元由中央全額支應，已規劃汽機車各830格，屬中央權責，但進度有爭議。中港國小地下停車場沒查到正式規劃，經費來源也未說明。","sources":["https://news.ltn.com.tw/amp/news/politics/breakingnews/5496578","https://udn.com/news/story/124652/9401799"]},
  // 檢討全市橋梁分隔島與車道配置
  "ntc3-9-p6": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"大漢橋分隔島已拆除，改用槽化線。市府同步評估成蘆橋、浮洲橋引道分隔島，已有先例與執行機制。要全面檢討其他橋梁，需交通局逐橋做事故分析。","sources":["https://udn.com/news/story/7323/9451208","https://news.tvbs.com.tw/life/4007222"]},
  // 將新莊路設為行人優先區
  "ntc3-10-p0": {"level":"medium","authority":"medium","cost":"high","timeline":"high","reason":"交通局已在推行人優先區，新莊體育園區周邊也有降速到30公里的先例。限速20公里比現行做法更嚴，需市府評估。要求導航業者調低路線權重屬民間配合，無法強制。","sources":["https://cars.tvbs.com.tw/life/273626","https://udn.com/news/story/7323/9496184"]},
  // 提高塭仔圳重劃區的社會住宅比例
  "ntc3-10-p1": {"level":"low","authority":"medium","cost":"unclear","timeline":"low","reason":"中央要求六都重劃保留5%土地蓋社宅，但塭仔圳重劃已在進行，預計2027年配地。市府曾公開回應不同意相關批評，要追溯提高比例與既有規劃衝突。","sources":["https://www.ctee.com.tw/news/20231215700083-439901","https://n.yam.com/Article/20231218915678"]},
  // 西盛工業區有序退場，轉型為森林公園
  "ntc3-10-p2": {"track":"long","level":"low","authority":"medium","maturity":"low","financing":"low","schedule":"low","stage":"僅構想，查無官方計畫","horizon":"逾 10 年，視都計變更","reason":"須變更工業區都市計畫並取得大量私有工業用地。市府現行工業區都更方向要求維持一定比例產業使用，與轉為森林公園不一致，也未說明用地取得方式與財源。","sources":["https://www.thenewslens.com/article/168587","https://www.storm.mg/article/11125293"]},
  // 加強獨居與行動不便家庭的居家安全訪視
  "ntc3-10-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"需社會局與消防局合作執行。新北已優先替獨居長者安裝住警器，他縣市也有把瓦斯安全納入居家訪視的先例，整合難度不高。訪視人力及設備經費未說明。","sources":["https://en.cofacts.tw/article/3blx1tmdnlmwb","https://www.ctee.com.tw/news/20260531700555-431401","https://health.tainan.gov.tw/warehouse/95414282-1211-45E0-B72B-5EF1E14034F9/F_1710228956897e.pdf"]},
  // 加強家暴防治與施暴者輔導追蹤
  "ntc3-10-p4": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"市府家防中心已委辦親密關係暴力個案追蹤輔導與加害人處遇等方案，可透過預算與質詢擴充。加害人處遇的強制力來自法院保護令（中央法律）。","sources":["https://www.dvp.ntpc.gov.tw/userfiles/2101100/files/%E6%96%B0%E5%8C%97%E5%B8%82%E5%AE%B6%E9%98%B2%E4%B8%AD%E5%BF%83114%E5%B9%B41%E6%9C%88%E8%87%B312%E6%9C%88%E5%B0%8D%E6%B0%91%E9%96%93%E5%9C%98%E9%AB%94%E8%A3%9C%EF%BC%88%E6%8D%90%EF%BC%89%E5%8A%A9%E7%B6%93%E8%B2%BB%E6%98%8E%E7%B4%B0%E8%A1%A8.pdf","https://www.thenewslens.com/article/266582"]},
  // 議員出席與表決結果會後立即上網公開
  "ntc3-10-p5": {"level":"medium","authority":"high","cost":"high","timeline":"high","reason":"議員可以自行公開自己的出席和投票紀錄。若要所有議員都即時公開逐人表決結果，需議會修改議事規則，並要有記名表決的紀錄可用，這要靠議會內部協商。","sources":["https://news.pts.org.tw/article/410319"]},
  // 定期公布問政內容並公開競選經費
  "ntc3-10-p6": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"公開問政內容屬議員自辦事務。競選經費依政治獻金法本來就要向監察院申報，並依公開查閱辦法公開，自行再加公開沒有制度障礙，經費也很少。","sources":["https://6laws.net/6law/law3/政治獻金會計報告書公開及查閱辦法.htm","https://www.6laws.net/6law/laws/%E6%94%BF%E6%B2%BB%E7%8D%BB%E9%87%91%E6%B3%95.html"]},
  // 關注國家影視文化中心周邊發展
  "ntc3-11-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"國影二期修正計畫由中央核定並全額支應，但中央與市府對進度和土地用途有爭議。政見只寫「關注」，沒有具體主張，無法評估。","sources":["https://news.ltn.com.tw/amp/news/politics/breakingnews/5496578","https://udn.com/news/story/124652/9399726"]},
  // 改善髒亂點與居住環境
  "ntc3-11-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"環保局已有罰款、代清除等處理機制，也在研擬環境維護管理自治條例。政見沒說明要改善哪些地點、用什麼方法，無法評估。","sources":["https://udn.com/news/story/7323/9612626"]},
  // 關注年輕世代發展
  "ntc3-11-p2": {"level":"unclear","authority":"unclear","cost":"unclear","timeline":"unclear","reason":"只有方向性標題，沒有具體措施、對象或做法，無法評估可行性。","sources":[]},
  // 處理基本民生問題
  "ntc3-11-p3": {"level":"unclear","authority":"unclear","cost":"unclear","timeline":"unclear","reason":"只有標題，沒有具體項目或做法，無法評估可行性。","sources":[]},
});

/*
 * 新北市議員第 6 選區（中和）政見可行性評估（2026-10-13，盲評，標準同第 3 選區）
 */
Object.assign(window.FEASIBILITY, {
  // 推動中和行政園區周邊空間整合計畫
  "ntc6-1-p0": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"改善人行動線、整併停車屬於市府工程，議員可以爭取與監督。查不到這項計畫的公開資料，也無法查證「中央補助逾七成」。若補助屬實，財源壓力會降低。停車空間整併要協調用地，期程不確定。","sources":["https://www.traffic.ntpc.gov.tw/userfiles/1130901/files/%E6%96%B0%E5%8C%97%E5%B8%82%E8%A1%8C%E4%BA%BA%E4%BA%A4%E9%80%9A%E5%AE%89%E5%85%A8%E8%A8%AD%E6%96%BD%E6%94%B9%E5%96%84%E8%A8%88%E7%95%AB(%E4%BF%AE%E6%AD%A3%E7%89%88V1).pdf"]},
  // 打造 15 分鐘綠生活圈
  "ntc6-1-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"沒有說明「15 分鐘綠生活圈」的範圍、設施與指標，也查不到所依據整合計畫的公開資料。內容太簡略，無法評估。","sources":["https://www.traffic.ntpc.gov.tw/userfiles/1130901/files/%E6%96%B0%E5%8C%97%E5%B8%82%E8%A1%8C%E4%BA%BA%E4%BA%A4%E9%80%9A%E5%AE%89%E5%85%A8%E8%A8%AD%E6%96%BD%E6%94%B9%E5%96%84%E8%A8%88%E7%95%AB(%E4%BF%AE%E6%AD%A3%E7%89%88V1).pdf"]},
  // 持續推動托育監管雲
  "ntc6-1-p2": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"2026 年三讀的兒童托育服務法已規定托育機構裝監視器、影像保存 30 日並上傳地方政府雲端，新北原本就已先行辦理。本項是配合中央法規持續執行，可行性高。","sources":["https://news.ltn.com.tw/news/NewTaipei/breakingnews/5404272","https://www.setn.com/news/1910008"]},
  // 持續爭取增加停車位與改善人行道
  "ntc6-1-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"中和已有新增停車的案例：民利街停車場 2026 年元旦啟用，盛昌段社宅結合 220 席以上公有車位已動工。本項延續市府既有作法，議員可以透過預算與質詢爭取，但沒有說明數量與地點。","sources":["https://tw.stock.yahoo.com/news/%E6%96%B0%E5%8C%97%E4%B8%AD%E5%92%8C605%E6%88%B6%E7%A4%BE%E5%AE%85%E4%BB%8A%E5%8B%95%E5%B7%A5%EF%BC%81%E5%81%9C%E8%BB%8A%E5%A0%B4%E3%80%81%E6%89%98%E8%82%B2%E4%B8%AD%E5%BF%83%E4%B8%80%E6%AC%A1%E5%88%B0%E4%BD%8D-070128443.html","https://udn.com/news/story/7323/9232631"]},
  // 推動中和灰磘生醫園區
  "ntc6-2-p0": {"track":"long","level":"low","authority":"medium","maturity":"medium","financing":"low","schedule":"low","stage":"主要計畫仍在內政部審議","horizon":"審定後約 8–10 年以上","reason":"灰磘專案通盤檢討 107 年經市都委會通過，但至 110 年仍在內政部審議，須先解決聯外交通，之後還要環評、區段徵收。查不到「創造 2 萬個工作機會」的估算依據，也找不到財務計畫。","sources":["https://www-ws.land.ntpc.gov.tw/001/Upload/403/relfile/9020/889/81115105-5eb8-49cd-8666-4edd0c505930.pdf","https://news.ltn.com.tw/news/life/breakingnews/3904088","https://www.chinatimes.com/realtimenews/20210118003815-260405"]},
  // 串聯印刷聚落、遠東世紀廣場與生醫園區
  "ntc6-2-p1": {"level":"low","authority":"medium","cost":"unclear","timeline":"low","reason":"印刷聚落轉型屬於民間產業事務，生醫園區的都市計畫仍待內政部審定。串聯成產業廊帶要依賴園區開發與跨局處計畫，沒有說明具體措施與經費，一任內難以成形。","sources":["https://wantrich.chinatimes.com/news/20220707900141-420501","https://www-ws.land.ntpc.gov.tw/001/Upload/403/relfile/9020/889/81115105-5eb8-49cd-8666-4edd0c505930.pdf"]},
  // 爭取市府補助長者帶狀疱疹疫苗
  "ntc6-2-p2": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"市府自 2026 年 9 月起補助 65 歲以上低收、中低收長者，約 7,000 多人，兩劑費用約 1.6 萬元，並表示會評估再擴大。若擴及一般長者，人數與經費會大幅增加，政見沒有說明範圍與財源。","sources":["https://www.ctee.com.tw/news/20260526701108-431401"]},
  // 翻新國防管理學院大操場
  "ntc6-2-p3": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"原國管院校地已交國有財產局。都市計畫變更時言明田徑場保留並開放民眾使用。改設 PU 跑道屬一般工程，一任內可完成，但要市府與土地管理機關協調。地下停車場目前只到評估，興建要另做規劃與編列預算。","sources":["https://news.ltn.com.tw/news/NewTaipei/breakingnews/2981086/","http://www.v523.tw/uploadcityplans/uploadfiles/1292084253652.pdf"]},
  // 重新檢討國管院周邊都市計畫
  "ntc6-2-p4": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"國管院一帶都市計畫變更已於 2010 年經內政部審議通過，之後市府另有開發規劃。重新檢討要啟動通盤檢討或個案變更，需經市府與內政部都委會審議，並和既有開發規劃協調，一任內未必能完成。","sources":["http://www.v523.tw/uploadcityplans/uploadfiles/1292084253652.pdf","https://news.ltn.com.tw/news/NewTaipei/breakingnews/2981086/"]},
  // 中小學導入 AI 素養教育並升級智慧校園
  "ntc6-2-p5": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"市府已推動 AI 素養教育三年計畫，班級電腦預定自 115 年起分 4 年更新，國小 AI 教材也已完成並配送。本項和既有政策方向一致，可以靠預算審議與監督推進。智慧校園的經費規模沒有說明。","sources":["https://udn.com/news/story/6898/9664439","https://www.taiwannews.com.tw/zh/news/6185120"]},
  // 改善中小學周邊通學步道
  "ntc6-2-p6": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"市府自 108 年起推動通學步道改善，已完成約 97 校，部分工程可申請中央補助。全面檢視中和區學校周邊屬於監督與爭取事項，可接續既有計畫辦理，一任內可以看到成效。","sources":["https://udn.com/news/story/7323/9288818","https://www.traffic.ntpc.gov.tw/userfiles/1130901/files/%E9%80%9A%E5%AD%B8%E5%B7%B7108%E6%B8%85%E5%96%AE.pdf"]},
  // 活化社區閒置空間增設學童閱讀室
  "ntc6-2-p7": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府已有機制把閒置公有空間調配給托育、托老等公共用途，圖書館分館也有空間活化先例。增設閱讀室的裝修與管理經費規模小，一任內可以完成，但沒有說明地點與數量。","sources":["https://www.finance.ntpc.gov.tw/userfiles/1020600/files/1110801%E6%96%B0%E5%8C%97%E5%B8%82%E6%94%BF%E5%BA%9C%E5%85%AC%E6%9C%89%E5%BB%B3%E8%88%8D%E8%AA%BF%E9%85%8D%20%E5%A4%A7%E5%B9%85%E6%B8%9B%E5%B0%91%E6%94%AF%E5%87%BA.pdf","https://www.taiwannews.com.tw/ch/news/4972769"]},
  // 公園設置主題式遊具並增設監視器
  "ntc6-2-p8": {"level":"high","authority":"medium","cost":"high","timeline":"high","reason":"市府已有特色公園政策，中和也有主題遊具公園。增設遊具、遮蔭與監視器屬於單點工程，經費規模小，一任內可以完成；戲水設施要另加用水與維護成本。","sources":["https://udn.com/news/story/7323/9549997","https://udn.com/news/story/7323/9506289"]},
  // 擴大敬老卡使用範圍
  "ntc6-2-p9": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"敬老卡已適用公車、捷運、台鐵、計程車、YouBike、運動中心、市立醫院等，市府也在規劃擴大到更多場域。本項和既有政策方向一致，擴大範圍會增加點數支出，政見沒有說明財源。","sources":["https://news.ltn.com.tw/amp/news/NewTaipei/paper/1764009","https://www.ctee.com.tw/news/20260901700859-430104"]},
  // 整平人行道，讓行人安全行走
  "ntc6-5-p0": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"沒有範圍、路段或數量。市府已有改善人行道的年度目標，議員可以透過質詢與預算督促，但本則內容太簡略，無法評估規模與成效。","sources":["https://www.traffic.ntpc.gov.tw/userfiles/1130901/files/%E6%96%B0%E5%8C%97%E5%B8%82%E8%A1%8C%E4%BA%BA%E4%BA%A4%E9%80%9A%E5%AE%89%E5%85%A8%E8%A8%AD%E6%96%BD%E6%94%B9%E5%96%84%E8%A8%88%E7%95%AB(%E4%BF%AE%E6%AD%A3%E7%89%88V1).pdf"]},
  // 降低行人的道路風險
  "ntc6-5-p1": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"只有目標，沒有列出做法、地點或指標。市府已有行人交通安全設施改善計畫，114、115 年各訂增設約 10.5 公里人行道的目標。本則內容太簡略，無法評估。","sources":["https://www.traffic.ntpc.gov.tw/userfiles/1130901/files/%E6%96%B0%E5%8C%97%E5%B8%82%E8%A1%8C%E4%BA%BA%E4%BA%A4%E9%80%9A%E5%AE%89%E5%85%A8%E8%A8%AD%E6%96%BD%E6%94%B9%E5%96%84%E8%A8%88%E7%95%AB(%E4%BF%AE%E6%AD%A3%E7%89%88V1).pdf"]},
  // 完善長者照護環境
  "ntc6-5-p2": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"方向是減少獨居長者無人照顧，但沒有列出措施。新北已有約 606 處社區關懷據點，2026 年並成立高齡長期照顧處。本則內容太簡略，無法評估增加的服務量與經費。","sources":["https://health.tvbs.com.tw/medical/357856","https://cdj.sfaa.gov.tw/Journal/FileLoad?no=193511"]},
  // 推動都市更新
  "ntc6-5-p3": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"沒有列出做法、地點或模式。中和已有公辦都更案例，新北也設有住都中心推動都更。都更要取得產權人同意並經審議，期程常超過四年。本則內容太簡略，無法評估。","sources":["https://www.setn.com/news/1910008","https://www.chinatimes.com/realtimenews/20221107003517-260405"]},
  // 推動教育升級
  "ntc6-5-p4": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"沒有列出做法、對象或指標。市府教育預算約 755 億元，也已推動 AI 素養教育計畫。本則內容太簡略，無法評估。","sources":["https://www.taiwannews.com.tw/zh/news/6185120"]},
  // 爭取市府加碼生育補助
  "ntc6-6-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"新北 2026 年已調高生育津貼（第一胎 4 萬、第二胎 4.5 萬、第三胎以上 5 萬元），可和中央每胎 10 萬元疊加，已有加碼先例。政見沒有說明再加碼的金額與財源。","sources":["https://news.tvbs.com.tw/life/3215929"]},
  // 爭取市府為兒童提撥成長基金
  "ntc6-6-p1": {"level":"medium","authority":"medium","cost":"unclear","timeline":"medium","reason":"中央的兒童帳戶構想仍有爭議，制度尚未定案，地方另外提撥要先有帳戶制度可依附。政見沒有說明適用年齡、一次或每年提撥，經費無法估算，也沒有說明財源。","sources":["https://newtalk.tw/news/view/2025-12-25/1011604","https://udn.com/news/story/6656/9592840"]},
  // 建立托育場所雲端監看機制
  "ntc6-6-p2": {"level":"low","authority":"medium","cost":"medium","timeline":"medium","reason":"現行制度以保存影像、事後調閱為主，衛福部也說明監管雲不是讓人即時監看。開放家長即時連線會牽涉幼兒與托育人員的隱私、資安及勞動權益，和現行法規方向有落差。","sources":["https://udn.com/news/story/7266/9510076","https://news.pts.org.tw/article/787343"]},
  // 校園及托育場所虐童零容忍
  "ntc6-6-p3": {"level":"unclear","authority":"high","cost":"unclear","timeline":"unclear","reason":"屬於原則性宣示，沒有具體機制。議員可以透過質詢與監督追蹤個案。中央已立法要求托育機構監視器影像上傳雲端，幼兒園是否比照仍在討論。本則缺乏具體作法，無法評估成效。","sources":["https://news.ltn.com.tw/news/NewTaipei/breakingnews/5404272","https://udn.com/news/story/7266/9510076"]},
});

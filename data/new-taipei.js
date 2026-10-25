/*
 * 2026 新北市長選舉：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-13。資料來自候選人官網及新聞報導，每則都附出處（source）。
 * 出處網址常會透露候選人身分，網站只在「開票揭曉」之後才顯示。
 * 新北市選委會原訂 10/23 的號次抽籤，因薔琵颱風當日停班，改於 2026-10-27 辦理（https://www.cna.com.tw/news/aloc/202610210317.aspx ；停班見 https://news.ltn.com.tw/news/life/breakingnews/5615160 ），抽籤後請補上 identity.number（2026-10-25 註）。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 */
window.ELECTION_DATA = {
  meta: {
    title: "2026 地方選舉 · 盲選政見比較",
    electionDate: "2026-11-28",
    isSample: false,
    updated: "2026-10-19",
  },

  topics: [
    { id: "transport", label: "交通" },
    { id: "housing", label: "居住" },
    { id: "welfare", label: "長照與社福" },
    { id: "education", label: "教育與育兒" },
    { id: "economy", label: "經濟與就業" },
    { id: "environment", label: "環境與能源" },
    { id: "safety", label: "治安與防災" },
    { id: "governance", label: "市政治理" },
  ],

  races: [
    {
      id: "new-taipei-mayor",
      region: "新北市",
      office: "市長",
      note: "政見整理自候選人公開資料與新聞報導（截至 2026-10-13），並非完整政見。各候選人公布的細節多寡不同，這裡照實呈現，沒有替任何人補充。",
      candidates: [
        {
          id: "ntp-1",
          identity: { name: "蘇巧慧", party: "民主進步黨", number: null },
          platforms: [
            { topic: "education", title: "公立國中小營養午餐全面免費", detail: "另補助團膳業者升級冷藏冷凍、低溫倉儲、保溫配送等食安設備", source: "https://chiao.tw/policies/%e4%b8%83%e5%a4%a7%e6%95%99%e8%82%b2%e6%94%bf%e8%a6%8b" },
            { topic: "welfare", title: "0–6 歲兒童免門診及住院部分負擔", detail: "免費接種腸病毒、輪狀病毒疫苗；早產兒家庭發 3 萬元照顧津貼", source: "https://www.cna.com.tw/news/aipl/202602040108.aspx" },
            { topic: "welfare", title: "提高敬老卡點數並補助長者假牙", detail: "敬老卡點數提高至 1,000 點、效期由 1 個月延長為 1 年；65 歲以上假牙補助最高 5 萬元", source: "https://www.cna.com.tw/news/aipl/202602040108.aspx" },
            { topic: "welfare", title: "提高住宿式長照機構入住補助", detail: "由每年 18 萬元提高至 24 萬元；增加夜間喘息量能、提供長者臨時住宿補助", source: "https://chiao.tw/policies/%e4%b8%89%e5%a4%a7%e5%ae%b6%e5%ba%ad%e7%85%a7%e9%a1%a7%e6%94%bf%e8%a6%8b" },
            { topic: "welfare", title: "加碼提供免費心理諮商", detail: "銜接中央 3 次免費諮商後，市府再加碼 3 次", source: "https://chiao.tw/policies/%e5%9b%9b%e5%a4%a7%e9%9d%92%e5%b9%b4%e6%94%af%e6%8c%81%e6%94%bf%e8%a6%8b" },
            { topic: "education", title: "媒合企業合作設置托育並開辦夜間托育", detail: "企業組隊設托首 3 年虧損補助 50%；擴大臨時托育並設即時查詢平台", source: "https://chiao.tw/policies/%e4%b8%89%e5%a4%a7%e5%ae%b6%e5%ba%ad%e7%85%a7%e9%a1%a7%e6%94%bf%e8%a6%8b" },
            { topic: "education", title: "教師節禮金加倍並補發假日出勤加班費", detail: "禮金由 1,000 元提高至 2,000 元；假日帶隊或研習可擇領加班費或補休", source: "https://chiao.tw/policies/%e4%b8%83%e5%a4%a7%e6%95%99%e8%82%b2%e6%94%bf%e8%a6%8b" },
            { topic: "economy", title: "獎勵提供友善家庭措施的企業", detail: "延長產假、顧老假、彈性工時或設置托育空間，每家最高獎勵 100 萬元", source: "https://udn.com/news/story/124652/9666101" },
            { topic: "economy", title: "提高青農免息貸款額度並加倍證照獎金", detail: "青農免息額度由 200 萬提高至 500 萬（專業青農 1,000 萬）；甲級證照獎金由 1 萬提高至 2 萬元", source: "https://chiao.tw/policies/%e5%9b%9b%e5%a4%a7%e9%9d%92%e5%b9%b4%e6%94%af%e6%8c%81%e6%94%bf%e8%a6%8b" },
            { topic: "economy", title: "新建國際會展中心並加速科技園區開發", detail: "開發泰山楓江、樹林大柑園科技園區，加速淡海科學城；公私協力興建 AI 算力中心", source: "https://chiao.tw/policies/%e7%94%a2%e6%a5%ad%e5%8d%87%e7%b4%9a%e5%9b%9b%e5%a4%a7%e6%94%af%e6%9f%b1%e6%94%bf%e8%a6%8b" },
            { topic: "economy", title: "提高職災與退休煤礦工慰問金", detail: "退休煤礦工慰問金由每年 2,000 元提高至 6,000 元；補助高溫防暑設備", source: "https://chiao.tw/policies/%e5%8b%9e%e5%b7%a5%e6%94%bf%e8%a6%8b" },
            { topic: "housing", title: "成立都市更新局並改革都更審議", detail: "都更處升格為一級機關，導入 AI 簡化審查，審議進度公開可查詢", source: "https://chiao.tw/policies/%e9%83%bd%e6%9b%b4%e8%88%87%e4%bd%8f%e5%ae%85%e6%94%bf%e8%a6%8b" },
            { topic: "housing", title: "試辦長租型育兒家庭住宅", detail: "符合條件的育兒家庭最長可租 20 年；另推學生及長者包租代管專案", source: "https://chiao.tw/policies/%e9%83%bd%e6%9b%b4%e8%88%87%e4%bd%8f%e5%ae%85%e6%94%bf%e8%a6%8b" },
            { topic: "transport", title: "以 AI 與大數據重整公車路網，研議低價月票", detail: "依載客率增班增線；研議分級定期票，例如每月 600 元公車方案（尚非正式政見）", source: "https://tw.news.yahoo.com/%E6%99%82%E4%BA%8B%E7%84%A6%E9%BB%9E-%E5%B0%88%E8%A8%AA-%E6%94%9C%E6%B2%88%E4%BC%AF%E6%B4%8B%E9%9B%99%E5%9F%8E%E5%85%B1%E5%A5%BD-%E8%98%87%E5%B7%A7%E6%85%A7-%E6%89%93%E9%80%A0%E5%A4%A7%E6%96%B0%E5%8C%9729%E5%8D%80%E5%93%81%E7%89%8C-222859271.html" },
          ],
          record: [
            { topic: "governance", text: "執業律師出身，之後擔任中央民意代表約十年。", source: "https://chiao.tw/about/" },
            { topic: "economy", text: "擔任民意代表期間推動引進「公共出借權」，書籍被圖書館借閱時作者可獲補償。", source: "https://news.ltn.com.tw/news/politics/breakingnews/5524780" },
            { topic: "safety", text: "擔任民意代表期間提出船舶法修正案，擴大保護海底通訊及電力電纜；船舶法修正已三讀通過。", source: "https://udn.com/news/story/7323/9402130" },
            { topic: "safety", text: "擔任民意代表期間提出太空發展法、災害防救法、都市計畫法、警察法等修正草案。", source: "https://udn.com/news/story/7323/9402130" },
            { topic: "transport", text: "爭取中央補助五股交流道改善工程 39.7 億元（已完工通車）、台 65 線新莊第二南下出口匝道 9.8 億元（本人說法）。", source: "https://udn.com/news/story/7323/9402130" },
            { topic: "welfare", text: "爭取 8.4 億元預算，補助醫療設施及提高疫苗接種處置費（本人說法）。", source: "https://udn.com/news/story/7323/9402130" },
          ],
        },
        {
          id: "ntp-2",
          identity: { name: "李四川", party: "中國國民黨", number: null },
          platforms: [
            { topic: "transport", title: "成立北北基桃首長級跨域交通治理平台", detail: "共同規劃捷運、公車、國道與快速道路，目標雙北 30 分鐘核心生活圈；未公布預算與期程", source: "https://www.cna.com.tw/news/aloc/202609220127.aspx" },
            { topic: "transport", title: "增加路外停車並打通人行道斷點", detail: "利用公共建築、學校、公園、捷運聯開與都更增設路外停車，逐步減少路邊停車；成立人本友善城市委員會", source: "https://www.cna.com.tw/news/aloc/202609220127.aspx" },
            { topic: "transport", title: "樹林段鐵路地下化並延伸至鶯歌", detail: "先做樹林站立體化，再分階段延伸至鶯歌；經費與中央協商，未公布金額", source: "https://udn.com/news/story/124652/9653165" },
            { topic: "transport", title: "規劃大漢溪捷運縱貫線", detail: "延伸民生汐止線，經三重、新莊、塔寮坑、樹林、土城至新北 AI 產業園區，未來再往桃園、基隆延伸", source: "https://udn.com/news/story/124652/9653165" },
            { topic: "transport", title: "淡海輕軌廊道升級為中運量快線", detail: "連接淡海新市鎮、北士科與台北車站；目標到北士科 15 分鐘、台北核心 30 分鐘，仍待研議", source: "https://udn.com/news/story/124652/9653165" },
            { topic: "safety", title: "以交通零死亡為目標改善道路與路口安全", detail: "檢討道路設計、速限、路口與號誌照明，優先處理高風險路段並導入 AI 交通管理", source: "https://www.cna.com.tw/news/aloc/202609220127.aspx" },
            { topic: "economy", title: "在樹林興建大型巨蛋並帶動周邊發展", detail: "承諾 8 年內完工啟用，帶動樹林、土城、三峽、鶯歌一帶發展", source: "https://www.nownews.com/news/6872832" },
            { topic: "economy", title: "提高青年創業貸款額度並放寬資格", detail: "貸款上限由 200 萬元提高至 500 萬元；團隊中任一成年成員設籍新北即可申請", source: "https://newtalk.tw/news/view/2026-07-30/1050329" },
            { topic: "economy", title: "補助因照顧家庭離職者重返職場", detail: "35–45 歲對象每月補助 5,000 元、最高 1.5 萬元，搭配職業訓練與媒合", source: "https://tw.news.yahoo.com/%E6%9D%8E%E5%9B%9B%E5%B7%9D%E6%96%B0%E5%8C%97%E5%8B%9E%E5%B7%A5%E5%BE%8C%E6%8F%B4%E6%9C%83%E6%88%90%E7%AB%8B-%E9%87%8D%E7%94%B34%E6%94%BF%E8%A6%8B-042214965.html" },
            { topic: "economy", title: "提高勞工因公死亡慰問金並補助高溫作業防護", detail: "因公死亡慰問金由 30 萬元提高至 36 萬元；補助高溫作業場所防護與降溫設施", source: "https://tw.news.yahoo.com/%E6%9D%8E%E5%9B%9B%E5%B7%9D%E6%96%B0%E5%8C%97%E5%8B%9E%E5%B7%A5%E5%BE%8C%E6%8F%B4%E6%9C%83%E6%88%90%E7%AB%8B-%E9%87%8D%E7%94%B34%E6%94%BF%E8%A6%8B-042214965.html" },
            { topic: "housing", title: "沿捷運與開發區擴大社會住宅供給", detail: "新增 1.2 萬戶社宅；推動企業興辦勞工宅、婚育宅加碼、高齡友善社宅", source: "https://news.ltn.com.tw/news/politics/breakingnews/5570282" },
            { topic: "welfare", title: "長者居家安全檢查與改善補助", detail: "65 歲以上住家可申請，最高補助 3 萬元；75 歲以上獨居或失能者由政府到府服務", source: "https://news.pts.org.tw/article/830730" },
            { topic: "welfare", title: "敬老卡部分點數可轉為電子票證點數", detail: "每月 600 點中 300 點可用於超商、超市、藥局購物與看診", source: "https://udn.com/news/story/124652/9796016" },
            { topic: "education", title: "延長孕產婦交通服務並試辦運動中心免費臨托", detail: "交通服務由產後 6 個月延長至孩子滿 1 歲；運動中心週三 14–21 時為 2–12 歲兒童提供 2 小時免費臨托", source: "https://udn.com/news/story/124652/9641070" },
          ],
          record: [
            { topic: "governance", text: "長期擔任地方政府工程主管，之後在地方與中央政府擔任副首長級職務多年。", source: "https://zh.wikipedia.org/zh-tw/%E6%9D%8E%E5%9B%9B%E5%B7%9D" },
            { topic: "safety", text: "擔任地方政府副首長期間，督導大型公共建築的消防缺失改善，經 8 次查驗後複檢合格。", source: "https://www.cna.com.tw/news/aloc/202310060271.aspx" },
            { topic: "transport", text: "擔任地方政府副首長期間參與推動捷運與輕軌路網計畫及山區道路建設（本人說法）。", source: "https://news.ltn.com.tw/news/NewTaipei/breakingnews/5556367" },
            { topic: "economy", text: "代表市政府與國際 AI 晶片企業簽訂合作。", source: "https://zh.wikipedia.org/zh-tw/%E6%9D%8E%E5%9B%9B%E5%B7%9D" },
          ],
        },
        {
          id: "ntp-3",
          identity: { name: "蘇輝湟", party: "無黨籍", number: null },
          platforms: [
            { topic: "welfare", title: "開放未婚者一夫二妻或一妻二夫合法化", detail: "以回應少子化為由，主張男女都有相同選擇權，不要求所有人採同一模式", source: "https://tw.news.yahoo.com/%E5%8F%83%E9%81%B8%E6%96%B0%E5%8C%97%E5%B8%82%E9%95%B7%E9%82%84%E6%9C%89-%E4%BB%96-%E5%8A%9B%E6%8C%BA-%E5%A4%AB%E4%BA%8C%E5%A6%BB-%E5%90%88%E6%B3%95%E5%8C%96-015312947.html" },
            { topic: "welfare", title: "派出所提供免費飲食、洗澡、住宿與喪葬協助", detail: "由各警察分局派出所提供", source: "https://news.ltn.com.tw/news/politics/breakingnews/5563372" },
            { topic: "transport", title: "道路設自行車專用道並限制大型車進市區", detail: "新闢或重鋪道路時參考歐洲做法設慢車專用道；限制大型車輛行駛市區道路", source: "https://news.ltn.com.tw/news/politics/breakingnews/5563372" },
            { topic: "education", title: "加強中小學英語與台語教學", detail: "", source: "https://tw.news.yahoo.com/%E5%8F%83%E9%81%B8%E6%96%B0%E5%8C%97%E5%B8%82%E9%95%B7%E9%82%84%E6%9C%89-%E4%BB%96-%E5%8A%9B%E6%8C%BA-%E5%A4%AB%E4%BA%8C%E5%A6%BB-%E5%90%88%E6%B3%95%E5%8C%96-015312947.html" },
            { topic: "safety", title: "提升警察英語能力", detail: "改善第一線警察與外籍人士的溝通", source: "https://tw.news.yahoo.com/%E5%8F%83%E9%81%B8%E6%96%B0%E5%8C%97%E5%B8%82%E9%95%B7%E9%82%84%E6%9C%89-%E4%BB%96-%E5%8A%9B%E6%8C%BA-%E5%A4%AB%E4%BA%8C%E5%A6%BB-%E5%90%88%E6%B3%95%E5%8C%96-015312947.html" },
            { topic: "safety", title: "增設學校周邊及重要路口監視器", detail: "", source: "https://news.ltn.com.tw/news/politics/breakingnews/5563372" },
            { topic: "safety", title: "爭取新北市加入國際刑警組織", detail: "", source: "https://news.ltn.com.tw/news/politics/breakingnews/5563372" },
            { topic: "economy", title: "爭取國際賽事與國際會議在新北舉辦", detail: "", source: "https://news.ltn.com.tw/news/politics/breakingnews/5563372" },
            { topic: "governance", title: "市府與中央定期開會合力處理市政", detail: "", source: "https://news.ltn.com.tw/news/politics/breakingnews/5563372" },
            { topic: "governance", title: "不分黨派聘請市政顧問", detail: "聘請社會賢達與歷任市長擔任市政顧問", source: "https://news.ltn.com.tw/news/politics/breakingnews/5563372" },
          ],
          record: [
            { topic: "governance", text: "曾參選里長及中央民意代表，均未當選。", source: "https://news.ltn.com.tw/news/politics/breakingnews/5563372" },
            { topic: "education", text: "曾任家教與教科書編輯。", source: "https://tw.news.yahoo.com/%E5%8F%83%E9%81%B8%E6%96%B0%E5%8C%97%E5%B8%82%E9%95%B7%E9%82%84%E6%9C%89-%E4%BB%96-%E5%8A%9B%E6%8C%BA-%E5%A4%AB%E4%BA%8C%E5%A6%BB-%E5%90%88%E6%B3%95%E5%8C%96-015312947.html" },
            { topic: "economy", text: "長期在傳統市場工作。", source: "https://tw.news.yahoo.com/%E5%8F%83%E9%81%B8%E6%96%B0%E5%8C%97%E5%B8%82%E9%95%B7%E9%82%84%E6%9C%89-%E4%BB%96-%E5%8A%9B%E6%8C%BA-%E5%A4%AB%E4%BA%8C%E5%A6%BB-%E5%90%88%E6%B3%95%E5%8C%96-015312947.html" },
          ],
        },
      ],
    },
  ],
};

/*
 * 過去職位的政見與兌現狀況
 * status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 /
 *         unknown 無法查證 / not_applicable 未當選、無從兌現
 * 只反映承諾的事項是否完成，不代表候選人個人的貢獻程度（許多建設由中央與地方共同推動）。
 */
(() => {
  const BULLETIN_2020 = "https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/109%E5%B9%B4%E7%AC%AC10%E5%B1%86/02%E5%8D%80%E5%9F%9F%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/03%E6%96%B0%E5%8C%97%E5%B8%82/%E7%AC%AC5%E9%81%B8%E8%88%89%E5%8D%80.pdf";
  const BULLETIN_LI_2022 = "https://web.archive.org/web/20240105055507id_/https://eebulletin.cec.gov.tw/111/03%E6%96%B0%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E6%96%B0%E8%8E%8A%E5%8D%80/%E6%96%B0%E8%8E%8A%E5%8D%80%E6%96%87%E6%98%8E%E9%87%8C%E8%88%88%E6%BC%A2%E9%87%8C%E6%B5%B7%E5%B1%B1%E9%87%8C%E6%96%87%E8%A1%A1%E9%87%8C%E6%96%87%E8%81%96%E9%87%8C%E6%A6%AE%E5%92%8C%E9%87%8C%E5%BF%A0%E5%AD%9D%E9%87%8C%E5%85%A8%E6%B3%B0%E9%87%8C%E6%96%87%E5%BE%B7%E9%87%8C%E5%85%A8%E5%AE%89%E9%87%8C%E9%87%8C%E9%95%B7.pdf";
  const BULLETIN_LY_2024 = "https://web.archive.org/web/20240625050314id_/https://eebulletin.cec.gov.tw/113/02%E7%AC%AC11%E5%B1%86%E5%8D%80%E5%9F%9F%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1%E9%81%B8%E8%88%89/03%E6%96%B0%E5%8C%97%E5%B8%82/%E7%AC%AC04%E9%81%B8%E8%88%89%E5%8D%80/%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1-%E7%AC%AC4%E9%81%B8%E8%88%89%E5%8D%80.pdf";

  const PAST = {
    "ntp-1": [
      {
        role: "中央民意代表", period: "2016–2026", elected: true,
        note: "2016、2020 年競選政見；2024 年選舉公報已無法取得，未列入。查無任何單位公布的政見達成率百分比。",
        promises: [
          { topic: "transport", title: "推動三鶯捷運線興建", status: "done", note: "2016 年政見。2026 年 6 月 30 日通車", source: "https://city.gvm.com.tw/article/131235" },
          { topic: "transport", title: "樹林段捷運約兩年後動工", status: "done", note: "2020 年政見。2022 年 10 月開工", source: "https://newtalk.tw/news/view/2022-10-14/831872" },
          { topic: "transport", title: "加速樹林地區捷運路線興建", status: "in_progress", note: "2016 年政見。施工中，通車目標由 2028 年延至 2031 年", source: "https://newtalk.tw/news/view/2022-10-14/831872" },
          { topic: "transport", title: "鶯歌鳳鳴簡易站 2024 年完工", status: "done", note: "2020 年政見。2024 年 11 月 30 日啟用", source: "https://www.cna.com.tw/news/ahel/202411300095.aspx" },
          { topic: "transport", title: "快速道路增設浮洲橋往樹林匝道", status: "done", note: "2020 年政見。2023 年 8 月通車", source: "https://cars.tvbs.com.tw/policy/139321" },
          { topic: "transport", title: "大漢溪增建新莊至柑園堤外便道", status: "done", note: "2020 年政見。7.4 公里路段 2024 年 7 月通車，是否涵蓋全段未確認", source: "https://news.ltn.com.tw/news/life/breakingnews/4737428" },
          { topic: "transport", title: "樹林火車站鐵路改為地下化", status: "not_done", note: "2016 年政見。未核定或動工；2026 年本人表示調度場難以地下化", source: "https://news.ltn.com.tw/news/politics/breakingnews/5520257" },
          { topic: "education", title: "加速幼兒托育公共化", status: "partial", note: "2016 年政見。2018 年起全國推行公共及準公共托育，個人角色難以量化", source: "https://mohw.gov.tw/cp-17-46412-1.html" },
          { topic: "environment", title: "鶯歌鐵路沿線增設隔音牆", status: "unknown", note: "2020 年政見。查無施工或完工資料", source: BULLETIN_2020 },
          { topic: "environment", title: "樹林大安路增加約 2,600 坪綠地", status: "unknown", note: "2020 年政見。查無完工或開放資料", source: BULLETIN_2020 },
        ],
        rates: [
          { label: "公民團體國會評鑑", value: "20 個會期中 16 個獲評優秀", by: "公民監督國會聯盟", source: "https://ccw.org.tw/assess/3/legislator/109" },
          { label: "第一任問政數量", value: "提出 73 個法律草案、36 場公聽會", by: "本人自述（選舉公報）", source: BULLETIN_2020 },
        ],
      },
    ],
    "ntp-2": [
      {
        role: "直轄市副首長（北部）", period: "2016–2018", elected: false,
        note: "非民選職位，無個人政見。以下為其督導的首長政見。",
        promises: [
          { topic: "transport", title: "輕軌第一條路線完工通車", status: "done", note: "首長政見，由其督導。2018 年 12 月通車", source: "https://news.tvbs.com.tw/life/1050841" },
          { topic: "transport", title: "環狀捷運第一階段 2019 年初通車", status: "partial", note: "首長政見，由其督導。延至 2020 年 1 月通車", source: "https://news.tvbs.com.tw/life/1050838" },
        ],
        rates: [
          { label: "市府中程施政關鍵績效指標達成率（2018 年度）", value: "90%", by: "該市研考會（市府整體，非個人）", source: "https://www.rde.ntpc.gov.tw/userfiles/1160700/files/%E6%96%B0%E5%8C%97%E5%B8%82%E6%94%BF%E5%BA%9C(105%E8%87%B3108%E5%B9%B4%E5%BA%A6%EF%BC%89%E4%B8%AD%E7%A8%8B%E6%96%BD%E6%94%BF%E8%A8%88%E7%95%AB108%E5%B9%B4%E5%BA%A6%E9%97%9C%E9%8D%B5%E7%B8%BE%E6%95%88%E6%8C%87%E6%A8%99%E9%81%94%E6%88%90%E6%83%85%E5%BD%A2%E5%88%86%E6%9E%90.pdf" },
        ],
      },
      {
        role: "直轄市副首長（南部）", period: "2018–2020", elected: false,
        note: "非民選職位，任期中途卸任。",
        promises: [
          { topic: "safety", title: "改善主要積淹水點", status: "in_progress", note: "由其督導。68 處中至 2020 年 3 月改善 22 處", source: "https://newtalk.tw/news/view/2020-05-05/401776" },
          { topic: "transport", title: "市區道路平整改善", status: "unknown", note: "首長政見，由其督導。無量化目標；市府自報改善約 547 條", source: "https://newtalk.tw/news/view/2020-05-05/401776" },
          { topic: "environment", title: "2020 年底前換裝 12 萬盞 LED 路燈", status: "unknown", note: "首長團隊目標，由其督導。中途卸任，查無全數完工資料", source: "https://newtalk.tw/news/view/2020-05-05/401776" },
        ],
        rates: [],
      },
      {
        role: "直轄市副首長（北部）", period: "2022–2026", elected: false,
        note: "非民選職位。以下為本人公開宣示的目標。",
        promises: [
          { topic: "governance", title: "大型室內體育館完工、取得使照並年底啟用", status: "partial", note: "本人宣示 7 月取得使照，延至 11 月核發；年底如期有賽事", source: "https://www.cna.com.tw/news/ahel/202311035001.aspx" },
          { topic: "economy", title: "科技園區企業總部用地完成地上權簽約", status: "done", note: "本人宣示的日期如期簽約，權利金 122 億元", source: "https://www.cna.com.tw/news/afe/202602100044.aspx" },
          { topic: "economy", title: "企業總部 2026 年 6 月前開工", status: "not_done", note: "本人宣示的目標。延至年底動工", source: "https://news.pts.org.tw/article/810337" },
        ],
        rates: [],
      },
    ],
    "ntp-3": [
      {
        role: "參選里長", period: "2022", elected: false,
        result: "得票 20.37%，未當選",
        promises: [
          { topic: "governance", title: "爭取里辦公處遷入有空調的區公所樓層", status: "not_applicable", note: "", source: BULLETIN_LI_2022 },
          { topic: "housing", title: "組織修繕人員協助里民修繕房屋", status: "not_applicable", note: "", source: BULLETIN_LI_2022 },
          { topic: "welfare", title: "每年至少舉辦一次里民聯誼及藝文活動", status: "not_applicable", note: "", source: BULLETIN_LI_2022 },
          { topic: "governance", title: "協助法院遴選里民擔任國民法官", status: "not_applicable", note: "", source: BULLETIN_LI_2022 },
          { topic: "welfare", title: "里年度盈餘以現金發給低收入戶", status: "not_applicable", note: "", source: BULLETIN_LI_2022 },
        ],
        rates: [],
      },
      {
        role: "參選中央民意代表", period: "2024", elected: false,
        result: "得票 0.90%，未當選",
        promises: [
          { topic: "education", title: "鬆綁十二年國教限制，尊重學生學習權", status: "not_applicable", note: "", source: BULLETIN_LY_2024 },
          { topic: "economy", title: "協助在地各行業發展與轉型", status: "not_applicable", note: "主張不只關注明星產業", source: BULLETIN_LY_2024 },
          { topic: "environment", title: "推動在地河川流域環境與水質淨化", status: "not_applicable", note: "並期帶動觀光、餐飲等產業", source: BULLETIN_LY_2024 },
          { topic: "safety", title: "監督司法嚴懲槍毒犯罪與房地產炒作", status: "not_applicable", note: "", source: BULLETIN_LY_2024 },
        ],
        rates: [],
      },
    ],
  };

  for (const race of window.ELECTION_DATA.races) {
    for (const c of race.candidates) c.past = PAST[c.id] || [];
  }
})();

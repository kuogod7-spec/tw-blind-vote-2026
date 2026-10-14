/*
 * ⚠️ 範例資料：以下所有選區、候選人、政見與經歷均為虛構，僅用於展示網站功能。
 * 正式上線前請以中選會公告的候選人名單與候選人實際公布的政見替換。
 * 資料格式與「去識別化」撰寫原則請見 README.md。
 */
window.ELECTION_DATA = {
  meta: {
    title: "2026 地方選舉 · 盲選政見比較",
    electionDate: "2026-11-28",
    isSample: true,
    updated: "2026-10-13",
  },

  // 議題分類：所有政見與經歷都要歸入其中一類
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
      id: "sample-mayor",
      region: "範例市",
      office: "市長",
      candidates: [
        {
          id: "c1",
          identity: { name: "範例候選人甲", party: "範例甲黨", number: 1 },
          platforms: [
            { topic: "transport", title: "捷運第二期路網 2030 年前動工", detail: "優先興建東西向環狀線，經費以中央補助與土地開發效益挹注，不另行舉債。" },
            { topic: "transport", title: "公車路線全面重整", detail: "依通勤資料重新規劃路線，尖峰班距縮短至 8 分鐘以內。" },
            { topic: "housing", title: "8 年興建 1 萬戶社會住宅", detail: "活化閒置公有地，並推出包租代管擴大方案，租金訂於市價 7 成以下。" },
            { topic: "welfare", title: "長照據點每里一處", detail: "與社區發展協會合作，結合共餐與健康促進。" },
            { topic: "education", title: "0–6 歲育兒津貼每月加碼 3,000 元", detail: "與中央津貼疊加發放，不排富。" },
            { topic: "economy", title: "設立青年創業基金 20 億元", detail: "提供低利貸款與共享辦公空間，優先支持在地產業升級。" },
            { topic: "environment", title: "公有屋頂全面設置太陽能板", detail: "4 年內完成學校與公有建物屋頂光電，收益回饋校園。" },
            { topic: "governance", title: "市政預算全面開放資料化", detail: "所有標案與補助款以開放資料格式即時公開。" },
          ],
          record: [
            { topic: "housing", text: "擔任民意代表期間提出社會住宅自治條例修正案，獲通過。" },
            { topic: "governance", text: "推動議會質詢影音全面上網。" },
            { topic: "transport", text: "曾任交通相關局處副首長 3 年，任內完成 2 條公車專用道。" },
          ],
        },
        {
          id: "c2",
          identity: { name: "範例候選人乙", party: "範例乙黨", number: 2 },
          platforms: [
            { topic: "transport", title: "優先改善既有道路與人行環境", detail: "4 年完成 300 公里人行道改善，取消部分路邊停車格以拓寬步行空間。" },
            { topic: "transport", title: "暫緩新捷運路線，重新檢討財務", detail: "委託第三方評估既有路網財務，再決定是否興建新線。" },
            { topic: "housing", title: "租屋補貼擴大至年收 100 萬以下家庭", detail: "以補貼取代大量興建社宅，縮短政策見效時間。" },
            { topic: "welfare", title: "65 歲以上市民免費健檢與疫苗", detail: "每年提供一次完整健檢，並補助自費疫苗。" },
            { topic: "welfare", title: "失能長輩居家照顧時數加碼 20%", detail: "市府自籌經費補足中央長照給付缺口。" },
            { topic: "education", title: "國中小營養午餐免費", detail: "全面免費並提高在地食材比例至 60%。" },
            { topic: "economy", title: "招商引進半導體與 AI 相關產業", detail: "設立單一窗口，簡化工業用地變更流程。" },
            { topic: "safety", title: "增設 2,000 支智慧監視器", detail: "優先布建於學區與治安熱點，並訂定個資保護規範。" },
            { topic: "safety", title: "老舊建物耐震補強補助加倍", detail: "針對 1999 年前建物提供初評免費與補強工程補助。" },
          ],
          record: [
            { topic: "economy", text: "曾任民間企業高階主管 15 年，主導海外工廠回流投資案。" },
            { topic: "welfare", text: "創辦非營利長照服務團體，服務超過 3,000 個家庭。" },
          ],
        },
        {
          id: "c3",
          identity: { name: "範例候選人丙", party: "無黨籍", number: 3 },
          platforms: [
            { topic: "transport", title: "公車與 YouBike 前 30 分鐘免費", detail: "以停車費調漲收入支應，鼓勵大眾運輸。" },
            { topic: "housing", title: "囤房稅提高至法定上限", detail: "非自住第 3 戶以上房屋稅率調至最高，稅收專款投入社宅。" },
            { topic: "housing", title: "成立市府租屋糾紛調解中心", detail: "提供免費法律諮詢與定型化契約檢查。" },
            { topic: "education", title: "公共托育名額 4 年倍增", detail: "利用少子化閒置校舍改建公托中心。" },
            { topic: "environment", title: "2035 年市府用電 100% 綠電", detail: "結合公民電廠與綠電採購。" },
            { topic: "environment", title: "全面禁止新設燃煤鍋爐", detail: "既有工廠鍋爐提供汰換補助，5 年完成轉換。" },
            { topic: "governance", title: "參與式預算擴大至每年 10 億元", detail: "由市民提案、投票決定預算用途。" },
            { topic: "governance", title: "首長任內財產與行程公開", detail: "每週公開行程，每年公開財產變動。" },
          ],
          record: [
            { topic: "environment", text: "長期參與空污監測公民團體，協助建立社區空品感測網。" },
            { topic: "governance", text: "曾任市府顧問，推動公民參與預算試辦計畫。" },
            { topic: "education", text: "擔任家長團體幹部期間推動校園午餐食材登錄制度。" },
          ],
        },
      ],
    },
    {
      id: "sample-council-1",
      region: "範例市",
      office: "第 1 選區市議員",
      candidates: [
        {
          id: "d1",
          identity: { name: "範例議員候選人 A", party: "範例甲黨", number: 1 },
          platforms: [
            { topic: "transport", title: "爭取區內 3 處路口改設行人專用時相", detail: "以近 3 年事故資料排序優先順序。" },
            { topic: "welfare", title: "推動區內第二座公立長照機構", detail: "爭取中央前瞻預算。" },
          ],
          record: [{ topic: "transport", text: "任內爭取完成區內國小周邊通學步道。" }],
        },
        {
          id: "d2",
          identity: { name: "範例議員候選人 B", party: "範例乙黨", number: 2 },
          platforms: [
            { topic: "safety", title: "爭取區內派出所增補警力 20 名", detail: "" },
            { topic: "education", title: "推動國中增設雙語與程式課程", detail: "與在地大學合作師資。" },
            { topic: "economy", title: "傳統市場改建與攤商輔導", detail: "改建期間提供臨時攤位與租金減免。" },
          ],
          record: [],
        },
        {
          id: "d3",
          identity: { name: "範例議員候選人 C", party: "無黨籍", number: 3 },
          platforms: [
            { topic: "environment", title: "河濱公園增設遮蔭與飲水設施", detail: "" },
            { topic: "governance", title: "每月公開議員研究費使用明細", detail: "" },
          ],
          record: [{ topic: "environment", text: "發起社區河川守護志工隊，運作 6 年。" }],
        },
      ],
    },
  ],
};

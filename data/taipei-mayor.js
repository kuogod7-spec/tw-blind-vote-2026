/*
 * 2026 臺北市長選舉：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-14。候選人名單依中選會「115 年直轄市長選舉候選人登記彙總表」（製表日期 115/09/07，
 * https://web.cec.gov.tw/central/article/64709 附件 1-1），臺北市共 6 人登記，應選 1 席。
 * 審定名單 10/16 公告、號次原訂 10/23 抽籤，因颱風薔琵臺北市 10/23 停止上班，依北市選委會公告改於 10/27 抽籤（https://www.cna.com.tw/news/aloc/202610210175.aspx、https://www.cna.com.tw/news/aloc/202610220375.aspx），抽籤後請補上 identity.number（2026-10-25 註）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 /
 *         unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 2026-10-17 補查：tpm-3 補 2 則政見（附加於陣列尾端）及 4 則司法事件經歷；tpm-4 補 1 則政見、1 則經歷；
 *         tpm-6 補 1 則經歷；tpm-5、tpm-6 仍未查得 2026 年政見（新聞僅報導登記與過去言行）。
 * 2026-10-19 第四輪補查：新增 0 則政見、0 則經歷；已知缺漏：唐新民、林志成仍查無 2026 年具體政見。
 */
window.ELECTION_DATA.races.push({
  "id": "taipei-mayor",
  "region": "臺北市",
  "office": "市長",
  "note": "政見整理自候選人官網、選舉公報與新聞報導（截至 2026-10-14），並非完整政見。2026 年選舉公報尚未發布；現任首長尚未發表完整連任政見，部分政見為以市府名義宣布、預定之後實施的政策。各候選人公布的細節多寡不同，這裡照實呈現，沒有替任何人補充。",
  "candidates": [
    {
      "id": "tpm-1",
      "identity": {
        "name": "蔣萬安",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "遷移市區機場，騰出約 300 公頃土地開發 AI 產業園區",
          "detail": "100 公頃 AI 產業聚落、110 公頃中央公園、90 公頃國際永續生活聚落；預估產值 12 兆元、就業 6.5 萬人；運量由桃園機場第三航廈（2027 年啟用）及第三跑道（2033 年）吸收；須與中央協商，未公布期程與經費",
          "source": "https://cna.com.tw/news/aipl/202610080124.aspx"
        },
        {
          "topic": "housing",
          "title": "機場遷移後，周邊約 570 公頃受航高限制地區推動都更",
          "detail": "讓 4、5 層老舊建築有機會更新；推估 90 公頃生活聚落可增加逾 15 萬戶居住單元；未公布期程",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5599727"
        },
        {
          "topic": "transport",
          "title": "規劃南北向及東西向兩條捷運新路廊",
          "detail": "南北向自松山機場站往南經國父紀念館、大安、公館至中和；東西向士林北投線自圓山站、松山機場站延伸至內湖，串接科技園區；未公布期程與經費",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5599727"
        },
        {
          "topic": "transport",
          "title": "民族東路向東延伸至內湖並新增跨河道路廊帶",
          "detail": "民族東路穿越機場基地接內湖、經大直橋通大直，向西接建國及新生高架；基湖路、敬業三路、北安路以跨河廊帶銜接松山與信義；以機場遷移為前提",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5599727"
        },
        {
          "topic": "environment",
          "title": "闢建 110 公頃中央公園並推動基隆河大直段河岸再生",
          "detail": "以機場遷移後的腹地為範圍；未公布期程",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5599727"
        },
        {
          "topic": "transport",
          "title": "分三階段試行無人自駕公車",
          "detail": "2026 年在動物園等封閉園區試行接駁；2027 年上半年在北投士林科技園區設沙盒場域；2027 年下半年在 15 條公車專用道試行，事先升級號誌與感應器；營運牌照仍待中央同意",
          "source": "https://technews.tw/2026/06/22/self-driving-buses-to-begin-trials-in-bus-lanes-in-h2-next-year/"
        },
        {
          "topic": "education",
          "title": "4 年投入 92 億元推動 AI 教育",
          "detail": "在北投士林科技園區設 AI 教育中心（約 2027 年規劃、2028 年成立），統籌師資培訓、課程設計與產學合作；升級師生 AI 助理平台",
          "source": "https://udn.com/news/story/7323/9605903"
        },
        {
          "topic": "education",
          "title": "教師配備 AI 電腦並設置校園 AI 實驗室",
          "detail": "4 年內逐步為每位教師配置 AI 電腦、同步升級學生數位載具；協助學校建置具 GPU 算力的 AI 實驗室；開設機器人、無人機等跨域課程",
          "source": "https://udn.com/news/story/7323/9605903"
        },
        {
          "topic": "welfare",
          "title": "產婦每胎發給 3 萬元坐月子補助",
          "detail": "不排富，預計 2027 年實施，估計每年約 1.1 萬名產婦受惠；未公布預算",
          "source": "https://www.setn.com/news/1892032"
        },
        {
          "topic": "welfare",
          "title": "擴大醫療性凍卵補助",
          "detail": "對象為 25–40 歲因疾病或治療可能影響生育的女性；最高補助由 3.2 萬元提高至 7.2 萬元（療程 6 萬元＋4 年保存費 1.2 萬元）；預計 2027 年 1 月實施",
          "source": "https://www.setn.com/news/1892032"
        },
        {
          "topic": "welfare",
          "title": "提高孕產婦交通補助並開設新手家庭聯合門診",
          "detail": "交通補助由 8,000 元提高至 1 萬元，期限延長至預產期後一年，約 1.2 萬人受惠；門診整合小兒科、護理、社工、營養師，每次最長 60 分鐘；預計 2026 年 10 月實施",
          "source": "https://www.setn.com/news/1892032"
        },
        {
          "topic": "housing",
          "title": "婚育家庭地價稅與房屋稅減至 0 元",
          "detail": "須修改相關法制，未訂時程",
          "source": "https://www.setn.com/news/1892032"
        },
        {
          "topic": "welfare",
          "title": "擴大敬老卡點數使用通路並開放累積",
          "detail": "2027 年起點數可用於超商、超市、藥局及農會；未使用點數可持續累積",
          "source": "https://udn.com/news/story/7323/9792359"
        },
        {
          "topic": "welfare",
          "title": "在各行政區增設第二運動中心",
          "detail": "已規劃數處新運動場館；未公布總數與完成期程",
          "source": "https://udn.com/news/story/7323/9792359"
        },
        {
          "topic": "governance",
          "title": "2027 年底前讓每位市府公務員配置 AI 代理助理",
          "detail": "分兩階段：先推櫃台式對話工具，再於員工通過測驗、符合資安規範後配置個人助理；隔年度預算仍在評估",
          "source": "https://udn.com/news/story/7323/9649143"
        },
        {
          "topic": "governance",
          "title": "以 5 年競爭型預算推動各局處導入 AI",
          "detail": "規劃 5 年投入 10 億元，由各單位提案；已訂定市府 AI 作業指引",
          "source": "https://www.bnext.com.tw/article/92509/taipei-mayor-2026-shen-chiang-tech-policy"
        },
        {
          "topic": "safety",
          "title": "持續推動學校周邊通學區改善",
          "detail": "已完成 223 所學校周邊步行環境改善（本人說法）；未公布新增數量與期程",
          "source": "https://news.pts.org.tw/article/827290"
        },
        {
          "topic": "housing",
          "title": "推動老舊整宅公辦都更",
          "detail": "南機場整宅單元四 2026 年 10 月簽約，民間投入 38.87 億元興建 2 棟 24 層建築；單元五已公告招商",
          "source": "https://www.cna.com.tw/news/aloc/202610130113.aspx"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "執業律師出身，2016–2022 年擔任中央民意代表，2022 年起擔任直轄市首長。",
          "source": "https://zh.wikipedia.org/zh-tw/%E8%94%A3%E8%90%AC%E5%AE%89"
        },
        {
          "topic": "governance",
          "text": "擔任中央民意代表期間，提出戒嚴時期人民受損權利回復條例修正草案，主張返還威權統治時期遭不當沒收的財產。",
          "source": "https://newtalk.tw/news/view/2021-01-12/522309"
        },
        {
          "topic": "welfare",
          "text": "擔任中央民意代表期間，提案以美沙冬協助海洛因成癮戒治並建立友善戒治環境。",
          "source": "https://zh.wikipedia.org/zh-tw/%E8%94%A3%E8%90%AC%E5%AE%89"
        },
        {
          "topic": "education",
          "text": "擔任直轄市首長期間，2026 年 1 月宣布公私立國中小營養午餐全面免費，自 2026 學年度實施。",
          "source": "https://news.pts.org.tw/article/789320"
        },
        {
          "topic": "transport",
          "text": "擔任直轄市首長期間，一處捷運延伸段於 2026 年 8 月 30 日通車，較原定第一季通車延後約半年。",
          "source": "https://cna.com.tw/news/ahel/202608300170.aspx"
        },
        {
          "topic": "economy",
          "text": "擔任直轄市首長期間，2026 年 2 月與國際 AI 晶片企業簽約，以 122 億元權利金設定科技園區兩筆基地 50 年地上權；企業總部尚未動工。",
          "source": "https://www.bnext.com.tw/article/92509/taipei-mayor-2026-shen-chiang-tech-policy"
        },
        {
          "topic": "governance",
          "text": "擔任直轄市首長期間，大型室內體育館於 2023 年 11 月取得使用執照啟用。",
          "source": "https://www.cna.com.tw/news/ahel/202311035001.aspx"
        },
        {
          "topic": "welfare",
          "text": "擔任直轄市首長期間恢復發放重陽敬老禮金（85 歲以上 3,000 元），敬老卡點數提高至每月 600 點。",
          "source": "https://udn.com/news/story/7323/9792359"
        },
        {
          "topic": "education",
          "text": "2026 學年度起，5 歲幼兒就讀私立幼兒園每學期加發 5,000 元。",
          "source": "https://www.setn.com/news/1892032"
        },
        {
          "topic": "housing",
          "text": "社會住宅保留 20% 婚育專屬配額，全市約 1 萬戶。",
          "source": "https://www.setn.com/news/1892032"
        }
      ],
      "past": [
        {
          "role": "直轄市首長",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "2022 年選舉公報政見，列出 12 則。查無任何單位公布的政見達成率百分比。部分項目標為無法查證，是因整理期間無法進一步搜尋，不代表確定未執行。",
          "promises": [
            {
              "topic": "welfare",
              "title": "提高新生兒生育獎勵",
              "status": "done",
              "note": "2023 年 4 月 4 日起出生者，第 1 胎 4 萬元（原 2 萬元）、第 2 胎 4.5 萬元、第 3 胎以上 5 萬元",
              "source": "https://www.nownews.com/news/6087441"
            },
            {
              "topic": "housing",
              "title": "提撥兩成社會住宅優先給生第二胎的家庭",
              "status": "partial",
              "note": "2023 年 3 月改為育有 2 名以上 0–6 歲子女的家庭加籤、入住機會 2 倍，並未保留兩成戶數；另每名 0–12 歲子女每月租金補助 1,000 元，最高 3,000 元",
              "source": "https://city.gvm.com.tw/article/100885"
            },
            {
              "topic": "housing",
              "title": "下修參與公辦都更的意願書門檻",
              "status": "done",
              "note": "2023 年 3 月 3 日起，第一階段受理門檻由 90% 降至 75%；基地仍須達 2,000 平方公尺",
              "source": "https://n.yam.com/Article/20230303919141"
            },
            {
              "topic": "welfare",
              "title": "提供孕婦一年 12 次產檢專車",
              "status": "unknown",
              "note": "未查得可證明次數與上路時間的報導",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/01%E5%B8%82%E9%95%B7/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf"
            },
            {
              "topic": "welfare",
              "title": "市民三個月內免費 12 次運動體驗，並可用 App 集點兌換",
              "status": "partial",
              "note": "2023 年 9 月試辦，限 23–64 歲，每人 1,500 點可運動 12 次；2024 年發 4 萬份 1,500 元運動抵用金，擴大至民營場館",
              "source": "https://www.taiwannews.com.tw/zh/news/5094648"
            },
            {
              "topic": "environment",
              "title": "流浪動物收容所盡速動工改建",
              "status": "done",
              "note": "2024 年 7 月 29 日開工，發包經費 12.7 億元；預計 2027 年下半年完工、2028 年營運",
              "source": "https://www.geo.gov.taipei/News_Content.aspx?n=23285747C0511EC4&sms=72544237BBE4C5F6&s=2DF72C703A88AE7F"
            },
            {
              "topic": "transport",
              "title": "增設捷運寵物車廂",
              "status": "partial",
              "note": "2023 年 4 月試辦單日寵物專車；未查得常態寵物車廂",
              "source": "https://www.ettoday.net/news/20230307/2454073.htm"
            },
            {
              "topic": "governance",
              "title": "女性閣員比例提高至三分之一",
              "status": "unknown",
              "note": "2023 年 3 月市府公布女性首長比例 21.43%，未達目標；之後的比例未查得",
              "source": "https://news.ltn.com.tw/news/politics/breakingnews/4233016"
            },
            {
              "topic": "economy",
              "title": "成立城市級投資公司，讓市民當新創股東",
              "status": "unknown",
              "note": "未查得執行資料",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/01%E5%B8%82%E9%95%B7/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf"
            },
            {
              "topic": "education",
              "title": "推動設立城市文學館",
              "status": "unknown",
              "note": "未查得執行資料",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/01%E5%B8%82%E9%95%B7/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf"
            },
            {
              "topic": "housing",
              "title": "長者遷入社宅，原住宅包租代管給年輕人",
              "status": "unknown",
              "note": "未查得執行資料",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/01%E5%B8%82%E9%95%B7/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf"
            },
            {
              "topic": "economy",
              "title": "推動 2025 年海外人才計畫，吸引海外創業家移居",
              "status": "unknown",
              "note": "未查得執行資料",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/01%E5%B8%82%E9%95%B7/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf"
            }
          ],
          "rates": [
            {
              "label": "首長施政滿意度（2026 年 1 月）",
              "value": "滿意 63%、不滿意 22%",
              "by": "TVBS 民調中心",
              "source": "https://www.storm.mg/article/11099275"
            }
          ]
        },
        {
          "role": "中央民意代表",
          "period": "2016–2022",
          "elected": true,
          "result": "",
          "note": "2016、2020 年選舉公報原始連結失效，政見未收錄。",
          "promises": [],
          "rates": [
            {
              "label": "公民團體國會評鑑",
              "value": "九次評為優秀",
              "by": "本人自述（2022 年選舉公報）",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/01%E5%B8%82%E9%95%B7/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "tpm-2",
      "identity": {
        "name": "沈伯洋",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "safety",
          "title": "8 年內完成全市 150 多所國小通學區改善",
          "detail": "以學校四周 150 公尺為範圍，統一採車道縮減、抬升行穿線、減速丘、行人庇護島等工程規格，先以低成本設施試辦再永久化；上下學時段性速限；第 3–4 年累計完成 50 所，目標通學區零死亡",
          "source": "https://puma.taipei/policies/%E4%BA%A4%E9%80%9A%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "transport",
          "title": "改革公車安全與補貼方式",
          "detail": "重新設計駕駛座告警與螢幕配置；盤點折返點休息空間並納入班表；補貼依據由行駛里程改為服務可靠度與勞動條件，直接補貼駕駛薪資；低運量路段改以需求反應式公車或小型巴士替代",
          "source": "https://puma.taipei/policies/%E4%BA%A4%E9%80%9A%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "transport",
          "title": "興建跨基隆河自行車專用橋連接內湖科技園區",
          "detail": "全長約 340 公尺，預估經費約 9.5 億元，將河濱自行車路網直接接到內湖科技園區",
          "source": "https://cars.tvbs.com.tw/life/341866"
        },
        {
          "topic": "transport",
          "title": "電輔公共自行車尖峰時段前 30 分鐘免費並設置通勤盥洗設施",
          "detail": "適用 08:00–10:00、17:00–19:00；設置提供盥洗、置物與租借的運動驛站；以綠建築與容積獎勵鼓勵大樓增設淋浴設施；河濱自行車道依 5 項指標每季評分公開，維護預算與評分連動",
          "source": "https://puma.taipei/policies/%E4%BA%A4%E9%80%9A%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "transport",
          "title": "通勤月票納入共享電動機車",
          "detail": "持記名月票者每日前 10 分鐘免費，市府出資試辦 3 個月，後續與中央協商常態化；媒合公私有路外停車場，引導共享機車離開路邊格位",
          "source": "https://puma.taipei/policies/%E4%BA%A4%E9%80%9A%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "transport",
          "title": "內湖捷運完工前以錯峰通勤與電動小巴紓解交通",
          "detail": "鼓勵企業錯開上下班時間、推動彈性工時，以電動小巴接駁最後一哩路，並持續推進捷運工程",
          "source": "https://newtalk.tw/news/view/2026-06-18/1041988"
        },
        {
          "topic": "housing",
          "title": "在都更案中規劃只租不賣的青年宅與婚育宅",
          "detail": "未公布戶數與期程",
          "source": "https://udn.com/news/story/124652/9813684"
        },
        {
          "topic": "housing",
          "title": "與中央合作推動老舊無電梯公寓延壽計畫",
          "detail": "對象為全市 8 萬多棟屋齡 30 年以上、無電梯的老公寓；未公布經費",
          "source": "https://www.cna.com.tw/news/aloc/202608110044.aspx"
        },
        {
          "topic": "housing",
          "title": "以快速都更同步增設長照、臨托與社宅空間（研議）",
          "detail": "做法尚未公布",
          "source": "https://www.nownews.com/news/6876744"
        },
        {
          "topic": "welfare",
          "title": "擴大敬老卡適用範圍並推出臨時托老券",
          "detail": "適用場館擴及藝文活動、健身房等，並與兒少點數卡對齊；未公布點數與經費",
          "source": "https://puma.taipei/policies/%E7%A4%BE%E7%A6%8F%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "welfare",
          "title": "利用都更與退場學校用地增加住宿型長照機構",
          "detail": "另引入鐘點移工補足夜間照護人力，並推動在宅醫療；未公布床數與期程",
          "source": "https://puma.taipei/policies/%E7%A4%BE%E7%A6%8F%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "welfare",
          "title": "補助疫苗接種並推行全齡免費心理諮商",
          "detail": "50 歲以上補助帶狀皰疹疫苗一劑；0–6 歲免費接種腸病毒疫苗；15–65 歲免費心理諮商，產後母親另加碼",
          "source": "https://puma.taipei/policies/%E7%A4%BE%E7%A6%8F%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "welfare",
          "title": "補助罕病患者家用不斷電系統並擴大爬梯機補助",
          "detail": "未公布金額",
          "source": "https://puma.taipei/policies/%E7%A4%BE%E7%A6%8F%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "welfare",
          "title": "每區新增 3–5 處運動據點並開辦社區運動小巴",
          "detail": "利用公有閒置空間與畸零地；小巴提供運動指導與營養諮詢；改善河濱照明與急救設備；第 2–3 年完成 10 處社區微型運動場所改造",
          "source": "https://puma.taipei/policies/%E9%81%8B%E5%8B%95%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "education",
          "title": "每週提供固定時數免費臨托並增設夜間托育據點",
          "detail": "對象為滿 6 個月至 6 歲兒童；夜間托育設於夜市、百貨公司等夜間工作場所附近；未公布時數",
          "source": "https://puma.taipei/policies/%E5%AE%B6%E5%BA%AD%E4%B8%80%E7%AB%99%E9%80%9A"
        },
        {
          "topic": "education",
          "title": "逐步在每區設家庭支持服務站並整合育兒單一窗口",
          "detail": "以現有家庭教育中心擴充，服務擴及 0–18 歲子女家庭；個案管理師訪視轉介；產後 12 個月內家長在中央 3 次諮商外再加碼 3 次；未滿 2 歲兒童家庭到宅育兒指導擴充至 6 次",
          "source": "https://puma.taipei/policies/%E5%AE%B6%E5%BA%AD%E4%B8%80%E7%AB%99%E9%80%9A"
        },
        {
          "topic": "education",
          "title": "發給 0–18 歲兒少每月 600 點的藝文運動點數",
          "detail": "可用於看展、劇場、讀物、運動課程與親子課程；0、2、5 歲發給閱讀禮袋；經費與上路期程待制度設計確認",
          "source": "https://puma.taipei/policies/%E8%A6%AA%E5%AD%90%E5%90%8C%E8%A1%8C%E5%8D%A1"
        },
        {
          "topic": "education",
          "title": "降低國中小班級人數並減輕教師行政負擔",
          "detail": "117 學年度國小每班 24 人、國中 25 人，減生不減師；增加專任輔導教師；試辦國小雙導師與導師行政助理",
          "source": "https://puma.taipei/policies/%E6%95%99%E8%82%B2%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "education",
          "title": "降低幼兒園班級人數並推動公幼專任主任",
          "detail": "117 學年度幼幼班每班 10 人、幼兒園每班 24 人；重新檢視特教助理員配置、增加特教人力",
          "source": "https://puma.taipei/policies/%E6%95%99%E8%82%B2%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "education",
          "title": "營養午餐建立依物價調整的彈性餐費機制",
          "detail": "支持營養午餐專法；促進在地小農供應校園；全校決定加價時由市府補足弱勢學生價差；未公布金額",
          "source": "https://puma.taipei/policies/%E7%87%9F%E9%A4%8A%E5%8D%88%E9%A4%90"
        },
        {
          "topic": "education",
          "title": "補助中小學採購教育版 AI 工具",
          "detail": "以校管帳號、限定課堂時段與教師在場建立保護機制",
          "source": "https://puma.taipei/policies/%E6%95%99%E8%82%B2%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "safety",
          "title": "校園反毒採查緝、教育、治療分層策略",
          "detail": "查緝校園周邊販售熱點與電子煙載具，升級生活技能教育，導入篩檢與轉介治療",
          "source": "https://puma.taipei/policies/%E6%95%99%E8%82%B2%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "safety",
          "title": "成立跨局處兒少安全治理中心",
          "detail": "整合教育、社政與警政數據，回溯重大事故並預防高風險個案",
          "source": "https://puma.taipei/policies/%E7%A4%BE%E7%A6%8F%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "safety",
          "title": "推動公共空間女性安全審計",
          "detail": "由下而上檢視公共空間；另設單身女性身心支持服務專線",
          "source": "https://puma.taipei/policies/%E7%A4%BE%E7%A6%8F%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "economy",
          "title": "為 18–22 歲青年設立每月 1,500 元的市府提撥專戶",
          "detail": "需父或母設籍本市；弱勢青年每月 3,000 元；須修完財商課程；四年累積 7.2 萬元；每年預算約 18–20 億元，約 10 萬人受惠",
          "source": "https://www.nownews.com/news/6866832"
        },
        {
          "topic": "economy",
          "title": "補助青年 AI 工具使用額度",
          "detail": "第一期 18–25 歲大學及碩士生每月 300 元，課程或專題可另申請 500 元至 1 萬元；第二期擴大至 45 歲以下市民；兩期合計 9 億元",
          "source": "https://www.nownews.com/news/6866832"
        },
        {
          "topic": "economy",
          "title": "8 年投入 20 億元支持青年海外實踐與創業",
          "detail": "銜接中央青年海外計畫，提供諮詢、培訓、場地及創業基金，並支持市政實習與研究",
          "source": "https://www.nownews.com/news/6866832"
        },
        {
          "topic": "economy",
          "title": "市府擔任新創首位客戶並協助中高齡轉職",
          "detail": "市府帶頭與新創合作；補助 AI 課程；45 歲以上市民創業或轉職陪跑計畫",
          "source": "https://udn.com/news/story/124652/9683613"
        },
        {
          "topic": "economy",
          "title": "規劃四條主題文化步道與三處登山服務中心",
          "detail": "登山服務中心設於北、東、南三處山區，提供裝備租借、置物盥洗與四語導覽；增開捷運站到登山口接駁；未公布經費與期程",
          "source": "https://puma.taipei/policies/%E5%8F%B0%E5%8C%97%E6%96%87%E5%8C%96%E5%BE%91%C3%97%E5%B1%B1%E6%9E%97%E5%BE%91"
        },
        {
          "topic": "economy",
          "title": "評估興建國際賽事標準足球場與大型旗艦運動中心",
          "detail": "第 1 年啟動可行性評估、第 2–3 年完成評估",
          "source": "https://puma.taipei/policies/%E9%81%8B%E5%8B%95%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "environment",
          "title": "制定都市林自治條例並設 10 億元維運基金",
          "detail": "基金年營運 5 億元；成立副首長層級委員會統籌；培育樹醫生等綠領人才；長期目標樹木覆蓋率 20%、綠覆率 30%、每位市民 300 公尺內可達有綠蔭的公園",
          "source": "https://puma.taipei/policies/%E9%83%BD%E5%B8%82%E5%BE%AE%E6%A3%AE%E6%9E%97"
        },
        {
          "topic": "environment",
          "title": "利用閒置土地闢建 200 座口袋公園並公開路樹管理資訊",
          "detail": "現有路樹分改善、更新、移除三級，三年處理；公開風險等級與修剪紀錄；移除樹木前建立至少五方溝通機制；設廢木料銀行再利用修剪木料",
          "source": "https://puma.taipei/policies/%E9%83%BD%E5%B8%82%E5%BE%AE%E6%A3%AE%E6%9E%97"
        },
        {
          "topic": "environment",
          "title": "整合淡水河與基隆河清淤及親水設施",
          "detail": "未公布經費與期程",
          "source": "https://www.cna.com.tw/news/aloc/202608110044.aspx"
        },
        {
          "topic": "governance",
          "title": "擴大公務員彈性上下班並以 AI 減輕行政工作",
          "detail": "總工時不變；員工協助方案改為點數自選；提高基層健檢補助；成立 AI 支援團隊進駐各單位；分三階段約 28 個月推動",
          "source": "https://puma.taipei/policies/%E5%85%AC%E5%8B%99%E5%93%A1%E6%94%BF%E7%AD%96"
        },
        {
          "topic": "governance",
          "title": "設立行政法人市政研究院",
          "detail": "網羅 70–80 位博士級人才，支援都市規劃、交通、AI、長照與兒少安全等長期規劃",
          "source": "https://www.bnext.com.tw/article/92509/taipei-mayor-2026-shen-chiang-tech-policy"
        },
        {
          "topic": "governance",
          "title": "設置永續、設計及夜間經濟專責主管職",
          "detail": "夜間經濟專責職位負責協調目前分散在多個局處的夜間事務",
          "source": "https://udn.com/news/story/124652/9683613"
        },
        {
          "topic": "governance",
          "title": "擴大國際城市合作網絡並試辦公務員海外互換交流（構想）",
          "detail": "合作議題包括可負擔住宅、都市降溫、交通安全與人才培育；基層公務員半年互換交流尚為構想",
          "source": "https://puma.taipei/policies/%E5%9F%8E%E5%B8%82%E5%A4%96%E4%BA%A4"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "具律師資格，取得犯罪學博士後在國立大學犯罪學研究所任教，曾任副教授及所長。",
          "source": "https://zh.wikipedia.org/zh-tw/%E6%B2%88%E4%BC%AF%E6%B4%8B"
        },
        {
          "topic": "governance",
          "text": "2018–2020 年擔任中央行政機關所屬委員會委員；曾任人權團體副會長，並創辦研究資訊操弄的民間研究機構。",
          "source": "https://zh.wikipedia.org/zh-tw/%E6%B2%88%E4%BC%AF%E6%B4%8B"
        },
        {
          "topic": "safety",
          "text": "擔任中央民意代表期間提出兩岸人民關係條例修正案，將接觸機密的民意代表納入赴陸管制及通報對象；遭表決退回程序委員會，未付委審查。",
          "source": "https://newtalk.tw/news/view/2024-05-03/918389"
        },
        {
          "topic": "safety",
          "text": "擔任中央民意代表期間提出國家安全法修正案，涉及核心技術與營業秘密保護及規範境外代理人。",
          "source": "https://zh.wikipedia.org/zh-tw/%E6%B2%88%E4%BC%AF%E6%B4%8B"
        }
      ],
      "past": [
        {
          "role": "中央民意代表（政黨比例代表）",
          "period": "2024–2026",
          "elected": true,
          "result": "",
          "note": "以政黨比例代表名單當選，沒有個人選舉公報政見；未查得本人公開宣示且可追蹤的任期目標，因此不列項目。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "tpm-3",
      "identity": {
        "name": "郭璽",
        "party": "台灣麻將最大黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "淡水河沿岸改用升降式防洪設施，減少實體堤防阻隔、重新開放水岸與風廊",
          "detail": "結合分段控制、即時水情監測與 AI 預警系統；未公布期程與經費",
          "source": "https://www.nownews.com/news/6881026"
        },
        {
          "topic": "welfare",
          "title": "將麻將定位為銀髮族正當休閒與智能運動，以減輕長照負擔",
          "detail": "登記參選時報導列出的主張；未公布具體做法、期程與經費",
          "source": "https://newtalk.tw/news/view/2026-08-31/1056852"
        }
      ],
      "record": [
        {
          "topic": "safety",
          "text": "曾服役海軍，任內從事武器系統獲得與軍事採購業務；退役後曾任證券公司總經理。",
          "source": "https://zh.wikipedia.org/zh-tw/%E9%83%AD%E7%92%BD_(%E6%94%BF%E6%B2%BB%E4%BA%BA%E7%89%A9)"
        },
        {
          "topic": "welfare",
          "text": "2023 年領銜提出公民投票案，主張 65 歲以上民眾在合法場所 1,000 元以內的小額娛樂牌戲輸贏不以賭博罪處罰；同年 10 月遭駁回。",
          "source": "https://zh.wikipedia.org/zh-tw/%E5%8F%B0%E7%81%A3%E9%BA%BB%E5%B0%87%E6%9C%80%E5%A4%A7%E9%BB%A8"
        },
        {
          "topic": "safety",
          "text": "曾受聘為國防顧問，協助推動國防自製計畫。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5425063"
        },
        {
          "topic": "governance",
          "text": "1993 年一樁命案中被列為重要關係人，檢方以殺人罪偵查多年，2020 年以罪證不足處分不起訴。",
          "source": "https://newtalk.tw/news/view/2026-08-31/1056852"
        },
        {
          "topic": "governance",
          "text": "因在通訊軟體群組辱罵一名退役軍官，被判拘役 50 日、得易科罰金，2024 年判決確定。",
          "source": "https://newtalk.tw/news/view/2026-08-31/1056852"
        },
        {
          "topic": "governance",
          "text": "2026 年 6 月因在網路直播中僅憑傳聞指控他人有不正當關係並加以辱罵，一審依誹謗罪判處有期徒刑 4 個月、得易科罰金（可上訴，尚未確定）。",
          "source": "https://newtalk.tw/news/view/2026-08-31/1056852"
        },
        {
          "topic": "governance",
          "text": "同一直播中辱罵另一人的部分，另遭檢方提起公訴（尚未判決）。",
          "source": "https://newtalk.tw/news/view/2026-08-31/1056852"
        }
      ],
      "past": [
        {
          "role": "參選中央民意代表",
          "period": "2024",
          "elected": false,
          "result": "得票 3.24%，未當選",
          "note": "2024 年選舉公報原始連結失效，政見未收錄。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "tpm-4",
      "identity": {
        "name": "蕭文乾",
        "party": "臺灣SoR無法黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "education",
          "title": "推動將閱讀科學（SoR）教學法寫入英文課綱",
          "detail": "為其創辦政黨的唯一訴求；未查得針對市長選舉另提的政見",
          "source": "https://www.miparty.org/news.aspx?id=411"
        },
        {
          "topic": "education",
          "title": "推廣雙語教育，讓孩子不必在國內外輾轉求學也能將外語學成母語",
          "detail": "報導所述參選目的；未公布具體做法、期程與經費",
          "source": "https://ctinews.com/news/items/q9WPPppBWm"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "2020 年創辦推動英語教育改革的政黨並擔任主席，開設推廣閱讀科學教學法的系列講座。",
          "source": "https://www.miparty.org/"
        },
        {
          "topic": "education",
          "text": "曾任國立大學兼任英文講師與偏鄉國小教師，翻譯多部英文文學作品並編纂雙語字典（本人說法）。",
          "source": "https://zh.wikipedia.org/zh-tw/%E8%95%AD%E6%96%87%E4%B9%BE"
        },
        {
          "topic": "governance",
          "text": "曾擔任國家元首的隨行口譯（本人說法，來自其所屬學會介紹）。",
          "source": "https://ctinews.com/news/items/q9WPPppBWm"
        }
      ],
      "past": [
        {
          "role": "參選中央民意代表（政黨比例代表名單）",
          "period": "2024",
          "elected": false,
          "result": "所屬政黨得票 0.33%，未當選",
          "note": "列政黨比例代表名單第 2 名。",
          "promises": [
            {
              "topic": "education",
              "title": "英語教學採用閱讀科學（SoR）方法",
              "status": "not_applicable",
              "note": "",
              "source": "https://zh.wikipedia.org/zh-tw/%E8%95%AD%E6%96%87%E4%B9%BE"
            },
            {
              "topic": "education",
              "title": "課綱加入音素覺識教學",
              "status": "not_applicable",
              "note": "",
              "source": "https://zh.wikipedia.org/zh-tw/%E8%95%AD%E6%96%87%E4%B9%BE"
            },
            {
              "topic": "education",
              "title": "立法制定雙語注音符號表",
              "status": "not_applicable",
              "note": "",
              "source": "https://zh.wikipedia.org/zh-tw/%E8%95%AD%E6%96%87%E4%B9%BE"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "tpm-5",
      "identity": {
        "name": "唐新民",
        "party": "三勢團結促進聯盟",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "education",
          "text": "具土木工程學士及電機資訊博士學歷（本人說法，選舉公報）。",
          "source": "https://www.setn.com/news/1901967"
        }
      ],
      "past": [
        {
          "role": "參選直轄市首長",
          "period": "2022",
          "elected": false,
          "result": "得票 0.02%，未當選",
          "note": "",
          "promises": [
            {
              "topic": "environment",
              "title": "開發大屯火山岩漿發電，取代核電與燃煤",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/01%E5%B8%82%E9%95%B7/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf"
            },
            {
              "topic": "environment",
              "title": "建置綠電智慧電網",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/01%E5%B8%82%E9%95%B7/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf"
            },
            {
              "topic": "transport",
              "title": "興建環北都會區真空超導高速捷運系統",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/01%E5%B8%82%E9%95%B7/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf"
            },
            {
              "topic": "transport",
              "title": "興建金門與台灣間的海底真空超導高速隧道",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/01%E5%B8%82%E9%95%B7/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf"
            },
            {
              "topic": "economy",
              "title": "設立科技園區",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/01%E5%B8%82%E9%95%B7/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf"
            },
            {
              "topic": "housing",
              "title": "推動多核心都市更新",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/01%E5%B8%82%E9%95%B7/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "tpm-6",
      "identity": {
        "name": "林志成",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "education",
          "text": "曾為健美國家代表選手、獲健美比賽冠軍頭銜；具體育大學教練研究所碩士學歷。",
          "source": "https://udn.com/vote2026/local_chiefs"
        }
      ],
      "past": []
    }
  ]
});

/*
 * 2026 基隆市長選舉：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依基隆市選舉委員會「[115年縣市長選舉]候選人登記情形一覽表」（115/09/04 製表，3 人，應選 1 人）：
 *   https://www.cec.gov.tw/api/file/132e41e0-578c-49e6-bd0e-b2c41b388241.pdf
 *   10/16 審定名單在整理時尚未於中選會／基隆市選委會網站公告，故使用 9/4 登記名單；若審定名單有異動請更新。
 * 資料來自候選人公開資料及新聞報導，每則都附出處（source）。出處網址常會透露候選人身分，網站只在「開票揭曉」之後才顯示。
 * 號次將於 2026-10-23 抽籤，屆時請補上 identity.number。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 無黨籍參選人查無任何公開政見或經歷報導，政見與經歷欄為空。
 * 2022 年市長選舉公報中現任者的政見欄未刊登文字，過去政見依新聞報導整理。
 */
window.ELECTION_DATA.races.push({
  "id": "keelung-mayor",
  "region": "基隆市",
  "office": "市長",
  "note": "政見整理自候選人公開資料與新聞報導（截至 2026-10-16），並非完整政見。各候選人公布的細節多寡不同，這裡照實呈現，沒有替任何人補充。",
  "candidates": [
    {
      "id": "klm-1",
      "identity": {
        "name": "謝國樑",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "三節敬老禮金由每節 3,000 元提高至 6,500 元",
          "detail": "自明年起實施，對象為設籍滿 3 年、65 歲以上長者，約 8.7 萬人；市府稱在預算法與公共債務法債限內辦理，未說明具體財源",
          "source": "https://udn.com/news/story/124652/9402078"
        },
        {
          "topic": "economy",
          "title": "在捷運站周邊科技園區優先引進 AI 資料中心",
          "detail": "園區約 30 公頃、規劃約 17 街廓 25 棟建築、總樓地板約 165 萬平方公尺；以供電無虞為前提，電力由市府與電力公司協調；目前為規劃階段",
          "source": "https://tw.news.yahoo.com/%E5%9F%BA%E6%8D%B7%E4%BA%94%E5%A0%B5%E7%AB%9930%E5%85%AC%E9%A0%83%E9%96%8B%E7%99%BC-%E8%AC%9D%E5%9C%8B%E6%A8%91%E7%9B%BCai%E8%B3%87%E6%96%99%E4%B8%AD%E5%BF%83%E9%80%B2%E9%A7%90-070614389.html"
        },
        {
          "topic": "transport",
          "title": "推動捷運聯合開發",
          "detail": "未提出經費與期程",
          "source": "https://udn.com/news/story/124652/9645915"
        },
        {
          "topic": "economy",
          "title": "5 年內完成三座購物中心",
          "detail": "東岸商場以 ROT 方式委託民間經營；碧砂漁港與民間合作建遊艇碼頭、約 200 間客房飯店及約 3,000 坪商場；暖暖區另有國營港務公司土地招商案",
          "source": "https://city.gvm.com.tw/article/132998"
        },
        {
          "topic": "transport",
          "title": "保留臺鐵與捷運並行，捷運另由麥金路進入市區",
          "detail": "主張不拆除臺鐵改建捷運，以免約 8 年施工期影響交通；捷運路線可服務安樂區人口",
          "source": "https://city.gvm.com.tw/article/132998"
        },
        {
          "topic": "transport",
          "title": "青年電動機車補助方案明年度續辦",
          "detail": "今年度因預算刪減暫停受理；將另尋財源，未說明數量與經費",
          "source": "https://newtalk.tw/news/view/2026-05-07/1033701"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "宣布當年中秋節對設籍滿 3 年、65 歲以上長者（原住民 55 歲以上）發放敬老禮金 6,500 元，約 8.7 萬人。",
          "source": "https://udn.com/news/story/124652/9402078"
        },
        {
          "topic": "education",
          "text": "在七個行政區設置室內兒童遊樂場（本人說法）。",
          "source": "https://udn.com/news/story/124652/9806329"
        },
        {
          "topic": "transport",
          "text": "推動廟口、忠一路、基隆塔及田寮河周邊等商圈騎樓整平，稱整平範圍超過過去 20 年總和（本人說法）。",
          "source": "https://city.gvm.com.tw/article/132998"
        },
        {
          "topic": "safety",
          "text": "2025 年全般交通事故率為每 10 萬人 1,132 人、機車事故每 10 萬人死傷 889 人，報導稱為本島最低（市府整體數據，非個人）。",
          "source": "https://city.gvm.com.tw/article/132998"
        },
        {
          "topic": "transport",
          "text": "推出雙層觀光巴士（本人說法：一票難求）。",
          "source": "https://udn.com/news/story/124652/9645915"
        },
        {
          "topic": "transport",
          "text": "上任後實施青年電動機車補助方案，申請條件多次修改；2026 年度因預算刪減暫停受理。",
          "source": "https://newtalk.tw/news/view/2026-05-07/1033701"
        },
        {
          "topic": "economy",
          "text": "宣布捷運站周邊約 30 公頃土地辦理都市計畫變更與市地重劃，規劃智慧科技園區。",
          "source": "https://tw.news.yahoo.com/%E5%9F%BA%E6%8D%B7%E4%BA%94%E5%A0%B5%E7%AB%9930%E5%85%AC%E9%A0%83%E9%96%8B%E7%99%BC-%E8%AC%9D%E5%9C%8B%E6%A8%91%E7%9B%BCai%E8%B3%87%E6%96%99%E4%B8%AD%E5%BF%83%E9%80%B2%E9%A7%90-070614389.html"
        },
        {
          "topic": "economy",
          "text": "2026 年 6 月舉辦 AI 產業論壇，表示正規劃 AI 產業發展藍圖並評估引進 AI 運算中心。",
          "source": "https://www.ettoday.net/news/20260610/3181179.htm"
        },
        {
          "topic": "governance",
          "text": "曾任三屆中央民意代表；曾任民間企業董事長。",
          "source": "https://eebulletin.cec.gov.tw/111/21%E5%9F%BA%E9%9A%86%E5%B8%82/01%E5%B8%82%E9%95%B7/%E5%9F%BA%E9%9A%86%E5%B8%82%E9%95%B7%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1.pdf"
        }
      ],
      "past": [
        {
          "role": "地方政府首長",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "2022 年選舉公報中本人政見欄未刊登文字，以下依新聞報導整理",
          "promises": [
            {
              "topic": "transport",
              "title": "為就業青年免費提供電動機車（4 年約 5 萬輛，估計約 20 億元）",
              "status": "partial",
              "note": "上任後改為附條件的青年電動機車補助方案，條件多次修改；2026 年度因預算刪減暫停受理",
              "source": "https://newtalk.tw/news/view/2026-05-07/1033701"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "klm-2",
      "identity": {
        "name": "魏造文",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": []
    },
    {
      "id": "klm-3",
      "identity": {
        "name": "童子瑋",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "重陽敬老金加倍",
          "detail": "65–99 歲（原住民 55–99 歲）由 1,000 元提高為 2,000 元；100 歲以上由 6,000 元提高為 12,000 元；當選後次年起實施",
          "source": "https://newtalk.tw/news/view/2026-01-24/1016616"
        },
        {
          "topic": "welfare",
          "title": "長者三節慰問金加倍，每年最高可領 2 萬元",
          "detail": "領取國民年金的長者也納入，不受設籍日限制；財源視財政收支劃分法修正與刪減市府預算項目而定",
          "source": "https://www.ettoday.net/news/20260817/3220833.htm"
        },
        {
          "topic": "welfare",
          "title": "身心障礙者三節慰問金由每節 1,500 元提高至 3,000 元",
          "detail": "每年由 4,500 元提高至 9,000 元，約 2.2 萬人",
          "source": "https://udn.com/news/story/124652/9552569"
        },
        {
          "topic": "education",
          "title": "新生兒補助 16 萬元起",
          "detail": "",
          "source": "https://udn.com/news/story/124652/9436885"
        },
        {
          "topic": "education",
          "title": "每月發放 1,000 元育兒消費券",
          "detail": "",
          "source": "https://udn.com/news/story/124652/9436885"
        },
        {
          "topic": "education",
          "title": "國小、國中、高中入學各發 1 萬元入學禮金",
          "detail": "",
          "source": "https://www.ettoday.net/news/20260817/3220833.htm"
        },
        {
          "topic": "education",
          "title": "每個國中學區設置一處公共托育",
          "detail": "",
          "source": "https://udn.com/news/story/124652/9436885"
        },
        {
          "topic": "welfare",
          "title": "免費接種輪狀病毒疫苗",
          "detail": "",
          "source": "https://udn.com/news/story/124652/9436885"
        },
        {
          "topic": "economy",
          "title": "設置國家級職訓基地",
          "detail": "地點在和平島；課程聚焦智慧製造、綠能儲能、冷鏈物流、海洋觀光、文創",
          "source": "https://udn.com/news/story/124652/9485312"
        },
        {
          "topic": "economy",
          "title": "以閒置國小校地與工會合辦勞工大學",
          "detail": "開設水電、餐飲、美容、行銷設計等實務課程",
          "source": "https://udn.com/news/story/124652/9485312"
        },
        {
          "topic": "economy",
          "title": "加碼初次尋職津貼與穩定就業獎勵金",
          "detail": "初次尋職津貼與中央合計最高 3.6 萬元；穩定就業獎勵金由市府等額加碼，合計最高 7.2 萬元",
          "source": "https://udn.com/news/story/124652/9485312"
        },
        {
          "topic": "transport",
          "title": "任內讓捷運實質動工",
          "detail": "未提出經費與期程細節",
          "source": "https://udn.com/news/story/124652/9564643"
        },
        {
          "topic": "transport",
          "title": "將現有鐵路路廊改建為捷運第二階段進入市區",
          "detail": "未提出經費與完工時程",
          "source": "https://city.gvm.com.tw/article/132998"
        },
        {
          "topic": "transport",
          "title": "將 5,000 萬元預算改用於汰換老舊公車、改善駕駛待遇與調整路線班次",
          "detail": "原規劃用於雙層觀光巴士的預算",
          "source": "https://udn.com/news/story/124652/9564643"
        },
        {
          "topic": "transport",
          "title": "推動國道客運增設直達臺北、快速折返的支線並優化既有路線",
          "detail": "業者 9 月向交通部申請；另調查七個行政區通勤需求",
          "source": "https://cna.com.tw/news/aipl/202609010090.aspx"
        },
        {
          "topic": "transport",
          "title": "開辦水上計程車",
          "detail": "串連正濱漁港、八斗子、海洋科技博物館、海洋大學與周邊古蹟",
          "source": "https://cna.com.tw/news/aipl/202609200138.aspx"
        },
        {
          "topic": "welfare",
          "title": "推出醫療巡迴公車並強化急重症、兒科醫療量能",
          "detail": "",
          "source": "https://udn.com/news/story/124652/9564643"
        },
        {
          "topic": "safety",
          "title": "對里長辦理防災訓練，建立社區安全網",
          "detail": "",
          "source": "https://udn.com/news/story/124652/9564643"
        },
        {
          "topic": "welfare",
          "title": "社工依年資分級加給，市長親自主持社會安全網與警社合作會議",
          "detail": "每滿 3 年加給幅度提高",
          "source": "https://udn.com/news/story/124652/9405300"
        },
        {
          "topic": "economy",
          "title": "發展夜間觀光",
          "detail": "輔導青年旅館轉型、發展遊艇夜宿與港區特色住宿，中長期引進精品旅館；研議古蹟夜間開放；鼓勵港邊酒吧與 Live House；漁市深夜導覽常態化",
          "source": "https://newtalk.tw/news/view/2026-05-28/1037971"
        },
        {
          "topic": "environment",
          "title": "提高寵物絕育補助並增設寵物友善公園",
          "detail": "公犬貓補助由 800 元提高至 1,000 元、母犬貓由 1,500 元提高至 2,000 元，總預算由 20 萬元增至 100 萬元；七個行政區各至少一座寵物友善公園",
          "source": "https://www.mirrormedia.mg/story/20260817mkt002"
        },
        {
          "topic": "environment",
          "title": "寵物看診補助每次 200 元、每年最多 3 次，並推動寵物醫院夜間急診",
          "detail": "",
          "source": "https://www.mirrormedia.mg/story/20260817mkt002"
        },
        {
          "topic": "governance",
          "title": "興建新市政大樓，提供一站式智慧服務並帶動舊市區再生",
          "detail": "未提出經費與期程",
          "source": "https://udn.com/news/story/124652/9792536"
        },
        {
          "topic": "housing",
          "title": "在暖暖區增設青年住宅與公共托育",
          "detail": "",
          "source": "https://udn.com/news/story/124652/9792536"
        },
        {
          "topic": "environment",
          "title": "改造信義區田寮河水岸並規劃夜間燈光",
          "detail": "",
          "source": "https://udn.com/news/story/124652/9792536"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "2018 年起擔任兩屆地方民意代表，2022 年起擔任地方議會領導職務。",
          "source": "https://zh.wikipedia.org/wiki/%E7%AB%A5%E5%AD%90%E7%91%8B"
        },
        {
          "topic": "transport",
          "text": "爭取市中心道路及地下道改造（本人說法）。",
          "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/281-klra-01"
        },
        {
          "topic": "economy",
          "text": "推動舊商場再生、地方創生與青年返鄉（本人說法）。",
          "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/281-klra-01"
        },
        {
          "topic": "environment",
          "text": "爭取商圈老舊自來水管線汰換（本人說法）。",
          "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/281-klra-01"
        },
        {
          "topic": "education",
          "text": "爭取一所國小校園改造；爭取增設一處休閒公園（本人說法）。",
          "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/281-klra-01"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "2018–2022 另任一屆；2022 年起兼任議會領導職務",
          "promises": [
            {
              "topic": "transport",
              "title": "推動步行城市，爭取友善行人與空間再造計畫",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/281-klra-01"
            },
            {
              "topic": "economy",
              "title": "推動地方創生、青年返鄉與青年創業輔導",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/281-klra-01"
            },
            {
              "topic": "environment",
              "title": "監督自來水公司汰換老舊管線並活化停車空間",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/281-klra-01"
            },
            {
              "topic": "education",
              "title": "推動校園核心改造計畫",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/281-klra-01"
            },
            {
              "topic": "welfare",
              "title": "爭取在仁愛區設置日照中心",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/281-klra-01"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

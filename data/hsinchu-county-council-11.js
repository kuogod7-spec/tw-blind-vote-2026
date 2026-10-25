/*
 * 2026 新竹縣議員第 11 選區（北埔鄉、峨眉鄉）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市議員選舉候選人登記彙總表」（製表日期 115/09/07，2 人，應選 1 席）
 *   https://web.cec.gov.tw/api/file/9ccb6224-20be-479e-931f-81aa6155f28a.pdf
 * 10/16 審定名單本次未能取得，暫依 9/7 登記彙總表；登記人數與自由時報 2026-09-04 報導各選區人數一致。
 * 選區劃分依中選會 114/09/26 公告（https://web.cec.gov.tw/api/file/59c5c972-d1ca-455d-9c07-ceb452c3e56f.odt），
 * 應選名額依中選會 115/08/20 選舉公告（https://web.cec.gov.tw/api/file/45d8e965-f63a-46d5-b636-7d81e47cf4d1.pdf）。
 * 黨籍依中選會登記之推薦政黨；登記為「無」者寫無黨籍。
 * 號次抽籤原訂 10/23，因薔琵颱風停班延至 2026-10-27 上午 10 時（新竹縣選委會 2026-10-20 新聞稿 https://web.cec.gov.tw/hccec/article/65286 ；聯合報 2026-10-22 https://udn.com/news/story/124652/9832141 ）。
 * 2026-10-25 查證時尚未抽籤，identity.number 維持 null，10/27 後請補上。黨籍已再核對中選會 9/7 登記彙總表，全數相符。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 /
 *         unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 已知缺漏：仍查無 2026 年具體政見者：范文鴻。現任者政見多取自 2026 年議會總質詢與提案，屬議會中的具體要求，非競選政見文件。
 * 2026-10-19 第四輪補查：新增 7 則政見、0 則經歷。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-county-council-11",
  "region": "新竹縣",
  "office": "第 11 選區縣議員",
  "area": "北埔鄉、峨眉鄉",
  "seats": 1,
  "note": "議員政見整理自議會官網、新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有可查的 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現。「過去政見」取自議會官網議員介紹頁的上屆政見，執行情形未逐則查證。",
  "candidates": [
    {
      "id": "hhc11-1",
      "identity": {
        "name": "王辰翔",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "北埔客運站與峨眉隆聖宮設置公共自行車站",
          "detail": "2026 年 5 月書面質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/34%E7%8E%8B%E8%BE%B0%E7%BF%94%E6%9B%B8%E9%9D%A2%E8%B3%AA%E8%A9%A2%E8%B3%87%E6%96%99_114457.pdf"
        },
        {
          "topic": "safety",
          "title": "台三線北埔至三灣路段設噪音科技執法",
          "detail": "並加強取締，檢討速限、警示設施與道路改善；2026 年 5 月書面質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/34%E7%8E%8B%E8%BE%B0%E7%BF%94%E6%9B%B8%E9%9D%A2%E8%B3%AA%E8%A9%A2%E8%B3%87%E6%96%99_114457.pdf"
        },
        {
          "topic": "safety",
          "title": "盤點北埔、峨眉淹水熱區並強化排水與預警",
          "detail": "涉及北埔南坑村、南埔村及峨眉中盛村；2026 年 5 月書面質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/34%E7%8E%8B%E8%BE%B0%E7%BF%94%E6%9B%B8%E9%9D%A2%E8%B3%AA%E8%A9%A2%E8%B3%87%E6%96%99_114457.pdf"
        },
        {
          "topic": "welfare",
          "title": "放寬敬老愛心卡使用項目並提高點數",
          "detail": "2026 年 5 月書面質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/34%E7%8E%8B%E8%BE%B0%E7%BF%94%E6%9B%B8%E9%9D%A2%E8%B3%AA%E8%A9%A2%E8%B3%87%E6%96%99_114457.pdf"
        },
        {
          "topic": "education",
          "title": "教室冷氣開啟標準由 28 度調為 26 度",
          "detail": "或授權教師視課堂狀況彈性開啟；2026 年 7 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5787"
        },
        {
          "topic": "welfare",
          "title": "補助帶狀疱疹疫苗",
          "detail": "優先補助高齡長者、低收入戶及高風險族群；2026 年 7 月議會提案，請縣府研議。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5783"
        },
        {
          "topic": "safety",
          "title": "改善北埔消防分隊廳舍漏水",
          "detail": "2026 年 7 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5813"
        }
      ],
      "record": [],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "以下為議會官網議員介紹頁所列上屆（2022 年）政見，未逐則查證執行情形。",
          "promises": [
            {
              "topic": "welfare",
              "title": "爭取建立遠端智慧健康平台",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=374"
            },
            {
              "topic": "welfare",
              "title": "爭取長者運動設備",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=374"
            },
            {
              "topic": "economy",
              "title": "爭取特色產業電商平台",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=374"
            },
            {
              "topic": "economy",
              "title": "爭取多元職能培訓與銀髮青年就業媒合",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=374"
            },
            {
              "topic": "governance",
              "title": "爭取在地文化維護資源",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=374"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc11-2",
      "identity": {
        "name": "范文鴻",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    }
  ]
});

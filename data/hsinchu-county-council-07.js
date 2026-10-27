/*
 * 2026 新竹縣議員第 7 選區（橫山鄉、尖石鄉）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市議員選舉候選人登記彙總表」（製表日期 115/09/07，1 人，應選 1 席）
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
 * 已知缺漏：無。唯一候選人的政見取自 2026 年議會總質詢與提案，屬議會中的具體要求，非競選政見文件。
 * 2026-10-19 第四輪補查：新增 4 則政見、0 則經歷。
 * 號次：依 10/27 抽籤結果補上（https://www.hsinchu.gov.tw/News_Content.aspx?n=153&s=357801；2026-10-27 註）。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-county-council-07",
  "region": "新竹縣",
  "office": "第 7 選區縣議員",
  "area": "橫山鄉、尖石鄉",
  "seats": 1,
  "note": "本選區僅 1 人登記，同額競選。議員政見整理自議會官網、新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有可查的 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現。「過去政見」取自議會官網議員介紹頁的上屆政見，執行情形未逐則查證。",
  "candidates": [
    {
      "id": "hhc7-1",
      "identity": {
        "name": "張良印",
        "party": "中國國民黨",
        "number": 1
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "編列預算協助橫山聯通管沿線居民接用自來水",
          "detail": "中央 2026 年起不再補助非自來水地區供水改善，要求縣府加強編列預算；2026 年 4 月書面質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/25%E5%BC%B5%E8%89%AF%E5%8D%B0%E6%9B%B8%E9%9D%A2%E8%B3%AA%E8%A9%A2%E8%B3%87%E6%96%99_114301.pdf"
        },
        {
          "topic": "economy",
          "title": "與台鐵合作重新推廣合興車站觀光",
          "detail": "整合台鐵與縣府各局處觀光資源；2026 年 4 月書面質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/25%E5%BC%B5%E8%89%AF%E5%8D%B0%E6%9B%B8%E9%9D%A2%E8%B3%AA%E8%A9%A2%E8%B3%87%E6%96%99_114301.pdf"
        },
        {
          "topic": "economy",
          "title": "專案補助鄉公所整修內灣吊橋",
          "detail": "吊橋因結構老化封閉，要求縣府以專案方式補助；2026 年 4 月書面質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/25%E5%BC%B5%E8%89%AF%E5%8D%B0%E6%9B%B8%E9%9D%A2%E8%B3%AA%E8%A9%A2%E8%B3%87%E6%96%99_114301.pdf"
        },
        {
          "topic": "safety",
          "title": "橫山警察分局易地重建",
          "detail": "現有廳舍老舊狹小；2026 年 4 月書面質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/25%E5%BC%B5%E8%89%AF%E5%8D%B0%E6%9B%B8%E9%9D%A2%E8%B3%AA%E8%A9%A2%E8%B3%87%E6%96%99_114301.pdf"
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
              "topic": "transport",
              "title": "推動內灣聯外道路拓寬新闢工程",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=350"
            },
            {
              "topic": "education",
              "title": "爭取因應少子化的偏鄉教育資源",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=350"
            },
            {
              "topic": "welfare",
              "title": "強化關懷據點與老人共餐服務",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=350"
            },
            {
              "topic": "governance",
              "title": "爭取尖石鄉設置客家多元活動中心",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=350"
            },
            {
              "topic": "economy",
              "title": "活化歷史建築結合內灣商圈帶動觀光",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=350"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

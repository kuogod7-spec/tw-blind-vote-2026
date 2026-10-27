/*
 * 2026 新竹縣議員第 14 選區山地原住民（五峰鄉，以及芎林鄉、竹東鎮、寶山鄉、北埔鄉、峨眉鄉之山地…）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市議員選舉候選人登記彙總表」（製表日期 115/09/07，3 人，應選 1 席）
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
 * 已知缺漏：仍查無 2026 年具體政見者：張雁萍、Laling Yumin。現任者政見多取自 2026 年議會總質詢與提案，屬議會中的具體要求，非競選政見文件。
 * 2026-10-19 第四輪補查：新增 4 則政見、0 則經歷。
 * 號次：10/27 已抽籤，但整理時（2026-10-27）尚未查得本選區的抽籤結果，number 暫為 null。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-county-council-14",
  "region": "新竹縣",
  "office": "第 14 選區山地原住民縣議員",
  "area": "五峰鄉，以及芎林鄉、竹東鎮、寶山鄉、北埔鄉、峨眉鄉之山地原住民",
  "seats": 1,
  "note": "由所列鄉鎮具山地原住民身分的選舉人投票。議員政見整理自議會官網、新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有可查的 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現。「過去政見」取自議會官網議員介紹頁的上屆政見，執行情形未逐則查證。",
  "candidates": [
    {
      "id": "hhc14-1",
      "identity": {
        "name": "張雁萍",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc14-2",
      "identity": {
        "name": "Laling Yumin",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc14-3",
      "identity": {
        "name": "張益生",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "governance",
          "title": "研議制定新竹縣原住民族自治條例",
          "detail": "合理分配土地及人口權益資源，並建立穩定經費保障；2026 年 8 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5868"
        },
        {
          "topic": "welfare",
          "title": "弱勢老人看護補助免先墊付並簡化申請",
          "detail": "2026 年 9 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5942"
        },
        {
          "topic": "safety",
          "title": "編列 2027 年度坑溝野溪整治預算",
          "detail": "2026 年 3 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5430"
        },
        {
          "topic": "transport",
          "title": "改善五峰、尖石山區道路標誌標線",
          "detail": "2026 年 1 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5371"
        }
      ],
      "record": [],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "議會官網上屆選區標示為第十三選區（五峰區）。以下為議會官網所列上屆（2022 年）政見，未逐則查證執行情形。",
          "promises": [
            {
              "topic": "welfare",
              "title": "原住民免費健康檢查年齡由 65 歲降至 55 歲",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=344"
            },
            {
              "topic": "transport",
              "title": "爭取 122 縣道截彎取直",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=344"
            },
            {
              "topic": "education",
              "title": "要求縣府依法增設族語老師",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=344"
            },
            {
              "topic": "housing",
              "title": "擴大原住民住宅修繕與購屋補助戶數",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=344"
            },
            {
              "topic": "governance",
              "title": "議員工程及活動費用上網公告流向",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=344"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

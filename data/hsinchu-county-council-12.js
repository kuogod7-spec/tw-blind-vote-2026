/*
 * 2026 新竹縣議員第 12 選區平地原住民（全縣）：候選人政見與經歷（去識別化整理）
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
 * 已知缺漏：仍查無 2026 年具體政見者：法隆伊佑。現任者政見多取自 2026 年議會總質詢與提案，屬議會中的具體要求，非競選政見文件。
 * 2026-10-19 第四輪補查：新增 6 則政見、0 則經歷。
 * 號次：依 10/27 抽籤結果補上（https://www.hsinchu.gov.tw/News_Content.aspx?n=153&s=357801；2026-10-27 註）。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-county-council-12",
  "region": "新竹縣",
  "office": "第 12 選區平地原住民縣議員",
  "area": "全縣",
  "seats": 1,
  "note": "全縣具平地原住民身分的選舉人投票。議員政見整理自議會官網、新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有可查的 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現。「過去政見」取自議會官網議員介紹頁的上屆政見，執行情形未逐則查證。",
  "candidates": [
    {
      "id": "hhc12-1",
      "identity": {
        "name": "法隆伊佑",
        "party": "無黨籍",
        "number": 1
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc12-2",
      "identity": {
        "name": "林秉君 kaying．kuying．kalang",
        "party": "無黨籍",
        "number": 2
      },
      "platforms": [
        {
          "topic": "governance",
          "title": "原住民建購修繕補助與急難紓困開放線上申辦",
          "detail": "2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/35%E5%8A%89%E5%BB%BA%E6%B0%91%E8%AD%B0%E5%93%A1%E3%80%81%E6%9E%97%E7%A7%89%E5%90%9B%E8%AD%B0%E5%93%A1_114518.pdf"
        },
        {
          "topic": "governance",
          "title": "輔導鄉鎮市公所申辦戶役政電子閘門",
          "detail": "由數位發展主管機關一條龍協助完成申請程序，取代紙本名冊；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/35%E5%8A%89%E5%BB%BA%E6%B0%91%E8%AD%B0%E5%93%A1%E3%80%81%E6%9E%97%E7%A7%89%E5%90%9B%E8%AD%B0%E5%93%A1_114518.pdf"
        },
        {
          "topic": "welfare",
          "title": "縣府自籌補足原住民急難救助經費",
          "detail": "中央計畫刪除後地方配合款無法使用，要求縣府自行編列；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/35%E5%8A%89%E5%BB%BA%E6%B0%91%E8%AD%B0%E5%93%A1%E3%80%81%E6%9E%97%E7%A7%89%E5%90%9B%E8%AD%B0%E5%93%A1_114518.pdf"
        },
        {
          "topic": "welfare",
          "title": "文化健康站長者接送改採特約車隊",
          "detail": "以購車與聘駕駛經費改向運輸業者購買上下課時段服務，並協調關西部落長者接送；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/35%E5%8A%89%E5%BB%BA%E6%B0%91%E8%AD%B0%E5%93%A1%E3%80%81%E6%9E%97%E7%A7%89%E5%90%9B%E8%AD%B0%E5%93%A1_114518.pdf"
        },
        {
          "topic": "education",
          "title": "提高體育選手營養金",
          "detail": "2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/35%E5%8A%89%E5%BB%BA%E6%B0%91%E8%AD%B0%E5%93%A1%E3%80%81%E6%9E%97%E7%A7%89%E5%90%9B%E8%AD%B0%E5%93%A1_114518.pdf"
        },
        {
          "topic": "economy",
          "title": "關西馬武督部落文化彩繪與美化專案輔導",
          "detail": "2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/35%E5%8A%89%E5%BB%BA%E6%B0%91%E8%AD%B0%E5%93%A1%E3%80%81%E6%9E%97%E7%A7%89%E5%90%9B%E8%AD%B0%E5%93%A1_114518.pdf"
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
              "topic": "education",
              "title": "加強族語教學並推動族語教師專職化",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=346"
            },
            {
              "topic": "economy",
              "title": "加強原住民就業媒合與職業訓練，扶植文化創意產業",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=346"
            },
            {
              "topic": "housing",
              "title": "爭取原住民租屋、購屋、修繕與急難救助補助",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=346"
            },
            {
              "topic": "governance",
              "title": "擴大舉辦文化祭儀並推動頭目組織常設化",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=346"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

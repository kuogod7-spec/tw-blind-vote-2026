/*
 * 2026 新竹縣議員第 4 選區（新豐鄉）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市議員選舉候選人登記彙總表」（製表日期 115/09/07，6 人，應選 3 席）
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
 * 已知缺漏：仍查無 2026 年具體政見者：徐勝凌、何昌臨、徐源發、張以聖、林茂青（現任者的議會質詢要求列於 platforms，並註明質詢時間）。
 * 2026-10-19 第四輪補查：新增 4 則政見、0 則經歷。
 * 號次：10/27 已抽籤，但整理時（2026-10-27）尚未查得本選區的抽籤結果，number 暫為 null。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-county-council-04",
  "region": "新竹縣",
  "office": "第 4 選區縣議員",
  "area": "新豐鄉",
  "seats": 3,
  "note": "議員政見整理自議會官網、新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有可查的 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現。「過去政見」取自議會官網議員介紹頁的上屆政見，執行情形未逐則查證。",
  "candidates": [
    {
      "id": "hhc4-1",
      "identity": {
        "name": "徐勝凌",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc4-2",
      "identity": {
        "name": "何昌臨",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc4-3",
      "identity": {
        "name": "徐源發",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc4-4",
      "identity": {
        "name": "張以聖",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc4-5",
      "identity": {
        "name": "吳傳地",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "新豐公共自行車站點延伸到海岸地區，並爭取前 30 分鐘免費",
          "detail": "2026 年 5 月議會總質詢提出：新豐僅 14 站，要求在觀海大道、坡頭漁港、福陽重劃區等處增設，公所財源不足時由縣府協助。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/11吳傳地、何建樺、張珈源議員%20%20%20質詢稿%20%20%201150506_113943.pdf"
        },
        {
          "topic": "transport",
          "title": "協助新豐申請幸福巴士，並要求中央提高客運補助",
          "detail": "2026 年 5 月提出：新豐公車班次少且尚無幸福巴士，要求縣府立即介入協助公所申請，並向公路主管機關反映提高營運成本補助與司機補貼。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5440818"
        },
        {
          "topic": "governance",
          "title": "停工的新庄子非營利幼兒園園舍改作消防分隊、派出所與戶政事務所用地",
          "detail": "2026 年 5 月議會總質詢提出：建議縣府民政、消防、警政單位與公所協商土地交換，避免建物閒置。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/11吳傳地、何建樺、張珈源議員%20%20%20質詢稿%20%20%201150506_113943.pdf"
        },
        {
          "topic": "education",
          "title": "加快松林國小擴建工程",
          "detail": "2026 年 10 月議會質詢提出，要求縣府早日施工。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5606108"
        }
      ],
      "record": [
        {
          "topic": "environment",
          "text": "擔任民意代表期間於總質詢指出全縣性生命紀念園區完成後，鄉鎮市另建納骨塔的必要性降低，要求縣府與公所溝通（2021 年）。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/3729680"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "以下為議會官網議員介紹頁所列上屆（2022 年）政見，未逐則查證執行情形。",
          "promises": [
            {
              "topic": "environment",
              "title": "督促坡頭漁港航道定期清淤與紅樹林周邊環境維護",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=338"
            },
            {
              "topic": "transport",
              "title": "加速台一線替代道路竹北—新豐段新闢工程",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=338"
            },
            {
              "topic": "education",
              "title": "加速松林國小擴建，長期新設學校紓解學童空間不足",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=338"
            },
            {
              "topic": "transport",
              "title": "公園改造時評估設置地下停車場",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=338"
            },
            {
              "topic": "environment",
              "title": "改善新豐火車站周邊髒亂",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=338"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc4-6",
      "identity": {
        "name": "林茂青",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    }
  ]
});

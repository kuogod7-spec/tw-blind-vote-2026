/*
 * 2026 新竹縣議員第 6 選區（新埔鎮）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市議員選舉候選人登記彙總表」（製表日期 115/09/07，3 人，應選 2 席）
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
 * 已知缺漏：仍查無 2026 年具體政見者：黃路加、陳新源。現任者政見多取自 2026 年議會總質詢與提案，屬議會中的具體要求，非競選政見文件。
 * 2026-10-19 第四輪補查：新增 8 則政見、0 則經歷。
 * 號次：10/27 已抽籤，但整理時（2026-10-27）尚未查得本選區的抽籤結果，number 暫為 null。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-county-council-06",
  "region": "新竹縣",
  "office": "第 6 選區縣議員",
  "area": "新埔鎮",
  "seats": 2,
  "note": "議員政見整理自議會官網、新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有可查的 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現。「過去政見」取自議會官網議員介紹頁的上屆政見，執行情形未逐則查證。",
  "candidates": [
    {
      "id": "hhc6-1",
      "identity": {
        "name": "黃路加",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc6-2",
      "identity": {
        "name": "呂宛庭",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "社會救助金開放線上捐款與多元支付",
          "detail": "取代目前僅能匯款的方式；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/23%E5%91%82%E5%AE%9B%E5%BA%AD%E8%AD%B0%E5%93%A1_114243.pdf"
        },
        {
          "topic": "welfare",
          "title": "提高敬老愛心卡點數並擴及長照專車與農會、藥局",
          "detail": "點數由每月 500 點提高到 600 至 1,000 點；長照專車、復康巴士可先以紙本方式核銷；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/23%E5%91%82%E5%AE%9B%E5%BA%AD%E8%AD%B0%E5%93%A1_114243.pdf"
        },
        {
          "topic": "welfare",
          "title": "長照專車建立線上預約平台",
          "detail": "可查詢剩餘額度與可預約時段，改善電話預約不易接通；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/23%E5%91%82%E5%AE%9B%E5%BA%AD%E8%AD%B0%E5%93%A1_114243.pdf"
        },
        {
          "topic": "transport",
          "title": "改善新埔新湖路 117 號 T 字路口",
          "detail": "中央補助若未核定，要求以縣款調整道路配置；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/23%E5%91%82%E5%AE%9B%E5%BA%AD%E8%AD%B0%E5%93%A1_114243.pdf"
        },
        {
          "topic": "transport",
          "title": "加速寶石大橋拓寬",
          "detail": "增設機車道、人行道，路口採偏心式左右轉；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/23%E5%91%82%E5%AE%9B%E5%BA%AD%E8%AD%B0%E5%93%A1_114243.pdf"
        },
        {
          "topic": "economy",
          "title": "新埔市場用地評估多目標使用與 BOT 活化",
          "detail": "福田段 229 地號市場預定地長期閒置，建議以促參或 BOT 方式活化，補足運動與停車空間；2026 年 4 至 5 月定期會總質詢提出，2026 年 5 月並提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5581"
        },
        {
          "topic": "environment",
          "title": "加速新埔寶石里文德路自來水延管",
          "detail": "涉及 104 戶，要求成立專案協調平台處理土地、河川公地與中央補助；2026 年 7 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5740"
        },
        {
          "topic": "transport",
          "title": "督導新埔通學公車完成定位與動態資訊系統",
          "detail": "對象為 5619、5621 路線，上線前應提供即時班次查詢及異常通報窗口；2026 年 9 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5909"
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
              "topic": "environment",
              "title": "爭取興建風雨球場",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=371"
            },
            {
              "topic": "environment",
              "title": "公園景點增設洗手台及廁所",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=371"
            },
            {
              "topic": "environment",
              "title": "爭取自來水普及",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=371"
            },
            {
              "topic": "welfare",
              "title": "閒置校園空間轉型為銀髮日照中心",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=371"
            },
            {
              "topic": "welfare",
              "title": "爭取早期療育服務",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=371"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc6-3",
      "identity": {
        "name": "陳新源",
        "party": "勞動黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    }
  ]
});

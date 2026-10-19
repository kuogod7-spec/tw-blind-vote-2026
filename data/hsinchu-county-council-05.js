/*
 * 2026 新竹縣議員第 5 選區（關西鎮）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市議員選舉候選人登記彙總表」（製表日期 115/09/07，3 人，應選 2 席）
 *   https://web.cec.gov.tw/api/file/9ccb6224-20be-479e-931f-81aa6155f28a.pdf
 * 10/16 審定名單本次未能取得，暫依 9/7 登記彙總表；登記人數與自由時報 2026-09-04 報導各選區人數一致。
 * 選區劃分依中選會 114/09/26 公告（https://web.cec.gov.tw/api/file/59c5c972-d1ca-455d-9c07-ceb452c3e56f.odt），
 * 應選名額依中選會 115/08/20 選舉公告（https://web.cec.gov.tw/api/file/45d8e965-f63a-46d5-b636-7d81e47cf4d1.pdf）。
 * 黨籍依中選會登記之推薦政黨；登記為「無」者寫無黨籍。
 * 號次 10/23 抽籤，屆時請補上 identity.number。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 /
 *         unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 已知缺漏：仍查無 2026 年具體政見者：蔡澄均。現任者政見多取自 2026 年議會總質詢與提案，屬議會中的具體要求，非競選政見文件。
 * 2026-10-19 第四輪補查：新增 15 則政見、0 則經歷。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-county-council-05",
  "region": "新竹縣",
  "office": "第 5 選區縣議員",
  "area": "關西鎮",
  "seats": 2,
  "note": "議員政見整理自議會官網、新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有可查的 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現。「過去政見」取自議會官網議員介紹頁的上屆政見，執行情形未逐則查證。",
  "candidates": [
    {
      "id": "hhc5-1",
      "identity": {
        "name": "羅仕琦",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "推動關西外環道儘早動土",
          "detail": "認為外環道攸關救人、救災與交通便利，要求縣府在本屆任期結束前讓工程有機會動土；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/22%E7%BE%85%E4%BB%95%E7%90%A6%E8%AD%B0%E5%93%A1_114220.pdf"
        },
        {
          "topic": "welfare",
          "title": "提高敬老愛心卡點數並擴大使用範圍",
          "detail": "要求由每月 500 點提高到 800 點，並可在農民市場、藥局及醫院掛號使用；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/22%E7%BE%85%E4%BB%95%E7%90%A6%E8%AD%B0%E5%93%A1_114220.pdf"
        },
        {
          "topic": "transport",
          "title": "要求關西往新竹通學客運準點並建立監督機制",
          "detail": "針對清晨通學班次誤點、停駛，要求交通主管機關建立約束業者的辦法，並提供即時到站查詢；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/22%E7%BE%85%E4%BB%95%E7%90%A6%E8%AD%B0%E5%93%A1_114220.pdf"
        },
        {
          "topic": "welfare",
          "title": "社區關懷據點供餐收費訂定標準",
          "detail": "指關西各據點午餐月費從免費到 1,200 元不等，要求主管機關訂定一致的收費標準；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/22%E7%BE%85%E4%BB%95%E7%90%A6%E8%AD%B0%E5%93%A1_114220.pdf"
        },
        {
          "topic": "economy",
          "title": "爭取經費整修百年東溪書房",
          "detail": "要求文化主管機關比照當地書院修復模式，爭取經費整修東平里百年以上的東溪書房；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/22%E7%BE%85%E4%BB%95%E7%90%A6%E8%AD%B0%E5%93%A1_114220.pdf"
        },
        {
          "topic": "environment",
          "title": "要求對鳳山溪淨水場上游違規鑿井工廠再辦聯合稽查",
          "detail": "工廠未經許可鑿井、泥水排入淨水場進水口上游約 100 公尺處，要求儘速再辦聯合稽查確認停工與改善；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/22%E7%BE%85%E4%BB%95%E7%90%A6%E8%AD%B0%E5%93%A1_114220.pdf"
        },
        {
          "topic": "transport",
          "title": "竹 118 線與台三線交叉路口劃設左轉專用車道",
          "detail": "2026 年 8 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5836"
        },
        {
          "topic": "safety",
          "title": "台三線關西南新里路段設定點測速照相",
          "detail": "位置為台 3 線 61.3 公里處；2026 年 8 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5886"
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
              "title": "在安全與環境最少破壞下興建關西外環道",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=353"
            },
            {
              "topic": "welfare",
              "title": "爭取關西地區急重症醫療機構",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=353"
            },
            {
              "topic": "economy",
              "title": "鼓勵青年返鄉創業",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=353"
            },
            {
              "topic": "education",
              "title": "提高育兒津貼及學齡前教育補助",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=353"
            },
            {
              "topic": "safety",
              "title": "建置監視系統釐清交通事故責任",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=353"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc5-2",
      "identity": {
        "name": "徐瑜新",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "推動關西生命禮儀園區納骨設施新建",
          "detail": "規劃地下 1 層、地上 5 層，約 24,407 個櫃位與 4,784 個牌位；縣府 2026 年度已編 2,017 萬元補助，因鎮代會刪減配合預算延宕，要求縣府協調鎮公所與代表會通過追加預算；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/21%E5%BE%90%E7%91%9C%E6%96%B0%E8%AD%B0%E5%93%A1%E7%B8%A3%E6%94%BF%E7%B8%BD%E8%B3%AA%E8%A9%A2_114141.pdf"
        },
        {
          "topic": "transport",
          "title": "加速關西外環道審議並爭取年底送大會",
          "detail": "經費已由約 30 億元增至 39.8 億元，要求儘速回覆中央專案小組意見、提送內政部，爭取年底送大會；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/21%E5%BE%90%E7%91%9C%E6%96%B0%E8%AD%B0%E5%93%A1%E7%B8%A3%E6%94%BF%E7%B8%BD%E8%B3%AA%E8%A9%A2_114141.pdf"
        },
        {
          "topic": "transport",
          "title": "公路客運駕駛比照市區公車每月補貼 1 萬元",
          "detail": "為留住新埔、關西路線駕駛，建議以停車管理基金支應，並請縣府向中央爭取提高公路客運每公里補貼；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/21%E5%BE%90%E7%91%9C%E6%96%B0%E8%AD%B0%E5%93%A1%E7%B8%A3%E6%94%BF%E7%B8%BD%E8%B3%AA%E8%A9%A2_114141.pdf"
        },
        {
          "topic": "transport",
          "title": "爭取中壢往關西客運晚間增班",
          "detail": "現行中壢直達關西末班為 19:30，要求向桃園市交通主管機關爭取增加晚間班次；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/21%E5%BE%90%E7%91%9C%E6%96%B0%E8%AD%B0%E5%93%A1%E7%B8%A3%E6%94%BF%E7%B8%BD%E8%B3%AA%E8%A9%A2_114141.pdf"
        },
        {
          "topic": "safety",
          "title": "升級警方影像分析系統為即時攔截並全面自動巡檢",
          "detail": "將特定車牌預先輸入系統、進入縣境即通報；監視器自動巡檢目前僅約 14%，整體估需 6,000 多萬元，要求爭取預算；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/21%E5%BE%90%E7%91%9C%E6%96%B0%E8%AD%B0%E5%93%A1%E7%B8%A3%E6%94%BF%E7%B8%BD%E8%B3%AA%E8%A9%A2_114141.pdf"
        },
        {
          "topic": "welfare",
          "title": "敬老卡點數可全額扣抵長照就醫交通車資",
          "detail": "長照就醫接送車資已調高為計程車資 1.2 倍，要求點數可全數折抵，不限每趟折抵上限；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/21%E5%BE%90%E7%91%9C%E6%96%B0%E8%AD%B0%E5%93%A1%E7%B8%A3%E6%94%BF%E7%B8%BD%E8%B3%AA%E8%A9%A2_114141.pdf"
        },
        {
          "topic": "governance",
          "title": "以較高薪點約聘工程人員補足縣府缺額",
          "detail": "建照、使照審查因工程人員不足延宕，建議產業發展、工務、農業、交通等單位以較高薪點約聘；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/21%E5%BE%90%E7%91%9C%E6%96%B0%E8%AD%B0%E5%93%A1%E7%B8%A3%E6%94%BF%E7%B8%BD%E8%B3%AA%E8%A9%A2_114141.pdf"
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
              "topic": "economy",
              "title": "行銷關西農產品，解決銷售問題",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=352"
            },
            {
              "topic": "education",
              "title": "推動各校特色教學並提升英文學習",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=352"
            },
            {
              "topic": "economy",
              "title": "串連旅遊景點發展社區輕旅行",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=352"
            },
            {
              "topic": "welfare",
              "title": "推動社區關懷據點共餐服務",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=352"
            },
            {
              "topic": "environment",
              "title": "推動社區農村再生計畫",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=352"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc5-3",
      "identity": {
        "name": "蔡澄均",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    }
  ]
});

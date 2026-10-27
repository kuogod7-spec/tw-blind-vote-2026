/*
 * 2026 新竹縣議員第 9 選區（竹東鎮、五峰鄉）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市議員選舉候選人登記彙總表」（製表日期 115/09/07，9 人，應選 5 席）
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
 * 已知缺漏：仍查無 2026 年具體政見者：羅俊傑、鍾心渝。現任者政見多取自 2026 年議會總質詢與提案，屬議會中的具體要求，非競選政見文件。
 * 2026-10-19 第四輪補查：新增 36 則政見、0 則經歷。
 * 號次：10/27 已抽籤，但整理時（2026-10-27）尚未查得本選區的抽籤結果，number 暫為 null。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-county-council-09",
  "region": "新竹縣",
  "office": "第 9 選區縣議員",
  "area": "竹東鎮、五峰鄉",
  "seats": 5,
  "note": "議員政見整理自議會官網、新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有可查的 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現。「過去政見」取自議會官網議員介紹頁的上屆政見，執行情形未逐則查證。",
  "candidates": [
    {
      "id": "hhc9-1",
      "identity": {
        "name": "羅俊傑",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc9-2",
      "identity": {
        "name": "黃豪杰",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "竹東員山路閒置道路用地活化為鄰里公園",
          "detail": "位置在員山里員山路 230 號旁；2026 年 5 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5548"
        },
        {
          "topic": "welfare",
          "title": "補助 65 歲以上長者健保自付保費",
          "detail": "2026 年 7 月議會提案，請縣府研議。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5766"
        },
        {
          "topic": "safety",
          "title": "督導鄰近住宅的私有山坡地落實水土保持",
          "detail": "要求設置截水溝、排水溝，降低崩塌與淹水風險；2026 年 7 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5776"
        },
        {
          "topic": "transport",
          "title": "竹東中興路一段北二高橋面接縫蓋板防滑改善",
          "detail": "2026 年 8 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5823"
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
              "title": "爭取輕軌路網設竹東站",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=348"
            },
            {
              "topic": "environment",
              "title": "推動中興河道水岸生活空間再造二期計畫",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=348"
            },
            {
              "topic": "transport",
              "title": "評估外五里（頭重、二重、三重等地區）新外環道路",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=348"
            },
            {
              "topic": "education",
              "title": "爭取外五里非營利幼兒園結合親子圖書館",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=348"
            },
            {
              "topic": "welfare",
              "title": "爭取竹東外五里新建衛生所",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=348"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc9-3",
      "identity": {
        "name": "上官秋燕",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "education",
          "title": "在竹東興建風雨籃球場",
          "detail": "2026 年 1 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5395"
        },
        {
          "topic": "environment",
          "title": "推動寵物疫苗與基礎除蟲補助計畫",
          "detail": "2026 年 6 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5679"
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
              "title": "推動失智長者配戴定位手環",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=330"
            },
            {
              "topic": "welfare",
              "title": "生育補助第 1 胎 2 萬元、第 2 胎 3 萬元、第 3 胎 5 萬元",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=330"
            },
            {
              "topic": "safety",
              "title": "設立婦女保護安置之家",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=330"
            },
            {
              "topic": "welfare",
              "title": "全縣民平安保險 35 萬元持續辦理",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=330"
            },
            {
              "topic": "education",
              "title": "爭取營養午餐補助",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=330"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc9-4",
      "identity": {
        "name": "林昭錡",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "寶山水庫水源保護區地主每公頃補償 6 萬元",
          "detail": "範圍約 264 公頃，建議由科學園區回饋金支應；若無法補償，要求檢討解除保護區編定；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/32%E6%9E%97%E6%98%AD%E9%8C%A1%E8%AD%B0%E5%93%A1_114425.pdf"
        },
        {
          "topic": "environment",
          "title": "爭取竹東頭重、二重、三重污水下水道",
          "detail": "已列縣內優先爭取中央補助的第一名，要求加速推動；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/32%E6%9E%97%E6%98%AD%E9%8C%A1%E8%AD%B0%E5%93%A1_114425.pdf"
        },
        {
          "topic": "transport",
          "title": "新竹縣市輕軌藍線設竹中站",
          "detail": "2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/32%E6%9E%97%E6%98%AD%E9%8C%A1%E8%AD%B0%E5%93%A1_114425.pdf"
        },
        {
          "topic": "transport",
          "title": "農路工程預算加倍至 1 億 2,000 萬元",
          "detail": "目前全縣約 6,000 萬元；並要求拓寬工研院後方頭重路；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/32%E6%9E%97%E6%98%AD%E9%8C%A1%E8%AD%B0%E5%93%A1_114425.pdf"
        },
        {
          "topic": "education",
          "title": "外五里設立公立幼兒園",
          "detail": "建議將周邊保護區土地變更徵收後由縣府設公立幼兒園；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/32%E6%9E%97%E6%98%AD%E9%8C%A1%E8%AD%B0%E5%93%A1_114425.pdf"
        },
        {
          "topic": "transport",
          "title": "編列預算評估國道 3 號二重交流道銜接台 68 線",
          "detail": "利用既有預留斷橋銜接往竹東、軟橋及竹北、南寮方向，可行性評估納入 2027 年度預算；2026 年 9 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5898"
        },
        {
          "topic": "welfare",
          "title": "敬老愛心卡計程車單趟補助提高至 300 點",
          "detail": "目前單趟上限 100 點；2026 年 6 月議會提案，7 月另提案將復康巴士納入適用範圍。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5637"
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
              "title": "督促縣府增設公立、非營利及準公共幼兒園",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=335"
            },
            {
              "topic": "environment",
              "title": "督促儘速興建垃圾焚化爐",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=335"
            },
            {
              "topic": "environment",
              "title": "爭取竹東各里污水下水道接管",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=335"
            },
            {
              "topic": "transport",
              "title": "台 68 快速道路延伸至軟橋",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=335"
            },
            {
              "topic": "education",
              "title": "二重國中擴展為完全中學並新建運動場與體育館",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=335"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc9-5",
      "identity": {
        "name": "鄭朝鐘",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "竹東河濱公園下公館段編列預算整體改善",
          "detail": "並要求管理施工車輛停放；2026 年 3 月另提案增設公廁；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/29%E9%84%AD%E6%9C%9D%E9%90%98_114347.pdf"
        },
        {
          "topic": "environment",
          "title": "噪音防制優先增購半固定式聲音照相設備",
          "detail": "半固定式可移動、告發率較固定式高；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/29%E9%84%AD%E6%9C%9D%E9%90%98_114347.pdf"
        },
        {
          "topic": "safety",
          "title": "公有市場與夜市攤販契約納入產品責任險",
          "detail": "降低食安事件後消費者求償無門的風險；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/29%E9%84%AD%E6%9C%9D%E9%90%98_114347.pdf"
        },
        {
          "topic": "transport",
          "title": "改善快捷 8 號支線準點與車況，配合新設高工增班",
          "detail": "要求更換老舊車輛，並由教育主管機關向新生宣導搭乘，依人數增班；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/29%E9%84%AD%E6%9C%9D%E9%90%98_114347.pdf"
        },
        {
          "topic": "governance",
          "title": "數位發展處剩餘預算暫停動用並向議會專案報告",
          "detail": "2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/29%E9%84%AD%E6%9C%9D%E9%90%98_114347.pdf"
        },
        {
          "topic": "transport",
          "title": "增設竹東工研院東、西大門公共自行車站",
          "detail": "2026 年 9 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5905"
        },
        {
          "topic": "education",
          "title": "研擬學齡前兒童牛奶補助",
          "detail": "2026 年 5 月議會提案，尚屬研擬階段。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5591"
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
              "title": "優化竹東河濱公園設施",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=372"
            },
            {
              "topic": "transport",
              "title": "提出頭重、二重、三重地區交通壅塞改善計畫",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=372"
            },
            {
              "topic": "education",
              "title": "放寬申請條件、提高育兒津貼並廣設公共托育",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=372"
            },
            {
              "topic": "education",
              "title": "加強溪南地區教育預算",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=372"
            },
            {
              "topic": "welfare",
              "title": "爭取銀髮補助與失能長者長期照護資源",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=372"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc9-6",
      "identity": {
        "name": "彭余美玲",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "education",
          "title": "營養午餐每餐補助調高 10 元",
          "detail": "目前國小每餐 50 元、國中 53 元，低於鄰近縣市；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/28%E5%BD%AD%E4%BD%99%E7%BE%8E%E7%8E%B2_114331.pdf"
        },
        {
          "topic": "welfare",
          "title": "敬老卡點數提高至 800 至 1,000 點並擴大用途",
          "detail": "可用於健保部分負擔、掛號費及農會消費；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/28%E5%BD%AD%E4%BD%99%E7%BE%8E%E7%8E%B2_114331.pdf"
        },
        {
          "topic": "education",
          "title": "竹東外五里二重埔社區增設公共托育",
          "detail": "2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/28%E5%BD%AD%E4%BD%99%E7%BE%8E%E7%8E%B2_114331.pdf"
        },
        {
          "topic": "environment",
          "title": "二重公五公園增設兒童共融遊戲設施",
          "detail": "2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/28%E5%BD%AD%E4%BD%99%E7%BE%8E%E7%8E%B2_114331.pdf"
        },
        {
          "topic": "safety",
          "title": "竹東警察分局重建",
          "detail": "2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/28%E5%BD%AD%E4%BD%99%E7%BE%8E%E7%8E%B2_114331.pdf"
        },
        {
          "topic": "economy",
          "title": "竹東大禾埕以空中步道串連河濱公園",
          "detail": "本人稱為大膽構想，請縣府整體規劃，尚非具體計畫；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/28%E5%BD%AD%E4%BD%99%E7%BE%8E%E7%8E%B2_114331.pdf"
        },
        {
          "topic": "safety",
          "title": "整建竹東五豐里油車窩溪上游駁崁",
          "detail": "2026 年 7 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5741"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "擔任民意代表期間質詢竹東轉運站、展演空間建設進度，以及竹東公園遊具因未完成安全檢驗而封閉的改善時程（2023 年）。",
          "source": "https://n.yam.com/Article/20230524636149"
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
              "topic": "education",
              "title": "全面推動公共托育與公立幼兒園",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=267"
            },
            {
              "topic": "welfare",
              "title": "提高生育補助",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=267"
            },
            {
              "topic": "environment",
              "title": "落實竹東綠地空間",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=267"
            },
            {
              "topic": "welfare",
              "title": "推動老人關懷據點",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=267"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc9-7",
      "identity": {
        "name": "林裙靜",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "在竹東鎮中心建立長照服務系統",
          "detail": "2026 年 6 月參選記者會提出。",
          "source": "https://newtalk.tw/news/view/2026-06-09/1040199"
        },
        {
          "topic": "transport",
          "title": "協調改善竹東大眾運輸",
          "detail": "2026 年 6 月參選記者會提出，未說明具體作法。",
          "source": "https://newtalk.tw/news/view/2026-06-09/1040199"
        }
      ],
      "record": [],
      "past": []
    },
    {
      "id": "hhc9-8",
      "identity": {
        "name": "鍾心渝",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc9-9",
      "identity": {
        "name": "楊昌德",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "竹東河濱公園加裝路燈與監視器",
          "detail": "建議路燈設於台 68 線橋墩之間，並重鋪路面、增設便道；2026 年 3 月議會提案，2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/31%E6%A5%8A%E6%98%8C%E5%BE%B7%E8%AD%B0%E5%93%A1_114407.pdf"
        },
        {
          "topic": "environment",
          "title": "聯通管工程復舊時於河濱公園設停車場並種植四季花卉",
          "detail": "花卉帶延伸至軟橋；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/31%E6%A5%8A%E6%98%8C%E5%BE%B7%E8%AD%B0%E5%93%A1_114407.pdf"
        },
        {
          "topic": "education",
          "title": "竹林大橋下方空間設置風雨球場",
          "detail": "2026 年 5 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5587"
        },
        {
          "topic": "environment",
          "title": "盤點老舊垃圾車並向中央爭取汰換",
          "detail": "竹東 27 輛中有 11 輛逾 15 年；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/31%E6%A5%8A%E6%98%8C%E5%BE%B7%E8%AD%B0%E5%93%A1_114407.pdf"
        },
        {
          "topic": "welfare",
          "title": "竹東行政中心遷移後舊廳舍改為樂齡與親子設施",
          "detail": "舊鎮公所改樂齡生活館、稅務局舊址設南區輔助資源中心、代表會舊址改親子館或托嬰中心；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/31%E6%A5%8A%E6%98%8C%E5%BE%B7%E8%AD%B0%E5%93%A1_114407.pdf"
        },
        {
          "topic": "safety",
          "title": "竹東分局與派出所改建",
          "detail": "戶政遷出後利用其土地，先暫遷舊鎮公所再改建；2026 年 4 至 5 月定期會總質詢提出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/31%E6%A5%8A%E6%98%8C%E5%BE%B7%E8%AD%B0%E5%93%A1_114407.pdf"
        },
        {
          "topic": "safety",
          "title": "竹東北興路、中興路及二三重埔設噪音與測速科技執法",
          "detail": "2026 年 3 月議會提案。",
          "source": "https://www.hcc.gov.tw/proposal-detail?article=5490"
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
              "title": "竹東設立完全中學",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=373"
            },
            {
              "topic": "housing",
              "title": "在零星工業區興建只租不賣的平價住宅",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=373"
            },
            {
              "topic": "safety",
              "title": "全鎮安裝監視器",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=373"
            },
            {
              "topic": "transport",
              "title": "台 68 快速道路延伸至上坪、橫山台三線",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=373"
            },
            {
              "topic": "transport",
              "title": "中興路採用智慧號誌，尖峰時段禁止小缺口左轉",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=373"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

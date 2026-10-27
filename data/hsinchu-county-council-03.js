/*
 * 2026 新竹縣議員第 3 選區（湖口鄉）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市議員選舉候選人登記彙總表」（製表日期 115/09/07，11 人，應選 5 席）
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
 * 已知缺漏：仍查無 2026 年具體政見者：余筱菁、翁紹軒、賴寶鈺、陳岫玫、楊勝馭、戴翊如（現任者的議會質詢要求列於 platforms，並註明質詢時間）。
 * 2026-10-19 第四輪補查：新增 23 則政見、1 則經歷。
 * 號次：10/27 已抽籤，但整理時（2026-10-27）尚未查得本選區的抽籤結果，number 暫為 null。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-county-council-03",
  "region": "新竹縣",
  "office": "第 3 選區縣議員",
  "area": "湖口鄉",
  "seats": 5,
  "note": "議員政見整理自議會官網、新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有可查的 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現。「過去政見」取自議會官網議員介紹頁的上屆政見，執行情形未逐則查證。",
  "candidates": [
    {
      "id": "hhc3-1",
      "identity": {
        "name": "甄克堅",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "以縣款拓寬竹 12 線湖口國中旁最後 350 公尺",
          "detail": "2026 年 5 月議會總質詢提出：該路段 30 年未拓寬，旁有兩所幼兒園，大車出入危險；主張不等中央補助，以約 2,000 多萬元縣款辦理徵收與拓寬。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/15甄克堅_114044.pdf"
        },
        {
          "topic": "education",
          "title": "在王爺壟文小用地新建國小，分流新湖國小學生",
          "detail": "2026 年 5 月議會總質詢提出：新湖國小學生約 2,200 人，校舍老舊，主張興建新校分流。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/15甄克堅_114044.pdf"
        },
        {
          "topic": "transport",
          "title": "下班時段開放湖口服務區北上出口，分流湖口交流道",
          "detail": "2026 年 5 月議會總質詢提出，請交通主管機關與中央民意代表向高速公路主管機關爭取。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/15甄克堅_114044.pdf"
        },
        {
          "topic": "governance",
          "title": "湖口戶政事務所遷建至王爺壟",
          "detail": "2026 年 5 月議會總質詢提出：現有廳舍太小，主張新建綜合辦公大樓。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/15甄克堅_114044.pdf"
        },
        {
          "topic": "governance",
          "title": "調高鄰長津貼",
          "detail": "2026 年 5 月議會總質詢提出，因應物價上漲增加 1,000 或 2,000 元。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/15甄克堅_114044.pdf"
        },
        {
          "topic": "welfare",
          "title": "放寬敬老年金設籍年限",
          "detail": "2026 年 5 月議會總質詢提出：現行以 2005 年以前設籍為限，建議視財政放寬，例如延至 2015 年。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/15甄克堅_114044.pdf"
        },
        {
          "topic": "environment",
          "title": "擴大學校、醫療院所與機關周邊禁菸範圍至 50 公尺以上",
          "detail": "2026 年 5 月議會總質詢提出，涵蓋學校、幼兒園、托嬰中心、醫院診所與行政大樓周邊。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/15甄克堅_114044.pdf"
        }
      ],
      "record": [],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "議會官網所列上屆政見為服務態度與原則，未列具體項目。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc3-2",
      "identity": {
        "name": "余筱菁",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc3-3",
      "identity": {
        "name": "羅美文",
        "party": "勞動黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "勞工教育經費專款專用，勞動法規與職安課程不低於七成",
          "detail": "2026 年 5 月議會總質詢提出：公開講師費請領清冊、訂定利益迴避條款，禁止工會幹部在自辦課程兼任講師支領；縣府首長答詢同意辦理，並將召開勞工教育與權益研討會。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/16羅美文_114056.pdf"
        },
        {
          "topic": "economy",
          "title": "提出勞動檢查員擴編計畫與時程",
          "detail": "2026 年 5 月議會總質詢提出：全縣僅 7 名勞檢員，要求具體擴編；縣府首長答詢表示支持。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/16羅美文_114056.pdf"
        },
        {
          "topic": "education",
          "title": "王爺壟文小用地新建 36 至 48 班中型國小並結合幼兒園",
          "detail": "2026 年 5 月議會總質詢提出，主張 3 到 5 年內建成，分流新湖國小（76 班）與信勢國小（約 54 班）；縣府答詢將研究評估。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/16羅美文_114056.pdf"
        },
        {
          "topic": "transport",
          "title": "湖口火車站至公五特色公園打通騎樓、設實體人行道示範廊道",
          "detail": "2026 年 5 月議會總質詢提出：要求 6 個月內提出規劃，同步盤點中正路、中山路周邊巷弄與畸零地設置替代停車，並向中央爭取人本交通經費。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/16羅美文_114056.pdf"
        },
        {
          "topic": "transport",
          "title": "全面開放湖口服務區出入口銜接市區道路，分流湖口交流道",
          "detail": "2026 年 5 月議會總質詢提出，利用茄苳溪河堤與服務區旁空地闢設便道。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/16羅美文_114056.pdf"
        }
      ],
      "record": [
        {
          "topic": "economy",
          "text": "針對縣內傳統產業工廠裁員與關廠，要求政府主動協助勞工轉職、再就業與生活安置（2026 年）。",
          "source": "https://udn.com/news/story/7241/9500019"
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
              "topic": "welfare",
              "title": "在湖口設立綜合社福中心，提供幼托、長者日照及公立坐月子中心",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=356"
            },
            {
              "topic": "environment",
              "title": "湖口增設全年齡特色公園",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=356"
            },
            {
              "topic": "transport",
              "title": "加快榮光路拓寬",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=356"
            },
            {
              "topic": "education",
              "title": "增加國小課後輔導班數，特別是偏鄉小校",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=356"
            },
            {
              "topic": "economy",
              "title": "運用身心障礙者就業基金創造就業機會",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=356"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc3-4",
      "identity": {
        "name": "吳菊花",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "education",
          "title": "國小及公立學校普設 2 歲幼兒專班",
          "detail": "2026 年 10 月議會總質詢提出。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5603652"
        },
        {
          "topic": "welfare",
          "title": "老人年金恢復每人 6,000 元，設籍滿 10 年即可請領並放寬排富",
          "detail": "2026 年 10 月議會總質詢提出。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5603652"
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
              "title": "幼兒就學補助向下延伸到 3 歲",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=282"
            },
            {
              "topic": "education",
              "title": "增設公共托育班",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=282"
            },
            {
              "topic": "governance",
              "title": "公共場所與交通樞紐增設免費無線網路",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=282"
            },
            {
              "topic": "welfare",
              "title": "公辦銀髮族安親班，廣設社區關懷據點",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=282"
            },
            {
              "topic": "education",
              "title": "增加中小學圖書室藏書，優先增加雙語圖書",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=282"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc3-5",
      "identity": {
        "name": "何建樺",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "科技執法路口提前 100 公尺設置明顯標示",
          "detail": "2026 年 5 月議會總質詢提出，讓駕駛提早得知轉向與執法路段，避免臨時切換車道。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/11吳傳地、何建樺、張珈源議員%20%20%20質詢稿%20%20%201150506_113943.pdf"
        },
        {
          "topic": "transport",
          "title": "鄉道山葉路改列縣道並爭取中央經費拓寬",
          "detail": "2026 年 5 月議會總質詢提出：東興村人口由 2 千多人增至 8 千多人，道路狹窄且易淹水；工務主管機關答詢已納入縣轄道路總清查。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/11吳傳地、何建樺、張珈源議員%20%20%20質詢稿%20%20%201150506_113943.pdf"
        },
        {
          "topic": "transport",
          "title": "快捷公車延駛湖口火車站並與幸福巴士銜接",
          "detail": "2026 年 5 月議會總質詢提出，讓湖口鄉民可搭公車到高鐵站；交通主管機關答詢將與業者研議。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/11吳傳地、何建樺、張珈源議員%20%20%20質詢稿%20%20%201150506_113943.pdf"
        },
        {
          "topic": "safety",
          "title": "在湖口興建縣立防災教育館",
          "detail": "2026 年 5 月議會總質詢提出；消防主管機關答詢已選定湖口鄉新豐消防分隊旁約 8,342 平方公尺用地，經費初估約 5.99 億元，預計 2031 年 7 月驗收，縣府首長表示將編入明年度預算。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/11吳傳地、何建樺、張珈源議員%20%20%20質詢稿%20%20%201150506_113943.pdf"
        },
        {
          "topic": "education",
          "title": "改善新湖國小教室、活動空間與老舊運動設施",
          "detail": "2026 年 5 月議會總質詢提出，並追蹤湖口高中人工智慧實驗班設備經費。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/11吳傳地、何建樺、張珈源議員%20%20%20質詢稿%20%20%201150506_113943.pdf"
        },
        {
          "topic": "transport",
          "title": "加速湖口第二交流道動工並改善列管危險路口",
          "detail": "2026 年 10 月議會質詢提出，並要求持續檢討號誌與車道配置、強化路口防護。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5606161"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "擔任民意代表期間關切湖口公共自行車站點不足，要求擴大站點與車輛數（2026 年）。",
          "source": "https://news.ltn.com.tw/news/HsinchuCounty/breakingnews/5431799"
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
              "title": "反對在湖口鄉波羅村設立第二座生命紀念園區",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=355"
            },
            {
              "topic": "transport",
              "title": "爭取湖口往返高鐵新竹站接駁車",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=355"
            },
            {
              "topic": "governance",
              "title": "爭取湖口設立室內國民運動中心",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=355"
            },
            {
              "topic": "education",
              "title": "中小學營養午餐費每人由 45 元提高為 65 元",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=355"
            },
            {
              "topic": "welfare",
              "title": "推動村村有長輩共餐食堂",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=355"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc3-6",
      "identity": {
        "name": "翁紹軒",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "economy",
          "text": "擔任鄉鎮市民意代表期間提案建請公所研議普發每人 5,000 元現金，獲多名代表連署，公所未採納（2025 年）。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5284280"
        }
      ],
      "past": []
    },
    {
      "id": "hhc3-7",
      "identity": {
        "name": "賴寶鈺",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc3-8",
      "identity": {
        "name": "陳栢誠",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "education",
          "title": "建立客家獅長期培訓與校園傳承制度",
          "detail": "2026 年 4 月議會總質詢提出：設固定培訓據點、師資傳承計畫與培育目標，結合在地節慶與商圈，並爭取在 2029 年全國運動會開閉幕演出。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/17陳栢誠議員%20%20%20質詢稿%20%20%201150429_114110.pdf"
        },
        {
          "topic": "transport",
          "title": "加速湖口營區旁勝利一路拓寬",
          "detail": "2026 年 4 月議會總質詢追蹤；工務主管機關答詢已向中央申請 8,200 萬元補助，軍方土地須以徵收方式取得。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/17陳栢誠議員%20%20%20質詢稿%20%20%201150429_114110.pdf"
        },
        {
          "topic": "education",
          "title": "延長特教助理員服務時數，並提供鑑定等待期的過渡支援",
          "detail": "2026 年 4 月議會總質詢提出：每日 4 小時不足，建議延長至 6 至 8 小時並導入彈性支援；教育主管機關答詢將向中央建議，並研議在 2027 年度預算提高私幼特教助理員補助。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/17陳栢誠議員%20%20%20質詢稿%20%20%201150429_114110.pdf"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "擔任民意代表期間於總質詢建議將湖口一處國軍陣地舊址改設教學醫院，改善湖口、新豐醫療資源（2023 年）。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/4491746"
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
              "topic": "economy",
              "title": "活化湖口老街並延續整治畚箕窩溪沿岸觀光帶",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=376"
            },
            {
              "topic": "transport",
              "title": "拓寬勝利路並興建跨鳳山溪高架道路",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=376"
            },
            {
              "topic": "transport",
              "title": "爭取湖口設置公共自行車站與風雨球場",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=376"
            },
            {
              "topic": "safety",
              "title": "強化重要路口影像監控",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=376"
            },
            {
              "topic": "transport",
              "title": "輕軌路線延伸至湖口老街並與桃園輕軌銜接",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=376"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc3-9",
      "identity": {
        "name": "陳岫玫",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc3-10",
      "identity": {
        "name": "楊勝馭",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc3-11",
      "identity": {
        "name": "戴翊如",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    }
  ]
});

/*
 * 2026 新竹縣議員第 1 選區（竹北市尚義里、崇義里、新港里、大義里、白地里、大眉里、麻…）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市議員選舉候選人登記彙總表」（製表日期 115/09/07，6 人，應選 4 席）
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
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-county-council-01",
  "region": "新竹縣",
  "office": "第 1 選區縣議員",
  "area": "竹北市尚義里、崇義里、新港里、大義里、白地里、大眉里、麻園里、溪州里、新庄里、聯興里、泰和里、新社里、新國里、竹義里、新崙里",
  "seats": 4,
  "note": "本屆起竹北市分為東、西兩個選區，現任者的上屆選區為原竹北市單一選區。議員政見整理自議會官網、新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有可查的 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現。「過去政見」取自議會官網議員介紹頁的上屆政見，執行情形未逐則查證。",
  "candidates": [
    {
      "id": "hhc1-1",
      "identity": {
        "name": "陳凱榮",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
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
              "topic": "safety",
              "title": "要求縣府成立公共危險審查專案小組，建商定期提出工地周邊地質監測數據",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=341"
            },
            {
              "topic": "governance",
              "title": "遷建老舊且空間不足的竹北戶政事務所",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=341"
            },
            {
              "topic": "education",
              "title": "協助各校改善電力、裝設冷氣與屋頂太陽光電",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=341"
            },
            {
              "topic": "education",
              "title": "營養午餐採用國產豬牛肉與在地有機食材",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=341"
            },
            {
              "topic": "environment",
              "title": "增編豆子埔溪整治經費，提高污水下水道接管率並取締工業廢水偷排",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=341"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc1-2",
      "identity": {
        "name": "王炳漢",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "transport",
          "text": "擔任民意代表期間爭取設立公共自行車租賃站點，以及在經國橋延伸段設置機車引道（本人說法，2022 年自述）。",
          "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=363"
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
              "topic": "transport",
              "title": "規劃自行車道串聯竹北、新竹及新豐",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=363"
            },
            {
              "topic": "education",
              "title": "爭取竹北增設高中",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=363"
            },
            {
              "topic": "economy",
              "title": "監督 AI 智慧園區開發進度並促其儘速營運",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=363"
            },
            {
              "topic": "environment",
              "title": "爭取豆子埔溪整體水環境改善",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=363"
            },
            {
              "topic": "welfare",
              "title": "爭取敬老卡點數可用於公共自行車",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=363"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc1-3",
      "identity": {
        "name": "李雅芬",
        "party": "時代力量",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc1-4",
      "identity": {
        "name": "張珈源",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "environment",
          "text": "擔任民意代表期間於總質詢建議縣府規劃中的生命紀念園區一併設置寵物殯葬設施（2021 年）。",
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
              "topic": "education",
              "title": "廣設公共托育並獎勵企業設置非營利幼兒園",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=359"
            },
            {
              "topic": "housing",
              "title": "提案推動社會住宅",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=359"
            },
            {
              "topic": "transport",
              "title": "爭取公共自行車專用道，改善與汽機車爭道問題",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=359"
            },
            {
              "topic": "economy",
              "title": "建立青年創業基地並增設職業訓練中心",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=359"
            },
            {
              "topic": "governance",
              "title": "推動議會資訊透明化",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=359"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc1-5",
      "identity": {
        "name": "陳秀玲",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc1-6",
      "identity": {
        "name": "鄭美琴",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "transport",
          "text": "擔任民意代表期間質詢大型活動期間公共自行車站點與車輛不足，以及義消、婦宣人員意外保險與消防裝備問題（2023 年）。",
          "source": "https://n.yam.com/Article/20230524636149"
        },
        {
          "topic": "welfare",
          "text": "擔任民意代表期間質詢臨時托育資源不足，要求提供家長喘息空間（2023 年）。",
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
              "topic": "environment",
              "title": "推動特色公園，城市公園化",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=254"
            },
            {
              "topic": "transport",
              "title": "推動輕軌與低碳綠色交通",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=254"
            },
            {
              "topic": "education",
              "title": "推動教育科技化",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=254"
            },
            {
              "topic": "welfare",
              "title": "社會福利多樣化",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=254"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

/*
 * 2026 新竹縣議員第 2 選區（竹北市竹北里、竹仁里、福德里、北崙里、中崙里、文化里、興…）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市議員選舉候選人登記彙總表」（製表日期 115/09/07，14 人，應選 9 席）
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
  "id": "hsinchu-county-council-02",
  "region": "新竹縣",
  "office": "第 2 選區縣議員",
  "area": "竹北市竹北里、竹仁里、福德里、北崙里、中崙里、文化里、興安里、斗崙里、北興里、十興里、鹿場里、東興里、中興里、東平里、東海里、隘口里",
  "seats": 9,
  "note": "本屆起竹北市分為東、西兩個選區，現任者的上屆選區為原竹北市單一選區。議員政見整理自議會官網、新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有可查的 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現。「過去政見」取自議會官網議員介紹頁的上屆政見，執行情形未逐則查證。",
  "candidates": [
    {
      "id": "hhc2-1",
      "identity": {
        "name": "游雅婷",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "現任鄉鎮市民意代表。",
          "source": "https://udn.com/news/story/124652/9668755"
        }
      ],
      "past": []
    },
    {
      "id": "hhc2-2",
      "identity": {
        "name": "歐陽霆",
        "party": "民主進步黨",
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
              "topic": "education",
              "title": "推動公共托育，減輕年輕父母負擔",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=368"
            },
            {
              "topic": "education",
              "title": "爭取更多公園與婦幼館",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=368"
            },
            {
              "topic": "transport",
              "title": "全面監督道路平整",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=368"
            },
            {
              "topic": "transport",
              "title": "加速推動公車與輕軌路網",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=368"
            },
            {
              "topic": "transport",
              "title": "推動步行友善城市並爭取機車路權",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=368"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc2-3",
      "identity": {
        "name": "邵啟月",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "監督社會住宅進度並倡議可負擔住宅",
          "detail": "完善租金補貼；擴大青年創業基地與就業輔導",
          "source": "https://newtalk.tw/news/view/2026-05-02/1032850"
        },
        {
          "topic": "education",
          "title": "升級公共托育並推動臨時與夜間托育",
          "detail": "增加公園、室內親子館與兒科醫療資源",
          "source": "https://newtalk.tw/news/view/2026-05-02/1032850"
        },
        {
          "topic": "welfare",
          "title": "爭取補助孕婦與嬰幼兒疫苗",
          "detail": "RSV 抗體或疫苗、腸病毒 71 型疫苗及百日咳疫苗",
          "source": "https://newtalk.tw/news/view/2026-05-02/1032850"
        },
        {
          "topic": "education",
          "title": "加速校舍興建擴容並推動通學步道",
          "detail": "爭取雙語教育與科技資源，強化校園心理輔導",
          "source": "https://newtalk.tw/news/view/2026-05-02/1032850"
        },
        {
          "topic": "welfare",
          "title": "擴大敬老卡使用範圍與長者疫苗補助",
          "detail": "敬老卡可用於 App 叫車、合作診所與農會；擴大 55 歲以上帶狀疱疹疫苗補助；擴大社區關懷據點",
          "source": "https://newtalk.tw/news/view/2026-05-02/1032850"
        },
        {
          "topic": "economy",
          "title": "將老屋與閒置空間改造為藝文基地",
          "detail": "推動親子藝文市集、戶外電影院，引進兒童劇團與藝術季",
          "source": "https://newtalk.tw/news/view/2026-05-02/1032850"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "擔任鄉鎮市民意代表期間提案統一施工公告的視覺規範，提高辨識度（本人說法）。",
          "source": "https://newtalk.tw/news/view/2026-05-02/1032850"
        },
        {
          "topic": "transport",
          "text": "擔任鄉鎮市民意代表期間推動免費市民公車改以平板記錄載客數據，供每年檢討路線；推動校車制度並改善候車亭、加設智慧站牌（本人說法）。",
          "source": "https://newtalk.tw/news/view/2026-05-02/1032850"
        },
        {
          "topic": "safety",
          "text": "要求公廁與公園升級照明並改善視線死角（本人說法）。",
          "source": "https://newtalk.tw/news/view/2026-05-02/1032850"
        }
      ],
      "past": []
    },
    {
      "id": "hhc2-4",
      "identity": {
        "name": "戴佩如",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "現任鄉鎮市民意代表。",
          "source": "https://udn.com/news/story/124652/9668755"
        }
      ],
      "past": []
    },
    {
      "id": "hhc2-5",
      "identity": {
        "name": "蔡蕥鍹",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "housing",
          "text": "擔任民意代表期間質詢縣內閱讀指標落後與社會住宅興建進度（2023 年）。",
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
              "title": "爭取設立完全中學，改善高中名額不足",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=369"
            },
            {
              "topic": "education",
              "title": "爭取設立特殊教育資源中心，結合早療與職能治療",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=369"
            },
            {
              "topic": "environment",
              "title": "推動東興圳沿岸綠園道",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=369"
            },
            {
              "topic": "transport",
              "title": "監督國道一號楊梅頭份段拓寬與經國橋交通改善工程",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=369"
            },
            {
              "topic": "environment",
              "title": "爭取增建風雨球場、網球場",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=369"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc2-6",
      "identity": {
        "name": "范格菱",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "現任鄉鎮市民意代表。",
          "source": "https://udn.com/news/story/124652/9545369"
        },
        {
          "topic": "environment",
          "text": "針對市區兩座公園改造爭議向公所查證，表示綠地合計增加約 3,037 平方公尺、綠覆率分別提高至約 76% 與 70%，並主張樹木移除依據與補植計畫應公開受檢視（本人說法）。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5603262"
        }
      ],
      "past": []
    },
    {
      "id": "hhc2-7",
      "identity": {
        "name": "蔡志環",
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
              "topic": "transport",
              "title": "建構竹北與科學園區間的循環公車路網",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=339"
            },
            {
              "topic": "welfare",
              "title": "一社區一關懷據點",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=339"
            },
            {
              "topic": "welfare",
              "title": "推動行動醫療服務專車",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=339"
            },
            {
              "topic": "housing",
              "title": "爭取青年成家無息補助貸款與縣民租屋補貼",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=339"
            },
            {
              "topic": "education",
              "title": "雙語教學延伸至幼兒園",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=339"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc2-8",
      "identity": {
        "name": "朱健銘",
        "party": "無黨籍",
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
              "topic": "economy",
              "title": "設置勞工權益平台，每年至少辦理 4 場大型就業博覽會",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=366"
            },
            {
              "topic": "environment",
              "title": "領養流浪動物贈送一年寵物保險，增加犬貓免費結紮與晶片場次",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=366"
            },
            {
              "topic": "transport",
              "title": "擴大規劃學區交通寧靜區，車輛限速 30 公里",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=366"
            },
            {
              "topic": "environment",
              "title": "公有停車場提供免費電動車專用格位",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=366"
            },
            {
              "topic": "governance",
              "title": "增加縣府青年諮詢委員人數並修正設置要點",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=366"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc2-9",
      "identity": {
        "name": "林禹佑",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "economy",
          "text": "擔任民意代表期間要求縣府研議 AI 數位工具補助，對象涵蓋學生、青年創業者與初入職場者（2026 年）。",
          "source": "https://udn.com/news/story/7241/9528109"
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
              "title": "爭取 6 個月新生兒健檢補助",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=361"
            },
            {
              "topic": "welfare",
              "title": "爭取兒童發展遲緩等成長篩檢持續補助",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=361"
            },
            {
              "topic": "education",
              "title": "廣設公共托育，爭取更多私幼加入準公共化",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=361"
            },
            {
              "topic": "welfare",
              "title": "活化長照體系，推動老幼共托",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=361"
            },
            {
              "topic": "environment",
              "title": "建立流浪動物送養媒合機制",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=361"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc2-10",
      "identity": {
        "name": "張育慈",
        "party": "時代力量",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc2-11",
      "identity": {
        "name": "林碩彥",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "transport",
          "text": "擔任民意代表期間於總質詢提出智慧停車與公車方案：路邊停車免找車位、無感支付，公車動態看板與一鍵招呼，要求核准智慧停車試點並訂定城市家具設計規範（2026 年）。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5424583"
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
              "title": "高鐵橋下道路延伸至科學園區力行路",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=367"
            },
            {
              "topic": "transport",
              "title": "支持竹北與新竹市跨頭前溪新橋計畫",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=367"
            },
            {
              "topic": "transport",
              "title": "竹北段台鐵縱貫線高架化",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=367"
            },
            {
              "topic": "education",
              "title": "竹北重劃區增設國中小",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=367"
            },
            {
              "topic": "transport",
              "title": "試辦無人自駕公車路線",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=367"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hhc2-12",
      "identity": {
        "name": "杜文中",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc2-13",
      "identity": {
        "name": "范揚琪",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hhc2-14",
      "identity": {
        "name": "邱靖雅",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "welfare",
          "text": "擔任民意代表期間要求縣府辦理 10 場視力保健教師研習、強化 4 至 5 歲幼兒視力篩檢與轉介，並爭取開辦整合視力、聽力、口腔與發展檢查的兒童健檢（2026 年）。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5428892"
        },
        {
          "topic": "welfare",
          "text": "於議會主張以長者照顧服務取代老人年金，並將新生兒補助提高至每胎 4 萬元（2026 年）。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5604691"
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
              "title": "增建公共托育、非營利幼兒園與國中小",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=342"
            },
            {
              "topic": "education",
              "title": "建立育兒喘息機制",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=342"
            },
            {
              "topic": "transport",
              "title": "建立全市停車位數位管理",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=342"
            },
            {
              "topic": "governance",
              "title": "公開政府資訊並建立民意彙整平台",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=342"
            },
            {
              "topic": "welfare",
              "title": "推動銀髮肌耐力訓練活動",
              "status": "unknown",
              "note": "未查證執行情形",
              "source": "https://www.hcc.gov.tw/member-detail?program=190&S=22&C=342"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

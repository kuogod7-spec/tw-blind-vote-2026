/*
 * 2026 桃園市議員第 13 選區（平地原住民）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，6 人）
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 *   中選會今日（10/16）審定名單公告時尚未讀到（中選會新聞列表截至 9/22 無審定公告），故使用登記名單；人數與中央社 9/4 報導各選區登記人數一致。
 * 應選席次 4 席，依中選會 115/08/20 選舉公告（議員總額 65 名）：https://web.cec.gov.tw/api/file/45d8e965-f63a-46d5-b636-7d81e47cf4d1.pdf
 * 號次 10/23 抽籤，屆時請補上 identity.number。identity.party 依登記表「推薦之政黨」，「無」寫為無黨籍。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 上屆政見取自議會官網議員介紹頁「問政理念」（與 2022 年選舉公報內容相同或相近），兌現狀況未逐則查證，一律標 unknown。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 / unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 現任者「本屆提案數」取自報導者觀測站；議長與部分議員在該站提案數為 0 或查無，未列。
 * 已知缺漏（仍查無 2026 年具體政見）：陳卉蓁、李鴻志。
 * 2026-10-19 第四輪補查：新增 17 則政見、0 則經歷。現任者政見取自 2026 年市政總質詢中對特定建設或制度的具體要求（議會官網新聞稿），並非正式競選政見。
 */
window.ELECTION_DATA.races.push({
  "id": "taoyuan-council-13",
  "region": "桃園市",
  "office": "第 13 選區平地原住民市議員",
  "area": "全市",
  "seats": 4,
  "note": "議員資料整理自議會官網、報導者觀測站、2022 年選舉公報與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數新人查無具體政見，各人資料多寡差異很大，這裡照實呈現；政見為空不代表候選人沒有主張。「做過的事」中的市政總質詢內容取自議會官網新聞稿。",
  "candidates": [
    {
      "id": "tyc13-1",
      "identity": {
        "name": "王仙蓮",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "建立原住民健康地圖與長期追蹤制度",
          "detail": "2026 年 6 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5854&chk=7300c5d7-fa52-475e-be7d-9232860c9aaa"
        },
        {
          "topic": "welfare",
          "title": "媒合個管師、營養師與醫療團隊巡迴進駐文化健康站",
          "detail": "2026 年 6 月市政總質詢提出；目前 38 處文化健康站中 26 處有相關醫療服務",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5854&chk=7300c5d7-fa52-475e-be7d-9232860c9aaa"
        },
        {
          "topic": "welfare",
          "title": "改善長者前往文化健康站的交通接送",
          "detail": "2026 年 6 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5854&chk=7300c5d7-fa52-475e-be7d-9232860c9aaa"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "於市政總質詢建議建構原住民健康地圖與長期追蹤制度，並擴大醫療服務涵蓋文化健康站（目前 38 處中 26 處）。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5854&chk=7300c5d7-fa52-475e-be7d-9232860c9aaa"
        },
        {
          "topic": "housing",
          "text": "於市政總質詢要求為航空城範圍內配回土地自建的 24 戶原住民拆遷戶建立資訊與輔導機制。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5675&chk=3d4565c9-a1f4-4a7e-9a09-b350157a8f3a"
        },
        {
          "topic": "education",
          "text": "本屆提案 9 件，以教育類（7 件）最多；提案包括在中壢區設置原住民沉浸式族語幼兒園。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/wang-hsien-lien-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任基層民意代表（縣轄市民代表）、文化健康站督導。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1028"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "",
          "promises": [
            {
              "topic": "education",
              "title": "廣設公立、民營托幼機構，提升各級教育補助",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1028"
            },
            {
              "topic": "education",
              "title": "落實都會區原住民重點學校族語教育",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1028"
            },
            {
              "topic": "economy",
              "title": "推動原住民觀光夜市與文創產業",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1028"
            },
            {
              "topic": "economy",
              "title": "爭取職業證照培訓專班",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1028"
            },
            {
              "topic": "welfare",
              "title": "提升文化健康站服務品質",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1028"
            },
            {
              "topic": "housing",
              "title": "建立包租代管原住民專屬平台",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1028"
            },
            {
              "topic": "welfare",
              "title": "加強原住民法律扶助",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1028"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "9 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/wang-hsien-lien-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc13-2",
      "identity": {
        "name": "林志強",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "governance",
          "title": "由副市長層級召集跨局處原住民政策會議",
          "detail": "2026 年 7 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5866&chk=cfe3d86b-4d77-47f2-9827-405244284c21"
        },
        {
          "topic": "welfare",
          "title": "返鄉參加歲時祭儀交通補助增為一年兩次",
          "detail": "2026 年 7 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5866&chk=cfe3d86b-4d77-47f2-9827-405244284c21"
        },
        {
          "topic": "governance",
          "title": "修正原住民族發展及保障自治條例，增設文化活動設施設備補助",
          "detail": "2026 年 7 月市政總質詢提出，以原住民聚落社區公共空間改善為例",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5866&chk=cfe3d86b-4d77-47f2-9827-405244284c21"
        },
        {
          "topic": "governance",
          "title": "保留各族歲時祭儀既有補助，跨族群交流另行規劃",
          "detail": "2026 年 7 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5866&chk=cfe3d86b-4d77-47f2-9827-405244284c21"
        },
        {
          "topic": "education",
          "title": "整合學校空間、志工與社區據點補強原住民學童課後照顧",
          "detail": "2026 年 10 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5900&chk=78a32fce-99f5-470d-9a29-9b9467dc0c53"
        },
        {
          "topic": "governance",
          "title": "通盤盤點 12 區需求，推動平鎮、桃園、楊梅等地的原住民文化與集會場域",
          "detail": "2026 年 10 月市政總質詢要求平鎮基地儘速完成土地契約、楊梅二期（約 1 億多元）編列預算並爭取中央補助",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5900&chk=78a32fce-99f5-470d-9a29-9b9467dc0c53"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "於市政總質詢要求補強原住民學童課後照顧，並從全市 12 區通盤規劃文化與集會空間。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5900&chk=78a32fce-99f5-470d-9a29-9b9467dc0c53"
        },
        {
          "topic": "governance",
          "text": "於市政總質詢建議由副市長層級召集跨局處原民政策會議。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5866&chk=cfe3d86b-4d77-47f2-9827-405244284c21"
        },
        {
          "topic": "governance",
          "text": "本屆提案 4 件，主要為議事規則修正。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/lin-chih-chiang-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任基層民意代表（鎮民代表）、中央民意代表辦公室幕僚主管。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1027"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "",
          "promises": [
            {
              "topic": "welfare",
              "title": "推動原住民福利升級",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1027"
            },
            {
              "topic": "housing",
              "title": "爭取成家基金補助",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1027"
            },
            {
              "topic": "governance",
              "title": "督促訂定原住民族自治發展條例相關子法",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1027"
            },
            {
              "topic": "welfare",
              "title": "設置原住民族專責諮詢專線，成立原住民就業人力站",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1027"
            },
            {
              "topic": "economy",
              "title": "提高技術士證照補助",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1027"
            },
            {
              "topic": "economy",
              "title": "建立原住民族經濟產業服務平台",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1027"
            },
            {
              "topic": "welfare",
              "title": "盤點閒置空間設置文化健康站並培力長照人才",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1027"
            },
            {
              "topic": "education",
              "title": "推動國中小雙語教育",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1027"
            },
            {
              "topic": "welfare",
              "title": "建立體育人才資料庫、擴大專任教練員額",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1027"
            },
            {
              "topic": "housing",
              "title": "加速完成原住民專屬社會住宅並提高優先戶比例",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1027"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "4 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/lin-chih-chiang-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc13-3",
      "identity": {
        "name": "張秀菊",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "education",
          "title": "國中小學生每學期提供一組免費文具",
          "detail": "2026 年 8 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5892&chk=38b27194-069f-4ddb-81aa-9d39316c0be1"
        },
        {
          "topic": "welfare",
          "title": "試辦獨居原住民長者及失能者智慧手環",
          "detail": "2026 年 8 月市政總質詢提出，結合定位、健康監測與緊急通報",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5892&chk=38b27194-069f-4ddb-81aa-9d39316c0be1"
        },
        {
          "topic": "welfare",
          "title": "非設籍復興區原住民長者敬老愛心卡點數提高至 1,000 點，並開放扣抵就醫掛號費",
          "detail": "2026 年 8 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5892&chk=38b27194-069f-4ddb-81aa-9d39316c0be1"
        },
        {
          "topic": "education",
          "title": "建置線上部落大學平台，整合線上課程、族語教學與文化影音",
          "detail": "2026 年 8 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5892&chk=38b27194-069f-4ddb-81aa-9d39316c0be1"
        },
        {
          "topic": "welfare",
          "title": "提高原住民護理師與社工進用比例",
          "detail": "2026 年 8 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5892&chk=38b27194-069f-4ddb-81aa-9d39316c0be1"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "於市政總質詢建議由市府提供國中小學生每學期一組免費文具。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5892&chk=38b27194-069f-4ddb-81aa-9d39316c0be1"
        },
        {
          "topic": "economy",
          "text": "於市政總質詢要求原民文創園區暫緩收租、設置協調機制，並建議樓上空間改設原民局辦公室與文化會館。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5804&chk=5447d919-beb4-4e61-9fc6-a4f24f836119"
        },
        {
          "topic": "education",
          "text": "本屆提案 63 件，以教育類（23 件）最多；提案包括原民大學生儲備族語教師訓練計畫、爭取全國原住民族運動會在桃園舉辦。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chang-hsiu-chu-taoyuan"
        },
        {
          "topic": "economy",
          "text": "曾任國家公園導覽人員、餐飲與茶莊業者。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1029"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "",
          "promises": [
            {
              "topic": "welfare",
              "title": "設置免費原住民托嬰中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1029"
            },
            {
              "topic": "housing",
              "title": "租屋補助提高到 1 萬元",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1029"
            },
            {
              "topic": "welfare",
              "title": "區主席及頭目津貼提高至最低薪資",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1029"
            },
            {
              "topic": "housing",
              "title": "降低建購修繕補助門檻",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1029"
            },
            {
              "topic": "economy",
              "title": "市府工程保障並提高原住民任用員額",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1029"
            },
            {
              "topic": "economy",
              "title": "在機場及捷運站設立原住民工藝與美食展售店",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1029"
            },
            {
              "topic": "education",
              "title": "推行幼兒園沉浸式族語教學",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1029"
            },
            {
              "topic": "welfare",
              "title": "設置都會區原住民老人安養中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1029"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "63 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chang-hsiu-chu-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc13-4",
      "identity": {
        "name": "陳卉蓁",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "tyc13-5",
      "identity": {
        "name": "楊進福",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "輔導原住民企業品牌建立、通路媒合、優先採購與經營培訓",
          "detail": "2026 年 8 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5888&chk=820b5d22-8bef-4899-814a-84b8075abf61"
        },
        {
          "topic": "education",
          "title": "建立原住民運動選手主動選才、培訓與參賽輔導機制",
          "detail": "2026 年 8 月市政總質詢提出，由體育、原民主管機關與各單項委員會合作",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5888&chk=820b5d22-8bef-4899-814a-84b8075abf61"
        },
        {
          "topic": "education",
          "title": "原住民學生比例高的學校結合文化課程、職涯探索與產業體驗",
          "detail": "2026 年 8 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5888&chk=820b5d22-8bef-4899-814a-84b8075abf61"
        }
      ],
      "record": [
        {
          "topic": "economy",
          "text": "於市政總質詢建議市府在品牌建立、通路媒合與優先採購上輔導原住民企業。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5888&chk=820b5d22-8bef-4899-814a-84b8075abf61"
        },
        {
          "topic": "welfare",
          "text": "於市政總質詢建議提高全國原住民運動會選手集訓費與獎勵金（銀牌由 4 萬元增為 8 萬元、銅牌由 2 萬元增為 4 萬元）。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5706&chk=d8b82690-4c97-43b2-bd31-813c2780af05"
        },
        {
          "topic": "education",
          "text": "曾任基層民意代表（鄉民代表）、大學講師。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1026"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "",
          "promises": [
            {
              "topic": "economy",
              "title": "設置原住民勞工育才中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1026"
            },
            {
              "topic": "education",
              "title": "設置原住民族語發展中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1026"
            },
            {
              "topic": "welfare",
              "title": "擴大原住民微型保險 0 歲起納保",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1026"
            },
            {
              "topic": "welfare",
              "title": "建置原民多功能安養中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1026"
            },
            {
              "topic": "welfare",
              "title": "提升原住民事務幹部津貼",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1026"
            },
            {
              "topic": "housing",
              "title": "提高原住民入住社宅比例",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1026"
            },
            {
              "topic": "economy",
              "title": "增設北區原民農耕示範區",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1026"
            },
            {
              "topic": "welfare",
              "title": "推動一區一集會所及天幕",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1026"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "tyc13-6",
      "identity": {
        "name": "李鴻志",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    }
  ]
});

/*
 * 2026 臺北市議員第 1 選區市議員（北投區、士林區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-14。候選人名單依臺北市選舉委員會公布之「115 年直轄市議員選舉候選人登記」名單
 * （經三立新聞網 2026-09-04 轉載全文，並以 ETtoday 2026-09-04 名單、中央社 2026-09-04 人數交叉核對），20 人，應選 12 席。
 * 未能直接取得中選會／臺北市選委會原始公告檔，名單以上述報導為準。
 * 審定名單 10/16 公告、號次原訂 10/23 抽籤，因颱風薔琵臺北市 10/23 停止上班，依北市選委會公告改於 10/27 抽籤（https://www.cna.com.tw/news/aloc/202610210175.aspx、https://www.cna.com.tw/news/aloc/202610220375.aspx），抽籤後請補上 identity.number（2026-10-25 註）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」取自議會官網議員介紹頁或 2022 年選舉公報；提案數取自報導者觀測站（含共同提案）。
 * 已知缺漏：第二輪補查（2026-10-14）後，除一位候選人外仍未查得 2026 年具體政見（新聞多為選情報導，候選人社群貼文無法直接讀取）。
 *   紀建漢補上 2022 年里長選舉公報政見；劉致妤補上自述經歷；陳彥廷、林揚庭、李文、林聖峰仍查無可收錄資料。
 *   紀建漢 2022 年里長連任結果未查得。政見為空不代表候選人沒有主張。
 * 第三輪補查（2026-10-14）：黃瀞瑩補上政黨候選人介紹頁的政見，侯漢廷、劉致妤補上報導中的政見；其餘現任者 2026 年政見仍未查得，
 *   陳彥廷、林揚庭、李文、林聖峰仍查無可收錄資料。
 * 2026-10-19 第四輪補查：新增 38 則政見、6 則經歷（政見附加於陣列尾端；現任者 2026 年議會質詢中的具體要求也收為政見）。
 * 2026-10-25 黨籍核對：陳重文在中選會登記彙總表（https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf ）推薦政黨欄為「無」，維持無黨籍；其餘候選人亦與登記表一致。
 *   已知缺漏（仍查無 2026 年政見）：李文、陳彥廷、鍾佩玲、紀建漢、陳重文、賴苡任、林聖峰。
 *   陳彥廷另有同名者列於新北市選區，未能確認身分。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 號次：依 10/27 抽籤結果補上 16/20 位（https://web.cec.gov.tw/api/file/64d442d4-6027-4d96-bf44-765a137baac0.pdf、https://news.nextapple.com/politics/20261027/9D97130C9738BF3BCBC6843CB4761AE7、https://yuanfengmedia.tw/detail.php?type=lastest&id=62444）；其餘尚未查得，number 暫為 null（2026-10-27 註）。
 */
window.ELECTION_DATA.races.push({
  "id": "taipei-council-01",
  "region": "臺北市",
  "office": "第 1 選區市議員",
  "area": "北投區、士林區",
  "seats": 12,
  "note": "議員政見整理自候選人公開資料、議會官網、選舉公報與新聞報導（截至 2026-10-14）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，各人資料多寡差異很大，這裡照實呈現。現任議員的過去政見取自 2022 年選舉公報與議會官網；提案數取自報導者觀測站，含共同提案。多數候選人查無公開的 2026 年具體政見。",
  "candidates": [
    {
      "id": "tpc1-1",
      "identity": {
        "name": "謝閔弘",
        "party": "時代力量",
        "number": 9
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "重新檢討社子島開發方式，改為保留聚落、增加公設",
          "detail": "反對全區剷平；盤點弱勢承租戶、無完整產權住戶與高齡家庭，建立法律協助與居住支持",
          "source": "https://taiwangogo.tw/hsieh-min-hung/"
        },
        {
          "topic": "housing",
          "title": "社子島解除禁限建與區段徵收脫鉤",
          "detail": "主張解除禁限建、改善基礎建設不以區段徵收為條件；要求市府在環評訴訟確定前停止區段徵收程序",
          "source": "https://newtalk.tw/news/view/2026-07-18/1047933"
        },
        {
          "topic": "transport",
          "title": "重整大型醫院周邊交通動線",
          "detail": "重整石牌地區醫院周邊的接駁、計程車候車、臨停區與公車站位，補上社區彈性接駁或小黃公車",
          "source": "https://taiwangogo.tw/hsieh-min-hung/"
        },
        {
          "topic": "safety",
          "title": "人流大的路口增設行人庇護島與高齡友善號誌",
          "detail": "並調整行穿線",
          "source": "https://taiwangogo.tw/hsieh-min-hung/"
        },
        {
          "topic": "transport",
          "title": "要求市府在北士科重大廠商進駐前公開交通承載評估",
          "detail": "公開尖峰車流、捷運紅線與主要路口承載評估，並提出接駁、YouBike 及停車管理的期程；企業應提出通勤計畫",
          "source": "https://taiwangogo.tw/hsieh-min-hung/"
        },
        {
          "topic": "welfare",
          "title": "北士科公共回饋空間優先用於社宅、托嬰、日照",
          "detail": "以及平價生活機能",
          "source": "https://taiwangogo.tw/hsieh-min-hung/"
        },
        {
          "topic": "housing",
          "title": "高齡老屋與危險建物由市府列冊管理並主動提出都更方案",
          "detail": "市府提出補助、容積誘因、租屋安置與中繼住宅方案；住戶整合達一定門檻後成立專案窗口，協調產權、估價與審查期程",
          "source": "https://taiwangogo.tw/hsieh-min-hung/"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "從事家教與補習班教學工作，長期陪伴特殊需求學生（本人說法）。",
          "source": "https://taiwangogo.tw/hsieh-min-hung/"
        },
        {
          "topic": "governance",
          "text": "參與勞工、移工等公共議題（本人說法）。",
          "source": "https://ahong.oen.tw/"
        }
      ],
      "past": [
        {
          "role": "參選基層民選公職（里長）",
          "period": "2022",
          "elected": false,
          "result": "以 73 票之差未當選",
          "note": "當時政見未查得。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "tpc1-2",
      "identity": {
        "name": "李文",
        "party": "無黨籍",
        "number": 15
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "tpc1-3",
      "identity": {
        "name": "陳彥廷",
        "party": "無黨籍",
        "number": 10
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "tpc1-4",
      "identity": {
        "name": "鍾佩玲",
        "party": "民主進步黨",
        "number": 13
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案（含共同提案）263 件，以民政（70）、教育（64）、工務（43）類最多。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chung-pei-ling-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案建請將 65 至 84 歲長者重陽敬老禮金由每人 1,500 元調高至 3,000 元。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chung-pei-ling-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案建請提高敬老卡每月點數並擴大使用範圍，並開放敬老卡點數支付部分醫療院所健保門診基本負擔。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chung-pei-ling-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案建請檢討復康巴士愛心卡制度，取消車資門檻與扣點上限。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chung-pei-ling-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案建請提高生育獎勵金，並要求勞動局提出雇主推行育兒友善措施的誘因。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chung-pei-ling-taipei"
        },
        {
          "topic": "welfare",
          "text": "爭取士林臨時托育中心、福順狗公園，以及社子島 65 歲以上弱勢戶終身安置（本人說法，2022 年選舉公報）。",
          "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第01選舉區.pdf"
        },
        {
          "topic": "governance",
          "text": "參與提案建請士林區公所配合轄內派出所改建，增設區民活動中心及里辦公處所；市府回覆已決議改建為地上 3 層、地下 1 層建物，含約 60 坪區民活動中心與里辦公空間。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chung-pei-ling-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2018–2026",
          "elected": true,
          "result": "2022 年得票 18,264 票，當選",
          "note": "2022 年政見共 11 則，以下列出 6 則。",
          "promises": [
            {
              "topic": "welfare",
              "title": "爭取一區一臨時托育據點",
              "status": "unknown",
              "note": "本人說法：已爭取士林臨托中心；北投區據點未查得",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2550"
            },
            {
              "topic": "welfare",
              "title": "擴大敬老卡使用項目至西醫、中醫保健",
              "status": "unknown",
              "note": "任內參與提案開放敬老卡支付部分醫療院所健保門診基本負擔，採納結果未查得",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chung-pei-ling-taipei"
            },
            {
              "topic": "education",
              "title": "持續監督校園電子圍籬優化",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2550"
            },
            {
              "topic": "housing",
              "title": "爭取社子島安置條件優化、放寬",
              "status": "unknown",
              "note": "社子島開發 2026 年仍有爭議，安置條件調整情形未查得",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2550"
            },
            {
              "topic": "economy",
              "title": "爭取北投士林科技園區設置新創中心",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2550"
            },
            {
              "topic": "education",
              "title": "監督市府擴充國小雙語教育與外語師資",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2550"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數（含共同提案）",
              "value": "263 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chung-pei-ling-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc1-5",
      "identity": {
        "name": "紀建漢",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": [
        {
          "role": "基層民選公職（里長）",
          "period": "2014–2022（第 12、13 屆），2022 年競選連任",
          "elected": true,
          "result": "2022 年連任選舉結果未查得；2026 年報導稱其擔任里長 12 年",
          "note": "以下為 2022 年里長選舉公報政見（共 10 則，列出 6 則），執行情形未查得。",
          "promises": [
            {
              "topic": "transport",
              "title": "爭取捷運環狀線北環段車站出入口設於區公所前",
              "status": "unknown",
              "note": "北環段尚未完工，出入口位置定案情形未查得",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E5%A3%AB%E6%9E%97%E5%8D%80/士林區後港里里長.pdf"
            },
            {
              "topic": "environment",
              "title": "爭取設置濕地公園，活化抽水站旁閒置土地",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E5%A3%AB%E6%9E%97%E5%8D%80/士林區後港里里長.pdf"
            },
            {
              "topic": "welfare",
              "title": "爭取公園第二兒童遊戲場與堤外橋下兒童自行車練習場",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E5%A3%AB%E6%9E%97%E5%8D%80/士林區後港里里長.pdf"
            },
            {
              "topic": "transport",
              "title": "增設兩處 YouBike 站",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E5%A3%AB%E6%9E%97%E5%8D%80/士林區後港里里長.pdf"
            },
            {
              "topic": "housing",
              "title": "協助老屋公辦都市更新與危老重建",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E5%A3%AB%E6%9E%97%E5%8D%80/士林區後港里里長.pdf"
            },
            {
              "topic": "welfare",
              "title": "關懷弱勢、提供物資並輔導就業",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E5%A3%AB%E6%9E%97%E5%8D%80/士林區後港里里長.pdf"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "tpc1-6",
      "identity": {
        "name": "陳賢蔚",
        "party": "民主進步黨",
        "number": 20
      },
      "platforms": [
        {
          "topic": "education",
          "title": "比照鄰近縣市，提供國小半日班學童免費營養午餐",
          "detail": "2026 年 4 月議會質詢中要求，並主張研議調查用餐意願人數及教師留校指導費用；教育主管機關回應將評估可行性。",
          "source": "https://www.ctee.com.tw/news/20260428701749-431401"
        },
        {
          "topic": "environment",
          "title": "校園午餐廚餘改由環保單位清運或協助媒合去化，不轉嫁供餐業者",
          "detail": "因應隔年全面禁止廚餘養豬，2026 年 4 月議會質詢中要求市府儘早定案，並於當年下半年先規劃配套。",
          "source": "https://www.ctee.com.tw/news/20260428701749-431401"
        },
        {
          "topic": "environment",
          "title": "無菸城市政策先訂自治條例並做分期分區吸菸熱區調查",
          "detail": "2026 年 9 月市政總質詢中要求明確主責機關、整合跨局處，通盤規劃稽查人力並一次編足預算，擬定三年、五年長期計畫逐步推動。",
          "source": "https://news.ltn.com.tw/news/Taipei/breakingnews/5573416"
        },
        {
          "topic": "economy",
          "title": "協助北士科 T17、T18 基地進駐廠商排除法規問題、儘速開工",
          "detail": "2026 年 5 月議會質詢中追問國際科技大廠總部基地施工進度時提出。",
          "source": "https://udn.com/news/story/7240/9524213"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案（含共同提案）349 件，以教育（84）、民政（77）、工務（61）類最多。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-hsien-wei-taipei"
        },
        {
          "topic": "education",
          "text": "參與提案將教保機構攝錄影像保存期限延長至 90 日，並提高幼兒園教室監視器裝設比例。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-hsien-wei-taipei"
        },
        {
          "topic": "education",
          "text": "參與提案擴大清寒學生早餐補助至國、高中職，並調升弱勢學生午餐補助。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-hsien-wei-taipei"
        },
        {
          "topic": "governance",
          "text": "參與提案要求檢討大型室內體育館使照核發及營運驗收疏失，並導入第三方勘驗處理漏水問題。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-hsien-wei-taipei"
        },
        {
          "topic": "education",
          "text": "參與提案建請規劃符合國際標準的滑板場地、增設第二運動中心，並擴大身心障礙選手運動獎勵對象。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-hsien-wei-taipei"
        },
        {
          "topic": "safety",
          "text": "就任初期爭取校園周邊行人號誌汰換為新式系統、派出所優先由女警受理女性報案（本人說法，2022 年選舉公報）。",
          "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第01選舉區.pdf"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "2022 年得票 16,153 票，當選",
          "note": "2022 年遞補就任，同年當選。2022 年政見為七大類多項方向性主張，以下列出 6 則。",
          "promises": [
            {
              "topic": "education",
              "title": "校園納入共融式遊具設置處所",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2555"
            },
            {
              "topic": "education",
              "title": "優化學童營養餐點",
              "status": "unknown",
              "note": "任內參與提案檢討營養午餐契約罰則與廠商管理、調升弱勢學生午餐補助，採納結果未查得",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-hsien-wei-taipei"
            },
            {
              "topic": "welfare",
              "title": "增設幼兒園班級數、建置彈性課後照顧系統",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2555"
            },
            {
              "topic": "welfare",
              "title": "增設長者共餐共學據點",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2555"
            },
            {
              "topic": "environment",
              "title": "整治北投溪、復育北投石",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2555"
            },
            {
              "topic": "housing",
              "title": "監督促成社子島、關渡平原開發",
              "status": "in_progress",
              "note": "社子島開發 2026 年仍在區段徵收審查與爭議中",
              "source": "https://newtalk.tw/news/view/2026-07-18/1047933"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數（含共同提案）",
              "value": "349 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-hsien-wei-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc1-7",
      "identity": {
        "name": "林世宗",
        "party": "民主進步黨",
        "number": 5
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "加速社子島開發，區段徵收計畫儘速送中央核定",
          "detail": "2026 年 4 月議會質詢中追問細部計畫與區段徵收送審時程（市府答覆預計當年 6 月），並主張有依據的反對居民訴求應予滿足。",
          "source": "https://www.ctee.com.tw/news/20260417701767-431401"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案（含共同提案）125 件，以財建（30）、民政（27）、警衛（21）類最多。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-shih-tsung-taipei"
        },
        {
          "topic": "economy",
          "text": "參與提案建請非洲豬瘟防疫期間免收公有市場豬肉攤商攤位使用費，並將未列管攤商與店面業者納入補助。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-shih-tsung-taipei"
        },
        {
          "topic": "economy",
          "text": "參與提案建請捷運北環線施工期間協助社子市場攤商於周邊繼續營業，並研擬市場青創與二代接班輔導專案。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-shih-tsung-taipei"
        },
        {
          "topic": "safety",
          "text": "參與提案要求檢討電動車充換電站設置規範並增加消防設施。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-shih-tsung-taipei"
        },
        {
          "topic": "housing",
          "text": "與中央民意代表赴中央主管機關陳情，希望加快社子島開發。",
          "source": "https://newtalk.tw/news/view/2026-07-18/1047933"
        },
        {
          "topic": "transport",
          "text": "任內完成北投、明德、奇岩捷運站第二出口，並爭取福星公園、振華公園闢建地下停車場（本人說法，2022 年選舉公報）。",
          "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第01選舉區.pdf"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2010–2026",
          "elected": true,
          "result": "2022 年得票 13,971 票，當選",
          "note": "2022 年政見共 8 大項，以下列出 6 則。",
          "promises": [
            {
              "topic": "transport",
              "title": "推動北投市場改建",
              "status": "unknown",
              "note": "未查得完工紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2558"
            },
            {
              "topic": "environment",
              "title": "推動磺港溪再造計畫",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2558"
            },
            {
              "topic": "environment",
              "title": "催生洲美親子共融公園及狗運動公園",
              "status": "unknown",
              "note": "任內參與提案要求增設社區型狗活動區，興建情形未查得",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-shih-tsung-taipei"
            },
            {
              "topic": "welfare",
              "title": "改建浩然敬老院並增建長照大樓",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2558"
            },
            {
              "topic": "housing",
              "title": "監督北投區機一基地及士林區福順段基地公共住宅如期完工",
              "status": "unknown",
              "note": "未查得完工紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2558"
            },
            {
              "topic": "safety",
              "title": "要求全市逐步汰換監視系統",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2558"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數（含共同提案）",
              "value": "125 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-shih-tsung-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc1-8",
      "identity": {
        "name": "黃瀞瑩",
        "party": "台灣民眾黨",
        "number": 16
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "爭取輪狀病毒疫苗與腸病毒 71 型疫苗納入嬰幼兒公費疫苗",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=173"
        },
        {
          "topic": "transport",
          "title": "擴充並改善孕婦接送專車服務",
          "detail": "與叫車平台合作擴大服務量能，提升服務品質並強化申訴反映機制",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=173"
        },
        {
          "topic": "transport",
          "title": "改善中央南路二段及中山站施工路段的人行空間",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=173"
        },
        {
          "topic": "safety",
          "title": "推動全齡交通教育",
          "detail": "開設高齡者汽機車駕訓課程，降低高齡駕駛交通安全風險",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=173"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案（含共同提案）194 件，以教育（48）、工務（43）、民政（33）類最多。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/huang-ching-yin-taipei"
        },
        {
          "topic": "education",
          "text": "參與提案建請因應北士科開發與人口成長，研議籌設中正高中附設國中部。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/huang-ching-yin-taipei"
        },
        {
          "topic": "safety",
          "text": "參與提案要求各校安裝瓦斯偵測設備，並提供校園新興毒品快篩試劑。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/huang-ching-yin-taipei"
        },
        {
          "topic": "education",
          "text": "參與提案建請提升教保員勞動福利與待遇，並將教保機構影像保存期限延長至 90 日。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/huang-ching-yin-taipei"
        },
        {
          "topic": "governance",
          "text": "參與提案要求體育局公開大型室內體育館的資產清冊、保養維護紀錄與消防安全驗證報告。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/huang-ching-yin-taipei"
        },
        {
          "topic": "housing",
          "text": "促成市府持續興辦社會住宅，任內盤點新增 7,000 戶社宅潛力基地（本人說法）。",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=173"
        },
        {
          "topic": "welfare",
          "text": "爭取孕婦唐氏症篩檢自 2025 年起增加非侵入性胎兒染色體檢測（NIPT）選項（本人說法）。",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=173"
        },
        {
          "topic": "governance",
          "text": "曾任直轄市政府幕僚職務。",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=173"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "2022 年得票 29,270 票，當選",
          "note": "此前曾任直轄市政府副發言人。2022 年政見約 15 則，以下列出 6 則。",
          "promises": [
            {
              "topic": "economy",
              "title": "活化捷運淡水線高架下方閒置空間供青創進駐",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2547"
            },
            {
              "topic": "housing",
              "title": "推動包租代管，健全租屋市場",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2547"
            },
            {
              "topic": "welfare",
              "title": "爭取士林北投定點臨時托育服務",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2547"
            },
            {
              "topic": "welfare",
              "title": "爭取全額補助兒童接種輪狀病毒疫苗",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2547"
            },
            {
              "topic": "housing",
              "title": "增加新婚家庭社宅中籤率",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2547"
            },
            {
              "topic": "welfare",
              "title": "加速與台鐵合作，拓展敬老卡使用範圍",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2547"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數（含共同提案）",
              "value": "194 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/huang-ching-yin-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc1-9",
      "identity": {
        "name": "林揚庭",
        "party": "中國國民黨",
        "number": 18
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "拓寬淡北道路與周邊路網",
          "detail": "2026 年 9 月登記參選時提出，報導未說明具體做法。",
          "source": "https://cnews.com.tw/247260902a06/"
        },
        {
          "topic": "transport",
          "title": "推動水路通勤",
          "detail": "2026 年 9 月登記參選時提出，報導未說明具體做法。",
          "source": "https://cnews.com.tw/247260902a06/"
        },
        {
          "topic": "environment",
          "title": "以溫泉相關收益補助溫泉區硫磺氣體造成的損害",
          "detail": "2026 年 9 月登記參選時提出，報導未說明具體做法。",
          "source": "https://cnews.com.tw/247260902a06/"
        },
        {
          "topic": "economy",
          "title": "活化運用北士科回饋金",
          "detail": "2026 年 9 月登記參選時提出，報導未說明具體做法。",
          "source": "https://cnews.com.tw/247260902a06/"
        },
        {
          "topic": "economy",
          "title": "推動士林北投汽車城建設",
          "detail": "2026 年 9 月登記參選時提出，報導未說明具體做法。",
          "source": "https://cnews.com.tw/247260902a06/"
        },
        {
          "topic": "housing",
          "title": "加速關渡平原與社子島開發，督促都市計畫通盤更新",
          "detail": "2026 年 9 月登記參選時提出，報導未說明具體做法。",
          "source": "https://cnews.com.tw/247260902a06/"
        },
        {
          "topic": "education",
          "title": "爭取流浪教師獎勵機制，推動老少共學",
          "detail": "2026 年 9 月登記參選時提出，另提及完善早療與教育光譜系統；報導未說明具體做法。",
          "source": "https://cnews.com.tw/247260902a06/"
        },
        {
          "topic": "safety",
          "title": "爭取警消勤務加給，增加青年巡守隊及義警義消資源",
          "detail": "2026 年 9 月登記參選時提出，報導未說明具體做法。",
          "source": "https://cnews.com.tw/247260902a06/"
        }
      ],
      "record": [],
      "past": []
    },
    {
      "id": "tpc1-10",
      "identity": {
        "name": "陳慈慧",
        "party": "民主進步黨",
        "number": 4
      },
      "platforms": [
        {
          "topic": "education",
          "title": "育兒減工時措施納入職務代理津貼",
          "detail": "2026 年 4 月議會質詢中轉述民間團體建議：將雇主節省的成本轉為職務代理津貼，並提出普及率 15%（約 3.2 萬名家長受惠、預算約 6 億元）供主管機關考慮；同時指出試辦預算僅編 550 萬元、已不敷使用。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5404184"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案（含共同提案）156 件，以民政（36）、教育（33）、工務（26）類最多。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-tzu-hui-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案建請補助 65 歲以上長者假牙費用，以及長者、中低收入戶與視障者購置助聽設備。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-tzu-hui-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案建請敬老卡每月 480 點未用完可累計至下月，並放寬敬老卡搭台鐵範圍至北北桃任一車站。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-tzu-hui-taipei"
        },
        {
          "topic": "housing",
          "text": "參與提案建請加速推動社子島開發，並與中央主管機關溝通解決輕軌問題。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-tzu-hui-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案建請居家托育人員健康檢查納入專業醫師心理狀態評估，並試辦早療兒藝術治療課程補助。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-tzu-hui-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2014–2026",
          "elected": true,
          "result": "2022 年得票 15,611 票，當選",
          "note": "2022 年政見共 17 則，以下列出 6 則。",
          "promises": [
            {
              "topic": "housing",
              "title": "爭取社子島優惠拆遷補償、放寬配售資格",
              "status": "unknown",
              "note": "社子島開發 2026 年仍有爭議，補償與配售條件調整情形未查得",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2557"
            },
            {
              "topic": "environment",
              "title": "汰換老舊公園設施並設置共融式遊具",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2557"
            },
            {
              "topic": "economy",
              "title": "推動關渡平原開發或多元化使用",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2557"
            },
            {
              "topic": "welfare",
              "title": "爭取士林北投樂齡學堂、長青學苑",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2557"
            },
            {
              "topic": "welfare",
              "title": "整合學校閒置教室設立社區公托、公幼",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2557"
            },
            {
              "topic": "housing",
              "title": "爭取士林北投優先增設社會住宅與青年住宅",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2557"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數（含共同提案）",
              "value": "156 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-tzu-hui-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc1-11",
      "identity": {
        "name": "陳重文",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "welfare",
          "text": "參與提案擴大守望相助巡守隊員非因公傷亡慰問金的適用範圍，比照義警等人員的福利濟助規定。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-chung-wen-taipei"
        },
        {
          "topic": "governance",
          "text": "參與提案要求市府檢討各機關午休值班執行情形不一的問題。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-chung-wen-taipei"
        },
        {
          "topic": "governance",
          "text": "參與提案要求市府各機關的兩公約人權教育訓練由人事與公訓單位統一辦理。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-chung-wen-taipei"
        },
        {
          "topic": "governance",
          "text": "涉嫌在任內設立由他人出面的公司，利用職權使市府監視系統相關採購由該公司取得而圖利，一審依貪污治罪條例圖利及偽造文書等罪，判處不得易科罰金部分應執行有期徒刑 8 年 6 月、褫奪公權 6 年。本人否認圖利並提起上訴，二審審理中，尚未判決確定。",
          "source": "https://newtalk.tw/news/view/2026-09-23/1061344"
        },
        {
          "topic": "governance",
          "text": "2026 年 3 月因涉嫌在議會質詢中施壓市立動物園，將動物排遺處理改為委外，相關計畫由其實際負責的公司承作，經檢方訊問後依圖利罪嫌以 20 萬元交保，偵查中。本人表示會努力爭取清白。",
          "source": "https://udn.com/news/story/7321/9412653"
        },
        {
          "topic": "governance",
          "text": "涉嫌在 2024 年底地區農會理事長選舉前，與家人一同贈送禮盒給有投票權的理事。2026 年 3 月一審依農會法判處有期徒刑 5 月、得易科罰金，可上訴，尚未判決確定。",
          "source": "https://udn.com/news/story/7321/9379397"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "2022 年得票 13,606 票，當選",
          "note": "2022 年參選時已為現任地方民意代表。2022 年政見 14 項，以下列出 6 項。",
          "promises": [
            {
              "topic": "transport",
              "title": "爭取洲美快速道路福國段",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "safety",
              "title": "校園電子圍籬導入 AI 人臉辨識並消除校安監視死角",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "推動高齡運動中心並廣設高齡者在地運動教室",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "推動各區第二運動中心",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "規劃 0–6 歲早療補助新申請辦法並爭取 6–12 歲發展遲緩兒童早療補助",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "公車站牌全面設置 WiFi",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "65 件（民政 21、警衛 14、教育 11）",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-chung-wen-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc1-12",
      "identity": {
        "name": "陳怡潔",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "以就業、住宅、托育、創業等指標衡量青年政策並每年公布",
          "detail": "主張不以補助金額衡量青年政策成效，改設具體指標並逐年公開。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5546422"
        },
        {
          "topic": "economy",
          "title": "串連在地產業與大專院校，增加青年實習、跨域培訓與就業媒合",
          "detail": "串連在地人工智慧、金融、醫療、科技、新創產業與大專院校。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5546422"
        },
        {
          "topic": "housing",
          "title": "建立青年從租屋到購屋的居住階梯",
          "detail": "主張不只發放租金補貼，要讓青年能逐步從租屋走向購屋；未說明具體做法。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5546422"
        },
        {
          "topic": "education",
          "title": "增加夜間、假日臨托與寒暑假照顧服務",
          "detail": "補足寒暑假照顧缺口，並串聯圖書館、運動中心、親子館等公共資源。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5546422"
        },
        {
          "topic": "transport",
          "title": "北士科進駐前提早辦理並公開交通衝擊與商圈影響評估",
          "detail": "評估須提早進行並公開透明。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5595025"
        },
        {
          "topic": "transport",
          "title": "爭取社子線區域路網延伸串聯至石牌、榮總",
          "detail": "目的為改善就醫與通勤；未說明經費與期程。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5595025"
        },
        {
          "topic": "housing",
          "title": "社會住宅優先保留給北投、石牌在地醫療人員與青年",
          "detail": "",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5595025"
        },
        {
          "topic": "education",
          "title": "推動士林、北投成為人工智慧教育示範區",
          "detail": "未說明具體做法。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5595025"
        },
        {
          "topic": "transport",
          "title": "公開承德路與士商路口新路型評估報告並定期公布成效",
          "detail": "定期公布事故數、壅塞改善率、行人等待時間與民眾滿意度，蒐集在地意見滾動檢討。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5499415"
        }
      ],
      "record": [
        {
          "topic": "safety",
          "text": "擔任中央民意代表期間提案提高肇事逃逸刑責，致人於死者處 3 年以上 10 年以下有期徒刑。",
          "source": "https://zh.wikipedia.org/zh-tw/陳怡潔"
        },
        {
          "topic": "economy",
          "text": "擔任中央民意代表期間提案颱風假出勤的勞工應給付加倍工資。",
          "source": "https://zh.wikipedia.org/zh-tw/陳怡潔"
        },
        {
          "topic": "economy",
          "text": "擔任中央民意代表期間提案對不當使用替代役的機構處新臺幣 5 萬至 50 萬元罰鍰。",
          "source": "https://zh.wikipedia.org/zh-tw/陳怡潔"
        }
      ],
      "past": [
        {
          "role": "中央民意代表（政黨比例代表）",
          "period": "2013–2020",
          "elected": true,
          "result": "",
          "note": "2013 年遞補就任，2016 年連任。以政黨比例代表產生，沒有個人選舉公報政見可追蹤。",
          "promises": [],
          "rates": []
        },
        {
          "role": "參選中央民意代表（政黨比例代表）",
          "period": "2020",
          "elected": false,
          "result": "所屬政黨未達政黨票門檻，未當選",
          "note": "",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "tpc1-13",
      "identity": {
        "name": "林杏兒",
        "party": "中國國民黨",
        "number": 2
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "將北士科園區至捷運芝山站路線單獨規劃為一條捷運線",
          "detail": "2026 年 4 月於交通說明會提出，建議機廠設於現臺北市監理所用地。",
          "source": "https://www.cna.com.tw/news/aloc/202604070307.aspx"
        },
        {
          "topic": "transport",
          "title": "研議北士科停車空間，包括活化 T3、T4 土地及在蜆仔港公園設地下停車場",
          "detail": "2026 年 4 月於交通說明會提出；另建議研議讓基隆、桃園客運業者設置上下車點。",
          "source": "https://www.cna.com.tw/news/aloc/202604070307.aspx"
        },
        {
          "topic": "transport",
          "title": "北士科捷運路網延伸至天母",
          "detail": "未說明經費與期程。",
          "source": "https://www.ctee.com.tw/news/20260815700393-431208"
        },
        {
          "topic": "economy",
          "title": "持續爭取北士科二期開發與交通地下化",
          "detail": "未說明具體範圍與期程。",
          "source": "https://www.ctee.com.tw/news/20260815700393-431208"
        },
        {
          "topic": "welfare",
          "title": "推動坐月子與帶狀疱疹疫苗補助",
          "detail": "未說明補助金額。",
          "source": "https://www.ctee.com.tw/news/20260815700393-431208"
        },
        {
          "topic": "transport",
          "title": "爭取興建洲美幼兒園暨國中小停車場",
          "detail": "",
          "source": "https://www.ctee.com.tw/news/20260815700393-431208"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "參與提案將生育獎勵金提高為兩倍的新規定回溯至 2023 年 1 月 1 日生效。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-hsing-erh-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案補助 65 歲以上長者、中低收入戶及視障者購置助聽設備，並補助中低收入及身障者配鏡費用。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-hsing-erh-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案增加產後到府坐月子服務的公費補助，並研議產婦心理諮商補助。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-hsing-erh-taipei"
        },
        {
          "topic": "housing",
          "text": "多次參與提案要求市府加速社子島開發，並與中央協調區段徵收剔除原則。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-hsing-erh-taipei"
        },
        {
          "topic": "governance",
          "text": "參與提案依人口成長將北投區關渡里、奇岩里調整劃分為四里。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-hsing-erh-taipei"
        },
        {
          "topic": "economy",
          "text": "參與提案由青年事務主管機關設立單一平台，提供青年創業者場地租借補助與宣傳支持。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-hsing-erh-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "2022 年得票 16,369 票，當選",
          "note": "2022 年首度當選。",
          "promises": [
            {
              "topic": "economy",
              "title": "青年發展處升格為一級局處",
              "status": "done",
              "note": "市府已設青年事務一級機關（觀測站 2024 年起的提案即以該局為對象）；個人角色無法查證",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-hsing-erh-taipei"
            },
            {
              "topic": "welfare",
              "title": "推動 0 至 6 歲免費公托",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "補助 65 歲以上長者假牙",
              "status": "unknown",
              "note": "任內參與提案推動長者假牙費用全面補助，實施情形未查得",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-hsing-erh-taipei"
            },
            {
              "topic": "housing",
              "title": "積極參與及推動社子島開發案",
              "status": "in_progress",
              "note": "任內多次提案要求加速開發，2024 年仍有輕軌與區段徵收待協調",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-hsing-erh-taipei"
            },
            {
              "topic": "housing",
              "title": "老舊公寓公辦都更",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "打造寵物友善公園並推動寵物類健保制度",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "330 件（民政 86、工務 73、教育 56）",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-hsing-erh-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc1-14",
      "identity": {
        "name": "張斯綱",
        "party": "中國國民黨",
        "number": 14
      },
      "platforms": [
        {
          "topic": "education",
          "title": "改善教師勞動條件、減輕行政負擔並加速代理教師甄選",
          "detail": "2026 年 8 月回應教師短缺問題時於個人社群提出，另主張把資源用在留住教師；未說明經費與期程。",
          "source": "https://www.threads.com/@szukang_chang"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "參與提案調高 65 至 84 歲長者重陽敬老禮金至每人 3,000 元。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chang-ssu-kang-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案修正社區照顧關懷據點補助制度，建立可自給營運的長者共餐模式。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chang-ssu-kang-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案依物價指數調升弱勢老人安置補助。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chang-ssu-kang-taipei"
        },
        {
          "topic": "transport",
          "text": "參與提案檢討復康巴士愛心卡制度，取消車資門檻與扣點上限。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chang-ssu-kang-taipei"
        },
        {
          "topic": "governance",
          "text": "參與提案在 2025 年底前檢討鄰避設施回饋金分配方案並送議會審核。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chang-ssu-kang-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "2022 年得票 15,683 票，當選",
          "note": "2022 年參選時已為現任地方民意代表。",
          "promises": [
            {
              "topic": "transport",
              "title": "社區小巴接駁捷運",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "監督捷運環狀線北環段如期完工",
              "status": "unknown",
              "note": "未查得工程進度資料",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "懷孕婦女產檢與新生兒 6 個月內接種疫苗交通補助",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "二胎家庭優先入住社會住宅",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "爭取設置水樂園",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "降低公辦都更門檻並放寬容積獎勵",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "加速設置智慧垃圾回收站",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "385 件（民政 100、工務 74、教育 74）",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chang-ssu-kang-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc1-15",
      "identity": {
        "name": "賴苡任",
        "party": "中國國民黨",
        "number": 8
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾擔任轄區一項中央民意代表罷免案的召集人。",
          "source": "https://www.nownews.com/news/6784351"
        },
        {
          "topic": "governance",
          "text": "2025 年 6 月因涉嫌指導志工抄寫名冊、偽造罷免轄區兩位中央民意代表的提議人名冊，遭檢方依偽造文書、違反個人資料保護法等罪起訴。本人否認，表示並未參與造冊、未下指導，也未接觸黨員名冊。",
          "source": "https://www.cna.com.tw/news/asoc/202506160309.aspx"
        },
        {
          "topic": "governance",
          "text": "上述偽造罷免提議書案截至 2026 年 4 月仍由地方法院審理中，尚未判決；同案被起訴者中僅本人不認罪，並受限制出境。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5393887"
        }
      ],
      "past": []
    },
    {
      "id": "tpc1-16",
      "identity": {
        "name": "汪志冰",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "加速重要橋梁重置與延壽評估，優先改善士林、北投老舊高車流橋梁",
          "detail": "2026 年 5 月指出全市 283 座重要橋梁 85% 橋齡逾 30 年、士林北投占半數，要求主管機關優先對高齡、高車流及跨河橋梁提出改善、重建或延壽計畫與期程。",
          "source": "https://tcc9105.tcc.gov.tw/News_Content.aspx?n=E21989810C9BE6D7&sms=7CA7BDAC33DBE343&s=EBC44691F8E13833"
        },
        {
          "topic": "transport",
          "title": "建請中央提高通用計程車補助與獎勵",
          "detail": "2026 年 5 月提出：提高含設備新車購置補助、研議舊車加裝補助、降低基本趟次門檻、調高單趟獎勵金，並對服務 5 年以上駕駛提供久任獎勵。",
          "source": "https://tcc9105.tcc.gov.tw/News_Content.aspx?n=E21989810C9BE6D7&sms=7CA7BDAC33DBE343&s=91E95FE163D8323A"
        },
        {
          "topic": "safety",
          "title": "從 65 歲起提前介入高齡駕駛風險管理",
          "detail": "2026 年 8 月提出：擴大安駕課程宣導管道至醫療院所、社區大學，研議將參訓與交通優惠結合；交通、警察與監理單位建立跨機關事故分析追蹤機制。",
          "source": "https://tcc9105.tcc.gov.tw/News_Content.aspx?n=E21989810C9BE6D7&sms=7CA7BDAC33DBE343&s=7FB6992B85BDEA3D"
        },
        {
          "topic": "education",
          "title": "提出教師留任方案並爭取教師首都加給",
          "detail": "2026 年 7 月提出：減輕行政負擔、完善教師權益保障、改善工作環境。",
          "source": "https://tcc9105.tcc.gov.tw/News_Content.aspx?n=E21989810C9BE6D7&sms=7CA7BDAC33DBE343&s=3080F37088675132"
        },
        {
          "topic": "welfare",
          "title": "生育獎勵金增設續留年限，防止領取後遷出",
          "detail": "2026 年 8 月提出，並建議跨局處檢討助婚政策、研議提高優惠租金住宅的優惠，以及獎勵商辦大樓設立托育中心。",
          "source": "https://tcc9105.tcc.gov.tw/News_Content.aspx?n=E21989810C9BE6D7&sms=7CA7BDAC33DBE343&s=783BCF4522E9F654"
        }
      ],
      "record": [
        {
          "topic": "environment",
          "text": "2026 年 8 月指出全市 88 處抽水站中有 18 處、88 台機組超過 27 年耐用年限，要求市府盤點並提出汰換期程與預算，同時檢討抽排水設計標準。",
          "source": "https://tcc9105.tcc.gov.tw/News_Content.aspx?n=E21989810C9BE6D7&sms=7CA7BDAC33DBE343&s=209945F9774B3BCD"
        },
        {
          "topic": "transport",
          "text": "2026 年 9 月指出路面人孔蓋約七成未做抗滑處理，要求市府全面清查、建立圖資與定期檢測制度並提出改善期程。",
          "source": "https://tcc9105.tcc.gov.tw/News_Content.aspx?n=E21989810C9BE6D7&sms=7CA7BDAC33DBE343&s=7C02F7055CDA951A"
        },
        {
          "topic": "housing",
          "text": "2025 年 12 月指出老舊公寓增設電梯推動 11 年僅約 2% 取得雜項執照，要求主管機關訂定年度輔導目標，並研議取消法定車位代金。",
          "source": "https://tcc9105.tcc.gov.tw/News_Content.aspx?n=E21989810C9BE6D7&sms=7CA7BDAC33DBE343&s=C36F487A80E28A51"
        },
        {
          "topic": "welfare",
          "text": "參與提案將敬老卡點數改為以年計算、可跨月累計，並擴大適用場館與交通工具。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wang-chih-ping-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案因應停課造成的居家臨時托育費用提供補助。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wang-chih-ping-taipei"
        },
        {
          "topic": "welfare",
          "text": "恢復重陽敬老金、爭取預算改建國小危樓、推動營養午餐加碼補助（本人說法）。",
          "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "1998–2026",
          "elected": true,
          "result": "2022 年得票 18,450 票，當選",
          "note": "已連任 6 屆。以下為 2022 年政見中的 6 項。",
          "promises": [
            {
              "topic": "housing",
              "title": "加速關渡平原開發",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "督促市府放寬都更法令限制並提高誘因",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "持續擴大士林、北投 YouBike 覆蓋率",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "增建公宅、放寬申請條件、降低租金",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "education",
              "title": "繼續增加公立幼兒園班級數",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "economy",
              "title": "調高青年就學及創業貸款額度並降低利率",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "128 件（民政 35、工務 27、教育 26）",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wang-chih-ping-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc1-17",
      "identity": {
        "name": "劉致妤",
        "party": "無黨籍",
        "number": 7
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "關注長者照顧、兒童托育與弱勢家庭",
          "detail": "以社工專業與基層服務經驗問政；未提出具體做法",
          "source": "https://www.nownews.com/news/6872415"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "在地方民意代表服務處處理會勘、提案、質詢稿撰寫與協調會，前後 8 年（本人說法）。",
          "source": "https://stars.udn.com/star/story/10089/9736338"
        },
        {
          "topic": "welfare",
          "text": "協助一名高齡陳情長者及其持身心障礙證明的子女，長者過世後持續追蹤其子女（本人說法）。",
          "source": "https://stars.udn.com/star/story/10089/9736338"
        }
      ],
      "past": []
    },
    {
      "id": "tpc1-18",
      "identity": {
        "name": "林延鳳",
        "party": "民主進步黨",
        "number": 19
      },
      "platforms": [
        {
          "topic": "safety",
          "title": "全面檢討豪雨應變並提出改善方案與時程",
          "detail": "2026 年 6 月提出：檢討大型抽水設備預先部署、防災平台運作、災情資訊公開及應變流程。",
          "source": "https://news.pchome.com.tw/politics/cnews/20260629/index-78271562714082227001.html"
        },
        {
          "topic": "environment",
          "title": "市府對北士科供電提出自身方案，不必堅持變電所全面地下化",
          "detail": "2026 年 5 月提出，並要求產業主管機關處理進駐廠商反映的電力需求。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5453123"
        },
        {
          "topic": "environment",
          "title": "公開行道樹修剪、移植與砍除紀錄並檢討樹木列管制度",
          "detail": "2026 年 7 月於議會發言提出，並要求說明砍樹認定標準。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5507493"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "參與提案保障收養家庭試養期子女優先登記公托、公幼及非營利幼兒園，免設籍限制。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-yen-feng-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案統一補助與輔導私立托育，改善托育人員薪資落差。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-yen-feng-taipei"
        },
        {
          "topic": "governance",
          "text": "參與提案盤點市府為民服務機關與公營場館，提供多元生理用品與相關友善服務。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-yen-feng-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案開放敬老卡點數支付部分醫療院所健保門診部分負擔。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-yen-feng-taipei"
        },
        {
          "topic": "economy",
          "text": "參與提案建立媒合平台活化公有建物，以合理租金或租金補助提供青年創業團體使用。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-yen-feng-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "2022 年得票 23,427 票，當選",
          "note": "2022 年首度當選。2022 年政見約 23 項，以下列出 7 項。",
          "promises": [
            {
              "topic": "economy",
              "title": "推動成立青年事務專責局處",
              "status": "done",
              "note": "市府已設青年事務一級機關（觀測站 2024 年提案即以該局為對象）；個人角色無法查證",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-yen-feng-taipei"
            },
            {
              "topic": "welfare",
              "title": "增加公托據點並社區化",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "推動 30 歲以上凍卵補助",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "補助 65 歲以上長者免費裝假牙",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "加速興建捷運環狀線北環段",
              "status": "unknown",
              "note": "未查得工程進度資料",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "運用大數據與 AI 動態號誌系統",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "整建住宅列為優先公辦都市更新區域",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "243 件（民政 65、教育 47、工務 44）",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-yen-feng-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc1-19",
      "identity": {
        "name": "林聖峰",
        "party": "天宙和平統一家庭黨",
        "number": 17
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "tpc1-20",
      "identity": {
        "name": "侯漢廷",
        "party": "新黨",
        "number": 11
      },
      "platforms": [
        {
          "topic": "governance",
          "title": "以資源配置效率檢視市府補助與公共服務",
          "detail": "檢視長照、社會住宅、兒童醫療補助、企業補助、公有場館與傳統市場營運的制度誘因，優先尋找不增加公帑的作法",
          "source": "https://ctinews.com/news/items/14a12vdRxk"
        },
        {
          "topic": "economy",
          "title": "檢討市府對大型企業的節能設備與 ESG 輔導補助",
          "detail": "認為大型企業本會自行汰換設備，補助未必增加節能效果",
          "source": "https://ctinews.com/news/items/14a12vdRxk"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "參與提案因應北士科開發與人口成長，研議在轄區高中附設國中部。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/hou-han-ting-taipei"
        },
        {
          "topic": "transport",
          "text": "參與提案在天母運動園區及士東國小下方興建地下停車場。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/hou-han-ting-taipei"
        },
        {
          "topic": "safety",
          "text": "參與提案將教保機構監視影像保存期限延長至 90 日，並提高幼兒園教室監視器裝設比例。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/hou-han-ting-taipei"
        },
        {
          "topic": "education",
          "text": "參與提案擴大清寒學生早餐補助至國中、高中職，並改善餐點發送方式。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/hou-han-ting-taipei"
        },
        {
          "topic": "safety",
          "text": "參與提案提供校園新興毒品快篩試劑，並要求各校安裝瓦斯偵測設備。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/hou-han-ting-taipei"
        },
        {
          "topic": "environment",
          "text": "參與提案要求大型室內體育館的漏水問題導入第三方勘驗，並成立營運績效評估委員會。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/hou-han-ting-taipei"
        },
        {
          "topic": "housing",
          "text": "推動對建商課徵囤房稅、社宅租金合理化、增設停車空間與纜線地下化（本人說法）。",
          "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
        },
        {
          "topic": "economy",
          "text": "調閱資料指出市府 ESG 輔導及節能設備補助對象包含跨國保險公司與金控等大型企業，最高補助 300 萬元。",
          "source": "https://ctinews.com/news/items/14a12vdRxk"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "2022 年得票 17,253 票，當選",
          "note": "2022 年參選時已為現任地方民意代表。2022 年政見依局處分 8 類，以下列出 6 項。",
          "promises": [
            {
              "topic": "welfare",
              "title": "提高生育獎勵金",
              "status": "done",
              "note": "市府 2023 年將生育獎勵金提高為兩倍（觀測站同期提案可見）；個人角色無法查證",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-hsing-erh-taipei"
            },
            {
              "topic": "housing",
              "title": "針對單一自住房屋與公益出租人訂定差異化房屋稅率",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "education",
              "title": "擴增公共化幼兒園並增加私幼補助",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "盡速完成北投浩然敬老院與士林陽明教養院中繼安置",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "加強士林北投防洪排水、箱涵疏浚與污水下水道",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/01臺北市/臺北市第01選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "於公園及學校興建地下停車場",
              "status": "in_progress",
              "note": "任內持續提案於天母運動園區、士東國小興建地下停車場，執行情形未查得",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/hou-han-ting-taipei"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "263 件（教育 60、警衛 50、工務 49）",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/hou-han-ting-taipei"
            }
          ]
        }
      ]
    }
  ]
});

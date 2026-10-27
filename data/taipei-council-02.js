/*
 * 2026 臺北市議員第 2 選區市議員（內湖區、南港區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-14。候選人名單依臺北市選舉委員會公布之「115 年直轄市議員選舉候選人登記」名單
 * （經三立新聞網 https://www.setn.com/news/1901722 與 ETtoday https://www.ettoday.net/news/20260904/3231797.htm 轉載，
 * 人數經中央社 https://cna.com.tw/news/aipl/202609040292.aspx 確認；13 人，應選 9 席）。
 * 審定名單 10/16 公告、號次原訂 10/23 抽籤，因颱風薔琵臺北市 10/23 停止上班，依北市選委會公告改於 10/27 抽籤（https://www.cna.com.tw/news/aloc/202610210175.aspx、https://www.cna.com.tw/news/aloc/202610220375.aspx），抽籤後請補上 identity.number（2026-10-25 註）。
 * 不確定處：第 13 位候選人的推薦政黨，三立寫「永久和平自然」、ETtoday 寫「永久和平自然法」，未能查得政黨全名，暫用後者。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」取自議會官網議員介紹頁（2022 年政見）或選舉公報；提案數取自報導者觀測站。
 * 報導者觀測站列出的提案多為多位議員共同提出，因此寫「參與提案」。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 已知缺漏：第二輪補查（2026-10-14）後，何恕懷、黃啟彬仍查無可收錄資料；多數現任議員的 2026 年政見未見於新聞報導。
 * 第三輪補查（2026-10-14）：陳宥丞補上政黨候選人介紹頁政見，陳又新、何恕懷補上報導中的政見；黃啟彬仍查無資料，
 *   其他現任者 2026 年政見仍未查得。
 * 2026-10-19 第四輪補查：新增 12 則政見、2 則經歷（政見附加於陣列尾端；現任者 2026 年議會質詢中的具體要求也收為政見）。
 *   已知缺漏（仍查無 2026 年政見）：吳世正、黃啟彬。
 * 號次：10/27 已抽籤，但整理時（2026-10-27）尚未查得本選區的抽籤結果，number 暫為 null。
 */
window.ELECTION_DATA.races.push({
  "id": "taipei-council-02",
  "region": "臺北市",
  "office": "第 2 選區市議員",
  "area": "內湖區、南港區",
  "seats": 9,
  "note": "議員政見整理自候選人公開資料、議會官網、選舉公報與新聞報導（截至 2026-10-14）。2026 年選舉公報尚未發布，多數候選人查無公開的 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現。",
  "candidates": [
    {
      "id": "tpc2-1",
      "identity": {
        "name": "吳欣岱",
        "party": "台灣基進",
        "number": null
      },
      "platforms": [
        {
          "topic": "safety",
          "title": "監督通學步道計畫確實達標，並實地檢驗施工品質",
          "detail": "確保學童上下學安全",
          "source": "https://taiwangogo.tw/wu-hsin-tai/"
        },
        {
          "topic": "transport",
          "title": "盤點醫療院所周邊通道，清除障礙、拓寬人行道、改善路口視距",
          "detail": "",
          "source": "https://taiwangogo.tw/wu-hsin-tai/"
        },
        {
          "topic": "housing",
          "title": "針對高風險建築設立單一協助窗口，主動進行結構鑑定與預防性補強",
          "detail": "由市府主動介入",
          "source": "https://taiwangogo.tw/wu-hsin-tai/"
        },
        {
          "topic": "safety",
          "title": "盤點轄區防空避難場所的日常維護管理",
          "detail": "確保極端狀況下避難設施可正常運作",
          "source": "https://taiwangogo.tw/wu-hsin-tai/"
        },
        {
          "topic": "education",
          "title": "推動設立臺北市第一所臺語實驗小學",
          "detail": "",
          "source": "https://taiwangogo.tw/wu-hsin-tai/"
        },
        {
          "topic": "education",
          "title": "地名英譯以本土語言優先，並為文化景點製作本土語言導覽資訊",
          "detail": "建立本土語言的語言景觀",
          "source": "https://taiwangogo.tw/wu-hsin-tai/"
        }
      ],
      "record": [],
      "past": [
        {
          "role": "參選中央民意代表",
          "period": "2024",
          "elected": false,
          "result": "得票 11.15%，未當選",
          "note": "當時政見未收錄（未取得該次選舉公報）。",
          "promises": [],
          "rates": []
        },
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "得票 4.94%，未當選",
          "note": "得票率取自維基百科整理之中選會結果。",
          "promises": [
            {
              "topic": "welfare",
              "title": "保障醫療人員勞動權益與醫護人力合理性",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第02選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "完善托育機構及居家托育稽核人力，推動 0–12 歲公共托育服務",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第02選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "引進青銀共照與托幼托老共構模式，健全在地醫療環境",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第02選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "以人本原則重新檢討交通設計及行人路權",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第02選舉區.pdf"
            },
            {
              "topic": "safety",
              "title": "落實全民防衛，監督民防預算",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第02選舉區.pdf"
            },
            {
              "topic": "safety",
              "title": "杜絕中國代理人入侵，對抗認知作戰",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第02選舉區.pdf"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "tpc2-2",
      "identity": {
        "name": "李明賢",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "擴大忠孝西路開放機車通行時段",
          "detail": "現行只在 23 時至隔日 6 時開放機車通行。2026 年 5 月議會質詢引用開放後車禍件數下降的數據，要求擴大開放時段，並要求交通主管機關一個月內答覆是否開放。",
          "source": "https://news.ltn.com.tw/news/Taipei/paper/1754433"
        },
        {
          "topic": "welfare",
          "title": "重新檢視社會住宅準公托保母的托育限制，保障保母工作權",
          "detail": "2026 年 3 月以質詢資料指出，準公托保母受政府管理、評鑑與補助，和商業營利不同，建議市府重新檢視是否適用社宅禁止營利等規範。",
          "source": "https://www.cna.com.tw/news/aloc/202603040266.aspx"
        },
        {
          "topic": "governance",
          "title": "檢討環保裁罰的行政救濟與強制執行流程，追回未繳罰款",
          "detail": "2026 年 9 月書面質詢指出環保裁罰呆帳約 3 億元，要求檢討行政救濟與強制執行流程；同時指出稽查人力不足、待遇偏低。",
          "source": "https://www.cna.com.tw/news/aloc/202609250128.aspx"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "參與提案建請市府將 65 至 84 歲長者重陽敬老禮金由每人 1,500 元調高至 3,000 元。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/li-ming-hsien-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案建請敬老卡當月未用完點數可累積至下月合併使用。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/li-ming-hsien-taipei"
        },
        {
          "topic": "governance",
          "text": "參與提案建請里鄰建設服務經費由每里 30 萬元提高至 35 萬元，並定期檢討。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/li-ming-hsien-taipei"
        },
        {
          "topic": "transport",
          "text": "參與提案建請 YouBike 2.0E 比照 2.0 前 30 分鐘免費並納入敬老卡優惠。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/li-ming-hsien-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2018–2026",
          "elected": true,
          "result": "",
          "note": "2022 年得票 10.02%。以下為 2022 年政見。",
          "promises": [
            {
              "topic": "transport",
              "title": "加速捷運東環段與民生汐止線動工，施工期間強化交通維持",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2565"
            },
            {
              "topic": "transport",
              "title": "爭取拓寬港湖聯外道路與興建港墘大橋",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2565"
            },
            {
              "topic": "transport",
              "title": "檢討放寬機車限制，爭取公共場所參建停車場",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2565"
            },
            {
              "topic": "environment",
              "title": "加速興建新動物之家，推廣寵物活動公園",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2565"
            },
            {
              "topic": "housing",
              "title": "危樓、海砂屋優先更新並簡化都更流程",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2565"
            },
            {
              "topic": "welfare",
              "title": "恢復重陽敬老金",
              "status": "done",
              "note": "2025 年議會提案文字顯示 65 至 84 歲長者現行禮金每人 1,500 元，已恢復發放；屬市府政策，個人角色無法查證",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/li-ming-hsien-taipei"
            },
            {
              "topic": "welfare",
              "title": "增加公立及非營利幼兒園名額、提高生育獎勵金",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2565"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "240 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/li-ming-hsien-taipei"
            },
            {
              "label": "本屆提案議題分布（前三名）",
              "value": "民政 60、工務 51、教育 51",
              "by": "報導者觀測站（一案可歸入多個議題）",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/li-ming-hsien-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc2-3",
      "identity": {
        "name": "陳冠安",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "在商圈、公園、交通節點與年輕人口多的社區設置智慧垃圾桶，取代傳統公共垃圾桶",
          "detail": "落實使用者付費，並增設多元支付方式",
          "source": "https://news.tvbs.com.tw/politics/3103824"
        },
        {
          "topic": "environment",
          "title": "市府同步設置智慧回收箱，回收玻璃、乾電池、塑膠可獲回饋點數",
          "detail": "點數可折抵智慧垃圾桶使用費",
          "source": "https://news.tvbs.com.tw/politics/3103824"
        }
      ],
      "record": [],
      "past": []
    },
    {
      "id": "tpc2-4",
      "identity": {
        "name": "高嘉瑜",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "重建港墘橋或增設聯外橋梁",
          "detail": "連接敬業三路與塔悠路、跨越基隆河，分擔成功橋廊道車流",
          "source": "https://udn.com/news/story/124652/9573650"
        },
        {
          "topic": "transport",
          "title": "加速捷運東環段完工，並建立內科快速公車與接駁系統",
          "detail": "內湖科技園區每日通勤人口近 20 萬人（本人說法）",
          "source": "https://udn.com/news/story/124652/9573650"
        },
        {
          "topic": "transport",
          "title": "優化國道匝道與聯外道路，增設轉乘停車場（P+R）並導入智慧交通管理系統",
          "detail": "另推動企業彈性上下班制度",
          "source": "https://udn.com/news/story/124652/9573650"
        },
        {
          "topic": "housing",
          "title": "推動中南街再造更新與老舊建物整合",
          "detail": "改善當地生活空間",
          "source": "https://udn.com/news/story/124652/9521926"
        },
        {
          "topic": "environment",
          "title": "推動誠正國中前高鐵引道地下化，以公園綠地取代隔開社區與學校的高牆",
          "detail": "主張東區門戶計畫應完整推動",
          "source": "https://udn.com/news/story/124652/9521926"
        },
        {
          "topic": "welfare",
          "title": "誠正國中周邊的社福長照 BOT 規劃結合鄰近文化廊道",
          "detail": "串聯南港瓶蓋工廠的歷史空間與步行動線",
          "source": "https://udn.com/news/story/124652/9521926"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "擔任地方民意代表期間將內湖聯合開發案送監察院，糾正後追回逾百億元（本人說法）。",
          "source": "https://eebulletin.cec.gov.tw/107/02臺北市/02市議員/臺北市第02選舉區.pdf"
        },
        {
          "topic": "environment",
          "text": "爭取第二座狗運動公園、改善動物之家環境、打造櫻花林步道與生態公園、共融式遊具（本人說法）。",
          "source": "https://eebulletin.cec.gov.tw/107/02臺北市/02市議員/臺北市第02選舉區.pdf"
        },
        {
          "topic": "housing",
          "text": "推動南港產業生活特定專用區（本人說法）。",
          "source": "https://eebulletin.cec.gov.tw/107/02臺北市/02市議員/臺北市第02選舉區.pdf"
        }
      ],
      "past": [
        {
          "role": "參選中央民意代表",
          "period": "2024",
          "elected": false,
          "result": "得票 40.24%，未當選",
          "note": "當時政見未收錄（未取得該次選舉公報）。",
          "promises": [],
          "rates": []
        },
        {
          "role": "中央民意代表",
          "period": "2020–2024",
          "elected": true,
          "result": "得票 50.12%",
          "note": "2020 年選舉公報未取得，政見未收錄。",
          "promises": [],
          "rates": []
        },
        {
          "role": "地方民意代表",
          "period": "2010–2020",
          "elected": true,
          "result": "",
          "note": "2020 年 1 月轉任中央民意代表。以下為 2018 年政見。",
          "promises": [
            {
              "topic": "transport",
              "title": "力拚捷運東環段核定後 10 年內完工",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://eebulletin.cec.gov.tw/107/02臺北市/02市議員/臺北市第02選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "推動共享運具與跳蛙公車，改善港湖塞車",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://eebulletin.cec.gov.tw/107/02臺北市/02市議員/臺北市第02選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "老舊工業區轉型住商使用免回饋樓板面積",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://eebulletin.cec.gov.tw/107/02臺北市/02市議員/臺北市第02選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "增設公立幼兒園、親子館、平價托嬰中心並建立公共保母資訊平台",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://eebulletin.cec.gov.tw/107/02臺北市/02市議員/臺北市第02選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "廣設公共住宅並優先租給在地工作青年及小家庭",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://eebulletin.cec.gov.tw/107/02臺北市/02市議員/臺北市第02選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "內湖焚化廠轉型為文創保育區",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://eebulletin.cec.gov.tw/107/02臺北市/02市議員/臺北市第02選舉區.pdf"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "tpc2-5",
      "identity": {
        "name": "王孝維",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "提高生育補助，第三胎補助提高至 100 萬元",
          "detail": "2026 年 4 月議會委員會審查時主張市府加碼鼓勵結婚生育，認為現行第一胎補助 4 萬元太少；未說明財源。",
          "source": "https://udn.com/news/story/7266/9459711"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "參與提案建請市府提高清寒學童早餐補助餐費預算並改善餐點發送方式。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wang-hsiao-wei-taipei"
        },
        {
          "topic": "education",
          "text": "參與提案建請將關渡自然公園列為國中小校外教學指定地點，推動濕地生態教育。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wang-hsiao-wei-taipei"
        },
        {
          "topic": "governance",
          "text": "2026 年 4 月以議會委員會召集人身分，要求政風單位就京華城案提出檢討報告。",
          "source": "https://www.cna.com.tw/news/aloc/202604210176.aspx"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "2006–2018 年間曾任三屆地方民意代表。2022 年得票 6.73%，政見共 15 項，以下列出 7 項。",
          "promises": [
            {
              "topic": "economy",
              "title": "強化勞動局就業媒合，提供失業者多元就業輔導",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2568"
            },
            {
              "topic": "environment",
              "title": "打造白石湖園區及南港茶葉文化園區",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2568"
            },
            {
              "topic": "environment",
              "title": "推動關閉內湖焚化爐，改設環保博物館",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2568"
            },
            {
              "topic": "housing",
              "title": "增建青年社會住宅並訂定青年可負擔租金",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2568"
            },
            {
              "topic": "safety",
              "title": "推動瓦斯儲存槽遷離住宅區，監督老舊瓦斯管線汰換",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2568"
            },
            {
              "topic": "welfare",
              "title": "公立醫院 65 歲以上免收掛號費，社宅增設長者入住專區",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2568"
            },
            {
              "topic": "welfare",
              "title": "閒置小學校舍改設托育中心，提供凍卵補助",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2568"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "270 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wang-hsiao-wei-taipei"
            },
            {
              "label": "本屆提案議題分布（前三名）",
              "value": "教育 62、民政 60、工務 48",
              "by": "報導者觀測站（一案可歸入多個議題）",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wang-hsiao-wei-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc2-6",
      "identity": {
        "name": "游淑慧",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "safety",
          "title": "成功路四段邊坡崩落後，一併檢測鄰近社區邊坡裂縫並整治",
          "detail": "2026 年 6 月豪雨造成土石崩落後，請工程主管機關檢測鄰近社區邊坡，有裂縫就一併處理；並說明將進行坡面修整、自鑽式岩釘、掛網噴漿及水平排水管等工程，市府預估兩個月完成。",
          "source": "https://news.nextapple.com/life/20260626/E1C73D48145002164A9AD42B9C9E26E0"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "參與提案因應北士科開發，建請研議籌設中正高中附設國中部。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/yu-shu-hui-taipei"
        },
        {
          "topic": "governance",
          "text": "參與提案建請體育局盡速與承包商研擬大巨蛋周邊社區睦鄰經費編列發放。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/yu-shu-hui-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2018–2026",
          "elected": true,
          "result": "",
          "note": "2022 年得票 10.95%。以下為 2022 年政見。",
          "promises": [
            {
              "topic": "environment",
              "title": "加速老舊地下水管汰換",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2563"
            },
            {
              "topic": "safety",
              "title": "提高醫院、學校周邊人行道更新預算",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2563"
            },
            {
              "topic": "environment",
              "title": "鄰里公園全面改造",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2563"
            },
            {
              "topic": "transport",
              "title": "捷運東環段、民生汐止線全速推動",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2563"
            },
            {
              "topic": "welfare",
              "title": "增加公托公幼比例，提高私立補助",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2563"
            },
            {
              "topic": "transport",
              "title": "提案恢復 YouBike 2.0 前 30 分鐘免費",
              "status": "done",
              "note": "2025 年議會提案文字以「YouBike 2.0 前 30 分鐘免費」為現行措施；屬市府政策，個人角色無法查證",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/li-ming-hsien-taipei"
            },
            {
              "topic": "transport",
              "title": "學校改建全面加設停車場",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2563"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "207 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/yu-shu-hui-taipei"
            },
            {
              "label": "本屆提案議題分布（前三名）",
              "value": "教育 50、民政 42、工務 42",
              "by": "報導者觀測站（一案可歸入多個議題）",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/yu-shu-hui-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc2-7",
      "identity": {
        "name": "何孟樺",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "儘速訂定吸菸區設置標準，戶外吸菸區改以屏風式阻絕二手菸",
          "detail": "2026 年 9 月市政總質詢要求儘速完成吸菸區設置標準規範，市府 App 上的吸菸區地圖要在 10 月大型禁菸活動前改善、標示禁菸範圍；建議戶外非封閉式吸菸區以屏風式為主，並質疑綠籬式吸菸區植栽約 3 個月就枯黃、維護成本過高。",
          "source": "https://www.cna.com.tw/news/aloc/202609030279.aspx"
        },
        {
          "topic": "environment",
          "title": "訂定河濱大型音樂活動的重低音使用準則",
          "detail": "2026 年 6 月一場河濱音樂活動的重低音影響約 6 公里外居民後，建議市府找專家與業者研議減少共鳴與迴音，並訂定使用準則。",
          "source": "https://www.cna.com.tw/news/aloc/202606140106.aspx"
        },
        {
          "topic": "housing",
          "title": "南港機廠社會住宅電梯限期完成第三方總體檢並維修",
          "detail": "2026 年 5 月 25 日質詢時要求都市發展主管機關在 6 月 9 日前完成第三方總體檢、三個月內維修完畢，並主動向住戶公開過去的維修紀錄。",
          "source": "https://www.threads.com/@taipeihmh/post/DZKPDKRk-E5/"
        },
        {
          "topic": "welfare",
          "title": "保障入住社會住宅的準公托保母在家托育",
          "detail": "2026 年 3 月以質詢資料指出，保母依托育準公共契約合法登記，社宅契約也沒有把托育當成違規使用房屋，認為市府禁止托育的認定與事實不符。",
          "source": "https://www.cna.com.tw/news/aloc/202603040266.aspx"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "參與提案建請市府推動 65 歲以上長者假牙費用全面補助。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/ho-meng-hua-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案建請生育獎勵金對早產兒以預產期作為出生日認定。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/ho-meng-hua-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案建請保障收養家庭試養期子女優先登記公托、公幼及非營利幼兒園，免設籍限制。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/ho-meng-hua-taipei"
        },
        {
          "topic": "governance",
          "text": "參與提案建請修正檢舉貪污瀆職案件獎勵要點，提高檢舉獎金並放寬領獎標準。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/ho-meng-hua-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "2022 年得票 9.38%。",
          "promises": [
            {
              "topic": "economy",
              "title": "增設觀光資訊站，推動深度旅遊",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2566"
            },
            {
              "topic": "welfare",
              "title": "增設公托及非營利幼兒園、長者日托與共餐服務",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2566"
            },
            {
              "topic": "safety",
              "title": "盤點港湖街區照明，監督監視器增設",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2566"
            },
            {
              "topic": "environment",
              "title": "落實電線桿地下化",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2566"
            },
            {
              "topic": "transport",
              "title": "以大數據改善紅綠燈秒數與公車班次",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2566"
            },
            {
              "topic": "transport",
              "title": "檢討路口兩段式左轉，落實車向分道",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2566"
            },
            {
              "topic": "housing",
              "title": "監督社會住宅興建與包租代管",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2566"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "267 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/ho-meng-hua-taipei"
            },
            {
              "label": "本屆提案議題分布（前三名）",
              "value": "民政 67、教育 64、工務 44",
              "by": "報導者觀測站（一案可歸入多個議題）",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/ho-meng-hua-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc2-8",
      "identity": {
        "name": "陳宥丞",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "增設夜間與假日臨時托育",
          "detail": "活化老舊校舍閒置空間設置公共托育",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "welfare",
          "title": "托育監視器影像雲端備援，提升教保員薪資",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "environment",
          "title": "遊戲場加裝遮陽降溫設施，公園嚴格落實禁菸",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "housing",
          "title": "社宅輪候制改為一次選填",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "housing",
          "title": "聯合開發宅不出售，優先作為都更中繼住宅",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "housing",
          "title": "都更設專人輔導，擴大老屋電梯與管線修繕補助",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "housing",
          "title": "加碼育兒家庭租金補貼",
          "detail": "並補助社區外牆修繕與充電樁安全檢查",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "economy",
          "title": "補助傳統市場轉型符合法規",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "education",
          "title": "校園增設風雨球場",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "welfare",
          "title": "擴充公辦早療據點與療育課程，提高早療人員待遇",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "welfare",
          "title": "增設負壓吸菸室，心理衛教推廣至校園與里鄰",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "safety",
          "title": "簡化詐騙通報流程，市有場館售票實施實名制",
          "detail": "遏止黃牛",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "safety",
          "title": "補助採購毒品快篩試劑，高風險區加強防毒",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "environment",
          "title": "整合動物救援夜間醫療，定期清除公園外來種",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "welfare",
          "title": "敬老卡點數擴大用於看診、運動與休閒",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "welfare",
          "title": "普設長輩肌力訓練據點",
          "detail": "預防肌少症與跌倒",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "welfare",
          "title": "健康存摺 APP 導入 AI",
          "detail": "整理醫囑並遠距提醒家屬",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "transport",
          "title": "專案改善內湖成功園環路型",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "transport",
          "title": "爭取捷運信義線東延至南港公園與中研院",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "transport",
          "title": "更新內湖、南港聯外橋梁與人行環境，改善河濱自行車道",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "transport",
          "title": "導入歐規清晰路牌，簡化交通標誌",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "education",
          "title": "完善校園投訴分流機制",
          "detail": "保障師生權益",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "education",
          "title": "調降師生比，提高鐘點費與首都加給",
          "detail": "並建立家長緊急聯繫管道",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        },
        {
          "topic": "education",
          "title": "校園巡迴推廣媒體識讀、防霸凌與性平教育",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=172"
        }
      ],
      "record": [
        {
          "topic": "economy",
          "text": "參與提案建請推動電影委員會委員交錯任期制及總監任期制。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-yu-cheng-taipei"
        },
        {
          "topic": "education",
          "text": "參與提案建請教育局訂定各級學校網站設置性別平等教育專區的指引。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-yu-cheng-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "2022 年得票 12.57%。",
          "promises": [
            {
              "topic": "housing",
              "title": "設立都更諮詢中心並至里辦公處巡迴座談",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2562"
            },
            {
              "topic": "housing",
              "title": "興建都更中繼宅",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2562"
            },
            {
              "topic": "welfare",
              "title": "擴大公托覆蓋率，建立社區保母平台",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2562"
            },
            {
              "topic": "welfare",
              "title": "公私協力增設日間照顧中心及住宿型安養機構",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2562"
            },
            {
              "topic": "safety",
              "title": "推動內湖六座瓦斯槽遷址",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2562"
            },
            {
              "topic": "environment",
              "title": "建立動保視訊 119 APP",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2562"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "252 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-yu-cheng-taipei"
            },
            {
              "label": "本屆提案議題分布（前三名）",
              "value": "教育 57、民政 53、工務 51",
              "by": "報導者觀測站（一案可歸入多個議題）",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-yu-cheng-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc2-9",
      "identity": {
        "name": "何恕懷",
        "party": "新黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "運用 AI 與科技改善市區交通壅塞",
          "detail": "",
          "source": "https://news.ltn.com.tw/news/Taipei/breakingnews/5560782"
        }
      ],
      "record": [],
      "past": []
    },
    {
      "id": "tpc2-10",
      "identity": {
        "name": "闕枚莎",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "education",
          "title": "建立營養午餐成本調整、流標預警、備援供餐與固定協商四項機制",
          "detail": "2026 年 7 月底全市 152 所學校營養午餐招標流標後提出：依物價、食材與人事成本定期調整價格；首次流標就啟動專案輔導與跨局處協助；二度流標時由教育主管機關替學校找臨時供餐業者；定期邀集學校、家長及團膳業者檢討。",
          "source": "https://news.ltn.com.tw/news/Taipei/paper/1764870"
        },
        {
          "topic": "education",
          "title": "升級校園食材登錄平台、建立家長數位反映管道，學童每週增加鮮奶或豆漿",
          "detail": "2026 年 9 月總質詢提出：研議升級校園食材登錄平台並納入衛生稽查認證；建立學生及家長的數位反映平台；檢討教師午餐指導費制度；每週增加 1 至 2 瓶鮮奶或豆漿，長期目標每日供應（市府首長答詢原則同意）。",
          "source": "https://www.setn.com/news/1903066"
        },
        {
          "topic": "welfare",
          "title": "研議將 65 至 85 歲長者重陽敬老禮金提高至 3,000 元，敬老卡點數可跨月累積",
          "detail": "2026 年 6 月市政總質詢提出，希望市府視財政狀況研議（尚非確定作法）；另建議敬老卡點數可跨月累積，並可在超商或超市兌換鮮奶、豆漿。",
          "source": "https://tw.news.yahoo.com/%E6%8E%A8%E5%8B%95%E9%8A%80%E9%AB%AE%E7%A6%8F%E5%88%A9%E6%94%BF%E7%AD%96-%E9%97%95%E6%9E%9A%E8%8E%8E%E6%88%90%E5%8A%9F%E7%88%AD%E5%8F%96-3%E5%A4%A7%E6%95%AC%E8%80%81%E7%A6%8F%E5%88%A9-083600211.html"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "參與提案建請市府制定學生校服管理規範，強化學生參與服儀制定並減輕清寒學生制服負擔。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chueh-mei-sha-taipei"
        },
        {
          "topic": "education",
          "text": "參與提案建請國中小營養午餐每週一餐無肉日，供師生自由選擇。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chueh-mei-sha-taipei"
        },
        {
          "topic": "education",
          "text": "參與提案建請教育局、文化局制定國家語言社團認定基準並提供場館借用優惠。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chueh-mei-sha-taipei"
        },
        {
          "topic": "welfare",
          "text": "曾建議提高敬老福利，市府後來將愛心計程車單趟補助由 65 點提高至 85 點、敬老卡每月點數由 480 點提高至 600 點、85 至 98 歲重陽禮金由 1,500 元提高至 3,000 元（本人說法）。",
          "source": "https://tw.news.yahoo.com/%E6%8E%A8%E5%8B%95%E9%8A%80%E9%AB%AE%E7%A6%8F%E5%88%A9%E6%94%BF%E7%AD%96-%E9%97%95%E6%9E%9A%E8%8E%8E%E6%88%90%E5%8A%9F%E7%88%AD%E5%8F%96-3%E5%A4%A7%E6%95%AC%E8%80%81%E7%A6%8F%E5%88%A9-083600211.html"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2006–2026",
          "elected": true,
          "result": "",
          "note": "已連任多屆。2022 年得票 9.06%，政見共 15 項，以下列出 7 項。",
          "promises": [
            {
              "topic": "education",
              "title": "國小營養午餐擴大使用有機米及有機蔬菜",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2567"
            },
            {
              "topic": "education",
              "title": "二到四歲幼兒就讀私幼每學期補助 20,000 元",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2567"
            },
            {
              "topic": "transport",
              "title": "建立南港空橋連接系統，串聯南港車站至流行音樂中心及社宅",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2567"
            },
            {
              "topic": "transport",
              "title": "爭取捷運信義線東延至中央研究院",
              "status": "unknown",
              "note": "2022 年政見即稱延伸段已留設尾軌，之後進度未查得",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2567"
            },
            {
              "topic": "housing",
              "title": "檢討老舊建物認定標準，放寬產業生活特定專用區",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2567"
            },
            {
              "topic": "welfare",
              "title": "敬老卡點數倍增為每月 1,000 點並擴大使用範圍",
              "status": "not_done",
              "note": "2023 年議會提案文字仍為每月 480 點，2025 年仍有提案要求提高點數",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/ho-meng-hua-taipei"
            },
            {
              "topic": "environment",
              "title": "活化世大運網球場",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2567"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "174 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chueh-mei-sha-taipei"
            },
            {
              "label": "本屆提案議題分布（前三名）",
              "value": "教育 72、民政 36、警衛 28",
              "by": "報導者觀測站（一案可歸入多個議題）",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chueh-mei-sha-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc2-11",
      "identity": {
        "name": "陳又新",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "評估在內湖既有橋梁增建雙層橋",
          "detail": "增加道路容量；本人表示經費高、技術難度大、工期長，列為長期方案討論",
          "source": "https://cnews.com.tw/262170527a02/"
        },
        {
          "topic": "housing",
          "title": "評估以稅務或租屋補助鼓勵內湖企業員工就近居住",
          "detail": "減少跨區通勤車流",
          "source": "https://cnews.com.tw/262170527a02/"
        },
        {
          "topic": "education",
          "title": "增加技職實作、企業體驗、產學合作與生涯探索課程資源",
          "detail": "",
          "source": "https://cnews.com.tw/262170527a02/"
        },
        {
          "topic": "education",
          "title": "國小、國中階段導入生涯探索、心理測驗與實作課程",
          "detail": "",
          "source": "https://cnews.com.tw/262170527a02/"
        },
        {
          "topic": "education",
          "title": "重視家政、美術、工藝課程，避免被主科借課",
          "detail": "",
          "source": "https://cnews.com.tw/262170527a02/"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "曾擔任都市計畫抗爭、勞工團體抗爭及國道收費員抗爭案件的義務律師（本人說法）。",
          "source": "https://web.archive.org/web/2022/https://www.sdparty.tw/candidates/7"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2018",
          "elected": false,
          "result": "得 5,037 票（得票率 2.39%），未當選",
          "note": "得票數取自維基百科整理之中選會結果；當時政見未查得。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "tpc2-12",
      "identity": {
        "name": "吳世正",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "economy",
          "text": "參與提案建請青年局每年於 12 行政區召開分齡青年座談會，彙集 15 至 45 歲青年意見。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wu-shih-cheng-taipei"
        },
        {
          "topic": "economy",
          "text": "參與提案建請延長中高齡暨高齡者友善企業認證效期至 2 年以上並簡化申請。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wu-shih-cheng-taipei"
        },
        {
          "topic": "welfare",
          "text": "參與提案建請居家托育人員健康檢查納入專業醫師心理狀態評估。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wu-shih-cheng-taipei"
        },
        {
          "topic": "housing",
          "text": "推動修訂建築施工損鄰處理規則以協助弱勢鄰損戶，並推動餐車試辦計畫（本人說法）。",
          "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2570"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "1998–2026",
          "elected": true,
          "result": "",
          "note": "已連任多屆。2022 年得票 5.62%。以下為 2022 年政見。",
          "promises": [
            {
              "topic": "welfare",
              "title": "增加公托量能，提高準公托教保品質",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2570"
            },
            {
              "topic": "environment",
              "title": "推動港湖公園更新為共融式公園",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2570"
            },
            {
              "topic": "welfare",
              "title": "加緊增建長者日間照護中心",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2570"
            },
            {
              "topic": "economy",
              "title": "推動市府青年事務單位升級",
              "status": "done",
              "note": "議會提案文字已出現「台北市青年局」；屬市府組織調整，個人角色無法查證",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wu-shih-cheng-taipei"
            },
            {
              "topic": "transport",
              "title": "推動捷運民生汐止線及東環線盡快動工",
              "status": "unknown",
              "note": "未查得兌現資料",
              "source": "https://www.tcc.gov.tw/Councilor_Content.aspx?n=13898&s=2570"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "206 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wu-shih-cheng-taipei"
            },
            {
              "label": "本屆提案議題分布（前三名）",
              "value": "民政 51、教育 45、工務 42",
              "by": "報導者觀測站（一案可歸入多個議題）",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/wu-shih-cheng-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc2-13",
      "identity": {
        "name": "黃啟彬",
        "party": "永久和平自然法",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    }
  ]
});

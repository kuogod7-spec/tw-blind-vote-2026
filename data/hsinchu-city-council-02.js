/*
 * 2026 新竹市議員第 2 選區市議員（東區（南門、關帝、南市等 17 里））：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依新竹市選舉委員會「115 年縣市議員選舉候選人登記概況彙總表」（製表 115/09/04；6 人，應選 4 席），
 * https://www.cec.gov.tw/hcec/article/64402 （附件 https://www.cec.gov.tw/api/file/8cb864fd-5945-41ec-99e6-33c0ba574d74.pdf ）。
 * 10/16 審定名單在整理時尚未於選委會網站公告，因此使用登記名單；審定後請核對。號次 10/23 抽籤，屆時請補上 identity.number。
 * 選區範圍依中選會 114/09/26 公告（https://web.cec.gov.tw/api/file/59c5c972-d1ca-455d-9c07-ceb452c3e56f.odt）；應選席次依自由時報 2026-09-04 報導（https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5563478）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」與近期提案取自新竹市議會官網議員介紹頁。標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 查無資料的候選人照樣收錄，platforms / record 為空陣列。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-city-council-02",
  "region": "新竹市",
  "office": "第 2 選區市議員",
  "area": "東區（南門、關帝、南市等 17 里）",
  "seats": 4,
  "note": "議員政見整理自候選人公開資料、政黨候選人介紹頁、議會官網與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，各人資料多寡差異很大，這裡照實呈現；現任者的「做過的事」以議會官網列出的近期提案為主。",
  "candidates": [
    {
      "id": "hcc2-1",
      "identity": {
        "name": "施乃如",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案建請市府推動兼任行政教師責任加給，依年資逐年由現行獎勵金 1 倍提高至第五年起 3 倍。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=16"
        },
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案建請市府比照鄰縣全面補助公立國中小導師午餐費。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=16"
        },
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案建請市府推動教師久任獎金：服務滿 5 年 5 萬元、滿 10 年 10 萬元，每 5 年一級，最高 30 萬元。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=16"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "政見取自議會官網議員介紹頁（本屆）；兌現狀況未逐則查證，查不到的標為無法查證。",
          "promises": [
            {
              "topic": "environment",
              "title": "爭取青草湖停車場閒置空間再活化",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=16"
            },
            {
              "topic": "economy",
              "title": "持續推動南門市場活化",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=16"
            },
            {
              "topic": "transport",
              "title": "爭取增設 YouBike 2.0 站點",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=16"
            },
            {
              "topic": "welfare",
              "title": "爭取增設公托、臨托及親子館分館",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=16"
            },
            {
              "topic": "welfare",
              "title": "擴大失智症社區互助系統",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=16"
            },
            {
              "topic": "housing",
              "title": "爭取老幼共托的多功能社會住宅",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=16"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc2-2",
      "identity": {
        "name": "李玫",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "education",
          "title": "將兒童適性發展評估等待時間縮短至一個月內",
          "detail": "以公私協力辦理",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=200"
        },
        {
          "topic": "education",
          "title": "校園全面導入社會情緒學習（SEL）課程",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=200"
        },
        {
          "topic": "economy",
          "title": "推動二度就業女性數位培訓與心理諮詢",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=200"
        },
        {
          "topic": "welfare",
          "title": "試辦以小時為單位的彈性育嬰假",
          "detail": "並獎勵配合實施的企業",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=200"
        },
        {
          "topic": "welfare",
          "title": "孕婦搭乘計程車補助延伸至產後一年",
          "detail": "並獎勵計程車配備合格安全汽座",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=200"
        },
        {
          "topic": "welfare",
          "title": "補助長輩住家加裝扶手、防滑地板與照明",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=200"
        },
        {
          "topic": "welfare",
          "title": "爭取長輩健保費補助並擴大敬老愛心卡使用範圍",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=200"
        },
        {
          "topic": "education",
          "title": "增加各校藝文教育預算",
          "detail": "並定期辦理培育工作坊、支持在地藝術團體",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=200"
        },
        {
          "topic": "education",
          "title": "爭取藝文活動每年固定在選區設場並規劃市立美術館空間",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=200"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "曾任縣市首長秘書、縣市政府青年諮詢委員。",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=200"
        }
      ],
      "past": []
    },
    {
      "id": "hcc2-3",
      "identity": {
        "name": "陳鶴文",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "education",
          "text": "曾任高中、勞工教育機構韓語講師。",
          "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC02%E9%81%B8%E8%88%89%E5%8D%80.pdf"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "未當選",
          "note": "依 2022 年選舉公報確認為該屆候選人，未列名現任議員名單，判斷未當選；未查得得票數。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc2-4",
      "identity": {
        "name": "徐美惠",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建請市府於新興公園設置適合不同年齡層的健身器材。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=18"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府加速客雅大道向東延伸銜接明湖路、高翠路及高峰路，分流往科學園區的通勤車潮。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=18"
        },
        {
          "topic": "environment",
          "text": "擔任地方民意代表期間提案建請市府更新後站公園遊憩設施，規劃融入鐵道歷史的主題式設施。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=18"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "政見取自議會官網議員介紹頁（本屆）；兌現狀況未逐則查證，查不到的標為無法查證。",
          "promises": [
            {
              "topic": "economy",
              "title": "南門市場整體改造並優先保障舊攤商權益",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=18"
            },
            {
              "topic": "transport",
              "title": "規劃市區免費關懷公車，每日上午、下午至少各 2 班隨招隨停",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=18"
            },
            {
              "topic": "transport",
              "title": "加速客雅大道延伸通往科學園區及高翠路工程",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=18"
            },
            {
              "topic": "environment",
              "title": "會同鄰里長周期性勘查低窪排水設施",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=18"
            },
            {
              "topic": "economy",
              "title": "定期推廣青草湖周邊藝文與親子活動",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=18"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc2-5",
      "identity": {
        "name": "許修睿",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案推動市府與國立大學合作營運音樂廳，整合藝文資源。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=3"
        },
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案推動 K-12 科技雙語示範學校，與國立大學合作設立附屬中學。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=3"
        },
        {
          "topic": "safety",
          "text": "擔任地方民意代表期間提案建請研訂私人山坡地維護管理自治法規，明確管理責任、降低坡地災害風險。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=3"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "政見取自議會官網議員介紹頁（本屆）；兌現狀況未逐則查證，查不到的標為無法查證。",
          "promises": [
            {
              "topic": "welfare",
              "title": "制定動物保護自治條例並設公有寵物殯葬設施",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=3"
            },
            {
              "topic": "transport",
              "title": "改善通學步道品質與巷弄平整",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=3"
            },
            {
              "topic": "environment",
              "title": "遷移公墓改為綠地",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=3"
            },
            {
              "topic": "welfare",
              "title": "興建各里集會所並爭取充電樁補助",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=3"
            },
            {
              "topic": "housing",
              "title": "重啟後站都市更新、活化前站舊城商圈",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=3"
            },
            {
              "topic": "safety",
              "title": "建置防災感測系統與智慧監控",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=3"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc2-6",
      "identity": {
        "name": "田雅芳",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "economy",
          "text": "擔任地方民意代表期間提案建請市府建立中高齡者職涯轉銜與銀髮就業培訓支持系統。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=17"
        },
        {
          "topic": "economy",
          "text": "擔任地方民意代表期間提案建請市府建立青年文化創業孵化空間。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=17"
        },
        {
          "topic": "safety",
          "text": "擔任地方民意代表期間提案建請市府整頓地下道與騎樓通行安全。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=17"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "政見取自議會官網議員介紹頁（本屆）；兌現狀況未逐則查證，查不到的標為無法查證。",
          "promises": [
            {
              "topic": "environment",
              "title": "住宅區設置噪音科技執法",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=17"
            },
            {
              "topic": "housing",
              "title": "重啟後站都更",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=17"
            },
            {
              "topic": "environment",
              "title": "建設污水下水道，改善南門溪、客雅溪、汀甫圳水質",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=17"
            },
            {
              "topic": "welfare",
              "title": "爭取喪葬補助",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=17"
            },
            {
              "topic": "welfare",
              "title": "將議員薪水捐贈婦幼、長照、青年、藝文",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=17"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

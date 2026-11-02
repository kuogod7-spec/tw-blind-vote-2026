/*
 * 2026 新竹市議員第 5 選區市議員（香山區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依新竹市選舉委員會「115 年縣市議員選舉候選人登記概況彙總表」（製表 115/09/04；8 人，應選 6 席），
 * https://www.cec.gov.tw/hcec/article/64402 （附件 https://www.cec.gov.tw/api/file/8cb864fd-5945-41ec-99e6-33c0ba574d74.pdf ）。
 * 中選會 2026-10-16 審定候選人資格，新竹市市議員候選人無人不符規定（https://www.cec.gov.tw/hcec/article/65212）；黨籍已於 2026-10-25 對照登記表「推薦之政黨」欄核對無誤。
 * 號次抽籤原訂 10/23，因薔琵颱風新竹市停止上班，順延至 2026-10-27 10:00 舉行（新竹市選委會 https://www.cec.gov.tw/hcec/article/65309 ；自由時報 https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5615588 ）。截至 2026-10-25 尚無結果，identity.number 待 10/27 抽籤後補上。
 * 選區範圍依中選會 114/09/26 公告（https://web.cec.gov.tw/api/file/59c5c972-d1ca-455d-9c07-ceb452c3e56f.odt）；應選席次依自由時報 2026-09-04 報導（https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5563478）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」與近期提案取自新竹市議會官網議員介紹頁。標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 查無資料的候選人照樣收錄，platforms / record 為空陣列。
 * 已知缺漏：仍查無 2026 年具體政見者：蔡志堅（現任者的議會提案列於 record）。
 * 2026-11-02 第六輪補查：新增 0 則政見、1 則經歷。
 * 2026-10-19 第四輪補查：新增 1 則政見、0 則經歷。
 * 2026-11-02 第五輪補查：新增 9 則政見、0 則經歷。
 * 號次：依 10/27 抽籤結果補上，並與中選會選舉資料庫的候選人號次逐一核對（https://info.cec.gov.tw/vote2026/static/json/cand/T/10018.json ；2026-11-02 註）。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-city-council-05",
  "region": "新竹市",
  "office": "第 5 選區市議員",
  "area": "香山區",
  "seats": 6,
  "note": "議員政見整理自候選人公開資料、政黨候選人介紹頁、議會官網與新聞報導（截至 2026-11-02）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，各人資料多寡差異很大，這裡照實呈現；現任者的「做過的事」以議會官網列出的近期提案為主。",
  "candidates": [
    {
      "id": "hcc5-1",
      "identity": {
        "name": "吳若茵",
        "party": "中國國民黨",
        "number": 7
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "增加公共托育、臨時托育與育兒支持",
          "detail": "串聯市府、里鄰、社區與民間資源；未公布數量與經費",
          "source": "https://udn.com/news/story/124652/9644143"
        },
        {
          "topic": "welfare",
          "title": "擴大長者共餐、長照服務與就醫交通",
          "detail": "未公布細節",
          "source": "https://udn.com/news/story/124652/9644143"
        },
        {
          "topic": "welfare",
          "title": "強化弱勢急難救助與福利陪伴機制",
          "detail": "未公布細節",
          "source": "https://udn.com/news/story/124652/9644143"
        },
        {
          "topic": "safety",
          "title": "加強校園營養午餐、市場、共餐據點與社區活動的食品安全把關",
          "detail": "未公布細節",
          "source": "https://udn.com/news/story/124652/9644143"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "長期投入公益，關懷弱勢家庭與獨居長者（本人說法）。",
          "source": "https://udn.com/news/story/124652/9644143"
        }
      ],
      "past": []
    },
    {
      "id": "hcc5-2",
      "identity": {
        "name": "吳國寶",
        "party": "無黨籍",
        "number": 6
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "重新評估機場周邊噪音分級並擴大房屋稅減免",
          "detail": "於議會指出近期軍機起降頻繁，緊鄰跑道的樹下里卻只列為二級噪音影響區，建議市府重新評估噪音分級、擴大受影響區域，給予相應的房屋稅減免（現行依級別減免一至三成）。",
          "source": "https://www.thehubnews.net/archives/668632"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建請市府活化台 68 線橋下空間，設置極限運動場及遙控賽車場。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=32"
        },
        {
          "topic": "environment",
          "text": "擔任地方民意代表期間提案建請市府於虎山活動中心旁紅樹林公園增設兒童遊憩設施。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=32"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府拓寬新香街往客雅大道出口路段。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=32"
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
              "title": "爭取 65 歲以上健保費全額減免",
              "status": "partial",
              "note": "市府補助符合資格的 65 歲以上長者每月最高 826 元健保費，非全額或全面免繳；個人角色無法查證",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=32"
            },
            {
              "topic": "transport",
              "title": "竹香南、北路延伸至彩虹橋",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=32"
            },
            {
              "topic": "economy",
              "title": "受工業污染農地成立產業園區",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=32"
            },
            {
              "topic": "economy",
              "title": "成立青年創業育成中心，無償提供臨時辦公室與法律稅務諮詢",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=32"
            },
            {
              "topic": "transport",
              "title": "增設香山區 YouBike 站點",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=32"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc5-3",
      "identity": {
        "name": "葉國文",
        "party": "台灣民眾黨",
        "number": 4
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "爭取 65 歲以上長輩健保費全額補助",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=202"
        },
        {
          "topic": "welfare",
          "title": "推出長者眼科、耳科定期檢查補助",
          "detail": "與衛生局、醫院合作",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=202"
        },
        {
          "topic": "welfare",
          "title": "敬老愛心卡提升至 1,000 元",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=202"
        },
        {
          "topic": "housing",
          "title": "補助租賃契約公證費",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=202"
        },
        {
          "topic": "welfare",
          "title": "大湖里、美山里設立活動中心，香村里興建公園",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=202"
        },
        {
          "topic": "governance",
          "title": "爭取市政大樓遷至香山",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=202"
        },
        {
          "topic": "welfare",
          "title": "為隔代教養家庭爭取顧孫津貼",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=202"
        },
        {
          "topic": "welfare",
          "title": "0–12 歲兒童生養補助每年 1 萬元",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=202"
        },
        {
          "topic": "transport",
          "title": "爭取新闢茄苳、東香接西濱的道路",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=202"
        },
        {
          "topic": "economy",
          "title": "賞蟹步道延伸至惠明宮段",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=202"
        },
        {
          "topic": "economy",
          "title": "爭取果菜批發市場與小巨蛋設於香山區",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=202"
        },
        {
          "topic": "welfare",
          "title": "社區發展協會活動費由 5 萬元調升至 10 萬元",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=202"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "曾任地方家長會長協會理事長。",
          "source": "https://udn.com/news/story/124652/9420003"
        },
        {
          "topic": "welfare",
          "text": "曾任社區發展協會、社區環境關懷團體理事長及樂齡學習中心主任。",
          "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC05%E9%81%B8%E8%88%89%E5%8D%80.pdf"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "得票 3,518 票，未當選",
          "note": "得票數取自 2026 年聯合報選情報導；報導並稱本次為第三度參選。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc5-4",
      "identity": {
        "name": "陳啓源",
        "party": "無黨籍",
        "number": 3
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "建議市府孵蛋計畫選址香山",
          "detail": "於議會總質詢指出香山區長年發展遲緩，建議市府將孵蛋計畫選址於香山，帶動地方發展與人潮。",
          "source": "https://www.thehubnews.net/archives/670706"
        },
        {
          "topic": "transport",
          "title": "推動美山聯絡道早日興建",
          "detail": "於議會持續追蹤串聯香山山區與濱海的美山聯絡道工程（曾一度暫緩），要求市府積極推動、早日興建完成。",
          "source": "https://www.thehubnews.net/archives/669796"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府改善茄苳里五福路二段與至善街口路邊停車亂象。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=31"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府拓寬中華路五段 208 巷、320 巷與西濱公路路口。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=31"
        },
        {
          "topic": "safety",
          "text": "擔任地方民意代表期間提案就嬰兒奶粉疑含毒素提出食安提案。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=31"
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
              "topic": "transport",
              "title": "爭取客雅大道向東延伸，接通高峰路與科學園區",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=31"
            },
            {
              "topic": "economy",
              "title": "盤點公有土地或鼓勵民間土地參與興辦工商科技園區",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=31"
            },
            {
              "topic": "environment",
              "title": "督促加強空污、水污、噪音防治",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=31"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc5-5",
      "identity": {
        "name": "蔡志堅",
        "party": "無黨籍",
        "number": 2
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "現任基層里長。",
          "source": "https://udn.com/news/story/124652/9644377"
        },
        {
          "topic": "environment",
          "text": "香山綜合運動場風雨球場啟用後垃圾問題遭居民陳情，多次建議市府在適當地點增設垃圾桶，市府未採納、改以加派清潔人力因應（2026 年 6 月，本人說法）。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5475264"
        }
      ],
      "past": []
    },
    {
      "id": "hcc5-6",
      "identity": {
        "name": "陳慶齡",
        "party": "中國國民黨",
        "number": 5
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "評估武陵高架橋延伸銜接景觀大道",
          "detail": "台一線替代道路預計明年年中通車，於議會指出可能帶來大量車流，建議市府重新評估早年將武陵高架橋延伸銜接景觀大道的規劃，避免平面交通堵塞。",
          "source": "https://www.thehubnews.net/archives/674171"
        },
        {
          "topic": "governance",
          "title": "啟動第 11 公墓遷葬並召開公聽會",
          "detail": "位於內湖里、鄰近五福路與內湖國小的第 11 公墓自 106 年公告禁葬已近九年，於議會要求民政處盡快研擬遷葬，並辦理公聽會向居民說明期程與後續規畫。",
          "source": "https://www.thehubnews.net/archives/629425"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建請市府利用多功能競技館後方閒置空地興建桌球館。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=34"
        },
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建請市府放寬敬老愛心卡，允許子女代長輩至農會使用。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=34"
        },
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建議 65 歲以上長者健保費由市府支應。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=34"
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
              "title": "活化海山漁港，帶動經濟與觀光",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=34"
            },
            {
              "topic": "welfare",
              "title": "敬老卡點數加倍並擴大使用範圍",
              "status": "done",
              "note": "敬老愛心卡每月點數 2022 年後由 600 點提高至 800 點，2026 年 10 月起再提高至 1,200 點；個人角色無法查證",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=34"
            },
            {
              "topic": "economy",
              "title": "青青草原打造遊憩觀光區",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=34"
            },
            {
              "topic": "economy",
              "title": "成立香山精密機械園區",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=34"
            },
            {
              "topic": "economy",
              "title": "設立香山攤販零售據點與菜市場",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=34"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc5-7",
      "identity": {
        "name": "廖子齊",
        "party": "時代力量",
        "number": 1
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "完善香山區學童通學步道",
          "detail": "於議會指出香山區多所學校的通學步道不完整（例如虎林國小至米粉寮公園一帶），要求市府爭取公有土地撥用、必要時徵收私有土地，完善通學廊帶。",
          "source": "https://www.thehubnews.net/archives/669796"
        },
        {
          "topic": "education",
          "title": "市府運動地圖 APP 增設健走功能",
          "detail": "於議會建議市府的運動地圖 APP 增加健走項目並優化相關功能，促進市民健走運動風氣。",
          "source": "https://www.thehubnews.net/archives/629416"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案建請市府編列經費，採購在地文史期刊全套典藏於各市立高中、國中圖書館。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=33"
        },
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案建請市府參考其他城市做法，公開實驗學校籌備歷程與招生資訊。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=33"
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
              "topic": "transport",
              "title": "優化中華路公車候車亭與人行道",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=33"
            },
            {
              "topic": "transport",
              "title": "增設香山區 YouBike 站點",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=33"
            },
            {
              "topic": "transport",
              "title": "偏遠公車路線轉型為計程車式彈性運輸",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=33"
            },
            {
              "topic": "welfare",
              "title": "普設銀髮健身俱樂部",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=33"
            },
            {
              "topic": "environment",
              "title": "浸水掩埋場轉型環境教育自然公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=33"
            },
            {
              "topic": "environment",
              "title": "推動 2050 淨零碳排",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=33"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc5-8",
      "identity": {
        "name": "林盈徹",
        "party": "民主進步黨",
        "number": 8
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "爭取香山區 24 里每里都設置公共自行車站點",
          "detail": "指出香山區公共自行車設站進度落後；虎山里約 6,000 人、2,243 戶目前沒有站點，列為優先，海山里、南隘里也有設站需求。未提出站數與期程。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5609247"
        },
        {
          "topic": "welfare",
          "title": "香山區增設心理諮商據點，加開夜間與視訊諮商",
          "detail": "於議會建議市府比照科學園區模式在香山區設立心理諮商分站、推動視訊諮商，加開衛生所夜間諮商時段，並將經歷小產與不孕困擾的婦女及配偶納入補助對象。衛生局回應將於香山衛生所提供心理健康諮詢服務。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5595941"
        },
        {
          "topic": "environment",
          "title": "青青草原設施盤點、定期維護並規劃接駁",
          "detail": "於議會要求市府盤點青青草原現有設施與道路狀況，建立分階段、定期的維護修繕期程，立即改善園區導覽指引並打造全齡友善步道；並建議串聯周邊景點、研議觀光巴士與專屬接駁車。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5592889"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建請市府於香山打造兼具球類、田徑、室內運動的多功能綜合運動園區，分區分時兼顧民眾與選手。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=30"
        },
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建請市府以香山為示範區推動健身巡迴車，並結合市民 APP 規劃長者運動獎勵機制。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=30"
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
              "title": "海山漁港設置假日市集與原住民特色市集",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=30"
            },
            {
              "topic": "welfare",
              "title": "孕婦計程車補助延伸到產後健兒門診",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=30"
            },
            {
              "topic": "welfare",
              "title": "爭取大湖里市民活動中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=30"
            },
            {
              "topic": "transport",
              "title": "鹽水圖書館、內湖國小周邊增設 YouBike 站點",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=30"
            },
            {
              "topic": "education",
              "title": "完成富禮國中射箭館",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=30"
            },
            {
              "topic": "education",
              "title": "規劃香山體育園區、香山圖書館",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=30"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

/*
 * 2026 新竹市議員第 1 選區市議員（東區（東門、榮光、成功等 36 里））：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依新竹市選舉委員會「115 年縣市議員選舉候選人登記概況彙總表」（製表 115/09/04；19 人，應選 12 席），
 * https://www.cec.gov.tw/hcec/article/64402 （附件 https://www.cec.gov.tw/api/file/8cb864fd-5945-41ec-99e6-33c0ba574d74.pdf ）。
 * 中選會 2026-10-16 審定候選人資格，新竹市市議員候選人無人不符規定（https://www.cec.gov.tw/hcec/article/65212）；黨籍已於 2026-10-25 對照登記表「推薦之政黨」欄核對無誤。
 * 號次抽籤原訂 10/23，因薔琵颱風新竹市停止上班，順延至 2026-10-27 10:00 舉行（新竹市選委會 https://www.cec.gov.tw/hcec/article/65309 ；自由時報 https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5615588 ）。截至 2026-10-25 尚無結果，identity.number 待 10/27 抽籤後補上。
 * 選區範圍依中選會 114/09/26 公告（https://web.cec.gov.tw/api/file/59c5c972-d1ca-455d-9c07-ceb452c3e56f.odt）；應選席次依自由時報 2026-09-04 報導（https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5563478）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」與近期提案取自新竹市議會官網議員介紹頁。標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 查無資料的候選人照樣收錄，platforms / record 為空陣列。 黃文政、劉崇顯為現任議員，本次以無黨籍登記。
 * 已知缺漏：仍查無 2026 年具體政見者：黃文政、劉崇顯、劉詳樽、張文興、李國璋、宋品瑩、劉彥伶、張祖琰、樊一嶢、許登淇、曾翰揚、鄭美娟、蔡惠婷、陳清智、錢康明、陳珍裕、鍾淑英（現任者的議會提案列於 record）。
 * 2026-10-19 第四輪補查：新增 1 則政見、0 則經歷。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-city-council-01",
  "region": "新竹市",
  "office": "第 1 選區市議員",
  "area": "東區（東門、榮光、成功等 36 里）",
  "seats": 12,
  "note": "議員政見整理自候選人公開資料、政黨候選人介紹頁、議會官網與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，各人資料多寡差異很大，這裡照實呈現；現任者的「做過的事」以議會官網列出的近期提案為主。",
  "candidates": [
    {
      "id": "hcc1-1",
      "identity": {
        "name": "黃文政",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "economy",
          "text": "擔任地方民意代表期間提案建請市府對傳統市場及商圈提出整體活化計畫，改善公共環境、停車與行人動線，並建立來客數、空店率等評估指標。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=9"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府盤點重要道路及學校周邊號誌，依時段車流與上下學時間導入分時控制及智慧化號誌調整。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=9"
        },
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建請市府對生育津貼及婚育支持措施建立可量化的成效評估，定期公布出生數與總生育率並滾動調整資源。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=9"
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
              "title": "爭取經費改善十八尖山破損階梯及路面",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=9"
            },
            {
              "topic": "environment",
              "title": "監督雨水下水道建設與污水下水道接管率",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=9"
            },
            {
              "topic": "transport",
              "title": "改善北新竹車站周邊排水、照明、路面與治安",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=9"
            },
            {
              "topic": "environment",
              "title": "活化閒置空地作為足球、槌球等運動場地",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=9"
            },
            {
              "topic": "transport",
              "title": "督促市府依都市計畫興建關埔空橋",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=9"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc1-2",
      "identity": {
        "name": "劉崇顯",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案補助國立大學附設小學學童營養午餐費用。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=14"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案改善光復路二段與 98 巷柏油鋪面。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=14"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建立通勤共乘資訊平台並訂定共乘獎勵措施。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=14"
        },
        {
          "topic": "transport",
          "text": "上屆任內推動光復路標線改善、兩線道取消禁行機車、機車不強制兩段式左轉、新設實體人行道及公共自行車跨縣市互通（本人說法）。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=14"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "政見取自議會官網議員介紹頁（本屆，為 2022 年所列「未來目標」）；兌現狀況未逐則查證。",
          "promises": [
            {
              "topic": "transport",
              "title": "科學園區周邊巷道上班尖峰調撥單行往園區",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=14"
            },
            {
              "topic": "transport",
              "title": "園區一路橋下直通慈雲路",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=14"
            },
            {
              "topic": "transport",
              "title": "慈雲路全區空橋興建",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=14"
            },
            {
              "topic": "transport",
              "title": "推動科學園區輕軌捷運聯絡線核定",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=14"
            },
            {
              "topic": "environment",
              "title": "倡議垃圾費隨袋徵收",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=14"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc1-3",
      "identity": {
        "name": "劉詳樽",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hcc1-4",
      "identity": {
        "name": "張文興",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任基層里長、地方家長會長協會理事長、高中講師。",
          "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC01%E9%81%B8%E8%88%89%E5%8D%80.pdf"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "未當選",
          "note": "依 2022 年選舉公報確認為該屆候選人，未列名現任議員名單，判斷未當選；未查得得票數。政見取自 2022 年選舉公報。",
          "promises": [
            {
              "topic": "welfare",
              "title": "敦促廣設公立幼兒園及臨時托育班",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC01%E9%81%B8%E8%88%89%E5%8D%80.pdf"
            },
            {
              "topic": "welfare",
              "title": "爭取提高敬老卡免費點數並擴大用途",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC01%E9%81%B8%E8%88%89%E5%8D%80.pdf"
            },
            {
              "topic": "transport",
              "title": "市區道路採透水性鋪面並檢驗無障礙安全",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC01%E9%81%B8%E8%88%89%E5%8D%80.pdf"
            },
            {
              "topic": "environment",
              "title": "銜接關埔各社區污水管線並定期公布施工進度",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC01%E9%81%B8%E8%88%89%E5%8D%80.pdf"
            },
            {
              "topic": "transport",
              "title": "增設竹科大門出入口雙向機車專用道",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC01%E9%81%B8%E8%88%89%E5%8D%80.pdf"
            },
            {
              "topic": "transport",
              "title": "要求興建光埔全區空橋",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC01%E9%81%B8%E8%88%89%E5%8D%80.pdf"
            },
            {
              "topic": "education",
              "title": "推動國中改制為完全中學",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC01%E9%81%B8%E8%88%89%E5%8D%80.pdf"
            },
            {
              "topic": "economy",
              "title": "設置青年事務專責單位並媒合青創基金",
              "status": "not_applicable",
              "note": "",
              "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC01%E9%81%B8%E8%88%89%E5%8D%80.pdf"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc1-5",
      "identity": {
        "name": "李國璋",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府重鋪自由路兩側人行道磚。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=13"
        },
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建請市府擴充動物保護人力並增列約 1,000 萬元預算，提升動物救援、醫療及收容量能。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=13"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府改善關新路與光復路口人行道與斑馬線交會處高低落差的無障礙通行設施。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=13"
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
              "topic": "education",
              "title": "籌措財源價購科園國小運動場用地",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=13"
            },
            {
              "topic": "education",
              "title": "調整學區並試辦安心通學專車",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=13"
            },
            {
              "topic": "transport",
              "title": "儘速新建連結關埔的空橋",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=13"
            },
            {
              "topic": "welfare",
              "title": "將社區關懷站開站門檻由每週 5 天 10 個時段降為 3 天 6 個時段",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=13"
            },
            {
              "topic": "transport",
              "title": "擱置大新竹車站計畫，保留鐵路地下化或高架化可能",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=13"
            },
            {
              "topic": "transport",
              "title": "加開醫療路線專車",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=13"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc1-6",
      "identity": {
        "name": "宋品瑩",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案建請市府提高營養午餐費，國小每餐 70 元、國中每餐 75 元。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=7"
        },
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案建請市府整修關東國小活動中心及欄杆。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=7"
        },
        {
          "topic": "environment",
          "text": "擔任地方民意代表期間提案建請市府改善新莊公園。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=7"
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
              "title": "完成光埔空橋建設",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=7"
            },
            {
              "topic": "transport",
              "title": "關埔重劃區增設機車格",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=7"
            },
            {
              "topic": "housing",
              "title": "推動囤房稅、空屋稅",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=7"
            },
            {
              "topic": "education",
              "title": "與大專院校合作成立中小學雙語教學專責單位並開發教材",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=7"
            },
            {
              "topic": "education",
              "title": "重新檢討學區劃分，規劃國小到高中增班設校",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=7"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc1-7",
      "identity": {
        "name": "劉彥伶",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建議市府盤點主要運動場域，依場域特性規劃提供運動前後便利服務的「運動驛站」。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=6"
        },
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案建請市府以安居津貼、久任獎勵、導師加值與行政責任加給全面提升教師待遇，以留住師資。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=6"
        },
        {
          "topic": "safety",
          "text": "擔任地方民意代表期間提案建請市府推動國中學生自行車考照（筆試與路考）、裝備檢驗及核發車牌制度。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=6"
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
              "title": "育兒津貼及托育補助金額各至少增加 3,000 元",
              "status": "partial",
              "note": "市府 2026 年 3 月起育兒津貼每月加碼 1,000 元，未達各加 3,000 元；個人角色無法查證",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=6"
            },
            {
              "topic": "environment",
              "title": "公共污水下水道接管戶數成長三成以上",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=6"
            },
            {
              "topic": "transport",
              "title": "瓶頸路口時制重整並增設智慧號誌",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=6"
            },
            {
              "topic": "welfare",
              "title": "推動一公園一特色運動（直排輪、滑板、球類等）",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=6"
            },
            {
              "topic": "education",
              "title": "社區大學結合職訓需求開設第二專長課程",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=6"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc1-8",
      "identity": {
        "name": "張祖琰",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "housing",
          "text": "擔任地方民意代表期間提案建請市府修正公共工程拆遷補償自治條例，將房屋租金補助由特定案件改為通案，保障因公共工程須全部拆除住宅者的過渡居住。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=11"
        },
        {
          "topic": "housing",
          "text": "擔任地方民意代表期間提案建請市府檢討公寓大廈共用設施維護修繕補助自治條例，擴大補助供公眾通行的人行與退縮空間鋪面修繕。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=11"
        },
        {
          "topic": "environment",
          "text": "擔任地方民意代表期間提案建請全面重新規劃整建建功國小前方長條公園。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=11"
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
              "topic": "education",
              "title": "監督總圖書館興建進度並增設分館",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=11"
            },
            {
              "topic": "education",
              "title": "增加關埔地區國中小容量，檢討學區並強化居住查核",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=11"
            },
            {
              "topic": "welfare",
              "title": "東區增設親子館",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=11"
            },
            {
              "topic": "education",
              "title": "提高學童營養午餐費",
              "status": "done",
              "note": "國中小營養午餐自 2026 年 8 月起免費；個人角色無法查證",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=11"
            },
            {
              "topic": "transport",
              "title": "加速興建光埔、關埔地區二樓空橋系統",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=11"
            },
            {
              "topic": "welfare",
              "title": "擴建台大醫院湳雅院區",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=11"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc1-9",
      "identity": {
        "name": "樊一嶢",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hcc1-10",
      "identity": {
        "name": "鄭宏輝",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "推動科學園區周邊通勤交通改善與大眾運輸",
          "detail": "表示若進入議會將推動科學園區交通改善，並推動綠色交通、智慧交通與大眾運輸；另提出為園區從業人員辦理紓壓活動。尚未提出具體路線、預算與期程。",
          "source": "https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5607423"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "曾連任五屆地方民意代表。",
          "source": "https://www.storm.mg/article/1482242"
        },
        {
          "topic": "governance",
          "text": "曾任中央政府政策顧問、地方義勇消防組織主管。",
          "source": "https://www.storm.mg/article/1482242"
        }
      ],
      "past": []
    },
    {
      "id": "hcc1-11",
      "identity": {
        "name": "許登淇",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任縣市首長秘書。",
          "source": "https://udn.com/news/story/124652/9420003"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "未當選",
          "note": "2022 年在另一選區參選（見 2022 年選舉公報），報導稱落敗；未查得得票數。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc1-12",
      "identity": {
        "name": "曾翰揚",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾擔任基層里長四年（本人說法）。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602715"
        },
        {
          "topic": "environment",
          "text": "里長任內成立環保志工隊，至今約 60 人（本人說法）。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602715"
        },
        {
          "topic": "welfare",
          "text": "推動社區長者共餐食堂（本人說法）。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602715"
        }
      ],
      "past": []
    },
    {
      "id": "hcc1-13",
      "identity": {
        "name": "鄭美娟",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府全面檢視中華路一段、二段人行環境，規劃安全且連續的人行空間。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=5"
        },
        {
          "topic": "economy",
          "text": "擔任地方民意代表期間提案建請市府改善果菜市場高溫及通風排風問題，保障攤商工作環境。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=5"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府建立道路施工主動通知機制。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=5"
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
              "title": "爭取適齡女性凍卵補助",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=5"
            },
            {
              "topic": "transport",
              "title": "爭取慈雲路空橋建置",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=5"
            },
            {
              "topic": "transport",
              "title": "爭取園區一路直通慈雲路",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=5"
            },
            {
              "topic": "transport",
              "title": "推動公車站牌電子化",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=5"
            },
            {
              "topic": "education",
              "title": "爭取關埔二期中小學新校建設",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=5"
            },
            {
              "topic": "education",
              "title": "爭取代理教師一整年完整聘期",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=5"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc1-14",
      "identity": {
        "name": "蔡惠婷",
        "party": "時代力量",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府參考鄰近縣市通學專車模式，推出前往鄰縣學校的跨縣通學服務。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=10"
        },
        {
          "topic": "environment",
          "text": "擔任地方民意代表期間提案建請市府於大沙坑公園沙坑區與遊具區增設遮陽設備。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=10"
        },
        {
          "topic": "environment",
          "text": "擔任地方民意代表期間提案建請市府重新規劃建功公園各活動區連接動線，做到平整無障礙。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=10"
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
              "title": "督促市府於慈雲路段興建空橋，人車分流",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=10"
            },
            {
              "topic": "transport",
              "title": "上下學時間設置通學公車",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=10"
            },
            {
              "topic": "environment",
              "title": "於噪音熱點設置噪音科技執法",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=10"
            },
            {
              "topic": "environment",
              "title": "於鄰近園區社區設置智慧共桿偵測廢氣，數據即時公開",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=10"
            },
            {
              "topic": "governance",
              "title": "重大公共建設於規劃初期辦理公民參與式規劃",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=10"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc1-15",
      "identity": {
        "name": "林妤芬",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "推動大新竹輕軌分期建設",
          "detail": "未公布期程與經費",
          "source": "https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5436482"
        },
        {
          "topic": "transport",
          "title": "以數位工具發展智慧共乘媒合",
          "detail": "未公布細節",
          "source": "https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5436482"
        },
        {
          "topic": "education",
          "title": "深化親子品格教育並強化親師合作",
          "detail": "未公布細節",
          "source": "https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5436482"
        },
        {
          "topic": "safety",
          "title": "加強校園安全與通報機制，落實反霸凌教育",
          "detail": "未公布細節",
          "source": "https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5436482"
        },
        {
          "topic": "education",
          "title": "確保學生穩定使用數位教學資源",
          "detail": "未公布細節",
          "source": "https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5436482"
        },
        {
          "topic": "welfare",
          "title": "推動預防型社區照顧服務，保障長者醫療",
          "detail": "未公布細節",
          "source": "https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5436482"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "以律師身分創立社區法律服務協會，提供免費法律諮詢超過 1,000 件、服務超過 5,000 人（本人說法）。",
          "source": "https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5436482"
        }
      ],
      "past": []
    },
    {
      "id": "hcc1-16",
      "identity": {
        "name": "陳清智",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "economy",
          "text": "曾任企業董事長、地方民防分隊長、後備軍人團體理事長。",
          "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC01%E9%81%B8%E8%88%89%E5%8D%80.pdf"
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
      "id": "hcc1-17",
      "identity": {
        "name": "錢康明",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任縣市政府局處首長（文化業務），2023 年去職。",
          "source": "https://news.tvbs.com.tw/politics/3179854"
        }
      ],
      "past": []
    },
    {
      "id": "hcc1-18",
      "identity": {
        "name": "陳珍裕",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "environment",
          "text": "曾任環境生態保育團體理事長，並擔任動物保護法修法連署的地區負責人。",
          "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC01%E9%81%B8%E8%88%89%E5%8D%80.pdf"
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
      "id": "hcc1-19",
      "identity": {
        "name": "鍾淑英",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建議改善金城二路籃球場夜間照明。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=15"
        },
        {
          "topic": "governance",
          "text": "擔任地方民意代表期間提案建請市府彈性活用士林段約 1,356 平方公尺市有閒置空地。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=15"
        },
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案建請市府更新建功高中桌球桌並優化訓練空間。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=15"
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
              "topic": "housing",
              "title": "爭取解編東區水源保護區",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=15"
            },
            {
              "topic": "environment",
              "title": "爭取汀甫圳河川整治與美化",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=15"
            },
            {
              "topic": "economy",
              "title": "爭取舉辦全國性眷村美食活動並推動眷村文化傳承",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=15"
            },
            {
              "topic": "welfare",
              "title": "爭取設置國際標準足球場域",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=15"
            },
            {
              "topic": "welfare",
              "title": "爭取增設風雨籃球場",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=15"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

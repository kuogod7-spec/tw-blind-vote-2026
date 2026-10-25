/*
 * 2026 桃園市議員第 9 選區市議員（楊梅區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，7 人）
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 *   中選會今日（10/16）審定名單公告時尚未讀到（中選會新聞列表截至 9/22 無審定公告），故使用登記名單；人數與中央社 9/4 報導各選區登記人數一致。
 * 應選席次 4 席，依中選會 115/08/20 選舉公告（議員總額 65 名）：https://web.cec.gov.tw/api/file/45d8e965-f63a-46d5-b636-7d81e47cf4d1.pdf
 * 號次原訂 10/23 抽籤，因薔琵颱風桃園市 10/23 停止上班，依桃園市選委會公告延至 10/27 舉行（https://news.ltn.com.tw/news/Taoyuan/breakingnews/5615116、https://www.cna.com.tw/news/aloc/202610220378.aspx），抽籤後請補上 identity.number（2026-10-25 註）。identity.party 依登記表「推薦之政黨」，「無」寫為無黨籍。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 上屆政見取自議會官網議員介紹頁「問政理念」（與 2022 年選舉公報內容相同或相近），兌現狀況未逐則查證，一律標 unknown。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 / unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 現任者「本屆提案數」取自報導者觀測站；議長與部分議員在該站提案數為 0 或查無，未列。
 * 已知缺漏：仍查無 2026 年具體政見：劉定唐、古振豐。現任議員的 2026 年政見取自本年度市政總質詢中的具體要求。
 * 2026-10-19 第四輪補查：新增 14 則政見、0 則經歷。
 */
window.ELECTION_DATA.races.push({
  "id": "taoyuan-council-09",
  "region": "桃園市",
  "office": "第 9 選區市議員",
  "area": "楊梅區",
  "seats": 4,
  "note": "議員資料整理自議會官網、報導者觀測站、2022 年選舉公報與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數新人查無具體政見，各人資料多寡差異很大，這裡照實呈現；政見為空不代表候選人沒有主張。「做過的事」中的市政總質詢內容取自議會官網新聞稿。",
  "candidates": [
    {
      "id": "tyc9-1",
      "identity": {
        "name": "劉定唐",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任中央民意代表服務團隊執行長。",
          "source": "https://udn.com/news/story/7324/9651174"
        }
      ],
      "past": []
    },
    {
      "id": "tyc9-2",
      "identity": {
        "name": "項柏翰",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "長者社福點數由 800 點提高至 1,200 至 1,500 點，可用於運動服務",
          "detail": "將 65 歲以上長者社福點數從現行 800 點提高到 1,200 至 1,500 點，並擴大可用於健身教練與運動服務。",
          "source": "https://newtalk.tw/news/view/2026-02-25/1021427"
        },
        {
          "topic": "welfare",
          "title": "與在地健身場館合作開設免費入門教練課程",
          "detail": "由市府與在地健身場館合作，定期定額開設免費入門課程。",
          "source": "https://newtalk.tw/news/view/2026-02-25/1021427"
        },
        {
          "topic": "environment",
          "title": "更新老舊公園設施、改善無障礙動線並增設寵物友善專區",
          "detail": "更新老舊公園設施、改善無障礙動線，並增設寵物友善專區。",
          "source": "https://newtalk.tw/news/view/2026-02-25/1021427"
        },
        {
          "topic": "transport",
          "title": "檢視改善省道、國道銜接路段標線，提升夜間行車安全",
          "detail": "全面檢視省道、國道銜接路段標線並改善；另研議商圈停車位不足的解決方案。",
          "source": "https://newtalk.tw/news/view/2026-02-25/1021427"
        },
        {
          "topic": "education",
          "title": "加速老舊校舍整建並強化通學步道安全",
          "detail": "加速老舊校舍整建，補足法規要求的多元教室空間，並強化通學步道與校園周邊交通安全規劃。",
          "source": "https://newtalk.tw/news/view/2026-02-25/1021427"
        },
        {
          "topic": "transport",
          "title": "評估捷運路網延伸至楊梅，加速國道高架延伸頭份工程",
          "detail": "評估將捷運路網延伸至楊梅；加速五楊高架延伸頭份工程，並盤點瓶頸道路推動改善。",
          "source": "https://lifenews.com.tw/582667"
        },
        {
          "topic": "economy",
          "title": "爭取半導體與 AI 產業鏈進駐龍潭科學園區三期，加速擴大幼獅工業區",
          "detail": "爭取先進半導體及 AI 產業鏈進駐龍科三期，並加速擴大幼獅工業區。",
          "source": "https://lifenews.com.tw/582667"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "曾任中央民意代表秘書。",
          "source": "https://news.ltn.com.tw/news/Taoyuan/breakingnews/5499483"
        }
      ],
      "past": []
    },
    {
      "id": "tyc9-3",
      "identity": {
        "name": "鄭淑方",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "education",
          "title": "四維國小啟動校舍興建規劃並評估增設幼兒園兩歲專班",
          "detail": "於市政總質詢指出校地約 0.4 公頃已飽和，市府已爭取鄰近國防部用地，要求儘速啟動校舍興建規劃，並評估增設兩歲專班。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5849"
        },
        {
          "topic": "education",
          "title": "加速中興路周邊通學廊道改善與楊明國小校舍重建",
          "detail": "於市政總質詢敦促加速楊明國小、瑞塘國小及陽光中小學周邊中興路通學廊道改善，並儘速推動楊明國小老舊校舍重建。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5849"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "於市政總質詢建議敬老愛心卡點數擴大用於診所掛號費、農產品與日用品。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5849&chk=52bd58b3-edd0-401c-88cf-fe60692aa2d9"
        },
        {
          "topic": "welfare",
          "text": "於市政總質詢建議設立長照專責處，並成立楊梅小鎮推廣專案、活化富岡鐵道基地。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5789&chk=53342808-8473-46a0-818e-1f70dc5b5980"
        },
        {
          "topic": "safety",
          "text": "於市政總質詢要求全面清查公共滅火器採購廠商與出廠證明（楊梅區兩年內 5 起爆炸事件）。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5673&chk=5bd4fd08-4373-4ee6-9247-323011eba25e"
        },
        {
          "topic": "transport",
          "text": "本屆提案 62 件，以工務類（30 件）最多，多為楊梅區道路拓寬、排水溝改建與公共自行車站點。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/cheng-shu-fang-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任基層民意代表（縣轄市民代表）。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1018"
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
              "topic": "transport",
              "title": "開闢聯外與瓶頸道路，爭取桃園至楊梅捷運替代路網",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1018"
            },
            {
              "topic": "welfare",
              "title": "托育補助加碼，爭取定點、假日及夜間臨時托育",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1018"
            },
            {
              "topic": "welfare",
              "title": "爭取就醫專車與南區兒童醫院",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1018"
            },
            {
              "topic": "environment",
              "title": "推動共融式遊具與公園體健設施改善",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1018"
            },
            {
              "topic": "safety",
              "title": "推動楊梅分局重建及周邊市場用地活化",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1018"
            },
            {
              "topic": "environment",
              "title": "續行社子溪整治與登山步道",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1018"
            },
            {
              "topic": "economy",
              "title": "串聯休閒農業區，開發鐵道地景文化產業",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1018"
            },
            {
              "topic": "governance",
              "title": "把關市府預算",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1018"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "62 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/cheng-shu-fang-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc9-4",
      "identity": {
        "name": "李家興",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "加速楊明國小周邊道路用地取得與動工",
          "detail": "於市政總質詢指出學童上下學需大幅繞道，要求加速用地取得並儘速動工。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5835"
        },
        {
          "topic": "housing",
          "title": "依法維護梅江國宅周邊道路公共通行權",
          "detail": "於市政總質詢指出私人土地糾紛影響數百戶住戶出入，要求市府依法維護公共通行權。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5835"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "於市政總質詢要求加速榮平路貫通工程（全長 2.4 公里），明列時程與經費。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5835&chk=3284e952-a07b-4559-9cee-ad4bb3402270"
        },
        {
          "topic": "environment",
          "text": "於市政總質詢要求防範埤塘光電設施水質污染風險。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5737&chk=21006432-7552-4f03-9d1a-938d9b9ca868"
        },
        {
          "topic": "transport",
          "text": "於市政總質詢建議楊梅捷運規劃以長期人口與產業發展需求為基準，並與道路系統銜接。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5907&chk=afe46316-914d-4dee-b898-d0bd5091b22d"
        },
        {
          "topic": "governance",
          "text": "曾任基層民意代表（鎮民代表）。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1019"
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
              "title": "爭取公立托嬰及托育所",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1019"
            },
            {
              "topic": "housing",
              "title": "於公有地興建社會住宅",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1019"
            },
            {
              "topic": "welfare",
              "title": "建立食安機制",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1019"
            },
            {
              "topic": "economy",
              "title": "爭取現代化農機設備與農業政策推廣",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1019"
            },
            {
              "topic": "economy",
              "title": "落實勞工退休準備金提撥",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1019"
            },
            {
              "topic": "welfare",
              "title": "提高老人三節敬老金",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1019"
            },
            {
              "topic": "governance",
              "title": "監督市府提高服務效率、杜絕浪費",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1019"
            },
            {
              "topic": "environment",
              "title": "改善楊梅多條登山步道，12 座公園增設兒童遊戲器材與運動器材",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1019"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "3 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/li-chia-hsing-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc9-5",
      "identity": {
        "name": "黃盈淇",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "推動「小黃公車」",
          "detail": "偏遠地區民眾可提前預約計程車，開放共乘並結合敬老愛心卡",
          "source": "https://news.ltn.com.tw/news/Taoyuan/breakingnews/5499483"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "曾任里長。",
          "source": "https://news.ltn.com.tw/news/Taoyuan/breakingnews/5499483"
        }
      ],
      "past": []
    },
    {
      "id": "tyc9-6",
      "identity": {
        "name": "周玉琴",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "楊梅自立停車場由新工處統籌並整合多目標使用",
          "detail": "於市政總質詢建議自立停車場由新工處統籌、整合多目標使用；市府答詢預算將提升至 3.2 億元。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5845"
        },
        {
          "topic": "governance",
          "title": "活化楊梅火車站舊宿舍空間並改善小楊梅步道",
          "detail": "於市政總質詢要求活化楊梅火車站舊宿舍空間，並改善小楊梅步道濕滑問題。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5845"
        },
        {
          "topic": "environment",
          "title": "編列預算推動楊梅污水下水道與治水工程",
          "detail": "於市政總質詢強調污水下水道與治水工程應編列預算積極推動。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5845"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "於市政總質詢建議評估承擔特殊學生輔導任務的國中分校獨立設校，並要求加速一處社區替代道路開闢。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5845&chk=977df3f0-3b08-445c-9217-f4b56439d02d"
        },
        {
          "topic": "transport",
          "text": "於市政總質詢建議由楊梅火車站規劃鐵路支線經龍潭、關西、新埔銜接竹北六家。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5665&chk=093d424f-66a7-4c3c-8a0c-c1d4eff5fac5"
        },
        {
          "topic": "transport",
          "text": "本屆提案 125 件，以工務類（80 件）最多，多為楊梅區道路拓寬與交流道改善。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chou-yu-chin-taoyuan"
        },
        {
          "topic": "education",
          "text": "曾任科技大學講師。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1017"
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
              "topic": "transport",
              "title": "追蹤榮平路拓寬、多條瓶頸道路打通與裕誠路二期開闢",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1017"
            },
            {
              "topic": "economy",
              "title": "發展鐵道文化、茶文化與仙草節等觀光活動",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1017"
            },
            {
              "topic": "economy",
              "title": "爭取在富岡設立鐵道博物館",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1017"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "125 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chou-yu-chin-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc9-7",
      "identity": {
        "name": "古振豐",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    }
  ]
});

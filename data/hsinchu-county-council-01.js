/*
 * 2026 新竹縣議員第 1 選區（竹北市尚義里、崇義里、新港里、大義里、白地里、大眉里、麻…）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市議員選舉候選人登記彙總表」（製表日期 115/09/07，6 人，應選 4 席）
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
 * 已知缺漏：仍查無 2026 年具體政見者：陳秀玲、鄭美琴（現任者的議會質詢要求列於 platforms，並註明質詢時間）。
 * 2026-10-19 第四輪補查：新增 16 則政見、0 則經歷。
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
      "platforms": [
        {
          "topic": "welfare",
          "title": "敬老愛心卡每月點數由 500 點提高到 600 點，並開放折抵掛號費及農會、藥局消費",
          "detail": "2026 年 5 月議會總質詢提出：每月點數先提高到 600 點，之後逐年增加；比照其他縣市開放醫療院所掛號費每次折抵 50 點，以及農會、藥局消費。縣府答詢表示會期結束後一個月內研議決定。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/12陳凱榮_114018.pdf"
        },
        {
          "topic": "education",
          "title": "清寒學生獎學金取消成績門檻",
          "detail": "2026 年 5 月議會總質詢提出：現行清寒獎學金須成績 80 分以上，主張只要符合清寒資格即可申請，並參考鄰近縣市訂定中低收入戶學生助學金；教育主管機關答詢將研議修訂。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/12陳凱榮_114018.pdf"
        },
        {
          "topic": "safety",
          "title": "在竹北西區非法棄置垃圾熱點設置高解析度、車牌辨識與夜視監視器",
          "detail": "2026 年 5 月議會總質詢提出，點名鳳山溪堤防道路、鳳岡路五段 415 巷等棄置熱點，要求警察與環保單位合作科技執法，並持續增設西區監視器。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/12陳凱榮_114018.pdf"
        },
        {
          "topic": "transport",
          "title": "放大鳳岡國中、國小前大貨車禁行時段標誌並加繪路面標示",
          "detail": "2026 年 5 月議會總質詢提出：鳳岡路三段大貨車禁行時段已調整為上午 7 至 8 時、下午 3 時半至 4 時半，要求簡化標誌字樣、在路面繪製禁行時段並設置取締告示，保障學童通行與家長接送安全。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/12陳凱榮_114018.pdf"
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
      "platforms": [
        {
          "topic": "safety",
          "title": "清疏豆仔埔溪河道、加大排水斷面",
          "detail": "2026 年 8 月邀集縣府會勘時提出：平時就要維持排水暢通以因應極端氣候。縣府同意自水利橋至出海口約 3.5 公里清除河道雜草，並將淤土夯實於兩岸保護護岸。",
          "source": "https://udn.com/news/story/7324/9674450"
        },
        {
          "topic": "transport",
          "title": "重新檢討台 1 線竹北段中華路新設標線並加強宣導",
          "detail": "2026 年 7 月表示接獲陳情，新標線與民眾用路習慣差異大且宣導不足，恐成罰單陷阱與事故隱憂，已請中央民意代表協助向中央反映、重新檢討標線。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5496673"
        }
      ],
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
      "platforms": [
        {
          "topic": "education",
          "title": "每所學校設置駐點心理師",
          "detail": "讓心理專業人員進駐校園，穩定陪伴學生。",
          "source": "https://taiwangogo.tw/li-ya-fen/"
        },
        {
          "topic": "safety",
          "title": "改善學區通學安全",
          "detail": "校園周邊設置實體通學步道、增設減速平台，並降低學區車速。",
          "source": "https://taiwangogo.tw/li-ya-fen/"
        },
        {
          "topic": "education",
          "title": "爭取竹北西區親子館與挑戰型共融公園，建立行動育兒資源庫",
          "detail": "行動育兒資源庫提供專業諮詢與教具租借。",
          "source": "https://taiwangogo.tw/li-ya-fen/"
        },
        {
          "topic": "welfare",
          "title": "推動在宅醫療整合平台",
          "detail": "讓醫療服務進入家中，並整合長照資源，減少長輩就醫奔波。",
          "source": "https://taiwangogo.tw/li-ya-fen/"
        }
      ],
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
      "platforms": [
        {
          "topic": "transport",
          "title": "竹北中正國小、義民中學周邊打通騎樓、劃設通學步道",
          "detail": "2026 年 5 月議會總質詢提出：中正國小往交流道涵洞路段、義民中學及陽明高中周邊騎樓遭占用，學童被迫走在路邊；要求交通、工務、警察、教育單位跨局處提出改善時間表，至少與店家協調劃設綠色通學步道、尖峰時段禁止停車，並落實學校周邊限時停車。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/11吳傳地、何建樺、張珈源議員%20%20%20質詢稿%20%20%201150506_113943.pdf"
        },
        {
          "topic": "economy",
          "title": "修訂營建土石方自治條例，讓有價土石方可直送砂石場",
          "detail": "2026 年 5 月議會總質詢提出：土方價格暴漲影響建案與公共工程，要求比照其他縣市，讓經技師簽證的優良有價土石方免經土資場、直接運往砂石場與混凝土廠；工務主管機關答詢草案預計下半年完成。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/11吳傳地、何建樺、張珈源議員%20%20%20質詢稿%20%20%201150506_113943.pdf"
        },
        {
          "topic": "welfare",
          "title": "放寬敬老福利津貼的不動產排富門檻",
          "detail": "2026 年 5 月議會總質詢提出：竹北公告現值調漲，可能讓首次申請的長者因不動產價值超標而無法請領，要求檢討；高齡長照主管機關答詢將待中央國民年金法放寬後跟進修訂。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/11吳傳地、何建樺、張珈源議員%20%20%20質詢稿%20%20%201150506_113943.pdf"
        },
        {
          "topic": "housing",
          "title": "將竹北光明六路底一處縣有地納入社會住宅評估",
          "detail": "2026 年 5 月議會總質詢提出，該地為縣府取得的抵價地，約 8,530 平方公尺；產業主管機關答詢目前規劃引進民間資金開發，是否納入社宅仍在都市計畫審議中討論。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/11吳傳地、何建樺、張珈源議員%20%20%20質詢稿%20%20%201150506_113943.pdf"
        },
        {
          "topic": "education",
          "title": "協助竹北私立幼兒園突破準公共化 80% 門檻",
          "detail": "2026 年 5 月議會總質詢提出：竹北平價教保量能不足，業者若因平價教保機會率已達 80% 而無法加入準公共化，應依中央因人口快速移入可個別認定的但書送審；教育主管機關答詢可協助業者準備資料送審。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/11吳傳地、何建樺、張珈源議員%20%20%20質詢稿%20%20%201150506_113943.pdf"
        },
        {
          "topic": "transport",
          "title": "加速竹北交流道周邊交通改善與公車候車亭建置",
          "detail": "2026 年 10 月議會質詢提出：促請縣府加快紓解光明六路及縣政二路周邊交通；要求交通主管機關加速建置候車亭，必要時動用第二預備金。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5606069"
        }
      ],
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

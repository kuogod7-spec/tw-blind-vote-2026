/*
 * 2026 新竹縣議員第 2 選區（竹北市竹北里、竹仁里、福德里、北崙里、中崙里、文化里、興…）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市議員選舉候選人登記彙總表」（製表日期 115/09/07，14 人，應選 9 席）
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
 * 已知缺漏：仍查無 2026 年具體政見者：游雅婷、戴佩如、范格菱、杜文中、范揚琪（現任者的議會質詢要求列於 platforms，並註明質詢時間）。
 * 2026-10-19 第四輪補查：新增 40 則政見、0 則經歷。
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
      "platforms": [
        {
          "topic": "transport",
          "title": "推動人本交通與智慧交通管理",
          "detail": "保障行人路權、導入智慧交通管理改善壅塞，並升級公共運輸、推動共享運具普及。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5428954"
        },
        {
          "topic": "education",
          "title": "增設公托、公幼並落實在地就學",
          "detail": "減輕家庭育兒負擔，同時落實校園安全與在地就學權益。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5428954"
        },
        {
          "topic": "welfare",
          "title": "擴大長者照護據點並爭取各年齡層疫苗補助",
          "detail": "",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5428954"
        },
        {
          "topic": "environment",
          "title": "增建特色公園與綠地，加強環境污染稽查與食安把關",
          "detail": "",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5428954"
        },
        {
          "topic": "governance",
          "title": "持續推動議會資訊公開，強化市民參與公共事務",
          "detail": "",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5428954"
        },
        {
          "topic": "transport",
          "title": "開放大型重機與駕艙機車停放機車格，或劃設專用車格",
          "detail": "2026 年 5 月議會總質詢提出：參考其他縣市依停車場法由地方自行調整，讓大型重機可停機車格（過長者可斜停兩格），或劃設重機與駕艙機車共用格；交通主管機關答詢同意研議。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/10歐陽霆議員_113928.pdf"
        },
        {
          "topic": "transport",
          "title": "三民路、福興路、嘉興路增設人行道，嘉豐南路與莊敬南路路口增設左轉車道",
          "detail": "2026 年 5 月議會總質詢提出：要求縣府列管各案進度，對公所養護路段主動協調並協助工程經費，條件成熟的福興路（約 1.5 公里）優先改善。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/10歐陽霆議員_113928.pdf"
        },
        {
          "topic": "transport",
          "title": "光明六路打除中央分隔島設左轉車道，取消強制機車待轉",
          "detail": "2026 年 5 月議會總質詢提出：縣政五街至縣政九路設置附加左轉車道；縣政十街至縣政二路重新規劃停車空間，並在縣政六路路肩增設約 300 格機車停車位；完工後取消禁行機車與強制待轉，但保留待轉格供需要者使用。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/10歐陽霆議員_113928.pdf"
        },
        {
          "topic": "safety",
          "title": "增加取締非法棄置廢棄物的監視器預算",
          "detail": "2026 年 5 月議會總質詢提出：環保單位每年取締用監視器僅 6 至 8 支，要求明年增編預算，並由警察與環保單位訂定跨局處合作策略；環保主管機關答詢同意爭取增加。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/10歐陽霆議員_113928.pdf"
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
      "platforms": [
        {
          "topic": "housing",
          "title": "盤點竹北公有地，加速新建社會住宅",
          "detail": "2026 年 5 月議會總質詢提出：縣內社會住宅達成率在桃竹竹苗最低、尚無地方自建社宅，要求盤點竹北可用公有地加速新建。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/13蔡蕥鍹_114028.pdf"
        },
        {
          "topic": "governance",
          "title": "竹北第八公墓規劃為環保葬，並提前啟動第一、第二公墓遷葬查估",
          "detail": "2026 年 3 月提案將第八公墓規劃為環保葬；5 月議會總質詢要求不必等待園區開發案通過，提前辦理第一、第二公墓查估與補償費編列。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/13蔡蕥鍹_114028.pdf"
        },
        {
          "topic": "economy",
          "title": "研議鳳山溪橋台遺址登山步道，串聯竹北、湖口、新埔低碳觀光",
          "detail": "2026 年 6 月提案：以安全為前提先規劃步道，串聯鳳山溪自行車道。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5471190"
        },
        {
          "topic": "education",
          "title": "新建總圖書館納入日治時期州立圖書館藏書返鄉典藏",
          "detail": "2026 年 3 月要求文化主管機關釐清返鄉責任分工並公開進度，將典藏修護人力與專區空間納入總圖營運計畫。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5364237"
        }
      ],
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
      "platforms": [
        {
          "topic": "welfare",
          "title": "敬老愛心卡點數由 500 點提高到 800 至 1,000 點，並擴大到農會、藥局",
          "detail": "2026 年 4 月議會總質詢提出：由交通補助轉為生活支持，結合長照讓家屬可代購紙尿布、營養品等必需品；縣府首長答詢將請主管機關研究。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/09蔡志環議員%20%20%20質詢稿%20%20%201150428_113912.pdf"
        },
        {
          "topic": "governance",
          "title": "竹北設置都會型追思會館",
          "detail": "2026 年 4 月議會總質詢提出：督促縣府推動竹北就近治喪設施並加強與市民溝通；民政主管機關答詢將在 2027 年度預算編列設計規劃與環境可行性評估經費。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/09蔡志環議員%20%20%20質詢稿%20%20%201150428_113912.pdf"
        },
        {
          "topic": "education",
          "title": "因應物價調升營養午餐餐費",
          "detail": "2026 年 4 月議會總質詢提出：目前國小每餐 60 元、國中 67 元，要求檢討調升，並調查用餐時間與廚餘成因；教育主管機關答詢研議中。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/09蔡志環議員%20%20%20質詢稿%20%20%201150428_113912.pdf"
        },
        {
          "topic": "transport",
          "title": "增闢快捷 9 號支線，服務竹北國道西側社區",
          "detail": "2026 年 9 月爭取，服務縣政二路南側大型社區往返高鐵站與縣治區的通勤需求；縣府表示將納入年底啟動的公車路網規劃案評估。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5588090"
        },
        {
          "topic": "economy",
          "title": "加速舊量販店大樓 2、3 樓閒置店面招商，帶動縣治區商圈",
          "detail": "2026 年 10 月議會質詢提出，並建議結合對面停車場規劃連結動線。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5603688"
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
      "platforms": [
        {
          "topic": "environment",
          "title": "犬貓緊急救援醫療預算一次編足，並推動動物保護園區",
          "detail": "2026 年 5 月議會總質詢提出：醫療救援經費年年不足，要求增編（主管機關答詢 2027 年度擬由 280 萬元提高到 413 萬元）；並持續推動兼具生命教育功能的動物保護園區。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/06朱健銘議員%20%20%20質詢稿%20%20%201150505_113843.pdf"
        },
        {
          "topic": "environment",
          "title": "研議補助認養傷殘犬的飼主",
          "detail": "2026 年 5 月議會總質詢提出：針對遭獸鋏致殘的犬隻，對認養人提供營養品、飼料或醫療補助；主管機關答詢將研議額度制補助。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/06朱健銘議員%20%20%20質詢稿%20%20%201150505_113843.pdf"
        },
        {
          "topic": "transport",
          "title": "研議寵物友善公車",
          "detail": "2026 年 5 月議會總質詢提出，比照其他直轄市於非尖峰時段開放寵物搭乘；交通主管機關答詢待客運汰換為低底盤大客車後研議。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/06朱健銘議員%20%20%20質詢稿%20%20%201150505_113843.pdf"
        },
        {
          "topic": "welfare",
          "title": "比照鄰近縣市補助篩檢異常者做無痛大腸鏡",
          "detail": "2026 年 5 月議會總質詢提出，參考新竹市每人約 3,000 元補助，優先照顧經濟負擔困難的家庭；衛生主管機關答詢將與醫療團體評估。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/06朱健銘議員%20%20%20質詢稿%20%20%201150505_113843.pdf"
        },
        {
          "topic": "economy",
          "title": "為身心障礙者辦理就業媒合",
          "detail": "2026 年 5 月議會總質詢提出，希望今明兩年內針對有證照、能力佳但行動不便的求職者加強媒合。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/06朱健銘議員%20%20%20質詢稿%20%20%201150505_113843.pdf"
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
      "platforms": [
        {
          "topic": "welfare",
          "title": "補助新生兒自費健檢項目",
          "detail": "2026 年 5 月議會總質詢提出：財政許可下補助基因檢測、結構異常超音波、聽損、過敏體質與遺傳疾病等自費篩檢，並推動到校主動篩檢嬰幼兒發展。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/05林禹佑_113828.pdf"
        },
        {
          "topic": "education",
          "title": "托育補助每月加碼",
          "detail": "2026 年 5 月議會總質詢提出，比照鄰近縣市每月加碼 1,000 至 2,000 元；社政主管機關答詢中央限制地方加碼，將滾動檢討。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/05林禹佑_113828.pdf"
        },
        {
          "topic": "education",
          "title": "文興高中、自強高工增設體育班",
          "detail": "2026 年 5 月議會總質詢提出：將三級體育制度延伸到高中，增設桌球、排球、籃球、棒球等項目，讓學生不必到外鄉鎮就讀。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/05林禹佑_113828.pdf"
        },
        {
          "topic": "education",
          "title": "六家車站高架橋下闢設滑板場等青少年運動場域",
          "detail": "2026 年 5 月議會總質詢提出，並要求在公園綠地增設各類球場；教育主管機關答詢已獲鐵路單位同意無償租用 10 年，將在 7 月編列建置預算。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/05林禹佑_113828.pdf"
        },
        {
          "topic": "transport",
          "title": "通盤檢討公車路網，快捷 5 號延駛東平、鹿場、隘口里",
          "detail": "2026 年 5 月議會總質詢提出，並要求竹北都市計畫區內可設候車亭處優先設置，其餘站牌改為電子站牌。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/05林禹佑_113828.pdf"
        },
        {
          "topic": "welfare",
          "title": "成人健檢加入糖化血色素篩檢",
          "detail": "2026 年 10 月議會質詢提出，並要求加強飲料店標示稽查。",
          "source": "https://health.ltn.com.tw/article/breakingnews/5604897"
        }
      ],
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
      "platforms": [
        {
          "topic": "safety",
          "title": "高風險工廠依違規紀錄排定稽查順序，嚴管動火作業",
          "detail": "整合消防、環保、產業與職安機關，依違規紀錄與易燃物風險排定優先稽查順序；反覆違規業者限期改善；提出預防計畫與預算時程，以缺失改善率及災害損失作為管考指標。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5603585"
        },
        {
          "topic": "transport",
          "title": "重新盤點竹北公車與跨縣市通學需求，與新竹市建立交通資料協調機制",
          "detail": "檢視學生上下學時段、通勤尖峰、實際載客量、班次準點與重疊路線，作為加班與調整路線的依據。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5588091"
        },
        {
          "topic": "transport",
          "title": "交通罰鍰專款專用，依執法紀錄排定道路改善優先順序",
          "detail": "提前盤點道路改善需求，把行人違規熱點納入道路設計檢討，並追蹤改善成效。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5595017"
        },
        {
          "topic": "transport",
          "title": "針對行人死亡事故做專案檢討並公開分析",
          "detail": "2026 年 9 月針對縣內上半年 9 名行人死亡事故提出，要求公開事故地點、道路型態與原因，並據以調整下半年執行工作。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5572999"
        },
        {
          "topic": "environment",
          "title": "主動推動犬貓絕育並公開異地回置標準",
          "detail": "編列穩定預算與人力主動執行絕育，建立追蹤機制落實飼主責任，並釐清與公開異地回置的評估標準與紀錄。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5601656"
        },
        {
          "topic": "education",
          "title": "公開全縣校園運動設施安全盤點與履歷進度",
          "detail": "至少公布盤點完成率、設備總數、異常與停用件數及複查時間表，並建立縣級專責彙整、追蹤與定期公開機制。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5567834"
        }
      ],
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
      "platforms": [
        {
          "topic": "environment",
          "title": "竹北推動海綿城市，人行道改用透水鋪面",
          "detail": "2026 年 5 月議會總質詢提出：公部門建設率先採用透水鋪面，減少積水並降低地表溫度；工務主管機關答詢將在淹水潛勢較高區域試辦。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/08林碩彥議員_113859.pdf"
        },
        {
          "topic": "transport",
          "title": "路燈統一升級為智慧路燈",
          "detail": "2026 年 5 月議會總質詢提出：整合監視器、緊急按鈕、公共無線網路與空氣品質監測，並由縣府訂定規範，與植栽、街道家具一併規劃。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/08林碩彥議員_113859.pdf"
        },
        {
          "topic": "transport",
          "title": "夜間與支線路口改設感應式號誌",
          "detail": "2026 年 5 月議會總質詢提出，以車流偵測調整秒數，避免空等。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/08林碩彥議員_113859.pdf"
        },
        {
          "topic": "environment",
          "title": "啟動行道樹普查並成立行道樹景觀委員會",
          "detail": "2026 年 5 月議會總質詢提出，建議選用台灣欒樹、青楓、樟樹、無患子等兼顧景觀、生態與耐風的樹種。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/08林碩彥議員_113859.pdf"
        }
      ],
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
      "platforms": [
        {
          "topic": "transport",
          "title": "督促鄉鎮市公所申請中央幸福巴士，由縣府統籌公車路網",
          "detail": "2026 年 5 月議會總質詢提出：中央補助 85%，仍有鄉鎮未提案；主張發展軌道運輸前應先建立公車路網，由縣府統籌主導。",
          "source": "https://www.hcc.gov.tw/upload/web_program/2026/08/18/03邱靖雅議員_113749.pdf"
        }
      ],
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

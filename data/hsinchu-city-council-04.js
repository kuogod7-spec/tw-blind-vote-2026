/*
 * 2026 新竹市議員第 4 選區市議員（北區（北門、中興、大同等 30 里））：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依新竹市選舉委員會「115 年縣市議員選舉候選人登記概況彙總表」（製表 115/09/04；13 人，應選 9 席），
 * https://www.cec.gov.tw/hcec/article/64402 （附件 https://www.cec.gov.tw/api/file/8cb864fd-5945-41ec-99e6-33c0ba574d74.pdf ）。
 * 中選會 2026-10-16 審定候選人資格，新竹市市議員候選人無人不符規定（https://www.cec.gov.tw/hcec/article/65212）；黨籍已於 2026-10-25 對照登記表「推薦之政黨」欄核對無誤。
 * 號次抽籤原訂 10/23，因薔琵颱風新竹市停止上班，順延至 2026-10-27 10:00 舉行（新竹市選委會 https://www.cec.gov.tw/hcec/article/65309 ；自由時報 https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5615588 ）。截至 2026-10-25 尚無結果，identity.number 待 10/27 抽籤後補上。
 * 選區範圍依中選會 114/09/26 公告（https://web.cec.gov.tw/api/file/59c5c972-d1ca-455d-9c07-ceb452c3e56f.odt）；應選席次依自由時報 2026-09-04 報導（https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5563478）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」與近期提案取自新竹市議會官網議員介紹頁。標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 查無資料的候選人照樣收錄，platforms / record 為空陣列。
 * 已知缺漏：仍查無 2026 年具體政見者：王雲慶、林士凱、曾國維（現任者的議會提案列於 record）。
 * 2026-11-02 第六輪補查：新增 1 則政見、0 則經歷。
 * 2026-10-19 第四輪補查：新增 0 則政見、0 則經歷。
 * 2026-11-02 第五輪補查：新增 12 則政見、1 則經歷。
 * 號次：依 10/27 抽籤結果補上，並與中選會選舉資料庫的候選人號次逐一核對（https://info.cec.gov.tw/vote2026/static/json/cand/T/10018.json ；2026-11-02 註）。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-city-council-04",
  "region": "新竹市",
  "office": "第 4 選區市議員",
  "area": "北區（北門、中興、大同等 30 里）",
  "seats": 9,
  "note": "議員政見整理自候選人公開資料、政黨候選人介紹頁、議會官網與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，各人資料多寡差異很大，這裡照實呈現；現任者的「做過的事」以議會官網列出的近期提案為主。",
  "candidates": [
    {
      "id": "hcc4-1",
      "identity": {
        "name": "彭昆耀",
        "party": "無黨籍",
        "number": 5
      },
      "platforms": [
        {
          "topic": "safety",
          "title": "督促南寮消防分隊新廳舍遷建工程如期動工完工",
          "detail": "2026 年 9 月議會定期會質詢追問南寮消防廳舍遷建進度，要求讓轄區消防人員早日遷入新廳舍。",
          "source": "https://www.taiwanhot.net/news/1148479/%E7%AB%B9%E5%B8%82%E5%8D%97%E5%AF%AE%E6%B6%88%E9%98%B2%E5%BB%B3%E8%88%8D%E9%81%B7%E5%BB%BA%E6%9C%88%E5%BA%95%E5%AE%8C%E6%88%90%E6%8B%9B%E6%A8%99+%E9%A0%90%E8%A8%8811%E6%9C%88%E4%B8%AD%E6%97%AC%E5%8B%95%E5%9C%9F"
        }
      ],
      "record": [
        {
          "topic": "environment",
          "text": "擔任地方民意代表期間提案（前一屆）建請市府對中寮、海濱、港北、南寮里淹水問題提出通盤檢討與改善計畫。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=28"
        },
        {
          "topic": "environment",
          "text": "擔任地方民意代表期間提案（前一屆）建請市府對新雅里和平路巷弄淹水提出改善計畫。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=28"
        },
        {
          "topic": "safety",
          "text": "擔任地方民意代表期間提案（前一屆）建請市府改善公道五路四段與東大路三段路口行車安全。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=28"
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
              "title": "推動第五公墓遷葬並規劃後續用地",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=28"
            },
            {
              "topic": "welfare",
              "title": "推動南寮集會所落成",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=28"
            },
            {
              "topic": "environment",
              "title": "推動雨水下水道工程改善淹水",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=28"
            },
            {
              "topic": "economy",
              "title": "監督新漁產直銷中心進度",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=28"
            },
            {
              "topic": "economy",
              "title": "完善漁民作業空間",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=28"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc4-2",
      "identity": {
        "name": "王雲慶",
        "party": "中國國民黨",
        "number": 2
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hcc4-3",
      "identity": {
        "name": "蕭志潔",
        "party": "中國國民黨",
        "number": 3
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "要求完善市立棒球場大型賽事散場交通疏運",
          "detail": "於議會指出市立棒球場 11 月起將舉辦約 1.5 萬名觀眾規模的賽事，要求交通處完善散場疏運機制，並同時保障周邊住戶、補習班、商家及棒球場地下停車場月租戶的權益。",
          "source": "https://udn.com/news/story/7324/9778415"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府盤點改善金竹、金雅、湳中、境福里人行道路樹竄根問題。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=26"
        },
        {
          "topic": "environment",
          "text": "擔任地方民意代表期間提案建請市府改善水溝清理方式，清除油污與施工遺留物。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=26"
        },
        {
          "topic": "governance",
          "text": "擔任地方民意代表期間提案建請市府彈性活用士林段約 1,356 平方公尺市有閒置空地。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=26"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "議會官網所列上屆政見為原則性標語（服務、監督、健康促進、關懷弱勢、幼教托育），沒有可追蹤的具體項目，因此不列。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc4-4",
      "identity": {
        "name": "林士凱",
        "party": "民主進步黨",
        "number": 6
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任法院書記官、縣市政府採購專業人員。",
          "source": "https://udn.com/news/story/7314/9366882"
        },
        {
          "topic": "governance",
          "text": "曾任地方民意代表辦公室主任。",
          "source": "https://udn.com/news/story/7314/9366882"
        }
      ],
      "past": []
    },
    {
      "id": "hcc4-5",
      "identity": {
        "name": "曾國維",
        "party": "民主進步黨",
        "number": 4
      },
      "platforms": [],
      "record": [
        {
          "topic": "economy",
          "text": "曾從事營造業板模工作。",
          "source": "https://udn.com/news/story/7314/9366882"
        }
      ],
      "past": []
    },
    {
      "id": "hcc4-6",
      "identity": {
        "name": "黃美慧",
        "party": "中國國民黨",
        "number": 8
      },
      "platforms": [
        {
          "topic": "education",
          "title": "推動客語跨局處推廣，市府總機增設客語語音選項",
          "detail": "於議會指出本市客語認證率低於全國平均、相關計畫欠缺量化指標，建議客語推廣由文化、教育、民政、行政及產業等局處共同負責，增加日常使用機會；具體建議包括市府總機語音增設客語選項，以及在客家聚落的關東市場設置客語問候標示。市府回應將朝總機增設客語選項辦理，市場部分將研議。",
          "source": "https://udn.com/news/story/7324/9799756"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請將康樂里東大路三段 335 巷納入 2026 年路平計畫。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=25"
        },
        {
          "topic": "safety",
          "text": "擔任地方民意代表期間提案建請移除榮濱南路人行道高壓電桿旁行道樹。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=25"
        },
        {
          "topic": "environment",
          "text": "擔任地方民意代表期間提案建請市府將動物園改型為親子生態兒童樂園。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=25"
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
              "title": "推動公立動物火化場",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=25"
            },
            {
              "topic": "safety",
              "title": "成立南寮地區電力改善監督小組",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=25"
            },
            {
              "topic": "environment",
              "title": "爭取興建機場滯洪池，改善南寮等低窪地區排水",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=25"
            },
            {
              "topic": "governance",
              "title": "設立法律服務中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=25"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc4-7",
      "identity": {
        "name": "楊玲宜",
        "party": "民主進步黨",
        "number": 7
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "推動台大醫院新竹分院湳雅院區興建",
          "detail": "於議會質詢指出湳雅院區擴建案多年未有進展，急診滯留 48 小時的比例上升，要求市府推動院區興建，紓解在地醫療量能不足。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5583802"
        },
        {
          "topic": "environment",
          "title": "活化閒置的湳雅退舍土地，建議改設公園",
          "detail": "於議會建議活化已無人居住、閒置多時的湳雅退舍土地，例如改設公園，補足周邊公園綠地不足。",
          "source": "https://www.thehubnews.net/archives/670136"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案建請市府向中央反映，鬆綁幼兒園教保代班人員資格限制。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=23"
        },
        {
          "topic": "education",
          "text": "擔任地方民意代表期間提案建請市府放寬國小課後照顧及輔導人員進用資格，補足人力缺口。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=23"
        },
        {
          "topic": "economy",
          "text": "擔任地方民意代表期間提案建請市府檢視南寮漁產直銷中心公共設施，增設座椅與垃圾分類設施並加強清潔。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=23"
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
              "title": "爭取 65 歲以上長輩免費健康檢查",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=23"
            },
            {
              "topic": "welfare",
              "title": "擴大敬老愛心卡適用範圍",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=23"
            },
            {
              "topic": "welfare",
              "title": "爭取北區第二座親子館",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=23"
            },
            {
              "topic": "environment",
              "title": "第五公墓遷移後規劃南寮森林公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=23"
            },
            {
              "topic": "transport",
              "title": "爭取 YouBike 一里一站點",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=23"
            },
            {
              "topic": "transport",
              "title": "爭取輕軌二階段經國路至南寮",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=23"
            },
            {
              "topic": "transport",
              "title": "加速新建台 68 線武陵連通竹北",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=23"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc4-8",
      "identity": {
        "name": "鄭慶欽",
        "party": "無黨籍",
        "number": 11
      },
      "platforms": [
        {
          "topic": "safety",
          "title": "改善公園遊具高溫問題並加速增設遮陽設施",
          "detail": "於議會要求市府在高溫時段抽測特色公園及鄰里遊戲場的遊具表面溫度；共融遊戲場新建或改建時納入遮陽率與樹蔭規畫；南寮、舊港及北區大型公園加速增設遮陽棚、遮陽網或噴霧降溫設備；評估以木屑、細砂或透水降溫材質取代高蓄熱橡膠地墊；並訂定高溫遊戲警示指引。市府回應將選定高使用率遊戲場量測溫度，今年預計改善 5 處。",
          "source": "https://udn.com/news/story/7324/9797163"
        },
        {
          "topic": "safety",
          "title": "校園導入電子圍籬與即時通報系統，補足輔導人力",
          "detail": "於議會要求市府檢測校園死角與無圍牆校區，導入智慧校園電子圍籬與即時通報系統協助校警人力，並補足學生輔導諮商中心的心理師與社工師編制。市府回應明年度已編列約 8,000 多萬元用於第一線校安人力與科技設備。",
          "source": "https://tw.news.yahoo.com/%E5%96%AA%E5%B1%8D%E7%85%99%E5%BD%88-%E7%AB%84%E6%A0%A1%E5%9C%92%E5%AE%B6%E9%95%B7%E5%BF%83%E9%A9%9A-%E9%84%AD%E6%85%B6%E6%AC%BD%E6%8F%AA%E9%98%B2%E8%AD%B7%E6%AD%BB%E8%A7%92-%E6%95%99%E8%82%B2%E8%99%95%E6%80%A5%E7%A0%B88%E5%8D%83%E8%90%AC%E8%A3%9C%E7%A0%B4%E7%B6%B2-045254015.html"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府重新刨鋪湳雅街 282 巷。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=29"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府全面檢修路基不穩的路面。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=29"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府重新刨鋪愛文街及其 26 巷。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=29"
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
              "title": "設籍兩年、年滿 65 歲免繳健保費",
              "status": "partial",
              "note": "市府補助符合資格的 65 歲以上長者每月最高 826 元健保費，非全額或全面免繳；個人角色無法查證",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=29"
            },
            {
              "topic": "education",
              "title": "增設公立幼兒園",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=29"
            },
            {
              "topic": "economy",
              "title": "與觀光夜市合作舉辦美食嘉年華",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=29"
            },
            {
              "topic": "governance",
              "title": "提供義務法律諮詢",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=29"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc4-9",
      "identity": {
        "name": "林彥甫",
        "party": "時代力量",
        "number": 1
      },
      "platforms": [
        {
          "topic": "safety",
          "title": "住宅區飲酒店家比照麻將館實質審查",
          "detail": "於議會建議市府對設於住宅區的飲酒店家，比照麻將館的實質審查方式把關，減少深夜酒客滋擾、維護住宅安寧。",
          "source": "https://www.thehubnews.net/archives/670159"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府於武陵路園區周邊關鍵路口增設及修整無障礙斜坡。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=24"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府開闢金雅段 44 地號工務用地道路，避免長期被占用為停車場。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=24"
        },
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建請市府於台 68 線橋下籃球場旁空地增設一般及兒童籃球框。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=24"
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
              "topic": "governance",
              "title": "推動重大施政前期公聽會",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=24"
            },
            {
              "topic": "transport",
              "title": "逐步取消強制機車兩段式左轉",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=24"
            },
            {
              "topic": "transport",
              "title": "督促新設人行道、整平騎樓",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=24"
            },
            {
              "topic": "economy",
              "title": "活化武昌街活動中心與中正台夜市",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=24"
            },
            {
              "topic": "housing",
              "title": "加速建置社會住宅與公托中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=24"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc4-10",
      "identity": {
        "name": "吳旭豐",
        "party": "中國國民黨",
        "number": 13
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "爭取北門市場停車優惠與攤商月租折扣",
          "detail": "於議會單位業務質詢針對北門市場提出優惠建議，包括停車優惠與攤商月租折扣；報導未說明優惠幅度。",
          "source": "https://www.thehubnews.net/archives/670136"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建請完善虎林棒球場周邊配套措施，兼顧居民生活品質。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=21"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府刨鋪重建田美三街（鐵道路至光華東一街段）。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=21"
        },
        {
          "topic": "environment",
          "text": "擔任地方民意代表期間提案建請市府協調改善水田街巷弄防火間隔排水設施高低落差。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=21"
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
              "title": "台 61 線快速道路高架化",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=21"
            },
            {
              "topic": "transport",
              "title": "打通武陵高架橋",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=21"
            },
            {
              "topic": "transport",
              "title": "興建殯儀館第二停車場",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=21"
            },
            {
              "topic": "economy",
              "title": "推動果菜市場遷建",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=21"
            },
            {
              "topic": "governance",
              "title": "爭取監獄遷建",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=21"
            },
            {
              "topic": "environment",
              "title": "加速第五公墓改建公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=21"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc4-11",
      "identity": {
        "name": "許竹見",
        "party": "無黨籍",
        "number": 10
      },
      "platforms": [
        {
          "topic": "education",
          "title": "改善基層運動設施，強化在地運動人才培育",
          "detail": "競選總部成立時表示，將從基層訓練、場地建設與競技運動發展著手，推動教育與體育銜接、改善基層運動設施，強化在地培育機制；並將監督市立棒球場重啟與公共工程安全。尚未提出具體地點、預算或期程。",
          "source": "https://www.cdns.com.tw/articles/1479562"
        }
      ],
      "record": [],
      "past": []
    },
    {
      "id": "hcc4-12",
      "identity": {
        "name": "孫宗孝",
        "party": "無黨籍",
        "number": 9
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "爭取社區共餐據點與公共托育資源",
          "detail": "競選總部成立時表示將爭取北區的社區共餐據點及公共托育資源，兼顧長者與幼兒照顧；未提出數量或期程。",
          "source": "https://www.thehubnews.net/archives/670695"
        }
      ],
      "record": [],
      "past": []
    },
    {
      "id": "hcc4-13",
      "identity": {
        "name": "蔡文盛",
        "party": "台灣民眾黨",
        "number": 12
      },
      "platforms": [
        {
          "topic": "education",
          "title": "盤點北區校園與運動設施並爭取修繕整建",
          "detail": "提出盤點北區校園與體育設施，爭取修繕整建，因應匹克球等新興運動的場地需求。",
          "source": "https://cnews.com.tw/174261028a07/"
        },
        {
          "topic": "education",
          "title": "本土語言認證獎勵金翻倍，本土語教師納入教師節禮金",
          "detail": "與其他多名議員候選人聯合提出：本市原住民族語言能力認證及客語認證的獎勵金翻倍，並將原住民族語、客語、閩南語教師全面納入教師節禮金發放對象；未公布金額。",
          "source": "https://udn.com/news/story/7324/9772662"
        }
      ],
      "record": [
        {
          "topic": "economy",
          "text": "曾任地方農產運銷公司高階主管。",
          "source": "https://udn.com/news/story/124652/9420003"
        },
        {
          "topic": "governance",
          "text": "曾任基層里長、國小家長會長。",
          "source": "https://eebulletin.cec.gov.tw/111/22%E6%96%B0%E7%AB%B9%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%96%B0%E7%AB%B9%E5%B8%82%E7%AC%AC04%E9%81%B8%E8%88%89%E5%8D%80.pdf"
        },
        {
          "topic": "economy",
          "text": "擔任地方農產運銷公司高階主管期間，推動市場環境改善、垃圾減量，並加強農產品農藥殘留檢驗（本人說法）。",
          "source": "https://cnews.com.tw/174261028a07/"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "未當選",
          "note": "參選結果取自 2026 年聯合報選情報導，2022 年選舉公報亦列其為候選人；未查得得票數。",
          "promises": [],
          "rates": []
        }
      ]
    }
  ]
});

/*
 * 2026 桃園市議員第 3 選區市議員（八德區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，登記名單，非審定名單），8 人，應選 5 席（席次依中選會 115/08/20 公告）。
 * 審定名單 10/16 公告（本次整理時未能取得審定名單全文），號次原訂 10/23 抽籤，因薔琵颱風桃園市 10/23 停止上班，依桃園市選委會公告延至 10/27 舉行（https://news.ltn.com.tw/news/Taoyuan/breakingnews/5615116、https://www.cna.com.tw/news/aloc/202610220378.aspx），抽籤後請補上 identity.number（2026-10-25 註）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 現任者的「過去政見」取自議會官網議員介紹頁（2022 年參選政見）；提案數取自報導者觀測站。兌現狀況未逐則查證，一律標 unknown。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 / unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 劉茂羣、蔡永芳為前任議員；過去政見因選舉公報版面無法可靠對應未收錄。
 * 已知缺漏：段林淑婷查無可收錄資料；林晏良僅查得交通政見。許家睿、劉茂羣、蔡永芳、楊朝偉、呂林小鳳仍查無 2026 年具體政見（第四輪補查因搜尋額度用盡，僅部分完成）。
 * 2026-10-19 第四輪補查：新增 1 則政見、0 則經歷；本輪搜尋額度用盡，僅補查到 1 位現任者的議會具體要求，其餘候選人待選舉公報發布後再補。
 * 號次：依 10/27 抽籤結果補上（https://www.ettoday.net/news/20261027/3261542.htm；2026-10-27 註）。
 */
window.ELECTION_DATA.races.push({
  "id": "taoyuan-council-03",
  "region": "桃園市",
  "office": "第 3 選區市議員",
  "area": "八德區",
  "seats": 5,
  "note": "議員政見整理自議會官網、報導者觀測站、選舉公報與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人查無 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現；政見為空不代表候選人沒有主張。",
  "candidates": [
    {
      "id": "tyc3-1",
      "identity": {
        "name": "段林淑婷",
        "party": "無黨籍",
        "number": 3
      },
      "platforms": [],
      "record": []
    },
    {
      "id": "tyc3-2",
      "identity": {
        "name": "林晏良",
        "party": "台灣民眾黨",
        "number": 4
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "每年新增 150 站以上公共自行車站點",
          "detail": "全市現有 685 站",
          "source": "https://udn.com/news/story/6656/9674484"
        },
        {
          "topic": "transport",
          "title": "配合捷運綠線通車建立完整自行車路網",
          "detail": "",
          "source": "https://udn.com/news/story/6656/9674484"
        }
      ],
      "record": []
    },
    {
      "id": "tyc3-3",
      "identity": {
        "name": "許家睿",
        "party": "民主進步黨",
        "number": 2
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案 262 件，以工務類（107 件）最多，其次為民政、教育類。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/hsu-chia-jui-taoyuan"
        },
        {
          "topic": "welfare",
          "text": "提案建議社會局建立「老人照顧老人」個案識別與追蹤機制。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/hsu-chia-jui-taoyuan"
        },
        {
          "topic": "governance",
          "text": "提案建議設置跨局處性別友善業務聯繫會報。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/hsu-chia-jui-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任中央民意代表國會辦公室主任、科技大學講師。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=991"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "2022 年參選時提出的政見，取自議會官網議員介紹頁；兌現狀況未逐則查證。",
          "promises": [
            {
              "topic": "housing",
              "title": "捷運綠線沿線推動都市計畫，縫合八德生活圈",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=991"
            },
            {
              "topic": "transport",
              "title": "監督大鶯豐德交流道並解決道路瓶頸",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=991"
            },
            {
              "topic": "environment",
              "title": "加速電線桿地下化並清除廢棄纜線",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=991"
            },
            {
              "topic": "environment",
              "title": "設置社區型寵物公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=991"
            },
            {
              "topic": "governance",
              "title": "公開服務處財報，議員建議款納入參與式預算",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=991"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "262 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/hsu-chia-jui-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc3-4",
      "identity": {
        "name": "劉茂羣",
        "party": "中國國民黨",
        "number": 1
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任地方民意代表多屆（改制前縣議員及改制後市議員）（本人說法）。",
          "source": "https://eebulletin.cec.gov.tw/107/04%E6%A1%83%E5%9C%92%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%A1%83%E5%9C%92%E5%B8%82%E7%AC%AC03%E9%81%B8%E8%88%89%E5%8D%80.pdf"
        }
      ]
    },
    {
      "id": "tyc3-5",
      "identity": {
        "name": "蔡永芳",
        "party": "民主進步黨",
        "number": 5
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任縣轄市民意代表及地方民意代表一屆。",
          "source": "https://eebulletin.cec.gov.tw/111/04%E6%A1%83%E5%9C%92%E5%B8%82/02%E5%B8%82%E8%AD%B0%E5%93%A1/%E6%A1%83%E5%9C%92%E5%B8%82%E8%AD%B0%E6%9C%83%E7%AC%AC3%E5%B1%86%E8%AD%B0%E5%93%A1%E9%81%B8%E8%88%89%E7%AC%AC3%E9%81%B8%E8%88%89%E5%8D%80%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1.pdf"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2018–2022",
          "elected": true,
          "result": "得票率 13.74%，當選",
          "note": "得票率取自維基百科整理之中選會結果；2018 年選舉公報版面無法可靠對應政見，未收錄。",
          "promises": [],
          "rates": []
        },
        {
          "role": "地方民意代表（競選連任）",
          "period": "2022",
          "elected": false,
          "result": "得票率 10.50%，未當選",
          "note": "得票率取自維基百科整理之中選會結果。",
          "promises": [],
          "rates": [
            {
              "label": "得票率",
              "value": "10.50%",
              "by": "中選會（維基百科整理）",
              "source": "https://zh.wikipedia.org/wiki/2022%E5%B9%B4%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E7%9B%B4%E8%BD%84%E5%B8%82%E8%AD%B0%E5%93%A1%E5%8F%8A%E7%B8%A3%E5%B8%82%E8%AD%B0%E5%93%A1%E9%81%B8%E8%88%89%E9%81%B8%E8%88%89%E5%8D%80%E6%8A%95%E7%A5%A8%E7%B5%90%E6%9E%9C%E5%88%97%E8%A1%A8"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc3-6",
      "identity": {
        "name": "朱珍瑤",
        "party": "中國國民黨",
        "number": 8
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "增設公共自行車站點並提高電動輔助車比例",
          "detail": "2026 年 8 月交通局工作報告質詢提出。",
          "source": "https://www.ettoday.net/news/20260815/3219526.htm"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案 243 件，以民政類（65 件）最多，其次為工務、警衛類。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chu-chen-yao-taoyuan"
        },
        {
          "topic": "environment",
          "text": "提案建議擴大黑水虻廚餘處理試辦，並補助市民購置家用廚餘機。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chu-chen-yao-taoyuan"
        },
        {
          "topic": "governance",
          "text": "提案建議 1999 市民專線導入 AI 語音辨識，提升通報與分流效率。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chu-chen-yao-taoyuan"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2018–2026",
          "elected": true,
          "result": "",
          "note": "2022 年參選時提出的政見，取自議會官網議員介紹頁；介紹頁另有本人自述「2018 年八條政見兌現七條」，未查證。",
          "promises": [
            {
              "topic": "welfare",
              "title": "推動大型教學級醫院進駐八德",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=988"
            },
            {
              "topic": "welfare",
              "title": "推動失智症園區並提升非榮民長照病床數",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=988"
            },
            {
              "topic": "transport",
              "title": "監督八德聯外道路進度",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=988"
            },
            {
              "topic": "transport",
              "title": "監督捷運工期，不接受延宕",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=988"
            },
            {
              "topic": "governance",
              "title": "廢除議員配合款",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=988"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "243 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chu-chen-yao-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc3-7",
      "identity": {
        "name": "楊朝偉",
        "party": "中國國民黨",
        "number": 6
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案 271 件，以工務類（80 件）最多，其次為教育、民政類。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/yang-chao-wei-taoyuan"
        },
        {
          "topic": "housing",
          "text": "提案要求加速推動可負擔住宅政策並公開細節。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/yang-chao-wei-taoyuan"
        },
        {
          "topic": "governance",
          "text": "提案要求擴編票務稽查人力，遏止市府場館展演黃牛炒票。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/yang-chao-wei-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任鎮民代表。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=989"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "1998–2018、2022–2026",
          "elected": true,
          "result": "",
          "note": "2022 年參選時提出的政見，取自議會官網議員介紹頁；兌現狀況未逐則查證。",
          "promises": [
            {
              "topic": "transport",
              "title": "推動增闢國道二號國際路微型交流道",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=989"
            },
            {
              "topic": "transport",
              "title": "拓寬和強路（和平路至東勇街段）",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=989"
            },
            {
              "topic": "education",
              "title": "推動仁德國小、大福國小設校",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=989"
            },
            {
              "topic": "welfare",
              "title": "爭取公費肺炎鏈球菌及流感疫苗接種年齡降至 60 歲",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=989"
            },
            {
              "topic": "environment",
              "title": "擴大工廠露天停車場設置太陽能板補助",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=989"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "271 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/yang-chao-wei-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc3-8",
      "identity": {
        "name": "呂林小鳳",
        "party": "民主進步黨",
        "number": 7
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案 69 件，以工務類（37 件）最多，其次為教育、民政類。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/lu-lin-hsiao-feng-taoyuan"
        },
        {
          "topic": "environment",
          "text": "提案建議成立市公園管理處。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/lu-lin-hsiao-feng-taoyuan"
        },
        {
          "topic": "education",
          "text": "提案爭取學童比照臺北市實施每日喝鮮奶政策。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/lu-lin-hsiao-feng-taoyuan"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2006–2026",
          "elected": true,
          "result": "",
          "note": "2022 年參選時提出的政見，取自議會官網議員介紹頁；兌現狀況未逐則查證。",
          "promises": [
            {
              "topic": "transport",
              "title": "監督大鶯豐德交流道兩年內完成土地徵收並動工",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=987"
            },
            {
              "topic": "education",
              "title": "興建仁德國小，預計 2024 年招生",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=987"
            },
            {
              "topic": "economy",
              "title": "督促在八德擴大都市計畫區興建大學分校，打造智慧健康創新園區",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=987"
            },
            {
              "topic": "transport",
              "title": "爭取八德公車轉運站及大型醫院專車",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=987"
            },
            {
              "topic": "welfare",
              "title": "爭取一據點一藥師制度，提供送藥到府服務",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=987"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "69 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/lu-lin-hsiao-feng-taoyuan"
            }
          ]
        }
      ]
    }
  ]
});

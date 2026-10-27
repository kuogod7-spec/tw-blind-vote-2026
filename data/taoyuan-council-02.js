/*
 * 2026 桃園市議員第 2 選區市議員（龜山區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，登記名單，非審定名單），9 人，應選 5 席（席次依中選會 115/08/20 公告）。
 * 審定名單 10/16 公告（本次整理時未能取得審定名單全文），號次原訂 10/23 抽籤，因薔琵颱風桃園市 10/23 停止上班，依桃園市選委會公告延至 10/27 舉行（https://news.ltn.com.tw/news/Taoyuan/breakingnews/5615116、https://www.cna.com.tw/news/aloc/202610220378.aspx），抽籤後請補上 identity.number（2026-10-25 註）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 現任者的「過去政見」取自議會官網議員介紹頁（2022 年參選政見）；提案數取自報導者觀測站。兌現狀況未逐則查證，一律標 unknown。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 / unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 林明義：2022 年選舉公報第 2 選區有同名參選人，但無來源確認為同一人，未收其過去紀錄。
 * 已知缺漏：呂學記、陳泓維查無可收錄資料；陳泓維僅有理念性陳述（新世代、貼近生活需求），未收。陳雅倫、李宗豪、林明義、江冠妤、高華駿仍查無 2026 年具體政見（第四輪補查因搜尋額度用盡，僅部分完成）。
 * 2026-10-19 第四輪補查：新增 1 則政見、0 則經歷；本輪搜尋額度用盡，僅補查到 1 位現任者的議會具體要求，其餘候選人待選舉公報發布後再補。
 * 號次：依 10/27 抽籤結果補上（https://www.ettoday.net/news/20261027/3261542.htm；2026-10-27 註）。
 */
window.ELECTION_DATA.races.push({
  "id": "taoyuan-council-02",
  "region": "桃園市",
  "office": "第 2 選區市議員",
  "area": "龜山區",
  "seats": 5,
  "note": "議員政見整理自議會官網、報導者觀測站、選舉公報與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人查無 2026 年具體政見，各人資料多寡差異很大，這裡照實呈現；政見為空不代表候選人沒有主張。",
  "candidates": [
    {
      "id": "tyc2-1",
      "identity": {
        "name": "呂學記",
        "party": "無黨籍",
        "number": 1
      },
      "platforms": [],
      "record": []
    },
    {
      "id": "tyc2-2",
      "identity": {
        "name": "陳雅倫",
        "party": "民主進步黨",
        "number": 9
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案 151 件，以工務類（81 件）最多，其次為教育、民政類。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chen-ya-lun-taoyuan"
        },
        {
          "topic": "transport",
          "text": "提案建議調整一條市區公車路線，增設停靠文青國中小。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chen-ya-lun-taoyuan"
        },
        {
          "topic": "education",
          "text": "提案建議增設龜山區集中式特教班。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chen-ya-lun-taoyuan"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2018–2026",
          "elected": true,
          "result": "",
          "note": "2022 年參選時提出的政見，取自議會官網議員介紹頁；兌現狀況未逐則查證。",
          "promises": [
            {
              "topic": "education",
              "title": "在龜山設置臨時托育中心並延長收托時間",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=983"
            },
            {
              "topic": "education",
              "title": "監督大崗高中及文青國中小設校進度，爭取龜山新設圖書館",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=983"
            },
            {
              "topic": "transport",
              "title": "監督捷運棕線進度並增加龜山公車路網",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=983"
            },
            {
              "topic": "welfare",
              "title": "爭取龜山新設老人文康中心並擴大敬老卡使用範圍",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=983"
            },
            {
              "topic": "economy",
              "title": "推動龜山設置青年創業基地",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=983"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "151 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chen-ya-lun-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc2-3",
      "identity": {
        "name": "周曉芸",
        "party": "台灣民眾黨",
        "number": 6
      },
      "platforms": [
        {
          "topic": "safety",
          "title": "加速完成學童通學廊道",
          "detail": "全市 141 所學校中仍有 50 所尚未完成改善",
          "source": "https://udn.com/news/story/6656/9674484"
        },
        {
          "topic": "transport",
          "title": "提高人行道普及率",
          "detail": "參考南韓經驗降低車速、改善路口設計並擴大行人空間",
          "source": "https://udn.com/news/story/6656/9674484"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "曾任中央民意代表地方辦公室主任。",
          "source": "https://www.ettoday.net/news/20260520/3169051.htm"
        }
      ]
    },
    {
      "id": "tyc2-4",
      "identity": {
        "name": "李宗豪",
        "party": "民主進步黨",
        "number": 3
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案 173 件，以工務類（79 件）最多，其次為警衛、民政類。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/li-tsung-hao-taoyuan"
        },
        {
          "topic": "economy",
          "text": "提案建議設立職場霸凌申訴委員會。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/li-tsung-hao-taoyuan"
        },
        {
          "topic": "safety",
          "text": "提案建議研擬極端氣候停工指引標準，維護勞工安全。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/li-tsung-hao-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任地方民意代表特別助理，並曾任職半導體科技公司。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=984"
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
              "topic": "environment",
              "title": "要求煉油廠限期停工遷廠，原址規劃高科技園區",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=984"
            },
            {
              "topic": "economy",
              "title": "加速推動工業區擴大，創造就業機會",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=984"
            },
            {
              "topic": "transport",
              "title": "加速捷運棕線開工",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=984"
            },
            {
              "topic": "education",
              "title": "加速文青國小及大崗高中建校",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=984"
            },
            {
              "topic": "welfare",
              "title": "增設大型國民運動中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=984"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "173 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/li-tsung-hao-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc2-5",
      "identity": {
        "name": "陳泓維",
        "party": "親民黨",
        "number": 2
      },
      "platforms": [],
      "record": []
    },
    {
      "id": "tyc2-6",
      "identity": {
        "name": "林明義",
        "party": "中國國民黨",
        "number": 7
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "擔任地方宗教團體董事長。",
          "source": "https://www.ettoday.net/news/20260520/3169265.htm"
        }
      ]
    },
    {
      "id": "tyc2-7",
      "identity": {
        "name": "江冠妤",
        "party": "中國國民黨",
        "number": 8
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任中央民意代表助理。",
          "source": "https://www.ettoday.net/news/20260520/3169265.htm"
        }
      ]
    },
    {
      "id": "tyc2-8",
      "identity": {
        "name": "高華駿",
        "party": "中國國民黨",
        "number": 5
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "現任里長。",
          "source": "https://www.ettoday.net/news/20260520/3169265.htm"
        }
      ]
    },
    {
      "id": "tyc2-9",
      "identity": {
        "name": "孫韻璇",
        "party": "中國國民黨",
        "number": 4
      },
      "platforms": [
        {
          "topic": "safety",
          "title": "加強公共自行車人車共道規範宣導，並在 APP 與車體加註多語系警語",
          "detail": "2026 年 8 月交通局工作報告質詢提出。",
          "source": "https://www.ettoday.net/news/20260815/3219526.htm"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案 16 件，以工務類（8 件）最多，其次為警衛、民政類。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/sun-yun-hsuan-taoyuan"
        },
        {
          "topic": "safety",
          "text": "提案要求改善東萬壽路山坡土石坍方問題。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/sun-yun-hsuan-taoyuan"
        },
        {
          "topic": "transport",
          "text": "提案建議交通局研擬電動滑板車管理規範。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/sun-yun-hsuan-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任里長及地方民意代表服務處主任。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=985"
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
              "topic": "education",
              "title": "推動增設大崗完全中學",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=985"
            },
            {
              "topic": "transport",
              "title": "加速長庚轉運站營運，整合機場捷運、客運等運具",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=985"
            },
            {
              "topic": "welfare",
              "title": "爭取新建大坪頂國民運動中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=985"
            },
            {
              "topic": "welfare",
              "title": "推動 0–6 歲兒童醫療保險",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=985"
            },
            {
              "topic": "welfare",
              "title": "推動女性凍卵補助",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=985"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "16 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/sun-yun-hsuan-taoyuan"
            }
          ]
        }
      ]
    }
  ]
});

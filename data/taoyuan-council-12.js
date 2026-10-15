/*
 * 2026 桃園市議員第 12 選區市議員（觀音區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，3 人）
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 *   中選會今日（10/16）審定名單公告時尚未讀到（中選會新聞列表截至 9/22 無審定公告），故使用登記名單；人數與中央社 9/4 報導各選區登記人數一致。
 * 應選席次 2 席，依中選會 115/08/20 選舉公告（議員總額 65 名）：https://web.cec.gov.tw/api/file/45d8e965-f63a-46d5-b636-7d81e47cf4d1.pdf
 * 號次 10/23 抽籤，屆時請補上 identity.number。identity.party 依登記表「推薦之政黨」，「無」寫為無黨籍。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 上屆政見取自議會官網議員介紹頁「問政理念」（與 2022 年選舉公報內容相同或相近），兌現狀況未逐則查證，一律標 unknown。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 / unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 現任者「本屆提案數」取自報導者觀測站；議長與部分議員在該站提案數為 0 或查無，未列。
 */
window.ELECTION_DATA.races.push({
  "id": "taoyuan-council-12",
  "region": "桃園市",
  "office": "第 12 選區市議員",
  "area": "觀音區",
  "seats": 2,
  "note": "議員資料整理自議會官網、報導者觀測站、2022 年選舉公報與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數新人查無具體政見，各人資料多寡差異很大，這裡照實呈現；政見為空不代表候選人沒有主張。「做過的事」中的市政總質詢內容取自議會官網新聞稿。",
  "candidates": [
    {
      "id": "tyc12-1",
      "identity": {
        "name": "張佩芸",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "tyc12-2",
      "identity": {
        "name": "許更生",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "transport",
          "text": "於市政總質詢要求改善偏鄉公車誤點、漏班與往返高鐵站小巴班次不足，並檢討納骨塔收費。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5863&chk=717a6b45-2410-4c93-a6db-43988099737f"
        },
        {
          "topic": "economy",
          "text": "於市政總質詢要求三個月內提出觀音區一處市場用地（約 1,902 平方公尺）的傳統市場可行性報告，並重啟都市計畫。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5813&chk=70fb039d-dfb9-4a36-b63f-c81677d37ea9"
        },
        {
          "topic": "safety",
          "text": "本屆提案 10 件，包括增設噪音監測科技執法。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/hsu-keng-sheng-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任里長、國小家長會長。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1024"
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
              "title": "加速興建保障里市民活動中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1024"
            },
            {
              "topic": "transport",
              "title": "月桃路全線拓寬至草漯地區",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1024"
            },
            {
              "topic": "economy",
              "title": "推廣在地農產、發展休閒農業",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1024"
            },
            {
              "topic": "welfare",
              "title": "爭取育兒津貼",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1024"
            },
            {
              "topic": "governance",
              "title": "落實回饋金回饋在地",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1024"
            },
            {
              "topic": "environment",
              "title": "嚴格稽查固定污染源",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1024"
            },
            {
              "topic": "economy",
              "title": "大型博覽會串聯觀音景點帶動觀光",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1024"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "10 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/hsu-keng-sheng-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc12-3",
      "identity": {
        "name": "吳進昌",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "environment",
          "text": "於市政總質詢要求天然氣接收站公共藝術經費（初估約 9 億元）留在觀音，並強化防災與電力穩定。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5877&chk=984eba78-2462-42c0-80dc-3a2f8e8fbba3"
        },
        {
          "topic": "environment",
          "text": "於市政總質詢就超高壓變電所選址建議遷至工業區，並要求建置沿海工業區災害預警與疏散機制。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5791&chk=a5763ba4-4d1f-4ee5-b567-3a8fbdedc2b0"
        },
        {
          "topic": "transport",
          "text": "本屆提案 100 件，以工務類（27 件）最多；提案包括加速觀音區社會住宅、增設公共自行車站點、推出兒童卡爭取雙北捷運優惠。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/wu-chin-chang-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任村長、里長、國小家長會長。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1025"
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
              "topic": "governance",
              "title": "逐年補足偏鄉基礎建設經費",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1025"
            },
            {
              "topic": "environment",
              "title": "環保局編列污染防治費，推廣陸海空巡護隊至全區 24 個里",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1025"
            },
            {
              "topic": "governance",
              "title": "回饋金由居民共同討論分配；爭取天然氣接收站每年提撥 5% 盈餘為回饋金",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1025"
            },
            {
              "topic": "welfare",
              "title": "成立三區食物銀行、各里設置食享冰箱",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1025"
            },
            {
              "topic": "welfare",
              "title": "輔導關懷據點志工考取居服員證照",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1025"
            },
            {
              "topic": "environment",
              "title": "以蓮花休閒農業區為軸心，休耕農地轉型兼具蓄水滯洪",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1025"
            },
            {
              "topic": "education",
              "title": "提升各級學校光纖速度",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1025"
            },
            {
              "topic": "environment",
              "title": "爭取電廠回饋民生基本用電 1/2 電費",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1025"
            },
            {
              "topic": "economy",
              "title": "沙丘展示館遷移並合併規劃水庫移民史館",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1025"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "100 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/wu-chin-chang-taoyuan"
            }
          ]
        }
      ]
    }
  ]
});

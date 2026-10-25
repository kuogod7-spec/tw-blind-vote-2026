/*
 * 2026 桃園市長選舉：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年直轄市長選舉候選人登記」（登記名單，非審定名單；人數另經中央社 2026-09-04 報導核對
 *   https://cna.com.tw/news/aipl/202609040322.aspx），桃園市共 2 人登記，應選 1 席。
 * 審定名單 10/16 公告（本次整理時未能取得審定名單全文），號次原訂 10/23 抽籤，因薔琵颱風桃園市 10/23 停止上班，依桃園市選委會公告延至 10/27 舉行（https://news.ltn.com.tw/news/Taoyuan/breakingnews/5615116、https://www.cna.com.tw/news/aloc/202610220378.aspx），抽籤後請補上 identity.number（2026-10-25 註）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 / unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 已知缺漏：曾任中央民意代表的候選人，其上屆（2020 年）競選政見未查得，past 暫缺；現任首長 2022 年政見僅取自新聞報導，未取得選舉公報。
 */
window.ELECTION_DATA.races.push({
  "id": "taoyuan-mayor",
  "region": "桃園市",
  "office": "市長",
  "note": "政見整理自新聞報導（截至 2026-10-16），並非完整政見。2026 年選舉公報尚未發布；現任首長尚未發表完整連任政見，部分項目為市府施政或陣營說法。各候選人公布的細節多寡不同，這裡照實呈現，沒有替任何人補充。",
  "candidates": [
    {
      "id": "tym-1",
      "identity": {
        "name": "張善政",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "governance",
          "title": "推動第二行政園區",
          "detail": "列為未來四年重點建設；未公布地點、期程與經費",
          "source": "https://udn.com/news/story/6656/9783342"
        },
        {
          "topic": "welfare",
          "title": "推動興建市立醫院",
          "detail": "列為未來四年重點建設；未公布地點、期程與經費",
          "source": "https://udn.com/news/story/6656/9783342"
        },
        {
          "topic": "transport",
          "title": "持續擴展捷運路網",
          "detail": "列為未來四年重點建設；未公布路線、期程與經費",
          "source": "https://udn.com/news/story/6656/9783342"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "任內宣布公私立國中小教科書費全免，2026 年 9 月起實施，約 20 萬名學生受惠，一學年約 6.43 億元；首學期由教育發展基金支應，之後編入年度預算。",
          "source": "https://www.ctee.com.tw/news/20260401700973-431401"
        },
        {
          "topic": "education",
          "text": "任內實施國中小營養午餐免費，每餐補助提高至 60 元以上，並推動學童每日喝鮮乳。",
          "source": "https://www.ctee.com.tw/news/20260401700973-431401"
        },
        {
          "topic": "education",
          "text": "任內推動代理教師全聘期聘任。",
          "source": "https://www.ctee.com.tw/news/20260401700973-431401"
        },
        {
          "topic": "housing",
          "text": "任內推動可負擔住宅政策，規模與經費尚未說明。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5606147"
        },
        {
          "topic": "housing",
          "text": "市府目標 2030 年社會住宅達 1 萬戶；任內啟動的社宅案至 2026 年尚無完工戶數，市府稱社宅從規劃到完工約需 5–7 年（市府整體，非個人）。",
          "source": "https://udn.com/news/story/124652/9548684"
        },
        {
          "topic": "economy",
          "text": "調整工法，於 8 個月內完成北機廠 15 公頃基地整地（本人說法）。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5606592"
        },
        {
          "topic": "transport",
          "text": "捷運綠線北段目標 2026 年底通車（本人說法）。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5606592"
        }
      ],
      "past": [
        {
          "role": "直轄市首長",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "2022 年競選政見取自新聞報導，非完整政見；兌現狀況未逐則查證。",
          "promises": [
            {
              "topic": "transport",
              "title": "推出 1,280 元通勤月票，涵蓋國道客運、機場捷運與台鐵",
              "status": "unknown",
              "note": "",
              "source": "https://www.nownews.com/news/5974209"
            },
            {
              "topic": "economy",
              "title": "成立國際觀光行銷聯合辦公室，整合公私資源",
              "status": "unknown",
              "note": "",
              "source": "https://newtalk.tw/news/view/2022-09-28/823791"
            },
            {
              "topic": "economy",
              "title": "在機場設置在地品牌展售館，並提供伴手禮機場直送服務",
              "status": "unknown",
              "note": "",
              "source": "https://newtalk.tw/news/view/2022-09-28/823791"
            },
            {
              "topic": "economy",
              "title": "推動產業博物館化，結合商圈、夜市、老街帶動地方經濟",
              "status": "unknown",
              "note": "",
              "source": "https://newtalk.tw/news/view/2022-09-28/823791"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "tym-2",
      "identity": {
        "name": "黃世杰",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "由市府承擔公共運輸總規畫並重整公車路網",
          "detail": "以生活圈規劃貫穿式、環狀路線，串聯捷運與鐵路；未公布經費與期程",
          "source": "https://udn.com/news/story/124652/9653215"
        },
        {
          "topic": "transport",
          "title": "公車改採績效導向補助，必要時由市府直接營運",
          "detail": "管理長期脫班、服務品質不佳的業者",
          "source": "https://udn.com/news/story/124652/9653215"
        },
        {
          "topic": "transport",
          "title": "導入 AI 分析交通大數據",
          "detail": "掌握運量、壅塞熱點與服務缺口",
          "source": "https://udn.com/news/story/124652/9653215"
        },
        {
          "topic": "education",
          "title": "全面擴增公共托育量能",
          "detail": "未公布名額與經費",
          "source": "https://udn.com/news/story/124652/9653215"
        },
        {
          "topic": "education",
          "title": "建置托育資訊地圖平台",
          "detail": "整合法規、空缺名額、收費及評鑑資訊",
          "source": "https://udn.com/news/story/124652/9653215"
        },
        {
          "topic": "education",
          "title": "鼓勵企業設置托育中心",
          "detail": "市府成立專責輔導團隊協助法規與營運",
          "source": "https://udn.com/news/story/124652/9653215"
        },
        {
          "topic": "safety",
          "title": "建立跨局處托育安全平台",
          "detail": "加強高風險預警與稽查",
          "source": "https://udn.com/news/story/124652/9653215"
        },
        {
          "topic": "welfare",
          "title": "補助 0–12 歲兒童及 65 歲以上長者健保費",
          "detail": "未公布金額、期程與財源",
          "source": "https://udn.com/news/story/124652/9646537"
        },
        {
          "topic": "welfare",
          "title": "敬老愛心卡點數提高至每月 1,200 點",
          "detail": "年底不歸零；使用範圍擴大至超商、超市、農漁會、特約醫院及健保藥局",
          "source": "https://udn.com/news/story/124652/9646537"
        },
        {
          "topic": "safety",
          "title": "檢討科技執法，結合道路設計、標誌標線與教育宣導",
          "detail": "主張不以開罰為主要手段",
          "source": "https://udn.com/news/story/124652/9653215"
        },
        {
          "topic": "environment",
          "title": "垃圾費隨袋徵收在取得共識與完整配套前不強制推動",
          "detail": "支持減量方向，主張從源頭減量",
          "source": "https://udn.com/news/story/124652/9653215"
        },
        {
          "topic": "environment",
          "title": "觀音區持續推動電纜地下化並升級基礎建設",
          "detail": "",
          "source": "https://udn.com/news/story/7324/9652343"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "曾任中央民意代表，之後擔任中央部會政務副首長。",
          "source": "https://newtalk.tw/news/view/2026-04-15/1029938"
        },
        {
          "topic": "governance",
          "text": "直轄市升格初期進入市政府，處理約 1,500 項法制問題（他人說法，未查證）。",
          "source": "https://newtalk.tw/news/view/2026-04-15/1029938"
        }
      ]
    }
  ]
});

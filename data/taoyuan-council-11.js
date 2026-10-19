/*
 * 2026 桃園市議員第 11 選區市議員（新屋區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，2 人）
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 *   中選會今日（10/16）審定名單公告時尚未讀到（中選會新聞列表截至 9/22 無審定公告），故使用登記名單；人數與中央社 9/4 報導各選區登記人數一致。
 * 應選席次 1 席，依中選會 115/08/20 選舉公告（議員總額 65 名）：https://web.cec.gov.tw/api/file/45d8e965-f63a-46d5-b636-7d81e47cf4d1.pdf
 * 號次 10/23 抽籤，屆時請補上 identity.number。identity.party 依登記表「推薦之政黨」，「無」寫為無黨籍。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 上屆政見取自議會官網議員介紹頁「問政理念」（與 2022 年選舉公報內容相同或相近），兌現狀況未逐則查證，一律標 unknown。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 / unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 現任者「本屆提案數」取自報導者觀測站；議長與部分議員在該站提案數為 0 或查無，未列。
 * 已知缺漏（仍查無 2026 年具體政見）：邱文威。
 * 2026-10-19 第四輪補查：新增 3 則政見、0 則經歷。現任者政見取自 2026 年市政總質詢中對特定建設或制度的具體要求（議會官網新聞稿），並非正式競選政見。
 */
window.ELECTION_DATA.races.push({
  "id": "taoyuan-council-11",
  "region": "桃園市",
  "office": "第 11 選區市議員",
  "area": "新屋區",
  "seats": 1,
  "note": "議員資料整理自議會官網、報導者觀測站、2022 年選舉公報與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數新人查無具體政見，各人資料多寡差異很大，這裡照實呈現；政見為空不代表候選人沒有主張。「做過的事」中的市政總質詢內容取自議會官網新聞稿。",
  "candidates": [
    {
      "id": "tyc11-1",
      "identity": {
        "name": "陳睿生",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "新屋埤運動公園用地儘速取得或研議替代方案",
          "detail": "2026 年 6 月市政總質詢指出現用土地屬私人所有、地主有意收回",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5829&chk=8658f649-f5c6-4a1d-ba59-47ef7a191519"
        },
        {
          "topic": "environment",
          "title": "改善海岸侵蝕熱點護岸，保留部分緩坡或步道兼顧親水",
          "detail": "2026 年 6 月市政總質詢提出，主張不全面採用拋石護岸，並加強藻礁沿線設施安全",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5829&chk=8658f649-f5c6-4a1d-ba59-47ef7a191519"
        },
        {
          "topic": "economy",
          "title": "協助加速農會穀倉完成審查並啟用",
          "detail": "2026 年 6 月市政總質詢指出已投入逾 6,500 萬元仍未啟用",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5829&chk=8658f649-f5c6-4a1d-ba59-47ef7a191519"
        }
      ],
      "record": [
        {
          "topic": "housing",
          "text": "於市政總質詢要求新屋社宅低樓層規劃睦鄰公共設施（圖書館、運動中心、托嬰中心等）。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5652&chk=b458cea6-e3d8-4683-90b5-328fdefa2d7f"
        },
        {
          "topic": "environment",
          "text": "於市政總質詢要求整理荒廢約 40 年的公園預定地，研議活化為臨時停車場或社區綠地，並改善兩處路段積水。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5748&chk=4b003f73-a70a-47b1-ba25-5325b7c29ebd"
        },
        {
          "topic": "environment",
          "text": "於市政總質詢建議市府加碼公所公園預算以達共融式標準，並關注海岸侵蝕治理。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5829&chk=8658f649-f5c6-4a1d-ba59-47ef7a191519"
        },
        {
          "topic": "education",
          "text": "曾任佛學院與科技大學兼任講師。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1023"
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
              "topic": "economy",
              "title": "完成頭洲科技園區",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1023"
            },
            {
              "topic": "transport",
              "title": "推動捷運新屋–中壢線",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1023"
            },
            {
              "topic": "environment",
              "title": "開闢公一埤塘公園並開通計畫道路",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1023"
            },
            {
              "topic": "welfare",
              "title": "公園更新為共融式遊具，爭取旗艦型公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1023"
            },
            {
              "topic": "transport",
              "title": "中山西路一段拓寬為四線道",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1023"
            },
            {
              "topic": "welfare",
              "title": "檢討都市計畫、擴建醫院新屋分院",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1023"
            },
            {
              "topic": "economy",
              "title": "爭取沿海成為市級風景區，台 61 橋下興建運動公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1023"
            },
            {
              "topic": "transport",
              "title": "完成低碳轉運中心與觀海橋重建",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1023"
            },
            {
              "topic": "education",
              "title": "各小學一校一外師、班班有觸屏、人人有平板",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1023"
            },
            {
              "topic": "safety",
              "title": "增加監視器數量",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1023"
            },
            {
              "topic": "economy",
              "title": "提高農機補助，推動休閒農業區與地方創生",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1023"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "tyc11-2",
      "identity": {
        "name": "邱文威",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任中央民意代表服務處秘書、地方民意代表服務處主任（2022 年選舉公報自述）。",
          "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第11選舉區.pdf"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "得票 49.68%，未當選",
          "note": "",
          "promises": [
            {
              "topic": "welfare",
              "title": "增加公共托嬰中心與公立幼兒園名額",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第11選舉區.pdf"
            },
            {
              "topic": "education",
              "title": "提高學校圖書館與輔導經費",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第11選舉區.pdf"
            },
            {
              "topic": "economy",
              "title": "補助農機與肥料，振興農漁業與濱海遊憩區",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第11選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "爭取特色共融公園",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第11選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "天然氣管線延伸至頭洲及新屋市區；補貼老舊房屋電線汰換",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第11選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "推動電纜地下化",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第11選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "爭取 23 里活動中心與關懷據點經費",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第11選舉區.pdf"
            },
            {
              "topic": "education",
              "title": "擴大新屋高中校地",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第11選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "推動社會住宅",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第11選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "廣設公共自行車據點",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第11選舉區.pdf"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

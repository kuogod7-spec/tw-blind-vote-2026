/*
 * 2026 桃園市議員第 10 選區市議員（龍潭區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，5 人）
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 *   中選會今日（10/16）審定名單公告時尚未讀到（中選會新聞列表截至 9/22 無審定公告），故使用登記名單；人數與中央社 9/4 報導各選區登記人數一致。
 * 應選席次 3 席，依中選會 115/08/20 選舉公告（議員總額 65 名）：https://web.cec.gov.tw/api/file/45d8e965-f63a-46d5-b636-7d81e47cf4d1.pdf
 * 號次原訂 10/23 抽籤，因薔琵颱風桃園市 10/23 停止上班，依桃園市選委會公告延至 10/27 舉行（https://news.ltn.com.tw/news/Taoyuan/breakingnews/5615116、https://www.cna.com.tw/news/aloc/202610220378.aspx），抽籤後請補上 identity.number（2026-10-25 註）。identity.party 依登記表「推薦之政黨」，「無」寫為無黨籍。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 上屆政見取自議會官網議員介紹頁「問政理念」（與 2022 年選舉公報內容相同或相近），兌現狀況未逐則查證，一律標 unknown。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 / unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 現任者「本屆提案數」取自報導者觀測站；議長與部分議員在該站提案數為 0 或查無，未列。
 * 已知缺漏（仍查無 2026 年具體政見）：吳平娥、張贊聞、林昭賢。
 * 2026-10-19 第四輪補查：新增 8 則政見、1 則經歷。現任者政見取自 2026 年市政總質詢中對特定建設或制度的具體要求（議會官網新聞稿），並非正式競選政見。
 * 號次：10/27 已抽籤，但整理時（2026-10-27）尚未查得本選區的抽籤結果，number 暫為 null。
 */
window.ELECTION_DATA.races.push({
  "id": "taoyuan-council-10",
  "region": "桃園市",
  "office": "第 10 選區市議員",
  "area": "龍潭區",
  "seats": 3,
  "note": "議員資料整理自議會官網、報導者觀測站、2022 年選舉公報與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數新人查無具體政見，各人資料多寡差異很大，這裡照實呈現；政見為空不代表候選人沒有主張。「做過的事」中的市政總質詢內容取自議會官網新聞稿。",
  "candidates": [
    {
      "id": "tyc10-1",
      "identity": {
        "name": "劉熒隆",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "改善既有自行車道斷點與高低落差，串聯龍潭大池與十一份觀光園區",
          "detail": "2026 年 6 月市政總質詢要求跨局處改善交通節點與設施障礙，建構完整自行車旅遊路網",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5834&chk=4927aeed-e5b6-493e-8046-9ad22ee7f2d8"
        },
        {
          "topic": "economy",
          "title": "在地節慶活動結合商圈與市場導流，並增加民眾可參與的體驗活動",
          "detail": "2026 年 6 月市政總質詢提出，例如龍舟、送聖蹟儀式體驗；另建議祭典結合校園在地教育",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5834&chk=4927aeed-e5b6-493e-8046-9ad22ee7f2d8"
        }
      ],
      "record": [
        {
          "topic": "economy",
          "text": "於市政總質詢建議串聯龍潭大池至十一份觀光園區的自行車旅遊路網，並以年度形象影片行銷在地節慶。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5834&chk=4927aeed-e5b6-493e-8046-9ad22ee7f2d8"
        },
        {
          "topic": "transport",
          "text": "於市政總質詢建議優先設立龍潭觀光轉運站。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5693&chk=c14b70ef-6dec-4785-964c-c36f9a5cd961"
        },
        {
          "topic": "welfare",
          "text": "本屆提案 33 件，以民政類（16 件）最多；提案包括在社區關懷據點設置愛心敬老卡專屬上車站、產前營養補助。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/liu-ying-lung-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任中央民意代表特助、科技大學講師。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1021"
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
              "topic": "environment",
              "title": "老街溪上游水岸空間景觀改造",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1021"
            },
            {
              "topic": "economy",
              "title": "傳統市場轉型為觀光市場",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1021"
            },
            {
              "topic": "transport",
              "title": "爭取龍潭觀光客運轉運站",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1021"
            },
            {
              "topic": "welfare",
              "title": "運動公園改造、爭取龍潭國民運動中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1021"
            },
            {
              "topic": "environment",
              "title": "國道橋下公共空間改造為遊憩與運動場地",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1021"
            },
            {
              "topic": "transport",
              "title": "建立友善行人空間與通學步道",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1021"
            },
            {
              "topic": "welfare",
              "title": "設置新住民辦公室",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1021"
            },
            {
              "topic": "environment",
              "title": "成立市立寵物醫院、設立寵物殯葬園區",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1021"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "33 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/liu-ying-lung-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc10-2",
      "identity": {
        "name": "吳平娥",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "tyc10-3",
      "identity": {
        "name": "張贊聞",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "現任中央民意代表地方服務處主任。",
          "source": "https://udn.com/news/story/124652/9601360"
        }
      ],
      "past": []
    },
    {
      "id": "tyc10-4",
      "identity": {
        "name": "徐玉樹",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "捷運橘線延伸龍潭時納入龍潭科學園區支線並於關鍵節點設站",
          "detail": "2026 年 8 月市政總質詢提出；市府答詢已指示納入可行性研究",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5879&chk=f8656e78-071c-4c94-8894-14486331bc7e"
        },
        {
          "topic": "education",
          "title": "加速在梅龍路、梅花莊周邊設立新國小",
          "detail": "2026 年 8 月市政總質詢提出；教育局答詢校地約 1.8 公頃，目標 118 學年度招生",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5879&chk=f8656e78-071c-4c94-8894-14486331bc7e"
        },
        {
          "topic": "transport",
          "title": "拓寬工二路、民族路與龍源路口等瓶頸路段，開闢大同路 226 巷",
          "detail": "2026 年 8 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5879&chk=f8656e78-071c-4c94-8894-14486331bc7e"
        },
        {
          "topic": "transport",
          "title": "龍潭轉運站啟用後整合公車、小巴、公共自行車與號誌，研議增設直達機場路線",
          "detail": "2026 年 8 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5879&chk=f8656e78-071c-4c94-8894-14486331bc7e"
        },
        {
          "topic": "housing",
          "title": "檢討龍潭都市計畫，增加科學園區周邊住宅供給",
          "detail": "2026 年 8 月市政總質詢指出龍潭住商用地開發率已逾九成；都發局答詢將發包研究，檢討農業區變更可行性",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5879&chk=f8656e78-071c-4c94-8894-14486331bc7e"
        },
        {
          "topic": "welfare",
          "title": "敬老愛心卡研議擴大用途，納入診所掛號費、高鐵等",
          "detail": "2026 年 8 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5879&chk=f8656e78-071c-4c94-8894-14486331bc7e"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "於市政總質詢建議捷運橘線可行性研究納入龍潭科學園區支線，並規劃周邊新設國中小。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5879&chk=f8656e78-071c-4c94-8894-14486331bc7e"
        },
        {
          "topic": "education",
          "text": "於市政總質詢要求審慎評估在國小操場興建地下停車場，並評估其他公有地替代方案。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5745&chk=33969790-a2d4-4315-b3fd-1d6c6f400db2"
        },
        {
          "topic": "transport",
          "text": "本屆提案 28 件，以工務類（19 件）最多，多為龍潭區瓶頸路口拓寬、農田排水箱涵與機車停車場。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/hsu-yu-shu-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任基層民意代表（鄉民代表會副主席）。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1022"
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
              "title": "協助單親家庭養育與教育",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1022"
            },
            {
              "topic": "welfare",
              "title": "加速親子館、共融公園興建，規劃極限運動場",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1022"
            },
            {
              "topic": "welfare",
              "title": "廣設老人安養與樂齡中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1022"
            },
            {
              "topic": "housing",
              "title": "興建青年出租公營住宅",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1022"
            },
            {
              "topic": "environment",
              "title": "逐年清運店子湖垃圾場垃圾並興建環保公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1022"
            },
            {
              "topic": "housing",
              "title": "擴大檢討龍潭都市計畫，取得國民運動中心、轉運站用地",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1022"
            },
            {
              "topic": "environment",
              "title": "辦理免費寵物健檢與疫苗注射",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1022"
            },
            {
              "topic": "economy",
              "title": "檢討休耕、農藥、肥料補助與紅火蟻防治",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1022"
            },
            {
              "topic": "transport",
              "title": "增加國道客運路線及班次",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1022"
            },
            {
              "topic": "economy",
              "title": "推動大石門地區休閒農業區",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1022"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "28 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/hsu-yu-shu-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc10-5",
      "identity": {
        "name": "林昭賢",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任地方民意代表（2018–2022），並任地方民意代表秘書八年（2022 年選舉公報自述）。",
          "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第10選舉區.pdf"
        },
        {
          "topic": "governance",
          "text": "2026 年 10 月因涉嫌於模範母親、模範父親表揚活動場外身穿競選背心，致贈得獎民眾床墊與枕頭，經檢方以涉嫌違反公職人員選舉罷免法（對有投票權人行求賄賂）訊後諭令 30 萬元交保；偵查中，尚未起訴。報導未取得本人回應。",
          "source": "https://news.ltn.com.tw/news/Taoyuan/breakingnews/5599371"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "得票 21.71%，未當選",
          "note": "",
          "promises": [
            {
              "topic": "transport",
              "title": "開闢龍潭橫向外環道",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第10選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "設置龍潭公車轉運站",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第10選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "機場捷運由中壢延伸平鎮至龍潭",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第10選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "舊行政園區用地變更為商業區",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第10選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "興建大漢溪左岸至龍潭環河快速道路",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第10選舉區.pdf"
            },
            {
              "topic": "economy",
              "title": "銅鑼圈解編山坡地開發為科技工業園區",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第10選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "拓寬龍新路（桃 20 線）",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第10選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "65 歲以上長者三節及重陽敬老津貼 3,000 元",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第10選舉區.pdf"
            },
            {
              "topic": "education",
              "title": "大烏林地區設立國中",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第10選舉區.pdf"
            },
            {
              "topic": "economy",
              "title": "推動大石門休閒農業區、擴大大北坑休閒農業區",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/03桃園市/桃園市第10選舉區.pdf"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

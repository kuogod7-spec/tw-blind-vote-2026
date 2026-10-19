/*
 * 2026 桃園市議員第 7 選區市議員（中壢區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，17 人）
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 *   中選會今日（10/16）審定名單公告時尚未讀到（中選會新聞列表截至 9/22 無審定公告），故使用登記名單；人數與中央社 9/4 報導各選區登記人數一致。
 * 應選席次 11 席，依中選會 115/08/20 選舉公告（議員總額 65 名）：https://web.cec.gov.tw/api/file/45d8e965-f63a-46d5-b636-7d81e47cf4d1.pdf
 * 號次 10/23 抽籤，屆時請補上 identity.number。identity.party 依登記表「推薦之政黨」，「無」寫為無黨籍。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 上屆政見取自議會官網議員介紹頁「問政理念」（與 2022 年選舉公報內容相同或相近），兌現狀況未逐則查證，一律標 unknown。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 / unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 現任者「本屆提案數」取自報導者觀測站；議長與部分議員在該站提案數為 0 或查無，未列。
 * 已知缺漏：仍查無 2026 年具體政見：彭康傑、毛嘉慶、張兆恩、劉安祺、吳睿霖、邱奕勝、張仲方、李欣、徐盛揚。現任議員的 2026 年政見取自本年度市政總質詢中的具體要求。
 * 2026-10-19 第四輪補查：新增 17 則政見、0 則經歷。
 */
window.ELECTION_DATA.races.push({
  "id": "taoyuan-council-07",
  "region": "桃園市",
  "office": "第 7 選區市議員",
  "area": "中壢區",
  "seats": 11,
  "note": "議員資料整理自議會官網、報導者觀測站、2022 年選舉公報與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數新人查無具體政見，各人資料多寡差異很大，這裡照實呈現；政見為空不代表候選人沒有主張。「做過的事」中的市政總質詢內容取自議會官網新聞稿。",
  "candidates": [
    {
      "id": "tyc7-1",
      "identity": {
        "name": "張曉昀",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "education",
          "title": "營養午餐改採部分補助、部分自付",
          "detail": "於市政總質詢指出營養午餐預算約 18 億元且廚餘量大，建議由全面免費改採「部分補助、部分自付」模式。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5844"
        },
        {
          "topic": "welfare",
          "title": "重新檢討中壢體育園區促參案的公益回饋設施",
          "detail": "於市政總質詢指出現行公益回饋設施未含游泳池、運動中心僅約 832 坪且球場配置不明，反對現行規劃方向。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5844"
        },
        {
          "topic": "economy",
          "title": "中壢舊城再生整合跨局處，改善復興路人行環境並以商圈活動導入人流",
          "detail": "於市政總質詢建議整合都發、交通、工務、文化及經發等局處，改善復興路人行環境，並透過商圈活動導入人流。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5903"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "本屆提案 122 件，以工務類（33 件）最多，其次為教育、建設、民政；提案包括加速中壢生活圈二號道路、推動機場捷運與捷運綠線環狀線一車到底。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chang-hsiao-yun-taoyuan"
        },
        {
          "topic": "welfare",
          "text": "於市政總質詢建議航空城周邊一處捷運站開發基地優先考量醫療需求，並保留未來醫療擴充可能。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5903&chk=7cbfd2cb-45e1-4755-8d99-152c2fdc97c6"
        },
        {
          "topic": "transport",
          "text": "於市政總質詢要求針對鐵路地下化臨時軌切換引發的壅塞，建立市府與鐵路單位間的事前通報與應變機制。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5844&chk=aa857a31-6b85-4379-9ba0-340e61c2f05d"
        },
        {
          "topic": "governance",
          "text": "曾任中央民意代表助理、直轄市政府資訊部門機要專員。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1007"
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
              "title": "爭取捷運由內壢火車站延伸至高鐵站，監督鐵路地下化與新設中豐交流道",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1007"
            },
            {
              "topic": "economy",
              "title": "推動中壢創新研發中心與創業園區發展，帶動產業轉型",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1007"
            },
            {
              "topic": "education",
              "title": "配合產業趨勢爭取預算開設課程，擴大產學合作",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1007"
            },
            {
              "topic": "welfare",
              "title": "增設公共托育、公立與非營利幼兒園，推動兒童臨時托育媒合平台",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1007"
            },
            {
              "topic": "welfare",
              "title": "提升長者社工服務量能，整合醫療資源",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1007"
            },
            {
              "topic": "welfare",
              "title": "推動龍岡全民運動館，監督中壢體育園區規劃",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1007"
            },
            {
              "topic": "welfare",
              "title": "推動新住民關懷包與語言學習",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1007"
            },
            {
              "topic": "environment",
              "title": "推動寵物友善空間標章，爭取新設寵物公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1007"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "122 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chang-hsiao-yun-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc7-2",
      "identity": {
        "name": "彭康傑",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任中央民意代表辦公室職員，以及直轄市政府民政部門機要人員；大學與研究所主修公共行政。",
          "source": "https://udn.com/news/story/124652/9465031"
        }
      ],
      "past": []
    },
    {
      "id": "tyc7-3",
      "identity": {
        "name": "葉明月",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "重新檢討環保公園開放機制，串聯新街溪步道斷點",
          "detail": "於市政總質詢指出環保公園長期封閉、使用率低，要求環保局檢討開放機制，並與水務局合作串聯新街溪步道斷點，提升綠廊連續性。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5828"
        },
        {
          "topic": "environment",
          "title": "強化清潔隊資源回收分類稽核",
          "detail": "於市政總質詢指出疑有清潔隊將免洗餐具回收物混入一般垃圾送焚化，要求環保局強化稽核與作業流程管理。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5828"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "於市政總質詢要求將一處焚化廠回饋中心閒置空間轉型為小型國民運動中心，並評估於鄰近國小設置地下停車場。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5828&chk=e6426870-5099-4616-b816-c3d4fafd7b37"
        },
        {
          "topic": "transport",
          "text": "於市政總質詢指出人行道標線依道路寬度與轉彎弧度個別檢視，並要求市府建立各道路主管機關一致的設計原則。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5898&chk=043aebb3-6a8c-420f-801d-623ef2933606"
        },
        {
          "topic": "transport",
          "text": "本屆提案 5 件，包括打通內壢地區兩處既成與計畫道路。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/yeh-ming-yueh-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任基層民意代表（縣轄市民代表）。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1003"
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
              "topic": "education",
              "title": "活化校園閒置教室、廣設公幼、增加托幼名額",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1003"
            },
            {
              "topic": "education",
              "title": "盤點老舊校舍並推動更新維護",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1003"
            },
            {
              "topic": "welfare",
              "title": "監督市府廣設托嬰中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1003"
            },
            {
              "topic": "housing",
              "title": "支持社會住宅政策；協助老舊公寓成立管委會",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1003"
            },
            {
              "topic": "safety",
              "title": "爭取增加警、消員額",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1003"
            },
            {
              "topic": "welfare",
              "title": "健全長照、盤點閒置公有空間增設日照中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1003"
            },
            {
              "topic": "economy",
              "title": "監督勞基法、性別平等法宣導，保障勞工權益",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1003"
            },
            {
              "topic": "transport",
              "title": "關注鐵路地下化進度，監督內壢地區都市再造計畫",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1003"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "5 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/yeh-ming-yueh-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc7-4",
      "identity": {
        "name": "毛嘉慶",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "得票 4.54%，未當選",
          "note": "2022 年選舉公報政見為圖片格式，未擷取。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "tyc7-5",
      "identity": {
        "name": "劉曾玉春",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "加速布建社區型照護據點並簡化弱勢補助申請",
          "detail": "於市政總質詢建議重新盤點資源配置，加速布建社區型照護據點、改善照服員人力短缺，並簡化弱勢補助申請流程。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5839"
        },
        {
          "topic": "transport",
          "title": "檢討科技執法設置地點並定期公開執法數據",
          "detail": "於市政總質詢建議科技執法回歸事故預防，全面檢討設置地點、強化現場告示與提前預警，並定期公開執法數據。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5839"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "於市政總質詢建議盤點老舊校舍分級管理，閒置空間轉型為長照據點、親子館或公托。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5839&chk=d1aab693-5148-4f33-bd4f-dec06d0bfd07"
        },
        {
          "topic": "welfare",
          "text": "於市政總質詢建議推動中高齡照護陪伴員培訓計畫，為 50 歲以上退休或待業者開設照護課程。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5755&chk=03871087-e97d-494b-8e1a-70f71c26ab5b"
        },
        {
          "topic": "environment",
          "text": "本屆提案 24 件，以工務類（15 件）最多，多為中壢區公園設施汰換、商圈鋪面與巷道改善。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/liu-tseng-yu-chun-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任基層民意代表（縣轄市民代表）。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1006"
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
              "title": "監督市府預算、決算與資源分配",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1006"
            },
            {
              "topic": "education",
              "title": "爭取公共托育與公立幼兒園，推動過嶺地區增設國小，關注龍岡國小與環北國中遷校",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1006"
            },
            {
              "topic": "welfare",
              "title": "爭取單親家庭免費課後輔導與弱勢家庭餐點補助",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1006"
            },
            {
              "topic": "welfare",
              "title": "活用閒置公有空間增設里民活動空間與課程",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1006"
            },
            {
              "topic": "housing",
              "title": "推動老屋重建與公辦都更",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1006"
            },
            {
              "topic": "environment",
              "title": "推動電線電纜全面地下化",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1006"
            },
            {
              "topic": "safety",
              "title": "督促過嶺地區增設消防分隊",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1006"
            },
            {
              "topic": "transport",
              "title": "串聯捷運、公車與公共自行車，增加大眾運輸誘因",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1006"
            },
            {
              "topic": "governance",
              "title": "推動第二行政園區儘速建置",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1006"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "24 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/liu-tseng-yu-chun-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc7-6",
      "identity": {
        "name": "黃崇真",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "governance",
          "title": "推動市民卡 2.0，以單一數位身分整合多重福利",
          "detail": "於市政總質詢提議建立單一數位身分 ID，整合學生、身障等多重福利，避免因升學、年齡或身分變化反覆換卡，降低行政成本。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5910"
        },
        {
          "topic": "housing",
          "title": "社宅研議生育延長租期與育兒修繕補助",
          "detail": "於市政總質詢提出婚育家庭居住支持時，另建議研議生育延長租期、育兒修繕補助等措施。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5910"
        }
      ],
      "record": [
        {
          "topic": "housing",
          "text": "於市政總質詢提議推動「婚育安心宅」：市府自建社宅保留 30% 給婚育家庭、二房以上房型至少 50%、300 戶以上社宅設置托育。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5910&chk=a98e0f63-63ce-4d79-9cf2-8a851061245f"
        },
        {
          "topic": "transport",
          "text": "於市政總質詢建議導入 QR Code 虛擬智慧站牌，讓乘客以手機通知公車駕駛搭車需求。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5910&chk=a98e0f63-63ce-4d79-9cf2-8a851061245f"
        },
        {
          "topic": "transport",
          "text": "本屆提案 174 件，以工務類（56 件）最多，其次為教育、警衛、民政；提案包括捷運綠線與市立醫院、體育園區連通道。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/huang-chung-chen-taoyuan"
        },
        {
          "topic": "education",
          "text": "曾任專科學校講師、國小家長會長。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1008"
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
              "title": "爭取幼兒餐費補助、師資補助",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1008"
            },
            {
              "topic": "welfare",
              "title": "增加公托場域",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1008"
            },
            {
              "topic": "environment",
              "title": "增加寵物公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1008"
            },
            {
              "topic": "environment",
              "title": "增加社區充電樁",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1008"
            },
            {
              "topic": "housing",
              "title": "充足社會住宅，輔助青年成家",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1008"
            },
            {
              "topic": "welfare",
              "title": "活化公共場館，落實一學區一日照",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1008"
            },
            {
              "topic": "transport",
              "title": "路平與人行道改善",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1008"
            },
            {
              "topic": "transport",
              "title": "督促中壢火車站連結捷運工程、鐵路地下化與中豐北路交流道時程",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1008"
            },
            {
              "topic": "housing",
              "title": "加速危老都更",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1008"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "174 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/huang-chung-chen-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc7-7",
      "identity": {
        "name": "彭俊豪",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "市場改建研議攤商自願提前退場機制",
          "detail": "於市政總質詢關切新明市場改建，建請市府為不進入中繼市場、決定退休的攤商研議「自願提前退場」機制。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5897"
        },
        {
          "topic": "welfare",
          "title": "身障停車優惠建立統一車號登錄並開放線上申辦",
          "detail": "於市政總質詢建議身障停車優惠建立統一車號登錄機制，並研議線上申辦、銷單，減少重複申請與臨櫃不便。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5897"
        },
        {
          "topic": "environment",
          "title": "研議處理私人土地遭廢棄車占用",
          "detail": "於市政總質詢提議環保局參考其他縣市作法，研議處理私人土地上的廢棄車。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5897"
        }
      ],
      "record": [
        {
          "topic": "environment",
          "text": "於市政總質詢建議針對易淹水區域研議家戶防水閘門補助，並建立公共設施造成財損的判斷 SOP。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5897&chk=0b565009-0b9c-4910-bc6e-b50d09e922e8"
        },
        {
          "topic": "transport",
          "text": "於市政總質詢要求交通局將內壢站軌道切換後的回堵路段納入優先改善清單，並建議重劃區排水導排至鄰近箱涵。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5827&chk=16c37f72-6420-4935-b09f-e8a3e877b09b"
        },
        {
          "topic": "environment",
          "text": "本屆提案 117 件，以工務類（85 件）最多；提案包括制定其他排水管理自治條例。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/peng-chun-hao-taoyuan"
        },
        {
          "topic": "education",
          "text": "曾任科技大學講師。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1000"
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
              "title": "監督鐵路地下化、綠線延伸中壢站、中豐北部交流道等重大建設",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1000"
            },
            {
              "topic": "housing",
              "title": "推動舊市區危老都更獎勵、巷弄纜線清整",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1000"
            },
            {
              "topic": "safety",
              "title": "以公權力協助社區管控垃圾堆放、車輛擋道等公安風險",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1000"
            },
            {
              "topic": "environment",
              "title": "推動寵物公園與寵物友善餐廳認證",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1000"
            },
            {
              "topic": "economy",
              "title": "協助在地餐廳爭取美食評鑑推薦",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1000"
            },
            {
              "topic": "education",
              "title": "監督校舍安全，充實校安與防疫人力",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1000"
            },
            {
              "topic": "welfare",
              "title": "擴大敬老愛心點數適用範圍至鐵路、體健設施與景點",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1000"
            },
            {
              "topic": "economy",
              "title": "普及商圈行動支付",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1000"
            },
            {
              "topic": "housing",
              "title": "建物裝修行為納入損鄰爭議調解制度",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1000"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "117 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/peng-chun-hao-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc7-8",
      "identity": {
        "name": "張兆恩",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "tyc7-9",
      "identity": {
        "name": "劉安祺",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任地方民意代表。",
          "source": "https://www.ettoday.net/news/20260517/3167484.htm"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "得票 4.77%，未當選",
          "note": "2022 年選舉公報政見為圖片格式，未擷取；曾任地方民意代表的任期政見未查得。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "tyc7-10",
      "identity": {
        "name": "吳睿霖",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "tyc7-11",
      "identity": {
        "name": "梁為超",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "串聯莒光公園與滯洪池打造景觀廊帶，並納入公益回饋空間",
          "detail": "於市政總質詢建議將體育園區周邊的莒光公園與滯洪池串聯為櫻花景觀廊帶，並納入市民活動中心或集會場所等公益回饋空間。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5843"
        }
      ],
      "record": [
        {
          "topic": "economy",
          "text": "於市政總質詢建議中壢後站大型場館結合體育、藝文與商場機能，並要求市府就捷運、道路、公車與停車提出整體交通配套。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5843&chk=3a272c3e-2ba8-485b-b78b-3ae7886e9834"
        },
        {
          "topic": "environment",
          "text": "於市政總質詢要求垃圾隨袋徵收上路前提出資源回收車班與人力調度計畫，並同步檢修老舊社區下水道。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5790&chk=ca0554a1-f9c6-4fa3-87ac-312014cdfd8a"
        },
        {
          "topic": "transport",
          "text": "於市政總質詢要求檢討人本示範道路的設計與施工順序，並爭取一段約 2 公里聯外道路拓寬。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5661&chk=8ce01610-8a20-4575-bbc5-d833506d2095"
        },
        {
          "topic": "transport",
          "text": "本屆提案 12 件，以工務類（11 件）為主。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/liang-wei-chao-taoyuan"
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
              "title": "增設 0–3 歲公益托育中心，廣設公立或非營利幼兒園",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1002"
            },
            {
              "topic": "education",
              "title": "增建市立圖書館青埔分館",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1002"
            },
            {
              "topic": "education",
              "title": "爭取中平國小增建校舍、啟動過嶺國小規劃",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1002"
            },
            {
              "topic": "education",
              "title": "國中小列入程式語言及機器人課程，普及智慧學習教室",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1002"
            },
            {
              "topic": "transport",
              "title": "中壢火車站動線重設計與周邊都市更新",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1002"
            },
            {
              "topic": "welfare",
              "title": "在中壢設立兒童醫院",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1002"
            },
            {
              "topic": "transport",
              "title": "爭取龍岡路、中山東路拓寬預算與捷運綠線延伸",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1002"
            },
            {
              "topic": "environment",
              "title": "在既有公園增設寵物活動區",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1002"
            },
            {
              "topic": "welfare",
              "title": "三節及重陽敬老金由 2,000 元調升為 2,500 元",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1002"
            },
            {
              "topic": "safety",
              "title": "警察繁重勤務加給比照雙北（每月最高 5,905 元提升為 8,435 元）",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1002"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "12 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/liang-wei-chao-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc7-12",
      "identity": {
        "name": "邱奕勝",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "environment",
          "text": "邀集市府單位會勘中壢區兩處公園，爭取於都市計畫通盤檢討時變更為公園用地，以容積移轉或代金方式取得土地。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=49&lid=5875&chk=3dae361e-b466-4025-a0dd-49a2eb32e2df"
        },
        {
          "topic": "environment",
          "text": "邀集水務局會勘老街溪堤防改善工程；工程獲中央補助，總經費約 14.2 億元，含新建護岸 857 公尺與右岸 5.5 公里堤防改善。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=49&lid=5855&chk=26381f6a-5b03-4940-996f-f23db1ff0936"
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
              "title": "推動航空城產業專區與產業智慧轉型",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=37"
            },
            {
              "topic": "transport",
              "title": "加速捷運路網，三民路延伸至中原路、桃 42 號道路延伸至觀音，改善道路瓶頸、廣設停車場",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=37"
            },
            {
              "topic": "welfare",
              "title": "推動長照居家照護，廣設公托中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=37"
            },
            {
              "topic": "environment",
              "title": "監督體育園區與重劃區開發品質，建構老街溪、新街溪綠色長廊，爭取公園綠地與活動中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=37"
            },
            {
              "topic": "housing",
              "title": "推動青年與社會住宅興建",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=37"
            },
            {
              "topic": "economy",
              "title": "整合勞工就業資源，協助身障與弱勢就業",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=37"
            },
            {
              "topic": "governance",
              "title": "推動智慧城市與機關業務 e 化",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=37"
            },
            {
              "topic": "education",
              "title": "打造雙語教學環境，爭取兒童免費營養午餐",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=37"
            },
            {
              "topic": "safety",
              "title": "寬列警政預算，推動自動化監視網路",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=37"
            },
            {
              "topic": "economy",
              "title": "推動農業精緻化，輔導休閒農業與青農",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=37"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "tyc7-13",
      "identity": {
        "name": "張仲方",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "tyc7-14",
      "identity": {
        "name": "魏筠",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "優先修繕龍興國中周邊人行道",
          "detail": "於市政總質詢指出龍興國中周邊人行道地磚隆起、樹根外露，學生通行危險，要求優先改善；工務局答詢預計暑假進場施工。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5853"
        },
        {
          "topic": "welfare",
          "title": "中壢體育園區規劃 50 公尺標準競賽游泳池與匹克球場",
          "detail": "於市政總質詢建議結合體育園區規劃 50 公尺標準競賽游泳池，並提前布局匹克球等新興運動場地。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5902"
        }
      ],
      "record": [
        {
          "topic": "safety",
          "text": "於市政總質詢建議評估在過嶺地區增設派出所，並要求重大招商案將公共回饋與圖書館空間保障納入招商條件。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5902&chk=d46c6357-7dff-4f34-b22e-29545227a848"
        },
        {
          "topic": "transport",
          "text": "於市政總質詢要求市府提出中壢多項工程同時施工期間的交通配套，並加速龍岡路三期拓寬（預算由 24 億元增至 50 億元）。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5853&chk=c7943810-3291-4aea-9514-eec09a44bcb6"
        },
        {
          "topic": "safety",
          "text": "本屆提案 181 件，以工務類（56 件）最多，其次為警衛、教育、民政；提案包括要求市府提出降低道路事故死亡率的具體措施、在中壢增設機車考照練習場。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/wei-yun-taoyuan"
        },
        {
          "topic": "welfare",
          "text": "曾任地方法院檢察署書記官、直轄市政府社政部門中階主管。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1001"
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
              "title": "全面檢討道路設計、推行車速分流，廣設公共停車位，監督捷運與鐵路地下化",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1001"
            },
            {
              "topic": "economy",
              "title": "協助青年就業、擴大補助缺工產業、推動青創品牌曝光",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1001"
            },
            {
              "topic": "housing",
              "title": "建立資訊平台，加速危老建物重建",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1001"
            },
            {
              "topic": "welfare",
              "title": "增加公托班數、補助延長收托與定點臨托，提升社工待遇，增設長青國民運動中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1001"
            },
            {
              "topic": "welfare",
              "title": "提供離婚家庭子女公開公正的探視場所",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1001"
            },
            {
              "topic": "safety",
              "title": "警政系統成立數位性暴力專責單位",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1001"
            },
            {
              "topic": "education",
              "title": "推動雙語與資訊教育",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1001"
            },
            {
              "topic": "welfare",
              "title": "加速旗艦型遊樂場與特色公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1001"
            },
            {
              "topic": "environment",
              "title": "建置寵物醫院地圖，推動高齡犬貓輔具服務",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1001"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "181 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/wei-yun-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc7-15",
      "identity": {
        "name": "李欣",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "tyc7-16",
      "identity": {
        "name": "謝美英",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "governance",
          "title": "建立公共設施瑕疵致傷的跨機關代位求償與追蹤機制",
          "detail": "於市政總質詢要求市府建立「跨機關代位求償」與追蹤機制，加速處理民眾因公設瑕疵導致跌傷、車輛破胎等國賠或權益申訴案件。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5891"
        },
        {
          "topic": "education",
          "title": "國中遷校新校區提出周邊施工規範、交通維持計畫與整地時程",
          "detail": "於市政總質詢指出新校區周邊「兒 1」、「公 3」用地及閒置國有地尚未整理，要求市府在師生進駐前提出施工規範、交通維持計畫及整地時程表。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5891"
        }
      ],
      "record": [
        {
          "topic": "environment",
          "text": "於市政總質詢要求明定高鐵特區人行道及樹穴清潔的主責單位，必要時編列經費統一委外。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5891&chk=e4c744f7-ea1b-4fa8-b9d7-9c6ebfb9ce3d"
        },
        {
          "topic": "transport",
          "text": "於市政總質詢要求成立內壢後站交通應變小組，平交道異常時即時通報並由警方疏導。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5803&chk=8ef026d8-ce45-47de-8b3d-4576955485b3"
        },
        {
          "topic": "welfare",
          "text": "本屆提案 14 件，包括要求提出成立長照專責處的期程、檢討縮短長照申請時間。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/hsieh-mei-ying-taoyuan"
        },
        {
          "topic": "education",
          "text": "曾任廣播電台節目主持人、科技大學講師。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1004"
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
              "title": "檢視長照政策，提升安養品質",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1004"
            },
            {
              "topic": "welfare",
              "title": "落實幼兒照護",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1004"
            },
            {
              "topic": "welfare",
              "title": "把關食品安全",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1004"
            },
            {
              "topic": "economy",
              "title": "打造專業劇場，扶植在地藝文團體",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1004"
            },
            {
              "topic": "environment",
              "title": "推動纜線清整",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1004"
            },
            {
              "topic": "transport",
              "title": "健全城市路網",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1004"
            },
            {
              "topic": "transport",
              "title": "活化用地解決停車問題",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1004"
            },
            {
              "topic": "safety",
              "title": "防制詐騙，啟動警民連線",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1004"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "14 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/hsieh-mei-ying-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc7-17",
      "identity": {
        "name": "徐盛揚",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    }
  ]
});

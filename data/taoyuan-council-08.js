/*
 * 2026 桃園市議員第 8 選區市議員（平鎮區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，10 人）
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 *   中選會今日（10/16）審定名單公告時尚未讀到（中選會新聞列表截至 9/22 無審定公告），故使用登記名單；人數與中央社 9/4 報導各選區登記人數一致。
 * 應選席次 6 席，依中選會 115/08/20 選舉公告（議員總額 65 名）：https://web.cec.gov.tw/api/file/45d8e965-f63a-46d5-b636-7d81e47cf4d1.pdf
 * 號次原訂 10/23 抽籤，因薔琵颱風桃園市 10/23 停止上班，依桃園市選委會公告延至 10/27 舉行（https://news.ltn.com.tw/news/Taoyuan/breakingnews/5615116、https://www.cna.com.tw/news/aloc/202610220378.aspx），抽籤後請補上 identity.number（2026-10-25 註）。identity.party 依登記表「推薦之政黨」，「無」寫為無黨籍。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 上屆政見取自議會官網議員介紹頁「問政理念」（與 2022 年選舉公報內容相同或相近），兌現狀況未逐則查證，一律標 unknown。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 / unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 現任者「本屆提案數」取自報導者觀測站；議長與部分議員在該站提案數為 0 或查無，未列。
 * 已知缺漏：仍查無 2026 年具體政見：高宇彥（僅有 2022 年參選時的主張，未收）、舒翠玲、陳韋曄（本年度質詢內容已收於做過的事）、白丞堯、吳正吉、彭柏霖、羅文欽。現任議員的 2026 年政見取自本年度市政總質詢中的具體要求。
 * 2026-10-19 第四輪補查：新增 5 則政見、0 則經歷。
 * 號次：10/27 已抽籤，但整理時（2026-10-27）尚未查得本選區的抽籤結果，number 暫為 null。
 */
window.ELECTION_DATA.races.push({
  "id": "taoyuan-council-08",
  "region": "桃園市",
  "office": "第 8 選區市議員",
  "area": "平鎮區",
  "seats": 6,
  "note": "議員資料整理自議會官網、報導者觀測站、2022 年選舉公報與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數新人查無具體政見，各人資料多寡差異很大，這裡照實呈現；政見為空不代表候選人沒有主張。「做過的事」中的市政總質詢內容取自議會官網新聞稿。",
  "candidates": [
    {
      "id": "tyc8-1",
      "identity": {
        "name": "高宇彥",
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
          "result": "得票 4.19%，未當選",
          "note": "2022 年選舉公報政見為圖片格式，未擷取。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "tyc8-2",
      "identity": {
        "name": "王珮毓",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "人口稠密區放寬公共自行車站距並評估路側設站",
          "detail": "於市政總質詢指出平鎮等地每站服務人口偏高，建議在人口稠密區適度放寬站距限制、評估路側設站，並結合捷運、人行步道與自行車路網規劃。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5869"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "於市政總質詢要求說明全市 7 間公共托育設施尚未完成監控系統的原因與完工期程。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5781&chk=c9e6a9d2-747f-4825-af06-5cb9058505c2"
        },
        {
          "topic": "transport",
          "text": "於市政總質詢要求擴大敬老愛心卡使用範圍、強化愛心計程車整合平台，並提高公共自行車設站密度。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5869&chk=a56fbc14-ae84-40eb-af61-5a32ebc871fa"
        },
        {
          "topic": "transport",
          "text": "本屆提案 186 件，以工務類（60 件）最多，其次為民政、警衛；提案包括加速平鎮捷運橘線建設、改善易肇事路口。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/wang-pei-yu-taoyuan"
        },
        {
          "topic": "education",
          "text": "曾任直轄市政府發言與文化部門幕僚、國小教師、基層民意代表（縣轄市民代表）。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1012"
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
              "title": "落實雙語教育，校校有外師，提高本土雙語教師福利",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1012"
            },
            {
              "topic": "welfare",
              "title": "擴大公托容量、擴大兩歲專班，托育補助加碼 1,000 元",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1012"
            },
            {
              "topic": "transport",
              "title": "廣設停車場與轉運站，推動平鎮龍潭捷運路網，打通瓶頸道路",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1012"
            },
            {
              "topic": "environment",
              "title": "打造河岸光廊、親水公園與單車步道",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1012"
            },
            {
              "topic": "environment",
              "title": "活化閒置營區與快速道路橋下空間為公園、運動場與停車場",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1012"
            },
            {
              "topic": "economy",
              "title": "推動勞工公共安全定型化契約",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1012"
            },
            {
              "topic": "economy",
              "title": "推動有機農業與無毒蔬果品牌，培養青農",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1012"
            },
            {
              "topic": "welfare",
              "title": "擴大敬老卡應用，建構社區長照",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1012"
            },
            {
              "topic": "economy",
              "title": "推廣在地文化節慶與社區品牌",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1012"
            },
            {
              "topic": "housing",
              "title": "提高租屋補貼，興建只租不售社會住宅",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1012"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "186 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/wang-pei-yu-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc8-3",
      "identity": {
        "name": "劉仁照",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "education",
          "title": "補助公幼與國小課後照顧經費並增聘專職人力",
          "detail": "於市政總質詢建請市府研議補助公立幼兒園及國小課後照顧服務經費，並增聘專職課照人力，避免由教師額外承擔。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5830"
        },
        {
          "topic": "governance",
          "title": "市民卡 APP 整合停車資訊與公車動態",
          "detail": "於市政總質詢指出停車資訊與公車動態尚未完整整合、特約商店推廣不足，要求加速系統整合並強化店家端推廣。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5830"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "於市政總質詢要求市府提出平鎮多項道路瓶頸工程（含金陵路五、六段替代道路）的全面開工時程與各階段進度。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5830&chk=5c90a52d-9af4-4a8b-a943-50054007ddcd"
        },
        {
          "topic": "governance",
          "text": "於市政總質詢建議市府積極向中央爭取統籌分配款與專案補助款。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5740&chk=5e080ac9-ce3f-4c1f-9eb6-0a1c6530b57c"
        },
        {
          "topic": "environment",
          "text": "本屆提案 73 件，以工務類（44 件）最多；提案包括平鎮旗艦運動公園缺失改善、易積淹水區溝渠定期清淤。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/liu-jen-chao-taoyuan"
        },
        {
          "topic": "economy",
          "text": "具會計師資格，曾任會計師事務所經理、企業稽核主管、科技大學講師。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1014"
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
              "title": "在平鎮設置市立兒童樂園，推動公園遊具共融式改造（本人說法：已爭取快速道路橋下旗艦公園改建）",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1014"
            },
            {
              "topic": "welfare",
              "title": "增設公托、延長托育時間、增加臨時托育場所",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1014"
            },
            {
              "topic": "transport",
              "title": "推動貫穿中壢、平鎮與龍潭的捷運路網",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1014"
            },
            {
              "topic": "transport",
              "title": "推動中庸路一段至中興路拓寬",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1014"
            },
            {
              "topic": "welfare",
              "title": "爭取設置兒童專屬醫院與長期照護醫療園區",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1014"
            },
            {
              "topic": "environment",
              "title": "爭取寵物殯葬園區與寵物友善公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1014"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "73 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/liu-jen-chao-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc8-4",
      "identity": {
        "name": "舒翠玲",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "education",
          "text": "於市政總質詢要求市府成立專責辦公室，統籌校事會議與受理審議小組業務，減輕學校行政負擔。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5861&chk=e5320c03-734d-47f1-827a-b4e286b8b2b5"
        },
        {
          "topic": "education",
          "text": "於市政總質詢建議制訂學生手機管理自治條例，統一規範上課期間手機使用。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5707&chk=3b116130-87a8-4f3a-8f5a-5f8f6bfcbe15"
        },
        {
          "topic": "transport",
          "text": "本屆提案 123 件，以工務類（63 件）最多；提案包括老街溪左岸人行及自行車步道、尖峰時段以雙層巴士行駛高速公路段。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/shu-tsui-ling-taoyuan"
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
              "title": "督促完成鐵路地下化與捷運路網，規劃桃園中壢八德環狀路網",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1011"
            },
            {
              "topic": "transport",
              "title": "加速龍慈路銜接快速道路二期工程、打通龍南路、新闢復旦路三、四段",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1011"
            },
            {
              "topic": "welfare",
              "title": "加強身障就業及就養服務，增加喘息服務、早期療育，建構長照體系",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1011"
            },
            {
              "topic": "education",
              "title": "增加程式語言教學與藝術人文、健體課程師資",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1011"
            },
            {
              "topic": "environment",
              "title": "加強河川整治、空污防制與集水區保護",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1011"
            },
            {
              "topic": "environment",
              "title": "加快污水下水道建置，爭取電線電纜地下化",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1011"
            },
            {
              "topic": "safety",
              "title": "加強取締毒品與網路犯罪",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1011"
            },
            {
              "topic": "economy",
              "title": "協助農畜牧業升級，推動循環經濟、減少甲烷排放",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1011"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "123 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/shu-tsui-ling-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc8-5",
      "identity": {
        "name": "陳韋曄",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "housing",
          "text": "於市政總質詢建議可負擔住宅建立價格申訴與審查機制、相關收入納入住宅基金專款專用，並協調公股銀行專案貸款。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5858&chk=ba1138e7-d60e-43a1-b3fd-a3789c671b1e"
        },
        {
          "topic": "housing",
          "text": "於市政總質詢建議市府加碼青年租金補貼，並於平鎮整體開發區預留可負擔住宅比例。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5768&chk=4aac1455-4f61-4b9c-a024-08b329900b0c"
        },
        {
          "topic": "transport",
          "text": "本屆提案 274 件，以工務類（76 件）最多，其次為民政、警衛；提案包括平鎮區增設公共自行車站點、逐步移出雨水下水道內暫掛纜線。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chen-wei-yeh-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任中央民意代表助理、地方民意代表助理。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1013"
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
              "topic": "housing",
              "title": "推動老人住宅與長青學苑",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1013"
            },
            {
              "topic": "transport",
              "title": "65 歲以上長者搭乘市內捷運、公車免費",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1013"
            },
            {
              "topic": "welfare",
              "title": "利用社區大樓閒置空間設公托中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1013"
            },
            {
              "topic": "welfare",
              "title": "生育津貼提高至一胎 4 萬元，縮短設籍期限為 10 個月",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1013"
            },
            {
              "topic": "economy",
              "title": "設籍青年求職津貼，以最低工資 8 成計算，最高發 6 個月",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1013"
            },
            {
              "topic": "safety",
              "title": "守望相助隊比照義警提供出勤津貼；幼兒園監視器連線派出所",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1013"
            },
            {
              "topic": "transport",
              "title": "爭取平鎮車站、公車轉運站，鐵路地下化延伸到楊梅",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1013"
            },
            {
              "topic": "welfare",
              "title": "爭取平鎮公立醫院",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1013"
            },
            {
              "topic": "economy",
              "title": "提高肥料補助每年每公頃 6,000 元，增加青農補貼與低利貸款",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1013"
            },
            {
              "topic": "environment",
              "title": "公園設置寵物運動場，推動公辦寵物醫療保險",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1013"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "274 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chen-wei-yeh-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc8-6",
      "identity": {
        "name": "黃敬平",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "優先評估捷運自機場捷運環北站往平鎮、龍潭延伸",
          "detail": "於市政總質詢建議因應龍潭科學園區三期開發與南桃園發展，優先評估自機場捷運 A21 環北站往平鎮、龍潭方向延伸。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5865"
        },
        {
          "topic": "safety",
          "title": "醫美診所偷拍疑慮啟動跨局處專案稽查",
          "detail": "於市政總質詢要求衛生局、警察局、消防局與法務局啟動跨局處專案稽查，全面清查診所診療室、更衣區與恢復室等高隱私空間，並協助受害者申訴。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5865"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "於市政總質詢建議將一條巷道拓寬為雙向道路作為中豐交流道替代動線，並追蹤東光路 201 巷拓寬（經費增至 7.5 億元）。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5865&chk=b6eb45a1-031a-443f-aa62-fcf5abaddda2"
        },
        {
          "topic": "safety",
          "text": "於市政總質詢就平鎮南平路二段提出拓寬徵收、排水改善、設置測速照相三項改善措施。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5694&chk=ff2eb353-48ee-429d-88f4-ab1c40342e21"
        },
        {
          "topic": "housing",
          "text": "本屆提案 126 件，以工務類（51 件）最多；提案包括推動友善高齡租屋計畫、研擬社區大樓重大缺失態樣指引。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/huang-ching-ping-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任新聞記者。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1010"
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
              "title": "爭取山仔頂新闢公園、舊營區改建運動園區",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1010"
            },
            {
              "topic": "environment",
              "title": "第九公墓興建公園及地下停車場",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1010"
            },
            {
              "topic": "environment",
              "title": "老街溪河岸步道延伸連接龍潭成單車及步行綠廊",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1010"
            },
            {
              "topic": "transport",
              "title": "國道橋下空間新闢道路；推動金陵路五、六段替代道路",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1010"
            },
            {
              "topic": "transport",
              "title": "拓寬打通東光路 201 巷瓶頸道路",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1010"
            },
            {
              "topic": "transport",
              "title": "兩處停車場改建為轉運站或複合式停車場",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1010"
            },
            {
              "topic": "transport",
              "title": "鐵路地下化後原路廊改建林蔭大道並增設車站停車空間",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1010"
            },
            {
              "topic": "education",
              "title": "大南勢地區新設國民小學；廣設公幼、附幼及非營利幼兒園",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1010"
            },
            {
              "topic": "governance",
              "title": "設立南桃園行政中心平鎮行政園區",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1010"
            },
            {
              "topic": "environment",
              "title": "改善山仔頂地區排水系統，解決水患",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1010"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "126 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/huang-ching-ping-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc8-7",
      "identity": {
        "name": "白丞堯",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "執業律師（報導所述）。",
          "source": "https://today.line.me/tw/v3/article/PG5Vozo"
        }
      ],
      "past": []
    },
    {
      "id": "tyc8-8",
      "identity": {
        "name": "吳正吉",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任中央民意代表辦公室主任等幕僚職務。",
          "source": "https://today.line.me/tw/v3/article/PG5Vozo"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "於中壢區參選，得票 1.76%，未當選",
          "note": "2022 年選舉公報政見文字辨識不清，未擷取。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "tyc8-9",
      "identity": {
        "name": "彭柏霖",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "safety",
          "text": "曾任直轄市政府市政顧問，具義警經歷。",
          "source": "https://today.line.me/tw/v3/article/PG5Vozo"
        }
      ],
      "past": []
    },
    {
      "id": "tyc8-10",
      "identity": {
        "name": "羅文欽",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    }
  ]
});

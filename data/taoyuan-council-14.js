/*
 * 2026 桃園市議員第 14 選區（山地原住民）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，8 人）
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 *   中選會今日（10/16）審定名單公告時尚未讀到（中選會新聞列表截至 9/22 無審定公告），故使用登記名單；人數與中央社 9/4 報導各選區登記人數一致。
 * 應選席次 4 席，依中選會 115/08/20 選舉公告（議員總額 65 名）：https://web.cec.gov.tw/api/file/45d8e965-f63a-46d5-b636-7d81e47cf4d1.pdf
 * 號次 10/23 抽籤，屆時請補上 identity.number。identity.party 依登記表「推薦之政黨」，「無」寫為無黨籍。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 上屆政見取自議會官網議員介紹頁「問政理念」（與 2022 年選舉公報內容相同或相近），兌現狀況未逐則查證，一律標 unknown。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 / unknown 無法查證 / not_applicable 未當選、無從兌現。
 * 現任者「本屆提案數」取自報導者觀測站；議長與部分議員在該站提案數為 0 或查無，未列。
 * 已知缺漏（仍查無 2026 年具體政見）：謝卓儒、邱伯倫、張倉豪、曾庭筠。
 * 2026-10-19 第四輪補查：新增 16 則政見、1 則經歷。現任者政見取自 2026 年市政總質詢中對特定建設或制度的具體要求（議會官網新聞稿），並非正式競選政見。
 */
window.ELECTION_DATA.races.push({
  "id": "taoyuan-council-14",
  "region": "桃園市",
  "office": "第 14 選區山地原住民市議員",
  "area": "全市",
  "seats": 4,
  "note": "議員資料整理自議會官網、報導者觀測站、2022 年選舉公報與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數新人查無具體政見，各人資料多寡差異很大，這裡照實呈現；政見為空不代表候選人沒有主張。「做過的事」中的市政總質詢內容取自議會官網新聞稿。",
  "candidates": [
    {
      "id": "tyc14-1",
      "identity": {
        "name": "陳瑛",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "研議適合部落的聚落型住宅，協助青年返鄉",
          "detail": "2026 年 10 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5909&chk=414b0311-c2c1-45ff-87d6-7ec705d423f4"
        },
        {
          "topic": "education",
          "title": "加碼原住民大專生住宿補助，並與大專院校協調宿舍資源",
          "detail": "2026 年 10 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5909&chk=414b0311-c2c1-45ff-87d6-7ec705d423f4"
        },
        {
          "topic": "welfare",
          "title": "復興區文化健康站串聯智慧醫療，經同意後應用長者健康量測資料",
          "detail": "2026 年 10 月市政總質詢提出，復興區共 14 處文化健康站",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5909&chk=414b0311-c2c1-45ff-87d6-7ec705d423f4"
        },
        {
          "topic": "economy",
          "title": "跨局處依各里特色發展復興區主題文化旅遊",
          "detail": "2026 年 10 月市政總質詢提出；觀旅局答詢將盤點原鄉旅遊資源",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5909&chk=414b0311-c2c1-45ff-87d6-7ec705d423f4"
        },
        {
          "topic": "welfare",
          "title": "媒合原住民專長人才與大專學生投入文化健康站服務",
          "detail": "2026 年 6 月市政總質詢提出，建議試辦",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5836"
        },
        {
          "topic": "welfare",
          "title": "擴大原住民心理健康服務年齡範圍，導入具文化敏感度的諮商人力",
          "detail": "2026 年 6 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5836"
        }
      ],
      "record": [
        {
          "topic": "housing",
          "text": "於市政總質詢建議研議適合部落的聚落型住宅，並加碼原住民大專生住宿補助。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5909&chk=414b0311-c2c1-45ff-87d6-7ec705d423f4"
        },
        {
          "topic": "housing",
          "text": "於市政總質詢指出原鄉建屋免申請門檻（造價 86 萬元以下）與實際造價脫節，要求建立透明的輔導與納管制度。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5752&chk=e02543b4-b55b-4cf0-ae70-d1b7bc3bc04f"
        },
        {
          "topic": "governance",
          "text": "曾任基層民意代表（鄉民代表）、音樂工作室負責人。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1031"
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
              "title": "捍衛原住民土地權益並提升土地經濟效益",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1031"
            },
            {
              "topic": "education",
              "title": "貫徹原住民族教育法，保障就學權益",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1031"
            },
            {
              "topic": "economy",
              "title": "培植原民多元產業與品牌",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1031"
            },
            {
              "topic": "economy",
              "title": "提供原民青年創業基金與輔導",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1031"
            },
            {
              "topic": "transport",
              "title": "推動部落營造、觀光、交通與水電建設",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1031"
            },
            {
              "topic": "economy",
              "title": "保障原民就業權",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1031"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "tyc14-2",
      "identity": {
        "name": "謝卓儒",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任中央民意代表特助、地方民意代表特助（提名方說法）。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5522081"
        }
      ],
      "past": []
    },
    {
      "id": "tyc14-3",
      "identity": {
        "name": "林秋霖",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "爭取部落在地醫療照護點與行動醫療",
          "detail": "",
          "source": "https://www.cdns.com.tw/articles/1476152"
        },
        {
          "topic": "welfare",
          "title": "擴大原鄉弱勢家庭扶助，強化幼兒教育與原鄉學童學習資源",
          "detail": "",
          "source": "https://www.cdns.com.tw/articles/1476152"
        },
        {
          "topic": "economy",
          "title": "扶植部落在地產業與特色旅遊，創造青年留鄉機會",
          "detail": "",
          "source": "https://www.cdns.com.tw/articles/1476152"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "長期自費並號召社會資源，捐贈白米物資給原鄉弱勢家庭，定期發放書包與學習用品給原鄉學童（本人說法）。",
          "source": "https://www.cdns.com.tw/articles/1476152"
        }
      ],
      "past": []
    },
    {
      "id": "tyc14-4",
      "identity": {
        "name": "邱伯倫",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "tyc14-5",
      "identity": {
        "name": "張倉豪",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "現任基層民意代表會主席（原住民區）。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5382425"
        }
      ],
      "past": []
    },
    {
      "id": "tyc14-6",
      "identity": {
        "name": "簡志偉",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "加速推動復興區醫療、行政與社福園區",
          "detail": "2026 年 7 月市政總質詢提出，以原國中周邊腹地整合長照、社福機構與醫院分院；主張可先做的部分先推動",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5859&chk=cd8aee5c-2c33-4391-92f1-d328fb371e61"
        },
        {
          "topic": "welfare",
          "title": "結合區農會既有空間設置在地長照服務據點",
          "detail": "2026 年 7 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5859&chk=cd8aee5c-2c33-4391-92f1-d328fb371e61"
        },
        {
          "topic": "safety",
          "title": "強化復興區無人機隊訓練與設備，提升山區救災效率",
          "detail": "2026 年 7 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5859&chk=cd8aee5c-2c33-4391-92f1-d328fb371e61"
        },
        {
          "topic": "welfare",
          "title": "衛生單位主動稽查醫美診所",
          "detail": "2026 年 7 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5859&chk=cd8aee5c-2c33-4391-92f1-d328fb371e61"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "於市政總質詢要求加速推動復興區醫教社福園區，結合長照、社福機構與醫院分院。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5859&chk=cd8aee5c-2c33-4391-92f1-d328fb371e61"
        },
        {
          "topic": "governance",
          "text": "於市政總質詢建議增修原住民族發展自治條例，納入都市原住民就業、居住、教育等條文，並規劃原住民長者專屬敬老卡用途。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5689&chk=dc666dd9-3b33-43e2-aba0-c225d42f61a5"
        },
        {
          "topic": "transport",
          "text": "本屆提案 28 件，以工務類（14 件）最多；提案包括羅浮溫泉地區設置公共自行車站點、廢校空間活化為停車場。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chien-chih-wei-taoyuan"
        },
        {
          "topic": "governance",
          "text": "曾任中央民意代表辦公室主任、駐外機構專員。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1030"
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
              "title": "建置原住民族文化創意園區與青年創業育成",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1030"
            },
            {
              "topic": "environment",
              "title": "規劃原住民族文化主題公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1030"
            },
            {
              "topic": "economy",
              "title": "爭取青年企業實習，定期舉辦原住民就業博覽會",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1030"
            },
            {
              "topic": "education",
              "title": "設置族語教學幼兒園、增加族語保母",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1030"
            },
            {
              "topic": "welfare",
              "title": "增設文化健康站並提供接送",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1030"
            },
            {
              "topic": "welfare",
              "title": "簡化社福申辦程序，建立單一服務窗口",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1030"
            },
            {
              "topic": "economy",
              "title": "建設復興區泰雅族文化觀光園區，推動北橫國家風景區",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1030"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "28 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/chien-chih-wei-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc14-7",
      "identity": {
        "name": "蘇偉恩",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "education",
          "title": "改善族語教師待遇，鬆綁資格認證與聘用辦法，建立培育與補充機制",
          "detail": "2026 年 6 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5840&chk=be31ef48-fd46-4cc4-bbb9-f73219f62c24"
        },
        {
          "topic": "education",
          "title": "推動族語教學數位化，發展數位教材與線上平台",
          "detail": "2026 年 6 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5840&chk=be31ef48-fd46-4cc4-bbb9-f73219f62c24"
        },
        {
          "topic": "housing",
          "title": "檢討原住民租金補貼申請門檻與補助機制",
          "detail": "2026 年 6 月市政總質詢提出",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5840&chk=be31ef48-fd46-4cc4-bbb9-f73219f62c24"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "於市政總質詢要求改善族語教師待遇與聘用資格，提出師資培育與補充機制。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5840&chk=be31ef48-fd46-4cc4-bbb9-f73219f62c24"
        },
        {
          "topic": "housing",
          "text": "於市政總質詢建議興建原住民專屬社會住宅並提高原住民保障比例。",
          "source": "https://www.tycc.gov.tw/TC/newm_info.aspx?mid=50&lid=5674&chk=9db57b3b-3372-4cbb-a7c9-29b56df73012"
        },
        {
          "topic": "education",
          "text": "本屆提案 30 件，以教育類（15 件）最多；提案包括編寫青年權利手冊、成立原住民傳統名字命名諮詢小組、部落聯外橋樑與農路改善。",
          "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/su-wei-en-taoyuan"
        },
        {
          "topic": "welfare",
          "text": "曾任地方民意代表服務處秘書、文化健康站督導。",
          "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1032"
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
              "title": "提升原住民社會住宅比例",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1032"
            },
            {
              "topic": "welfare",
              "title": "增加公托原住民族生錄取名額",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1032"
            },
            {
              "topic": "education",
              "title": "輔導成立原住民課後輔導班，以 E 化教學落實族語學習",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1032"
            },
            {
              "topic": "education",
              "title": "增加羅浮完全中學科系多樣化",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1032"
            },
            {
              "topic": "economy",
              "title": "增加原住民職訓專班、證照班與青年創業空間",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1032"
            },
            {
              "topic": "environment",
              "title": "爭取自來水管線延伸至羅浮、義盛、霞雲",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1032"
            },
            {
              "topic": "welfare",
              "title": "爭取原鄉醫療中心及洗腎中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1032"
            },
            {
              "topic": "economy",
              "title": "風景區及溫泉攤販租金優惠",
              "status": "unknown",
              "note": "",
              "source": "https://www.tycc.gov.tw/TC/councilor-detail.aspx?mid=39&num=1032"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "30 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taoyuan/lawmaker/su-wei-en-taoyuan"
            }
          ]
        }
      ]
    },
    {
      "id": "tyc14-8",
      "identity": {
        "name": "曾庭筠",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    }
  ]
});

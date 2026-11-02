/*
 * 2026 基隆市議員第 5 選區市議員（安樂區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依基隆市選舉委員會「[115年縣市議員選舉]候選人登記情形一覽表」（115/09/04 製表，共 60 人）：
 *   https://www.cec.gov.tw/api/file/91b2447a-768e-44f4-841a-892a7ddb35fc.pdf
 *   本選區登記 12 人，應選 7 席（席次依中選會 115/08/20 選舉公告：https://web.cec.gov.tw/api/file/45d8e965-f63a-46d5-b636-7d81e47cf4d1.pdf）。
 *   10/16 審定名單在整理時尚未於中選會／基隆市選委會網站公告，故使用 9/4 登記名單；若審定名單有異動請更新。
 * 號次抽籤原訂 2026-10-23，因颱風薔琵來襲基隆市停班，基隆市選委會順延至 2026-10-27 舉行（https://www.chinatimes.com/realtimenews/20261022004643-260405），2026-10-25 時尚無結果，抽籤後請補上 identity.number。黨籍已於 2026-10-25 對照 9/4 登記一覽表推薦政黨欄核對，全部一致。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 過去政見（past）取自基隆市議會官網議員介紹頁所列政見（2022 年選舉公報原始連結已失效），兌現狀態未逐則查證，一律 unknown。
 * 已知缺漏：仍查無 2026 政見者：張家馨、黃永翔、黃忠賢、吳程澤（第六輪補查後）。
 * 2026-10-19 第四輪補查：新增 3 則政見、1 則經歷。
 * 2026-11-02 第五輪補查：新增 6 則政見、4 則經歷。
 * 2026-11-02 第六輪補查：新增 7 則政見、0 則經歷。
 * 第六輪新增的議會提案來自基隆市議會議事檢索（https://www.kmc.gov.tw/kmcweb/#/motion ，單頁應用程式無個別提案網址，以提案人姓名查詢第 20 屆第 7 次定期會〔2026 年 5–6 月〕及第 19–23 次臨時會），只收本人為唯一提案人的提案。
 * 號次：依基隆市選委會「候選人姓名號次抽籤結果」（2026-10-28 公告，https://web.cec.gov.tw/klec/article/65421 ；議員一覽表 https://web.cec.gov.tw/api/file/efe74705-3231-4466-b9fb-44b78f8d78c2.pdf ）補上（2026-11-02 註）。
 */
window.ELECTION_DATA.races.push({
  "id": "keelung-council-05",
  "region": "基隆市",
  "office": "第 5 選區市議員",
  "area": "安樂區",
  "seats": 7,
  "note": "議員政見整理自政黨候選人介紹頁、議會官網與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，各人資料多寡差異很大，這裡照實呈現。",
  "candidates": [
    {
      "id": "klc5-1",
      "identity": {
        "name": "張家馨",
        "party": "中國國民黨",
        "number": 8
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任地方政府首長秘書。",
          "source": "https://udn.com/news/story/124652/9407574"
        },
        {
          "topic": "governance",
          "text": "2026 年 7 月參與接力絕食抗議，訴求中央政府正視致癌物超標食用油的食安問題。",
          "source": "https://udn.com/news/story/124948/9641697"
        }
      ]
    },
    {
      "id": "klc5-2",
      "identity": {
        "name": "黃永翔",
        "party": "無黨籍",
        "number": 10
      },
      "platforms": [],
      "record": [
        {
          "topic": "welfare",
          "text": "曾任慈善協會執行長。",
          "source": "https://udn.com/news/story/124652/9294565"
        },
        {
          "topic": "governance",
          "text": "曾遭地方法院以使公務員登載不實罪判決（報導未載明刑度及是否確定），原所屬政黨於 2026 年 7 月據此將其除名並撤銷提名；本人表示除名係依匿名檢舉拼湊內容，感到遺憾，並改以無黨籍參選。",
          "source": "https://udn.com/news/story/7328/9648555"
        },
        {
          "topic": "education",
          "text": "擔任地方家長團體理事暨幼兒學程召集人，並擔任更生保護團體志工，訪視陪伴更生人（本人說法）。",
          "source": "https://bo6s.com.tw/news_detail.php?NewsID=116031"
        }
      ]
    },
    {
      "id": "klc5-3",
      "identity": {
        "name": "俞叁發",
        "party": "中國國民黨",
        "number": 11
      },
      "platforms": [
        {
          "topic": "education",
          "title": "爭取大武崙棒球場改善並興建滯洪池、停車場與游泳池",
          "detail": "2026 年 6 月議會總質詢追問中央財源變動後的推動情形，表示最希望市府持續推動興建游泳池。",
          "source": "https://www.youtube.com/watch?v=f6ChXIxqPMs"
        },
        {
          "topic": "transport",
          "title": "安樂區崇德路 10 巷路面全面刨鋪",
          "detail": "2026 年議會臨時會提案，經大會通過。",
          "source": "https://www.kmc.gov.tw/kmcweb/#/motion"
        },
        {
          "topic": "transport",
          "title": "基金三路 51 號至 63 號社區道路重新刨鋪",
          "detail": "2026 年議會臨時會提案，經大會通過。",
          "source": "https://www.kmc.gov.tw/kmcweb/#/motion"
        },
        {
          "topic": "transport",
          "title": "武崙街口與社區出口交界處增設黃網線",
          "detail": "禁止臨時停車、維持路口淨空；2026 年議會臨時會提案，經大會通過。",
          "source": "https://www.kmc.gov.tw/kmcweb/#/motion"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "推動基金公路塞車短期改善規劃，已有成效（本人說法）。",
          "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/291-klal-03"
        },
        {
          "topic": "safety",
          "text": "推動武崙溪淹水短期改善規劃，五年內展現成效（本人說法）。",
          "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/291-klal-03"
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
              "title": "推動新闢道路以徹底改善基金公路塞車",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/291-klal-03"
            },
            {
              "topic": "safety",
              "title": "監督推動武崙溪淹水中長期整治",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/291-klal-03"
            },
            {
              "topic": "transport",
              "title": "推動監督增建停車場",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/291-klal-03"
            },
            {
              "topic": "transport",
              "title": "持續監督捷運建置",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/291-klal-03"
            },
            {
              "topic": "education",
              "title": "建置各區籃球場、游泳池等運動設施",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/291-klal-03"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "klc5-4",
      "identity": {
        "name": "秦鉦",
        "party": "中國國民黨",
        "number": 4
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "安樂路二段未施作路段縮減人行道寬度、優先維持車道",
          "detail": "人行道拓寬造成機車道消失、事故增加，2026 年 3 月會勘時建議調整自強隧道出口右側人行道寬度，人行道設計應因地制宜、不宜一體適用",
          "source": "https://www.cdns.com.tw/articles/1377698"
        },
        {
          "topic": "welfare",
          "title": "改建後的市立田徑場設施免費開放市民使用",
          "detail": "2026 年 3 月議會中與多名議員共同要求田徑場設施免費開放，或研議差別費率（市民優惠、外縣市民一般收費）",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5361815"
        }
      ],
      "record": [],
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
              "title": "爭取捷運路線經安樂區並設長庚醫院站",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/295-klal-07"
            },
            {
              "topic": "transport",
              "title": "盤點閒置公有地增建停車格，學校操場增建地下停車場",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/295-klal-07"
            },
            {
              "topic": "transport",
              "title": "瓶頸路口尖峰時段以科技執法嚇阻違規停車",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/295-klal-07"
            },
            {
              "topic": "education",
              "title": "在安樂區規劃戶外與室內兼具的運動園區",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/295-klal-07"
            },
            {
              "topic": "education",
              "title": "設立結合圖書與藝文的第二座文化中心",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/295-klal-07"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "klc5-5",
      "identity": {
        "name": "黃忠賢",
        "party": "無黨籍",
        "number": 1
      },
      "platforms": [],
      "record": [
        {
          "topic": "safety",
          "text": "以地方關懷協會理事長身分，2026 年 8 月結合企業捐贈市警察局 1,000 劑毒品唾液快篩試劑，供查緝毒駕使用。",
          "source": "https://n.yam.com/Article/20260820975691"
        }
      ]
    },
    {
      "id": "klc5-6",
      "identity": {
        "name": "吳程澤",
        "party": "台灣基進",
        "number": 3
      },
      "platforms": [],
      "record": [
        {
          "topic": "economy",
          "text": "曾任文創園區招商主任、百貨公司行銷企劃專員。",
          "source": "https://statebuilding.tw/candidates/16816"
        }
      ]
    },
    {
      "id": "klc5-7",
      "identity": {
        "name": "李文耀",
        "party": "台灣民眾黨",
        "number": 7
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "督促市府優化通勤動線與運輸效率",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=189"
        },
        {
          "topic": "welfare",
          "title": "補強在地長照量能",
          "detail": "串聯社區據點與即時服務",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=189"
        },
        {
          "topic": "economy",
          "title": "要求市府提出招商獎勵與補助機制",
          "detail": "引進低耗能、可長期發展的產業進駐安樂區，創造在地就業",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=189"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "曾任地方駐地記者。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602618"
        }
      ]
    },
    {
      "id": "klc5-8",
      "identity": {
        "name": "黃舒琳",
        "party": "親民黨",
        "number": 2
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "推動外木山、大武崙山海環境保育",
          "detail": "清理景區垃圾",
          "source": "https://www.163.com/dy/article/L3LT758S055080L4.html"
        },
        {
          "topic": "transport",
          "title": "改善交通設施",
          "detail": "",
          "source": "https://www.163.com/dy/article/L3LT758S055080L4.html"
        },
        {
          "topic": "welfare",
          "title": "加強樂齡服務",
          "detail": "",
          "source": "https://www.163.com/dy/article/L3LT758S055080L4.html"
        }
      ],
      "record": []
    },
    {
      "id": "klc5-9",
      "identity": {
        "name": "張之豪",
        "party": "民主進步黨",
        "number": 6
      },
      "platforms": [
        {
          "topic": "governance",
          "title": "主張議員建議工程經費刪至象徵性金額，重建公平透明的分配機制",
          "detail": "2026 年 10 月審議 2027 年度總預算時，與其他議員共同主張將零星工程與里鄰工程經費（合計約 1.6 億元）刪至 1 元，日後再以追加預算重新編列",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5606351"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "推動安樂區沿線候車空間改善與醫院站擴建（本人說法）。",
          "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/293-klal-05"
        },
        {
          "topic": "transport",
          "text": "推動麥金路示範道路計畫與基金一二三路改善計畫，已陸續完工（本人說法）。",
          "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/293-klal-05"
        },
        {
          "topic": "environment",
          "text": "催生安樂區一處親子公園（本人說法）。",
          "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/293-klal-05"
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
              "title": "監督安樂區候車空間改善",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/293-klal-05"
            },
            {
              "topic": "transport",
              "title": "監督地下管線更換與路面改善",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/293-klal-05"
            },
            {
              "topic": "environment",
              "title": "監督改善公園安全與品質",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/293-klal-05"
            },
            {
              "topic": "transport",
              "title": "持續監督捷運進度與各區接駁方案",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/293-klal-05"
            },
            {
              "topic": "governance",
              "title": "監督行政改革",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/293-klal-05"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "klc5-10",
      "identity": {
        "name": "鄭愷玲",
        "party": "中國國民黨",
        "number": 12
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "國道聯外道路改用既有巷道路幅銜接交流道",
          "detail": "安樂區國一至國三聯外道路第一階段，主張利用麥金路 3 巷既有路幅（已通行二、三十年），拓寬國道管理機關土地後銜接國一交流道，以減少工程費、環境擾動與用地取得難度；2026 年 5 月定期會提出",
          "source": "https://www.cdns.com.tw/articles/1407186"
        },
        {
          "topic": "transport",
          "title": "假日塞車尖峰時段主幹道號誌同步",
          "detail": "短期措施：假日尖峰時段將主幹線交通號誌調整一致，舒緩車流；2026 年 5 月定期會提出",
          "source": "https://www.cdns.com.tw/articles/1407186"
        },
        {
          "topic": "transport",
          "title": "捷運二階規劃保留台鐵，與捷運並存",
          "detail": "反對以捷運取代台鐵（「廢鐵換捷」），認為郵輪母港需要台鐵；2026 年 5 月定期會提出",
          "source": "https://www.cdns.com.tw/articles/1407186"
        },
        {
          "topic": "welfare",
          "title": "改建後的市立田徑場設施免費開放市民使用",
          "detail": "2026 年 3 月議會中與多名議員共同要求田徑場設施免費開放，或研議差別費率（市民優惠、外縣市民一般收費）",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5361815"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "協調市府與電力公司，將安樂路一段自強隧道口公車站旁 3 根電線桿地下化、改設落地變電箱，舊候車亭已拆除、市府規劃新建（本人說法）。",
          "source": "https://www.cdns.com.tw/articles/1436251"
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
              "title": "汰換自來水老舊管線",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/290-klal-02"
            },
            {
              "topic": "education",
              "title": "推動公立國中小全面雙語教學",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/290-klal-02"
            },
            {
              "topic": "environment",
              "title": "推動污水管住戶端接管",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/290-klal-02"
            },
            {
              "topic": "transport",
              "title": "住宅社區廣設公私停車空間",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/290-klal-02"
            },
            {
              "topic": "housing",
              "title": "持續推動危老都更",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/290-klal-02"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "klc5-11",
      "identity": {
        "name": "吳驊珈",
        "party": "民主進步黨",
        "number": 9
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "要求公開鼠患防治進度與滅鼠藥分配方式，並整合清消與熱點管理",
          "detail": "2026 年 6 月議會質詢提出；要求說明全市 157 里是否都已配發滅鼠藥及分配依據，並由市府整合環境清消、熱點管理與跨局處合作",
          "source": "https://udn.com/news/story/7328/9540803"
        },
        {
          "topic": "governance",
          "title": "主張議員建議工程經費刪至象徵性金額，重建公平透明的分配機制",
          "detail": "2026 年 10 月審議 2027 年度總預算時，與其他議員共同主張將零星工程與里鄰工程經費（合計約 1.6 億元）刪至 1 元，日後再以追加預算重新編列",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5606351"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "擔任中央民意代表服務處執行秘書 6 年，處理 8 千多件陳情案（本人說法）。",
          "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/292-klal-04"
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
              "title": "推動安樂區公共污水管線全面完成佈設接管",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/292-klal-04"
            },
            {
              "topic": "environment",
              "title": "監督大武崙森林公園興建",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/292-klal-04"
            },
            {
              "topic": "environment",
              "title": "推動情人湖公園周邊再生計畫",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/292-klal-04"
            },
            {
              "topic": "transport",
              "title": "推動劉銘傳隧道周邊及安一路周邊停車空間",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/292-klal-04"
            },
            {
              "topic": "environment",
              "title": "推動設立寵物友善公園",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klal/292-klal-04"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "klc5-12",
      "identity": {
        "name": "劉韋巡",
        "party": "民主進步黨",
        "number": 5
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "以更高規格改建大武崙棒球場並結合滯洪池多功能停車場",
          "detail": "主張改建不應沿用舊式設計，以可吸引職業球隊進駐的規格規劃，並結合滯洪池多功能停車場解決停車問題；2026 年 8 月網路節目訪談中提出。",
          "source": "https://www.youtube.com/watch?v=uWCvs90JlcA"
        },
        {
          "topic": "transport",
          "title": "爭取增開 9026、1815 等客運班次",
          "detail": "以大眾運輸紓解安樂區通勤壅塞；2026 年 8 月網路節目訪談中提出。",
          "source": "https://www.youtube.com/watch?v=uWCvs90JlcA"
        },
        {
          "topic": "transport",
          "title": "要求快速道路引道規劃不得將車流轉嫁大武崙",
          "detail": "針對國城商圈周邊未來可能規劃的快速道路引道，主張解決國家新城塞車的同時不得把車流導入已壅塞的大武崙，並持續向中央與市府爭取道路規劃優化；2026 年 8 月網路節目訪談中提出。",
          "source": "https://www.youtube.com/watch?v=uWCvs90JlcA"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "曾任地方民意機關首長秘書。",
          "source": "https://udn.com/news/story/124652/9663023"
        },
        {
          "topic": "education",
          "text": "擔任地方體育會棒球委員會主任委員。",
          "source": "https://udn.com/news/story/124652/9294565"
        }
      ]
    }
  ]
});

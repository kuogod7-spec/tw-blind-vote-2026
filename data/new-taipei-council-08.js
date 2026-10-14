/*
 * 2026 新北市議員第 8 選區市議員（樹林區、鶯歌區、土城區、三峽區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-14。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，12 人，應選 9 席，含婦女保障 2 席；上屆 10 席）。
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 *   應選席次依中選會公告報導：https://udn.com/news/story/124652/9703290 ；另見 https://news.ltn.com.tw/news/politics/breakingnews/5563564
 * 審定名單 10/16 公告、號次 10/23 抽籤，屆時請補上 identity.number。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」取自議會官網議員介紹頁（與 2022 年選舉公報內容相同）；提案數取自報導者觀測站；2022 年得票率取自自由時報開票頁。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 2026-10-14 第二輪補查：以新聞報導與候選人網站補充 2026 年政見；部分候選人（含多位現任者）仍查無具體的 2026 年政見，政見欄維持空白，待選舉公報發布後補齊。
 * 2026-10-14 第三輪補查：以 2026 年 5–7 月新聞報導（多為大型場館選址相關發言）補充 ntc8-2、ntc8-4、ntc8-7、ntc8-9、ntc8-11 的政見，並為 ntc8-2 補 2 則經歷（本人說法）；ntc8-1、ntc8-6、ntc8-8、ntc8-10、ntc8-12 仍查無具體 2026 年政見，維持空白。
 * 2026-10-14 依使用者決定補列司法事件：ntc8-9 經歷補列 2026 年 10 月涉嫌賄選交保一事（偵查中）。
 */
window.ELECTION_DATA.races.push({
  "id": "new-taipei-council-08",
  "region": "新北市",
  "office": "第 8 選區市議員",
  "area": "樹林區、鶯歌區、土城區、三峽區",
  "seats": 9,
  "note": "議員政見整理自候選人公開資料、議會官網、選舉公報與新聞報導（截至 2026-10-14）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，各人資料多寡差異很大，這裡照實呈現。",
  "candidates": [
    {
      "id": "ntc8-1",
      "identity": {
        "name": "高乃芸",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "education",
          "text": "曾任國小教師，具諮商心理師資格。",
          "source": "https://udn.com/news/story/124652/9505820"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "得票 5.85%，未當選",
          "note": "得票率取自自由時報開票頁。",
          "promises": [
            {
              "topic": "environment",
              "title": "推動公墓公園化，評估第二公墓遷葬後建設公園",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            },
            {
              "topic": "transport",
              "title": "爭取台鐵樹林站、鶯歌站至臺北車站段納入雙北 1,280 元月票",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            },
            {
              "topic": "transport",
              "title": "爭取樹林鐵路地下化",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            },
            {
              "topic": "welfare",
              "title": "增加土城、樹林、三峽、鶯歌衛生所心理師駐點時段",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            },
            {
              "topic": "education",
              "title": "為土城、樹林、三峽、鶯歌的小學爭取增設校舍",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            }
          ],
          "rates": [
            {
              "label": "2022 年得票率",
              "value": "5.85%",
              "by": "自由時報開票頁",
              "source": "https://election.ltn.com.tw/2022/realtime/NewTaipei/parliamentary"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc8-2",
      "identity": {
        "name": "廖宜琨",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "大型場館若設於樹林，先完成交通、道路與停車配套",
          "detail": "周邊道路拓寬，浮洲橋評估改建或新增聯絡道路",
          "source": "https://udn.com/news/story/7323/9517473"
        },
        {
          "topic": "transport",
          "title": "評估在俊英街設置簡易火車站分散活動人流",
          "detail": "理由是捷運中運量系統僅四節車廂，難以負荷大型活動散場人潮",
          "source": "https://udn.com/news/story/7323/9517473"
        },
        {
          "topic": "governance",
          "title": "看守所遷移後的土地及早規畫",
          "detail": "可考慮作為大型體育館等公共建設",
          "source": "https://udn.com/news/story/7323/9517473"
        },
        {
          "topic": "economy",
          "title": "推動大柑園產業園區，吸引 AI 與高科技產業",
          "detail": "並帶動台 65 線延伸、三鶯二橋系統交流道等交通建設，也提到規劃世貿中心及都市計畫",
          "source": "https://udn.com/news/story/7323/9608373"
        },
        {
          "topic": "governance",
          "title": "嚴格審查市政預算，爭取中央與地方建設資源",
          "detail": "",
          "source": "https://news.ltn.com.tw/news/NewTaipei/breakingnews/5517289"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "本屆提案 328 件，以衛生類（64 件）最多，其次為社會、教育、交通。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/liao-yi-kun-new-taipei"
        },
        {
          "topic": "governance",
          "text": "擔任民意代表期間累計處理逾 8000 件服務案件、提出逾 2000 件提案（本人說法）。",
          "source": "https://udn.com/news/story/7323/9608373"
        },
        {
          "topic": "transport",
          "text": "列舉參與爭取的地方建設包括萬大中和樹林線捷運、大柑園產業園區推動、長壽公園地下停車場及育林國中資優班設立（本人說法）。",
          "source": "https://udn.com/news/story/7323/9608373"
        },
        {
          "topic": "welfare",
          "text": "提案追蹤 5 歲以下未入托幼兒的疫苗未接種個案，並建議協調業者提供孕婦購物優惠；市府回覆 2025 年放寬孕婦相關補助對象。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/liao-yi-kun-new-taipei"
        },
        {
          "topic": "welfare",
          "text": "提案研議設置長照通報網，並研擬產後 6 個月內憂鬱婦女心理諮商計畫。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/liao-yi-kun-new-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2018–2026",
          "elected": true,
          "result": "",
          "note": "以下追蹤議會官網列出的本屆（2022 年）政見。",
          "promises": [
            {
              "topic": "transport",
              "title": "加速樹林捷運開工",
              "status": "done",
              "note": "萬大線第二期樹林段 2022 年 10 月動工；個人角色無法查證",
              "source": "https://zh.wikipedia.org/zh-tw/臺北捷運萬大線"
            },
            {
              "topic": "transport",
              "title": "加速三鶯捷運提前完工",
              "status": "done",
              "note": "2026 年 4 月完工、6 月 30 日起試營運；是否早於原定時程無法判斷",
              "source": "https://zh.wikipedia.org/zh-tw/新北捷運三鶯線"
            },
            {
              "topic": "transport",
              "title": "增設客家園區捷運站（LB07a）",
              "status": "not_done",
              "note": "三鶯線通車時未設此站；市府保留用地，視營運情形與都市計畫再評估",
              "source": "https://zh.wikipedia.org/zh-tw/新北捷運三鶯線"
            },
            {
              "topic": "transport",
              "title": "加速三鶯大橋改建",
              "status": "done",
              "note": "改建後的三鶯大橋 2023 年 9 月通車",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/su-hung-chin-new-taipei"
            },
            {
              "topic": "welfare",
              "title": "65 歲以上長輩免費裝假牙",
              "status": "unknown",
              "note": "查無市府擴大到一般長者的公告",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=599"
            },
            {
              "topic": "welfare",
              "title": "利用閒置教室及社區空間增設公托並延長服務時間",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=599"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "328 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/liao-yi-kun-new-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc8-3",
      "identity": {
        "name": "吳亞倫",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "督促社會住宅興建，提高土樹三鶯社宅量",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=194"
        },
        {
          "topic": "safety",
          "title": "督促市府完善校園安全體系",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=194"
        },
        {
          "topic": "governance",
          "title": "監督市府減少舉債，落實財政紀律",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=194"
        },
        {
          "topic": "economy",
          "title": "倡議市府帶頭縮減工時，獎勵民間企業跟進",
          "detail": "",
          "source": "https://www.tpp.org.tw/election2026/candidatedetail.php?cid=194"
        }
      ],
      "record": [],
      "past": []
    },
    {
      "id": "ntc8-4",
      "identity": {
        "name": "卓冠廷",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "大型場館開發期間同步完成道路拓寬、電纜下地與交通疏導動線",
          "detail": "在估計 8 至 10 年的開發與招商期程內完成",
          "source": "https://udn.com/news/story/7323/9643114"
        },
        {
          "topic": "environment",
          "title": "場館周邊規畫大面積公園綠地與人行、休憩空間",
          "detail": "並考量展演經濟與商圈發展，提升在地生活機能",
          "source": "https://udn.com/news/story/7323/9643114"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "本屆提案 173 件，以衛生類（33 件）最多，其次為社會、交通、教育、民政。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/cho-kuan-ting-new-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "以下追蹤議會官網列出的本屆（2022 年）政見。",
          "promises": [
            {
              "topic": "transport",
              "title": "監督萬大樹林線如期如質完工",
              "status": "in_progress",
              "note": "第二期 2024 年起陸續動工，預計 2031 年通車",
              "source": "https://zh.wikipedia.org/zh-tw/臺北捷運萬大線"
            },
            {
              "topic": "transport",
              "title": "推動樹林、鶯歌鐵路立體化",
              "status": "unknown",
              "note": "查無可確認進度的來源",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=619"
            },
            {
              "topic": "transport",
              "title": "公布塞車熱點，每月檢討交通改善計畫",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=619"
            },
            {
              "topic": "transport",
              "title": "鶯歌車站原址改建不遷移",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=619"
            },
            {
              "topic": "transport",
              "title": "三峽長福停車場與長福橋一起改建",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=619"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "173 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/cho-kuan-ting-new-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc8-5",
      "identity": {
        "name": "吳昇翰",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "調整三鶯線周邊公車路線與轉乘，增加公車班次",
          "detail": "",
          "source": "https://www.setn.com/news/1872528"
        },
        {
          "topic": "welfare",
          "title": "推動長照政策",
          "detail": "未列具體做法",
          "source": "https://www.setn.com/news/1872528"
        },
        {
          "topic": "welfare",
          "title": "在三峽爭取更多公托用地與課後照顧資源",
          "detail": "",
          "source": "https://www.setn.com/news/1872528"
        },
        {
          "topic": "economy",
          "title": "在三峽引進青年基地等就業資源，扶植在地品牌",
          "detail": "",
          "source": "https://www.setn.com/news/1872528"
        },
        {
          "topic": "economy",
          "title": "以三峽老街為核心，串聯藍染、茶、竹筍與森林公園的觀光網絡，促進過夜旅遊",
          "detail": "",
          "source": "https://www.setn.com/news/1872528"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "擔任中央民意代表服務處主任 8 年（本人說法）。",
          "source": "https://udn.com/news/story/124652/9287101"
        }
      ],
      "past": []
    },
    {
      "id": "ntc8-6",
      "identity": {
        "name": "彭一書",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "welfare",
          "text": "本屆提案 179 件，以衛生類（38 件）最多，其次為社會、交通、敬老卡福利。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/peng-yi-shu-new-taipei"
        },
        {
          "topic": "welfare",
          "text": "提案擴增長照交通接送量能；市府回覆 2024 年接送服務約 61.9 萬趟次，月平均較前一年成長近 23%。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/peng-yi-shu-new-taipei"
        },
        {
          "topic": "welfare",
          "text": "提案結合地方診所增加嬰幼兒早期療育評估與復健資源，並要求加強登革熱防治與食品效期標示。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/peng-yi-shu-new-taipei"
        },
        {
          "topic": "economy",
          "text": "2026 年 5 月質詢建議整合各局處吉祥物建立城市識別，並用於接駁車與地標；市府首長表示評估於年底耶誕活動共同演出。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5442071"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "以下追蹤議會官網列出的本屆（2022 年）政見。",
          "promises": [
            {
              "topic": "transport",
              "title": "監督捷運萬大樹林線工程提早動工",
              "status": "done",
              "note": "樹林段 2022 年 10 月動工；個人角色無法查證",
              "source": "https://zh.wikipedia.org/zh-tw/臺北捷運萬大線"
            },
            {
              "topic": "transport",
              "title": "監督金城交流道興建進程",
              "status": "unknown",
              "note": "查無可確認進度的來源",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=620"
            },
            {
              "topic": "transport",
              "title": "推動樹林鐵路地下化",
              "status": "unknown",
              "note": "查無可確認進度的來源",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=620"
            },
            {
              "topic": "welfare",
              "title": "捷運站共構大樓與區域行政中心設立日照中心，每里設置關懷據點",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=620"
            },
            {
              "topic": "safety",
              "title": "登山步道總體檢並優化山區通訊訊號",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=620"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "179 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/peng-yi-shu-new-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc8-7",
      "identity": {
        "name": "呂家愷",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "大型場館開發若涉及土地取得或搬遷，市府應儘早辦地方說明會",
          "detail": "建立住宅安置、工廠搬遷及補償配套",
          "source": "https://udn.com/news/story/7323/9643114"
        },
        {
          "topic": "economy",
          "title": "加速推動大柑園、防洪三期及機五周邊都市計畫",
          "detail": "結合捷運樹林線、台鐵及周邊交通建設帶動整體發展",
          "source": "https://udn.com/news/story/7323/9643114"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "本屆提案 229 件，以交通類（44 件）最多，其次為民政、教育、水利。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/lu-chia-kai-new-taipei"
        },
        {
          "topic": "transport",
          "text": "提案加速電動公車汰換並訂定時程；市府回覆 2025 年底約 400 輛上線，2030 年完成 1,676 輛汰換。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/lu-chia-kai-new-taipei"
        },
        {
          "topic": "transport",
          "text": "提案拆除浮洲橋汽機車分隔島改以標線分道；交通局 2025 年 10 月會勘後決議評估可行性。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/lu-chia-kai-new-taipei"
        },
        {
          "topic": "transport",
          "text": "提案在大柑園都市計畫內評估樹林交流道增設南下匝道；交通局表示待運輸需求研究完成後檢討。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/lu-chia-kai-new-taipei"
        },
        {
          "topic": "transport",
          "text": "整理三鶯線 12 站周邊機車停車與 YouBike 轉乘資訊並公開，持續向捷運、交通主管機關反映轉乘問題。",
          "source": "https://news.pchome.com.tw/politics/cnews/20260717/index-78425919935043227001.html"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "以下追蹤議會官網列出的本屆（2022 年）政見。",
          "promises": [
            {
              "topic": "transport",
              "title": "加速土城北二高交流道、三鶯及樹林捷運線進度",
              "status": "partial",
              "note": "三鶯線 2026 年 6 月 30 日起試營運；萬大線樹林段仍在施工；交流道進度未查到",
              "source": "https://zh.wikipedia.org/zh-tw/新北捷運三鶯線"
            },
            {
              "topic": "education",
              "title": "爭取代理教師比照全年支薪",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=621"
            },
            {
              "topic": "transport",
              "title": "酌減機車兩段式左轉，重要路口增設十字斑馬線",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=621"
            },
            {
              "topic": "safety",
              "title": "盤點監視系統並增設 LED 節能路燈",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=621"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "229 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/lu-chia-kai-new-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc8-8",
      "identity": {
        "name": "蘇泓欽",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "transport",
          "text": "本屆提案 78 件，以交通類（19 件）最多，其次為民政、社會、教育、工務。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/su-hung-chin-new-taipei"
        },
        {
          "topic": "transport",
          "text": "提案鶯歌區免費公車尖峰增班；區公所 2025 年 1 月起將其中一線由每日 25 班增為 30 班。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/su-hung-chin-new-taipei"
        },
        {
          "topic": "safety",
          "text": "提案在國小旁路口設置防恐升降地柱並於上下學時段禁止汽車進入；市府評估不予設置，改增設告示牌與減速設施。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/su-hung-chin-new-taipei"
        },
        {
          "topic": "transport",
          "text": "提案改善三鶯大橋兩端匯流衝突點，並在三鶯新生地興建多功能轉運中心；市府增設標誌、限速 40 公里，並辦理轉運用地變更。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/su-hung-chin-new-taipei"
        },
        {
          "topic": "governance",
          "text": "2026 年 8 月審查決算時提案將超收的交通罰鍰用於普發現金；經裁示送市府研議，市府表示目前未研議。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5555533"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2018–2026",
          "elected": true,
          "result": "",
          "note": "以下追蹤議會官網列出的本屆（2022 年）政見。",
          "promises": [
            {
              "topic": "transport",
              "title": "加速興建捷運三鶯線、樹林萬大線與鳳鳴臨時火車站",
              "status": "partial",
              "note": "三鶯線 2026 年 6 月 30 日起試營運；萬大線樹林段施工中；鳳鳴臨時站啟用情形未查證",
              "source": "https://zh.wikipedia.org/zh-tw/新北捷運三鶯線"
            },
            {
              "topic": "transport",
              "title": "打造鶯歌外環道分散市區車流",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=600"
            },
            {
              "topic": "transport",
              "title": "三峽長福及鶯歌公八公園停車場立體化",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=600"
            },
            {
              "topic": "environment",
              "title": "污染熱區設置空氣與水質感測器，加強稽查非法棄置",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=600"
            },
            {
              "topic": "welfare",
              "title": "持續捐出每票 30 元選舉補助款給社福團體",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=600"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "78 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/su-hung-chin-new-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc8-9",
      "identity": {
        "name": "黃永昌",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "大型場館周邊同步推動都市計畫及交通建設",
          "detail": "帶動周邊觀光、餐飲、旅宿及商業發展；提到未來若高鐵在當地增設車站可進一步帶動人流",
          "source": "https://udn.com/news/story/7323/9642985"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "2026 年 10 月涉嫌透過樁腳發放麵條等物品賄選，檢方聲請羈押，法院裁定 100 萬元交保、限制出境出海 8 個月（偵查中，尚未起訴）；本人聲明所發文宣品及競選小物均未超過 30 元，為宣傳服務成果，並非買票。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5600438"
        },
        {
          "topic": "transport",
          "text": "本屆提案 109 件，以交通類（24 件）最多，其次為民政、教育、環保、警政。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/huang-yung-chang-new-taipei"
        },
        {
          "topic": "transport",
          "text": "多次提案改善土城路口車道配置（偏心式左轉、紅燈續直行、左轉禁令檢討）；市府表示將納入捷運施工後的道路復舊設計檢討。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/huang-yung-chang-new-taipei"
        },
        {
          "topic": "transport",
          "text": "提案台 65 線增設高架聯絡道至土城、平面停車場立體化；市府評估前者不符交流道間距規定、後者財務回收年限過長，現階段不可行。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/huang-yung-chang-new-taipei"
        },
        {
          "topic": "governance",
          "text": "爭取國民運動中心、市立醫院、交流道、地下停車場與青年社會住宅等多項地方建設（本人說法）。",
          "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=530"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2010–2026",
          "elected": true,
          "result": "",
          "note": "以下追蹤議會官網列出的本屆（2022 年）「未來繼續努力」項目。",
          "promises": [
            {
              "topic": "economy",
              "title": "打造土城科學園區",
              "status": "unknown",
              "note": "查無可確認進度的來源",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=530"
            },
            {
              "topic": "welfare",
              "title": "設立鶯歌市立醫院",
              "status": "unknown",
              "note": "查無可確認進度的來源",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=530"
            },
            {
              "topic": "welfare",
              "title": "爭取 65 歲以上長者假牙補助",
              "status": "unknown",
              "note": "查無市府擴大到一般長者的公告",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=530"
            },
            {
              "topic": "environment",
              "title": "增設噪音科技執法",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=530"
            },
            {
              "topic": "governance",
              "title": "新闢土城司法園區與多功能行政園區",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=530"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "109 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/huang-yung-chang-new-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc8-10",
      "identity": {
        "name": "林金結",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "welfare",
          "text": "本屆提案 90 件，以原住民族事務類（15 件）最多，其次為教育、交通、民政、體育。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/lin-chin-chieh-new-taipei"
        },
        {
          "topic": "housing",
          "text": "提案保障原住民社宅長者拆遷戶續租安置，並要求提高原住民族微型保險意外保障額度。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/lin-chin-chieh-new-taipei"
        },
        {
          "topic": "education",
          "text": "提案以 AI 工具輔助族語學習、與各級學校合作開設原住民族相關課程，並追蹤族語學習家庭的後續使用情形。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/lin-chin-chieh-new-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2014–2026",
          "elected": true,
          "result": "",
          "note": "以下追蹤議會官網列出的本屆（2022 年）政見。",
          "promises": [
            {
              "topic": "welfare",
              "title": "推動一里一銀髮俱樂部、一里一托幼",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=587"
            },
            {
              "topic": "education",
              "title": "選票補助款全數捐贈國中小教育",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=587"
            },
            {
              "topic": "housing",
              "title": "利用公有土地或建案回饋設置托幼、托老中心與停車場",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=587"
            },
            {
              "topic": "environment",
              "title": "爭取鄰里寵物公園專區",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=587"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "90 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/lin-chin-chieh-new-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc8-11",
      "identity": {
        "name": "洪佳君",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "大型場館定案後，市府同步推動交通、都市計畫及城鄉規畫",
          "detail": "帶動都市更新及周邊產業發展",
          "source": "https://udn.com/news/story/7323/9642985"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "本屆提案 171 件，以交通類（21 件）最多，其次為教育、社會、民政、警政。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/hung-chia-chun-new-taipei"
        },
        {
          "topic": "transport",
          "text": "與其他議員共同提案 YouBike 前 30 分鐘免費；市府 2025 年 3 月起恢復 YouBike 2.0 前 30 分鐘免費。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/hung-chia-chun-new-taipei"
        },
        {
          "topic": "transport",
          "text": "提案規劃三鶯線轉運節點，完善 YouBike、公車、人行道與停車設施；市府已啟動車站接駁系統整合規劃。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/hung-chia-chun-new-taipei"
        },
        {
          "topic": "transport",
          "text": "提案擴大共享機車與汽車服務至土城、樹林、三峽；業者表示暫無擴區規劃。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/hung-chia-chun-new-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2006–2026",
          "elected": true,
          "result": "",
          "note": "以下追蹤議會官網列出的本屆（2022 年）政見。",
          "promises": [
            {
              "topic": "transport",
              "title": "加速推動萬大捷運線完成",
              "status": "in_progress",
              "note": "第一期 2026 年 8 月進度逾 85%，最快 2027 年底完工；第二期施工中",
              "source": "https://news.pts.org.tw/article/820556"
            },
            {
              "topic": "transport",
              "title": "辦理三鶯轉運站工程",
              "status": "in_progress",
              "note": "市府將轉運站南側停車場用地改為停車轉乘及公車調度用途，辦理土地使用變更",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/su-hung-chin-new-taipei"
            },
            {
              "topic": "transport",
              "title": "持續爭取樹鶯鐵路立體化",
              "status": "unknown",
              "note": "查無可確認進度的來源",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=532"
            },
            {
              "topic": "transport",
              "title": "活化閒置公有土地新建停車場",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=8&C=532"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "171 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/hung-chia-chun-new-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc8-12",
      "identity": {
        "name": "陳膺涵",
        "party": "愛民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    }
  ]
});

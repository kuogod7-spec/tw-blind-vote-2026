/*
 * 2026 新北市議員第 2 選區市議員（林口區、五股區、泰山區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-14。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表 115/09/07，
 * https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf ），7 人，應選 5 席；
 * 已與自由時報 2026-09-04 報導（https://news.ltn.com.tw/news/politics/breakingnews/5563564）及島民觀察室名單核對一致。
 * 審定名單 10/16 公告。新北市選委會原訂 10/23 的號次抽籤，因薔琵颱風當日停班，改於 2026-10-27 辦理（https://www.cna.com.tw/news/aloc/202610210317.aspx ；停班見 https://news.ltn.com.tw/news/life/breakingnews/5615160 ），抽籤後請補上 identity.number（2026-10-25 註）。
 * 黨籍已與中選會「115 年直轄市議員選舉候選人登記彙總表」（https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf ）推薦政黨欄逐一核對，全部一致（2026-10-25）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」取自議會官網議員介紹頁；提案數取自報導者觀測站。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 2026-10-14 第二輪補查：以新聞報導與候選人網站補充 2026 年政見；部分候選人（含多位現任者）仍查無具體的 2026 年政見，政見欄維持空白，待選舉公報發布後補齊。
 * 2026-10-14 第三輪補查：再以新聞報導補充部分候選人 2026 年政見；其餘仍查無者維持空白。
 * 已知缺漏（2026-10-19）：仍查無 2026 年政見：張昭隆、蔡佩呈。
 * 2026-10-19 第四輪補查：新增 0 則政見、2 則經歷（張昭隆補司法事件 1 則；蔡佩呈補 1 則）。
 */
window.ELECTION_DATA.races.push({
  "id": "new-taipei-council-02",
  "region": "新北市",
  "office": "第 2 選區市議員",
  "area": "林口區、五股區、泰山區",
  "seats": 5,
  "note": "議員政見整理自候選人公開資料、議會官網、選舉公報與新聞報導（截至 2026-10-14）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，各人資料多寡差異很大，這裡照實呈現。",
  "candidates": [
    {
      "id": "ntc2-1",
      "identity": {
        "name": "戴翎育",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "提高長者健保補助",
          "detail": "",
          "source": "https://udn.com/news/story/124652/9579458"
        },
        {
          "topic": "welfare",
          "title": "提升公共托育量能",
          "detail": "",
          "source": "https://udn.com/news/story/124652/9579458"
        },
        {
          "topic": "welfare",
          "title": "爭取在五股地區興建大型醫療院所",
          "detail": "",
          "source": "https://newtalk.tw/news/view/2026-06-21/1042519"
        }
      ],
      "record": [],
      "past": []
    },
    {
      "id": "ntc2-2",
      "identity": {
        "name": "張昭隆",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "2026 年 9 月遭檢方以違反選罷法交付賄賂罪起訴（尚未判決）：檢方指其於 2026 年 7 至 8 月間在選區內社區發展協會活動發放印有其姓名的蘿蔔糕，並以有獎徵答方式發放內裝 1 美元的紅包；公益侵占部分不起訴。偵查期間經法院裁定羈押禁見；本人抗告主張已據實陳述、無羈押必要，高等法院 2026 年 10 月 7 日撤銷發回，地方法院更裁後仍裁定羈押禁見。",
          "source": "https://www.cna.com.tw/news/asoc/202609180185.aspx"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "得票 4,629 票（1.71%），未當選",
          "note": "2022 年在另一選區（土城、樹林、三峽、鶯歌）參選；政見取自 2022 年選舉公報，得票數取自維基百科選舉結果列表。",
          "promises": [
            {
              "topic": "welfare",
              "title": "增加公共托育服務、增設公辦幼兒園，增加育兒津貼與坐月子津貼",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            },
            {
              "topic": "economy",
              "title": "以市府閒置空間設立青年創業辦公室，推動青年創業貸款零利率",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            },
            {
              "topic": "environment",
              "title": "設置身心障礙者也能使用的共融式生態公園",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            },
            {
              "topic": "housing",
              "title": "推動都市更新及老屋更新，爭取放寬老舊房屋附掛電梯或爬梯機的條件",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            },
            {
              "topic": "welfare",
              "title": "推動 65 歲以上長者免繳健保費，擴大敬老卡使用範圍",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            },
            {
              "topic": "welfare",
              "title": "復康巴士增加 APP 即時預約功能",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            },
            {
              "topic": "transport",
              "title": "增設充電站，提高購置或更換電動汽機車補助",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            },
            {
              "topic": "transport",
              "title": "提高公車預算及班次，推廣 YouBike 輕量站點",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/08-新北市選舉公報-第八選區.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc2-3",
      "identity": {
        "name": "蔡淑君",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "governance",
          "title": "連任後持續捐出選舉補助款作為學童急難救助",
          "detail": "歷次補助款捐入市府教育局學童急難救助專戶，累計 717 萬元（本人說法）",
          "source": "https://www.nownews.com/news/6871535"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案 56 件，以民政類（8 件）、原住民族類（8 件）較多，其次為交通、社會、教育。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/tsai-shu-chun-new-taipei"
        },
        {
          "topic": "governance",
          "text": "提案刪除里基層工作經費督導實施要點中限制經費須在市內使用的附帶決議條文；市府回覆將修正相關規定。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/tsai-shu-chun-new-taipei"
        },
        {
          "topic": "welfare",
          "text": "將 2018 年選舉補助款逾 114 萬元全數捐入教育局學生急難救助專戶；歷年捐款估計逾 600 萬元（本人說法）。",
          "source": "https://n.yam.com/Article/20220831841148"
        },
        {
          "topic": "education",
          "text": "2025 年 6 月質詢要求啟動林口第五所國小用地設校，打造 0 至 12 歲一條龍照顧學校；市府首長表示認同，請相關單位評估。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5081551"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "政見取自議會官網議員介紹頁，未確認是否等同選舉公報。",
          "promises": [
            {
              "topic": "welfare",
              "title": "將每張選票 30 元的選舉補助款捐出，幫助林口、五股、泰山需協助的孩童",
              "status": "unknown",
              "note": "查無 2022 年選後捐款資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            },
            {
              "topic": "housing",
              "title": "督促市府 116 年以前完成塭仔圳第 1、2 期重劃工程",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            },
            {
              "topic": "transport",
              "title": "督促加速審議五股泰山輕軌",
              "status": "in_progress",
              "note": "五泰輕軌環評已於 2026 年 8 月定稿備查；綜合規劃第五版於 2026-09-29 送交通部審查，尚未核定、未動工；核定後 7 年完工",
              "source": "https://www.dorts.ntpc.gov.tw/about/route/LvKR2LlG2JGp"
            },
            {
              "topic": "environment",
              "title": "支持貴子坑溪 26 公頃河川環境營造",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            },
            {
              "topic": "transport",
              "title": "爭取機場捷運票價納入 1280 元通勤月票方案",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            },
            {
              "topic": "transport",
              "title": "督促加速發包林口 A 交流道南出北入立體化工程",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            },
            {
              "topic": "transport",
              "title": "爭取擴大林口交流道周邊市地重劃範圍，作為增設第三交流道腹地與經費來源",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            },
            {
              "topic": "transport",
              "title": "督促 105 市道環狀高架與 A3 40 米計畫道路如期通車",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            },
            {
              "topic": "transport",
              "title": "爭取 108 市道宏昌街往長道坑口、南福路口往蘆竹路段拓寬",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            },
            {
              "topic": "welfare",
              "title": "持續推動到宅關懷長者計畫",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            },
            {
              "topic": "education",
              "title": "督促興建南勢國中、爭取文小五設校，並增設公托與幼兒園",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            },
            {
              "topic": "environment",
              "title": "推動犬貓健檢、植晶片、施打狂犬病疫苗並鼓勵認養",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            },
            {
              "topic": "environment",
              "title": "督促林口污水處理廠第二期工程如期完工",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            },
            {
              "topic": "transport",
              "title": "爭取設置公共自行車 2.0 租賃站",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=542"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "56 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/tsai-shu-chun-new-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc2-4",
      "identity": {
        "name": "鄭丞宏",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "推動五泰輕軌、林口輕軌及聯外交通改善",
          "detail": "包括國道 1 號銜接台 64 線往八里匝道、關渡新橋銜接台 64 線、泰山板橋線，以及捷運 A5、A5a 站轉乘",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5603049"
        },
        {
          "topic": "economy",
          "title": "將五股垃圾山轉型為 AI 智慧產業園區",
          "detail": "",
          "source": "https://www.storm.mg/article/11162327"
        },
        {
          "topic": "housing",
          "title": "推動五股、泰山舊市區都市更新",
          "detail": "含五股工商路、民義路與泰山明志路周邊，納入停車、人行安全與公共空間",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5603049"
        },
        {
          "topic": "housing",
          "title": "塭仔圳重劃區的主要幹道、公園、公托、親子與長照設施與住宅開發同步完成",
          "detail": "",
          "source": "https://www.storm.mg/article/11162327"
        },
        {
          "topic": "welfare",
          "title": "擴充五股、泰山、林口的公托、課後照顧及長照資源",
          "detail": "",
          "source": "https://tw.news.yahoo.com/五泰林整體發展藍圖-藍營新選將提交通-都更-托育長照列優先-060315607.html"
        },
        {
          "topic": "environment",
          "title": "活化成洲抽水站周邊，打造五股水岸生活廊道",
          "detail": "",
          "source": "https://www.storm.mg/article/11162327"
        },
        {
          "topic": "economy",
          "title": "結合林口醫學中心醫療資源與 AI 產業，打造科技廊帶",
          "detail": "",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5603049"
        },
        {
          "topic": "education",
          "title": "因應林口人口遷入擴增校舍、改善通學步道",
          "detail": "",
          "source": "https://www.storm.mg/article/11162327"
        }
      ],
      "record": [],
      "past": []
    },
    {
      "id": "ntc2-5",
      "identity": {
        "name": "陳明義",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "推動高速公路、快速道路到平面道路的整體系統化規劃",
          "detail": "針對台 65 線五股交流道北入匝道通車後的車流交織問題",
          "source": "https://money.udn.com/money/story/122328/9812173"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆提案 46 件，以民政類、教育類（各 7 件）較多，其次為交通、環保、衛生。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/chen-ming-yi-new-taipei"
        },
        {
          "topic": "welfare",
          "text": "提案建請市府提高生育補助；市府回覆預計 114 年度調高生育獎勵金。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/chen-ming-yi-new-taipei"
        },
        {
          "topic": "transport",
          "text": "推動林口交流道立體化並增設引道（本人說法）。",
          "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=541"
        },
        {
          "topic": "environment",
          "text": "阻擋在五股觀音山設置大型殯葬特區（本人說法）。",
          "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=541"
        },
        {
          "topic": "education",
          "text": "爭取五股國民運動中心與五股第一座公有零售市場（本人說法）。",
          "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=541"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "政見取自議會官網議員介紹頁，未確認是否等同選舉公報。",
          "promises": [
            {
              "topic": "transport",
              "title": "加速推動五股泰山輕軌早日動工",
              "status": "in_progress",
              "note": "五泰輕軌環評已於 2026 年 8 月定稿備查；綜合規劃第五版於 2026-09-29 送交通部審查，尚未核定、未動工；核定後 7 年完工",
              "source": "https://www.dorts.ntpc.gov.tw/about/route/LvKR2LlG2JGp"
            },
            {
              "topic": "transport",
              "title": "爭取國道一號五股出口增設匝道，直接銜接台 64 快速道路",
              "status": "done",
              "note": "五股交流道北出匝道 2025-10-27 通車，北出往台 64 匝道拓寬改善 2026-05-07 通車；個人角色無法查證",
              "source": "https://udn.com/news/story/124652/9579458"
            },
            {
              "topic": "transport",
              "title": "加速辦理五股洲子洋公園闢建地下停車場",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=541"
            },
            {
              "topic": "transport",
              "title": "爭取林口 41B 交流道改善工程",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=541"
            },
            {
              "topic": "transport",
              "title": "爭取國道一號增設泰山大科一路北出匝道",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=541"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "46 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/chen-ming-yi-new-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc2-6",
      "identity": {
        "name": "蔡佩呈",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "safety",
          "text": "2026 年 1 月邀集交通、水利單位與警方會勘五股新五路二段與成泰路一段 2 巷口，要求拆除造成視線死角的牆面；水利局表示該牆非防洪設施，評估拆除或降低。",
          "source": "https://n.yam.com/Article/20260129696286"
        },
        {
          "topic": "governance",
          "text": "擔任地方民意代表服務處主任，基層服務逾 10 年（本人說法）。",
          "source": "https://n.yam.com/Article/20260129696286"
        },
        {
          "topic": "transport",
          "text": "2026 年 9 月泰山橋配合道路拓寬改走臨時鋼橋前，建議市府於改道初期加強現場交通疏導，並於尖峰時段安排警力維持交通。",
          "source": "https://tw.news.yahoo.com/%E6%B3%B0%E5%B1%B1%E6%96%B0%E8%8E%8A%E9%80%9A%E5%8B%A4%E6%97%8F%E6%B3%A8%E6%84%8F-%E6%B3%B0%E5%B1%B1%E6%A9%8B9-30%E6%94%B9%E8%B5%B0%E9%8B%BC%E6%A9%8B-%E9%A9%9A%E8%A6%8B-90%E5%BA%A6%E5%A4%A7%E5%BD%8E%E9%81%93-091017697.html"
        }
      ],
      "past": []
    },
    {
      "id": "ntc2-7",
      "identity": {
        "name": "李宇翔",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "推動五泰輕軌機廠立體化",
          "detail": "2026 年 5 月向市府提出的十項地方建設建議之一",
          "source": "https://www.scooptw.com/cnews/478098/%E6%9D%8E%E5%AE%87%E7%BF%94%E6%AA%A2%E8%A6%96%E4%BA%94%E6%B3%B0%E6%9E%97%E5%BB%BA%E8%A8%AD%E6%8F%9010%E8%A6%81%E6%B1%82%E3%80%80%E6%96%B0%E5%8C%97%E5%B8%82%E5%BA%9C%E8%BF%B4%E9%9F%BF%E7%86%B1%E7%83%88/"
        },
        {
          "topic": "environment",
          "title": "活化五股堤防荒地",
          "detail": "2026 年 5 月向市府提出的十項地方建設建議之一",
          "source": "https://www.scooptw.com/cnews/478098/%E6%9D%8E%E5%AE%87%E7%BF%94%E6%AA%A2%E8%A6%96%E4%BA%94%E6%B3%B0%E6%9E%97%E5%BB%BA%E8%A8%AD%E6%8F%9010%E8%A6%81%E6%B1%82%E3%80%80%E6%96%B0%E5%8C%97%E5%B8%82%E5%BA%9C%E8%BF%B4%E9%9F%BF%E7%86%B1%E7%83%88/"
        },
        {
          "topic": "transport",
          "title": "興建泰山大型地下停車場",
          "detail": "2026 年 5 月向市府提出的十項地方建設建議之一",
          "source": "https://www.scooptw.com/cnews/478098/%E6%9D%8E%E5%AE%87%E7%BF%94%E6%AA%A2%E8%A6%96%E4%BA%94%E6%B3%B0%E6%9E%97%E5%BB%BA%E8%A8%AD%E6%8F%9010%E8%A6%81%E6%B1%82%E3%80%80%E6%96%B0%E5%8C%97%E5%B8%82%E5%BA%9C%E8%BF%B4%E9%9F%BF%E7%86%B1%E7%83%88/"
        },
        {
          "topic": "transport",
          "title": "爭取機場捷運 A5 泰山站設置空中廊道",
          "detail": "2026 年 5 月向市府提出的十項地方建設建議之一",
          "source": "https://www.scooptw.com/cnews/478098/%E6%9D%8E%E5%AE%87%E7%BF%94%E6%AA%A2%E8%A6%96%E4%BA%94%E6%B3%B0%E6%9E%97%E5%BB%BA%E8%A8%AD%E6%8F%9010%E8%A6%81%E6%B1%82%E3%80%80%E6%96%B0%E5%8C%97%E5%B8%82%E5%BA%9C%E8%BF%B4%E9%9F%BF%E7%86%B1%E7%83%88/"
        },
        {
          "topic": "environment",
          "title": "焚化爐收回市府自營",
          "detail": "2026 年 5 月向市府提出的十項地方建設建議之一",
          "source": "https://www.scooptw.com/cnews/478098/%E6%9D%8E%E5%AE%87%E7%BF%94%E6%AA%A2%E8%A6%96%E4%BA%94%E6%B3%B0%E6%9E%97%E5%BB%BA%E8%A8%AD%E6%8F%9010%E8%A6%81%E6%B1%82%E3%80%80%E6%96%B0%E5%8C%97%E5%B8%82%E5%BA%9C%E8%BF%B4%E9%9F%BF%E7%86%B1%E7%83%88/"
        },
        {
          "topic": "economy",
          "title": "推動林口展演中心",
          "detail": "2026 年 5 月向市府提出的十項地方建設建議之一",
          "source": "https://www.scooptw.com/cnews/478098/%E6%9D%8E%E5%AE%87%E7%BF%94%E6%AA%A2%E8%A6%96%E4%BA%94%E6%B3%B0%E6%9E%97%E5%BB%BA%E8%A8%AD%E6%8F%9010%E8%A6%81%E6%B1%82%E3%80%80%E6%96%B0%E5%8C%97%E5%B8%82%E5%BA%9C%E8%BF%B4%E9%9F%BF%E7%86%B1%E7%83%88/"
        },
        {
          "topic": "transport",
          "title": "開辦五股、泰山、林口雙層巴士",
          "detail": "2026 年 5 月向市府提出的十項地方建設建議之一",
          "source": "https://www.scooptw.com/cnews/478098/%E6%9D%8E%E5%AE%87%E7%BF%94%E6%AA%A2%E8%A6%96%E4%BA%94%E6%B3%B0%E6%9E%97%E5%BB%BA%E8%A8%AD%E6%8F%9010%E8%A6%81%E6%B1%82%E3%80%80%E6%96%B0%E5%8C%97%E5%B8%82%E5%BA%9C%E8%BF%B4%E9%9F%BF%E7%86%B1%E7%83%88/"
        },
        {
          "topic": "transport",
          "title": "規劃台 61 線沿海自行車道",
          "detail": "2026 年 5 月向市府提出的十項地方建設建議之一",
          "source": "https://www.scooptw.com/cnews/478098/%E6%9D%8E%E5%AE%87%E7%BF%94%E6%AA%A2%E8%A6%96%E4%BA%94%E6%B3%B0%E6%9E%97%E5%BB%BA%E8%A8%AD%E6%8F%9010%E8%A6%81%E6%B1%82%E3%80%80%E6%96%B0%E5%8C%97%E5%B8%82%E5%BA%9C%E8%BF%B4%E9%9F%BF%E7%86%B1%E7%83%88/"
        },
        {
          "topic": "transport",
          "title": "改善泰山明志路二段人行空間",
          "detail": "2026 年 5 月向市府提出的十項地方建設建議之一",
          "source": "https://www.scooptw.com/cnews/478098/%E6%9D%8E%E5%AE%87%E7%BF%94%E6%AA%A2%E8%A6%96%E4%BA%94%E6%B3%B0%E6%9E%97%E5%BB%BA%E8%A8%AD%E6%8F%9010%E8%A6%81%E6%B1%82%E3%80%80%E6%96%B0%E5%8C%97%E5%B8%82%E5%BA%9C%E8%BF%B4%E9%9F%BF%E7%86%B1%E7%83%88/"
        },
        {
          "topic": "transport",
          "title": "導入 AI 智慧紅綠燈",
          "detail": "2026 年 5 月向市府提出的十項地方建設建議之一",
          "source": "https://www.scooptw.com/cnews/478098/%E6%9D%8E%E5%AE%87%E7%BF%94%E6%AA%A2%E8%A6%96%E4%BA%94%E6%B3%B0%E6%9E%97%E5%BB%BA%E8%A8%AD%E6%8F%9010%E8%A6%81%E6%B1%82%E3%80%80%E6%96%B0%E5%8C%97%E5%B8%82%E5%BA%9C%E8%BF%B4%E9%9F%BF%E7%86%B1%E7%83%88/"
        },
        {
          "topic": "governance",
          "title": "要求市府預算與資源重新分配至林口、泰山、五股",
          "detail": "主張市府建設資源向鄰近行政區集中，三區應獲重新分配（2025 年 2 月受訪說法）",
          "source": "https://tw.news.yahoo.com/%E6%96%B0%E5%8C%97%E5%B0%8F%E9%A3%9B%E4%BF%A03-2-%E4%B8%8D%E6%BB%BF%E4%BA%94%E6%B3%B0%E6%9E%97%E5%A6%82%E9%82%8A%E9%99%B2%E5%9C%B0%E5%B8%B6-%E6%9D%8E%E5%AE%87%E7%BF%94%E7%9B%BC%E6%96%B0%E5%8C%97%E5%B8%82%E5%BA%9C%E8%B3%87%E6%BA%90%E9%87%8D%E6%96%B0%E5%88%86%E9%85%8D-063741572.html"
        },
        {
          "topic": "environment",
          "title": "要求市府加速五股、泰山汙水處理與排水設施建設",
          "detail": "改善大雨、颱風時的淹水問題（2025 年 2 月受訪說法）",
          "source": "https://tw.news.yahoo.com/%E6%96%B0%E5%8C%97%E5%B0%8F%E9%A3%9B%E4%BF%A03-2-%E4%B8%8D%E6%BB%BF%E4%BA%94%E6%B3%B0%E6%9E%97%E5%A6%82%E9%82%8A%E9%99%B2%E5%9C%B0%E5%B8%B6-%E6%9D%8E%E5%AE%87%E7%BF%94%E7%9B%BC%E6%96%B0%E5%8C%97%E5%B8%82%E5%BA%9C%E8%B3%87%E6%BA%90%E9%87%8D%E6%96%B0%E5%88%86%E9%85%8D-063741572.html"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "本屆提案 351 件，以交通類（73 件）最多，其次為衛生、社會、教育、工務。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/li-yu-hsiang-new-taipei"
        },
        {
          "topic": "transport",
          "text": "提案捷運 A9 林口站尖峰時段增加直達車停靠或加班；營運單位自 114 年 10 月起調整部分列車時刻。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/li-yu-hsiang-new-taipei"
        },
        {
          "topic": "transport",
          "text": "提案公車路線編號去除外框以利視障者辨識；市府回覆承諾一個月內改善。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/li-yu-hsiang-new-taipei"
        },
        {
          "topic": "transport",
          "text": "提案五股、泰山、林口幹道燈號同步調整；市府於 113 年 1 月完成調整。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/li-yu-hsiang-new-taipei"
        },
        {
          "topic": "governance",
          "text": "2024 年 11 月公開中央機關基層員工陳情，指控所屬分署主管職場霸凌；主管機關其後成立調查小組。",
          "source": "https://www.setn.com/News.aspx?NewsID=1562107"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "政見取自議會官網議員介紹頁，未確認是否等同選舉公報。",
          "promises": [
            {
              "topic": "welfare",
              "title": "爭取新北設置兒童醫院，完善早期療育與兒童重難症照護",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=610"
            },
            {
              "topic": "housing",
              "title": "支持公辦都更、簡化程序，加速老舊建物更新",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=610"
            },
            {
              "topic": "welfare",
              "title": "改建閒置空間設立長者日照中心與銀髮公寓",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=610"
            },
            {
              "topic": "transport",
              "title": "加速五股、林口交流道改善工程、105 市道拓寬及 103 市道規劃",
              "status": "partial",
              "note": "五股交流道北出匝道 2025-10-27 通車、北出往台 64 匝道拓寬 2026-05-07 通車；林口交流道與市道部分查無進度；個人角色無法查證",
              "source": "https://udn.com/news/story/124652/9579458"
            },
            {
              "topic": "transport",
              "title": "降低機場捷運票價，強化聯外公車班次與路線",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=610"
            },
            {
              "topic": "transport",
              "title": "規劃林口區內環狀輕軌，銜接機場捷運或五泰輕軌",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=610"
            },
            {
              "topic": "education",
              "title": "爭取增設幼幼班與更多準公共化幼兒園",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=610"
            },
            {
              "topic": "welfare",
              "title": "支持青年結婚入籍新北每戶補助 10 萬元",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=610"
            },
            {
              "topic": "economy",
              "title": "督促市府招商進駐泰山，並有效規劃林口工一工業區為高科技產業聚落",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=610"
            },
            {
              "topic": "environment",
              "title": "清除廢棄纜線、加速電纜地下化",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=610"
            },
            {
              "topic": "environment",
              "title": "以生態工法整治貴子坑溪、大窠溪",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=610"
            },
            {
              "topic": "environment",
              "title": "加速建置污水下水道，提升排水系統與抽水站功能",
              "status": "unknown",
              "note": "查無進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=2&C=610"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "351 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/li-yu-hsiang-new-taipei"
            }
          ]
        }
      ]
    }
  ]
});

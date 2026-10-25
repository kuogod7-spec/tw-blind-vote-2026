/*
 * 2026 臺北市議員第 3 選區市議員（松山區、信義區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-14。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07；13 人，應選 9 席）。
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 * 應選席次依三立新聞網 2026-09-04 登記報導（https://www.setn.com/news/1901722），未另行取得選委會選舉區公告原文。
 * 審定名單 10/16 公告、號次原訂 10/23 抽籤，因颱風薔琵臺北市 10/23 停止上班，依北市選委會公告改於 10/27 抽籤（https://www.cna.com.tw/news/aloc/202610210175.aspx、https://www.cna.com.tw/news/aloc/202610220375.aspx），抽籤後請補上 identity.number（2026-10-25 註）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」取自 2022 年選舉公報；提案數取自報導者觀測站（臺北市議會提案多為多人共同具名，
 *   「領銜提案」依市府回覆中「○○議員等議員提案」的首位提案人判斷）。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 已知缺漏：第二輪補查（2026-10-14）後，郭凡、左曉明、林柏勛、許原榮仍查無公開政見；李明璇僅查得 1 則；
 *   2022 年同選區有同名參選人林柏勛，但未找到來源確認為同一人，依規則不收其 2022 年參選紀錄。
 * 第三輪補查（2026-10-14）：郭凡、許原榮補上報導中的經歷，仍無具體政見；左曉明、林柏勛仍查無可收錄資料。
 * 2026-10-19 第四輪補查：新增 8 則政見、4 則經歷（政見附加於陣列尾端；現任者 2026 年議會質詢中的具體要求也收為政見）。
 *   已知缺漏（仍查無 2026 年政見）：洪健益、左曉明、許淑華、林柏勛、許原榮。
 *   林柏勛仍未找到來源確認與 2022 年同名參選人為同一人。
 */
window.ELECTION_DATA.races.push({
  "id": "taipei-council-03",
  "region": "臺北市",
  "office": "第 3 選區市議員",
  "area": "松山區、信義區",
  "seats": 9,
  "note": "議員政見整理自候選人公開資料、議會資料、選舉公報與新聞報導（截至 2026-10-14）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，新人候選人多數查無公開政見，各人資料多寡差異很大，這裡照實呈現。",
  "candidates": [
    {
      "id": "tpc3-1",
      "identity": {
        "name": "鄧樂強",
        "party": "台灣基進",
        "number": null
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "爭取社會住宅與租金補助",
          "detail": "方向性主張，未提出數量或金額",
          "source": "https://newtalk.tw/news/view/2026-03-10/1023514"
        },
        {
          "topic": "economy",
          "title": "推動流行音樂與藝文產業發展",
          "detail": "方向性主張，未提出具體做法",
          "source": "https://newtalk.tw/news/view/2026-03-10/1023514"
        },
        {
          "topic": "safety",
          "title": "從國家安全角度檢視松山機場遷建與大巨蛋營運",
          "detail": "方向性主張，未提出具體做法",
          "source": "https://newtalk.tw/news/view/2026-03-10/1023514"
        }
      ],
      "record": [
        {
          "topic": "safety",
          "text": "曾任軍職近 30 年後退役。",
          "source": "https://newtalk.tw/news/view/2026-03-10/1023514"
        }
      ]
    },
    {
      "id": "tpc3-2",
      "identity": {
        "name": "詹為元",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "市立運動中心泳池提供孕婦友善水道",
          "detail": "2026 年 10 月提出：希望全市 12 座運動中心都能提供，不要求全天固定保留一條水道，可依泳池規模、人數與尖離峰時段彈性安排，孕婦提出需求時由現場人員協助。市府表示正評估納入服務規範。",
          "source": "https://www.ettoday.net/news/20261013/3254096.htm"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 352 件，以民政類（88 件）最多，其次為教育、工務；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chan-wei-yuan-taipei"
        },
        {
          "topic": "transport",
          "text": "領銜提案要求市府參考國外經驗以獎勵民眾協助公共自行車調度，並重新訂定各站缺車判斷指標。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34420"
        },
        {
          "topic": "transport",
          "text": "領銜提案建請市府委託交通顧問，以票證資料模擬車流，評估臺北車站設置公車轉運站的可行性；市府回覆規劃 2025 年第 1 季招標研究。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34583"
        },
        {
          "topic": "environment",
          "text": "領銜提案建請市府增設貼近社區的狗活動區。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34452"
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
              "title": "由都更中心擔任民間都更案的第三方監察與仲裁角色，加速都更",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "提高公共托嬰比例，參考德國以 35% 覆蓋率為目標",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "safety",
              "title": "市府優先試辦動保警察並給予調查權",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "在大型社區公園劃設寵物活動專區（如敦北公園）",
              "status": "in_progress",
              "note": "市府 2024 年回覆已會勘敦北公園並評估適合設置狗活動區，預定辦理鄰里說明會；個人角色無法查證",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-34452"
            },
            {
              "topic": "transport",
              "title": "加速新舊公共自行車系統整合",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "352 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chan-wei-yuan-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc3-3",
      "identity": {
        "name": "張文潔",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "捷運聯合開發住宅出售前須提出完整財務與公共住宅影響評估",
          "detail": "2026 年 5 月市政總質詢提出：處分聯開宅案送議會前，應提出多情境財務比較、估價報告、租金收益折現、TIF 假設、現金流分析及公共住宅影響評估；並由捷運、都發、財政、主計單位共同檢視涉及住宅政策的市有資產。",
          "source": "https://www.tcpttw.com/local/2026/05/27/276655/"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 319 件，以民政類（77 件）最多，其次為教育、工務；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chang-wen-chieh-taipei"
        },
        {
          "topic": "welfare",
          "text": "領銜提案建請衛生局隨孕婦健康手冊發送待產包給設籍本市的孕婦。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-33960"
        },
        {
          "topic": "welfare",
          "text": "領銜提案要求生育獎勵金新制追溯適用至 2022 年 12 月 25 日起出生者；市府其後修正辦法採納。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-33841"
        },
        {
          "topic": "safety",
          "text": "領銜提案建請公園處投保天災責任保險附加條款，保障路樹倒塌造成的車輛損失。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34675"
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
              "title": "公托全免費、私托全額補助",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "加速捷運民生汐止線與環狀線東環段，2026 年動工",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "推動捷運離峰優惠票價",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "economy",
              "title": "成立青年局",
              "status": "done",
              "note": "市府已設青年局（2024 年起以青年局名義回覆議會提案）；個人角色無法查證",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-34476"
            },
            {
              "topic": "education",
              "title": "成立客語實驗小學",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "成立都更專責小組，各區設推動協調小組",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "推動松山監理所遷移、南松山市場改建",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "319 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chang-wen-chieh-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc3-4",
      "identity": {
        "name": "郭凡",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "以市府補助推動老屋加裝外掛電梯",
          "detail": "專訪中提出，以市府補助整合資源，改善老舊住宅的居住便利性；未說明補助額度與期程。",
          "source": "https://maygoddejia.com.tw/%E5%AA%92%E8%A7%92%EF%BC%8F%E9%83%AD%E5%87%A1%E7%9A%84%E4%B8%8D%E5%B9%B3%E5%87%A1%E3%80%80%E3%80%8C%E5%9B%9B%E5%80%8B%E5%87%A1%E4%BA%8B%E3%80%8D%E6%8B%9A%E5%8C%97%E5%B8%82%E8%AD%B0%E6%9C%83/"
        },
        {
          "topic": "environment",
          "title": "規劃寵物公園並訂定寵物友善規範",
          "detail": "專訪中提出，未說明地點與規模。",
          "source": "https://maygoddejia.com.tw/%E5%AA%92%E8%A7%92%EF%BC%8F%E9%83%AD%E5%87%A1%E7%9A%84%E4%B8%8D%E5%B9%B3%E5%87%A1%E3%80%80%E3%80%8C%E5%9B%9B%E5%80%8B%E5%87%A1%E4%BA%8B%E3%80%8D%E6%8B%9A%E5%8C%97%E5%B8%82%E8%AD%B0%E6%9C%83/"
        },
        {
          "topic": "environment",
          "title": "借鏡國外經驗推動城市綠化植樹，再延伸至綠建築",
          "detail": "專訪中提出的方向，未說明具體做法、數量與期程。",
          "source": "https://maygoddejia.com.tw/%E5%AA%92%E8%A7%92%EF%BC%8F%E9%83%AD%E5%87%A1%E7%9A%84%E4%B8%8D%E5%B9%B3%E5%87%A1%E3%80%80%E3%80%8C%E5%9B%9B%E5%80%8B%E5%87%A1%E4%BA%8B%E3%80%8D%E6%8B%9A%E5%8C%97%E5%B8%82%E8%AD%B0%E6%9C%83/"
        },
        {
          "topic": "governance",
          "title": "督促市府運用姊妹市關係舉辦論壇與交流",
          "detail": "專訪中提出，認為市府對數十個姊妹市的運用仍有很大空間；未說明具體活動規劃。",
          "source": "https://maygoddejia.com.tw/%E5%AA%92%E8%A7%92%EF%BC%8F%E9%83%AD%E5%87%A1%E7%9A%84%E4%B8%8D%E5%B9%B3%E5%87%A1%E3%80%80%E3%80%8C%E5%9B%9B%E5%80%8B%E5%87%A1%E4%BA%8B%E3%80%8D%E6%8B%9A%E5%8C%97%E5%B8%82%E8%AD%B0%E6%9C%83/"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "曾任中央民意代表辦公室助理，負責外交事務。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5355250"
        }
      ]
    },
    {
      "id": "tpc3-5",
      "identity": {
        "name": "李明璇",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "safety",
          "title": "建議中央建立全國性食安通報平台，並建立第三方驗證、產品追溯與預警制度",
          "detail": "強化中央與地方資訊同步，避免仰賴業者自主通報才發現問題；另建議主管機關明訂含問題油品之加工製品標準（2026-07 於個人社群提出）",
          "source": "https://udn.com/news/story/124940/9614828"
        }
      ],
      "record": [],
      "past": [
        {
          "role": "參選中央民意代表",
          "period": "2024",
          "elected": false,
          "result": "得 82,602 票（得票率 39.40%），未當選",
          "note": "得票數取自維基百科整理之中選會結果；當時政見未查得。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "tpc3-6",
      "identity": {
        "name": "秦慧珠",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "governance",
          "title": "就松山機場遷移改建產業園區案發起地方性公民投票",
          "detail": "2026 年 10 月於個人社群表示願擔任領銜提案人，題目為是否同意市府首長提出的松山機場遷移、轉為 AI 園區政見；希望與 2028 年 1 月全國選舉同日投票，並比照全國性公投辦理多場說明或辯論。尚待提案與連署程序。",
          "source": "https://news.nextapple.com/politics/20261019/F233335BB40A62910CD045A00691C6BB"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 263 件，以教育類（65 件）最多，其次為民政、警衛；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chin-hui-chu-taipei"
        },
        {
          "topic": "welfare",
          "text": "領銜提案要求生育獎勵金加倍新制追溯適用；市府於 2023 年 7 月修正辦法，2022 年 12 月 25 日起出生者均適用新制並補發差額。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-33825"
        },
        {
          "topic": "welfare",
          "text": "領銜提案建請將衛生局食品藥品稽查單位升格為處級機關，增加人力與預算。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34460"
        },
        {
          "topic": "welfare",
          "text": "領銜提案建請老人免費健康檢查納入視覺篩檢。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34448"
        },
        {
          "topic": "transport",
          "text": "領銜提案建請放寬敬老卡搭乘臺鐵規定，擴及北北桃三市任一車站。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34191"
        },
        {
          "topic": "education",
          "text": "2025 年 10 月提案建請教育局研擬松山區民族國小校舍改建計畫，並評估增設地下停車場、預先編列預算。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chin-hui-chu-taipei"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "1989–1998、2010–2026",
          "elected": true,
          "result": "",
          "note": "2022 年選舉公報政見為監督市府等原則性陳述，未列具體事項，因此沒有可追蹤的項目。",
          "promises": [],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "263 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chin-hui-chu-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc3-7",
      "identity": {
        "name": "洪健益",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 261 件，以工務類（65 件）最多，其次為民政、教育；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/hung-chien-yi-taipei"
        },
        {
          "topic": "housing",
          "text": "領銜提案建請市府設立社會住宅專責管理機關，提供單一窗口服務。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34193"
        },
        {
          "topic": "housing",
          "text": "領銜提案要求檢討都市計畫中連棟建築物不得個別拆除重建的限制，提出檢討方案。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34005"
        },
        {
          "topic": "housing",
          "text": "領銜提案建請規劃改建松山區民族東路 605 至 769 號地下室滲水及民族大排老舊結構。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34192"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2006–2026",
          "elected": true,
          "result": "",
          "note": "",
          "promises": [
            {
              "topic": "safety",
              "title": "持續推動學童警鳴器",
              "status": "unknown",
              "note": "政見未列具體指標，無法判斷",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "完善大眾運輸機制、友善用路環境",
              "status": "unknown",
              "note": "政見未列具體指標，無法判斷",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "economy",
              "title": "活絡市場、夜市與商圈，帶動觀光",
              "status": "unknown",
              "note": "政見未列具體指標，無法判斷",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "推動都市更新",
              "status": "unknown",
              "note": "政見未列具體指標，無法判斷",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "建構長者社福制度",
              "status": "unknown",
              "note": "政見未列具體指標，無法判斷",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "261 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/hung-chien-yi-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc3-8",
      "identity": {
        "name": "戴錫欽",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "推動信義路五段 150 巷周邊電箱地下化、道路鋪面更新與綠色標線型人行道",
          "detail": "2026 年 9 月表示，該巷機車停車場完工後將接續推動周邊改善；未說明期程與經費。",
          "source": "https://tw.news.yahoo.com/%E5%81%9C%E8%BB%8A%E4%B8%8D%E5%86%8D-%E4%BD%8D%E9%9B%A3%E6%B1%82-%E6%88%B4%E9%8C%AB%E6%AC%BD%E5%AE%A3%E5%B8%83-1%E5%9C%B0%E6%96%B9%E5%BB%BA%E8%A8%AD-%E6%AD%A3%E5%BC%8F%E5%AE%8C%E5%B7%A5-001715117.html"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 448 件，以民政類（110 件）最多，其次為教育、工務；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/tai-hsi-chin-taipei"
        },
        {
          "topic": "governance",
          "text": "現任議會領導職務；擔任議會領導職務者依慣例很少個人領銜提案，提案數不宜跨人比較。",
          "source": "https://udn.com/news/story/124652/9640058"
        },
        {
          "topic": "transport",
          "text": "推動公共自行車系統設置並升級為 2.0 版（本人說法）。",
          "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
        },
        {
          "topic": "environment",
          "text": "爭取設置永春陂濕地公園，兼具生態、教育與滯洪功能（本人說法）。",
          "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
        },
        {
          "topic": "environment",
          "text": "爭取在信義計畫區設置第一座狗活動區（本人說法）。",
          "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
        },
        {
          "topic": "housing",
          "text": "推動松山區延壽國宅都市更新，並協助基隆路預拌混凝土廠遷址（本人說法）。",
          "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
        },
        {
          "topic": "transport",
          "text": "與當地里長會勘追蹤兩年多，爭取信義路五段 150 巷免費機車停車場於 2026 年 9 月完工（本人說法）。",
          "source": "https://tw.news.yahoo.com/%E5%81%9C%E8%BB%8A%E4%B8%8D%E5%86%8D-%E4%BD%8D%E9%9B%A3%E6%B1%82-%E6%88%B4%E9%8C%AB%E6%AC%BD%E5%AE%A3%E5%B8%83-1%E5%9C%B0%E6%96%B9%E5%BB%BA%E8%A8%AD-%E6%AD%A3%E5%BC%8F%E5%AE%8C%E5%B7%A5-001715117.html"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2002–2026",
          "elected": true,
          "result": "",
          "note": "",
          "promises": [
            {
              "topic": "transport",
              "title": "將公共自行車優化為 3.0 版",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "監督都更：提高容積獎勵、提升效率、擴大公辦都更",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "擴大生育及托育補助",
              "status": "done",
              "note": "生育獎勵金於 2023 年 4 月起改採加倍新制；個人角色無法查證",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-33825"
            },
            {
              "topic": "welfare",
              "title": "增加老人照護相關經費",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "governance",
              "title": "要求市府提出減少人口流失的具體方案",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "448 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/tai-hsi-chin-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc3-9",
      "identity": {
        "name": "許甫",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "推動居住正義",
          "detail": "方向性主張，未提出具體做法",
          "source": "https://www.nownews.com/news/6862398"
        },
        {
          "topic": "transport",
          "title": "推動行人路權",
          "detail": "方向性主張，未提出具體做法",
          "source": "https://www.nownews.com/news/6862398"
        },
        {
          "topic": "environment",
          "title": "推動環境保護",
          "detail": "方向性主張，未提出具體做法",
          "source": "https://www.nownews.com/news/6862398"
        },
        {
          "topic": "education",
          "title": "推動智慧教育",
          "detail": "方向性主張，未提出具體做法",
          "source": "https://www.nownews.com/news/6862398"
        }
      ],
      "record": []
    },
    {
      "id": "tpc3-10",
      "identity": {
        "name": "左曉明",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": []
    },
    {
      "id": "tpc3-11",
      "identity": {
        "name": "許淑華",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 255 件，以民政類（68 件）最多，其次為工務、教育；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/hsu-shu-hua-taipei"
        },
        {
          "topic": "housing",
          "text": "領銜提案要求市府對容積獎勵涉違失調查中的京華城建案，確認公安無虞前做出停工處分。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34622"
        },
        {
          "topic": "governance",
          "text": "領銜提案要求市府針對大巨蛋營運問題成立營運績效評估委員會。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34623"
        },
        {
          "topic": "environment",
          "text": "爭取設立市府動物保護專戶，擴大動物救援（本人說法）。",
          "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
        },
        {
          "topic": "housing",
          "text": "爭取健康、廣慈、三興、六張犁等公宅規劃及興建預算逾 315 億元（本人說法）。",
          "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
        },
        {
          "topic": "governance",
          "text": "2026 年 5 月市政總質詢追問何時發文撤銷京華城改建案 20% 違法容積獎勵並要求公開調查小組會議紀錄；市府首長答詢表示將撤銷該 20% 容積獎勵。",
          "source": "https://udn.com/news/story/7323/9518902"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2006–2026",
          "elected": true,
          "result": "",
          "note": "",
          "promises": [
            {
              "topic": "welfare",
              "title": "要求增設托嬰中心並增加 0 至 2 歲多元補助",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "擴大不孕症補助，放寬年齡並增加取卵次數",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "要求市府恢復發放重陽敬老禮金",
              "status": "done",
              "note": "2025 年議會提案資料顯示 65 至 84 歲長者重陽敬老禮金現行每人 1,500 元；個人角色無法查證",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-35063"
            },
            {
              "topic": "welfare",
              "title": "推動 65 歲以上長者假牙補助",
              "status": "not_done",
              "note": "市府 2023 年回覆：考量排擠其他預算，不開放一般戶假牙補助，改以預防保健為重心",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-33801"
            },
            {
              "topic": "transport",
              "title": "推動捷運民生汐止線與環狀線東環段",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "safety",
              "title": "推動虐待動物累犯強制感化立法",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            },
            {
              "topic": "economy",
              "title": "推動青年創業貸款零利率並提供閒置空間作青創辦公室",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第03選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "255 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/hsu-shu-hua-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc3-12",
      "identity": {
        "name": "林柏勛",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": []
    },
    {
      "id": "tpc3-13",
      "identity": {
        "name": "許原榮",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "擔任民意代表幕僚約 23 年，經歷地方議會與立法院，參與捷運延伸路線等交通建設事務（本人說法）。",
          "source": "https://udn.com/news/story/124652/9367767"
        },
        {
          "topic": "economy",
          "text": "2026 年 5 月於信義區黎忠里民活動中心舉辦社區報稅服務，由會計師協助所得查詢與申報。",
          "source": "https://udn.com/news/story/7323/9521535"
        }
      ]
    }
  ]
});

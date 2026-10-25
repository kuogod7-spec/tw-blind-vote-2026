/*
 * 2026 臺北市議員第 4 選區市議員（中山區、大同區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-14。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07；14 人，應選 8 席）。
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 * 應選席次依三立新聞網 2026-09-04 登記報導（https://www.setn.com/news/1901722），未另行取得選委會選舉區公告原文。
 * 黨籍依中選會登記之推薦政黨（政黨名稱照登記表；「無」寫為無黨籍）。
 * 審定名單 10/16 公告、號次原訂 10/23 抽籤，因颱風薔琵臺北市 10/23 停止上班，依北市選委會公告改於 10/27 抽籤（https://www.cna.com.tw/news/aloc/202610210175.aspx、https://www.cna.com.tw/news/aloc/202610220375.aspx），抽籤後請補上 identity.number（2026-10-25 註）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」取自 2022 年選舉公報；提案數取自報導者觀測站（臺北市議會提案多為多人共同具名，
 *   「領銜提案」依市府回覆中「○○議員等議員提案」的首位提案人判斷）。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 已知缺漏：第二輪補查（2026-10-14）後，朱政騏、熊羿、李易儒、林子揚、黃麗香仍查無 2026 年公開政見；
 *   李易儒補上 2022 年里長選舉公報政見，林子揚補上自述經歷。賴俊翰的政見取自 2026-01 媒體專訪（黨內初選前）。
 * 第三輪補查（2026-10-14）：林子揚補上 1 則概括性政見，林珍羽補上 1 則問政紀錄；朱政騏、熊羿、黃麗香仍查無可收錄資料
 *   （2018 年同選區有同名參選人黃麗香，未能確認為同一人，不收）。
 * 已知缺漏（2026-10-19 更新）：朱政騏、熊羿、李易儒、柳采葳、林亮君、葉林傳、黃麗香、林珍羽、陳怡君仍查無 2026 年具體政見
 *   （現任者 2026 年報導多為對他黨候選人的批評或事件回應；報導者觀測站提案資料只到 2025 年，未當作 2026 年政見）。
 * 2026-10-19 第四輪補查：新增 3 則政見、6 則經歷（含朱政騏、葉林傳、陳怡君的司法案件，均尚未判決確定）。
 */
window.ELECTION_DATA.races.push({
  "id": "taipei-council-04",
  "region": "臺北市",
  "office": "第 4 選區市議員",
  "area": "中山區、大同區",
  "seats": 8,
  "note": "議員政見整理自候選人公開資料、議會資料、選舉公報與新聞報導（截至 2026-10-14）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，新人候選人多數查無公開政見，各人資料多寡差異很大，這裡照實呈現。",
  "candidates": [
    {
      "id": "tpc4-1",
      "identity": {
        "name": "朱政騏",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "2026 年遭地檢署依違反國家安全法等罪嫌起訴並求刑 5 年以上，檢方指其翻拍列為「密」級的立法院文件傳給中國籍人士並收受報酬；尚未判決。本人否認從事共諜行為，表示將在法庭上捍衛清白。",
          "source": "https://news.ltn.com.tw/news/Taipei/breakingnews/5461701"
        }
      ]
    },
    {
      "id": "tpc4-2",
      "identity": {
        "name": "顏若芳",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "要求市府與地方商圈合作，依各商圈需求提出輔導及振興方案",
          "detail": "2026-07 議會質詢提出；引用市府數據指中山區商圈營業額較前一期減少 214 億元（跌幅 8.4%）、大同區減少 15.2 億元（跌幅 5.5%）",
          "source": "https://n.yam.com/Article/20260720481356"
        },
        {
          "topic": "economy",
          "title": "及早規劃花博園區改建期間的替代商圈與配套措施",
          "detail": "2026-07 議會質詢提出，目的是降低改建對周邊商圈的衝擊",
          "source": "https://n.yam.com/Article/20260720481356"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 313 件，以民政類（78 件）最多，其次為教育、工務；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/yen-jo-fang-taipei"
        },
        {
          "topic": "welfare",
          "text": "領銜提案建請生育獎勵金對早產兒改以預產期作為出生日認定依據。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34715"
        },
        {
          "topic": "housing",
          "text": "領銜提案建請修訂市府辦理都市更新實施辦法，增列代拆否決權以防範不良建商。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34402"
        },
        {
          "topic": "environment",
          "text": "領銜提案建請於大稻埕河濱公園增設極限運動場及溜冰場。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34401"
        },
        {
          "topic": "economy",
          "text": "領銜提案建請檢討赤峰街商圈土地使用分區，促進文創聚落發展。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34444"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2014–2018、2022–2026",
          "elected": true,
          "result": "",
          "note": "2018 年參選未當選，2022 年再度當選。",
          "promises": [
            {
              "topic": "environment",
              "title": "增設樓梯、電梯方便民眾出入河濱公園",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "河濱公園舉辦假日市集、獨木舟與划船課程",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "爭取高齡產婦產檢納入市府補助",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "爭取月嫂補助，協助產後育兒",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "補助計程車安全座椅，提高嬰兒搭車安全",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "以大數據分析與動態號誌系統紓解塞車",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "education",
              "title": "重現中山橋、活化舊兒童育樂中心",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "313 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/yen-jo-fang-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc4-3",
      "identity": {
        "name": "賴俊翰",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "在大直橋至臺北橋河段舉辦水上摩托車計時賽",
          "detail": "讓水岸成為居民日常使用的場域（2026-01 媒體專訪）",
          "source": "https://n.yam.com/Article/20260120658215"
        },
        {
          "topic": "education",
          "title": "設置划船訓練基地，簡化借船申請流程並提供器材補助",
          "detail": "推廣水上運動",
          "source": "https://n.yam.com/Article/20260120658215"
        },
        {
          "topic": "economy",
          "title": "規劃河岸光影步道，並在大稻埕碼頭周邊打造連續景觀與市集",
          "detail": "提升夜間水岸景觀",
          "source": "https://n.yam.com/Article/20260120658215"
        }
      ],
      "record": []
    },
    {
      "id": "tpc4-4",
      "identity": {
        "name": "熊羿",
        "party": "勞動黨",
        "number": null
      },
      "platforms": [],
      "record": []
    },
    {
      "id": "tpc4-5",
      "identity": {
        "name": "李易儒",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": [
        {
          "role": "基層民選公職（里長）",
          "period": "2022–2026",
          "elected": true,
          "result": "2022 年參選里長；2026 年報導稱其為現任里長",
          "note": "以下為 2022 年里長選舉公報政見（共 10 則，列出 6 則），執行情形未查得。",
          "promises": [
            {
              "topic": "safety",
              "title": "成立守望相助隊定時巡邏",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E5%A4%A7%E5%AE%89%E5%8D%80/大安區車層里里長.pdf"
            },
            {
              "topic": "environment",
              "title": "定期消毒、清理水溝，成立環保志工隊並推動巷弄綠化",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E5%A4%A7%E5%AE%89%E5%8D%80/大安區車層里里長.pdf"
            },
            {
              "topic": "safety",
              "title": "增設里民住宅火災警報器",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E5%A4%A7%E5%AE%89%E5%8D%80/大安區車層里里長.pdf"
            },
            {
              "topic": "welfare",
              "title": "辦理社區孩童課後輔導與才藝體驗",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E5%A4%A7%E5%AE%89%E5%8D%80/大安區車層里里長.pdf"
            },
            {
              "topic": "welfare",
              "title": "為弱勢長者辦理供餐與休閒活動",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E5%A4%A7%E5%AE%89%E5%8D%80/大安區車層里里長.pdf"
            },
            {
              "topic": "welfare",
              "title": "建立義工關懷網，關懷銀髮族及弱勢族群",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02%E8%87%BA%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E5%A4%A7%E5%AE%89%E5%8D%80/大安區車層里里長.pdf"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "tpc4-6",
      "identity": {
        "name": "陳炳甫",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "environment",
          "title": "在市府新建的環保火化設施中規劃一座寵物專用火化爐",
          "detail": "2026-04 提出；並建議透過北北基桃跨縣市合作平台研議合法寵物殯葬專區。市府回應將研議可行性",
          "source": "https://www.cna.com.tw/news/aloc/202604180041.aspx"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 217 件，以民政類（57 件）最多，其次為教育、工務；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-ping-fu-taipei"
        },
        {
          "topic": "housing",
          "text": "領銜提案建請市府增訂防災都更容積獎勵。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-33917"
        },
        {
          "topic": "environment",
          "text": "領銜提案建請市府向中央爭取修法，訂定清潔人員首都加給。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34693"
        },
        {
          "topic": "economy",
          "text": "領銜提案建請於大稻埕碼頭增設街頭藝人表演專區。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34379"
        },
        {
          "topic": "education",
          "text": "領銜提案建請學校接受民間捐助興建校舍及場館，並給予捐助方優先租用權利。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34644"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2014–2026",
          "elected": true,
          "result": "",
          "note": "",
          "promises": [
            {
              "topic": "transport",
              "title": "校園改建時增設地下停車場",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "公有停車場以車牌辨識驗證資格，讓在地里民享停車優惠",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "推動市立聯合醫院婦幼院區升格兒童醫院",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "新設適合服務業家長時段的公托",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "增設狗活動區並推動寵物友善交通",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "督促市府加速捷運民生汐止線",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "217 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-ping-fu-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc4-7",
      "identity": {
        "name": "林子揚",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "建立全齡支持體系",
          "detail": "照顧長輩、增加年輕世代機會，減輕青壯年照顧與經濟壓力；未提出具體做法",
          "source": "https://cnews.com.tw/262170831a02/"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "曾任中央政府行政機關幕僚與駐外人員，參與對東南亞、南亞的區域交流工作（本人說法）。",
          "source": "https://newtalk.tw/news/view/2026-02-09/1019406"
        }
      ]
    },
    {
      "id": "tpc4-8",
      "identity": {
        "name": "柳采葳",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 167 件，以民政類（42 件）最多，其次為工務、警衛；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/liu-tsai-wei-taipei"
        },
        {
          "topic": "housing",
          "text": "領銜提案建請市府動用第二預備金，補助地震後磁磚剝落的外牆修繕、安全診斷及檢查費用。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34389"
        },
        {
          "topic": "housing",
          "text": "領銜提案建請市府規範建築工程施工期間監測資訊定期公開，並送里辦公室存查。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34133"
        },
        {
          "topic": "welfare",
          "text": "領銜提案建請評估將 HPV 疫苗施打年齡提前至國小六年級。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-33948"
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
              "title": "監督捷運民生汐止線儘速執行",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "定期與不定期檢驗市售食品",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "safety",
              "title": "建置社區及校園智慧型巡檢系統",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "提高租金補助、增加社會住宅、加速老舊住宅都更",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "提高 0 至 5 歲育兒津貼並整合幼托人力",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "增設中山、大同共融公園",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "167 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/liu-tsai-wei-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc4-9",
      "identity": {
        "name": "林亮君",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 193 件，以教育類（50 件）最多，其次為工務、民政；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-liang-chun-taipei"
        },
        {
          "topic": "education",
          "text": "領銜提案建請教育局提升教保員勞動福利與待遇，朝假日一致、午休彈性、證照加給三方面研擬方案。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34730"
        },
        {
          "topic": "transport",
          "text": "領銜提案建請公車驗票機導入電子票證自動加值與掃碼乘車功能。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34724"
        },
        {
          "topic": "environment",
          "text": "領銜提案建請工務局編列經費進行側溝普查及改善計畫，建置相關圖資。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34237"
        },
        {
          "topic": "welfare",
          "text": "領銜提案建請將凍卵補助諮詢納入婚後孕前健康檢查補助。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34437"
        },
        {
          "topic": "safety",
          "text": "2026-04 議會質詢要求市府投放滅鼠藥時依自訂指引置於隱蔽處、使用鼠餌盒並張貼警語，避免兒童與寵物誤觸。",
          "source": "https://newtalk.tw/news/view/2026-05-04/1033185"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2018–2026",
          "elected": true,
          "result": "",
          "note": "",
          "promises": [
            {
              "topic": "environment",
              "title": "廣告招牌管理、巷道纜線整理、電桿地下化",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "economy",
              "title": "花博園區回歸會展用途",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "增設實體人行道，檢討巷弄違停與騎樓占用",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "調降社會住宅租金、提高租屋補貼",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "加速更新電動公車",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "校園閒置空間轉為公共托育家園及非營利幼兒園",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "增加日照中心據點",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "193 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-liang-chun-taipei"
            },
            {
              "label": "前一任期政見落實度（六項）",
              "value": "70%–95%",
              "by": "本人自述（2022 年選舉公報）",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc4-10",
      "identity": {
        "name": "葉林傳",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 365 件，以民政類（92 件）最多，其次為教育、工務；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/yeh-lin-chuan-taipei"
        },
        {
          "topic": "governance",
          "text": "曾擔任議會領導職務；擔任議會領導職務者依慣例很少個人領銜提案，提案數不宜跨人比較。",
          "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
        },
        {
          "topic": "governance",
          "text": "2025-08 遭地檢署依意圖營利供給賭博場所及貪污治罪條例「對於主管或監督事務圖利」等罪嫌起訴，檢方請求從重量刑。",
          "source": "https://www.cna.com.tw/news/asoc/202508290073.aspx"
        },
        {
          "topic": "governance",
          "text": "前述案件 2026-07 仍在地方法院一審審理中，尚未判決；法院 2026-04 裁定延長電子監控 8 個月並限制出境。本人表示全案仍在訴訟中，不便評論。",
          "source": "https://tw.news.yahoo.com/%E8%91%89%E6%9E%97%E5%82%B3%E6%B6%89%E4%BF%AE%E6%B3%95%E5%9C%96%E5%88%A9%E8%87%AA%E5%AE%B6%E8%B3%AD%E5%8D%9A%E9%9B%BB%E7%8E%A9-%E5%89%8D%E5%BA%97%E9%95%B7%E5%87%BA%E5%BA%AD%E5%85%A8%E8%AA%AA%E4%BA%86-%E4%BB%96%E5%B0%B1%E6%98%AF-%E8%80%81%E9%97%86-064031222.html"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2010–2026",
          "elected": true,
          "result": "",
          "note": "",
          "promises": [
            {
              "topic": "welfare",
              "title": "爭取長者假牙、老花眼鏡及助聽器補助",
              "status": "unknown",
              "note": "市府 2023 年回覆：一般長者假牙補助不開放，老花眼鏡補助研議中；之後進度未查得",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-33901"
            },
            {
              "topic": "welfare",
              "title": "補助婦女凍卵",
              "status": "partial",
              "note": "市府 2024 年起試辦癌症病友醫療性凍卵補助，未補助非醫療性凍卵",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-34387"
            },
            {
              "topic": "education",
              "title": "落實學齡前教育義務化",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "economy",
              "title": "敦促市府設立青年局",
              "status": "done",
              "note": "市府已設青年局（2024 年起以青年局名義回覆議會提案）；個人角色無法查證",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-34476"
            },
            {
              "topic": "welfare",
              "title": "市立聯合醫院提升為醫學中心",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "transport",
              "title": "加速捷運民生汐止線並增設民生西路、重慶北路站",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "governance",
              "title": "廢除第一殯儀館並爭取區域再造",
              "status": "in_progress",
              "note": "市府 2024 年回覆：第一殯儀館拆除後短期作臨時停車場及綠地",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-34470"
            }
          ],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "365 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/yeh-lin-chuan-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc4-11",
      "identity": {
        "name": "黃麗香",
        "party": "台聯黨",
        "number": null
      },
      "platforms": [],
      "record": []
    },
    {
      "id": "tpc4-12",
      "identity": {
        "name": "林珍羽",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 297 件，以民政類（77 件）最多，其次為教育、工務；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-chen-yu-taipei"
        },
        {
          "topic": "governance",
          "text": "領銜提案建請市府向中央爭取提高議員公費助理員額及補助上限。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-33873"
        },
        {
          "topic": "welfare",
          "text": "質詢要求設置戶外吸菸室；市府其後除西門町外，也在中山區設置負壓吸菸室。",
          "source": "https://udn.com/news/story/124652/9494120"
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
              "title": "監督第一殯儀館遷建，推動全齡照護基地（托嬰、托幼、托老、日照、運動及展演空間）",
              "status": "in_progress",
              "note": "市府 2024 年回覆：第一殯儀館拆除後短期作臨時停車場及綠地，未見全齡照護基地規劃",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-34470"
            },
            {
              "topic": "housing",
              "title": "擴大危老都更",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "增加長照、日照、居家服務補助及時數",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "education",
              "title": "提升外籍師資比例",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "增設青年新婚獎勵，社宅前二年租金半價",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "environment",
              "title": "推動領養補助、擴充寵物公園數量",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "297 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/lin-chen-yu-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc4-13",
      "identity": {
        "name": "陳怡君",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "本屆列名提案 343 件，以民政類（84 件）最多，其次為教育、工務；臺北市議會提案多為多位議員共同具名。",
          "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-yi-chun-taipei"
        },
        {
          "topic": "welfare",
          "text": "領銜提案建請市府研擬 65 歲以上長者老花眼鏡補助；市府 2023 年回覆將研議。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-33901"
        },
        {
          "topic": "welfare",
          "text": "領銜提案建請兌換衛生棉政策的對象由國小擴大到高中。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-33951"
        },
        {
          "topic": "welfare",
          "text": "領銜提案建請擴大公費乳房 X 光攝影篩檢補助年齡。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-33927"
        },
        {
          "topic": "education",
          "text": "領銜提案建請盤點各級學校閒置空間，設立獨立教師休息室。",
          "source": "https://lawmaker.twreporter.org/council/bill/taipei-34682"
        },
        {
          "topic": "governance",
          "text": "涉詐領助理費及收受建商賄賂，一審依利用職務機會詐取財物、不違背職務收受賄賂等罪判處有期徒刑 7 年 10 月、褫奪公權 5 年；2026-10 二審審理中，尚未確定。本人否認犯罪，辯方主張相關款項用於其他公務支出。",
          "source": "https://news.cts.com.tw/cna/society/202610/202610153090023.html"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2018–2026",
          "elected": true,
          "result": "",
          "note": "",
          "promises": [
            {
              "topic": "welfare",
              "title": "清查閒置教室與土地，作為公托及長照關懷據點",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "推出公托兩歲專班五成中籤率",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "welfare",
              "title": "推動凍卵補助",
              "status": "partial",
              "note": "市府 2024 年起試辦癌症病友醫療性凍卵補助，未補助非醫療性凍卵",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-34387"
            },
            {
              "topic": "welfare",
              "title": "65 歲以上長者公費裝假牙",
              "status": "not_done",
              "note": "市府 2023 年回覆：考量排擠其他預算，不開放一般戶假牙補助",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-33801"
            },
            {
              "topic": "governance",
              "title": "遷移松山機場及第一殯儀館，加速都市更新",
              "status": "in_progress",
              "note": "市府 2024 年回覆：第一殯儀館拆除後短期作臨時停車場及綠地；機場遷移未查得進展",
              "source": "https://lawmaker.twreporter.org/council/bill/taipei-34470"
            },
            {
              "topic": "housing",
              "title": "推動成家基金，鼓勵年輕人留在本市",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            },
            {
              "topic": "housing",
              "title": "監督市府利用閒置國有、市有土地廣建社會住宅",
              "status": "unknown",
              "note": "未查得執行紀錄",
              "source": "https://eebulletin.cec.gov.tw/111/02臺北市/02市議員/臺北市第04選舉區.pdf"
            }
          ],
          "rates": [
            {
              "label": "本屆列名提案數",
              "value": "343 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/taipei/lawmaker/chen-yi-chun-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "tpc4-14",
      "identity": {
        "name": "李惠暄",
        "party": "小民參政歐巴桑聯盟",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "從制度面改善家事、性別平等與兒少保護問題",
          "detail": "方向性主張，未提出具體做法",
          "source": "https://newtalk.tw/news/view/2026-03-10/1023514"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "從事法律工作 17 年，擔任法律扶助律師（本人說法）。",
          "source": "https://newtalk.tw/news/view/2026-03-10/1023514"
        }
      ]
    }
  ]
});

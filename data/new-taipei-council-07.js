/*
 * 2026 新北市議員第 7 選區市議員（永和區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-14。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，5 人，應選 3 席）。
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 *   應選席次依中選會公告報導：https://udn.com/news/story/124652/9703290 ；另見 https://news.ltn.com.tw/news/politics/breakingnews/5563564
 * 審定名單 10/16 公告、號次 10/23 抽籤，屆時請補上 identity.number。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」取自議會官網議員介紹頁或 2022 年選舉公報；提案數取自報導者觀測站；2022 年得票率取自自由時報開票頁。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 2026-10-14 第二輪補查：以新聞報導與候選人網站補充 2026 年政見；部分候選人（含多位現任者）仍查無具體的 2026 年政見，政見欄維持空白，待選舉公報發布後補齊。
 * 2026-10-14 第三輪補查：政見欄空白的 2 位候選人中，1 位補經歷 4 則；2 位仍查無具體的 2026 年政見（候選人網站與競總成立報導只有服務理念，沒有政見條目），維持空白。
 * 已知缺漏（2026-10-19）：仍查無 2026 年政見：陳以樂。
 * 2026-10-19 第四輪補查：新增 3 則政見、1 則經歷（皆為許昭興，取自本人社群貼文所述 2026 年 10 月市政總質詢與會勘）。
 */
window.ELECTION_DATA.races.push({
  "id": "new-taipei-council-07",
  "region": "新北市",
  "office": "第 7 選區市議員",
  "area": "永和區",
  "seats": 3,
  "note": "議員政見整理自候選人公開資料、議會官網、選舉公報與新聞報導（截至 2026-10-14）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，各人資料多寡差異很大，這裡照實呈現。",
  "candidates": [
    {
      "id": "ntc7-1",
      "identity": {
        "name": "羅文崇",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "safety",
          "title": "推動路口斑馬線退縮",
          "detail": "斑馬線退縮約 5 公尺，降低車輛轉彎時 A 柱死角對行人的風險",
          "source": "https://udn.com/news/story/124652/9510599"
        }
      ],
      "record": [
        {
          "topic": "transport",
          "text": "與鄰近直轄市民意代表多次辦理跨市會勘，改善永和往返臺北的橋梁與慢車道動線（本人說法）。",
          "source": "https://udn.com/news/story/124652/9510599"
        },
        {
          "topic": "safety",
          "text": "爭取拆除部分地下道並改善車禍熱點（本人說法）。",
          "source": "https://udn.com/news/story/124652/9510599"
        },
        {
          "topic": "education",
          "text": "推動「弟妹可隨兄姊同校就讀」制度（本人說法）。",
          "source": "https://udn.com/news/story/124652/9510599"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2014–2022",
          "elected": true,
          "result": "",
          "note": "以下追蹤 2018 年參選時於議會官網列出的政見；2018 年得票未查得。",
          "promises": [
            {
              "topic": "environment",
              "title": "訂定動物保護自治條例並設立動物保護委員會",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=6&C=585"
            },
            {
              "topic": "safety",
              "title": "督促汰換老舊監視器，消除巷弄治安死角",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=6&C=585"
            },
            {
              "topic": "transport",
              "title": "拓寬福和橋往永和方向機慢車道",
              "status": "unknown",
              "note": "2022 年再次列為政見；完成與否未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=6&C=585"
            },
            {
              "topic": "welfare",
              "title": "增設公共托老中心，擴大共餐與長者活動",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=6&C=585"
            }
          ],
          "rates": []
        },
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "得票 17.94%，未當選",
          "note": "得票率取自自由時報開票頁。",
          "promises": [
            {
              "topic": "transport",
              "title": "福和橋車道拓寬",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/07-新北市選舉公報-第七選區.pdf"
            },
            {
              "topic": "safety",
              "title": "地下道改建拆除、改善路口交通安全",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/07-新北市選舉公報-第七選區.pdf"
            },
            {
              "topic": "transport",
              "title": "整平騎樓並合理增加停車格",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/07-新北市選舉公報-第七選區.pdf"
            },
            {
              "topic": "economy",
              "title": "協助青年創業就業，下修補助年齡層",
              "status": "not_applicable",
              "note": "",
              "source": "https://bulletin.cec.gov.tw/01選舉公報/05直轄市議員/111年/02新北市/07-新北市選舉公報-第七選區.pdf"
            }
          ],
          "rates": [
            {
              "label": "2022 年得票率",
              "value": "17.94%",
              "by": "自由時報開票頁",
              "source": "https://election.ltn.com.tw/2022/realtime/NewTaipei/parliamentary"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc7-2",
      "identity": {
        "name": "陳以樂",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "現任里長，已擔任兩屆。",
          "source": "https://udn.com/news/story/124652/9501436"
        },
        {
          "topic": "governance",
          "text": "擔任里長期間曾獲績優里長表揚。",
          "source": "https://udn.com/vote2026/story/124652/9501436"
        },
        {
          "topic": "welfare",
          "text": "擔任里長期間於 2019 年成立社區關懷據點，每週兩天辦理長者共餐；2023 年與醫院合作成立健康守護站，提供免費講座、失智檢測與量血壓（本人說法）。",
          "source": "https://www.zencosmos.com.tw/2023/08/village/42824/"
        },
        {
          "topic": "environment",
          "text": "擔任里長期間設置資源回收站，居民送交回收物換取點數兌換生活用品，變賣所得作為國高中生獎學金（本人說法）。",
          "source": "https://www.zencosmos.com.tw/2023/08/village/42824/"
        },
        {
          "topic": "transport",
          "text": "擔任里長期間向市府交通單位建議增設公車站與 YouBike 站點（本人說法；是否採納未查證）。",
          "source": "https://www.zencosmos.com.tw/2023/08/village/42824/"
        }
      ],
      "past": [
        {
          "role": "里長",
          "period": "2018–2026",
          "elected": true,
          "result": "",
          "note": "查無當年里長政見與得票資料。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "ntc7-3",
      "identity": {
        "name": "許昭興",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "擴大公辦都更至捷運站周邊以外的老舊街區",
          "detail": "2026 年 10 月市政總質詢提出：除頂溪站周邊外，針對老舊、影響公共安全、停車與生活環境的區域，由市府主動介入協助整合、加快更新。",
          "source": "https://www.threads.com/@happymon100/post/DeN6foxk-ty"
        },
        {
          "topic": "housing",
          "title": "由市府提供都更契約健檢諮詢",
          "detail": "2026 年 10 月市政總質詢提出：市府提供專業諮詢，協助民眾在簽約前看懂合約、釐清風險。",
          "source": "https://www.threads.com/@happymon100/post/DeN6foxk-ty"
        },
        {
          "topic": "safety",
          "title": "盤點夜間高風險路口，增設行穿線專用照明與醒目標誌",
          "detail": "2026 年 10 月市政總質詢提出，並建議優先檢視永和易肇事路口，依道路條件評估改善方式。",
          "source": "https://www.threads.com/@happymon100/post/DedVAJjEycW"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "本屆提案 219 件，以衛生類（55 件）最多，其次為社會、交通、敬老卡福利。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/hsu-chao-hsing-new-taipei"
        },
        {
          "topic": "welfare",
          "text": "2023 至 2025 年多次提案將骨質疏鬆症篩檢納入老人健檢，補助 65 歲以上女性、70 歲以上男性；市府表示依實證再研議。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/hsu-chao-hsing-new-taipei"
        },
        {
          "topic": "welfare",
          "text": "提案擴增社區營養推廣中心（當時僅設於兩個區衛生所），並建議擴大新住民生育保健通譯員的服務語言。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/hsu-chao-hsing-new-taipei"
        },
        {
          "topic": "welfare",
          "text": "提案下修大腸癌篩檢補助年齡至 30 歲、產前遺傳診斷補助年齡下修至 31 歲；市府未承諾具體時程。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/hsu-chao-hsing-new-taipei"
        },
        {
          "topic": "transport",
          "text": "2026 年 10 月邀集雙北相關單位會勘中正橋永和往臺北方向上橋處彎道，市府同意將彎道改善納入該橋人行道拓寬工程一併規劃，待雙北協調分工後預計 2027 年施作（本人說法）。",
          "source": "https://www.threads.com/@happymon100/post/Dei5i2fk5OJ"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2010–2018、2022–2026",
          "elected": true,
          "result": "",
          "note": "以下追蹤 2022 年選舉公報與議會官網列出的政見。",
          "promises": [
            {
              "topic": "welfare",
              "title": "婦女凍卵補助 3 萬元，往後 3 年每年 5,000 元卵子保存補助",
              "status": "partial",
              "note": "市府 2024 年 7 月起補助 40 歲以下因罹癌等醫療需求凍卵 3 萬元，2025 年 7 月加碼至 7 萬元；一般性凍卵與保存補助未納入",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/hsu-chao-hsing-new-taipei"
            },
            {
              "topic": "welfare",
              "title": "爭取 65 歲以上長者假牙補助、增加敬老愛心點數",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=7&C=554"
            },
            {
              "topic": "housing",
              "title": "加速公辦都更並建立自辦都更整合輔導機制",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=7&C=554"
            },
            {
              "topic": "housing",
              "title": "結婚入籍永和的年輕人每戶發給 10 萬元成家基金",
              "status": "unknown",
              "note": "查無實施紀錄",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=7&C=554"
            },
            {
              "topic": "economy",
              "title": "善用閒置公有房舍成立青年新創基地並提供青創貸款",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=7&C=554"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "219 件",
              "by": "報導者觀測站（部分議案跨會期重複列出）",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/hsu-chao-hsing-new-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc7-4",
      "identity": {
        "name": "陳鴻源",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "爭取放寬危老重建容積獎勵",
          "detail": "要求市府放寬容積獎勵以提高重建誘因",
          "source": "https://loveaction.com.tw/"
        },
        {
          "topic": "housing",
          "title": "爭取設置社區都更諮詢站",
          "detail": "提供海砂屋免費檢測與法律媒合",
          "source": "https://loveaction.com.tw/"
        },
        {
          "topic": "housing",
          "title": "擴大老舊公寓增設電梯與結構補強補助",
          "detail": "",
          "source": "https://loveaction.com.tw/"
        },
        {
          "topic": "transport",
          "title": "監督捷運萬大線工程進度",
          "detail": "督促如期通車，並定期檢討施工期間的車流與替代道路",
          "source": "https://loveaction.com.tw/"
        },
        {
          "topic": "transport",
          "title": "爭取增設 YouBike 2.0 站點與社區巡迴巴士",
          "detail": "",
          "source": "https://loveaction.com.tw/"
        },
        {
          "topic": "welfare",
          "title": "盤點閒置公共空間增設公共托育中心與非營利幼兒園",
          "detail": "目標縮短候補名單",
          "source": "https://loveaction.com.tw/"
        },
        {
          "topic": "welfare",
          "title": "爭取市府增加在地育兒津貼",
          "detail": "",
          "source": "https://loveaction.com.tw/"
        },
        {
          "topic": "welfare",
          "title": "擴大銀髮俱樂部據點、社區共餐與長者課程",
          "detail": "目標倍增（未說明基準）",
          "source": "https://loveaction.com.tw/"
        },
        {
          "topic": "welfare",
          "title": "強化喘息服務與居家照顧網絡",
          "detail": "",
          "source": "https://loveaction.com.tw/"
        },
        {
          "topic": "transport",
          "title": "盤點並整平人行道與騎樓高低差",
          "detail": "",
          "source": "https://loveaction.com.tw/"
        },
        {
          "topic": "environment",
          "title": "整治瓦磘溝",
          "detail": "除臭、清淤、污水截流，改造為親水步道",
          "source": "https://loveaction.com.tw/"
        },
        {
          "topic": "environment",
          "title": "河濱公園增設寵物友善區、夜間照明與運動設施",
          "detail": "",
          "source": "https://loveaction.com.tw/"
        },
        {
          "topic": "environment",
          "title": "共融公園與口袋公園",
          "detail": "社區公園改造為共融遊戲空間；活化巷弄閒置地推動社區綠化",
          "source": "https://loveaction.com.tw/"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "本屆提案 31 件，以衛生、教育、水利類較多。本屆擔任議會領導職務，依慣例較少個人提案，提案數不宜與其他人直接比較。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/chen-hung-yuan-new-taipei"
        },
        {
          "topic": "welfare",
          "text": "提案建議市府成立長期照顧專責機構；市府回覆將於 2026 年成立高齡長期照顧處作為單一窗口。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/chen-hung-yuan-new-taipei"
        },
        {
          "topic": "welfare",
          "text": "提案指出本市長照服務涵蓋率約 58%、為五都末段，要求擴大服務；另提案以公費補助高齡與慢性病患者接種帶狀疱疹疫苗。",
          "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/chen-hung-yuan-new-taipei"
        },
        {
          "topic": "education",
          "text": "爭取兩所國小校舍耐震補強與班級冷氣（本人說法）。",
          "source": "https://loveaction.com.tw/"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "1998–2026",
          "elected": true,
          "result": "",
          "note": "以下追蹤 2022 年選舉公報與議會官網列出的政見。",
          "promises": [
            {
              "topic": "housing",
              "title": "加速危老都更、爭取公辦都更，活化閒置場域興建社會住宅",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=7&C=482"
            },
            {
              "topic": "transport",
              "title": "推動秀朗區段捷運規劃",
              "status": "unknown",
              "note": "查無規劃進度資料",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=7&C=482"
            },
            {
              "topic": "welfare",
              "title": "建置銀髮俱樂部及日間照護中心",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=7&C=482"
            },
            {
              "topic": "economy",
              "title": "研擬商圈自治發展條例",
              "status": "unknown",
              "note": "查無提出或通過紀錄",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=7&C=482"
            },
            {
              "topic": "environment",
              "title": "持續建置汙水下水道，汰換老舊水電瓦斯管線",
              "status": "unknown",
              "note": "兌現情形未查到",
              "source": "https://www.ntp.gov.tw/councilor-detail?program=37&A=7&C=482"
            }
          ],
          "rates": [
            {
              "label": "本屆提案數",
              "value": "31 件",
              "by": "報導者觀測站",
              "source": "https://lawmaker.twreporter.org/council/new-taipei/lawmaker/chen-hung-yuan-new-taipei"
            }
          ]
        }
      ]
    },
    {
      "id": "ntc7-5",
      "identity": {
        "name": "蘇昭龍",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "成立專業服務團隊提供居家建築免費諮詢",
          "detail": "涵蓋居家漏水、結構安全與裝修合約的法律及技術諮詢",
          "source": "https://www.suzhaolong.com/"
        },
        {
          "topic": "housing",
          "title": "協助住戶了解都更、危老重建與耐震評估",
          "detail": "",
          "source": "https://www.suzhaolong.com/"
        },
        {
          "topic": "housing",
          "title": "駐點輔導簡化市府補助申請流程",
          "detail": "協助長者處理高樓層住宅問題",
          "source": "https://www.suzhaolong.com/"
        },
        {
          "topic": "housing",
          "title": "監督市府加速海砂屋與危老重建審查",
          "detail": "減少行政障礙",
          "source": "https://www.suzhaolong.com/"
        },
        {
          "topic": "safety",
          "title": "研議召開建築公共安全專案會議",
          "detail": "與建築師公會、工務局溝通，檢討公共安全申報與防盜鐵門拆除規定，參考外縣市放寬門扇開啟方向的做法",
          "source": "https://www.ettoday.net/news/20260505/3160586.htm"
        },
        {
          "topic": "transport",
          "title": "研議召開交通安全專案小組會議",
          "detail": "協同建築師公會、交通技師公會與交通局，參考外縣市做法",
          "source": "https://www.suzhaolong.com/"
        },
        {
          "topic": "governance",
          "title": "推動 AI 輔助城市治理專案",
          "detail": "結合建築師公會、AI 技術團隊與市府，將數據用於施政服務",
          "source": "https://www.suzhaolong.com/"
        },
        {
          "topic": "environment",
          "title": "推動宜居環境專案討論",
          "detail": "串聯建築師公會、景觀專家與城鄉局",
          "source": "https://www.suzhaolong.com/"
        }
      ],
      "record": [
        {
          "topic": "housing",
          "text": "曾任職兩個直轄市政府的建築管理與工務單位，現為建築師事務所主持人（本人說法）。",
          "source": "https://www.ettoday.net/news/20260511/3163951.htm"
        }
      ],
      "past": []
    }
  ]
});

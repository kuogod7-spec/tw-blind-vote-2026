/*
 * 2026 新竹市長選舉：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依新竹市選舉委員會「115 年縣市長選舉候選人登記概況彙總表」（製表 115/09/04；3 人，應選 1 席），
 * https://www.cec.gov.tw/hcec/article/64402 （附件 https://www.cec.gov.tw/api/file/6d3ef2fe-f9de-48cd-bcc5-984fa44c4dd9.pdf ）。
 * 中選會 2026-10-16 審定候選人資格，新竹市市長候選人 3 人均符合規定（https://www.cec.gov.tw/hcec/article/65212）；黨籍已於 2026-10-25 對照登記表「推薦之政黨」欄核對無誤。
 * 號次抽籤原訂 10/23，因薔琵颱風新竹市停止上班，順延至 2026-10-27 10:00 舉行（新竹市選委會 https://www.cec.gov.tw/hcec/article/65309 ；自由時報 https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5615588 ）。截至 2026-10-25 尚無結果，identity.number 待 10/27 抽籤後補上。
 * identity.party 依登記表「推薦之政黨」欄，未推薦者寫無黨籍。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 /
 *         unknown 無法查證 / not_applicable 未當選、無從兌現。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-city-mayor",
  "region": "新竹市",
  "office": "市長",
  "note": "政見整理自候選人公開說法與新聞報導（截至 2026-10-16），並非完整政見。2026 年選舉公報尚未發布；現任首長尚未發表完整連任政見，部分項目為以市府名義宣布或已實施的政策。各候選人公布的細節多寡不同，這裡照實呈現，沒有替任何人補充。",
  "candidates": [
    {
      "id": "hcm-1",
      "identity": {
        "name": "高虹安",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "完成 10 處公共托育中心",
          "detail": "公托收托量能由 49 人提升至 535 人；未公布期程",
          "source": "https://udn.com/news/story/124652/9537484"
        },
        {
          "topic": "housing",
          "title": "社會住宅 8 年內達到 4,000 戶",
          "detail": "目前規劃推動中的社會住宅 2,503 戶",
          "source": "https://udn.com/news/story/124652/9537484"
        },
        {
          "topic": "education",
          "title": "學童免費乳品兌換卡擴大至國中生",
          "detail": "2026 年 11 月起實施，可兌換乳品、豆漿或優酪乳",
          "source": "https://cna.com.tw/news/aipl/202609160107.aspx"
        },
        {
          "topic": "transport",
          "title": "持續推動 28 校通學步道與校舍整建",
          "detail": "未公布經費與期程",
          "source": "https://cna.com.tw/news/aipl/202609160107.aspx"
        },
        {
          "topic": "transport",
          "title": "增建館舍並改善人行環境",
          "detail": "未公布經費、期程與地點",
          "source": "https://newtalk.tw/news/view/2026-05-28/1037890"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "國中小營養午餐自 2026 年 8 月起免費。",
          "source": "https://cna.com.tw/news/aipl/202609160107.aspx"
        },
        {
          "topic": "welfare",
          "text": "敬老卡及愛心卡每月點數 2026 年 10 月起由 800 點提高至 1,200 點（2022 年為 600 點），農會與藥局每月使用上限提高至 300 點。",
          "source": "https://udn.com/news/story/124652/9537484"
        },
        {
          "topic": "welfare",
          "text": "符合資格的 65 歲以上長者及 55 歲以上原住民，每月最高補助 826 元健保費。",
          "source": "https://cna.com.tw/news/aipl/202609160107.aspx"
        },
        {
          "topic": "welfare",
          "text": "生育補助提高至每胎 3 萬元；育兒津貼自 2026 年 3 月起每月加碼 1,000 元，逾 1.16 萬戶受惠（本人說法）。",
          "source": "https://udn.com/news/story/124652/9537484"
        },
        {
          "topic": "governance",
          "text": "三年償還 83 億元債務，人均負債由約 2.2 萬元降至 3,729 元（本人說法）。",
          "source": "https://udn.com/news/story/124652/9537484"
        },
        {
          "topic": "transport",
          "text": "成立交通改善小組，近 3 年提前開通 5 條道路（本人說法）。",
          "source": "https://udn.com/news/story/124652/9537484"
        },
        {
          "topic": "education",
          "text": "新建 8 校校舍投入逾 24 億元、整建 7 校校舍編列 16 億元（本人說法）。",
          "source": "https://udn.com/news/story/124652/9537484"
        },
        {
          "topic": "governance",
          "text": "市政服務 APP 上線不到一年下載逾 22 萬次（本人說法）。",
          "source": "https://udn.com/news/story/124652/9537484"
        }
      ],
      "past": [
        {
          "role": "縣市首長",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "2022 年競選時公布的七大政見主軸，列出可追蹤的 8 則；其餘多為原則性方向。整理期間未查得市府公布的政見達成率原始資料。",
          "promises": [
            {
              "topic": "welfare",
              "title": "升級敬老愛心卡點數",
              "status": "done",
              "note": "每月點數由 600 點提高至 800 點，2026 年 10 月起再提高至 1,200 點",
              "source": "https://udn.com/news/story/124652/9537484"
            },
            {
              "topic": "education",
              "title": "落實校園營養午餐補助",
              "status": "done",
              "note": "國中小營養午餐自 2026 年 8 月起免費",
              "source": "https://cna.com.tw/news/aipl/202609160107.aspx"
            },
            {
              "topic": "governance",
              "title": "以市政 APP 整合市民服務",
              "status": "done",
              "note": "APP 上線不到一年下載逾 22 萬次（本人說法）",
              "source": "https://udn.com/news/story/124652/9537484"
            },
            {
              "topic": "housing",
              "title": "新建社會住宅",
              "status": "in_progress",
              "note": "規劃推動中 2,503 戶，目標 8 年內 4,000 戶",
              "source": "https://udn.com/news/story/124652/9537484"
            },
            {
              "topic": "welfare",
              "title": "提高幼教與育兒補助",
              "status": "done",
              "note": "生育補助每胎 3 萬元，育兒津貼 2026 年 3 月起每月加碼 1,000 元",
              "source": "https://udn.com/news/story/124652/9537484"
            },
            {
              "topic": "transport",
              "title": "打造通學步道",
              "status": "in_progress",
              "note": "持續推動 28 校通學步道",
              "source": "https://cna.com.tw/news/aipl/202609160107.aspx"
            },
            {
              "topic": "transport",
              "title": "興建光埔全區空橋",
              "status": "unknown",
              "note": "",
              "source": "https://n.yam.com/Article/20221007324276"
            },
            {
              "topic": "economy",
              "title": "推動果菜批發市場遷建",
              "status": "unknown",
              "note": "",
              "source": "https://n.yam.com/Article/20221007324276"
            }
          ],
          "rates": [
            {
              "label": "市府委託調查整體施政滿意度（2026 年 9 月，有效樣本 1,078 份）",
              "value": "71.6%",
              "by": "新竹市政府委託調查",
              "source": "https://udn.com/news/story/6656/9752707"
            },
            {
              "label": "媒體民調施政滿意度（2026 年 5 月，有效樣本 1,068 份）",
              "value": "65.2%",
              "by": "網路媒體民調",
              "source": "https://newtalk.tw/news/view/2026-05-28/1037890"
            }
          ]
        }
      ]
    },
    {
      "id": "hcm-2",
      "identity": {
        "name": "莊競程",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "推動新竹捷運，4 年內動工",
          "detail": "加速可行性研究與綜合規劃，2、3 年內完成綜合規劃與核定，第 4 年動工；路線納入香山、南寮；未公布經費",
          "source": "https://www.nownews.com/news/6875523"
        },
        {
          "topic": "transport",
          "title": "重新盤點公車路網",
          "detail": "依通勤、就醫、採買需求調整路線",
          "source": "https://cna.com.tw/news/aipl/202609160107.aspx"
        },
        {
          "topic": "transport",
          "title": "人本交通系統性改善",
          "detail": "整合行人空間、公共運輸、號誌及道路配置",
          "source": "https://cna.com.tw/news/aipl/202609160107.aspx"
        },
        {
          "topic": "transport",
          "title": "開辦通學巡迴巴士",
          "detail": "於光復路、學府路口周邊四校（每日近 6,000 名學生）設固定上車點，循環直達校門",
          "source": "https://udn.com/news/story/124652/9641603"
        },
        {
          "topic": "transport",
          "title": "以智慧交通管理改善東區塞車",
          "detail": "未公布細節",
          "source": "https://udn.com/news/story/124652/9636325"
        },
        {
          "topic": "education",
          "title": "高中職增班並增加就近入學機會",
          "detail": "加速關埔地區教育設施規劃",
          "source": "https://cna.com.tw/news/aipl/202609160107.aspx"
        },
        {
          "topic": "education",
          "title": "研擬教師「科技城市加給」",
          "detail": "未公布金額",
          "source": "https://udn.com/news/story/124652/9641603"
        },
        {
          "topic": "education",
          "title": "設立 AI 特色完全中學",
          "detail": "與在地兩所國立大學合作，著重學術、AI 與國際連結",
          "source": "https://udn.com/news/story/124652/9641603"
        },
        {
          "topic": "education",
          "title": "推動教師留才、行政減量與特教支持",
          "detail": "未公布細節",
          "source": "https://cna.com.tw/news/aipl/202609160107.aspx"
        },
        {
          "topic": "welfare",
          "title": "敬老愛心卡點數由 800 點提高至 1,200 點",
          "detail": "當年度可跨月累積，使用範圍擴大至大賣場與超商",
          "source": "https://www.cna.com.tw/news/aipl/202606170165.aspx"
        },
        {
          "topic": "welfare",
          "title": "生育補助第一胎 5 萬元、第二胎 10 萬元、第三胎 15 萬元",
          "detail": "",
          "source": "https://www.cna.com.tw/news/aipl/202606170165.aspx"
        },
        {
          "topic": "governance",
          "title": "上任後盤點停擺的公共工程並逐一重啟",
          "detail": "醫院院區、總圖書館、國際展演中心等計畫訂明確期程並公開評估",
          "source": "https://udn.com/news/story/124652/9636325"
        },
        {
          "topic": "governance",
          "title": "設立政策許願池網頁，供市民線上提出建議",
          "detail": "",
          "source": "https://www.cna.com.tw/news/aipl/202606170165.aspx"
        },
        {
          "topic": "safety",
          "title": "導入 AI 智慧監測預警系統因應市區淹水",
          "detail": "",
          "source": "https://udn.com/news/story/124652/9636325"
        },
        {
          "topic": "economy",
          "title": "打造太空產業生態系",
          "detail": "串聯科學園區、學研與供應鏈；藉中油土地重劃協助國家太空中心取得發展用地",
          "source": "https://news.ltn.com.tw/amp/news/HsinchuCity/breakingnews/5527955"
        },
        {
          "topic": "economy",
          "title": "推動國際創新加速器",
          "detail": "吸引研發中心與創投資金",
          "source": "https://udn.com/news/story/124652/9636325"
        },
        {
          "topic": "economy",
          "title": "升級南寮漁港景觀與動線、打造香山觀光休閒廊帶",
          "detail": "未公布細節",
          "source": "https://udn.com/news/story/124652/9636325"
        },
        {
          "topic": "environment",
          "title": "改善動物園清潔與動物福利",
          "detail": "",
          "source": "https://news.ltn.com.tw/amp/news/politics/breakingnews/5479795"
        },
        {
          "topic": "economy",
          "title": "公園商店提前辦理續約或分散招標",
          "detail": "避免店家同時歇業、縮短空窗期",
          "source": "https://news.ltn.com.tw/amp/news/politics/breakingnews/5479795"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "曾任大學電機工程學系助理教授，在地任教 6 年。",
          "source": "https://www.cna.com.tw/news/aipl/202606170165.aspx"
        },
        {
          "topic": "welfare",
          "text": "曾任中央民意代表，主要在社會福利及衛生環境委員會。",
          "source": "https://www.cna.com.tw/news/aipl/202606170165.aspx"
        },
        {
          "topic": "governance",
          "text": "2024 年 5 月至 2025 年 7 月任中央政府區域聯合服務中心執行長。",
          "source": "https://newtalk.tw/news/view/2026-03-28/1026808"
        }
      ],
      "past": [
        {
          "role": "中央民意代表",
          "period": "2020–2024",
          "elected": true,
          "result": "",
          "note": "本次未追蹤 2020 年選舉公報政見。",
          "promises": [],
          "rates": []
        },
        {
          "role": "參選中央民意代表（連任）",
          "period": "2024",
          "elected": false,
          "result": "未當選",
          "note": "",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "hcm-3",
      "identity": {
        "name": "何志勇",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "發放每人每年 16,800 元生活支持金",
          "detail": "以每週 5 天、每天 70 元計算，存入卡片限市內消費；在市內就學就業的外縣市籍青年依居住期間認定資格；未公布總經費與期程",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5598552"
        },
        {
          "topic": "transport",
          "title": "興建 BRT 雙節公車專用道與優先道",
          "detail": "以 9 人小巴接駁最後一哩；未公布路線與經費",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5598552"
        },
        {
          "topic": "transport",
          "title": "車道寬度由 3.2 公尺縮為 2.7 公尺",
          "detail": "多出的空間改為人行道與自行車道；稱可減少 2 成車流（本人說法）",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5598552"
        },
        {
          "topic": "governance",
          "title": "利益迴避法制化",
          "detail": "首長、局處首長與民代親屬承攬關係全部公開上網，決策全程留痕；1,000 萬元以上標案邀檢調、政風提前參與審查",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5583593"
        },
        {
          "topic": "governance",
          "title": "設置市政透明儀表板",
          "detail": "工程進度、預算執行、標案公文即時公開，每年開放公民審議預算",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5583593"
        },
        {
          "topic": "governance",
          "title": "由具專業背景的文官負責市政，廢除酬庸任用",
          "detail": "",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5583593"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "現任大學兼任助理教授。",
          "source": "https://udn.com/news/story/124652/9639529"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "未當選",
          "note": "依 2022 年選舉公報，當年於本市第 1 選區參選；未列名現任議員名單，判斷未當選，未查得得票數。公報文字擷取無法完整辨識其政見，因此不列項目。",
          "promises": [],
          "rates": []
        }
      ]
    }
  ]
});

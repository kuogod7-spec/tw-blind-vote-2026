/*
 * 2026 新竹縣長選舉：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依中選會「115 年縣市長選舉候選人登記彙總表」（製表日期 115/09/07，
 * https://web.cec.gov.tw/api/file/370f3bbf-6408-4fdc-b8d8-9b9214913f74.pdf ），新竹縣共 3 人登記，應選 1 席。
 * 10/16 審定名單本次未能取得，暫依登記彙總表。
 * 號次 10/23 抽籤，屆時請補上 identity.number。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 過去政見 status：done 已達成 / partial 部分達成 / in_progress 進行中 / not_done 未達成 /
 *         unknown 無法查證 / not_applicable 未當選、無從兌現。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-county-mayor",
  "region": "新竹縣",
  "office": "縣長",
  "note": "政見整理自新聞報導（截至 2026-10-16），並非完整政見。2026 年選舉公報尚未發布；部分候選人的政見多為分區造勢時提出的地方建設方向，未公布經費與期程。各候選人公布的細節多寡不同，這裡照實呈現，沒有替任何人補充。",
  "candidates": [
    {
      "id": "hhm-1",
      "identity": {
        "name": "鄭朝方",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "推動興建湖口第二交流道",
          "detail": "改善湖口聯外交通動線，縮短通勤時間；未公布期程與經費",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5601898"
        },
        {
          "topic": "economy",
          "title": "推動湖口老街再生",
          "detail": "整合街區景觀、步行環境與在地產業",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5601898"
        },
        {
          "topic": "education",
          "title": "在湖口完善公園、運動場與親子圖書館",
          "detail": "未公布數量與經費",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5601898"
        },
        {
          "topic": "transport",
          "title": "重新評估埔東隧道計畫",
          "detail": "連結新埔與高鐵特定區",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602793"
        },
        {
          "topic": "economy",
          "title": "推動新埔老街導覽",
          "detail": "結合老街、宗祠與柿餅等季節產業",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602793"
        },
        {
          "topic": "economy",
          "title": "改造竹東傳統市場",
          "detail": "參照已完成改造的傳統市場模式，改善購物環境",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5604725"
        },
        {
          "topic": "education",
          "title": "在竹東、橫山、北埔設置親子圖書館與共學空間",
          "detail": "未公布數量與經費",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5604725"
        },
        {
          "topic": "environment",
          "title": "改善竹東河濱公園與中興河道水岸環境",
          "detail": "參考國外都市河川水岸改造",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5604725"
        },
        {
          "topic": "transport",
          "title": "改善竹東聯外道路與公共運輸",
          "detail": "增設二重交流道，串聯台 68 線與國道",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5604725"
        },
        {
          "topic": "governance",
          "title": "補助竹東外五里公共建設",
          "detail": "未公布金額",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5604725"
        },
        {
          "topic": "welfare",
          "title": "擴大長者福利",
          "detail": "未公布具體項目",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5604725"
        },
        {
          "topic": "transport",
          "title": "整合北埔老街周邊交通與停車規劃",
          "detail": "回應假日人潮",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5607382"
        },
        {
          "topic": "economy",
          "title": "改善峨眉湖、獅頭山一帶觀光動線與公共設施",
          "detail": "串聯老街、農村與文化據點",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5607382"
        },
        {
          "topic": "economy",
          "title": "協助北埔、峨眉農業人力、品牌與通路",
          "detail": "協助茶葉、桶柑等農產品開拓市場",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5607382"
        },
        {
          "topic": "welfare",
          "title": "補強北埔、峨眉長輩就醫接送與長照資源",
          "detail": "未公布具體做法",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5607382"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "擔任鄉鎮市首長期間改造公立圖書館，每日平均入館人次由約 300 人增至約 1,500 人，單日最高逾 2,500 人次（競選辦公室說法）。",
          "source": "https://cna.com.tw/news/aipl/202610040118.aspx"
        },
        {
          "topic": "governance",
          "text": "擔任鄉鎮市首長期間推出的公共景觀燈具設計取得專利（競選辦公室說法）。",
          "source": "https://cna.com.tw/news/aipl/202610040118.aspx"
        },
        {
          "topic": "economy",
          "text": "擔任鄉鎮市首長期間完成傳統市場改造、地下道改善、特色球場與親子館興建（本人說法）。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5603147"
        },
        {
          "topic": "education",
          "text": "擔任鄉鎮市首長期間推動學童通學接駁路線，減少家長接送負擔（本人說法）。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5604725"
        }
      ],
      "past": [
        {
          "role": "鄉鎮市首長",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "上屆政見執行情形尚未整理。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "hhm-2",
      "identity": {
        "name": "朱定瑀",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [
        {
          "topic": "housing",
          "title": "私有地遭公眾使用者，以徵收地交換歸還地主",
          "detail": "未公布規模與經費",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602918"
        },
        {
          "topic": "housing",
          "title": "育嬰父母可取得無地價住宅或免費入住社會住宅",
          "detail": "未公布資格與經費",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602918"
        },
        {
          "topic": "economy",
          "title": "創業構想經登記通過者可免費取得徵收地",
          "detail": "未公布審查方式",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602918"
        },
        {
          "topic": "economy",
          "title": "縣府提供免費土地吸引廠商與開發商造鎮設廠",
          "detail": "未公布土地來源與規模",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602918"
        },
        {
          "topic": "transport",
          "title": "交通違規者上網登錄原因與改善方法即可免罰撤單",
          "detail": "酒駕、毒駕、闖紅燈除外",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602918"
        },
        {
          "topic": "welfare",
          "title": "全額補助長者助聽器、活動假牙與膝關節墊片",
          "detail": "含備品；未公布經費",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602918"
        },
        {
          "topic": "welfare",
          "title": "50 歲以上縣民免費健康檢查",
          "detail": "未公布經費",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5602918"
        }
      ],
      "record": [],
      "past": []
    },
    {
      "id": "hhm-3",
      "identity": {
        "name": "徐欣瑩",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "鼓勵企業讓 12 歲以下子女的家長每日減少工時 1 小時、薪資不減",
          "detail": "縣府補助配合企業，未公布補助金額",
          "source": "https://cna.com.tw/news/aipl/202610040118.aspx"
        },
        {
          "topic": "economy",
          "title": "協助企業導入彈性工時",
          "detail": "縣府提供制度設計、法令諮詢與指引，協助彈性上下班、友善排班與部分遠距工作",
          "source": "https://cna.com.tw/news/aipl/202610040118.aspx"
        },
        {
          "topic": "economy",
          "title": "女性重返職場或創業提供啟動金",
          "detail": "最高 5 萬元，搭配職業訓練與托育資源",
          "source": "https://cna.com.tw/news/aipl/202610040118.aspx"
        },
        {
          "topic": "economy",
          "title": "強化職災勞工與工會支持並加強勞動檢查",
          "detail": "職場霸凌零容忍",
          "source": "https://cna.com.tw/news/aipl/202610040118.aspx"
        },
        {
          "topic": "education",
          "title": "設立 AI 職能訓練中心",
          "detail": "整合科學園區、研究機構、大專院校與職訓機構，開設 AI、半導體、資安、智慧製造等課程；未公布期程與經費",
          "source": "https://cna.com.tw/news/aipl/202610040118.aspx"
        },
        {
          "topic": "economy",
          "title": "提供清潔隊員風扇衣並提高健檢補助",
          "detail": "加強各鄉鎮市垃圾車、資源回收車等機具補助；未公布金額",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5599930"
        },
        {
          "topic": "governance",
          "title": "縣政建設不署名、家人不介入採購",
          "detail": "成立由專家與縣民組成的縣政顧問團監督縣政",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5603042"
        },
        {
          "topic": "economy",
          "title": "提供青年創業啟動金與創業貸款利息補貼",
          "detail": "另提供免費一對一商事法、財會、稅務諮詢；未公布金額",
          "source": "https://hao.cnyes.com/post/268675"
        },
        {
          "topic": "economy",
          "title": "提供青年 AI 工具使用補助金",
          "detail": "未公布金額",
          "source": "https://hao.cnyes.com/post/268675"
        },
        {
          "topic": "economy",
          "title": "設立新創基地",
          "detail": "串聯科學園區、研究機構、大學與企業",
          "source": "https://hao.cnyes.com/post/268675"
        },
        {
          "topic": "housing",
          "title": "加速青年社會住宅並建立安心租屋機制",
          "detail": "租屋資訊透明化並協助保障租賃權益",
          "source": "https://hao.cnyes.com/post/268675"
        },
        {
          "topic": "education",
          "title": "增設夜間與假日臨時托育",
          "detail": "未公布數量",
          "source": "https://hao.cnyes.com/post/268675"
        },
        {
          "topic": "education",
          "title": "增設共融式公園、室內兒童樂園與多功能運動場館",
          "detail": "未公布數量與經費",
          "source": "https://hao.cnyes.com/post/268675"
        },
        {
          "topic": "education",
          "title": "增加幼兒園與 2 歲專班名額",
          "detail": "上任後執行；未公布名額",
          "source": "https://www.storm.mg/article/11111299"
        },
        {
          "topic": "education",
          "title": "中小學學生每人一台平板並推動 AI 教育",
          "detail": "未公布經費",
          "source": "https://www.storm.mg/article/11111299"
        },
        {
          "topic": "welfare",
          "title": "敬老愛心卡由 500 元提高至 1,000 元",
          "detail": "可折抵掛號費並開放生活消費",
          "source": "https://www.storm.mg/article/11111299"
        },
        {
          "topic": "welfare",
          "title": "補助 65 歲以上長者健保自付額",
          "detail": "限所得稅率 20% 以下者",
          "source": "https://www.storm.mg/article/11111299"
        },
        {
          "topic": "welfare",
          "title": "擴大假牙補助名額",
          "detail": "未公布人數與金額",
          "source": "https://hao.cnyes.com/post/262097"
        },
        {
          "topic": "welfare",
          "title": "免費提供 65 歲以上長者智慧健康手環",
          "detail": "監測心跳、血氧、血壓趨勢與跌倒，異常時通知家屬與醫療系統；優先獨居、偏鄉等高風險長者",
          "source": "https://www.storm.mg/article/11150087"
        },
        {
          "topic": "welfare",
          "title": "推動遠距視訊醫療與醫療專車",
          "detail": "改善偏鄉醫療落差",
          "source": "https://www.storm.mg/article/11111299"
        },
        {
          "topic": "transport",
          "title": "建立 AI 交通號誌控制、智慧停車與智慧公車路網",
          "detail": "未公布期程與經費",
          "source": "https://www.storm.mg/article/11111299"
        },
        {
          "topic": "transport",
          "title": "加速推動多項道路建設",
          "detail": "楊梅至頭份高架道路、竹北交流道改善、經國橋道路改善、台一線替代道路、湖口第二交流道",
          "source": "https://www.storm.mg/article/11111299"
        },
        {
          "topic": "transport",
          "title": "增設竹東二重交流道並拓寬竹東主要幹道",
          "detail": "未公布期程",
          "source": "https://hao.cnyes.com/post/262097"
        },
        {
          "topic": "governance",
          "title": "推動竹東鎮升格為縣轄市",
          "detail": "未公布期程",
          "source": "https://hao.cnyes.com/post/262097"
        },
        {
          "topic": "economy",
          "title": "加速科學園區三期及知識經濟旗艦園區開發",
          "detail": "未公布期程",
          "source": "https://www.storm.mg/article/11111299"
        },
        {
          "topic": "governance",
          "title": "以 AI 盤點縣政並將洽公表單自動化",
          "detail": "定期下鄉聽取民意",
          "source": "https://www.storm.mg/article/11111299"
        }
      ],
      "record": [
        {
          "topic": "education",
          "text": "擔任民意代表期間，縣內教育決算三年增加約 20 億元（本人說法）。",
          "source": "https://www.storm.mg/article/11150087"
        }
      ],
      "past": [
        {
          "role": "中央民意代表",
          "period": "2020–2026",
          "elected": true,
          "result": "",
          "note": "上屆政見執行情形尚未整理。",
          "promises": [],
          "rates": []
        }
      ]
    }
  ]
});

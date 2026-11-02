/*
 * 2026 臺北市議員第 8 選區（山地原住民）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-14。候選人名單依中選會「115 年直轄市議員選舉候選人登記彙總表」（製表日期 115/09/07，3 人，應選 1 席）
 *   https://web.cec.gov.tw/api/file/ccd7e51a-5fd0-4ea0-a81b-a120cd550c9c.pdf
 * 中選會彙總表未標選區性質；第 8 選區為山地原住民、應選 1 席，依 2022 年選舉公報與島民觀察室（formosaobservatory.com/election/63000）確認。
 * 民進黨候選人與 2022 年新北市山地原住民選區一位同名參選人經歷相近，但查無來源明確寫出是同一人，依規則不收該次參選紀錄。
 * 審定名單 10/16 公告、號次原訂 10/23 抽籤，因颱風薔琵臺北市 10/23 停止上班，依北市選委會公告改於 10/27 抽籤（https://www.cna.com.tw/news/aloc/202610210175.aspx、https://www.cna.com.tw/news/aloc/202610220375.aspx），抽籤後請補上 identity.number（2026-10-25 註）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 第三輪補查（2026-10-14）：國民黨候選人補上報導中的 1 則政見方向（原文簡略，照實呈現）；民進黨候選人補 1 則經歷（提名方說法），仍無具體政見；
 *   無黨籍候選人仍查無政見或其他可收錄資料。
 * 已知缺漏（2026-11-02）：三位候選人都已有政見；國民黨、民進黨候選人各僅 1 則且原文簡略。
 * 2026-10-19 第四輪補查：新增 1 則政見、0 則經歷（民進黨候選人競選總部成立報導中的文化政見方向，原文簡略，照實呈現）。
 * 2026-11-02 第五輪補查：新增 3 則政見、0 則經歷（tpcmi-3 宣布參選時提出的三項計畫；來源報導內容幾乎全為本人說法，近似新聞稿）。
 * 號次：依 10/27 抽籤結果補上，並與中選會選舉資料庫的候選人號次逐一核對（https://info.cec.gov.tw/vote2026/static/json/cand/T/63000.json ；2026-11-02 註）。
 */
window.ELECTION_DATA.races.push({
  "id": "taipei-council-mi",
  "region": "臺北市",
  "office": "第 8 選區山地原住民市議員",
  "area": "全市",
  "seats": 1,
  "note": "臺北市全市具山地原住民身分的選舉人投票。現任者未登記參選，三位候選人皆為首次參選本選區。政見整理自新聞報導與候選人公開資料（截至 2026-11-02），三位候選人的公開政見都只有少數幾則，2026 年選舉公報發布後再更新。",
  "candidates": [
    {
      "id": "tpcmi-1",
      "identity": {
        "name": "林家豪",
        "party": "民主進步黨",
        "number": 2
      },
      "platforms": [
        {
          "topic": "education",
          "title": "強化本市聯合豐年祭與歲時祭儀等原住民族文化傳承與復振",
          "detail": "競選總部成立時表示本市相關活動辦得不如鄰近直轄市；報導未列具體措施、期程或財源",
          "source": "https://news.ltn.com.tw/news/Taipei/breakingnews/5610253"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "曾任中央行政機關青年諮詢委員（提名方說法）。",
          "source": "https://newtalk.tw/news/view/2026-07-29/1050129"
        },
        {
          "topic": "economy",
          "text": "參與原住民青年返鄉、創業等議題（提名方說法）。",
          "source": "https://udn.com/news/story/124652/9686378"
        }
      ]
    },
    {
      "id": "tpcmi-2",
      "identity": {
        "name": "李傅鈺婷",
        "party": "中國國民黨",
        "number": 3
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "爭取都會原住民在居住、就業、教育、文化方面的權益與福利",
          "detail": "表示將更重視青年參與、婦女權益及長者照顧；報導未列具體措施、期程或財源",
          "source": "https://www.ettoday.net/news/20260613/3182772.htm"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "長期擔任地方民意代表特別助理，參與地方服務與陳情案件處理。",
          "source": "https://www.ettoday.net/news/20260613/3182772.htm"
        }
      ]
    },
    {
      "id": "tpcmi-3",
      "identity": {
        "name": "孔垂崢Haisul Islituan",
        "party": "無黨籍",
        "number": 1
      },
      "platforms": [
        {
          "topic": "economy",
          "title": "推動原住民族金融教育推廣計畫",
          "detail": "宣布參選時表示，若進入議會將推動；選前先籌辦公益金融巡迴講座，未提場次與預算。",
          "source": "https://tw.stock.yahoo.com/news/%E9%8A%80%E8%A1%8C%E8%A1%8C%E5%93%A1%E6%94%B6%E4%BD%A3%E6%A1%88%E5%BC%95%E9%97%9C%E6%B3%A8-%E5%AD%94%E5%9E%82%E5%B4%A2%E7%B1%8C%E8%BE%A6%E5%85%AC%E7%9B%8A%E9%87%91%E8%9E%8D%E5%B7%A1%E8%BF%B4%E8%AC%9B%E5%BA%A7-%E6%89%93%E9%80%A0%E8%87%BA%E5%8C%97%E5%8E%9F%E6%B0%91%E9%87%91%E8%9E%8D%E5%AE%89%E5%85%A8%E7%B6%B2-032733136.html"
        },
        {
          "topic": "safety",
          "title": "建立原住民族防詐騙宣導機制",
          "detail": "未說明具體做法與期程。",
          "source": "https://tw.stock.yahoo.com/news/%E9%8A%80%E8%A1%8C%E8%A1%8C%E5%93%A1%E6%94%B6%E4%BD%A3%E6%A1%88%E5%BC%95%E9%97%9C%E6%B3%A8-%E5%AD%94%E5%9E%82%E5%B4%A2%E7%B1%8C%E8%BE%A6%E5%85%AC%E7%9B%8A%E9%87%91%E8%9E%8D%E5%B7%A1%E8%BF%B4%E8%AC%9B%E5%BA%A7-%E6%89%93%E9%80%A0%E8%87%BA%E5%8C%97%E5%8E%9F%E6%B0%91%E9%87%91%E8%9E%8D%E5%AE%89%E5%85%A8%E7%B6%B2-032733136.html"
        },
        {
          "topic": "economy",
          "title": "設立原住民青年創業與購屋金融輔導平台",
          "detail": "對象為年輕族人；未說明具體做法與期程。",
          "source": "https://tw.stock.yahoo.com/news/%E9%8A%80%E8%A1%8C%E8%A1%8C%E5%93%A1%E6%94%B6%E4%BD%A3%E6%A1%88%E5%BC%95%E9%97%9C%E6%B3%A8-%E5%AD%94%E5%9E%82%E5%B4%A2%E7%B1%8C%E8%BE%A6%E5%85%AC%E7%9B%8A%E9%87%91%E8%9E%8D%E5%B7%A1%E8%BF%B4%E8%AC%9B%E5%BA%A7-%E6%89%93%E9%80%A0%E8%87%BA%E5%8C%97%E5%8E%9F%E6%B0%91%E9%87%91%E8%9E%8D%E5%AE%89%E5%85%A8%E7%B6%B2-032733136.html"
        }
      ],
      "record": [
        {
          "topic": "governance",
          "text": "擔任中央民意代表助理多年。",
          "source": "https://news.ipcf.org.tw/206942"
        }
      ]
    }
  ]
});

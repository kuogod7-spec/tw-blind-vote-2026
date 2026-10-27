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
 * 已知缺漏：孔垂崢Haisul Islituan 仍查無 2026 年公開政見。
 * 2026-10-19 第四輪補查：新增 1 則政見、0 則經歷（民進黨候選人競選總部成立報導中的文化政見方向，原文簡略，照實呈現）。
 * 號次：依 10/27 抽籤結果補上 2/3 位（https://web.cec.gov.tw/api/file/64d442d4-6027-4d96-bf44-765a137baac0.pdf）；其餘尚未查得，number 暫為 null（2026-10-27 註）。
 */
window.ELECTION_DATA.races.push({
  "id": "taipei-council-mi",
  "region": "臺北市",
  "office": "第 8 選區山地原住民市議員",
  "area": "全市",
  "seats": 1,
  "note": "臺北市全市具山地原住民身分的選舉人投票。現任者未登記參選，三位候選人皆為首次參選本選區。截至 2026-10-19 兩位候選人各有 1 則報導中的簡略政見方向，另一位查無公開政見，2026 年選舉公報發布後再更新。",
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
        "number": null
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
      "platforms": [],
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

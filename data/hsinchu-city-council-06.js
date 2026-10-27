/*
 * 2026 新竹市議員第 6 選區平地原住民市議員（全市）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依新竹市選舉委員會「115 年縣市議員選舉候選人登記概況彙總表」（製表 115/09/04；2 人，應選 1 席），
 * https://www.cec.gov.tw/hcec/article/64402 （附件 https://www.cec.gov.tw/api/file/8cb864fd-5945-41ec-99e6-33c0ba574d74.pdf ）。
 * 中選會 2026-10-16 審定候選人資格，新竹市市議員候選人無人不符規定（https://www.cec.gov.tw/hcec/article/65212）；黨籍已於 2026-10-25 對照登記表「推薦之政黨」欄核對無誤。
 * 號次抽籤原訂 10/23，因薔琵颱風新竹市停止上班，順延至 2026-10-27 10:00 舉行（新竹市選委會 https://www.cec.gov.tw/hcec/article/65309 ；自由時報 https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5615588 ）。截至 2026-10-25 尚無結果，identity.number 待 10/27 抽籤後補上。
 * 選區範圍依中選會 114/09/26 公告（https://web.cec.gov.tw/api/file/59c5c972-d1ca-455d-9c07-ceb452c3e56f.odt）；應選席次依自由時報 2026-09-04 報導（https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5563478）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」與近期提案取自新竹市議會官網議員介紹頁。標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 查無資料的候選人照樣收錄，platforms / record 為空陣列。
 * 已知缺漏：仍查無 2026 年具體政見者：李雅雯（現任者的議會提案列於 record）。
 * 2026-10-19 第四輪補查：新增 1 則政見、0 則經歷。
 * 號次：依 10/27 抽籤結果補上（https://news.ltn.com.tw/news/politics/breakingnews/5620059；2026-10-27 註）。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-city-council-06",
  "region": "新竹市",
  "office": "第 6 選區平地原住民市議員",
  "area": "全市",
  "seats": 1,
  "note": "議員政見整理自候選人公開資料、政黨候選人介紹頁、議會官網與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，各人資料多寡差異很大，這裡照實呈現；現任者的「做過的事」以議會官網列出的近期提案為主。",
  "candidates": [
    {
      "id": "hcc6-1",
      "identity": {
        "name": "李雅雯",
        "party": "中國國民黨",
        "number": 2
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hcc6-2",
      "identity": {
        "name": "林慈愛",
        "party": "中國國民黨",
        "number": 1
      },
      "platforms": [
        {
          "topic": "welfare",
          "title": "爭取原住民族歲時祭儀跨縣市返鄉交通費補助",
          "detail": "於議會建議市府補助設籍本市的原住民族人返鄉參加歲時祭儀的跨縣市交通費。市府回應將參考他縣市做法估算預算與財源，預計下一年度規劃實施，補助期間依各族祭儀日期訂定，可於三區公所申請；補助金額尚未公布。",
          "source": "https://udn.com/news/story/7324/9807568"
        }
      ],
      "record": [
        {
          "topic": "safety",
          "text": "擔任地方民意代表期間提案建請市府辦理原住民族中高齡機車考照輔導專班，協助 45 歲以上族人。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=36"
        },
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建請市府於各行政區設置原住民族家庭服務站，建立單一服務窗口。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=36"
        },
        {
          "topic": "housing",
          "text": "擔任地方民意代表期間提案建請市府加碼經濟弱勢原住民建購及修繕住宅補助額度。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=36"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "議會官網所列上屆政見為原則性標語（教育、族群正義、福利、文化傳承），沒有可追蹤的具體項目，因此不列。",
          "promises": [],
          "rates": []
        }
      ]
    }
  ]
});

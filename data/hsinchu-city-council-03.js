/*
 * 2026 新竹市議員第 3 選區市議員（北區（客雅、中雅、育英等 15 里））：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依新竹市選舉委員會「115 年縣市議員選舉候選人登記概況彙總表」（製表 115/09/04；3 人，應選 2 席），
 * https://www.cec.gov.tw/hcec/article/64402 （附件 https://www.cec.gov.tw/api/file/8cb864fd-5945-41ec-99e6-33c0ba574d74.pdf ）。
 * 中選會 2026-10-16 審定候選人資格，新竹市市議員候選人無人不符規定（https://www.cec.gov.tw/hcec/article/65212）；黨籍已於 2026-10-25 對照登記表「推薦之政黨」欄核對無誤。
 * 號次抽籤原訂 10/23，因薔琵颱風新竹市停止上班，順延至 2026-10-27 10:00 舉行（新竹市選委會 https://www.cec.gov.tw/hcec/article/65309 ；自由時報 https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5615588 ）。截至 2026-10-25 尚無結果，identity.number 待 10/27 抽籤後補上。
 * 選區範圍依中選會 114/09/26 公告（https://web.cec.gov.tw/api/file/59c5c972-d1ca-455d-9c07-ceb452c3e56f.odt）；應選席次依自由時報 2026-09-04 報導（https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5563478）。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 現任者的「過去政見」與近期提案取自新竹市議會官網議員介紹頁。標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 查無資料的候選人照樣收錄，platforms / record 為空陣列。
 * 已知缺漏：仍查無 2026 年具體政見者：施淑婷、陳思妤（現任者的議會提案列於 record）。
 * 2026-10-19 第四輪補查：新增 1 則政見、2 則經歷。
 */
window.ELECTION_DATA.races.push({
  "id": "hsinchu-city-council-03",
  "region": "新竹市",
  "office": "第 3 選區市議員",
  "area": "北區（客雅、中雅、育英等 15 里）",
  "seats": 2,
  "note": "議員政見整理自候選人公開資料、政黨候選人介紹頁、議會官網與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，各人資料多寡差異很大，這裡照實呈現；現任者的「做過的事」以議會官網列出的近期提案為主。",
  "candidates": [
    {
      "id": "hcc3-1",
      "identity": {
        "name": "施淑婷",
        "party": "台灣民眾黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任縣市政府局處首長（民政業務），2026 年 7 月請辭參選。",
          "source": "https://newtalk.tw/news/view/2026-07-13/1046854"
        },
        {
          "topic": "economy",
          "text": "擔任縣市政府局處首長（民政業務）期間擴大辦理地方中元祭典活動，結合古蹟與廟宇資源並加入親子與文創元素，活動獲國際設計獎項。",
          "source": "https://polls.com.tw/cnews/149671/"
        }
      ],
      "past": [
        {
          "role": "參選地方民意代表",
          "period": "2022",
          "elected": false,
          "result": "未當選",
          "note": "依 2022 年選舉公報確認為該屆候選人，未列名現任議員名單，判斷未當選；未查得得票數。",
          "promises": [],
          "rates": []
        }
      ]
    },
    {
      "id": "hcc3-2",
      "identity": {
        "name": "陳思妤",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [],
      "past": []
    },
    {
      "id": "hcc3-3",
      "identity": {
        "name": "陳建名",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [
        {
          "topic": "transport",
          "title": "要求延平路地下停車場提出調整方案、確保完工",
          "detail": "針對該停車場招標四度流標、中央前瞻補助約 2.07 億元（總經費約 3.65 億元）恐被收回，要求市府提出設計優化、分期施工或財務結構檢討等調整方案，確保建設如期如質推動。",
          "source": "https://news.ltn.com.tw/news/life/breakingnews/5317264"
        }
      ],
      "record": [
        {
          "topic": "welfare",
          "text": "擔任地方民意代表期間提案建請市府於新竹神社園區規劃體育公園。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=19"
        },
        {
          "topic": "environment",
          "text": "擔任地方民意代表期間提案建請市府明確界定西雅公園水泥廣場用途並設置使用規範標示。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=19"
        },
        {
          "topic": "transport",
          "text": "擔任地方民意代表期間提案建請市府儘速整建四維路郵局路段人行空間。",
          "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=19"
        },
        {
          "topic": "transport",
          "text": "任內推動米粉寮公園、公車候車亭新建及西門國小通學步道等建設。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5609434"
        }
      ],
      "past": [
        {
          "role": "地方民意代表",
          "period": "2022–2026",
          "elected": true,
          "result": "",
          "note": "政見取自議會官網議員介紹頁（本屆）；兌現狀況未逐則查證，查不到的標為無法查證。",
          "promises": [
            {
              "topic": "environment",
              "title": "神社修復及周邊公園開闢",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=19"
            },
            {
              "topic": "transport",
              "title": "西門國小通學步道",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=19"
            },
            {
              "topic": "environment",
              "title": "客雅大公園",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=19"
            },
            {
              "topic": "economy",
              "title": "活化西市場",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=19"
            },
            {
              "topic": "welfare",
              "title": "社會住宅空間回饋設立中雅、客雅里民活動中心",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=19"
            },
            {
              "topic": "welfare",
              "title": "各里長輩共餐食堂",
              "status": "unknown",
              "note": "",
              "source": "https://www.hsinchu-cc.gov.tw/tc/councilor.aspx?mid=39&c=19"
            }
          ],
          "rates": []
        }
      ]
    }
  ]
});

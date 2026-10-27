/*
 * 2026 基隆市議員第 3 選區市議員（仁愛區）：候選人政見與經歷（去識別化整理）
 *
 * 整理日期：2026-10-16。候選人名單依基隆市選舉委員會「[115年縣市議員選舉]候選人登記情形一覽表」（115/09/04 製表，共 60 人）：
 *   https://www.cec.gov.tw/api/file/91b2447a-768e-44f4-841a-892a7ddb35fc.pdf
 *   本選區登記 5 人，應選 3 席（席次依中選會 115/08/20 選舉公告：https://web.cec.gov.tw/api/file/45d8e965-f63a-46d5-b636-7d81e47cf4d1.pdf）。
 *   10/16 審定名單在整理時尚未於中選會／基隆市選委會網站公告，故使用 9/4 登記名單；若審定名單有異動請更新。
 * 號次抽籤原訂 2026-10-23，因颱風薔琵來襲基隆市停班，基隆市選委會順延至 2026-10-27 舉行（https://www.chinatimes.com/realtimenews/20261022004643-260405），2026-10-25 時尚無結果，抽籤後請補上 identity.number。黨籍已於 2026-10-25 對照 9/4 登記一覽表推薦政黨欄核對，全部一致。
 * 候選人在資料中的排列順序沒有意義，網站顯示時每位使用者都會隨機排列。
 * 標註「本人說法」的項目只有候選人自述，沒有找到獨立查證。
 * 已知缺漏：仍查無 2026 政見者：林杏潔、鄭文婷、莊傑宇、曾維祥。
 * 2026-10-19 第四輪補查：新增 0 則政見、1 則經歷。
 * 過去政見（past）取自基隆市議會官網議員介紹頁所列政見（2022 年選舉公報原始連結已失效），兌現狀態未逐則查證，一律 unknown。
 * 2026-10-16 中選會審定：原 klc3-3 張芳麗因投票受賄罪定讞，經中選會認定不得登記，已移除（https://tw.news.yahoo.com/%E6%B8%B8%E6%99%BA%E5%BD%AC%E6%8E%B0%E4%BA%86-%E4%B8%AD%E9%81%B8%E6%9C%83%E5%85%AC%E5%91%8A%E7%99%BB%E8%A8%98%E5%90%88%E6%A0%BC%E4%BA%BA%E6%95%B8-%E5%96%AA%E5%A4%B1%E8%B3%87%E6%A0%BC%E5%8F%83%E9%81%B8%E4%BA%BA-%E6%AC%A1%E7%9C%8B-073041082.html）。審定後 4 人，應選 3 席。
 * 號次：10/27 已抽籤，但整理時（2026-10-27）尚未查得本選區的抽籤結果，number 暫為 null。
 */
window.ELECTION_DATA.races.push({
  "id": "keelung-council-03",
  "region": "基隆市",
  "office": "第 3 選區市議員",
  "area": "仁愛區",
  "seats": 3,
  "note": "議員政見整理自政黨候選人介紹頁、議會官網與新聞報導（截至 2026-10-16）。2026 年選舉公報尚未發布，多數候選人沒有完整政見文件，各人資料多寡差異很大，這裡照實呈現。",
  "candidates": [
    {
      "id": "klc3-1",
      "identity": {
        "name": "林杏潔",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": []
    },
    {
      "id": "klc3-2",
      "identity": {
        "name": "曾維祥",
        "party": "中國國民黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "2026 年 9 月遭檢方指涉於中秋節前以公共補助款購買月餅禮盒發送里民，涉犯選舉罷免法賄選罪嫌，經拘提複訊後以 50 萬元交保；偵查中，尚未起訴。報導未見本人回應。",
          "source": "https://news.ltn.com.tw/news/politics/breakingnews/5591452"
        }
      ]
    },
    {
      "id": "klc3-4",
      "identity": {
        "name": "鄭文婷",
        "party": "民主進步黨",
        "number": null
      },
      "platforms": [],
      "record": [
        {
          "topic": "governance",
          "text": "曾任地方律師公會理事長、地方政府法律顧問。",
          "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/284-klra-04"
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
              "title": "督促市府擬定全市都市更新期程，推動仁愛區都市更新",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/284-klra-04"
            },
            {
              "topic": "economy",
              "title": "改善漁市環境並將周邊打造為海鮮美食聚落",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/284-klra-04"
            },
            {
              "topic": "environment",
              "title": "督促改善少將頂、南榮新村、獅球嶺等地區高地供水",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/284-klra-04"
            },
            {
              "topic": "education",
              "title": "督促市府增加公托、公幼名額",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/284-klra-04"
            },
            {
              "topic": "environment",
              "title": "督促將鄰里公園改造為共融公園",
              "status": "unknown",
              "note": "議會官網列出的上屆政見；查無可判斷完成與否的公開資料",
              "source": "https://www.kmc.gov.tw/index.php/mac/mi/klra/284-klra-04"
            }
          ],
          "rates": []
        }
      ]
    },
    {
      "id": "klc3-5",
      "identity": {
        "name": "莊傑宇",
        "party": "無黨籍",
        "number": null
      },
      "platforms": [],
      "record": []
    }
  ]
});

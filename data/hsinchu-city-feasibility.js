/*
 * 2026 新竹市長政見：可行性評估
 *
 * 評估日期：2026-10-17。由本站依統一標準評估，不是專家意見。
 * 評估時政見已匿名並打亂順序，評估者不知道每則政見屬於哪位候選人。
 * 預算比較基準：新竹市115年度總預算歲出約437.16億元（歲入約467.27億元，市府2025年10月公布）。https://n.yam.com/Article/20251021639632
 * 一般政見與長期建設的評估面向同 new-taipei-feasibility.js。粗估數字標「粗估」並寫出算式依據。
 */
window.FEASIBILITY = Object.assign(window.FEASIBILITY || {}, {
  // 完成 10 處公共托育中心
  "hcm-1-p0": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"公共托育屬地方事項，設置經費多可申請中央補助。現況：市府已規劃10處公共托嬰中心，每處預計收托40至60名，香山區內湖公托預計2027年3月啟用、東區關東公托已於2026年2月開工裝修、北區兒少家庭福利館新建工程待發包；115年度預算亦列有擴增公托據點。政見未說明期程與經費，但已有規劃中據點可循。","sources":["https://udn.com/news/story/7324/9520674","https://n.yam.com/Article/20251021639632"]},
  // 社會住宅 8 年內達到 4,000 戶
  "hcm-1-p1": {"track":"long","level":"medium","authority":"medium","maturity":"medium","financing":"low","schedule":"medium","stage":"既有3案興建或審議中，增量部分尚無基地","horizon":"既有案場約2028至2029年完工；增量約1,500戶需另覓基地，8年內完成偏緊","reason":"現況：中雅安居638戶預計2026年底完工、建功安居743戶預計2028年中完工、金城安居922戶在都市設計審議中，均由國家住都中心興辦。要達4,000戶，需在既有規劃外再增加約1,500戶（粗估：4,000－2,503），香山區社宅基地市府仍在盤點、尚無具體案場。政見未說明增量的基地、經費與興辦方式，社宅多仰賴中央住都中心出資。","sources":["https://www.ctee.com.tw/news/20260130700991-431401"]},
  // 學童免費乳品兌換卡擴大至國中生
  "hcm-1-p2": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"學童乳品兌換屬市府教育福利事項。現況：市府已宣布自2026年11月起將國中生納入「竹市壯壯卡」，預計新增約1.7萬人。原方案每年約9,000萬元、約5.2萬人受惠；粗估國中生部分每年約2,900萬元（9,000萬÷5.2萬×1.7萬），約占115年度歲出437.16億元的0.07%。","sources":["https://news.ltn.com.tw/news/life/breakingnews/5461812","https://www.businesstoday.com.tw/article/category/183035/post/202608310010/"]},
  // 持續推動 28 校通學步道與校舍整建
  "hcm-1-p3": {"level":"high","authority":"medium","cost":"medium","timeline":"high","reason":"通學步道屬市府工程，經費多由內政部國土管理署補助、市府配合。現況：南華國中通學步道總經費逾5,524萬元，中央補助2,706萬元、市府配合款594萬元，另加碼2,225萬元，2026年完工啟用。政見未說明經費與期程，但屬延續中的計畫，個案一般1至2年可完工。","sources":["https://udn.com/news/story/7324/9624336"]},
  // 增建館舍並改善人行環境
  "hcm-1-p4": {"level":"unclear","authority":"high","cost":"unclear","timeline":"unclear","reason":"政見未說明增建何種館舍、地點、經費與期程，無法評估。相關背景：市府115年度預算列有赤土崎多功能館設計發包、兒少家庭福利館等館舍計畫，但那是現況，不是此政見內容。","sources":["https://n.yam.com/Article/20251021639632"]},
  // 推動新竹捷運，4 年內動工
  "hcm-2-p0": {"track":"long","level":"low","authority":"medium","maturity":"medium","financing":"low","schedule":"low","stage":"大新竹輕軌紅藍線整合可行性研究已於2026年3月決標，研究進行中","horizon":"可行性研究核定後還需綜合規劃、設計等階段，參照淡海輕軌從可行性研究到開工約8年","reason":"現況：交通部2025年11月核定補助整合可行性研究2,100萬元，2026年3月決標，市府預計2027年提送交通部審查。政見要在2至3年內完成綜合規劃與核定、第4年動工，並未說明經費；捷運須經中央審查核定並分擔經費，可行性研究之後還有綜合規劃、設計等階段，4年內動工與一般軌道建設期程差距大。先例：淡海輕軌2006年中央補助辦理可行性研究，2014年開工、2018年通車。","sources":["https://www.cna.com.tw/postwrite/chi/431871","https://udn.com/news/story/7241/9146569"]},
  // 重新盤點公車路網
  "hcm-2-p1": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"公車路線規劃屬市府權責。現況：市府已啟動公車路網優化規劃，將學府路等通學路廊納入評估，預計2027年上半年完成。路網調整以規劃與營運補貼為主，一任內可執行。","sources":["https://udn.com/news/story/7324/9573345"]},
  // 人本交通系統性改善
  "hcm-2-p2": {"level":"unclear","authority":"high","cost":"unclear","timeline":"unclear","reason":"政見僅列出整合行人空間、公共運輸、號誌與道路配置等方向，未說明路段、經費與期程，無法評估。現況：市府已推動學府路時段禁停、公車路網優化等個別措施。","sources":["https://udn.com/news/story/7324/9573345"]},
  // 開辦通學巡迴巴士
  "hcm-2-p3": {"level":"high","authority":"high","cost":"medium","timeline":"high","reason":"通學接駁屬市府交通與教育權責。現況：學府路沿線學校每日近6,000名學生通學，市府已在新科、建華、育賢國中開辦「安心通學專車」，並將學府路通學路廊納入公車路網優化評估。政見未說明車輛數與經費，屬中小規模營運支出，有現行先例可循。","sources":["https://udn.com/news/story/7324/9573345"]},
  // 以智慧交通管理改善東區塞車
  "hcm-2-p4": {"level":"unclear","authority":"high","cost":"unclear","timeline":"unclear","reason":"政見未公布具體做法，無法評估。現況：光復路一帶上班尖峰壅塞，市府與竹科管理局已試辦光復路一段525巷單行與增加車道；新竹縣曾以交控中心調整36處號誌，縣府稱通勤時間減少約30%。","sources":["https://udn.com/news/story/7324/9655366","https://news.pts.org.tw/article/485211"]},
  // 高中職增班並增加就近入學機會
  "hcm-2-p5": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"市立高中增班由市府核定，國立高中增班須教育部國教署同意。先例：建華國中改制完全中學，116學年度首屆招生5班176人。政見未說明增班數、經費與關埔地區的校地，新設教育設施需用地與校舍興建，一任內完成有難度。","sources":["https://udn.com/news/story/6898/9622742"]},
  // 研擬教師「科技城市加給」
  "hcm-2-p6": {"level":"low","authority":"low","cost":"unclear","timeline":"unclear","reason":"依教師待遇條例第13至16條，教師加給分職務、學術研究、地域三種，職務與學術研究加給由教育部擬訂、行政院核定，地域加給由行政院訂定。政見以「科技城市加給」名義研擬，條例未授權地方自訂加給項目，有法規障礙；政見也未公布金額，經費無法估算。","sources":["https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0150046"]},
  // 設立 AI 特色完全中學
  "hcm-2-p7": {"level":"medium","authority":"high","cost":"medium","timeline":"medium","reason":"市立高中的設立或改制由市府核定後報教育部備查。先例：建華國中改制完全中學，2026年2月宣布、7月核定，116學年度首屆招生5班176人，校舍整建另向教育部申請約2.26億元補助。政見未說明校址、經費與合作方式，新設學校若需新校地，期程可能超過一任。","sources":["https://udn.com/news/story/6898/9622742"]},
  // 推動教師留才、行政減量與特教支持
  "hcm-2-p8": {"level":"unclear","authority":"medium","cost":"unclear","timeline":"unclear","reason":"政見未公布具體做法、經費與期程，無法評估。教師加給依教師待遇條例由教育部擬訂、行政院核定；行政減量與特教支持則有部分屬市府可推動事項。","sources":["https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0150046"]},
  // 敬老愛心卡點數由 800 點提高至 1,200 點
  "hcm-2-p9": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"敬老愛心卡屬市府社福事項。現況：市府已自2026年10月1日起將每月點數由800點提高至1,200點，農會與藥局上限由200點提高至300點。政見另提跨月累積與擴大至大賣場、超商，屬使用規則調整。粗估點數提高後若全數使用，每年增加約4.3億元（粗估持卡約9萬人×400點×12月），約占115年度歲出437.16億元的1%，實際使用率通常低於全數。","sources":["https://news.ltn.com.tw/news/HsinchuCity/breakingnews/5588183"]},
  // 生育補助第一胎 5 萬元、第二胎 10 萬元、第三胎 15 萬元
  "hcm-2-p10": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"生育補助屬地方福利事項。現況：新竹市生育津貼每胎3萬元（雙胞胎6萬元）。粗估每年出生約2,500人（約45萬人口×千分之5至6的年出生率），依胎次平均每胎約8.5萬元（假設一胎45%、二胎40%、三胎以上15%），總額約2.1億元，比現行增加約1.4億元，約占115年度歲出437.16億元的0.3%。政見未說明財源，但規模不大。","sources":["https://www.setn.com/news/1892042"]},
  // 上任後盤點停擺的公共工程並逐一重啟
  "hcm-2-p11": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"政見內容是盤點停擺工程並訂期程、公開評估。現況：原展演中心工程合約終止後工區閒置，市府投入約3,136萬元將部分工區改為停車場；總圖書館已發包施工中。醫院院區涉及醫院本身與中央主管機關，非市府可單獨決定。盤點與公開期程屬市府權責，實際重啟所需經費政見未說明。","sources":["https://www.cna.com.tw/postwrite/chi/427780"]},
  // 設立政策許願池網頁，供市民線上提出建議
  "hcm-2-p12": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"架設市民建議網頁屬市府行政事項，經費小，上任後可建置。先例：臺北市有網路投票（i-Voting）與參與式預算機制，主責機關須公布結果與運用方式。政見未說明建議如何處理與回應。","sources":["https://laws.gov.taipei/law/LawSearch/LawPrint/FL077883?type=0"]},
  // 導入 AI 智慧監測預警系統因應市區淹水
  "hcm-2-p13": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"淹水監測預警屬地方防災事項，且有中央「水災智慧防災計畫第二期」（114至118年）可申請補助的現況。他縣市有先例，例如宜蘭縣設置80處淹水感測器，自2021年起以逾1,500萬元租用設備與傳輸服務，規模相對市府437.16億元歲出很小。政見未說明範圍與經費，但一任內可建置。","sources":["https://www.ctee.com.tw/news/20241003700825-431401"]},
  // 打造太空產業生態系
  "hcm-2-p14": {"level":"medium","authority":"medium","cost":"medium","timeline":"medium","reason":"國家太空中心屬中央機關，中油為國營事業，用地取得須經濟部、國科會等中央機關決定，市府角色為協調與都市計畫配合。現況：2026年5月已有跨部會協調會，經濟部將研議以重大建設、策略性更新地區等途徑推動。政見未說明經費與期程，土地重劃與用地變更通常需數年。","sources":["https://udn.com/news/story/7324/9531447"]},
  // 推動國際創新加速器
  "hcm-2-p15": {"level":"medium","authority":"high","cost":"medium","timeline":"medium","reason":"設立加速器、招商屬市府產業發展事項。現況：市府已在東門市場設「新青創加速基地」，並組團帶在地新創參展。政見未說明經費、場地與營運方式；能否吸引研發中心與創投資金受市場因素影響，一任內成效不確定。","sources":["https://www.cna.com.tw/postwrite/chi/440918"]},
  // 升級南寮漁港景觀與動線、打造香山觀光休閒廊帶
  "hcm-2-p16": {"level":"unclear","authority":"high","cost":"unclear","timeline":"unclear","reason":"南寮漁港周邊觀光設施的改善屬市府可推動事項。現況：2026年2月新的漁產直銷中心開幕，市府並開辦行經南寮漁港與香山濕地的觀光巴士香山巡迴線。政見未公布範圍、經費與期程，無法評估。","sources":["https://news.pts.org.tw/article/473809"]},
  // 改善動物園清潔與動物福利
  "hcm-2-p17": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"市立動物園由市府經營管理，清潔與動物照養屬市府權責。現況：市府已完成紅鶴區、長臂猿、浣熊區等棲地改善。政見未說明具體做法與經費，相關改善規模相對市府歲出小，一任內可推動。","sources":["https://n.yam.com/Article/20260717561502"]},
  // 公園商店提前辦理續約或分散招標
  "hcm-2-p18": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"公園內商店的招商與續約屬市府財產管理與契約事項，提前辦理或錯開招標時間是行政程序調整，幾乎不需額外經費，一任內可執行。現況：市府公園管理另面臨認養參與不足、維護人力不足等問題。","sources":["https://udn.com/news/story/7324/9565123"]},
  // 發放每人每年 16,800 元生活支持金
  "hcm-3-p0": {"level":"low","authority":"high","cost":"low","timeline":"medium","reason":"發放現金或消費額度屬地方可自行決定的福利。粗估全市約45萬人×16,800元≈75.6億元，約占115年度歲出437.16億元的17%，政見未說明總經費與財源。比較：市府115年度發放每人5,000元振興消費金，對象逾45萬人。另需建置限市內消費的卡片系統與外縣市籍青年資格認定機制。","sources":["https://n.yam.com/Article/20251021639632"]},
  // 興建 BRT 雙節公車專用道與優先道
  "hcm-3-p1": {"level":"medium","authority":"high","cost":"medium","timeline":"medium","reason":"市區道路與公車路權配置屬市府權責，公車營運多需中央補助。政見未說明路線與經費。先例：臺中市BRT耗資22億元，上路後故障頻傳，2015年改為與一般公車共用專用道；專用道需重新配置路幅，公車專用道寬度依中央標準不得小於3公尺，並涉及沿線意見協調。","sources":["https://news.pts.org.tw/article/293263","https://laws.gov.taipei/law/LawSearch/LawPrint/FL037831?type=2"]},
  // 車道寬度由 3.2 公尺縮為 2.7 公尺
  "hcm-3-p2": {"level":"low","authority":"low","cost":"medium","timeline":"medium","reason":"內政部「市區道路及附屬工程設計標準」第11條規定，主要及次要道路汽車車道寬度不得小於3公尺，服務道路不得小於2.8公尺，公車專用道不得小於3公尺。政見以2.7公尺為車道寬度，低於上述下限，除非屬特定道路等級或中央修訂標準，否則有法規障礙。減少2成車流為提出者說法，查無資料佐證。","sources":["https://laws.gov.taipei/law/LawSearch/LawPrint/FL037831?type=2"]},
  // 利益迴避法制化
  "hcm-3-p3": {"level":"medium","authority":"medium","cost":"high","timeline":"medium","reason":"現況：依公職人員利益衝突迴避法第14條，配偶、二親等以內親屬等關係人依法與機關進行補助或交易時，須事前揭露身分關係，機關須於事後連同身分關係公開。政見要將首長、局處首長與民代親屬承攬關係全部公開，超出現行法定範圍的部分涉及個人資料與中央法律，地方能否以自治法規擴大要求有疑義；檢調屬中央機關，參與審查須協調。決策留痕與政風提前參與屬市府可辦事項，經費小。","sources":["https://cna.com.tw/news/asoc/202609080205.aspx"]},
  // 設置市政透明儀表板
  "hcm-3-p4": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"公開工程進度、預算執行與標案資訊屬市府行政事項，經費以系統建置為主。公民審議預算可採參與式預算方式，先例為臺北市；預算最終仍須經市議會審議通過。一任內可建置。","sources":["https://laws.gov.taipei/law/LawSearch/LawPrint/FL077883?type=0"]},
  // 由具專業背景的文官負責市政，廢除酬庸任用
  "hcm-3-p5": {"level":"high","authority":"high","cost":"high","timeline":"high","reason":"依地方制度法第56條，一級單位主管與所屬機關首長（主計、人事、警察、稅捐、政風除外）總數的二分之一可列政務職，由市長任免。是否運用這些職位屬市長自行決定，不需額外經費，上任即可執行。「酬庸」的界定政見未說明。","sources":["https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=A0040003&flno=56"]}
});

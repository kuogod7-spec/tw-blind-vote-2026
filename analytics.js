// Google Analytics（GA4），加強型評估維持開啟（含外連點擊，會送出點擊的外部連結網址）。
// 本站不送自訂事件，評分、重要度與配對結果不會傳給 Google。隱私說明見 methodology.html 第 1 節。
(() => {
  const GA_ID = "G-RTQVWTE1GL";
  if (!/^G-[A-Z0-9]+$/.test(GA_ID) || GA_ID === "G-XXXXXXXXXX") return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
})();

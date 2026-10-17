// Google Analytics（GA4）：只統計造訪與頁面瀏覽。
// 網址不會隨選區、評分或開票結果改變，也沒有送出任何自訂事件，所以這些內容不會傳給 Google。
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

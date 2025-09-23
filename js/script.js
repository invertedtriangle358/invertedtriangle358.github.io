// アイコン → メニュー表示切替
const icon = document.getElementById("icon");
const menu = document.getElementById("popupMenu");

icon.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// 外側クリックで閉じる
document.addEventListener("click", () => {
  menu.style.display = "none";
});

// Nostr 公開鍵コピー
document.querySelector(".pubkey-text").addEventListener("click", function() {
  const text = this.getAttribute("data-copy");
  navigator.clipboard.writeText(text).then(() => {
    alert("コピーしました！");
  });
});

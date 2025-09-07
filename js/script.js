//npub copy button
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", async () => {
      const textToCopy = button.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(textToCopy);
        button.textContent = "✅"; // コピー成功で一瞬チェックマークに
        setTimeout(() => (button.textContent = "📋"), 1500);
      } catch (err) {
        console.error("コピーに失敗しました", err);
      }
    });
  });
});


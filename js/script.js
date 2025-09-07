//npub copy button
document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach(button => {
    button.addEventListener("click", async () => {
      const textToCopy = button.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(textToCopy);
        alert("コピーしました: " + textToCopy.slice(0, 10) + "...");
      } catch (err) {
        console.error("コピーに失敗しました", err);
      }
    });
  });
});


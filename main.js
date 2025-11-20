/* --------------------------
   دکمه تغییر زبان (FA <-> EN)
--------------------------- */

const langBtn = document.getElementById("lang-switch");

if (langBtn) {
  langBtn.addEventListener("click", () => {
    const currentPath = window.location.pathname;

    // اگر در نسخه فارسی هستیم → برو به پوشه /en
    if (!currentPath.startsWith("/en")) {
      const newPath = "/en" + currentPath;
      window.location.href = newPath;
    }
    // اگر در نسخه انگلیسی هستیم → برگرد فارسی
    else {
      const newPath = currentPath.replace("/en", "");
      window.location.href = newPath === "" ? "/" : newPath;
    }
  });
}

/* --------------------------
   اسکرول نرم برای کل سایت
--------------------------- */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* --------------------------
   افکت ظاهر شدن کارت‌ها
--------------------------- */

const cards = document.querySelectorAll(".card");

const showCards = () => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add("show-card");
    }
  });
};

window.addEventListener("scroll", showCards);
window.addEventListener("load", showCards);


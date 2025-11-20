// -----------------------------
// Language Switch Button
// -----------------------------
const langSwitchBtn = document.getElementById("lang-switch");

if (langSwitchBtn) {
  langSwitchBtn.addEventListener("click", () => {
    // اگر در نسخه انگلیسی هستیم، برو به فارسی
    window.location.href = "../index.html"; // مسیر نسخه فارسی
  });
}

// -----------------------------
// Optional: Add dynamic effects for hero or cards
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    card.classList.add("fade-in");
  });
});


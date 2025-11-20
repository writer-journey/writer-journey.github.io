// -----------------------------
//  محافظت از داشبورد
// -----------------------------

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    // اگر کاربر وارد نشده، هدایت به صفحه ورود
    window.location.href = "login.html";
    return;
  }

  // اگر وارد شده، اطلاعات کاربر را نمایش بده
  document.getElementById("user-email").innerText = user.email;

  // اگر نام (displayName) داشت نشان بده، اگر نه "کاربر عزیز"
  document.getElementById("user-name").innerText =
    user.displayName ? user.displayName : "کاربر عزیز";
});

// -----------------------------
//  دکمه خروج از حساب کاربری
// -----------------------------
const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
      window.location.href = "login.html";
    });
  });
}


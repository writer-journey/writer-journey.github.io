// -----------------------------
//  ثبت‌نام کاربر
// -----------------------------
const registerForm = document.getElementById("register-form");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // افزودن displayName
        user.updateProfile({ displayName: username })
          .then(() => {
            alert("ثبت‌نام موفق! خوش آمدید " + username);
            window.location.href = "dashboard.html";
          });
      })
      .catch((error) => {
        alert("خطا در ثبت‌نام: " + error.message);
      });
  });
}

// -----------------------------
//  ورود کاربر
// -----------------------------
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("ورود موفق! خوش آمدید " + (user.displayName || ""));
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert("خطا در ورود: " + error.message);
      });
  });
}


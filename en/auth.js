// -----------------------------
//  User Registration
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

        // Set displayName
        user.updateProfile({ displayName: username })
          .then(() => {
            alert("Registration successful! Welcome, " + username);
            window.location.href = "dashboard.html";
          });
      })
      .catch((error) => {
        alert("Registration error: " + error.message);
      });
  });
}

// -----------------------------
//  User Login
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
        alert("Login successful! Welcome " + (user.displayName || ""));
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert("Login error: " + error.message);
      });
  });
}


// -----------------------------
// Initialize Firebase (already in firebaseConfig.js)
// -----------------------------

// -----------------------------
// Get current user info
// -----------------------------
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("user-name").textContent = user.displayName || user.email;
  } else {
    // Redirect to login if not logged in
    window.location.href = "login.html";
  }
});

// -----------------------------
// Logout
// -----------------------------
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    firebase.auth().signOut()
      .then(() => {
        alert("You have been logged out.");
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert("Logout error: " + error.message);
      });
  });
}

// -----------------------------
// Messages section
// -----------------------------
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const messagesList = document.getElementById("messages-list");

// Simple local storage for demonstration
let messages = JSON.parse(localStorage.getItem("messages")) || [];

function renderMessages() {
  messagesList.innerHTML = "";
  messages.forEach((msg, index) => {
    const div = document.createElement("div");
    div.classList.add("message-item");
    div.textContent = msg;
    messagesList.appendChild(div);
  });
}

renderMessages();

if (messageForm) {
  messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = messageInput.value.trim();
    if (msg) {
      messages.push(msg);
      localStorage.setItem("messages", JSON.stringify(messages));
      renderMessages();
      messageInput.value = "";
    }
  });
}


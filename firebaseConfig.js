// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpwlUIEaZfbxy1G8fXh9Cv9SiEDczTpD0",
  authDomain: "my-writer-website.firebaseapp.com",
  projectId: "my-writer-website",
  storageBucket: "my-writer-website.firebasestorage.app",
  messagingSenderId: "161488085486",
  appId: "1:161488085486:web:b45958464072abe9aeaeff",
  measurementId: "G-5W0YRYB9TZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

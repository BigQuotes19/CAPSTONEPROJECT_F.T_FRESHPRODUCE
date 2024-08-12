// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuTlHAnE1Q1YimuMO_VmqXfRGxP0h1E8M",
  authDomain: "capstoneprojectftp.firebaseapp.com",
  projectId: "capstoneprojectftp",
  storageBucket: "capstoneprojectftp.appspot.com",
  messagingSenderId: "137884357037",
  appId: "1:137884357037:web:d8381110ef9681c263d124",
  measurementId: "G-SQXXDWNRTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

function addData() {
  let username = document.getElementById('username');
  let password = document.getElementById('password');

  set(ref(db, 'usercredentials/' + username.value), {
    username: username.value,
    password: password.value
  })
  .then(() => {
    console.log('Data added');
  })
  .catch((error) => {
    console.error('Error adding data: ', error);
  });
}

function readData() {
  const usercredentials = get(ref(db, 'usercredentials/' + username.value));
  if (usercredentials.exists()) {
    console.log(usercredentials.val());
  } else {
    console.log('No data available');
  }
}
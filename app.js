import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "AIzaSyD3tCYdk3nRxDBw_kmDcI93LdrLvQ9rTLs",
  authDomain: "credential-assignment.firebaseapp.com",
  projectId: "credential-assignment",
  storageBucket: "credential-assignment.firebasestorage.app",
  messagingSenderId: "773064671706",
  appId: "1:773064671706:web:c0ea70e3b533625b0f00e3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.login = async function () {
  alert("button clicked");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential =
      await signInWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      verified: true,
      time: new Date()
    });

    alert("Login successful and stored!");
  } catch (error) {
    alert(error.message);
  }
};

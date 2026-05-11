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
  apiKey: "AIzaSyD9OCCV2F398rynYYNDr3zzbthWgsXEAik",
  authDomain: "credential2-1f928.firebaseapp.com",
  projectId: "credential2-1f928",
  storageBucket: "credential2-1f928.firebasestorage.app",
  messagingSenderId: "587857995583",
  appId: "1:587857995583:web:2bffc241f3638e57b0958a",
  measurementId: "G-DJYZ97NPGC"
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

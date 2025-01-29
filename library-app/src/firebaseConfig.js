// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgfqtTEHhnqS4W0s4Ah7uJ0Z5m_iyJIMU",
  authDomain: "pristine-clean-68669.firebaseapp.com",
  databaseURL: "https://pristine-clean-68669-default-rtdb.firebaseio.com",
  projectId: "pristine-clean-68669",
  storageBucket: "pristine-clean-68669.firebasestorage.app",
  messagingSenderId: "1065327147654",
  appId: "1:1065327147654:web:2f8af1a79cf127b804ef07",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, createUserWithEmailAndPassword, ref, set, onValue };
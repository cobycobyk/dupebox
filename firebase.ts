import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkQKKdGMwc7npw94qtGKL8drw3nMPgrZ4",
  authDomain: "dupebox-77a9a.firebaseapp.com",
  projectId: "dupebox-77a9a",
  storageBucket: "dupebox-77a9a.appspot.com",
  messagingSenderId: "161809065091",
  appId: "1:161809065091:web:2e0cfa466d32b3693967b6"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
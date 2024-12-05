'use client'; // إذا كان يتم استخدام هذا الكود في واجهة المستخدم فقط

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANU-wv18gDe7bXtmjJ5xbvium5ctNA",
  authDomain: "facebook-50bb9.firebaseapp.com",
  projectId: "facebook-50bb9",
  storageBucket: "facebook-50bb9.appspot.com", // تعديل إلى ".appspot.com"
  messagingSenderId: "682532353107",
  appId: "1:682532353107:web:c83d83667b77a6254202a6",
};

// إنشاء أو استرجاع تطبيق Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// إنشاء أو استرجاع Firestore و Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

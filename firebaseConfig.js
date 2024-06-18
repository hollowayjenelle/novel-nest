import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "novel-nest-b01d1.firebaseapp.com",
  projectId: "novel-nest-b01d1",
  storageBucket: "novel-nest-b01d1.appspot.com",
  messagingSenderId: "1073685941371",
  appId: "1:1073685941371:web:853a77d80e9147794ca6de",
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhfUEQSG03ROfd327rVvvWc_QKsLTbYW8",
  authDomain: "word-race-project.firebaseapp.com",
  projectId: "word-race-project",
  storageBucket: "word-race-project.appspot.com",
  messagingSenderId: "1095205891850",
  appId: "1:1095205891850:web:1d63128633c70cc51654f3",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

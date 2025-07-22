// config/FirebaseConf.js

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9P0GZhXXyGi3qAuKSPWvAWJJVMFGUP6Y",
  authDomain: "whatsapp-clone-1465a.firebaseapp.com",
  projectId: "whatsapp-clone-1465a",
  storageBucket: "whatsapp-clone-1465a.appspot.com", // ✅ fix: ".app" should be ".app**spot**.com"
  messagingSenderId: "483861595226",
  appId: "1:483861595226:web:3136b929d6667991948463",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };

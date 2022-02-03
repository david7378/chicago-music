import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

    apiKey: "AIzaSyBulEMWG06ZnlV1gt-8Fh9Vf5Ak1Kgc0II",  
    authDomain: "react-music-player-d71d8.firebaseapp.com",  
    projectId: "react-music-player-d71d8",      
    storageBucket: "react-music-player-d71d8.appspot.com",  
    messagingSenderId: "1037724228541",  
    appId: "1:1037724228541:web:94ed681e3bbd53609f90d4",  
    measurementId: "G-L03R63VQTV"
  
  };
  

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
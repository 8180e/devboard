import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD20D8Odh7o4PupCo8qvS3EkIQXrhKmPIQ",
  authDomain: "devboard-fad56.firebaseapp.com",
  projectId: "devboard-fad56",
  storageBucket: "devboard-fad56.firebasestorage.app",
  messagingSenderId: "457795965658",
  appId: "1:457795965658:web:3211bd29c775f42d758be3",
  measurementId: "G-EPD9CET6TR",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };

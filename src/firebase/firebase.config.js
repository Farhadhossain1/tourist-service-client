// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQJgJ2SdeocSu0YXoU3pwaMP2nCdCL56g",
  authDomain: "tourist-service-client.firebaseapp.com",
  projectId: "tourist-service-client",
  storageBucket: "tourist-service-client.appspot.com",
  messagingSenderId: "501457418354",
  appId: "1:501457418354:web:48002e7a05407f91d7eaeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
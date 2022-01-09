// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUfrlrO2fJfhqPphZkbIK-_ECFdy4Ra3w",
  authDomain: "abhishek-todoapp.firebaseapp.com",
  projectId: "abhishek-todoapp",
  storageBucket: "abhishek-todoapp.appspot.com",
  messagingSenderId: "712233849580",
  appId: "1:712233849580:web:8ebf38522baaa005d34bc9"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC94P_5QOQBxAmrF-fLoxHiNd0v7CAsFdE",
  authDomain: "person-service-9f04b.firebaseapp.com",
  projectId: "person-service-9f04b",
  storageBucket: "person-service-9f04b.appspot.com",
  messagingSenderId: "957846494991",
  appId: "1:957846494991:web:005432c317b31e5f7de87a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
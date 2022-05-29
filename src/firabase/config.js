// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw2rS8QWNc39KYczEeNWNPVml86xD3k-s",
    authDomain: "wineshope-91498.firebaseapp.com",
    projectId: "wineshope-91498",
    storageBucket: "wineshope-91498.appspot.com",
    messagingSenderId: "997002201009",
    appId: "1:997002201009:web:b7925b6cfe727e657d5f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function getFirestoreApp() {
    return app
}
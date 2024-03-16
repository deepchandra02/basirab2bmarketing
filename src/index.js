import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ThemeProvider } from "@material-tailwind/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv9K47JyDPPv5W4LjR-IsbGDxHIYfZ98g",
  authDomain: "basirab2bmarketing.firebaseapp.com",
  projectId: "basirab2bmarketing",
  storageBucket: "basirab2bmarketing.appspot.com",
  messagingSenderId: "689227499532",
  appId: "1:689227499532:web:aa4255e4c28a3456870629",
  measurementId: "G-F3QJH1E0W5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

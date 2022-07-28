import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY13ugtAgV5qafBE9I0e9lxJCZ15pqpQY",
  authDomain: "coderhouse-ecommerce-89075.firebaseapp.com",
  projectId: "coderhouse-ecommerce-89075",
  storageBucket: "coderhouse-ecommerce-89075.appspot.com",
  messagingSenderId: "722676481275",
  appId: "1:722676481275:web:38f466d917d9c67efec45e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
    {/*
    Comentado ya que al traer datos de apis, duplicaba consultas
    <React.StrictMode>
    <App />
    </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

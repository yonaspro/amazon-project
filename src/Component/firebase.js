import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB8A3a1e8rIzVfSs40VZEw-yTnI6cm58qs",
	authDomain: "fir-2ad56.firebaseapp.com",
	projectId: "fir-2ad56",
	storageBucket: "fir-2ad56.appspot.com",
	messagingSenderId: "375858248050",
	appId: "1:375858248050:web:27ecb842219037b74f45eb",
	measurementId: "G-6FKT0QY6S7",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };

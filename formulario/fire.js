 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCJztbIhQqeZFugeHnAQtHOVOzoW19v0W4",
    authDomain: "angular-crud-firebase-9c8e4.firebaseapp.com",
    databaseURL: "https://angular-crud-firebase-9c8e4.firebaseio.com",
    projectId: "angular-crud-firebase-9c8e4",
    storageBucket: "angular-crud-firebase-9c8e4.appspot.com",
    messagingSenderId: "501917133469",
    appId: "1:501917133469:web:64097d0c931de7f9dac274"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();// importo firestore

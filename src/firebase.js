import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDBu2ti4KvuHcGpTBAdciPJQHr9-rnxu9w",
    authDomain: "react-tinder-clone-7a126.firebaseapp.com",
    projectId: "react-tinder-clone-7a126",
    storageBucket: "react-tinder-clone-7a126.appspot.com",
    messagingSenderId: "127639457983",
    appId: "1:127639457983:web:1f016fb16b92ff7fa0360a",
    measurementId: "G-8VEB8KXG0J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;    
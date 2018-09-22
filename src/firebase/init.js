import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyD9DeyZDsZDvzZXy0HzWN3jQ2uXckR9qes",
    authDomain: "weandyou-7c667.firebaseapp.com",
    databaseURL: "https://weandyou-7c667.firebaseio.com",
    projectId: "weandyou-7c667",
    storageBucket: "weandyou-7c667.appspot.com",
    messagingSenderId: "64203246790"
});

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase;
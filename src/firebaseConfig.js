import firebase from 'firebase';

export default firebase.initializeApp({
    apiKey: "AIzaSyBlnjpvP3XvPgHVp3jbOl5npGxoe_WW4FA",
    authDomain: "millennials-f135c.firebaseapp.com",
    databaseURL: "https://millennials-f135c.firebaseio.com",
    projectId: "millennials-f135c",
    storageBucket: "millennials-f135c.appspot.com",
    messagingSenderId: "426162280548"
});

export const db = firebase.firestore();

const settings = {timestampsInSnapshots: true};
db.settings(settings);
db.enablePersistence()
  .then(function() {
    // Initialize Cloud Firestore through firebase
    firebase.firestore();
  })
  .catch(function(err) {
    if (err.code === 'failed-precondition') {
      console.log('Multiple tabs open, persistence can only be enabled in one tab at a a time.');
    } else if (err.code === 'unimplemented') {
      console.log('The current browser does not support all of the features required to enable persistence');
    }
  });
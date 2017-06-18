
import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyAE0HRt3eetcNJoAZ96cxIWoAUZ1y0QQPI",
    authDomain: "turnout-7e007.firebaseapp.com",
    databaseURL: "https://turnout-7e007.firebaseio.com",
    projectId: "turnout-7e007",
    storageBucket: "turnout-7e007.appspot.com",
    messagingSenderId: "613370042234"
  };

  export const firebaseApp = firebase.initializeApp(config)
  export const eventsRef = firebaseApp.database().ref().child('events')


import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDoidW8rpwaX1OtUm3aZ04-oBlZM9YKsvk",
    authDomain: "clone-f91ac.firebaseapp.com",
    projectId: "clone-f91ac",
    storageBucket: "clone-f91ac.appspot.com",
    messagingSenderId: "839613280119",
    appId: "1:839613280119:web:c6a687e520a298171a3b72",
    measurementId: "G-ZPQ5JDZ3WD"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()

  export {auth, provider}
  export default db
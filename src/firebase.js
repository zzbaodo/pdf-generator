import firebase from "firebase"
import "firebase/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyBKu7RoL_Kri2ZXfaeaUqfTc7EGk1uVBXA",
  authDomain: "detbeauty-f6565.firebaseapp.com",
  projectId: "detbeauty-f6565",
  storageBucket: "detbeauty-f6565.appspot.com",
  messagingSenderId: "1078288371950",
  appId: "1:1078288371950:web:e2c78c4f47a9b80cd6a3ff",
})
const storage = firebase.storage()
export default firebase
export { storage }

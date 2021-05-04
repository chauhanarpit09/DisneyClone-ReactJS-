import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDtB9eSRsVeNRsBt83LJETJBGnRidSHuG8',
  authDomain: 'disney-clone-f750b.firebaseapp.com',
  projectId: 'disney-clone-f750b',
  storageBucket: 'disney-clone-f750b.appspot.com',
  messagingSenderId: '132800185078',
  appId: '1:132800185078:web:a24d9fb8f180b9603022d7',
  measurementId: 'G-ZX00JVCSD0'
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db

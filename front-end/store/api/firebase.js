import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA0fA9IZ5Tp_8yKWXG-cRoQVhCz7elMXb0',
  authDomain: 'dashboard-automatica.firebaseapp.com',
  databaseURL: 'https://dashboard-automatica-default-rtdb.firebaseio.com',
  projectId: 'dashboard-automatica',
  storageBucket: 'dashboard-automatica.appspot.com',
  messagingSenderId: '769386704098',
  appId: '1:769386704098:web:3a4b1743695d78fc7542bb',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const database = firebase.database().ref()
export const storage = firebase.storage().ref()
export const auth = firebase.auth()
export default firebase

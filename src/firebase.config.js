import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3YgO3oLsRMAPJjX5AtoF-pgMpKklB_jo",
  authDomain: "house-sold-me.firebaseapp.com",
  projectId: "house-sold-me",
  storageBucket: "house-sold-me.appspot.com",
  messagingSenderId: "134433595923",
  appId: "1:134433595923:web:6bff5e9bf9cf40d0d895e6"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()

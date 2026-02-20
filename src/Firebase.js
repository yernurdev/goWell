// src/Firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getAnalytics, isSupported } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyCHeMunqIE37kfFSoQFWq3BEKx-Nc4AN1A",
  authDomain: "gowell-agent.firebaseapp.com",
  projectId: "gowell-agent",
  storageBucket: "gowell-agent.appspot.com",
  messagingSenderId: "666251258121",
  appId: "1:666251258121:web:731c5fa0707bc69ff84bd8",
  measurementId: "G-CCMHFHP6ZF"
}


const app = initializeApp(firebaseConfig)


export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)


let analytics = null
if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app)
  })
}

export { analytics }
export default app

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics" // ← этого у тебя не было

const firebaseConfig = {
  apiKey: "AIzaSyAWeH0iD8tTRMNuW6TfCTvcI9KODh_TL2g",
  authDomain: "gowell-cc836.firebaseapp.com",
  projectId: "gowell-cc836",
  storageBucket: "gowell-cc836.appspot.com", // ❗ исправь — не .firebasestorage.app, а .appspot.com
  messagingSenderId: "644764225369",
  appId: "1:644764225369:web:f762b68790325fbc55c648",
  measurementId: "G-FXKVH4QD54"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null
export default app

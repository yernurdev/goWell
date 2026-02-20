import { db } from '../Firebase';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';

/**
 * Adds points to the user's profile.
 * @param {string} uid - User ID
 * @param {number} amount - Amount of points to add
 */
export async function addPoints(uid, amount) {
    if (!uid) return;

    // Update Local Storage for immediate UI feedback
    try {
        const localPoints = parseInt(localStorage.getItem('gowell_points') || '0', 10);
        localStorage.setItem('gowell_points', (localPoints + amount).toString());
    } catch (e) {
        console.warn('LocalStorage error:', e);
    }

    // Update Firestore
    try {
        const userRef = doc(db, 'profiles', uid);
        // Use merge: true to create the doc if it doesn't exist, though it should usually exist
        await setDoc(userRef, { points: increment(amount) }, { merge: true });
    } catch (e) {
        console.error('Error adding points to Firestore:', e);
    }
}

/**
 * Gets the current points for a user.
 * @param {string} uid - User ID
 * @returns {Promise<number>} - The user's points
 */
export async function getPoints(uid) {
    if (!uid) return 0;

    try {
        const userRef = doc(db, 'profiles', uid);
        const snap = await getDoc(userRef);
        if (snap.exists()) {
            const data = snap.data();
            const points = data.points || 0;
            // Sync local storage
            localStorage.setItem('gowell_points', points.toString());
            return points;
        }
    } catch (e) {
        console.error('Error fetching points:', e);
    }

    // Fallback to local
    return parseInt(localStorage.getItem('gowell_points') || '0', 10);
}

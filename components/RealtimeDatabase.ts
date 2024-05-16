import { auth, database } from "../firebase";
import { ref, get, onValue, getDatabase } from "firebase/database";

export async function ReadRealtimeDatabase(uid: string) {
    try {
        const dbRef = ref(database, `users/${uid}`);
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
        }
    } catch (error) {
        console.log("Error reading data:", error);
    }
} 
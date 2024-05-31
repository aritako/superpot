import { auth, database } from "../firebase";
import { ref, get, set } from "firebase/database";

export async function ReadData(uid: string, path: string) {
    try {
        console.log("Getting data");
        const sensRef = ref(database, `users/${uid}/${path}`);
        const snapshot = await get(sensRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
        }
    } catch (error) {
        console.log("Error reading data:", error);
    }
}

// generalize this function to update any data path
export async function SetData(uid: string, data: boolean, path: string) {
    try {
        const dbRef = ref(database, `users/${uid}/actu/${path}`);
        await set(dbRef, data);
    } catch (error) {
        console.log("Error updating data:", error);
    }
}
import { auth, database } from "../firebase";
import { ref, get, set } from "firebase/database";

export async function ReadData(uid: string, path: string) {
    try {
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

export async function SetData(uid: string, data: boolean) {
    try {
        const dbRef = ref(database, `users/${uid}/actu/lidOpen`);
        await set(dbRef, data);
    } catch (error) {
        console.log("Error updating data:", error);
    }
}
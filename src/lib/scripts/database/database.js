import {getFirestore , doc ,setDoc} from "firebase/firestore"
import { app } from "../../../firebaseConfig";
export const db = getFirestore(app);
export async function createUserDocument(uid) {
    try {
        const dbRef = doc(db , "users",uid);
        setDoc(dbRef,{
            data:[]
        })
    } catch (error) {
        console.log(error);
    }
}
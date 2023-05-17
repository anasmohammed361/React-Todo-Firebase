import { getAdditionalUserInfo,signInWithPopup,GoogleAuthProvider,getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,setPersistence,browserLocalPersistence, signOut as signOutFirebase } from "firebase/auth";
import { app } from "../../../firebaseConfig";
import { createUserDocument } from "../database/database";
export const auth = getAuth(app);
export async function logIn(email,password) {
    try {
        await setPersistence(auth,browserLocalPersistence)
       const result = await signInWithEmailAndPassword(auth, email, password)
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}


export async function signUp(email,password) {
    try {
        await setPersistence(auth,browserLocalPersistence)
        const result = await createUserWithEmailAndPassword(auth,email,password);
        await createUserDocument(result.user.uid)
    } catch (error) {
    console.log(error);        
    }
}

export async function signOut(){
    try {
        await signOutFirebase(auth);
    } catch (error) {
        console.log(error);
    }
}

export async function continueWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth,provider);
        const additionalInfo = getAdditionalUserInfo(result);
        if(additionalInfo.isNewUser)
            createUserDocument(result.user.uid);
    } catch (error) {
        console.log(error);
    }
}
import {getFirestore , doc ,setDoc,updateDoc , arrayUnion, getDoc} from "firebase/firestore"
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
export async function addTodo(uid,title,content){
    try {
        const dbRef = doc(db,"users",uid);
        const todoData = {
            id:crypto.randomUUID(),
            title,
            content,
            done:false
        } 
        await updateDoc(dbRef,{
            data:arrayUnion(todoData)
        })
    } catch (error) {
        console.log(error);
    }
}

export async function deleteTodo(uid,id) {
    try {
        const dbRef = doc(db,"users",uid); 
        const data =await getDoc(dbRef);
        if(data.exists()){
            const arr = data.data().data;
            const deltedArr = arr.filter(elem=>elem.id !== id)
            await updateDoc(dbRef,{
                data:deltedArr
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export async function markAsDone(uid,id) {
    try {
        const dbRef = doc(db,"users",uid); 
        const data =await getDoc(dbRef);
        if(data.exists()){
            const arr = data.data().data;
            const updatedArr = arr.map(elem=>{
                if(elem.id === id){
                    elem.done = !elem.done
                }
                return elem
            })
    
            await updateDoc(dbRef,{
                data:updatedArr
            })
        }
    } catch (error) {
        console.log(error);
    }
}
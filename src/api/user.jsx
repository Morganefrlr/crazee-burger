import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu2 } from "../utils/Data"

export const getUser = async (userId) => {
    const docRef = doc(db, "users" , userId)
   const resultat = await getDoc(docRef)
    if(resultat.exists()){
        const user = resultat.data()
        return user
    }
}



export const createUser = (userId) =>{
    const docRef = doc(db, 'users', userId)
    const newDoc = {
        username:userId,
        menu:fakeMenu2,
    }
    setDoc(docRef, newDoc)
}



export const authUser = async (userId) =>{
    const createdUser = await getUser(userId)

    if(!createdUser){
        createUser(userId)
    }
}
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu1, fakeMenu2 } from "../utils/Data"

export const getUser = async (idUser) => {
    const docRef = doc(db, "users" , idUser)
    
    
   const resultat = await getDoc(docRef)
    if(resultat.exists()){
        const user = resultat.data()
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
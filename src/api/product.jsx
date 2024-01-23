import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncBothMenus = (userId, menuUpdated) => {
    console.log('ok')
    const docRef = doc(db, 'users', userId)
    const newDoc = {
        username:userId,
        menu:menuUpdated,
    }
    setDoc(docRef, newDoc)
}
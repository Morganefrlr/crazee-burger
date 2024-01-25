import { getMenu } from "../../../../api/product";
import { fakeMenu2 } from "../../../../utils/Data";
import { getLocalStorage } from "../../../../utils/localStorage";






const initializeMenu = async (username, setMenuData) => {
    const menuReceived = await getMenu(username);
    setMenuData(menuReceived)
    if(!menuReceived){
    setMenuData(fakeMenu2)
    }
  
}
  
  
const initializeCart = async (username,setCart) => {
    const cartReceived = getLocalStorage(username);
    setCart(cartReceived)
  
}


export const initialiseUserSession = async (username, setMenuData, setCart) =>{
 await initializeMenu(username, setMenuData)
 initializeCart(username,setCart)
}

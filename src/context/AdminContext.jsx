import { createContext } from "react";

export default createContext ({
    adminMode: false,
    setAdminMode: () => {},

    openAdminPanel: false,
    setOpenAdminPanel: () => {},



    openAddProduct: true,
    setOpenAddProduct: () => {},

    openEditProduct:false,
    setOpenEditProduct: () => {},

    tabSelected:'add',
    setTabSelected: () =>{},


    menuData:[],
    setMenuData: () =>{},

})
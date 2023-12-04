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

    openEditProductId:'',
    setOpenEditProductId: () =>{},

    tabSelected:'add',
    setTabSelected: () =>{},


    menuData:[],
    setMenuData: () =>{},

    handleAdd : () =>{},
    handleDelete : () =>{},
    handleGenerate: () =>{},

    addMenuInputsValue:'',
    setAddMenuInputsValue: () =>{},


})
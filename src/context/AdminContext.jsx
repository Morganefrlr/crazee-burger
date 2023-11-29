import { createContext } from "react";

export default createContext ({
    adminMode: false,
    setAdminMode: () => {},

    openEdit: false,
    setOpenEdit: () => {},

    openAddProduct: true,
    setOpenAddProduct: () => {},

    openEditProduct:false,
    setOpenEditProduct: () => {},
})
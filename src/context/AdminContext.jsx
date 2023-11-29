import { createContext } from "react";

export default createContext ({
    openEdit: false,
    setOpenEdit: () => {},

    openAddProduct: false,
    setOpenAddProduct: () => {},

    openEditProduct:false,
    setOpenEditProduct: () => {},
})
import { createContext } from "react";

export default createContext({
  adminMode: false,
  setAdminMode: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  tabSelected: "add",
  setTabSelected: () => {},

  newProduct: {},
  setNewProduct: () => {},


  menuData: [],
  setMenuData: () => {},

  handleAdd: () => {},
  handleDelete: () => {},
  handleGenerate: () => {},


  addMenuInputsValue: "",
  setAddMenuInputsValue: () => {},
});

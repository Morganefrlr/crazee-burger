
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

  productSelected:{},
  setProductSelected: () => {},

  menuData: [],
  setMenuData: () => {},

  handleAdd: () => {},
  handleDelete: () => {},
  handleGenerate: () => {},
  handleEdit: () => {},

  addMenuInputsValue: "",
  setAddMenuInputsValue: () => {},


  inputTitleRef : {},


});

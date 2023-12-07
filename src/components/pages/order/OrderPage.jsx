import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./Main/Main";

import AdminContext from "../../../context/AdminContext";
import {  useRef, useState } from "react";
import { fakeMenu2 } from "../../../utils/Data";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deepCloneArray } from "../../../utils/deepCloneArray";

const OrderPage = () => {
  const params = useParams();
  const name = params.id;

  
  /////////////////////////////////////////////// ADMIN CONTEXT ///////////////////////////////////////////////

  const [adminMode, setAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const [tabSelected, setTabSelected] = useState("add");
  const [menuData, setMenuData] = useState(fakeMenu2);
  const [addMenuInputsValue, setAddMenuInputsValue] = useState("");
  const inputTitleRef = useRef()

  const handleAdd = (newProduct) => {
   const menuClone = deepCloneArray(menuData)
    const menuUpdated = [newProduct, ...menuClone];
    setMenuData(menuUpdated);
  };

  const handleDelete =  (idToDelete) => {
    const menuClone = deepCloneArray(menuData)
    const menuUpdated = menuClone.filter((el) => el.id !== idToDelete);
    setMenuData(menuUpdated);
    
    if(idToDelete === productSelected.id){
      console.log('ok')
      setProductSelected(EMPTY_PRODUCT)
    }

    
  };

  const handleEdit = (productToEdit) => {
    const menuClone = deepCloneArray(menuData)
    const indexProduct = menuClone.findIndex((el) => el.id === productToEdit.id);
    menuClone[indexProduct] = productToEdit;
    setMenuData(menuClone);
  };

  const handleGenerate = () => {
    setMenuData(fakeMenu2);
  };

  const adminProviderValue = {
    adminMode,
    setAdminMode,
    isCollapsed,
    setIsCollapsed,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    tabSelected,
    setTabSelected,
    menuData,
    setMenuData,
    addMenuInputsValue,
    setAddMenuInputsValue,
    handleAdd,
    handleDelete,
    handleGenerate,
    handleEdit,
    inputTitleRef,

  };

  ///////////////////////////////////////////////

  return (
    <OrderMainStyled>
      <AdminContext.Provider value={adminProviderValue}>
        <Navbar name={name} />
        <Main />
        <ToastContainer position="bottom-right" theme="dark" autoClose={1500} />
      </AdminContext.Provider>
    </OrderMainStyled>
  );
};

const OrderMainStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default OrderPage;

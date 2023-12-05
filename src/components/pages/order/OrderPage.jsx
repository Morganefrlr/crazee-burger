import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./Main/Main";

import AdminContext from "../../../context/AdminContext";
import { useState } from "react";
import { fakeMenu2 } from "../../../utils/Data";
import { EMPTY_PRODUCT } from "../../../enums/product";

const OrderPage = () => {
  const params = useParams();
  const name = params.id;

  ///// Admin Context /////

  const [adminMode, setAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [tabSelected, setTabSelected] = useState("add");
  const [menuData, setMenuData] = useState(fakeMenu2);
  const [addMenuInputsValue, setAddMenuInputsValue] = useState("");
  

  const handleAdd = (newProduct) => {
    const menuCopy = [...menuData];
    const menuUpdated = [newProduct, ...menuCopy];
    setMenuData(menuUpdated);
  };

  const handleDelete = (idToDelete) => {
    const menuCopy = [...menuData];
    const menuUpdated = menuCopy.filter((el) => el.id !== idToDelete);
    setMenuData(menuUpdated);
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
    tabSelected,
    setTabSelected,
    menuData,
    setMenuData,
    addMenuInputsValue,
    setAddMenuInputsValue,
    handleAdd,
    handleDelete,
    handleGenerate,

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

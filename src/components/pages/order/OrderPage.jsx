import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./Main/Main";
import AdminContext from "../../../context/AdminContext";
import { useEffect, useState } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useCart } from "../../../hooks/useCart";
import { getMenu } from "../../../api/product";
import { getUser } from "../../../api/user";

const OrderPage = () => {
  const params = useParams();
  const username = params.id;

  const [adminMode, setAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [tabSelected, setTabSelected] = useState("add");
  const [addMenuInputsValue, setAddMenuInputsValue] = useState("");

  const {
    menuData,
    setMenuData,
    handleAdd,
    handleDelete,
    handleEdit,
    handleGenerate,
    productSelected,
    setProductSelected,
    inputTitleRef,
  } = useMenu();

  const { cart, handleAddProductCart, handleDeleteProductInCart } = useCart();

  const adminProviderValue = {
    username,
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
    cart,
    handleAddProductCart,
    handleDeleteProductInCart,
  };

  ///////////////////////////////////////////////
const initializeMenu = async () => {
  const menuRecu = await getMenu(username);
  console.log(menuRecu)
  setMenuData(menuRecu)
}
  useEffect(() => {
    initializeMenu()
  }, []);



  return (
    <OrderMainStyled>
      <AdminContext.Provider value={adminProviderValue}>
        <Navbar name={username} />
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

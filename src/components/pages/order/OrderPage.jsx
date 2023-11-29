import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./Main/Main";

import AdminContext from "../../../context/AdminContext";
import { useState } from "react";

const OrderPage = () => {
  const params = useParams();
  const name = params.id;
  const [adminMode, setAdminMode] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openAddProduct,  setOpenAddProduct] = useState(true)
  const [openEditProduct, setOpenEditProduct] = useState(false)
  
  


  const test = {adminMode, setAdminMode,
    setOpenEdit,openEdit,openAddProduct, setOpenAddProduct, openEditProduct,setOpenEditProduct
  }

  return (
    <OrderMainStyled>
      <AdminContext.Provider value={test}>
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

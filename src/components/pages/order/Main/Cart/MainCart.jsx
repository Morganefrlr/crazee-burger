import styled from "styled-components";
import { theme } from "../../../../../theme";
import EmptyCart from "./EmptyCart";
import CartProducts from "./CartProducts";
import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";
import { findInArray } from "../../../../../utils/array";

const MainCart = () => {
  const {
    cart,
    setIsCollapsed,
    setTabSelected,
    setProductSelected,
    inputTitleRef,
    adminMode,
    productSelected,
  } = useContext(AdminContext);


  const handleSelectedProduct = async (idToEdit) => {
   await setIsCollapsed(false);
    await setTabSelected("edit");
    const productToEdit = findInArray(idToEdit, cart);
    await setProductSelected(productToEdit);
    if (adminMode) {
      inputTitleRef.current.focus();
    }
  };

  const checkIfSelected = (idSelected, idToCheck) => {
    if (!adminMode) return;
    return idSelected === idToCheck;
  };




  return (
    <MainCartStyled>
      {cart.length !== 0 ? 
      <CartProducts 
      products={cart}
      handleSelect={handleSelectedProduct}
      isSelected={checkIfSelected}
      productSelected={productSelected}
      isModeAdmin={adminMode}
      
      /> : <EmptyCart />}
    </MainCartStyled>
  );
};

const MainCartStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(100% - 140px);
  display: flex;
  justify-content: center;
  align-items: start;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.33);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default MainCart;

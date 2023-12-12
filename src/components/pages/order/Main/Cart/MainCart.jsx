import styled from "styled-components";
import { theme } from "../../../../../theme";
import EmptyCart from "./EmptyCart";
import CartProducts from "./CartProducts";
import { useContext } from "react";
import AdminContext from '../../../../../context/AdminContext'

const MainCart = () => {
  const{cart} = useContext(AdminContext)


  return (
    <MainCartStyled>{cart.length !== 0 ? <CartProducts products={cart}/> : <EmptyCart />}</MainCartStyled>
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

`;

export default MainCart;

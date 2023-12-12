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
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.33);

`;

export default MainCart;

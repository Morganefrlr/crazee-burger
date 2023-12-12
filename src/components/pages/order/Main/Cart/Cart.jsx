import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import DarkBox from "./DarkBox";
import Total from "./Total";
import Footer from "./Footer";
import MainCart from "./MainCart";

const Cart = () => {
  return (
    <CartStyled>
      <DarkBox> <Total /></DarkBox> 

      <MainCart />

      <DarkBox><Footer /></DarkBox>
            
    </CartStyled>
  );
};

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
`;
export default Cart;

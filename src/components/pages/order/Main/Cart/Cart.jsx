import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import DarkBox from "./DarkBox";
import Total from "./Total";
import Footer from "./Footer";
import MainCart from "./MainCart";
import AdminContext from "../../../../../context/AdminContext";
import { findInArray } from "../../../../../utils/array";

const Cart = () => {
  const {
    cart
  } = useContext(AdminContext);

  const totalToPay = cart.reduce((total, productToPay) => {
    if(isNaN(productToPay.price)) return total
    total += productToPay.quantity * productToPay.price;
    return total;
  }, 0);

  return (
    <CartStyled>
      <DarkBox>
        {" "}
        <Total total={totalToPay} />
      </DarkBox>

      <MainCart/>
      <DarkBox>
        <Footer />
      </DarkBox>
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

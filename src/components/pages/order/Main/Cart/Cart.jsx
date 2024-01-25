import React, { useContext } from "react";
import styled from "styled-components";
import DarkBox from "./DarkBox";
import Total from "./Total";
import Footer from "./Footer";
import MainCart from "./MainCart";
import AdminContext from "../../../../../context/AdminContext";

const Cart = () => {
  const { cart} = useContext(AdminContext);

  const totalToPay = cart.reduce((total, productToPay) => {
    total += productToPay.quantity * productToPay.price;
    return total;
  }, 0);


  return (
    <CartStyled>
      <DarkBox>
        {" "}
        <Total total={totalToPay} />
      </DarkBox>

      <MainCart />

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
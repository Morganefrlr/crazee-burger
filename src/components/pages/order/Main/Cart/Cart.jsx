import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

const Cart = () => {
  return (
    <CartStyled>
      <div className="darkBlock">
        <span>Total</span>
        <span>0,00 €</span>
      </div>
      <div className="mainBlock">
        <span>Votre commande est vide.</span>
      </div>
      <div className="darkBlock">
        <span>Codé avec ❤️ et React.JS</span>
      </div>
    </CartStyled>
  );
};

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 100%;
  background-color: red;
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);

  span {
    font-family: "Amatic SC", sans-serif;
  }
  .darkBlock {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.background_dark};
    font-size: 20px;
    color: ${theme.colors.white};
    &:first-child {
      justify-content: space-between;
      span {
        font-size: 36px;
        color: ${theme.colors.primary};
        padding: 0 16px;
        &:nth-child(2) {
          font-weight: 700;
        }
      }
    }
  }
  .mainBlock {
    background: ${theme.colors.background_white};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    color: ${theme.colors.greyBlue};
  }
`;
export default Cart;

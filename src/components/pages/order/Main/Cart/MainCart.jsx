import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

const MainCart = () => {
  return (
    <MainCartStyled>
      <span>Votre commande est vide.</span>
    </MainCartStyled>
  );
};

const MainCartStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: ${theme.colors.greyBlue};
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.33);
  span {
    font-family: "Amatic SC", sans-serif;
  }
`;

export default MainCart;

import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

const DarkBox = ({children}) => {
  return <DarkBoxStyled>{children}</DarkBoxStyled>;
};

const DarkBoxStyled = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background_dark};
  span {
    font-family: "Amatic SC", sans-serif;
  }
`;

export default DarkBox;

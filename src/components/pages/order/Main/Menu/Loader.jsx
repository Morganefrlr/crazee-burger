import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

const Loader = () => {
  return <LoaderStyled>Chargement en cours .......</LoaderStyled>;
};

const LoaderStyled = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 21px;
  font-family: "Amatic SC", sans-serif;
  font-size: 36px;
  color: ${theme.colors.greyBlue};
`;
export default Loader;

import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
const Edit = () => {
  return <EditStyled>edit</EditStyled>;
};

const EditStyled = styled.div`
  background-color: ${theme.colors.white};
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px -6px 8px -2px #0000001a;
`;
export default Edit;

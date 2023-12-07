import React from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

const EditFormEmpty = () => {
  return (
    <EditFormEmptyStyled className="editProduct">
      <p>Cliquez sur un produit pour le modifier</p>
      <HiCursorClick className="icon" />
    </EditFormEmptyStyled>
  );
};

const EditFormEmptyStyled = styled.div`
  display: flex;
  
  font-size: 24px;
  font-weight: 400;
  gap: 9px;
  color: ${theme.colors.greyBlue};
  padding-top: 81px;
  padding-left: 71px;

  p {
    font-family: "Amatic SC", sans-serif;
  }
  .icon {
    width: 24px;
    height: 24px;
  }
`;
export default EditFormEmpty;

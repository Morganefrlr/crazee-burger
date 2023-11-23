import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonOrange = ({ icon }) => {
  return (
    <ButtonStyled>
      <span>Accédez à mon espace</span>
      {icon && icon}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  height: 53px;
  width: 100%;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  border-radius: 5px;
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: ${theme.fonts.weights.bold};
  font-size: 15px;
  transition: all 300ms ease;
  cursor: pointer;

  .btnIcon {
    height: auto;
  }

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
  &:focus {
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

export default ButtonOrange;

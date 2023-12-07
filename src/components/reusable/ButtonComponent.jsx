import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

const ButtonComponent = ({ icon, label, onClick,className, version = "normal" }) => {
  return (
    <ButtonStyled version={version} className={className} onClick={onClick}>
      <span>{label}</span>
      {icon && icon}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.white};
  font-size: 15px;
  transition: all 300ms ease;
  cursor: pointer;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  .btnIcon {
    height: auto;
  }

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  ${({ version }) => extraStyle[version]}
`;

const extraStyleSuccess = css`
  width: 50%;
  height: 34px;
  border: 1px solid ${theme.colors.success};
  background-color: ${theme.colors.success};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
  &:focus {
    background-color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    color: ${theme.colors.white};
  }
`;
const extraStyleSmall = css`
  flex: 1;
  height: 38px;
  font-size: 11px;
`;

const extraStyleNormal = css`
  height: 50px;
  width: 225px;
  font-size: 12px;
`;

const extraSytleLarge = css`
  width: 100%;
  height: 53px;
`;

const extraStyle = {
  large: extraSytleLarge,
  success: extraStyleSuccess,
  small: extraStyleSmall,
  normal: extraStyleNormal,
};
export default ButtonComponent;

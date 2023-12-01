import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

const InputText = ({
  value,
  onChange,
  icon,
  name,
  version = "normal",
  ...extraProps
}) => {
  return (
    <InputStyled version={version}>
      {icon && icon}
      <input {...extraProps} value={value} name={name} onChange={onChange} />
    </InputStyled>
  );
};

const InputStyled = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  input {
    height: fit-content;
    font-size: 15px;
    border: none;
    outline: none;
    width: 80%;
    padding: 1px;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  width: 400px;
  height: 55px;
  background-color: ${theme.colors.white};
  .inputIcon {
    fill: ${theme.colors.greyMedium};
  }
`;

const extraStyleProduct = css`
  background-color: ${theme.colors.background_white};
  width: 100%;
  height: 35px;
  input {
    background-color: ${theme.colors.background_white};
  }
  .inputIcon {
    fill: ${theme.colors.greyBlue};
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  product: extraStyleProduct,
};
export default InputText;

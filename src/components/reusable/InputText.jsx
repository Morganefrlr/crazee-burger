import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const InputText = ({ value, onChange, icon, className, ...extraProps }) => {
  return (
    <InputStyled className={className}>
      {icon && icon}
      <input {...extraProps} value={value} onChange={onChange} />
    </InputStyled>
  );
};

const InputStyled = styled.div`
  display: flex;
  width: 400px;
  height: 55px;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${theme.colors.white};

  .inputIcon {
    fill: ${theme.colors.greyMedium};
  }
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

  // style for addProduct Inputs

  &.addProduct {
    background-color: ${theme.colors.background_white};
    width: 100%;
    height: 35px;
    input {
      background-color: ${theme.colors.background_white};
    }
    .inputIcon {
      fill: ${theme.colors.greyBlue};
    }
  }
`;
export default InputText;

import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const InputText = ({ value, onChange, icon, ...extraProps }) => {
  return (
    <InputStyled>
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
`;
export default InputText;

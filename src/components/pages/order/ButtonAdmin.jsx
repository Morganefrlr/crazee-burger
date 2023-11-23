import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme/index";

const ButtonAdmin = () => {
  const [admin, setAdmin] = useState(false);

  return (
    <ButtonAdminStyled className={admin && 'backButton'}>
      <p className={admin ? "adminLabelTrue" : "adminLabelFalse"}>{admin ? "Activer le mode admin" : "Désactiver le mode admin"}</p>
      <div
        onClick={() => setAdmin(!admin)}
        className={admin ? "adminBtnTrue" : "adminBtnFalse"}
      />
    </ButtonAdminStyled>
  );
};

const ButtonAdminStyled = styled.div`
  width: 200px;
  height: 40px;
  border: 2px solid ${theme.colors.primary};
  border-radius: 30px;
  font-size: 10px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: all 700ms ease;
  &.backButton{
    background-color: ${theme.colors.background_dark};
    border-color: inherit;
  }
  p{
    position: absolute;
    top: 12px;
    transition: all 700ms ease;
  }
  .adminLabelTrue {
    left: 50px;
    font-weight: 700;
    color: ${theme.colors.primary};
  }
  .adminLabelFalse {
    left: 10px;
  }
  div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${theme.colors.primary};
    cursor: pointer;
    position: absolute;
    transition: all 700ms ease;
    top: 3px;
  }
  .adminBtnTrue {
    left: 4px;
  }
  .adminBtnFalse {
    left: 162px;
  }
`;
export default ButtonAdmin;

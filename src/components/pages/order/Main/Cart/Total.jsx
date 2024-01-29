import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/math";
import CasinoEffect from "../../../../reusable/CasinoEffect";

const Total = ({total}) => {
  return (
    <TotalStyled>
      <span>Total</span>
      <CasinoEffect count={formatPrice(total)} />
    </TotalStyled>
  );
};
const TotalStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 36px;
    color: ${theme.colors.primary};
    padding: 0 16px;
    flex: 1.5;
  }
`;
export default Total;

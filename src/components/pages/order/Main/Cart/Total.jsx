import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/math";

const Total = ({total}) => {
  return (
    <TotalStyled>
      <span>Total</span>
      <span>{formatPrice(total)}</span>
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
    &:nth-child(2) {
      font-weight: 700;
    }
  }
`;
export default Total;

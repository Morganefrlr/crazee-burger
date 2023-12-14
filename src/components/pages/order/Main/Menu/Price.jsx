import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/math";

const Price = ({ price,className, version='normal' }) => {


  return <PriceStyled version={version} className={className}>{formatPrice(price)}</PriceStyled>;
};

const PriceStyled = styled.div`
  flex: 1;
  font-size: 16px;
  color: ${theme.colors.primary};
  text-align: left;
  font-weight: 400;
`;


export default Price;

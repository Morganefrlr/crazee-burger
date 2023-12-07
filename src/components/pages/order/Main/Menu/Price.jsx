import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/math";

const Price = ({ price,className, version='normal' }) => {

  
 /* const newPrice = (price) => {
    let priceRound = parseFloat(price).toFixed(2);
    return `${priceRound}`.replace(".", ",");
  };*/

  return <PriceStyled version={version} className={className}>{formatPrice(price)}</PriceStyled>;
};

const PriceStyled = styled.div`
  flex: 1;
  font-size: 16px;
  color: ${theme.colors.primary};
  text-align: left;
  
`;


export default Price;

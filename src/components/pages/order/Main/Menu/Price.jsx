import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/math";

const Price = ({ price, version='normal' }) => {

  
 /* const newPrice = (price) => {
    let priceRound = parseFloat(price).toFixed(2);
    return `${priceRound}`.replace(".", ",");
  };*/

  return <PriceStyled version={version}>{formatPrice(price)}</PriceStyled>;
};

const PriceStyled = styled.div`
  flex: 1;
  font-size: 16px;
  color: ${theme.colors.primary};
  text-align: left;
  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  color: ${theme.colors.primary};
`;

const extraStyleOrange = css`
  color: ${theme.colors.white};
`;

const extraStyle = {
  orangeBackground: extraStyleOrange,
  normal: extraStyleNormal
};
export default Price;

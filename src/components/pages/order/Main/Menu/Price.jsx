import styled from "styled-components";
import { theme } from "../../../../../theme";

const Price = ({ price }) => {
  const newPrice = (price) => {
    let priceRound = parseFloat(price).toFixed(2);
    return `${priceRound}`.replace(".", ",");
  };

  return <PriceStyled>{newPrice(price)} €</PriceStyled>;
};

const PriceStyled = styled.div`
  flex: 1;
  font-size: 16px;
  color: ${theme.colors.primary};
  text-align: left;
`;

export default Price;

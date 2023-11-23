import styled from "styled-components";
import { theme } from "../../../theme";


const Price = ({price}) => {

   const newPrice = (price) =>{
    let priceRound =  Math.round(price * 100) /100
    return `${priceRound}`.replace(".", ",") + "0"
   }
    
    return (
        <PriceStyled>{newPrice(price)} €</PriceStyled>
    );
};

const PriceStyled = styled.div`
        flex: 1;
        font-size: 16px;
        color: ${theme.colors.primary};
        text-align: left;
`

export default Price;
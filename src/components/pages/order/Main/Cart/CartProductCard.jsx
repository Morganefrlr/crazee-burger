import styled from "styled-components";
import { theme } from "../../../../../theme";


const CartProductCard = () => {
    return (
        <CartProductCardStyled>
            cart
        </CartProductCardStyled>
    );
};

const CartProductCardStyled = styled.div`
width: 318px;
height: 86px;
background-color: ${theme.colors.white};
color: red;
border-radius: 5px;
box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.20);

`
export default CartProductCard;
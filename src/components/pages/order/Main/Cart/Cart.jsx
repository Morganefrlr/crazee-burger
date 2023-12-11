import React from 'react';
import styled from 'styled-components';

const Cart = () => {
    return (
        <CartStyled>
<div className='darkBlock'>
    <span>Total</span>
    <span>0,00 €</span>
</div>
<div>
    <span>Votre commande est vide.</span>
</div>
<div className='darkBlock'>
    <span>Codé avec ❤️ et React.JS</span>
</div>
        </CartStyled>

    );
};



const CartStyled = styled.div`
display: flex;
flex-direction: column;
width: 350px;
height: 100%;
`
export default Cart;
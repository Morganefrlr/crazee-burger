import React from 'react';
import CartProductCard from './CartProductCard';

const CartProducts = ({products}) => {

    return (
        <>
            {products.map(item =>
             <CartProductCard key={item.id} products={item}/>
            )}
        </>
    );
};

export default CartProducts;
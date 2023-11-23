import React from 'react';

const Price = ({price}) => {

   const newPrice = (price) =>{
    let priceRound =  Math.round(price * 100) /100
    return `${priceRound}`.replace(".", ",") + "0"
   }
    
    return (
        <p>{newPrice(price)} €</p>
    );
};

export default Price;
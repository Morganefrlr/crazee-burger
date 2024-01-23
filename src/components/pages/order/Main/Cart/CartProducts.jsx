import React from "react";
import CartProductCard from "./CartProductCard";
import styled from "styled-components";

const CartProducts = ({ products, handleSelect,isSelected, productSelected, isModeAdmin, handleDelete}) => {



  return (
    <CartProductsStyled>
      {products.map((item) => (
        <CartProductCard key={item.id} 
        product={item} 
        handleSelect={() => handleSelect(item.id)}
        isSelected={isSelected(productSelected.id, item.id)}
        isModeAdmin={isModeAdmin}
        handleDelete={() => handleDelete(item.id)}
        />
      ))}
    </CartProductsStyled>
  );
};

const CartProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;

`;
export default CartProducts;

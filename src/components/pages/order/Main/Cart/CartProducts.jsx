import React from "react";
import CartProductCard from "./CartProductCard";
import styled from "styled-components";

const CartProducts = ({ products }) => {
  return (
    <CartProductsStyled>
      {products.map((item) => (
        <CartProductCard key={item.id} product={item} />
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

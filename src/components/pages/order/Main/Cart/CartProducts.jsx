import React from "react";
import CartProductCard from "./CartProductCard";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { cartAnimation } from "../../../../../theme/animation";

const CartProducts = ({
  products,
  handleSelect,
  isSelected,
  productSelected,
  isModeAdmin,
  handleDelete,
}) => {
  return (
    <CartProductsStyled>
      <TransitionGroup>
        {products.map((item) => (
          <CSSTransition
            classNames={"transitionCard"}
            appear={true}
            key={item.id}
            timeout={{ enter: 500, exit: 500 }}
          >
            <CartProductCard
              product={item}
              handleSelect={() => handleSelect(item.id)}
              isSelected={isSelected(productSelected.id, item.id)}
              isModeAdmin={isModeAdmin}
              handleDelete={() => handleDelete(item.id)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </CartProductsStyled>
  );
};

const CartProductsStyled = styled.div`
  display: flex;
  flex-direction: column;

  ${cartAnimation}
`;
export default CartProducts;

import styled from "styled-components";
import { theme } from "../../../../../theme";
import Price from "../Menu/Price";

const CartProductCard = ({ product }) => {


    
  return (
    <CartProductCardStyled>
      <img src={product.imageSource} alt="" />

      <div className="infosProductCart">
        <span>{product.title}</span>
        <Price price={product.price} />
      </div>

      <div className="quantityProductCart">
        <span>x {product.quantity}</span>
      </div>
    </CartProductCardStyled>
  );
};

const CartProductCardStyled = styled.div`
  width: 318px;
  height: 86px;
  background-color: ${theme.colors.white};
  color: red;
  border-radius: 5px;
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 10%;
  align-items: center;

  padding: 8px 16px;

  img {
    object-fit: contain;
    width: 86px;
    height: 70px;
  }

  .infosProductCart {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 40%;
    span {
      font-size: 15px;
      color: ${theme.colors.primary};
      &:first-child {
        font-size: 24px;
        font-family: "Amatic SC", sans-serif;
        font-weight: 700;
        color: ${theme.colors.dark};
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }

  .quantityProductCart {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    span{
        font-size: 15px;
        color: ${theme.colors.primary};
    }
  }
`;
export default CartProductCard;

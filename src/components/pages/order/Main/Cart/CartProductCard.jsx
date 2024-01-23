import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";
import Price from "../Menu/Price";
import { MdDeleteForever } from "react-icons/md";


const CartProductCard = ({ product,handleSelect, isSelected, isModeAdmin, handleDelete}) => {







  return (
    <CartProductCardStyled onClick={handleSelect} isSelected={isSelected} isModeAdmin={isModeAdmin}>
      <img src={product.imageSource} alt="" />

      <div className="infosProductCart">
        <span>{product.title}</span>
        <Price price={product.price} className="priceCard"/>
      </div>

      <div className="quantityProductCart">
        <span>x {product.quantity}</span>
      </div>

      <div className="deleteProductCard">
        <MdDeleteForever
          className="icon"
          onClick={handleDelete}
        />
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
  position: relative;
  padding: 8px 16px;
  cursor: ${({isModeAdmin}) =>(isModeAdmin ? "pointer" : "")};

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
    span {
      font-size: 15px;
      color: ${theme.colors.primary};
    }
  }

  &:hover {
    .deleteProductCard {
      cursor: pointer;
      width: 76px;
      height: 86px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${theme.colors.red};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      position: absolute;
      top: 0;
      right: 0;

      .icon {
        fill: ${theme.colors.white};
        width: 24px;
        height: 24px;
      }
      &:hover {
        .icon {
          fill: ${theme.colors.dark};
        }
      }
      &:active {
        .icon {
          fill: ${theme.colors.white};
        }
      }
    }
  }

  .deleteProductCard {
    display: none;
  }

  ${({ isSelected }) => isSelected && selectedStyle}
`;



const selectedStyle = css`
  background: ${theme.colors.primary};
  .priceCard, .quantityProductCart span {
    color: ${theme.colors.white};
  }
  
`;

export default CartProductCard;

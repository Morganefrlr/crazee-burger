import styled, { css } from "styled-components";
import Price from "./Price";
import { theme } from "../../../../../theme";
import ButtonComponent from "../../../../reusable/ButtonComponent";
import DeleteButton from "./DeleteButton";

const Card = ({
  img,
  title,
  price,
  id,
  handleSelect,
  isHoverable,
  isSelected,
  handleCart
}) => {

  return (
    <CardStyled
      onClick={handleSelect}
      isHoverable={isHoverable}
      isSelected={isSelected}
    >
      {img ? (
        <img src={img} alt={title} />
      ) : (
        <img src="/images/coming-soon.png" alt={title} />
      )}
      <DeleteButton id={id} className="buttonDelete" />
      <div className="cardBottom">
        <h3>{title}</h3>
        <div>
          <Price price={price} className="priceCard" />
          <ButtonComponent
            label={"Ajouter"}
            version="small"
            className="buttonPrimary"
            onClick={(e) => handleCart(e,id)}
          />
        </div>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  ${({ isHoverable }) => isHoverable && hoverableStyle}
  width: 240px;
  height: 330px;
  border-radius: 15px;
  background: ${theme.colors.white};
  box-shadow: -8px 8px 20px 0 rgb(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 50px 20px 30px 20px;
  position: relative;
  cursor: pointer;

  img {
    width: 200px;
    height: 145px;
    object-fit: contain;
  }

  .cardBottom {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;

    h3 {
      font-family: "Amatic SC", sans-serif;
      font-size: 36px;
      font-weight: 700;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  ${({ isSelected }) => isSelected && selectedStyle}
`;

const hoverableStyle = css`
  &:hover {
    box-shadow: 0 0 8px 0 ${theme.colors.primary};
    transform: scale(1.05);
    transition: all 400ms ease;
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};
  .priceCard {
    color: ${theme.colors.white};
  }
  .buttonDelete {
    .icon {
      fill: ${theme.colors.white};
      &:hover {
        fill: ${theme.colors.red};
      }
      &:active {
        fill: ${theme.colors.white};
      }
    }
  }
  .buttonPrimary {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    &:hover {
      border: 1px solid ${theme.colors.white};
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    &:focus {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
`;

export default Card;

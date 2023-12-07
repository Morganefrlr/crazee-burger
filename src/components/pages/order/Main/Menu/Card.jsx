import styled, { css } from "styled-components";
import Price from "./Price";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";
import ButtonComponent from "../../../../reusable/ButtonComponent";
import DeleteButton from "./DeleteButton";

const Card = ({ img, title, price, id, handleSelect, isHoverable }) => {
  const { adminMode, productSelected } = useContext(AdminContext);

  return (
    <CardStyled onClick={handleSelect} isHoverable={adminMode}>
      {img ? (
        <img src={img} alt={title} />
      ) : (
        <img src="/images/coming-soon.png" alt={title} />
      )}
      <DeleteButton
        id={id}
        version={productSelected.id === id ? "orangeBackground" : "normal"}
      />
      <div className="cardBottom">
        <h3>{title}</h3>
        <div>
          <Price
            price={price}
            version={
              adminMode && productSelected.id === id
                ? "orangeBackground"
                : "normal"
            }
          />
          <ButtonComponent
            label={"Ajouter"}
            version={
              adminMode && productSelected.id === id
                ? "orangeBackground"
                : "small"
            }
          />
        </div>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  
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
  
`;

const hoverableStyle = css`
  &:hover {
    box-shadow: 0 0 8px 0 ${theme.colors.primary};
  }
`;

export default Card;

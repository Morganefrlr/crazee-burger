import styled from "styled-components";
import Price from "./Price";
import { theme } from "../../../../../theme";
import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";
import ButtonComponent from "../../../../reusable/ButtonComponent";

const Card = ({ img, title, price, handleDelete, id, handleSelect }) => {
  const { adminMode } = useContext(AdminContext);

  return (
    <CardStyled onClick={() => handleSelect(id)}>
      {img ? (
        <img src={img} alt={title} />
      ) : (
        <img src="/images/coming-soon.png" alt={title} />
      )}
      {adminMode && (
        <div className="deleteIconContainer" onClick={() => handleDelete(id)}>
          <TiDelete className="icon" />
        </div>
      )}
      <div className="cardBottom">
        <h3>{title}</h3>
        <div>
          <Price price={price} />
          <ButtonComponent label={"Ajouter"} version="small" />
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
  &:hover {
    box-shadow: 0 0 8px 0 ${theme.colors.primary};
  }
  img {
    width: 200px;
    height: 145px;
    object-fit: contain;
  }
  .deleteIconContainer {
    position: absolute;
    top: 15px;
    right: 15px;
    .icon {
      width: 30px;
      height: 30px;
      fill: ${theme.colors.primary};
      cursor: pointer;
      &:hover {
        fill: ${theme.colors.red};
      }
    }
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
export default Card;

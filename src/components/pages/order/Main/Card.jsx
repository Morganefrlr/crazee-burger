import styled from "styled-components";
import ButtonOrange from "../../../reusable/ButtonOrange";
import Price from "../Main/Price";

const Card = ({ img, title, price }) => {
  return (
    <CardStyled>
      <img src={img} alt={title} />
      <div className="cardBottom">
        <h3>{title}</h3>
        <div>
          <Price price={price} />
          <ButtonOrange label={"Ajouter"} className={"buttonCard"} />
        </div>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  border-radius: 15px;
  box-shadow: -8px 8px 20px 0 rgb(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 50px 20px 30px 20px;
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
      .buttonCard {
        flex: 1;
        height: 38px;
        font-size: 11px;
      }
    }
  }
`;
export default Card;

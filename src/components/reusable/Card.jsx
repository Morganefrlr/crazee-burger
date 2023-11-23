import React from "react";
import styled from "styled-components";
import ButtonOrange from "./ButtonOrange";
import { fakeMenu1 } from "../../utils/Data";
import { theme } from "../../theme";

const Card = () => {
  const menu = fakeMenu1.filter((el) => el.id === 1);
  console.log(menu[0]);
  return (
    <CardStyled>
        <img src={menu[0].imageSource} alt="" />
      <div className="cardBottom">
        <h3>{menu[0].title}</h3>
        <div className="cardPrice">
          <p>{menu[0].price}</p>
          <ButtonOrange />
        </div>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  border-radius: 15px;
  box-shadow: -8px 8px 20px 0 #0000001e;
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-top: 50px;
  img{
    width: 200px;
    height: 145px;
    object-fit: contain;
  }
  .cardBottom{
    display: flex;
    flex-direction: column;
    gap: 15px;
    h3{
      font-family: "Amatic SC", sans-serif;
      font-size: 36px;
      font-weight: 700;
    }
    div{
      display: flex;
      justify-content: space-between;
      p{
        font-size: 16px;
        color: ${theme.colors.primary};
      }
    }
  }
`;
export default Card;

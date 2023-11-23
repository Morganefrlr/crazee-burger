import React from "react";
import styled from "styled-components";
import ButtonOrange from "./ButtonOrange";
import { fakeMenu1 } from "../../utils/Data";
import { theme } from "../../theme";

const Card = () => {
  const menu = fakeMenu1.filter((el) => el.id === 1);
  console.log(Math.round(menu[0].price * 100)/100);
  return (
    <CardStyled>
        <img src={menu[0].imageSource} alt="" />
      <div className="cardBottom">
        <h3>{menu[0].title}</h3>
        <div className="cardPrice">
          <p>{Math.round(menu[0].price * 100)/100}0 €</p>
          <ButtonOrange
          label={'Ajouter'}
          className={'buttonCard'}
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
  box-shadow: -8px 8px 20px 0 rgb(0, 0, 0, 0.2);
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 50px 20px 30px 20px;
  img{
    width: 200px;
    height: 145px;
    object-fit: contain;
  }
  .cardBottom{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    h3{
      font-family: "Amatic SC", sans-serif;
      font-size: 36px;
      font-weight: 700;
    }
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      p{
        flex: 1;
        font-size: 16px;
        color: ${theme.colors.primary};
        text-align: left;
      }
      .buttonCard{
        flex:1; 
        height: 38px;
        font-size: 11px;
      }
    }
  }
`;
export default Card;

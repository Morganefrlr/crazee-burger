import React from "react";
import styled from "styled-components";
import ButtonOrange from "./ButtonOrange";
import { fakeMenu1 } from "../../utils/Data";
import Price from "../pages/order/Price";

const Card = ({menu}) => {
  

  return (
    <CardStyled>
        <img src={menu.imageSource} alt="" />
      <div className="cardBottom">
        <h3>{menu.title}</h3>
        <div className="cardPrice">
          <Price price={menu.price}/>
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
      .buttonCard{
        flex:1; 
        height: 38px;
        font-size: 11px;
      }
    }
  }
`;
export default Card;

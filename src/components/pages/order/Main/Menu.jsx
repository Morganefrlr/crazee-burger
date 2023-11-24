import React from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../utils/Data";
import Card from "../Main/Card";

const Menu = () => {
  return (
    <MenuStyled>
      {fakeMenu2.map((item) => (
        <Card key={item.id} img={item.imageSource} title={item.title} price={item.price}  />
      ))}
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px 85px;
  overflow: scroll;
  padding: 50px 85px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Menu;

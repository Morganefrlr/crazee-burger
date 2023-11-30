import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../../utils/Data";
import Card from "./Card";
import EmptyMenu from "./EmptyMenu";

const Menu = () => {
  const [menuData, setMenuData] = useState(fakeMenu2);
 

  const handleDelete = (id) => {
    const newMenu = menuData.filter((el) => el.id !== id);
    setMenuData(newMenu);
  };


  return (
    <MenuStyled className={menuData.length === 0 ? 'emptyMenu' : ''}>
      {menuData.map((item) => (
        <Card
          key={item.id}
          img={item.imageSource}
          title={item.title}
          price={item.price}
          onClick={handleDelete}
          id={item.id}
        />
      ))}
      {menuData.length === 0  && <EmptyMenu />}
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



  &.emptyMenu{
    display: flex;
    width: 100%;
    height: 100%;

  }
`;

export default Menu;

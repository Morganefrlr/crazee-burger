import React, { useContext, useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../../utils/Data";
import Card from "./Card";
import AdminContext from "../../../../../context/AdminContext";
import ButtonOrange from "../../../../reusable/ButtonOrange";
import EmptyMenu from "./EmptyMenu";

const Menu = () => {
  const [menuData, setMenuData] = useState(fakeMenu2);
  const { adminMode } = useContext(AdminContext);

  const handleDelete = (id) => {
    const newMenu = menuData.filter((el) => el.id !== id);
    setMenuData(newMenu);
  };
  return (
    <MenuStyled>
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
      {!menuData && <EmptyMenu />}
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

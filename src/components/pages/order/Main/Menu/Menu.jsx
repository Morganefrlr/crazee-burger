import { useContext } from "react";
import styled from "styled-components";
import Card from "./Card";
import EmptyMenu from "./EmptyMenu";
import AdminContext from "../../../../../context/AdminContext";

const Menu = () => {

  
  const { menuData, handleDelete, setOpenEditProduct, setOpenAdminPanel, setOpenAddProduct, setTabSelected, setOpenEditProductId} = useContext(AdminContext);

  const handleDeleteProduct = (idToDelete) => {
    handleDelete(idToDelete)
  };

  const handleSelectedProduct = (idToEdit) => {
    setTabSelected('edit')
    setOpenAddProduct(false)
    setOpenAdminPanel(true)
    setOpenEditProduct(true)
    setOpenEditProductId(idToEdit)
    
  }

  return (
    <MenuStyled className={menuData.length === 0 ? "emptyMenu" : ""}>
      {menuData.map((item) => (
        <Card
          key={item.id}
          img={item.imageSource}
          title={item.title}
          price={item.price}
          handleDelete={handleDeleteProduct}
          handleSelect={handleSelectedProduct}
          id={item.id}
        />
      ))}
      {menuData.length === 0 && <EmptyMenu />}
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

  &.emptyMenu {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

export default Menu;

import { useContext } from "react";
import styled from "styled-components";
import Card from "./Card";
import EmptyMenu from "./EmptyMenu";
import AdminContext from "../../../../../context/AdminContext";
import { findInArray } from "../../../../../utils/array";

const Menu = () => {
  const {
    menuData,
    handleDelete,
    setIsCollapsed,
    setTabSelected,
    setProductSelected,
    productSelected,
    adminMode,
    inputTitleRef,
    handleAddProductCart,
    handleDeleteProductInCart
  } = useContext(AdminContext);

  const handleDeleteProduct = (e, idToDelete) => {
    e.stopPropagation()
    handleDelete(idToDelete);
    handleDeleteProductInCart(idToDelete)
  };

  const handleSelectedProduct = async (idToEdit) => {
    await setIsCollapsed(false);
    await setTabSelected("edit");
    const productToEdit = findInArray(idToEdit, menuData);
    await setProductSelected(productToEdit);

    inputTitleRef.current.focus();
  };

  const checkIfSelected = (idSelected, idToCheck) => {
    if (!adminMode) return;
    return idSelected === idToCheck;
  };

  const SendToCart = (e,idToCart) => {
    e.stopPropagation();
    const productToCart = findInArray(idToCart, menuData)
    handleAddProductCart(productToCart)
  };

  return (
    <MenuStyled className={menuData.length === 0 ? "emptyMenu" : ""}>
      {menuData.map((item) => (
        <Card
          key={item.id}
          img={item.imageSource}
          title={item.title}
          price={item.price}
          handleDelete={handleDeleteProduct}
          handleSelect={() => handleSelectedProduct(item.id)}
          id={item.id}
          isHoverable={adminMode}
          isSelected={checkIfSelected(productSelected.id, item.id)}
          handleCart={SendToCart}
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

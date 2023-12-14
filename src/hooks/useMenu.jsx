import { useRef, useState } from "react";
import { fakeMenu2 } from "../utils/Data";
import { deepCloneArray } from "../utils/array";
import { EMPTY_PRODUCT } from "../enums/product";

export const useMenu = () => {
  const [menuData, setMenuData] = useState(fakeMenu2);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const inputTitleRef = useRef();

  const handleAdd = (newProduct) => {
    const menuClone = deepCloneArray(menuData);
    const menuUpdated = [newProduct, ...menuClone];
    setMenuData(menuUpdated);
  };

  const handleDelete = (idToDelete) => {
    const menuClone = deepCloneArray(menuData);
    const menuUpdated = menuClone.filter((el) => el.id !== idToDelete);
    setMenuData(menuUpdated);

    idToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT);
  };

  const handleEdit = (productToEdit) => {
    const menuClone = deepCloneArray(menuData);
    const indexProduct = menuClone.findIndex(
      (el) => el.id === productToEdit.id
    );
    menuClone[indexProduct] = productToEdit;
    setMenuData(menuClone);
  };

  const handleGenerate = () => {
    setMenuData(fakeMenu2);
  };

  return {
    menuData,
    setMenuData,
    handleAdd,
    handleDelete,
    handleEdit,
    handleGenerate,
    productSelected,
    setProductSelected,
    inputTitleRef,
  };
};

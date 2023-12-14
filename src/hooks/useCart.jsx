import { useState } from "react";

import { deepCloneArray, findInArray, findIndexInArray } from "../utils/array";


export const useCart = () => {
  const [cart, setCart] = useState([]);

  const handleAddProductCart = (productToCart) => {
    const cartClone = deepCloneArray(cart);

    const isProductAlreadyInCart = findInArray(productToCart.id, cartClone);
    if (!isProductAlreadyInCart) {
      const productToAdd = {
        ...productToCart,
        quantity: 1,
      };
      setCart([productToAdd, ...cart]);
      return
    }
    if (isProductAlreadyInCart) {
      const IndexProduct = findIndexInArray(productToCart.id, cartClone);
      cartClone[IndexProduct].quantity += 1;
      setCart(cartClone);
    }
  };




  const handleDeleteProductInCart = (idToDelete) => {
    const cartClone = deepCloneArray(cart);
    const cartUpdated = cartClone.filter((el) => el.id !== idToDelete)

    setCart(cartUpdated)
  }



  const handleEditProductInCart = (productToEdit) =>{
    const cartClone = deepCloneArray(cart);
    const IndexProduct = findIndexInArray(productToEdit.id, cartClone)
    cartClone[IndexProduct] = {
      ...productToEdit,
      quantity: cart[IndexProduct].quantity
    };

    setCart(cartClone);
  }
  return { cart, handleAddProductCart,handleDeleteProductInCart,handleEditProductInCart };
};

import { useState } from "react";

import { deepCloneArray, findInArray, findIndexInArray } from "../utils/array";
import { setLocalStorage } from "../utils/localStorage";


export const useCart = () => {
  const [cart, setCart] = useState([]);

  const handleAddProductCart = (productToCart, username) => {
    const cartClone = deepCloneArray(cart);

    const isProductAlreadyInCart = findInArray(productToCart.id, cartClone);
    if (!isProductAlreadyInCart) {
      const productToAdd = {
        ...productToCart,
        quantity: 1,
      };
      const newCart = [productToAdd, ...cart]
      setCart(newCart);
      setLocalStorage(username, newCart)
      return
    }
    if (isProductAlreadyInCart) {
      const IndexProduct = findIndexInArray(productToCart.id, cartClone);
      cartClone[IndexProduct].quantity += 1;
      setCart(cartClone);
      setLocalStorage(username, cartClone)
    }
  };




  const handleDeleteProductInCart = (idToDelete) => {
    const cartClone = deepCloneArray(cart);
    const cartUpdated = cartClone.filter((el) => el.id !== idToDelete)

    setCart(cartUpdated)
  }
  return { cart,setCart, handleAddProductCart,handleDeleteProductInCart };
};

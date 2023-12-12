import { useState } from "react";
import { fakeBasket } from "../utils/fakeBasket";

export const useCart = () => {
  const [cart, setCart] = useState(fakeBasket.MEDIUM);

  return { cart };
};

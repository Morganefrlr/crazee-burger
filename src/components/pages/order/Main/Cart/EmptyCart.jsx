import styled from "styled-components";
import { theme } from "../../../../../theme";

const EmptyCart = () => {
  return <EmptyCartStyled>Votre commande est vide.</EmptyCartStyled>;
};

const EmptyCartStyled = styled.span`
  color: ${theme.colors.greyBlue};
  font-size: 36px;
  font-family: "Amatic SC", sans-serif;
`;
export default EmptyCart;

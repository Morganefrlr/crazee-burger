import { useContext } from "react";
import styled from "styled-components";

import AddProduct from "./AddProduct";
import AdminContext from "../../../../../../context/AdminContext";
import { theme } from "../../../../../../theme";
import { HiCursorClick } from "react-icons/hi";

const Edit = () => {
  const { openAddProduct, openEditProduct, openEditProductId } =
    useContext(AdminContext);

  return (
    <EditStyled>
      {openEditProduct && openEditProductId && <p>Coucou</p>}
      {openEditProduct && !openEditProductId && (
        <div className="editProduct">
          <p>Cliquez sur un produit pour le modifier</p>
          <HiCursorClick className="icon" />
        </div>
      )}

      {openAddProduct && <AddProduct />}
    </EditStyled>
  );
};

const EditStyled = styled.div`
  background-color: ${theme.colors.white};
  height: 240px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px -6px 8px -2px #0000001a;
  padding: 20px;

  .editProduct {
    display: flex;
    font-size: 24px;
    font-weight: 400;
    gap: 9px;
    color: ${theme.colors.greyBlue};
    padding-top: 81px;
    padding-left: 71px;
    p {
      font-family: "Amatic SC", sans-serif;
    }
    .icon {
      width: 24px;
      height: 24px;
    }
  }
`;
export default Edit;

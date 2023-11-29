import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminContext from "../../../../../context/AdminContext";



const Edit = () => {
const {openAddProduct , openEditProduct} = useContext(AdminContext)


  return <EditStyled>
    {openEditProduct && 
    <p>Modifier un produit</p>
    }
    {openAddProduct && 
    <p>Ajouter un Produit</p>
    }
  </EditStyled>;
};

const EditStyled = styled.div`
  background-color: ${theme.colors.white};
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px -6px 8px -2px #0000001a;
`;
export default Edit;

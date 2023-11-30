import React from "react";
import InputText from "../../../../../reusable/InputText";
import { FaHamburger } from "react-icons/fa";
import { inputsData } from "../../../AdminData";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
const AddProduct = () => {
  console.log(inputsData);
  return (
    <AddProductStyled>
      <div className="imageContainer">
        <p>Aucune image</p>
      </div>
      <div className="inputsAddProductContainer">
        {inputsData.map((item) => {
          return (
            <InputText
              key={item.id}
              value={""}
              onChange={""}
              icon={item.icon}
              required
              type={item.type}
              placeholder={item.placeholder}
              className="addProduct"
            />
          );
        })}
        <button>Ajouter un nouveau produit au menu</button>
      </div>
    </AddProductStyled>
  );
};

const AddProductStyled = styled.div`
display: flex;
padding-top: 30px;
padding-left: 71px;
gap: 20px;
width: 100%;
.imageContainer{
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 5px;
    height: 118px;
    width: 215px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greySemiDark};
}
  .inputsAddProductContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 50%;
    button {
      width: 50%;
      height: 34px;
      border-radius: 5px;
      border: 1px solid ${theme.colors.success};
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};
      cursor: pointer;
    }
  }
`;

export default AddProduct;

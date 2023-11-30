import React from "react";
import InputText from "../../../../../reusable/InputText";
import { FaHamburger } from "react-icons/fa";
import { inputsData } from "../../../AdminData";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
const AddProduct = () => {
  console.log(inputsData);
  return (
    <div>
      <div>
        <p>Aucune image</p>
      </div>
      <InputsContainerStyled >
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
              className='addProduct'
            />
          );
        })}
        <button>Ajouter un nouveau produit au menu</button>
      </InputsContainerStyled>
    </div>
  );
};

const InputsContainerStyled = styled.div`
display: flex;
flex-direction: column;
gap:8px;
button{
    width: 20%;
    height: 34px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.success};
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
   
}
`

export default AddProduct;

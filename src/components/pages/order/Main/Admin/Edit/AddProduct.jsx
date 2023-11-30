import React, { useContext, useState } from "react";
import InputText from "../../../../../reusable/InputText";

import { inputsData } from "../../../AdminData";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import AdminContext from '../../../../../../context/AdminContext' 


const AddProduct = () => {



 const {menuData, setMenuData} = useContext(AdminContext)
 

  const [product, setProduct] = useState({
    title:"",
    imageSource:'',
    price:0,
  })

  
const handleChangeInputs = e => {
  const value = e.target.value
  setProduct({
    ...product,
    [e.target.name]:value
  })
  
}
const handleSubmit = (e) =>{
  e.preventDefault();
  const newProduct ={
    ...product,
    id: Date.now() + product.title,
  }
  setMenuData([...menuData,newProduct])
  setProduct({
    title:"",
    imageSource:'',
    price:0,
  })
  
}

console.log(product)
  return (
    <AddProductStyled>
      <div className="imageContainer">
        {product.imageSource.length !==0 ? (<img src={product.imageSource} alt={product.imageSource}/>) : (<p>Aucune image</p>)}
      </div>
      <form action="submit" className="inputsAddProductContainer" onSubmit={handleSubmit}>
        {inputsData.map((item) => {
          return (
            <InputText
              key={item.id}
              onChange={handleChangeInputs}
              name={item.name}
              
              icon={item.icon}
              type={item.type}
              placeholder={item.placeholder}
              className="addProduct"
            />
          );
        })}
        <button>Ajouter un nouveau produit au menu</button>
      </form>
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
    img{
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
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

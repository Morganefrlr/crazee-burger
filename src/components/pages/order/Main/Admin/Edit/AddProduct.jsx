import React, { useContext, useState } from "react";
import InputText from "../../../../../reusable/InputText";

import { getInputTextsConfig } from "../../../AdminData";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import AdminContext from "../../../../../../context/AdminContext";
import { FiCheck } from "react-icons/fi";
import ButtonOrange from "../../../../../reusable/ButtonOrange";

const AddProduct = () => {
  const { handleAdd } = useContext(AdminContext);
  const [messageSucces, setMessageSucces] = useState(false);

  const [product, setProduct] = useState({
    title: "",
    imageSource: "",
    price: 0,
  });
  const inputTexts = getInputTextsConfig(product);

  const handleChangeInputs = (e) => {
    const value = e.target.value;
    setProduct({
      ...product,
      [e.target.name]: value,
    });
  };

  const newProduct = {
    ...product,
    id: crypto.randomUUID,
  };

  const displaySuccessMessage = () => {
    setMessageSucces(true);
    setTimeout(() => {
      setMessageSucces(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newProduct, handleAdd(newProduct);
    setProduct({ title: "", imageSource: "", price: 0 });
    displaySuccessMessage();
  };

  return (
    <AddProductStyled>
      <div className="imageContainer">
        {product.imageSource ? (
          <img src={product.imageSource} alt={product.imageSource} />
        ) : (
          <p>Aucune image</p>
        )}
      </div>
      <form
        action="submit"
        className="inputsAddProductContainer"
        onSubmit={handleSubmit}
      >
        {inputTexts.map((item) => {
          return (
            <InputText
              key={item.id}
              onChange={handleChangeInputs}
              name={item.name}
              icon={item.icon}
              type={item.type}
              value={item.value}
              placeholder={item.placeholder}
              version="product"
            />
          );
        })}
        <div className="buttonContainer">
          <ButtonOrange label={"Ajouter un nouveau produit au menu"} version="success"/>
          {messageSucces && (
            <div className="messageSucces">
              <FiCheck className="icon" />
              <p>Ajouté avec succès!</p>
            </div>
          )}
        </div>
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
  .imageContainer {
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 5px;
    height: 118px;
    width: 215px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greySemiDark};
    img {
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

    .buttonContainer {
      display: flex;
      gap: 15px;
      align-items: center;
     
      .messageSucces {
        color: ${theme.colors.success};
        font-size: 15px;
        display: flex;
        gap: 5px;
        .icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1px solid ${theme.colors.success};
        }
      }
    }
  }
`;

export default AddProduct;

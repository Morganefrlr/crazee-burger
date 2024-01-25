import { useContext, useState } from "react";
import { getInputTextsConfig } from "./inputTextConfig";
import AdminContext from "../../../../../../context/AdminContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import Form from "./Form";
import MessageSuccess from "./MessageSuccess";
import ButtonComponent from "../../../../../reusable/ButtonComponent";

const AddProduct = () => {
  const { handleAdd, newProduct, setNewProduct,username } = useContext(AdminContext);
  const [messageSucces, setMessageSucces] = useState(false);

  const inputTexts = getInputTextsConfig(newProduct);

  const handleChangeInputs = (e) => {
    const value = e.target.value;
    setNewProduct({
      ...newProduct,
      [e.target.name]: value,
    });
  };

  const displaySuccessMessage = () => {
    setMessageSucces(true);
    setTimeout(() => {
      setMessageSucces(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(productToAdd, username);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  return (
    <Form
      newProduct={newProduct}
      handleSubmit={handleSubmit}
      inputTexts={inputTexts}
      handleChange={handleChangeInputs}
    >
      <ButtonComponent
        label={"Ajouter un nouveau produit au menu"}
        version="success"
      />
      <MessageSuccess messageSucces={messageSucces} />
    </Form>
  );
};

export default AddProduct;

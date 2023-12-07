import { useContext } from "react";
import AdminContext from "../../../../../../context/AdminContext";
import { getInputTextsConfig } from "./inputTextConfig";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";

const EditForm = () => {
  const { productSelected, handleEdit, setProductSelected, inputTitleRef } =
    useContext(AdminContext);
  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const editingProduct = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(editingProduct);
    handleEdit(editingProduct);
  };

  return (
    <Form
      newProduct={productSelected}
      inputTexts={inputTexts}
      handleChange={handleChange}
      ref={inputTitleRef}
    >
      <EditInfoMessage />
    </Form>
  );
};

export default EditForm;

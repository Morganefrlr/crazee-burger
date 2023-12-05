import styled from "styled-components";
import { theme } from "../../../../../../theme";
import EditFormEmpty from "./EditFormEmpty";
import { useContext} from "react";
import AdminContext from "../../../../../../context/AdminContext";
import ImageContainer from "./ImageContainer";
import { getInputTextsConfig } from "./inputTextConfig";
import InputText from "../../../../../reusable/InputText";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

const EditForm = () => {
  const { productSelected, handleEdit, setProductSelected } =
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
    <EditStyled>
      {productSelected !== EMPTY_PRODUCT ? (
        <>
          <ImageContainer
            imageSource={productSelected.imageSource}
            title={productSelected.title}
          />
          <form action="submit">
            {inputTexts.map((item) => {
              return (
                <InputText
                  key={item.id}
                  onChange={handleChange}
                  {...item}
                  version="product"
                />
              );
            })}
          </form>
        </>
      ) : (
        <EditFormEmpty />
      )}
    </EditStyled>
  );
};

const EditStyled = styled.div`
  display: flex;
  padding-top: 30px;
  padding-left: 71px;
  gap: 20px;
  width: 100%;
  background-color: ${theme.colors.white};
  height: 240px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px -6px 8px -2px #0000001a;

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
  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 50%;

    .buttonContainer {
      display: flex;
      gap: 15px;
      align-items: center;
    }
  }
`;
export default EditForm;

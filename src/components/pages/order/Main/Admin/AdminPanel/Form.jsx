import React from "react";
import ImageContainer from "./ImageContainer";
import InputText from "../../../../../reusable/InputText";
import styled from "styled-components";
import { theme } from "../../../../../../theme";


const Form = React.forwardRef(
  ({ handleSubmit, inputTexts, handleChange, newProduct, children }, ref) => {
    return (
      <AddProductStyled>
        <ImageContainer
          imageSource={newProduct.imageSource}
          title={newProduct.title}
        />
        <form action="submit" onSubmit={handleSubmit}>
          {inputTexts.map((item) => {
            return (
              <InputText
                key={item.id}
                onChange={handleChange}
                {...item}
                version="product"
                ref={ref && item.name === "title" ? ref : null}
              />
            );
          })}
          <div className="formFooter">{children}</div>
        </form>
      </AddProductStyled>
    );
  }
);

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
  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 50%;

    .formFooter {
      display: flex;
      gap: 15px;
      align-items: center;
    }
  }
`;
export default Form;

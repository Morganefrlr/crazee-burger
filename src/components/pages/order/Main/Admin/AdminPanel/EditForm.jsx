
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { HiCursorClick } from "react-icons/hi";


const EditForm = () => {

  return (
    <EditStyled>
      
        <div className="editProduct">
          <p>Cliquez sur un produit pour le modifier</p>
          <HiCursorClick className="icon" />
        </div>


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
export default EditForm;

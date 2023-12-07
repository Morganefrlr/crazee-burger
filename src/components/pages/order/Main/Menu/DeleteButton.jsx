import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import AdminContext from "../../../../../context/AdminContext";
import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";

const DeleteButton = ({ id, className}) => {
  const { adminMode, handleDelete } = useContext(AdminContext);

  const handleDeleteProduct = (idToDelete,e) => {
    e.stopPropagation()
    handleDelete(idToDelete);
  };

  return (
    <>
      {adminMode && (
        <DeleteButtonStyled
          className={className}
          onClick={(e) => handleDeleteProduct(id,e)}
        >
          <TiDelete className="icon" />
        </DeleteButtonStyled>
      )}
    </>
  );
};

const DeleteButtonStyled = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  .icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    fill: ${theme.colors.primary};
    &:hover {
      fill: ${theme.colors.red};
    }
  }
  
`;





export default DeleteButton;

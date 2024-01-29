import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import AdminContext from "../../../../../context/AdminContext";
import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";
import { fadeInFromRight } from "../../../../../theme/animation";

const DeleteButton = ({ id, className, handleDelete}) => {
  const { adminMode } = useContext(AdminContext);

  

  return (
    <>
      {adminMode && (
        <DeleteButtonStyled
          className={className}
          onClick={(e) => handleDelete(e,id)}
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
  animation: ${fadeInFromRight} 300ms ease-in-out;
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

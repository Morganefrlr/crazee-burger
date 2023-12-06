import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import AdminContext from "../../../../../context/AdminContext";
import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";

const DeleteButton = ({ id, version = "normal" }) => {
  const { adminMode, handleDelete } = useContext(AdminContext);

  const handleDeleteProduct = (idToDelete) => {
    handleDelete(idToDelete);
  };

  return (
    <>
      {adminMode && (
        <DeleteButtonStyled
          className="deleteIconContainer"
          onClick={() => handleDeleteProduct(id)}
          version={version}
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
  }
  ${({ version }) => extraStyle[version]}
`;
const extraStyleNormal = css`
  .icon {
    fill: ${theme.colors.primary};
    &:hover {
      fill: ${theme.colors.red};
    }
  }
`;

const extraSytleOrange = css`
  .icon {
    fill: ${theme.colors.white};
    &:hover {
      fill: ${theme.colors.red};
    }
    &:active {
      fill: ${theme.colors.white};
    }
  }
`;

const extraStyle = {
  orangeBackground: extraSytleOrange,
  normal: extraStyleNormal,
};

export default DeleteButton;

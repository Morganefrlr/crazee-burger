import { theme } from "../../../../../theme";
import styled from "styled-components";
import AdminContext from "../../../../../context/AdminContext";
import { useContext } from "react";

const Tab = ({
  iconDown,
  iconUp,
  icon,
  label,
  id,
  openEditProduct,
  openAddProduct,
}) => {
  const { setOpenEdit, openEdit, setOpenAddProduct, setOpenEditProduct } =
    useContext(AdminContext);

  const handleClick = (id) => {
    if (id === "arrow") {
      setOpenEdit(!openEdit);
      console.log(openEdit, id)
    }
    if (id === "add" || id === "edit") {
      setOpenEdit(true);
      
      console.log("edit: " + openEditProduct);
      console.log("add: " + openAddProduct);
    }
  };

  console.log();
  return (
    <TabStyled onClick={() => handleClick(id)}>
      {openEdit ? iconDown : iconUp}
      {icon}
      {label && <p>{label}</p>}
    </TabStyled>
  );
};

const TabStyled = styled.button`
  padding: 20px;
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${theme.colors.greyLight};
  border-bottom: 2px solid ${theme.colors.greyLight};
  box-shadow: 0px -6px 8px -2px #0000001a;
  color: ${theme.colors.greySemiDark};
  gap: 13px;
  cursor: pointer;
  &:focus {
    background-color: ${theme.colors.background_dark};
    border: ${theme.colors.background_dark};
  }
  .icon {
    font-size: larger;
  }
  p {
    text-transform: capitalize;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Tab;

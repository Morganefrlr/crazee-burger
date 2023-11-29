import { theme } from "../../../../../theme";
import styled from "styled-components";
import AdminContext from "../../../../../context/AdminContext";
import { useContext, useState } from "react";

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

    const [className, setClassName] = useState("")
  const handleClick = (id) => {
    if (id === "arrow") {
      setOpenEdit(!openEdit);
      

    }
    if (id === "add") {
      setOpenEdit(true);
      setOpenAddProduct(openAddProduct)
      setOpenEditProduct(openEditProduct)

    }
    if(id === "edit"){
      setOpenEdit(true);
      setOpenAddProduct(openAddProduct)
      setOpenEditProduct(openEditProduct)

    }
    setClassName("")
  };

  console.log();
  return (
    <TabStyled onClick={() => handleClick(id)} >
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
  &.isActive{
      background-color: aquamarine;
  }
`;
export default Tab;

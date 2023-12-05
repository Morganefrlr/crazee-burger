import { theme } from "../../../../../theme";
import styled from "styled-components";



const Tab = ({
  icon,
  label,
  onClick,
  className
}) => {



  return (
    <TabStyled onClick={onClick} className={className}>
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
    &:hover {
      text-decoration: underline;
    }
  }
  
  &.isActive{
    background-color: ${theme.colors.background_dark};
    border: ${theme.colors.background_dark};
  }
`;





export default Tab;

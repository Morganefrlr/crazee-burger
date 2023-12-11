import styled from "styled-components";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import AdminContext from "../../../../context/AdminContext";
import Cart from "./Cart/Cart";

const Main = () => {
  const {adminMode} = useContext(AdminContext)
  return (
    <MainStyled>
      <div className="cart">
        <Cart/>
      </div>
      <div className="container_MenuAdmin">
        <Menu />
        {adminMode && <Admin/>}
      </div>
      
    </MainStyled>
  );
};

const MainStyled = styled.div`
  width: 1400px;
  height: 100%;
  background-color: #f5f5f7;
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0 0 15px 15px;
  margin-bottom: 25px;
  overflow: scroll;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
  .container_MenuAdmin{
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
  }







  
  .cart{
    display: flex,
  }
`;

export default Main;

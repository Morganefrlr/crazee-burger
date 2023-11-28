import styled from "styled-components";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";

const Main = () => {
  return (
    <MainStyled>
      <div className="cart">test</div>
      <div className="container_MenuAdmin">
        <Menu />
        <Admin/>
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
    display: none;
  }
`;

export default Main;

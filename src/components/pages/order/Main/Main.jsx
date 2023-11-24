import styled from "styled-components";
import Menu from "./Menu";

const Main = () => {
  return (
    <MainStyled>
      <Menu />
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
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Main;

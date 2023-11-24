import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./Main/Main";

const OrderPage = () => {
  const params = useParams();
  const name = params.id;

  return (
    <OrderMainStyled>
      <Navbar name={name} />
      <Main />
      <ToastContainer position="bottom-right" theme="dark" autoClose={1500} />
    </OrderMainStyled>
  );
};
const OrderMainStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default OrderPage;

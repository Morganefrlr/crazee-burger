import { useParams} from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";

const OrderPage = () => {
  const params = useParams();
  const name = params.id;

  return (
    <OrderMainStyled>
      <Navbar name={name} />
      <div className="main">main</div>
    </OrderMainStyled>
  );
};
const OrderMainStyled = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;

    .main{
      width: 1400px;
      height: 100%;
      background-color:#F5F5F7;
      box-shadow: 0 8px 20px 8px rgba(0,0,0,0.2) inset;
      border-radius: 0 0 15px 15px;
      margin-bottom: 25px;
    }
`

export default OrderPage;

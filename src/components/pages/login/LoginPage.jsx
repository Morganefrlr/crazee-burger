import LoginForm from "./LoginForm";
import Logo from "./Logo";
import styled from "styled-components";


const LoginPage = () => {
  return (
    <LoginPageStyled>
      <div className="filterDiv">
        <div className="logo"><Logo/></div>
        <LoginForm />
      </div>
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  background-image: url('/images/F03-burger-background.jpg');
  width: 100vw;
  height: 100vh;
  background-size: cover;
  .filterDiv {
    display: flex;
    flex-direction: column;
    gap: 100px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #000000a7;
    .logo{
      transform: scale(2.5);
    }
  }
`;

export default LoginPage;

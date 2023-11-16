import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";
import styled from "styled-components";
import back from "../assets/F03-burger-background.jpg";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <div className="filterDiv">
        <Logo />
        <LoginForm />
      </div>
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  background-image: url(${back});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  .filterDiv{
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #00000025;
    backdrop-filter: blur(4px);
  }
`;

export default LoginPage;

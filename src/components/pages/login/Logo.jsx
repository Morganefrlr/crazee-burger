//import logo from "../assets/F03-logo-orange.png";
import styled from "styled-components";
import { theme } from "../../../theme/index";

const Logo = () => {
  return (
    <DivLogoStyled>
      <h1>Crazee</h1>
      <img src="/images/F03-logo-orange.png" alt="" />
      <h1>Burger</h1>
    </DivLogoStyled>
  );
};

const DivLogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: ${theme.colors.primary};
  h1 {
    font-family: "Amatic SC", sans-serif;
    font-size: 110px;
    font-weight: ${theme.weights.bold};
    text-transform: uppercase;
  }
  img {
    width: 250px;
    height: 150px;
  }
`;

export default Logo;

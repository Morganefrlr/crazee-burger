import styled from "styled-components";
import { theme } from "../../../theme/index";

const Logo = () => {
  return (
    <DivLogoStyled >
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
  gap: 4px;
  color: ${theme.colors.primary};
  
  h1 {
    font-family: "Amatic SC", sans-serif;
    font-size: 36px;
    font-weight: ${theme.weights.bold};
    text-transform: uppercase;
  }
  img {
    width: 80px;
    height: 60px;
  }
`;

export default Logo;

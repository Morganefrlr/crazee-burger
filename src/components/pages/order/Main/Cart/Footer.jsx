import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

const Footer = () => {
  return <FooterStyled>Codé avec ❤️ et React.JS</FooterStyled>;
};

const FooterStyled = styled.span`
  font-size: 20px;
  color: ${theme.colors.white};
`;
export default Footer;

import styled from "styled-components";

import { theme } from "../../../../theme";
import Logo from "../../login/Logo";
import RightSide from "./RightSide";

const Navbar = ({ name }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <NavbarStyled>
      <div onClick={handleClick} className="navLinkLogo">
        <Logo />
      </div>
      <RightSide name={name} />
    </NavbarStyled>
  );
};

const NavbarStyled = styled.div`
  width: 1400px;
  height: 98px;
  margin-top: 25px;
  background-color: ${theme.colors.white};
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px 0 20px;
  border-bottom: 1px solid #8a8a8a69;

  .navLinkLogo {
    cursor: pointer;
  }
`;

export default Navbar;

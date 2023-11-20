import { Link } from "react-router-dom";
import styled from "styled-components";

import { PiUserCircleFill } from "react-icons/pi";
import { theme } from "../../../theme";
import Logo from "../login/Logo";



const Navbar = ({name}) => {


    const handleClick = () =>{
        window.location.reload()
    }


  return (
    <NavbarStyled>
      <div onClick={handleClick} className="navLinkLogo"><Logo/></div>
      <div className="navRight">
        <div>
            <span>Hey, <strong>{name}</strong></span>
            <Link to="/">Se déconnecter</Link>
        </div>
        <PiUserCircleFill className="icon" />
      </div>
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

   .navLinkLogo{
    cursor: pointer;
   }

   .navRight{
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${theme.colors.greyBlue};

    div{
        display: flex;
        flex-direction: column;
        gap: 4px;
        span{
            font-size: 16px;
            font-weight: 400;
            color: inherit;
            strong{
                color: ${theme.colors.primary};
                text-transform: capitalize;
                
            }
        }
        a{
            text-decoration: none;
            color: inherit;
            font-size: 10px;
            cursor: pointer;
            &:hover, &:focus{
                text-decoration: underline;
                text-underline-offset: 4px;
            }
        }
    }
    .icon{
        width: 36px;
        height: 36px;
    }
   }

`
    



export default Navbar;

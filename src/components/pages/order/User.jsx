import { Link } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";
import styled from "styled-components";
import { theme } from "../../../theme";

const User = ({ name }) => {
  return (
    <UserStyled>
      <div>
        <span>
          Hey, <strong>{name}</strong>
        </span>
        <Link to="/">Se déconnecter</Link>
      </div>
      <PiUserCircleFill className="icon" />
    </UserStyled>
  );
};

const UserStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${theme.colors.greyBlue};

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    span {
      font-size: 16px;
      font-weight: 400;
      color: inherit;
      strong {
        color: ${theme.colors.primary};
        text-transform: capitalize;
      }
    }
    a {
      text-decoration: none;
      color: inherit;
      font-size: 10px;
      cursor: pointer;
      &:hover,
      &:focus {
        text-decoration: underline;
        text-underline-offset: 4px;
      }
    }
  }
  .icon {
    width: 36px;
    height: 36px;
  }
`;

export default User;

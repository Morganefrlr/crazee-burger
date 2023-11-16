import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../index";
import { PiUserCircleFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

const LoginForm = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    navigate(`/order/${name}`);
  };

  return (
    <FormLoginStyled action="submit" onSubmit={handleSubmit}>
      <h2>Bienvenue chez nous!</h2>
      <hr />
      <div className="loginDiv">
        <h3>Connectez-vous</h3>
        <InputNameStyled >
          <PiUserCircleFill className="userIcon" />
          <input
            type="text"
            placeholder="Entrez votre prénom..."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputNameStyled>
        <ButtonStyled>
          Accédez à votre espace
          <IoIosArrowForward className="arrowIcon" />
        </ButtonStyled>
      </div>
    </FormLoginStyled>
  );
};

const FormLoginStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2,
  h3 {
    font-family: "Amatic SC", sans-serif;
    color: ${theme.colors.white};
    font-weight: ${theme.weights.bold};
  }
  h2 {
    font-size: 48px;
  }
  h3 {
    font-size: 36px;
  }
  hr {
    width: 400px;
    height: 3px;
    background-color: #f56a2c;
    border: 1px solid #f56a2c;
    margin-top: 32px;
    margin-bottom: 40px;
  }
  .loginDiv {
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: center;
  }
`;

const InputNameStyled = styled.div`
  display: flex;
  width: 400px;
  height: 55px;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  .userIcon {
    fill: ${theme.colors.greyBlue};
  }
  input {
    height: fit-content;
    font-size: 15px;
    border: none;
    outline: none;
    width: 80%;
    padding: 1px;
  }
`;

const ButtonStyled = styled.button`
  height: 53px;
  width: 100%;
  background-color: ${theme.colors.primary_burger};
  border: 1px solid ${theme.colors.primary_burger};
  border-radius: 5px;
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: ${theme.weights.bold};
  font-size: 15px;
  cursor: pointer;
  .arrowIcon {
    height: auto;
  }
  &:focus {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
  }
`;

export default LoginForm;

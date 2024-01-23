import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import { PiUserCircleFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import InputText from "../../reusable/InputText";
import ButtonComponent from "../../reusable/ButtonComponent";
import { authUser} from "../../../api/user";

const LoginForm = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    authUser(name)
    setName("");
    navigate(`/order/${name}`);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <FormLoginStyled action="submit" onSubmit={handleSubmit}>
      <h2>Bienvenue chez nous!</h2>
      <hr />
      <div className="loginDiv">
        <h3>Connectez-vous</h3>
        <InputText
          value={name}
          onChange={handleChange}
          icon={<PiUserCircleFill className="inputIcon" />}
          required
          type="text"
          placeholder="Entrez votre prénom..."
        />
        <ButtonComponent 
          icon={<IoIosArrowForward className="btnIcon" />}
          label={'Accédez à mon espace'}
          version="large"
        />
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
    font-weight: ${theme.fonts.weights.bold};
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

    .buttonLogin{
      height: 53px;
      font-size: 15px;
    }
  }
`;

export default LoginForm;

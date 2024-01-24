import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";
import ButtonComponent from "../../../../reusable/ButtonComponent";
import styled from "styled-components";
import { theme } from "../../../../../theme";

const EmptyMenu = () => {
  const { adminMode, handleGenerate } = useContext(AdminContext);

  return (
    <EmptyMenuStyled>
      {adminMode ? (
        <>
          <p>Le menu est vide?</p>
          <p>Cliquez ci-dessous pour le réinitialiser</p>
          <ButtonComponent
            label={"Générer de nouveaux produits"}
            version="normal"
            onClick={handleGenerate}
          />
        </>
      ):
      (
        <>
          <p>Victime de notre succès! :D</p>
          <p>De nouvelles recettes sont en cours de préparation.</p>
          <p>À très vite!</p>
        </>
      )}
    </EmptyMenuStyled>
  );
};

const EmptyMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-content: center;
  gap: 21px;

  p {
    font-family: "Amatic SC", sans-serif;
    font-size: 36px;
    color: ${theme.colors.greyBlue};

    &:first-child {
      font-weight: 700;
    }
  }
  .buttonEmptyMenu {
    height: 50px;
    width: 225px;
    font-size: 12px;
  }
`;
export default EmptyMenu;

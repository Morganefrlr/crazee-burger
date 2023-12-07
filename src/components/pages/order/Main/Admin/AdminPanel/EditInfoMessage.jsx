
import styled from "styled-components";
import { theme } from "../../../../../../theme";

const EditInfoMessage = () => {
  return (
    <EditInfoMessageStyled>
      Cliquer sur un produit du menu pour le modifier{" "}
      <span className="live-update">en temps réel</span>
    </EditInfoMessageStyled>
  );
};
const EditInfoMessageStyled = styled.span`
  color: ${theme.colors.primary};
  font-size: 15px;
  .live-update {
    text-decoration: underline;
  }
`;
export default EditInfoMessage;

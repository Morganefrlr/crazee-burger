import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FiCheck } from "react-icons/fi";

const MessageSuccess = ({ messageSucces }) => {
  return (
    <>
      {messageSucces && (
        <MessageSuccessStyled>
          <FiCheck className="icon" />
          <p>Ajouté avec succès!</p>
        </MessageSuccessStyled>
      )}
    </>
  );
};

const MessageSuccessStyled = styled.div`
  color: ${theme.colors.success};
  font-size: 15px;
  display: flex;
  gap: 5px;
  .icon {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid ${theme.colors.success};
  }
`;

export default MessageSuccess;

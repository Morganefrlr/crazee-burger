
import User from "../Navbar/User";
import styled from "styled-components";
import ToggleButton from "../../../reusable/ToggleButton";
import { toast } from "react-toastify";
import { useState } from "react";

const RightSide = ({ name }) => {
  const [adminMode, setAdminMode] = useState(false);

  const displayToast = () => {
    setAdminMode(!adminMode);
    if (!adminMode) {
      toast.info("Mode admin activé", {
        closeOnClick: true,
      });
    }
  };
  return (
    <RightSideStyled>
      <ToggleButton 
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactive le mode admin"
        onToggle={displayToast}
      />
      <User name={name} />
    </RightSideStyled>
  );
};

const RightSideStyled = styled.div`
  display: flex;
  gap: 60px;
`;
export default RightSide;

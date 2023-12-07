
import User from "../Navbar/User";
import styled from "styled-components";
import ToggleButton from "../../../reusable/ToggleButton";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import AdminContext from "../../../../context/AdminContext";

const RightSide = ({ name }) => {
  const [adminModeBtn, setAdminModeBtn] = useState(false);
  const{setAdminMode, setIsCollapsed} = useContext(AdminContext)

  const displayToast = () => {
    setAdminModeBtn(!adminModeBtn);
    if (!adminModeBtn) {
      toast.info("Mode admin activé", {
        closeOnClick: true,
      });
      setIsCollapsed(true)
      setAdminMode(true)
    } else{
      setAdminMode(false)
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

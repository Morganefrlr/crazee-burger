import styled from "styled-components";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";
import { tabsConfig } from "./tabsConfig";

const AdminPanelTabs = () => {
  const { tabSelected,setTabSelected, isCollapsed, setIsCollapsed } = useContext(AdminContext);
  const tabs = tabsConfig;


  
  return (
    <TabsStyled>
      <Tab
        index={"arrow"}
        icon={isCollapsed ?<FiChevronUp/> : <FiChevronDown/> }
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? 'isActive' : ''}
      />
      {tabs.map((item) => {
        return (
          <Tab
            label={item.label}
            icon={item.icon}
            key={item.index}
            index={item.index}
            onClick={() => setTabSelected(item.index)}
            className={tabSelected === item.index ? 'isActive' : ''}
          />
        );
      })}
    </TabsStyled>
  );
};

const TabsStyled = styled.div`
  display: flex;
  gap: 1px;
  padding-left: 127px;
  height: 43px;
`;

export default AdminPanelTabs;

import { useContext } from 'react';
import AdminContext from '../../../../../../context/AdminContext';
import { getTabSelected, tabsConfig } from '../tabsConfig';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import styled from 'styled-components';
import { theme } from '../../../../../../theme';

const AdminPanel = () => {

    const {tabSelected, productSelected} = useContext(AdminContext)

    const productHasBeenClicked = productSelected === EMPTY_PRODUCT
    const tabs = tabsConfig(productHasBeenClicked)
    const tabsSelected = getTabSelected(tabs, tabSelected)

    return (
        <AdminPanelStyled>
            {tabsSelected  && tabsSelected.Content}
        </AdminPanelStyled>
    );
};

const AdminPanelStyled = styled.div`
 display: flex;
  width: 100%;
  background-color: ${theme.colors.white};
  height: 240px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px -6px 8px -2px #0000001a;
`

export default AdminPanel;
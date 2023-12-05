import { useContext } from 'react';
import AdminContext from '../../../../../../context/AdminContext';
import { getTabSelected, tabsConfig } from '../tabsConfig';

const AdminPanel = () => {

    const {tabSelected} = useContext(AdminContext)


    const tabs = tabsConfig
    const tabsSelected = getTabSelected(tabs, tabSelected)
    return (
        <div>
            {tabsSelected  && tabsSelected.Content}
        </div>
    );
};

export default AdminPanel;
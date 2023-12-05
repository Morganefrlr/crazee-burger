import { useContext } from 'react';
import styled from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';
import AdminPanelTabs from './AdminPanelTabs';
import AdminPanel from './AdminPanel/AdminPanel';
;

const Admin = () => {


const {isCollapsed} = useContext(AdminContext)




    return (
        <AdminStyled>
            <AdminPanelTabs/>
            {!isCollapsed && <AdminPanel/>}
        </AdminStyled>
    );
};

const AdminStyled = styled.div`
position: absolute;
bottom: 0;
right: 0;
left: 0;

`


export default Admin;
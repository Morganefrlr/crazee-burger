import { useContext } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';

import AdminContext from '../../../../../context/AdminContext';
import Edit from './Edit/Edit';


const Admin = () => {


const {openAdminPanel} = useContext(AdminContext)

    return (
        <AdminStyled>
            <Tabs/>
            {openAdminPanel &&
                <Edit />
            }
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
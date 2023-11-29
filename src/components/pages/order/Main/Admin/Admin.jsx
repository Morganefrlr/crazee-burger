import React, { useContext } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Edit from './Edit';
import AdminContext from '../../../../../context/AdminContext';


const Admin = () => {
const {openEdit} = useContext(AdminContext)

    return (
        <AdminStyled>
            <Tabs/>
            {openEdit && <Edit/>}
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
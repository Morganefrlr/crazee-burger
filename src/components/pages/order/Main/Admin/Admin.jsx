import React from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Edit from './Edit';


const Admin = () => {
    return (
        <AdminStyled>
            <Tabs/>
            <Edit/>
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
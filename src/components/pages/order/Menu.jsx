import React from 'react';
import styled from 'styled-components';
import Card from '../../reusable/Card';

const Menu = () => {
    return (
        <MenuStyled>
            <Card/>
        </MenuStyled>
    );
};


const MenuStyled = styled.div`
    width: 1400px;
    height: 100%;
    background-color: #f5f5f7;
    box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0 0 15px 15px;
    margin-bottom: 25px;
`

export default Menu;
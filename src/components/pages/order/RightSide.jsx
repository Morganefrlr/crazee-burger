import React from 'react';
import User from './User';
import ButtonAdmin from './ButtonAdmin';
import styled from 'styled-components';

const RightSide = ({name}) => {
    return (
        <RightSideStyled>
            <ButtonAdmin />
            <User name={name}/>
        </RightSideStyled>
    );
};

const RightSideStyled = styled.div`
    display: flex;
    gap: 60px;
    
`
export default RightSide;
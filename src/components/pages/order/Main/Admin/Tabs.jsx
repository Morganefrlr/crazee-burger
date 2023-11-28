import React from 'react';
import styled from 'styled-components';

import Tab from './Tab';


const Tabs = () => {
    return (
        <TabsStyled>
            <Tab/>
            <Tab/>
            <Tab/>

        </TabsStyled>
    );
};

const TabsStyled = styled.div`
    display: flex;
    gap: 1px;
    padding-left: 127px;
    height: 43px;
    
`


export default Tabs;
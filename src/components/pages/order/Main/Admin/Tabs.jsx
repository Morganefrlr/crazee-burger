import styled from 'styled-components';
import Tab from './Tab';
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'
import { tabsData } from '../../AdminData';
import { useContext, useState } from 'react';
import AdminContext from '../../../../../context/AdminContext';

const Tabs = () => {
    const {tabSelected} = useContext(AdminContext)
    const tabs = tabsData(tabSelected)

    return (
        <TabsStyled>
            <Tab iconDown={<FiChevronDown className='icon' />} iconUp={<FiChevronUp className='icon' />} id={'arrow'}/>
            {tabs.map((item) => {
                return (
                    <Tab label={item.label} 
                    icon={item.icon} 
                    key={item.id} 
                    id={item.id} 
                    className={item.className}
                    />
                )
            })}
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
import styled from 'styled-components';
import Tab from './Tab';
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'
import { tabsData } from '../../AdminData';

const Tabs = () => {
    

    return (
        <TabsStyled>
            <Tab iconDown={<FiChevronDown className='icon' />} iconUp={<FiChevronUp className='icon' />} id={'arrow'}/>
            {tabsData.map((item) => {
                return (
                    <Tab label={item.label} 
                    icon={item.icon} 
                    key={item.id} 
                    id={item.id} 
                    openAddProduct={item.openAddProduct}
                    openEditProduct={item.openEditProduct}/>
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
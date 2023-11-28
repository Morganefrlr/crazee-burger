import {FiChevronDown} from 'react-icons/fi'
import { theme } from '../../../../../theme';
import styled from 'styled-components';


const Tab = () => {
    return (
        
            <TabStyled>
                <FiChevronDown className='icon'/>
            </TabStyled>
     
    );
};

const TabStyled = styled.button`
        padding: 20px;
        background-color: ${theme.colors.white};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:5px ; 
        border : 1px solid ${theme.colors.greyLight};
        border-bottom: 2px solid ${theme.colors.greyLight};
        box-shadow: 0px -6px 8px -2px #0000001a;
        color: ${theme.colors.greySemiDark};
        cursor: pointer;
        &:hover{
            background-color: ${theme.colors.background_dark};
            border: ${theme.colors.background_dark};
        }
        .icon{
             font-size: larger;
        }

   

`
export default Tab;
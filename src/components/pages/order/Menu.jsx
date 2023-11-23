
import styled from 'styled-components';
import Card from '../../reusable/Card';
import { fakeMenu2 } from '../../../utils/Data';


const Menu = () => {
    return (
        <MenuStyled>
            {fakeMenu2.map(item =>
               <Card key={item.id} menu={item}/>
            )}
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
    padding: 50px 85px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 60px 85px ; 
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
        
    }

`

export default Menu;
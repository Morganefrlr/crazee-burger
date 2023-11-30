
import {AiOutlinePlus} from 'react-icons/ai'
import {MdModeEditOutline} from 'react-icons/md'


  

export const tabsData = (tabSelected) => [
  {
    id: "add",
    label: "Ajouter un produit",
    icon:<AiOutlinePlus/> ,
    className: tabSelected === 'add' ? 'isActive':'',
  },
  {
    id: "edit",
    label: "Modifier un produit",
    icon : <MdModeEditOutline/> ,
    className: tabSelected === 'edit' ? 'isActive' : '',
    
  },
];





import {AiOutlinePlus} from 'react-icons/ai'
import {MdModeEditOutline} from 'react-icons/md'

export const tabsData = [
  {
    id: "add",
    label: "Ajouter un produit",
    openAddProduct: true,
    openEditProduct: false,
    icon:<AiOutlinePlus/> ,
  },
  {
    id: "edit",
    label: "Modifier un produit",
    openAddProduct: false,
    openEditProduct: true,
    icon : <MdModeEditOutline/> ,
  },
];

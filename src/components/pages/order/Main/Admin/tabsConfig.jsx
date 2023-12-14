import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import EditFormEmpty from "./AdminPanel/EditFormEmpty";
import { findInArray } from "../../../../../utils/array";

export const tabsConfig = (productHasBeenClicked) => [
  {
    index: "add",
    label: "Ajouter un produit",
    icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    icon: <MdModeEditOutline />,
    Content: productHasBeenClicked ? <EditFormEmpty /> : <EditForm />,
  },
];

export const getTabSelected = (tabs, tabSelected) => {
  return tabs.find((tab) => tab.index === tabSelected);
};

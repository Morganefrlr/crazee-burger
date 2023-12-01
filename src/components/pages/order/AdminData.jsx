import { AiOutlinePlus } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { MdModeEditOutline, MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";

export const tabsData = (tabSelected) => [
  {
    id: "add",
    label: "Ajouter un produit",
    icon: <AiOutlinePlus />,
    className: tabSelected === "add" ? "isActive" : "",
  },
  {
    id: "edit",
    label: "Modifier un produit",
    icon: <MdModeEditOutline />,
    className: tabSelected === "edit" ? "isActive" : "",
  },
];

export const getInputTextsConfig = (product) => [
  {
    id: 1,
    icon: <FaHamburger className="inputIcon" />,
    type: "text",
    name:"title",
    placeholder: "Nom du produit (ex: Super Burger)",
    value:product.title,
  },
  {
    id: 2,
    icon: <BsFillCameraFill className="inputIcon" />,
    type: "url",
    name:"imageSource",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
   value:product.imageSource,
  },
  {
    id: 3,
    icon: <MdOutlineEuro className="inputIcon" />,
    type: "text",
    name:"price",
    placeholder: "Prix",
    value:product.price,
  },
];


import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";



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

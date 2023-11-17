import { useParams, useNavigate } from "react-router-dom";

const OrderPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const name = params.id;

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Bonjour {name}</h1>
      <button onClick={handleClick}>Déconnexion</button>
    </div>
  );
};

export default OrderPage;

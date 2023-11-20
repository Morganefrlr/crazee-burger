import { useParams} from "react-router-dom";
import Navbar from "./Navbar";

const OrderPage = () => {
  const params = useParams();
  const name = params.id;

  return (
    <div>
      <Navbar name={name}/>
      <div>main</div>
    </div>
  );
};

export default OrderPage;

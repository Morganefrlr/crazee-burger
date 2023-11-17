import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/login/LoginPage";
import OrderPage from "../components/pages/order/OrderPage";
import ErrorPage from "../components/pages/error/ErrorPage";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginPage />}/>
                <Route path="/order/:id" element={<OrderPage />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
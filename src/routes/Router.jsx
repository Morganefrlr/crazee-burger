import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from '../pages/LoginPage'
import OrderPage from '../pages/OrderPage'
import ErrorPage from '../pages/ErrorPage'

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
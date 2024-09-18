import { Route, Routes } from "react-router-dom";
import Home from "../pages/public/Home";
import Register from "../pages/public/Register";
import HomeUserPrivate from "../pages/private/userPrivate/Home";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export const PrivateUserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeUserPrivate />} />
        </Routes>
    );
};

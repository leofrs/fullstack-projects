import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/public/Home";
import Register from "../pages/public/Register";
import HomeUserPrivate from "../pages/private/userPrivate/Home";
import PublicLayout from "../pages/public/Public-Layout";
import UserPrivateLayout from "../pages/private/userPrivate/User-Private-Layout";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Navigate to="/home" />} />
                <Route path="home" element={<Home />} />
                <Route path="home/register" element={<Register />} />
            </Route>
        </Routes>
    );
};

export const PrivateUserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UserPrivateLayout />}>
                <Route index element={<Navigate to="/auth/user/home" />} />
                <Route path="auth/user/home" element={<HomeUserPrivate />} />
            </Route>
        </Routes>
    );
};

import { Routes, Route } from "react-router-dom";
import PublicLayout from "../pages/public/PublicLayout";
import ProtectedLayout from "../pages/private/ProtectedLayout";
import HomePagePrivate from "../pages/private/HomePagePrivate";
import HomePagePublic from "../pages/public/HomePagePublic";
import LoginPagePublic from "../pages/public/LoginPagePublic";
import RegisterPagePublic from "../pages/public/RegisterPagePublic";
import AddPagePrivate from "../pages/private/AddPagePrivate";

import { useContext } from "react";
import { UserContext } from "../context/userContext";

function RouterIndex() {
  const context = useContext(UserContext);
  const { user } = context;

  return (
    <Routes>
      {/*Rotas Privadas antes dos ":" e Rotas Públicas após*/}
      {user ? (
        <Route path="/auth/" element={<ProtectedLayout />}>
          <Route index element={<HomePagePrivate />} />
          <Route path="/auth/addPage" element={<AddPagePrivate />} />
        </Route>
      ) : (
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePagePublic />} />
          <Route path="/login" element={<LoginPagePublic />} />
          <Route path="/register" element={<RegisterPagePublic />} />
        </Route>
      )}
    </Routes>
  );
}

export default RouterIndex;

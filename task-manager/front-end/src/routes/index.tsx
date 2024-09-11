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
import NotFoundPage from "../pages/NotFoundPage";

function RouterIndex() {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <Routes>
      {/* Rotas públicas */}
      {isAuthenticated ? (
        <Route path="/" element={<ProtectedLayout />}>
          <Route index path="auth/home" element={<HomePagePrivate />} />
          <Route path="addPage" element={<AddPagePrivate />} />
        </Route>
      ) : (
        <Route path="/" element={<PublicLayout />}>
          <Route index path="home" element={<HomePagePublic />} />
          <Route path="login" element={<LoginPagePublic />} />
          <Route path="register" element={<RegisterPagePublic />} />
        </Route>
      )}

      {/* Rota 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RouterIndex;

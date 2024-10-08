import { Routes, Route } from "react-router-dom";
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
      {isAuthenticated ? (
        <>
          <Route index path="/" element={<HomePagePrivate />} />
          <Route path="/addPage" element={<AddPagePrivate />} />
        </>
      ) : (
        <>
          <Route path="/" element={<HomePagePublic />} />
          <Route path="/login" element={<LoginPagePublic />} />
          <Route path="/register" element={<RegisterPagePublic />} />
        </>
      )}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RouterIndex;

import { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function HomePagePrivate() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { user, setIsAuthenticated } = context;

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    setIsAuthenticated(false);
    navigate("/home");
  };

  return (
    <main className="border border-red-400 w-full h-screen p-16">
      <div className="w-full h-20 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-center cursor-default flex flex-col">
          Seja bem vindo!{" "}
          <span className="italic text-sm font-light">Usúario: {user}</span>
        </h1>
        <button
          type="button"
          className="border border-gray-500 rounded-full px-8 py-2 flex gap-4 items-center  hover:border-blue-600"
          onClick={() => handleLogout()}
        >
          <BsArrowRight />
          Sair
        </button>
      </div>
    </main>
  );
}

export default HomePagePrivate;

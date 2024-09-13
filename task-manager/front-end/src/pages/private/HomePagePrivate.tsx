import { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import CardHomeTask from "../../components/cardHomePagePrivate";

function HomePagePrivate() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { user, setIsAuthenticated } = context;

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <main className="w-full h-screen p-16 flex flex-col gap-4">
      <div className="w-full h-20 flex justify-between items-center max-sm:flex-col">
        <h1 className="text-3xl font-bold text-center cursor-default flex flex-col">
          Seja bem vindo!{" "}
          <span className="italic text-sm font-light">Usúario: {user}</span>
        </h1>
        <button
          type="button"
          className="border border-gray-500 rounded-full px-8 py-2 flex gap-4 items-center hover:border-blue-600 max-sm:hidden"
          onClick={() => handleLogout()}
        >
          <BsArrowRight />
          Sair
        </button>
      </div>

      <div className=" w-full h-screen overflow-y-scroll p-4">
        <div className="w-full h-full">
          <CardHomeTask />
        </div>
      </div>

      <div className="w-full h-auto flex justify-end mt-4 max-sm:justify-between ">
        <button
          type="button"
          title="AdcTask"
          className="px-4 py-2 border border-gray-600 rounded-full hover:border-blue-600"
          onClick={() => navigate("/addPage")}
        >
          Adicionar Tarefa
        </button>
        <button
          type="button"
          className="border border-gray-500 rounded-full px-8 py-2 gap-4 items-center hover:border-blue-600 hidden max-sm:flex"
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

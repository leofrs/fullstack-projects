import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import FormLogin from "../../components/loginForm";

function LoginPagePublic() {
  const navigate = useNavigate();

  return (
    <main className="w-screen h-screen p-16 flex flex-col justify-between items-center">
      <div className="w-full h-20 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-center cursor-default">Login</h1>
        <button
          type="button"
          className="border border-gray-500 rounded-full px-8 py-2 flex gap-4 items-center  hover:border-blue-600"
          onClick={() => navigate("/")}
        >
          <BsArrowRight />
          Home
        </button>
      </div>

      <div className="flex justify-center items-center w-full h-full flex-wrap">
        <div className="w-2/4 h-full p-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center cursor-default">
            Faça o login
          </h1>
          <FormLogin />
        </div>
        <div className="w-2/4 h-full flex flex-col justify-center items-center gap-12 p-8 cursor-default">
          <div>
            <h1 className="text-3xl font-bold text-center">Socrates</h1>
            <p className="italic font-light text-xl text-center">
              "A vida não examinada não vale a pena ser vivida."
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-center">Aristóteles</h1>
            <p className="italic font-light text-xl text-center">
              "A excelência é um hábito, não um ato."
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-center">Epicteto</h1>
            <p className="italic font-light text-xl text-center">
              "Não são as coisas que nos perturbam, mas a nossa maneira de
              pensar sobre elas."
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-20 flex justify-start items-center">
        <button
          type="button"
          className="border border-gray-500 rounded-full px-8 py-2 flex gap-4 items-center  hover:border-blue-600"
          onClick={() => navigate("/register")}
        >
          <BsArrowRight />
          Cadastre-se
        </button>
      </div>
    </main>
  );
}

export default LoginPagePublic;

import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import FormLogin from "../../components/loginForm";

function LoginPagePublic() {
  const navigate = useNavigate();

  return (
    <main className="w-screen h-screen p-16 flex flex-col justify-between items-center">
      <div className="w-full h-20 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <button
          type="button"
          className="border border-gray-500 rounded-full px-8 py-2 flex gap-4 items-center"
          onClick={() => navigate("/")}
        >
          <BsArrowRight />
          Home
        </button>
      </div>

      <FormLogin />

      <div className="w-full h-20 flex justify-start items-center">
        <button
          type="button"
          className="border border-gray-500 rounded-full px-8 py-2 flex gap-4 items-center"
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

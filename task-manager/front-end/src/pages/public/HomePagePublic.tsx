import imageBg from "../../assets/bg-image.png";
import { CiLogin } from "react-icons/ci";
import { FaRegAddressBook } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

function HomePagePublic() {
  const navigate = useNavigate();

  return (
    <main className="w-screen h-screen p-16 flex">
      <div className="w-2/4 h-full flex flex-col justify-center gap-8 max-sm:w-full">
        <h1 className="text-3xl font-bold text-center cursor-default">
          Task Manager
        </h1>
        <p className="italic cursor-default max-sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
          quae obcaecati, voluptatem inventore sint harum repellat commodi eum
          dicta natus amet, labore aliquid necessitatibus ab totam possimus
          eaque corrupti provident?
        </p>
        <div className="mt-8 w-full flex justify-evenly  max-sm:flex-col  max-sm:gap-8">
          <button
            type="button"
            className="cursor-pointer border border-gray-500 rounded-full px-8 py-2 flex gap-4 items-center hover:border-blue-600  max-sm:justify-center "
            onClick={() => navigate("/login")}
          >
            Entrar
            <CiLogin size={24} />
          </button>
          <button
            type="button"
            className="cursor-pointer border border-gray-500 rounded-full px-8 py-2 flex gap-4 items-center  hover:border-blue-600 max-sm:justify-center"
            onClick={() => navigate("/register")}
          >
            Cadastre-se
            <FaRegAddressBook />
          </button>
        </div>
      </div>

      <div className="w-2/4 h-full flex items-center justify-center max-sm:hidden">
        <img src={imageBg} alt="image-bg" />
      </div>

      <div className="w-full h-auto fixed bottom-0 right-0 ">
        <p className="text-center italic font-light">
          Developed by ©️ Leonardo F. R. Santos
        </p>
      </div>
    </main>
  );
}

export default HomePagePublic;

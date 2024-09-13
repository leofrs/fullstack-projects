import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AddTaskForm from "../../components/addTaskForm";

function AddPagePrivate() {
  const navigate = useNavigate();

  return (
    <main className="w-screen h-screen p-16 flex flex-col justify-between items-center">
      <div className="w-full h-20 flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:h-10">
        <h1 className="text-3xl font-bold text-center cursor-default">
          Criar uma tarefa
        </h1>
        <button
          type="button"
          className="border border-gray-500 rounded-full px-8 py-2 flex gap-4 items-center  hover:border-blue-600"
          onClick={() => navigate("/")}
        >
          <BsArrowRight />
          Voltar
        </button>
      </div>

      <div className="flex justify-center items-center w-full h-full flex-wrap">
        <div className="w-full h-full p-8 flex flex-col items-center justify-center max-sm:p-2 max-sm:w-full">
          <h1 className="text-3xl font-bold text-center cursor-default max-sm:w-full">
            Qual a sua próxima tarefa?
          </h1>
          <AddTaskForm />
        </div>
      </div>
    </main>
  );
}

export default AddPagePrivate;

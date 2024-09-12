import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TaskApi } from "../../api/task";

type Inputs = {
  title: string;
  description: string;
};

export default function AddTaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const taskApi = new TaskApi();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { title, description } = data;
    try {
      const create = await taskApi.createTask({ title, description });

      if (create) {
        alert("Tarefa criada com sucesso");
        data.title = "";
        data.description = "";
        navigate("/auth/home");
      } else {
        alert("Algo de errado aconteceu! Tente novamente");
      }
    } catch (error) {
      console.error("Erro interno:", error);
    }
  };

  return (
    <div className="w-[350px] h-72 rounded p-8 flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="relative">
          <input
            {...register("title", {
              required: true,
            })}
            autoFocus={true}
            type="text"
            id="title_input"
            className="block px-4 py-2 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />

          <label
            htmlFor="title_input"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Título
          </label>
          {errors.title && (
            <span className="italic text-red-500 text-sm">
              Título é obrigatório
            </span>
          )}
        </div>

        <div className="relative">
          <input
            {...register("description")}
            type="text"
            id="description_input"
            className="block px-4 py-2 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />

          <label
            htmlFor="description_input"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Descrição
          </label>
        </div>

        <input
          type="submit"
          value="Criar"
          className="border border-gray-500 cursor-pointer rounded-2xl hover:border-blue-500"
        />
      </form>
    </div>
  );
}

import { useForm, SubmitHandler } from "react-hook-form";
import { TaskApi } from "../../api/task";

type Inputs = {
  title: string;
  description: string;
};

type FormUpdateTaskProps = {
  task: { id: number; title: string; description: string };
  onClose: () => void;
};

export default function FormUpdateTask({ task, onClose }: FormUpdateTaskProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: task.title,
      description: task.description,
    },
  });

  const taskApi = new TaskApi();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { title, description } = data;
    const { id } = task;
    try {
      await taskApi.editTaskById({ id, title, description });
      if (taskApi) {
        alert("Tarefa atualizada com sucesso!");
        onClose();
      } else {
        alert("Não foi possível atualizar a tarefa");
        onClose();
      }
    } catch (error) {
      alert("Erro ao atualizar a tarefa: " + error);
    }
  };

  return (
    <div className="w-[250px] h-80 rounded overflow-hidden mt-16 p-4 ">
      <h4 className="text-center mb-2 font-semibold text-xl">
        Editar Tarefa: {task.title}
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("title", { required: "O campo título é obrigatório" })}
          className="border border-gray-400 p-2 rounded"
          placeholder="Insira o título"
        />
        {errors.title && (
          <span className="text-red-700">{errors.title.message}</span>
        )}

        <textarea
          {...register("description")}
          className="border border-gray-400 p-2 rounded"
          placeholder="Insira a descrição (opcional)"
        />

        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="border border-red-500 cursor-pointer rounded-full font-semibold bg-orange-500 text-white hover:bg-orange-600 p-4"
          >
            Atualizar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="border border-gray-500 cursor-pointer rounded-full font-semibold bg-gray-500 text-white hover:bg-gray-600 p-4"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

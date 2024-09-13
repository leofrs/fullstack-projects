import { useEffect, useState } from "react";
import { TaskApi } from "../../api/task";
import { Task } from "../../@types/context.types";
import ModalAdd from "../modalUpdate";
import FormUpdateTask from "../formUpdate";

function CardHomeTask() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const taskApi = new TaskApi();
    const getTaskByAuthor = async () => {
      try {
        const response = await taskApi.getTaskByAuthor();
        if (!response || !Array.isArray(response)) {
          throw new Error("Dados inválidos retornados da API.");
        }
        setTasks(response);
      } catch (error) {
        console.error(`Erro ao carregar tarefas: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    getTaskByAuthor();
  }, [tasks]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (tasks.length === 0) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="font-normal italic text-2xl">Nenhuma Tarefa encontrada</p>
      </div>
    );
  }

  const handleCheckboxChange = async (id: number, isChecked: boolean) => {
    const newChecked = !isChecked;
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isChecked: newChecked } : task
    );
    setTasks(updatedTasks);

    const taskApi = new TaskApi();
    try {
      await taskApi.taskConclude({ id, isChecked: newChecked });
    } catch (error) {
      console.error("Erro ao atualizar a tarefa:", error);
    }
  };

  const handleEditClick = (task: Task) => {
    setTaskToEdit(task);
    setModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    const isConfirmed = window.confirm(
      "Tem certeza de que deseja excluir esta tarefa?"
    );

    if (isConfirmed) {
      try {
        const taskApi = new TaskApi();
        const del = await taskApi.deleteTaskId(id);
        if (del) {
          alert("Tarefa excluida com sucesso!");
          const updatedTasks = tasks.filter((task) => task.id !== id);
          setTasks(updatedTasks);
        } else {
          alert("Não foi possivel excluir! Tente novamente mais tarde");
        }
      } catch (error) {
        alert("Um erro foi encontrado, tente novamente mais tarde: " + error);
      }
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setTaskToEdit(null);
  };
  return (
    <>
      {tasks.map((task: Task) => {
        const { id, title, description, isChecked } = task;
        return (
          <main
            key={id}
            className="w-full h-auto border border-blue-400 rounded-xl flex justify-between px-4 py-2 mb-2 max-sm:flex-col"
          >
            <div className="w-full flex gap-4 items-center cursor-default">
              <input
                type="checkbox"
                title="checkbox for tasks"
                checked={isChecked}
                onChange={() => handleCheckboxChange(id, isChecked)}
                className="accent-blue-500"
              />
              <div className="w-3/4 flex flex-col max-sm:gap-2">
                <h4
                  className={`font-medium ${isChecked ? "line-through" : ""}`}
                >
                  <span className=" text-blue-500">Título: </span>
                  {title}
                </h4>
                {description ? (
                  <p
                    className={`font-medium ${isChecked ? "line-through" : ""}`}
                  >
                    <span className=" text-blue-500">Descrição: </span>
                    {description}
                  </p>
                ) : (
                  <p className="font-medium">
                    <span className=" text-blue-500">Descrição: </span>
                    <span className="font-light italic text-red-500">
                      Nenhuma descrição foi encontrada
                    </span>
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-4 items-center max-sm:justify-evenly max-sm:mt-2 max-sm:border-t-2 max-sm:border-gray-500 max-sm:pt-2">
              <button type="button" onClick={() => handleEditClick(task)}>
                Editar
              </button>
              <button type="button" onClick={() => handleDelete(id)}>
                Excluir
              </button>
            </div>
          </main>
        );
      })}

      {isModalOpen && taskToEdit && (
        <ModalAdd isOpen={isModalOpen} onClose={closeModal}>
          <FormUpdateTask task={taskToEdit} onClose={closeModal} />
        </ModalAdd>
      )}
    </>
  );
}

export default CardHomeTask;

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

  /* const handleCheckboxChange = (id: number) => {
    try {
      // Atualize o estado local
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      );
      
      setTasks(updatedTasks);
      
      // Envie a atualização para o servidor
      const updatedTask = updatedTasks.find(task => task.id === id);
      if (updatedTask) {
        await fetch(`https://sua-api.com/tasks/${id}`, {
          method: 'PATCH', // ou 'PUT', dependendo da sua API
          headers: {
            'Content-Type': 'application/json',
            // Inclua outros cabeçalhos conforme necessário, como um token de autenticação
          },
          body: JSON.stringify({ isChecked: updatedTask.isChecked }),
        });
      }
    } catch (error) {
      console.error('Erro ao atualizar a tarefa:', error);
      // Aqui você pode querer tratar o erro, por exemplo, revertendo a atualização local
    }
  }; */

  const handleEditClick = (task: Task) => {
    setTaskToEdit(task);
    setModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    try {
      const taskApi = new TaskApi();
      await taskApi.deleteTaskId(id);
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      alert("Um erro foi encontrado, tente novamente mais tarde: " + error);
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
            className="w-full h-auto border border-blue-400 rounded-xl flex justify-between px-4 py-2 mb-2"
          >
            <div className="w-full flex gap-4 items-center cursor-default">
              <input
                type="checkbox"
                title="checkbox for tasks"
                checked={isChecked}
                // onChange={() => handleCheckboxChange(id)}
                className="accent-emerald-500/25"
              />
              <div className="w-3/4 flex flex-col">
                <h4
                  className={`font-medium ${isChecked ? "line-through" : ""}`}
                >
                  Título: {title}
                </h4>
                {description ? (
                  <p
                    className={`font-medium ${isChecked ? "line-through" : ""}`}
                  >
                    Descrição: {description}
                  </p>
                ) : (
                  <p className="font-medium">
                    Descrição:{" "}
                    <span className="font-light italic text-red-500">
                      Nenhuma descrição foi encontrada
                    </span>
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-4 items-center">
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

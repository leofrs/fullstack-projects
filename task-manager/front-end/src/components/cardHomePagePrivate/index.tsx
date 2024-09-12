import { useEffect, useState } from "react";
import { TaskApi } from "../../api/task";
import { Task } from "../../@types/context.types";

function CardHomeTask() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const taskApi = new TaskApi();
    const getTaskByAuthor = async () => {
      try {
        const getBy = await taskApi.getTaskByAuthor();
        if (getBy && getBy.length > 0) {
          setTasks(getBy);
        } else {
          setTasks([]);
        }
      } catch (error) {
        setError(`Erro ao carregar tarefas: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    getTaskByAuthor();
  }, []);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (tasks.length === 0) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="font-normal italic text-2xl">Nenhuma Tarefa encontrada</p>
      </div>
    );
  }

  return (
    <>
      {tasks.map((task) => (
        <main
          key={task.id}
          className="w-full h-auto border border-blue-400 rounded-xl flex justify-between px-4 py-2 mb-2"
        >
          <div className="w-3/4 flex flex-col gap-2 items-start cursor-default">
            <h4 className="font-medium">Título: {task.title}</h4>
            <p className="font-medium">Descrição: {task.description}</p>
          </div>
          <div className="flex gap-4 items-center">
            <button type="button">Editar</button>
            <button type="button">Excluir</button>
          </div>
        </main>
      ))}
    </>
  );
}

export default CardHomeTask;

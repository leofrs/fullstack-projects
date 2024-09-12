import { useEffect, useState } from "react";
import { TaskApi } from "../../api/task";
import { Task } from "../../@types/context.types";

function CardHomeTask() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      {tasks.map((task: Task) => (
        <main
          key={task.id}
          className="w-full h-auto border border-blue-400 rounded-xl flex justify-between px-4 py-2 mb-2"
        >
          <div className="w-full flex gap-4 items-center cursor-default">
            <input
              type="checkbox"
              name="checked"
              id="checked"
              title="checked"
              className=""
            />
            <div className="w-3/4 flex flex-col">
              <h4 className="font-medium">Título: {task.title}</h4>
              {task.description ? (
                <p className="font-medium">Descrição: {task.description}</p>
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
            <button type="button">Editar</button>
            <button type="button">Excluir</button>
          </div>
        </main>
      ))}
    </>
  );
}

export default CardHomeTask;

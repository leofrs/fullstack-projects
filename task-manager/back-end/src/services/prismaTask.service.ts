import { PrismaClient } from "@prisma/client";
import { EditTask, TaskInformations } from "../@types/custom-types";

export const prismaService = new PrismaClient();

class TaskPrisma {
  async createTask({ title, description, authorId }: TaskInformations) {
    if (typeof authorId !== "number" || authorId <= 0) {
      throw new Error("Invalid authorId");
    }
    try {
      const create = await prismaService.task.create({
        data: {
          title: title,
          description: description,
          author: {
            connect: { id: authorId },
          },
        },
      });
      return create;
    } catch (error) {
      console.error("Error ao criar tarefa vindo do prima Service:", error);
    } finally {
      await prismaService.$disconnect();
    }
  }

  async getAllTaskByAuthor(userId: number) {
    try {
      const findAll = await prismaService.task.findMany({
        where: {
          authorId: userId,
        },
      });
      return findAll;
    } catch (error) {
      console.error(
        "Error ao buscar as tarefas vindo do prima Service:",
        error
      );
    } finally {
      await prismaService.$disconnect();
    }
  }

  async getTaskId(id: number) {
    try {
      const getById = await prismaService.task.findUnique({
        where: {
          id: id,
        },
      });
      return getById;
    } catch (error) {
      console.error(
        "Error ao buscar uma tarefa vindo do prima Service:",
        error
      );
    } finally {
      await prismaService.$disconnect();
    }
  }

  async editById({ id, title, description }: EditTask) {
    try {
      const edit = await prismaService.task.update({
        where: {
          id: id,
        },
        data: {
          title: title,
          description: description,
        },
      });
      return edit;
    } catch (error) {
      console.error("Error ao editar a tarefa vindo do prima Service:", error);
    } finally {
      await prismaService.$disconnect();
    }
  }

  async deleteById(id: number) {
    try {
      const del = await prismaService.task.delete({
        where: {
          id: id,
        },
      });
      return del;
    } catch (error) {
      console.error("Error ao excluir a tarefa vindo do prima Service:", error);
    } finally {
      await prismaService.$disconnect();
    }
  }
}

export default TaskPrisma;

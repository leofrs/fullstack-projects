import { CreateTask } from "../@types/context.types";

export class TaskApi {
  async getTaskByAuthor() {
    const url = import.meta.env.VITE_GET_TASK_BY_AUTHOR_ROUTER;
    const token = localStorage.getItem("token");
    const response = await fetch(`${url}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  }

  async createTask({ title, description }: CreateTask) {
    const url = import.meta.env.VITE_CREATE_TASK_BY_AUTHOR_ROUTER;
    const token = localStorage.getItem("token");
    const response = await fetch(`${url}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });

    return response;
  }

  /*  async getTaskById(id: number) {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${this.baseURL}/api/auth/task/get-task/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  }

  async editTaskById(id, title, descricao) {
    const token = localStorage.getItem("token");
    const response = await fetch(`${this.baseURL}/api/auth/task/edit-task`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        title: title,
        descricao: descricao,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response;
  }

  async deleteTaskId(id: number) {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${this.baseURL}/api/auth/task/delete-task/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response;
  } */
}

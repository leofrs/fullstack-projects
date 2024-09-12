const VITE_GET_TASK_BY_AUTHOR_ROUTER = import.meta.env
  .VITE_GETTASKBYAUTHOR_ROUTER;

export class TaskApi {
  async getTaskByAuthor() {
    const token = localStorage.getItem("token");
    const response = await fetch(`${VITE_GET_TASK_BY_AUTHOR_ROUTER}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response;
  }
}

const LOGIN_ROUTER = import.meta.env.VITE_LOGIN_ROUTER;
const REGISTER_ROUTER = import.meta.env.VITE_REGISTER_ROUTER;

type User = {
  email: string;
  password: string;
};

type UserRegister = {
  name: string;
  email: string;
  password: string;
};

export class UserApi {
  async login({ email, password }: User) {
    const response = await fetch(`${LOGIN_ROUTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!response.ok) {
      console.log("Um erro ocorreu ao passar os dados para o servidor");
    }

    return response;
  }

  async register({ name, email, password }: UserRegister) {
    const response = await fetch(`${REGISTER_ROUTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response;
  }
}

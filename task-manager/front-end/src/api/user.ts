import dotenv from "dotenv";
dotenv.configDotenv();

const loginEnv = process.env.LOGIN_ROUTER;
if (!loginEnv) {
  console.log("Está falando a rota para o login no banco de dados no .ENV");
}
const LOGIN_ROUTER = loginEnv;

const registerEnv = process.env.REGISTER_ROUTER;
if (!registerEnv) {
  console.log("Está falando a rota para o cadastro no banco de dados no .ENV");
}
const REGISTER_ROUTER = registerEnv;

export class UserApi {
  async login(email: string, password: string) {
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
    return response;
  }

  async register(name: string, email: string, password: string) {
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
    return response;
  }
}

const LOGIN_ROUTER = import.meta.env.VITE_LOGIN_ROUTER;
const REGISTER_ROUTER = import.meta.env.VITE_REGISTER_ROUTER;

export class UserApi {
  async login(email: string, password: string) {
    const response = await fetch(`${LOGIN_ROUTER}`, {
      method: "POST",
      mode: "no-cors",
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
      mode: "no-cors",
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

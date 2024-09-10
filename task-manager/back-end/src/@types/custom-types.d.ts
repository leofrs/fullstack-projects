export interface CreateUserType {
  name: string;
  email: string;
  password: string;
}

export interface GetUserType {
  email: string;
  password: string;
}

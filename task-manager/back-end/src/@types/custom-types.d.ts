export interface CreateUserType {
  name: string;
  email: string;
  password: string;
}

export interface GetUserType {
  email: string;
  password: string;
}

export type TaskInformations = {
  authorId: number;
  title: string;
  description?: string;
};

export type EditTask = {
  id: number;
  title: string;
  description?: string;
};

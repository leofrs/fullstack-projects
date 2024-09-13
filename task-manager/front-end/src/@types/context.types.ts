import { ReactNode } from "react";
//import { NavigateFunction } from "react-router-dom";

export interface UserProviderProps {
  children: ReactNode;
}

export interface UserContextType {
  user: string | null;
  setUser: (user: string | null) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  /*  
  navigate: NavigateFunction;
  tasks: Task[];
  setTasks: (tasks: Task[]) => void; */
}

export type Task = {
  id: number;
  title: string;
  description: string;
  authorId: number;
  isChecked: boolean;
};

export type CreateTask = {
  title: string;
  description: string;
};

export type EditTask = {
  id: number;
  title: string;
  description?: string;
};

export type TaskEditPage = {
  title: string;
  description?: string;
};

export type TaskConclude = {
  id: number;
  isChecked: boolean;
};

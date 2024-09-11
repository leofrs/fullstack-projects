import { ReactNode } from "react";
//import { NavigateFunction } from "react-router-dom";

export interface UserProviderProps {
  children: ReactNode;
}

export interface UserContextType {
  user: string | null;
  setUser: (user: string | null) => void;
  /*  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  navigate: NavigateFunction;
  tasks: Task[];
  setTasks: (tasks: Task[]) => void; */
}

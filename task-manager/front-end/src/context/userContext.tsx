import { createContext, useState } from "react";
import { UserContextType, UserProviderProps } from "../@types/context.types";

const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},
  /*  isAuthenticated: false,
  setIsAuthenticated: () => {},
  navigate: () => {},
  tasks: [],
  setTasks: () => {}, */
};

export const UserContext = createContext<UserContextType>(defaultUserContext);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

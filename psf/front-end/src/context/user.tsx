import { createContext, useState } from "react";
import { User, UserProviderProps } from "../types";

const defaultUserContext: User = {
    user: null,
    setUser: () => {},
    isAuthenticated: false,
    setIsAuthenticated: () => {},
};

export const UserContext = createContext<User>(defaultUserContext);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return (
        <UserContext.Provider
            value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
        >
            {children}
        </UserContext.Provider>
    );
};

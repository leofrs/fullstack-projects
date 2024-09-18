import { createContext, useState } from "react";

export const UserContext = createContext<string | null>(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

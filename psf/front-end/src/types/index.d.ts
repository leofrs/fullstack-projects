export interface UserProviderProps {
    children: ReactNode;
}

export type User = {
    user: string | null;
    setUser: (user: string | null) => void;
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
};

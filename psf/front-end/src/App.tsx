import { useContext } from "react";
import { PrivateUserRoutes, PublicRoutes } from "./routes/index.tsx";
import { UserContext } from "./context/user.tsx";

function App() {
    const userContext = useContext(UserContext);
    const { isAuthenticated } = userContext;
    return <>{isAuthenticated ? <PrivateUserRoutes /> : <PublicRoutes />}</>;
}

export default App;

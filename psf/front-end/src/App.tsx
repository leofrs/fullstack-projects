import { useContext } from "react";
import { PrivateUserRoutes, PublicRoutes } from "./routes/index.tsx";
import { UserContext } from "./context/user.tsx";

function App() {
    const userContext = useContext(UserContext);
    const user = userContext;
    return <>{user ? <PrivateUserRoutes /> : <PublicRoutes />}</>;
}

export default App;

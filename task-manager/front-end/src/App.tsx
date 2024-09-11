import { BrowserRouter } from "react-router-dom";
import RouterIndex from "./routes";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <RouterIndex />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

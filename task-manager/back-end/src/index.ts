import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import userRouter from "./routes/users.router";
import adminRouter from "./routes/admin.router";
import taskRouter from "./routes/tasks.route";
dotEnv.configDotenv();

const PORT = 3001;
const app = express();

app.use(cors());

app.use(express.json());

app.use(adminRouter);
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

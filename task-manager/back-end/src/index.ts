import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import userRouter from "./routes/users.router";
import adminRouter from "./routes/admin.router";
import taskRouter from "./routes/tasks.route";
dotEnv.configDotenv();

const PORT = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: "https://task-manager-front-end-kohl.vercel.app",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(express.json());

app.use(adminRouter);
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

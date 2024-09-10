import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
dotEnv.configDotenv();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

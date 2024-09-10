import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../middlewares/auth";
import UserPrisma from "../services/prismaUser.service";

const userPrisma = new UserPrisma();

class AdminController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email && !password) {
      res.status(401).json("Email e Senha são obrigatorios");
    }
    try {
      if (email === "admin@admin.com" && password === "admin123") {
        const token = jwt.sign({ admin: email }, SECRET_KEY, {
          expiresIn: "24h",
        });
        res.json(token);
      } else {
        res.status(200).json("admin não encontrado");
      }
    } catch (error) {
      res.status(501).json(`Error interno encontrado: ${error}`);
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const getAll = await userPrisma.getAllUsers();

      if (Array.isArray(getAll) && getAll?.length > 0) {
        res.status(200).json(getAll);
      } else {
        res.status(200).json("Nenhum usúario cadastrado");
      }
    } catch (error) {
      res.status(501).json(`Um erro interno foi encontrado: ${error}`);
    }
  }
}

export default AdminController;

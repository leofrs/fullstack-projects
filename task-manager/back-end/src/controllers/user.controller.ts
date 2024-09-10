import { Request, Response } from "express";
import UserPrisma from "../services/prismaUser.service";
import { CreateUserType, GetUserType } from "../@types/custom-types";
import { comparePassword, hashPassword } from "../utils/bcryptUtil";

class UserController {
  private userPrisma = new UserPrisma();

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body as CreateUserType;

      if (!name && !email && !password) {
        res.status(301).json("Nome, email e senha são obrigatórios");
      }

      const passwordHash = await hashPassword(password);

      const create = await this.userPrisma.createUser({
        name,
        email,
        password: passwordHash,
      });

      if (create) {
        res.status(201).json("Usúario cadastrado com sucesso");
      } else {
        res.status(401).json("Um erro foi encontrado ao criar o usúario");
      }
    } catch (error) {
      res.status(501).json(`Um erro interno foi encontrado: ${error}`);
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body as GetUserType;

      if (!email && !password) {
        res.status(301).json("Email e senha são obrigatórios");
      }

      const user = await this.userPrisma.getUser(email);

      if (!user) {
        return res.status(401).json({ error: "Usuário não encontrado!" });
      }

      const isPasswordValid = await comparePassword(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Senha inválida!" });
      }
    } catch (error) {
      res.status(501).json(`Um erro interno foi encontrado: ${error}`);
    }
  }
}

export default UserController;

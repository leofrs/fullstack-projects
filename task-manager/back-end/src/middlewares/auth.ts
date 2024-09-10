import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const secretKey = process.env.SECRET_KEY;

if (!secretKey) {
  throw new Error("SECRET_KEY environment variable is not set");
}

export const SECRET_KEY: Secret = secretKey;

export interface CustomRequest extends Request {
  token?: JwtPayload;
}

export const auth = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return res.status(401).send("Cabeçalho de Authorization não encontrado");
    }

    const token = authHeader.replace("Bearer ", "");
    if (!token) {
      return res.status(401).send("Token não encontrado");
    }

    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    res.status(401).send("Usuário não autenticado");
  }
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaUser_service_1 = __importDefault(require("../services/prismaUser.service"));
const bcryptUtil_1 = require("../utils/bcryptUtil");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middlewares/auth");
const userPrisma = new prismaUser_service_1.default();
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                if (!name && !email && !password) {
                    res.status(301).json("Nome, email e senha são obrigatórios");
                }
                const passwordHash = yield (0, bcryptUtil_1.hashPassword)(password);
                const create = yield userPrisma.createUser({
                    name,
                    email,
                    password: passwordHash,
                });
                if (create) {
                    res.status(201).json("Usúario cadastrado com sucesso");
                }
                else {
                    res.status(401).json("Um erro foi encontrado ao criar o usúario");
                }
            }
            catch (error) {
                res.status(501).json(`Um erro interno foi encontrado: ${error}`);
            }
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                if (!email && !password) {
                    res.status(301).json("Email e senha são obrigatórios");
                }
                const user = yield userPrisma.getUser(email);
                if (!user) {
                    return res.status(401).json({ error: "Usuário não encontrado!" });
                }
                const isPasswordValid = yield (0, bcryptUtil_1.comparePassword)(password, user.password);
                if (!isPasswordValid) {
                    return res.status(401).json({ error: "Senha inválida!" });
                }
                const token = jsonwebtoken_1.default.sign({ userId: user.id }, auth_1.SECRET_KEY, {
                    expiresIn: "24h",
                });
                res.json({ userName: user.name, token: token });
            }
            catch (error) {
                res.status(501).json(`Um erro interno foi encontrado: ${error}`);
            }
        });
    }
}
exports.default = UserController;

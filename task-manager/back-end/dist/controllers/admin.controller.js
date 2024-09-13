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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middlewares/auth");
const prismaUser_service_1 = __importDefault(require("../services/prismaUser.service"));
const userPrisma = new prismaUser_service_1.default();
class AdminController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            if (!email && !password) {
                res.status(401).json("Email e Senha são obrigatorios");
            }
            try {
                if (email === "admin@admin.com" && password === "admin123") {
                    const token = jsonwebtoken_1.default.sign({ admin: email }, auth_1.SECRET_KEY, {
                        expiresIn: "24h",
                    });
                    res.json(token);
                }
                else {
                    res.status(200).json("admin não encontrado");
                }
            }
            catch (error) {
                res.status(501).json(`Error interno encontrado: ${error}`);
            }
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getAll = yield userPrisma.getAllUsers();
                if (Array.isArray(getAll) && (getAll === null || getAll === void 0 ? void 0 : getAll.length) > 0) {
                    res.status(200).json(getAll);
                }
                else {
                    res.status(200).json("Nenhum usúario cadastrado");
                }
            }
            catch (error) {
                res.status(501).json(`Um erro interno foi encontrado: ${error}`);
            }
        });
    }
}
exports.default = AdminController;

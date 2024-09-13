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
exports.auth = exports.SECRET_KEY = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = process.env.SECRET_KEY;
if (!secretKey) {
    throw new Error("SECRET_KEY environment variable is not set");
}
exports.SECRET_KEY = secretKey;
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.header("Authorization");
        if (!authHeader) {
            return res.status(401).send("Cabeçalho de Authorization não encontrado");
        }
        const token = authHeader.replace("Bearer ", "");
        if (!token) {
            return res.status(401).send("Token não encontrado");
        }
        const decoded = jsonwebtoken_1.default.verify(token, exports.SECRET_KEY);
        req.token = decoded;
        next();
    }
    catch (err) {
        res.status(401).send("Usuário não autenticado");
    }
});
exports.auth = auth;

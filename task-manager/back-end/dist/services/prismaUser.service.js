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
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaService = void 0;
const client_1 = require("@prisma/client");
exports.prismaService = new client_1.PrismaClient();
class UserPrisma {
    createUser(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, email, password }) {
            try {
                const create = yield exports.prismaService.user.create({
                    data: {
                        name: name,
                        email: email,
                        password: password,
                    },
                });
                return create;
            }
            catch (error) {
                console.error(`Error ao criar o usúario vindo do Prisma Service: ${error}`);
            }
            finally {
                yield exports.prismaService.$disconnect();
            }
        });
    }
    getUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const get = yield exports.prismaService.user.findUnique({
                    where: {
                        email: email,
                    },
                });
                return get;
            }
            catch (error) {
                console.error(`Error ao buscar o usúario vindo do Prisma Service: ${error}`);
            }
            finally {
                yield exports.prismaService.$disconnect();
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getAll = yield exports.prismaService.user.findMany();
                return getAll;
            }
            catch (error) {
                console.error(`Error ao buscar todos os usúario vindo do Prisma Service: ${error}`);
            }
            finally {
                yield exports.prismaService.$disconnect();
            }
        });
    }
}
exports.default = UserPrisma;

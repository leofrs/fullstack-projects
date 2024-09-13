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
class TaskPrisma {
    createTask(_a) {
        return __awaiter(this, arguments, void 0, function* ({ title, description, authorId }) {
            if (typeof authorId !== "number" || authorId <= 0) {
                throw new Error("Invalid authorId");
            }
            try {
                const create = yield exports.prismaService.task.create({
                    data: {
                        title: title,
                        description: description,
                        author: {
                            connect: { id: authorId },
                        },
                    },
                });
                return create;
            }
            catch (error) {
                console.error("Error ao criar tarefa vindo do prima Service:", error);
            }
            finally {
                yield exports.prismaService.$disconnect();
            }
        });
    }
    getAllTaskByAuthor(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findAll = yield exports.prismaService.task.findMany({
                    where: {
                        authorId: userId,
                    },
                });
                return findAll;
            }
            catch (error) {
                console.error("Error ao buscar as tarefas vindo do prima Service:", error);
            }
            finally {
                yield exports.prismaService.$disconnect();
            }
        });
    }
    getTaskId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getById = yield exports.prismaService.task.findUnique({
                    where: {
                        id: id,
                    },
                });
                return getById;
            }
            catch (error) {
                console.error("Error ao buscar uma tarefa vindo do prima Service:", error);
            }
            finally {
                yield exports.prismaService.$disconnect();
            }
        });
    }
    editById(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, title, description }) {
            try {
                const edit = yield exports.prismaService.task.update({
                    where: {
                        id: id,
                    },
                    data: {
                        title: title,
                        description: description,
                    },
                });
                return edit;
            }
            catch (error) {
                console.error("Error ao editar a tarefa vindo do prima Service:", error);
            }
            finally {
                yield exports.prismaService.$disconnect();
            }
        });
    }
    taskFinished(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, isChecked }) {
            try {
                const conclude = yield exports.prismaService.task.update({
                    where: {
                        id: id,
                    },
                    data: {
                        isChecked: isChecked,
                    },
                });
                return conclude;
            }
            catch (error) {
                console.error("Error ao marcar a tarefa como conluída vindo do prima Service:", error);
            }
            finally {
                yield exports.prismaService.$disconnect();
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const del = yield exports.prismaService.task.delete({
                    where: {
                        id: id,
                    },
                });
                return del;
            }
            catch (error) {
                console.error("Error ao excluir a tarefa vindo do prima Service:", error);
            }
            finally {
                yield exports.prismaService.$disconnect();
            }
        });
    }
}
exports.default = TaskPrisma;

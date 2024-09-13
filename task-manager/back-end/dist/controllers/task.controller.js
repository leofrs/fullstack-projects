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
const prismaTask_service_1 = __importDefault(require("../services/prismaTask.service"));
const taskPrisma = new prismaTask_service_1.default();
class TaskController {
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { title, description } = req.body;
            const userId = (_a = req.token) === null || _a === void 0 ? void 0 : _a.userId;
            if (!title || !userId) {
                return res.status(400).send("Title e userId são obrigatorios.");
            }
            try {
                const create = yield taskPrisma.createTask({
                    title,
                    description,
                    authorId: Number(userId),
                });
                res.status(201).json(create);
            }
            catch (error) {
                res.status(501).json({ Error: "Error interno encontrado: " + error });
            }
        });
    }
    getAllTasksByAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.token) === null || _a === void 0 ? void 0 : _a.userId;
                if (!userId) {
                    return res.status(401).json({ error: "Usuário não autenticado" });
                }
                const tasks = yield taskPrisma.getAllTaskByAuthor(userId);
                if (tasks && tasks.length > 0) {
                    res.status(200).json(tasks);
                }
                else {
                    res.status(404).json({ message: "Nenhuma tarefa encontrada" });
                }
            }
            catch (error) {
                res.status(500).json({ Error: `Erro interno encontrado: ${error}` });
            }
        });
    }
    getTaskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskId = req.params.id;
                const task = yield taskPrisma.getTaskId(Number(taskId));
                if (!task) {
                    return res.status(404).json({ message: "Task not found" });
                }
                res.json(task);
            }
            catch (error) {
                console.error("Error fetching task:", error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    editTaskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, description } = req.body;
            if (!id && !title) {
                res
                    .status(401)
                    .json({ Error: `Os campos id e title não podem estar vázios` });
            }
            try {
                const edit = taskPrisma.editById({ id, title, description });
                if (!edit) {
                    res
                        .status(301)
                        .json({ Error: `Um error foi encontrado! Tente novamente` });
                }
                else {
                    res.status(201).json({ Sucesso: `Tarefa editada com sucesso` });
                }
            }
            catch (error) {
                res.status(501).json({ Error: `Error interno encontrado: ${error}` });
            }
        });
    }
    taskConclude(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, isChecked } = req.body;
            if (!id && !isChecked) {
                res
                    .status(401)
                    .json({ Error: `Os campos id e isChecked não podem estar vázios` });
            }
            try {
                const conclude = taskPrisma.taskFinished({ id, isChecked });
                if (!conclude) {
                    res
                        .status(301)
                        .json({ Error: `Um error foi encontrado! Tente novamente` });
                }
                else {
                    res.status(201).json({ Sucesso: `Tarefa editada com sucesso` });
                }
            }
            catch (error) {
                res.status(501).json({ Error: `Error interno encontrado: ${error}` });
            }
        });
    }
    deleteTaskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            if (!id) {
                res.status(401).json({ Error: `Os campos id  não pode estar vázios` });
            }
            try {
                const del = taskPrisma.deleteById(id);
                if (!del) {
                    res
                        .status(301)
                        .json({ Error: `Um error foi encontrado! Tente novamente` });
                }
                else {
                    res.status(201).json({ Sucesso: `Tarefa delatada com sucesso` });
                }
            }
            catch (error) {
                res.status(501).json({ Error: `Error interno encontrado: ${error}` });
            }
        });
    }
}
exports.default = TaskController;

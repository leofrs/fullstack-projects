"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_router_1 = __importDefault(require("./routes/users.router"));
const admin_router_1 = __importDefault(require("./routes/admin.router"));
const tasks_route_1 = __importDefault(require("./routes/tasks.route"));
dotenv_1.default.configDotenv();
const PORT = 3001;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(admin_router_1.default);
app.use(users_router_1.default);
app.use(tasks_route_1.default);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

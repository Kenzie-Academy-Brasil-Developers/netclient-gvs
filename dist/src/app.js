"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const handleAppError_middleware_1 = require("./middlewares/handleAppError.middleware");
const clients_routes_1 = require("./routes/clients.routes");
const contacts_routes_1 = require("./routes/contacts.routes");
const login_routes_1 = require("./routes/login.routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: 'http://localhost:5173' }));
app.use('/client', clients_routes_1.clientsRouter);
app.use('/contact', contacts_routes_1.contactsRouter);
app.use('/session', login_routes_1.loginRouter);
app.use(handleAppError_middleware_1.handleAppErrorMiddleware);
exports.default = app;
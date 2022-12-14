"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appointments_routes_1 = __importDefault(require("./routes/appointments.routes"));
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.use('/appointments', appointments_routes_1.default);
exports.default = routes;

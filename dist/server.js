"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appointments_routes_1 = __importDefault(require("./routes/appointments.routes"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (request, response) => {
    return response.json({
        menssage: 'Hello World'
    });
});
app.use(express_1.default.json());
app.use('/appointments', appointments_routes_1.default);
app.listen(3333, () => {
    console.log('server started in port 3333 ');
});

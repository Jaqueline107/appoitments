"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuidv4_1 = require("uuidv4");
const date_fns_1 = require("date-fns");
const appointmentsRouter = (0, express_1.Router)();
const appointments = [];
appointmentsRouter.post("/", (resquest, response) => {
    const { provider, date } = resquest.body;
    const Parsedate = (0, date_fns_1.startOfHour)((0, date_fns_1.parseISO)(date));
    const findAppotimentInSamDate = appointments.find((appointment) => (0, date_fns_1.isEqual)(Parsedate, appointment.date));
    if (findAppotimentInSamDate) {
        return response
            .status(400)
            .json({ menssage: "This appontiment already booked " });
    }
    const appointment = {
        id: (0, uuidv4_1.uuid)(),
        provider,
        date: Parsedate,
    };
    appointments.push(appointment);
    return response.json(appointment);
});
exports.default = appointmentsRouter;

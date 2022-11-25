import { request, Router } from "express";

import ensoreAthenticated from "../middlewares/ensure.Athenticated";

import CreateServiceAppointments from "../services/CreateAppointmentsService";
import AppointmentController from "../services/GetAllServiceAppointments";

const createServiceAppointments = new CreateServiceAppointments();
const getAllAppointments = new AppointmentController();

const appointmentsRouter = Router();

appointmentsRouter.use(ensoreAthenticated);

appointmentsRouter.get("/", getAllAppointments.getAll);

appointmentsRouter.post("/", createServiceAppointments.create);

export default appointmentsRouter;

import { Router } from "express";
import appointmentsRouter from "./routes/appointments.routes";
import usersRouter from "./routes/users.routes";
import sessionRouter from "./routes/sessions.routes";

const routes = Router();

routes.use("/appointments", appointmentsRouter);
routes.use("/users", usersRouter);
routes.use("/session", sessionRouter);

export default routes;

import { Router } from "express";
import appointmentsRouter from "./routes/appointments.routes";
import usersRouter from "./routes/users.routes";
import sessionRouter from "./routes/sessions.routes";
import profileRouter from "./routes/profile.routes";

const routes = Router();

routes.use("/appointments", appointmentsRouter);
routes.use("/users", usersRouter);
routes.use("/session", sessionRouter);
routes.use("/profile", profileRouter);

export default routes;

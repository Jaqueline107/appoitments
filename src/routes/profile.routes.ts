import { request, Router } from "express";

import ensoreAthenticated from "../middlewares/ensure.Athenticated";

const profileRouter = Router();

profileRouter.use(ensoreAthenticated);

profileRouter.patch;
("/");

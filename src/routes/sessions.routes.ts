import { Router } from "express";
import ensoreAthenticated from "../middlewares/ensure.Athenticated";
import AuthenticateSessionService from "../services/AuthenticateSessionService";

const sessionRouter = Router();

// sessionRouter.use(ensoreAthenticated);

const authenticateSessionService = new AuthenticateSessionService();

// const createUserControler = new CreateUserControler(createUserService);

sessionRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  const auth = await authenticateSessionService.execute({ email, password });
  console.log(auth);
  res.send(auth);
});

export default sessionRouter;

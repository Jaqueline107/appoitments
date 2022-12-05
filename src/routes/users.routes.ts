import { Router } from "express";
import multer from "multer";
import CreateUserControler from "../controlers/createUsersControler";
import CreateUserService from "../services/CreateUserService";
import ensoreAthenticated from "../middlewares/ensure.Athenticated";
import uploadConfig from "../config/upload";

const usersRouter = Router();

const createUserService = new CreateUserService();

const createUserControler = new CreateUserControler(createUserService);

usersRouter.post("/", createUserControler.execute);

export default usersRouter;

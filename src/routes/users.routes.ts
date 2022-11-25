import { Router } from "express";
import CreateUserControler from "../controlers/createUsersControler";
import CreateUserService from "../services/CreateUserService";

const usersRouter = Router();

const createUserService = new CreateUserService();

const createUserControler = new CreateUserControler(createUserService);

usersRouter.post("/", createUserControler.execute);

export default usersRouter;

// usersRouter.post("/",
//  async (request, response) => {
//   try {
//     const { name, email, password } = request.body;

//     const createUser = new CreateUserService();

//     const user = await createUser.execute({
//       email,
//       name,
//       password,
//     });

//     delete user.password;

//     return response.json(user);
//   } catch (Error) {
//     return response.status(400).json({ message: "Email address alredy used." });
//   }
// });

import prisma from "../data/prisma";
import { hash } from "bcryptjs";
import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";

class CreateUserControler {
  constructor(private service: CreateUserService) {}

  public execute = async (
    request: Request,
    response: Response
  ): Promise<any> => {
    const { name, email, password } = request.body;

    if (!name) {
      return response.status(400).send({ message: "Name is required" });
    }

    if (!email) {
      return response.status(400).send({ message: "Email is required" });
    }

    if (!password) {
      return response.status(400).send({ message: "Password is required" });
    }

    try {
      const user = await this.service.execute(request.body);
      return response.status(201).send(user);
    } catch (error) {
      if (
        error instanceof Error &&
        error.message == "this email already exist"
      ) {
        return response.status(400).send({ message: error.message });
      }
      console.error(error);
      return response.sendStatus(500);
    }
  };
}

export default CreateUserControler;

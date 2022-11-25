import prisma from "../data/prisma";
import { hash } from "bcryptjs";
import { Request, Response } from "express";

interface input {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: input): Promise<any> {
    const checkUserExist = await prisma.user.findFirst({
      where: { email: { equals: email } },
    });

    if (checkUserExist) {
      throw new Error("this email already exist");
    }
    console.log(checkUserExist, "asdfasdAA");
    const hashPassword = await hash(password, 8);

    const user = await prisma.user.create({
      data: { email, name, password },
    });

    console.log(user);
    return user;
  }
}

export default CreateUserService;

import { User } from "@prisma/client";
import { response } from "express";
import prisma from "../data/prisma";
import userModels from "../models/usersModel";

interface Request {
  id: number;
  profileName: string;
}

class UpdateProfileService {
  public async execute({ id, profileName }: Request): Promise<any> {
    console.log(id);
    const user = prisma.user.findFirst({
      where: { id },
    });
    if (!id) {
      return response.status(400).send({ message: "Error" });
    } else {
      return { ok: true };
    }
  }
}
export default UpdateProfileService;

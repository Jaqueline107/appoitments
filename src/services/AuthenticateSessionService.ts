import prisma from "../data/prisma";
import hash, { compare } from "bcryptjs";
import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";
import authConfig from "../config/auth";

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: {
    email: undefined | string;
    id: undefined | number;
    name: undefined | string;
  };
  token: string;
}
class CreateSessionService {
  public execute = async ({ email, password }: Request): Promise<Response> => {
    const user = await prisma.user.findFirst({
      where: {
        email: { equals: email },
      },
    });

    const userSecurity = {
      email: user?.email,
      name: user?.name,
      id: user?.id,
    };

    if (!user) {
      throw Error("Email/password is incorrect");
    }

    const passwordMatched = await compare(password, user.password);
    console.log(password, user.password);
    if (!passwordMatched) {
      throw Error("Email/password is incorrect");
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      notBefore: user.id,
      expiresIn,
    });

    return { user: userSecurity, token };
  };
}

export default CreateSessionService;

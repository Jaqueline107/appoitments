import { Response, Request, NextFunction } from "express";
import { decode, verify } from "jsonwebtoken";
import authConfig from "../config/auth";
import token from "../services/AuthenticateSessionService";

interface Tokenpayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensoreAthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("JWT token is missing");
  }

  try {
    const token = authHeader.split(" ")[1];

    const decode = verify(token, authConfig.jwt.secret);

    const { sub } = decode as Tokenpayload;

    request.user = {
      id: sub,
    };

    next();
  } catch {
    throw Error("JWT is invalid");
  }
}

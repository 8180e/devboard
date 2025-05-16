import { NextFunction, Request, Response } from "express";
import { getAccessToken } from "../services/github.service.js";
import { FRONTEND_URLS } from "../config/env.config.js";

const FRONTEND_URL = FRONTEND_URLS.split(",")[0];

const login = async (
  { query: { code } }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accessToken = await getAccessToken(code as string);
    res.redirect(`${FRONTEND_URL}/redirect?accessToken=${accessToken}`);
  } catch (error) {
    next(error);
  }
};

export { login };

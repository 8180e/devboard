import { NextFunction, Request, Response } from "express";
import { getGithubActivity } from "../services/github.service.js";

const getGithubActivityController = async (
  { headers: { authorization: accessToken } }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const activity = await getGithubActivity(accessToken);
    res.json(activity);
  } catch (error) {
    next(error);
  }
};

export { getGithubActivityController };

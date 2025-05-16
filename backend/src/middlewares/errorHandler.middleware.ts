import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: Error & { status?: number },
  _req: Request,
  res: Response,
  _next: NextFunction // eslint-disable-line @typescript-eslint/no-unused-vars
) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message });
};

export default errorHandler;

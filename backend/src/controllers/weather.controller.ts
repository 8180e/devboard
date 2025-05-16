import { NextFunction, Request, Response } from "express";
import { getWeather } from "../services/openweathermap.service.js";

const getWeatherController = async (
  { query: { lat, lon } }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const weather = await getWeather(lat as string, lon as string);
    res.json(weather);
  } catch (error) {
    next(error);
  }
};

export { getWeatherController };

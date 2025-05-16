import express from "express";
import { getWeatherController } from "../controllers/weather.controller.js";

const route = express.Router();

route.get("/", getWeatherController);

export default route;

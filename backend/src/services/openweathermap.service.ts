import axios from "axios";
import { OPENWEATHERMAP_API_KEY } from "../config/env.config.js";

const getWeather = async (lat: string, lon: string) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
  );
  return data;
};

export { getWeather };

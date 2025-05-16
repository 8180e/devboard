import express from "express";
import cors from "cors";
import { FRONTEND_URLS } from "./config/env.config.js";
import authRoute from "./routes/auth.route.js";
import githubRoute from "./routes/github.route.js";
import weatherRoute from "./routes/weather.route.js";

const app = express();

app.use(cors({ origin: FRONTEND_URLS.split(",") }));
app.use(express.json());

app.use("/auth", authRoute);
app.use("/github", githubRoute);
app.use("/weather", weatherRoute);

export default app;

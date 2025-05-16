import express from "express";
import { login } from "../controllers/auth.controller.js";

const route = express.Router();

route.get("/", login);

export default route;

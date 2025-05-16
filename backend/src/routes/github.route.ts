import express from "express";
import { getGithubActivityController } from "../controllers/github.controller.js";

const route = express.Router();

route.get("/activity", getGithubActivityController);

export default route;

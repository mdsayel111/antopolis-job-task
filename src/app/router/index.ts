import express from "express";
import { addRouters } from "../utils/router";
import routers from "../constants/router";

// /api router
const router = express.Router();

// add routers in /api router
addRouters(router, routers);

export default router;

import express from "express";
import {
  createCategoryController,
  getAllCategoryController,
} from "./controllers";
import validateRequestBody from "../../middlewares/HOF/schema-validation-middleware";
import { categoryValidationSchema } from "./validation-schema";

// create /category router
const categoryRouter = express.Router();

// create category api
categoryRouter.post(
  "/",
  validateRequestBody(categoryValidationSchema),
  createCategoryController,
);

// get all category api
categoryRouter.get("/", getAllCategoryController);

export default categoryRouter;

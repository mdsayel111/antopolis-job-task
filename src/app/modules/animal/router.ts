import express from "express";
import validateRequestBody from "../../middlewares/HOF/schema-validation-middleware";
import { animalValidationSchema } from "./validation-schema";
import { createAnimalController } from "./controllers";

// create /category router
const animalRouter = express.Router();


// create animal api
animalRouter.post("/", validateRequestBody(animalValidationSchema), createAnimalController)


export default animalRouter;
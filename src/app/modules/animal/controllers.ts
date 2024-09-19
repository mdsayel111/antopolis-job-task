import { RequestHandler } from "express";
import catchAsyncError from "../../middlewares/HOF/catch-async-error-middleware";
import sendResponse from "../../utils/send-response";
import { createAnimalService } from "./services";

// create createAnimal controller and wrap it with catchAsyncError for handle async error
export const createAnimalController: RequestHandler = catchAsyncError(async (req, res) => {
    const data = req.body

    const result = await createAnimalService(data)

    // send response
    sendResponse(res, { message: "Animal created successful!", data: result })


}) 
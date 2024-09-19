import { RequestHandler } from "express";
import catchAsyncError from "../../middlewares/HOF/catch-async-error-middleware";
import sendResponse from "../../utils/send-response";
import { createAnimalService, getAnimalService } from "./services";

// create createAnimalController and wrap it with catchAsyncError for handle async error
export const createAnimalController: RequestHandler = catchAsyncError(async (req, res) => {
    const data = req.body

    const result = await createAnimalService(data)

    // send response
    sendResponse(res, { message: "Animal created successful!", data: result })


})

// create getAnimalController and wrap it with catchAsyncError for handle async error
export const getAnimalController: RequestHandler = catchAsyncError(async (req, res) => {
    const queryParams = req.query

    const result = await getAnimalService(queryParams as Record<string, unknown>)

    // send response
    sendResponse(res, { message: "Animal retrive successful!", data: result })
}) 
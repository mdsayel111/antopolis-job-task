import { RequestHandler } from "express";
import catchAsyncError from "../../middlewares/HOF/catch-async-error-middleware";
import { createCategoryService } from "./services";
import sendResponse from "../../utils/send-response";

// create createCategory controller and wrap it with catchAsyncError for handle async error
export const createCategoryController: RequestHandler = catchAsyncError(async (req, res) => {
    const data = req.body

    const result = await createCategoryService(data)

    // send response
    sendResponse(res, { message: "Category retrive successful!", data: result })


}) 
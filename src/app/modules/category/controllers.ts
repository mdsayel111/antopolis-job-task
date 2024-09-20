import { RequestHandler } from "express";
import catchAsyncError from "../../middlewares/HOF/catch-async-error-middleware";
import { createCategoryService, getAllCategoryService } from "./services";
import sendResponse from "../../utils/send-response";

// create createCategory controller and wrap it with catchAsyncError for handle async error
export const createCategoryController: RequestHandler = catchAsyncError(
  async (req, res) => {
    const data = req.body;

    const result = await createCategoryService(data);

    // send response
    sendResponse(res, {
      message: "Category created successful!",
      data: result,
    });
  },
);

// create getCategory controller and wrap it with catchAsyncError for handle async error
export const getAllCategoryController: RequestHandler = catchAsyncError(
  async (req, res) => {
    const result = await getAllCategoryService();

    // send response
    sendResponse(res, {
      message: "Category retrive successful!",
      data: result,
    });
  },
);

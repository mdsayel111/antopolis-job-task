import AppError from "../errors/app-error";
import { TErrorHandler } from "../types/error-handler";

// creat AppError handler
const appErrorHandler: TErrorHandler = (err: AppError) => {
  // return errObj
  return {
    error: [{ path: "", message: err.message }],
    message: err.message,
    stack: err.stack || "",
  };
};

export default appErrorHandler;
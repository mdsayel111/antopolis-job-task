import mongoose from "mongoose";
import { TErrorHandler } from "../types/error-handler";

// creat mongoose cast error handler
const mongooseCastErrorHandler: TErrorHandler = (
  err: mongoose.Error.CastError,
) => {
  // return errObj
  return {
    error: [{ path: "", message: "Invalid Id" }],
    message: "Invalid Id",
    stack: err.stack,
  };
};

export default mongooseCastErrorHandler;

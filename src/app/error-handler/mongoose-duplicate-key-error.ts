import { TErrorHandler } from "../types/error-handler";


// creat mongoose duplicate key error handler
const mongooseDuplicateKeyErrorHandler: TErrorHandler = (err) => {
  // duplicate feild anem
  const dupFeildName = Object.keys(err.keyPattern)[0];

  // creat message
  const message = "This " + dupFeildName + " is already exist!";

  // return errObj
  return {
    message,
    error: [{ path: `${dupFeildName}`, message }],
    stack: err.stack,
  };
};

export default mongooseDuplicateKeyErrorHandler;
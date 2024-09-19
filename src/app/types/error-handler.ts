/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint @typescript-eslint/no-explicit-any: "error" */

// create error obj type
export type TErrorObj = {
    statusCode?: number;
    message: string;
    error: { path: string; message: string }[];
    redirectPath?: string;
    stack: string | undefined;
  };
  
// define error handler type
export type TErrorHandler = (err: any) => TErrorObj;
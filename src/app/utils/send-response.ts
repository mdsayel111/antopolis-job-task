import { Response } from "express";
import { TResData } from "../types/response";

// create sendResponse for send response
const sendResponse = (res: Response, data: TResData) => {
    res.status(200).send({ success: true, status: 200, ...data });
};

export default sendResponse;
import express, { Request, Response } from "express";
import notFound from "./app/middlewares/not-found-route-hanlder-middleware";
import router from "./app/router";
import cors from "cors";
import globalErrorHandleMiddleware from "./app/middlewares/global-error-handler-middleware";

// creat app
const app = express();

// cors setup
app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  }),
);

// parse req.body
app.use(express.json());

app.use("/api", router);

// root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// not found route
app.all("*", notFound);

// global error handler
app.use(globalErrorHandleMiddleware);

export default app;
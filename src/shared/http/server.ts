import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";
import { AppError } from "@shared/errors/AppError";
import internal from "stream";
const app = express();
app.use(express.json());

app.use(routes);

//===================================================================
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  console.log(error);
  return res.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

//======================================================================
app.listen(3000, () => {
  console.log(`Listen on port 3000...`);
});

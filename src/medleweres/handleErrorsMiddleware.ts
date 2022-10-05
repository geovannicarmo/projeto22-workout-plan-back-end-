import { NextFunction, Request, Response } from "express";
import {
  AppError,
  errorTypeToStatusCode,
  isAppError,
} from "../utils/errorUtils";

export function errorHandlerMiddleware(
    err: AppError, 
    req: Request, 
    res: Response, 
    next: NextFunction
    ) {
        if (isAppError(err)) {
            console.log("err")
            return res.status(errorTypeToStatusCode(err.type)).send(err.message);
          }

          return res.sendStatus(500);

    }
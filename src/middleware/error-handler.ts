import {HttpError} from "../error/HttpError";
import {ErrorRequestHandler, NextFunction, Request, Response} from "express";

const errorHandler:ErrorRequestHandler = (error:any, req:Request, res:Response, next:NextFunction) => {
    if (error instanceof HttpError){
        return res.status(error.status).send({msg:error.message});
    }
    next(error);
}

export default errorHandler;

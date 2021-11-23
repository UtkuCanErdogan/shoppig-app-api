import {body, check, ValidationChain, validationResult} from "express-validator";
import {NextFunction, Request, Response} from "express";


export const validateRequest = (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}


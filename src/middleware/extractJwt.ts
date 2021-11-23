import {NextFunction, Request, Response} from "express";
import jwt from 'jsonwebtoken';
import tokenConfig from "../config/config";

const extractJwt = (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token){
        jwt.verify(token, tokenConfig.secret, (error, decoded) => {
            if (error){
                throw res.status(404).json({msg:error.message});
            }
            else {
                res.locals.jwt = decoded;
                next();
            }
        });
    }
    else {
        res.status(401).json({msg: "Unauthorized"});
    }
}

export default extractJwt;

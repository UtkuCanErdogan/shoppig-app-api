import {NextFunction, Request, Response} from "express";
import {getByMail, getListCustomerOrder, insertCustomer} from "../service/customer.service";
import {logger} from "../service/logger.service";
import signJwt from "../config/auth.config";
import bcrypt from 'bcrypt';
import {tokenMap} from "../app";
import CustomerNotFoundException from "../error/CustomerNotFoundException";

export const createCustomer = (req:Request, res:Response) => {
    insertCustomer(req.body).then((response) => {
        logger.info("Comes Create Customer Request");
        res.status(201).send(response);
    }).catch((e:any) => {
        logger.error("Failed Create Customer Request");
        res.status(500).send({msg:e.message});
    });
}

export const getCustomerByMail = (req:Request, res:Response) => {
    const {mail: mail} = req.params;
    getByMail(mail).then((response) => {
        logger.info(`Customer with ${mail} made a verify token request`);
        res.status(200).send(response);
    }).catch((e:any) => {
        logger.error("Failed get customer by mail request");
        res.status(500).send({msg:e.message});
    });
}

export const verifyToken = (req:Request, res:Response) => {
    const {token:token} = req.body;
    const {mail: mail} = req.params;
    console.log("token  "+ token);
    if (tokenMap.get(mail) === token){
        logger.info(`Customer with ${mail} made a verify token request`);
        return res.status(200).send(getByMail(mail));
    }
    logger.error(`Error Verifiying token error`);
    res.status(401).send({msg:"failed"});

}

export const listOfCustomerOrders = (req:Request, res:Response, next:NextFunction) => {
    const {id: id} = req.params;
    getListCustomerOrder(+id, next).then((response) => {
        if (!response){
            logger.error(`Customer with ${id} claim does not have an order`);
            next(new CustomerNotFoundException(+id));
        }
        logger.info(`Customer with 1 ${id} made a list Of Customer Orders request`);
        res.status(200).json(response);
    }).catch((e) => {
        logger.error(`Customer with id ${id} got error list Of Customer Orders request"`);
        res.status(500).send({msg:e.message});
    });
}

export const login = (req:Request, res:Response) => {
    const {mail: mail, password:password} = req.body;
    getByMail(mail).then((response) => {
        bcrypt.compare(password, response.password, (error, result) => {
            if (error){
                logger.error(error.message);
                return res.status(401).json({msg: "Unauthorized"});
            }
            else if (result){
                signJwt(response, (_error, token) => {
                    if (_error){
                        logger.error(_error.message);
                        return res.status(401).json({msg: "Unauthorized"});
                    }
                    else if (token){
                        logger.info(`User with ${mail} e-mail made a login request`);
                        tokenMap.set(mail, token);
                        console.log(tokenMap.get(mail));
                        console.log(tokenMap);
                        res.status(200).json({token:token});
                    }
                });
            }
        })
    }).catch((e) => {
        res.status(500).json({msg: e.message});
    });


}


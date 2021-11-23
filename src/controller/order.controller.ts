import {NextFunction, Request, Response} from "express";
import {createOrder, findOrderDetail} from "../service/order.service";
import {logger} from "../service/logger.service";

export const makeOrder = (req:Request, res:Response, next:NextFunction) => {
    const {id:productId} = req.params;
    const {customerId: customerId} = req.body;
    createOrder(req.body, +productId, next).then((response) => {
        logger.info(`Customer with ${customerId} id made a get order detail request`);
        res.status(201).send(response);
    }).catch((e) => {
        logger.error(`get error makeOrder request error:${e.message}`);
        res.status(500).json({msg:e.message});
    });
}

export const getOrderDetail = (req:Request, res:Response, next:NextFunction) => {
    const {orderId: id} = req.params;
    findOrderDetail(+id,next).then((response) => {
        logger.info(`Customer with ${response.customerId} id made a get order detail request for ${response.id} id order`);
        res.status(200).send(response);
    }).catch((e) => {
        logger.error(`get error getOrderDetail request error:${e.message}`);
        res.status(500).send({msg:e.message});
    });
}

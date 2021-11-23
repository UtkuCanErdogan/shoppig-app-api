import {NextFunction, Request, response, Response} from "express";
import {findProducts, getProductById, getProductsByType, insertProduct, updateProductById} from "../service/product.service";
import {logger} from "../service/logger.service";
import ProductNotFoundException from "../error/ProductNotFoundException";

export const createProduct = (req:Request, res:Response) => {
    insertProduct(req.body).then((response) => {
        logger.info("Create Product");
        res.status(201).send(response);
    }).catch((e) => {
        logger.error("Create product error");
        res.status(500).send(e.message);
    });
}

export const updateProduct = (req:Request, res:Response, next:NextFunction) => {
    const {id: productId}= req.params;
    updateProductById(req.body, +productId, next).then((response) => {
        logger.info(`Product with ${productId} id made a update product request`);
        res.status(200).send(response);
    }).catch((e) => {
        logger.error("Update Product Error");
        res.status(500).send(e.message);
    });
}

export const findAllProducts = (req:Request, res:Response, next:NextFunction) => {
    findProducts().then((response) => {
        if (!response){
            logger.error("Product Not Found for Find All Products");
            next(new ProductNotFoundException(1));
        }
        logger.info("Find All Product request made");
        res.status(200).send(response);
    }).catch((e) => {
        logger.error("Get All Products req error");
        res.status(500).json({msg: e.message});
    })
}

export const findProductByType = (req:Request, res:Response, next:NextFunction) => {
    const {type:type} = req.params;
    console.log(type);
    getProductsByType(+type).then(response => {
        logger.info("Find products by type request made");
        res.status(200).send(response);
    }).catch((e) => {
        logger.error("Error encountered requesting Find products by type");
        res.status(500).send({msg:e.message});
    })
}

export const findProductById = (req:Request, res:Response, next:NextFunction) => {
    const {id: id} = req.params;
    getProductById(+id).then(response => {
        if(!response){
            next(new ProductNotFoundException(+id));
        }
        logger.info("Find Product By Id request made");
        res.status(200).send(response);
    }).catch((e) => {
        logger.error("Get Error find product by ıd request");
        res.status(500).send({msg: e.message});
    })
}

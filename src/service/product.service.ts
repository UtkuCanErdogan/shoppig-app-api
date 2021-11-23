import {Product} from "../model/product";
import {getRepository} from "typeorm";
import {CreateProductRequest, ProductDto, UpdateProductRequest} from "../dto/product.dto";
import {NextFunction} from "express";
import ProductNotFoundException from "../error/ProductNotFoundException";
import productDtoMapper from "../mapper/product.dto.mapper";

export const insertProduct = async (request: CreateProductRequest):Promise<ProductDto> => {
    return productDtoMapper(await getRepository(Product).save(request));
}

export const findProducts = async () => {
    return await getRepository(Product).find({});
}

export const getProductById = async (id:number) => {
    return await getRepository(Product).findOne(id);
}

export const updateProductById = async (request: UpdateProductRequest, id:number, next:NextFunction):Promise<ProductDto> => {
    const product =  await getRepository(Product).findOne(id);
    if (product){
        const updated = new Product(request.name, request.type, request.price, request.description, request.quantity, request.image);
        updated.id = product.id;
        updated.inStock = request.isActive;
        return productDtoMapper(await getRepository(Product).save(updated));
    }
    else throw next(new ProductNotFoundException(id));
}

export const getProductsByType = async (type:number) => {
    return await getRepository(Product).find({where:{type:type}});
}

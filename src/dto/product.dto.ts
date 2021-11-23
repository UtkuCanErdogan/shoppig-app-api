import {Type} from "../model/product";

export interface ProductDto{
    id:number,
    name: string,
    type:Type,
    price:number,
    description:string,
    quantity: number,
    inStock: boolean,
    image:string
}

export  interface CreateProductRequest{
    type:Type,
    name:string,
    price:number,
    description:string,
    quantity:number,
    image:string
}

export interface UpdateProductRequest{
    type:Type,
    name: string,
    price:number,
    description:string,
    quantity: number,
    isActive:boolean,
    image:string
}

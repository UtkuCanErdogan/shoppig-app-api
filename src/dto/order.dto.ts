import {Status} from "../model/order";

export interface OrderDto{
    id: number,
    customerId: number,
    count: number,
    status: Status,
    productId: number,
    productName: string,
    price: number
    address: string
}

export interface OrderDetailDto{
    id:number,
    customerId: number,
    count:number,
    status: Status,
    productId:number,
    productName:string,
    productDescription: string,
    price:number,
    createdAt:Date,
    address: string
}

export interface MakeOrderRequest{
    customerId:number,
    count:number,
    address: string
}




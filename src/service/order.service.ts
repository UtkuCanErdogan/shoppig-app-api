import {Order} from "../model/order";
import {getRepository} from "typeorm";
import {Product} from "../model/product";
import {Customer} from "../model/customer";
import {MakeOrderRequest, OrderDetailDto, OrderDto} from "../dto/order.dto";
import {NextFunction} from "express";
import ProductNotFoundException from "../error/ProductNotFoundException";
import CustomerNotFoundException from "../error/CustomerNotFoundException";
import CustomerIsNotActiveException from "../error/CustomerIsNotActiveException";
import {orderDetailDtoMapper, orderDtoMapper} from "../mapper/order.dto.mapper";
import OrderNotFoundException from "../error/OrderNotFoundException";
import ProductIsNotActiveException from "../error/ProductIsNotActiveException";
import NotEnoughProducts from "../error/NotEnoughProducts";

export const createOrder = async (request: MakeOrderRequest, productId:number, next:NextFunction) => {
    const product = await getRepository(Product).findOne(productId);
    const customer = await getRepository(Customer).findOne(request.customerId);

    if (!product) next(new ProductNotFoundException(productId));
    else if(!customer) next(new CustomerNotFoundException(request.customerId));
    else if(!customer.isActive) next(new CustomerIsNotActiveException());
    else{
        if (product.inStock){
            if (product.quantity >= request.count){
                const order = new Order(request.count, product.price, request.address);
                product.quantity = product.quantity - request.count;
                order.price = product.price * request.count;
                console.log(order);
                order.product = product;
                order.customer = customer;
                await getRepository(Product).save(product);
                return orderDtoMapper((await getRepository(Order).save(order)));
            }
            else throw new NotEnoughProducts();
        }
        else throw new ProductIsNotActiveException(productId);
    }
}

export const findOrderDetail = async (id:number, next:NextFunction):Promise<OrderDetailDto> => {
    const order = await getRepository(Order).findOne(id,{relations:["product", "customer"]});
    if (!order) throw new OrderNotFoundException(id);
    return orderDetailDtoMapper(order);
}

import {Order} from "../model/order";
import {OrderDetailDto, OrderDto} from "../dto/order.dto";

export const orderDtoMapper = (order:Order):OrderDto => {
    return {
        id:order.id,
        customerId: order.customer.id,
        count: order.count,
        status:order.status,
        productId: order.product.id,
        productName:order.product.name,
        price: order.price,
        address:order.address
    }
}

export const listOrderDtoMapper = (orders:Order[]):OrderDto[] => {
    return orders.map(x => orderDtoMapper(x));
}

export const orderDetailDtoMapper = (order: Order):OrderDetailDto => {
    return {
        id:order.id,
        customerId: order.customer.id,
        count: order.count,
        status: order.status,
        productId:order.product.id,
        productName:order.product.name,
        productDescription:order.product.description,
        price: order.price,
        createdAt: order.createdAt,
        address:order.address
    }
}

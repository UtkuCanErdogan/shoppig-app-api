import {Customer} from "../model/customer";
import {getRepository} from "typeorm";
import {Order} from "../model/order";
import {CreateCustomerRequest, CustomerDto} from "../dto/customer.dto";
import {NextFunction} from "express";
import bcrypt from 'bcrypt';
import customerDtoMapper from "../mapper/customer.dto.mapper";
import {listOrderDtoMapper} from "../mapper/order.dto.mapper";
import CustomerNotFoundException from "../error/CustomerNotFoundException";

export const insertCustomer = async (request:CreateCustomerRequest):Promise<CustomerDto> => {
    const hash = bcrypt.hashSync(request.password,10);
    const customer = new Customer(request.mail, hash, request.name, request.surname, request.age, 0);
    return customerDtoMapper(await getRepository(Customer).save(customer));
}

export const getListCustomerOrder = async (id:number, next:NextFunction) => {
    const orders = await getRepository(Order).find({where:{customer:id},relations:["product", "customer"]});
    return listOrderDtoMapper(orders);
}

export const getByMail = async (mail: string) => {
    const customer = await getRepository(Customer).findOne({where:{mail:mail}});
    if (customer){
        return customer;
    }
    else throw new CustomerNotFoundException(+mail);

}



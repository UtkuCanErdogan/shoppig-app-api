import {Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Customer} from "./customer";
import {Product} from "./product";
import {JoinColumn} from "typeorm";
import {JoinTable} from "typeorm";
import {Col} from "sequelize/types/lib/utils";

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false, type:"int"})
    count: number;

    @Column()
    price:number;

    @Column("int" ,{default:0})
    status:Status;

    @Column("timestamp", {nullable:false, default:new Date()})
    createdAt: Date

    @Column("varchar", {nullable:false, length:500})
    address:string;

    @ManyToOne(type => Product, product => product.order)
    product: Product;

    @ManyToOne(type => Customer, customer => customer.orders)
    @JoinColumn()
    customer: Customer;

    constructor(count:number, price:number, address:string) {
        this.count = count;
        this.price = price;
        this.address = address;
    }
}

export enum Status {
    CREATED,
    CONFIRMED,
    CANCELLED
}

import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable:false, length:100})
    name: string

    @Column({nullable:false, type:"int"})
    type: Type;

    @Column({nullable:false, type:"integer"})
    price: number;

    @Column({length:500, type:"varchar", nullable:false})
    description: string;

    @Column("int", {nullable:false})
    quantity:number;

    @Column("boolean", {nullable:false, default:true})
    inStock: boolean;

    @Column("timestamp", {nullable:false, default:new Date()})
    createdAt: Date

    @Column("varchar", {nullable:false})
    image:string;

    @OneToMany(type1 => Order, order => order.product)
    order: Order[];

    constructor(name: string, type:Type, price:number, description:string, quantity:number, image:string) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
        this.image = image;
    }

}

export const enum Type {
    COMPUTER,
    TABLE,
    OFFICE_CHAIR
}

import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Order} from "./order";

@Entity()
export class Customer{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true, nullable:false,length:50, type:"varchar"})
    mail: string;

    @Column({nullable:false, length:100, type:"varchar"})
    password: string;

    @Column({nullable:false, length:50, type:"varchar"})
    name: string;

    @Column({nullable:false, length:100, type:"varchar"})
    surname: string;

    @Column("int",{nullable:false})
    age: number;

    @Column({default:false, nullable:false, type:"boolean"})
    isActive: boolean;

    @Column({nullable:false, type:"int"})
    role: Role;

    @OneToMany(type => Order, order => order.customer)
    orders : Order[]

    constructor(mail:string, password:string, name:string, surname:string, age:number, role:number) {
        this.mail = mail;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.role = role;
    }
}

export const enum Role {
    CUSTOMER,
    ADMIN
}

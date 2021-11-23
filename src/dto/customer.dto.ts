export interface CustomerDto{
    id:number,
    mail:string,
    name:string,
    surname:string,
    age:number,
    role: number
}

export interface CreateCustomerRequest{
    mail:string,
    password:string,
    passwordConfirmation:string,
    name:string,
    surname:string,
    age:number,
}

export interface CustomerLoginDto{
    mail:string,
    password: string
}




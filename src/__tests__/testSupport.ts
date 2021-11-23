export const fakeCreateProductRequest = {
    type:0,
    name: "product",
    price: 100,
    description: "they have to fine minimum 50 words so ı try to wright 50 words and ı make random words now dlşkfdlkfsşldfk",
    quantity: 50,
    image:"this part the products image source"
}

export const fakeCreateProductRequest1 = {
    type:0,
    name: "product",
    price: 100,
    description: "they have to fine minimum 50 words so ı try to wright 50 words and ı make random words now dlşkfdlkfsşldfk",
    quantity: 50,
    //image:"this part the products image source"
}

export const fakeCreateUpdateRequest = {
    type:0,
    name: "product",
    price: 100,
    description: "they have to fine minimum 50 words so ı try to wright 50 words and ı make random words now dlşkfdlkfsşldfk",
    quantity: 100,
    image:"this part the products image source"
}

export const fakeProductDto = {
    id:1,
    name:"product",
    type:0,
    price:100,
    description: "they have to fine minimum 50 words so ı try to wright 50 words and ı make random words now dlşkfdlkfsşldfk",
    quantity: 50,
    inStock:true,
    image:"this part the products image source"
}

export const fakeUpdateProductDto = {
    id:1,
    name:"product",
    type:0,
    price:100,
    description: "they have to fine minimum 50 words so ı try to wright 50 words and ı make random words now dlşkfdlkfsşldfk",
    quantity: 100,
    inStock:true,
    image:"this part the products image source"
}

export const fakeProductListDto = [
    {id:1,
        name:"product",
        type:0,
        price:100,
        description: "they have to fine minimum 50 words so ı try to wright 50 words and ı make random words now dlşkfdlkfsşldfk",
        quantity: 100,
        inStock:true,
        image:"this part the products image source"},
    {id:2,
        name:"laptop",
        type:0,
        price:300,
        description: "laptop product have to fine minimum 50 words so ı try to wright 50 words and ı make random words now dlşkfdlkfsşldfk",
        quantity: 100,
        inStock:true,
        image:"this part the products image source laptop"},
    {id:1,
        name:"table",
        type:0,
        price:150,
        description: "table have to fine minimum 50 words so ı try to wright 50 words and ı make random words now dlşkfdlkfsşldfk",
        quantity: 1,
        inStock:false,
        image:"this part the products image source table"}
]

export const fakeCreateCustomerRequest = {
    mail:"utku@mail.com",
    password: "product",
    passwordConfirmation: "product",
    name: "utku",
    surname: "can",
    age:5
}

export const fakeCustomerDto = {
    id:1,
    mail:"utku@mail.com",
    name: "utku",
    surname: "can",
    age:5
}

export const fakeCustomerRequest400 = {
    mail:"utku@mail.com",
    password: "product",
    passwordConfirmation: "product",
    name: "utku",
    surname: "can",
    //age:5
}

export const fakeMakeOrderRequest = {
    customerId:1,
    count:1,
    address:"Ankara/Yenimahalle"
}

export const fakeOrderRequest = {
    id:1,
    customerId: 1,
    count: 5,
    status:0,
    productId:1,
    productName: "product",
    price:100,
    address:"Ankara/Yenimahalle"
}

export const fakeOrderDetail = {
    id:1,
    customerId: 1,
    count: 5,
    status:0,
    productId:1,
    productName: "product",
    productDescription: "they have to fine minimum 50 words so ı try to wright 50 words and ı make random words now dlşkfdlkfsşldfk",
    price:100,
    createdAt:Date.now(),
    address:"Ankara/Yenimahalle"
}

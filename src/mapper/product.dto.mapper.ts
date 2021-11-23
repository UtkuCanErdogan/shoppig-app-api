import {Product} from "../model/product";
import {ProductDto} from "../dto/product.dto";

const productDtoMapper = (input:Product):ProductDto => {
    return {
        id:input.id,
        name: input.name,
        type:input.type,
        price:input.price,
        description:input.description,
        quantity: input.quantity,
        inStock: input.inStock,
        image:input.image
    }
}

export default productDtoMapper;

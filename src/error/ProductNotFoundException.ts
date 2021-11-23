import {HttpError} from "./HttpError";

class ProductNotFoundException extends HttpError{
    constructor(id:number) {
        super(404, "Product Not Found!");
    }
}

export default ProductNotFoundException;

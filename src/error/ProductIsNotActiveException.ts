import {HttpError} from "./HttpError";

class ProductIsNotActiveException extends HttpError{
    constructor(id:number) {
        super(404, "Product Not Found!");
    }
}

export default ProductIsNotActiveException;

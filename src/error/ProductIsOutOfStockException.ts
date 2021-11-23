import {HttpError} from "./HttpError";

class ProductIsOutOfStockException extends HttpError{
    constructor() {
        super(404, "We are sorry, This product out of stock");
    }
}

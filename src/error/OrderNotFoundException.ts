import {HttpError} from "./HttpError";

class OrderNotFoundException extends HttpError{
    constructor(id:number) {
        super(404, "Order Not Found!");
    }
}

export default OrderNotFoundException;

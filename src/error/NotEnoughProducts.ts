import {HttpError} from "./HttpError";

class NotEnoughProducts extends HttpError{
    constructor() {
        super(404, "We Are Sorry Product Quantity Not Enough");
    }
}

export default NotEnoughProducts;

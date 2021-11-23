import {HttpError} from "./HttpError";

class CustomerIsNotActiveException extends HttpError{
    constructor() {
        super(404, "Customer Is Not Active!");
    }
}

export default CustomerIsNotActiveException;

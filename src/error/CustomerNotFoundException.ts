import {HttpError} from "./HttpError";

class CustomerNotFoundException extends HttpError{
    constructor(id: number) {
        super(404, 'Customer Not Found!');
    }
}

export default CustomerNotFoundException;

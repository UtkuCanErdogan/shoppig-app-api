import * as express from 'express';
import {
    createCustomer,
    getCustomerByMail,
    listOfCustomerOrders,
    login,
    verifyToken
} from "../controller/customer.controller";
import { validateRequest} from "../middleware/validator";
import {registerSchema} from "../schema/customer.schema";

const customerRouter = express.Router();
customerRouter.route("/create").post(registerSchema, validateRequest,createCustomer);
customerRouter.route("/orders/:id").get(listOfCustomerOrders);
customerRouter.route("/login").post(login);
customerRouter.route("/:mail").get(getCustomerByMail);
customerRouter.route("/verify/:mail").post(verifyToken);

export default customerRouter;

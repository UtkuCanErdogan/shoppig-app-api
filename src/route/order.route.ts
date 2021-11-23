import express from "express";
import {getOrderDetail, makeOrder} from "../controller/order.controller";
import {} from "../service/order.service";
import {makeOrderSchema} from "../schema/order.schema";
import {validateRequest} from "../middleware/validator";

const orderRouter = express.Router();
orderRouter.route("/makeAnOrder/:id").post(makeOrderSchema, validateRequest,makeOrder);
orderRouter.route("/:orderId").get(getOrderDetail);
export default orderRouter;

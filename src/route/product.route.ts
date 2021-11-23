import express from "express";
import {createProduct, findAllProducts, findProductById, findProductByType, updateProduct} from "../controller/product.controller";
import {createProductSchema, updateProductSchema} from "../schema/product.schema";
import {validateRequest} from "../middleware/validator";

const productRouter = express.Router();

productRouter.route("/getAll").get(findAllProducts);
productRouter.route("/create").post(createProductSchema, validateRequest,createProduct);
productRouter.route("/:id").put(updateProductSchema, validateRequest,updateProduct).get(findProductById);
productRouter.route("/type/:type").get(findProductByType);

export default productRouter;

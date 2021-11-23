import express from "express";
import cors from "cors";
import customerRouter from "./route/customer.route";
import productRouter from "./route/product.route";
import orderRouter from "./route/order.route";
import errorHandler from "./middleware/error-handler";
import {notFound} from "./middleware/not-found";

const createServer = () => {
    const app = express();
    app.use(express.static(__dirname));
    app.use(express.json());
    app.use(cors({
        origin: '*'
    }));
    app.use("/api/customer", customerRouter);
    app.use("/api/product", productRouter);
    app.use("/api/order", orderRouter);
    app.use(errorHandler);
    app.use(notFound);

    return app;
}

export default createServer;

import createServer from "../server";
import {createConnection, getConnection} from "typeorm";
import supertest from "supertest";
import {fakeMakeOrderRequest, fakeOrderDetail, fakeOrderRequest} from "./testSupport";

const app = createServer

describe('orderService', function () {
    beforeEach(() => {
            createConnection({
                "type": "postgres",
                "host": "localhost",
                "port": 5432,
                "username": "postgres",
                "password": "admin123",
                "database": "shoppingapp",
                "synchronize": true,
                "logging": false,
                "entities": [
                    "src/model/**/*.ts"
                ]
            });
        }
    )

    afterEach(() => {
        let conn = getConnection();
        return conn.close();
    });

    test("insert order it should return order dto", async () => {
        const response = await supertest(app).post("api/order/makeAnOrder/1").send(fakeMakeOrderRequest);
        expect(response.status).toBe(201);
        expect(response.body).toBe(fakeOrderRequest);
    });

    test("insert order when product doesnt exist it should return 404", async () => {
        const response = await supertest(app).post("api/order/makeAnOrder/1").send(fakeMakeOrderRequest);
        expect(response.status).toBe(404);
        expect(response.body).toBe("Product Not Found!");
    });

    test("insert order when customer doesnt exist it should return 404", async () => {
        const response = await supertest(app).post("api/order/makeAnOrder/1").send(fakeMakeOrderRequest);
        expect(response.status).toBe(404);
        expect(response.body).toBe("Customer Not Found!");
    });

    test("insert order when customer exist but not active it should return 404", async () => {
        const response = await supertest(app).post("api/order/makeAnOrder/1").send(fakeMakeOrderRequest);
        expect(response.status).toBe(404);
        expect(response.body).toBe("Customer Is Not Active!");
    });

    test("insert order when product out of stock it should return 404", async () => {
        const response = await supertest(app).post("api/order/makeAnOrder/1").send(fakeMakeOrderRequest);
        expect(response.status).toBe(404);
        expect(response.body).toBe("We are sorry, This product out of stock");
    });

    test("insert order when count greater than quantity it should return 404", async () => {
        const response = await supertest(app).post("api/order/makeAnOrder/1").send(fakeMakeOrderRequest);
        expect(response.status).toBe(404);
        expect(response.body).toBe("We Are Sorry Product Quantity Not Enough");
    });

    test("find order detail when order exist it should return order detail dto", async () => {
        const response = await supertest(app).get("api/order/1");
        expect(response.status).toBe(200);
        expect(response.body).toBe(fakeOrderDetail);
    });

    test("find order detail when order doesnt exist it should return 404", async () => {
        const response = await supertest(app).get("api/order/5");
        expect(response.status).toBe(404);
        expect(response.body).toBe("Order Not Found!");
    });
});

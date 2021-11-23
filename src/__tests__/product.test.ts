import supertest from "supertest";
import createServer from "../server";
import {createConnection, getConnection, getCustomRepository} from "typeorm";
import {
    fakeCreateProductRequest, fakeCreateProductRequest1,
    fakeCreateUpdateRequest,
    fakeProductDto,
    fakeProductListDto,
    fakeUpdateProductDto
} from "./testSupport";
import {Express} from "express";

let app: Express;

beforeAll(async () => {
    app = createServer;
});

describe('productService', function () {
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

    test("insert product it should return productDto", async () => {
        const response = await supertest(app).post("api/product/create").send(fakeCreateProductRequest);
        expect(response.status).toBe(201);
        expect(response.body).toBe(fakeProductDto);
    });

    test("when any param it doesnt exist it should return 400", async () => {
        const response = await supertest(app).post("api/product/create").send(fakeCreateProductRequest1);
        expect(response.status).toBe(400);
    });

    test("when product id it exist should return productDto", async () => {
        const response = await supertest(app).post("api/product/update/1").send(fakeCreateUpdateRequest);
        expect(response.status).toBe(200);
        expect(response.body).toBe(fakeUpdateProductDto);
    });

    test("when product id it doesnt exist should return 404", async () => {
        const response = await supertest(app).post("api/product/create/2").send(fakeCreateUpdateRequest);
        expect(response.status).toBe(404);
        expect(response.body).toBe("Product Not Found");
    });

    test("when product type it exist should return productListDto", async () => {
        const response = await supertest(app).get("api/product/0").send(fakeCreateUpdateRequest);
        expect(response.status).toBe(200);
        expect(response.body).toBe(fakeProductListDto);
    });

    test("when product type it exist should return productListDto", async () => {
        const response = await supertest(app).get("api/product/0").send(fakeCreateUpdateRequest);
        expect(response.status).toBe(404);
        expect(response.body).toBe("Product Not Found");
    });

});

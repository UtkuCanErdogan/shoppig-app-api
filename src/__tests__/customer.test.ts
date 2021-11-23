import createServer from "../server";
import {createConnection, getConnection} from "typeorm";
import supertest from "supertest";
import {
    fakeCreateCustomerRequest,
    fakeCustomerDto, fakeCustomerRequest400,
} from "./testSupport";

const app = createServer();

describe('userService', function () {
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

    test("insert customer it should return customerDto", async () => {
        const response = await supertest(app).post("api/customer/create").send(fakeCreateCustomerRequest);
        expect(response.status).toBe(201);
        expect(response.body).toBe(fakeCustomerDto);
    });

    test("insert customer when any param it doesnt exist it should return 400", async () => {
        const response = await supertest(app).post("api/customer/create").send(fakeCustomerRequest400);
        expect(response.status).toBe(400);
    });

    test("get by mail when mail exist it should return customer dto", async () => {
        const response = await supertest(app).get("api/customer/utku@mail.com");
        expect(response.status).toBe(200);
        expect(response.body).toBe(fakeCustomerDto);
    });

    test("get by mail when mail doesnt exist it should return 404", async () => {
        const response = await supertest(app).get("api/customer/can@mail.com");
        expect(response.status).toBe(404);
        expect(response.body).toBe("Customer Not Found!");
    });
});

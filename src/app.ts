import {createConnection} from "typeorm";
import createServer from "./server";

    export const tokenMap =new Map();
    const app = createServer();

    createConnection().then(async connection => {
    app.listen(8080);
}).catch((e) => {
    console.log(e.message);
});

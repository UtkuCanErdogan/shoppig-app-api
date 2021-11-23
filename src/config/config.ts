const SERVER_TOKEN_EXPIRE_TIME = 3600;
const SERVER_TOKEN_ISSUER = "coolIssuer";
const SERVER_TOKEN_SECRET = "superencryptedsecret";

const tokenConfig = {
    expireTime: SERVER_TOKEN_EXPIRE_TIME,
    issuer: SERVER_TOKEN_ISSUER,
    secret: SERVER_TOKEN_SECRET
}

export default tokenConfig;

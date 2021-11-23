import {CustomerLoginDto} from "../dto/customer.dto";
import tokenConfig from "./config";
import {logger} from "../service/logger.service";
import jwt from 'jsonwebtoken';


const signJwt = (customer: CustomerLoginDto, callback: (error: Error | null, token: string | null) => void):void => {
    let timeSinchEpoch = new Date().getTime();
    let expirationTime = timeSinchEpoch + Number(tokenConfig.expireTime) * 10000;
    let expirationTimeInSeconds = Math.floor(expirationTime/1000);

    logger.info("Attempting to sign token");
    try {
        jwt.sign({
            mail: customer.mail
        },
            tokenConfig.secret,
            {
                issuer: tokenConfig.issuer,
                algorithm: 'HS256',
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                    if (error){
                        callback(error, null);
                    }
                    else if(token){
                        callback(null, token);
                    }
            });
    } catch (e:any){
        logger.error(e.message);
        callback(e, null);
    }
}

export default signJwt;

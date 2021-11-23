import {body} from "express-validator";

export const makeOrderSchema = [
    body('count', 'Count is required')
        .isLength({min:1, max:10})
        .withMessage("Please type correct")
        .exists({checkFalsy:true}),
    body('customerId', 'Customer Id is required').exists({checkFalsy:true}),
    body('address', 'Address is required').exists({checkFalsy:true}).isLength({max:100}).withMessage("Lütfen doğru bir adres giriniz. ")
]

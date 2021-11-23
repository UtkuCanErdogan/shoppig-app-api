import {body} from "express-validator";

export const registerSchema = [
    body('mail', 'Email is required')
        .trim()
        .toLowerCase()
        .isEmail()
        .withMessage('email must contain a valid email address'),
    body('password')
        .trim()
        .toLowerCase()
        .exists({checkFalsy:true}).withMessage('Password is required')
        .isLength({min:6})
        .withMessage("Password cannot be less than 6")
        .isLength({max:16})
        .withMessage("password cannot be greater than 16")
        .custom((val, {req}) => {
            if (val !== req.body.passwordConfirmation){
                throw new Error("Passwords does not match")
            }
            else{
                return true;
            }
        }),
    body('passwordConfirmation', 'Password is required')
        .trim()
        .exists({checkFalsy:true})
        .isLength({min:6})
        .withMessage("Password cannot be less than 6")
        .isLength({max:16})
        .withMessage("password cannot be greater than 16"),
    body('name', 'Name is Required')
        .trim()
        .exists({checkFalsy:true})
        .isLength({min:3})
        .withMessage("Name cannot be less than 6")
        .isLength({max:30})
        .withMessage("Name cannot be less than 30"),
    body('surname', 'Name is Required')
        .trim()
        .exists({checkFalsy:true})
        .isLength({min:3})
        .withMessage("Surname cannot be less than 6")
        .isLength({max:30})
        .withMessage("Surname cannot be less than 30"),
    body('age', 'Age is required').exists({checkNull:false, checkFalsy:true})
]

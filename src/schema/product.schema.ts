import {body} from "express-validator";
import validator from "validator";
import isLength = validator.isLength;

export const createProductSchema = [
 /*   body('type')
        .exists({checkFalsy:true})
        .withMessage("Type is required")
       // .isIn([0,1,2,3])
       // .withMessage("Type cannot be {VALUE}")
    ,*/
    body('name', 'Name is required')
        .exists({checkFalsy:true})
        .isLength({min:5})
        .withMessage('Name cannot be less than 5')
        .isLength({max:100})
        .withMessage('Name cannot be greater than 100'),
    body('price', 'price is required')
        .exists({checkFalsy:true})
        .isLength({min:1, max:100000})
        .withMessage("Please enter a valid number"),
    body('description', 'description is required')
        .exists({checkFalsy:true})
        .isLength({min:50})
        .withMessage("Description cannot be less than 50 words")
        .isLength({max:500})
        .withMessage("Description cannot be greater than 500"),
    body('quantity', 'Quantity is required')
        .exists({checkFalsy:true})
        .isNumeric()
        .withMessage("Quantity be a numeric")
]

export const updateProductSchema = [
/*    body('type', 'Type is required')
        .exists({checkFalsy:true}).isIn([0,1,2,3]).withMessage("Type cannot be {VALUE}"),*/
    body('name', 'Name is required')
        .exists({checkFalsy:true})
        .isLength({min:5})
        .withMessage('Name cannot be less than 5')
        .isLength({max:100})
        .withMessage('Name cannot be greater than 100'),
    body('price', 'price is required')
        .exists({checkFalsy:true})
        .isLength({min:1, max:100000})
        .withMessage("Please enter a valid number"),
    body('description', 'description is required')
        .exists({checkFalsy:true})
        .isLength({min:50})
        .withMessage("Description cannot be less than 50 words")
        .isLength({max:500})
        .withMessage("Description cannot be greater than 500"),
    body('quantity', 'Quantity is required')
        .exists({checkFalsy:true})
        .isNumeric()
        .withMessage("Quantity be a numeric"),
    body('image', 'Image source is required')
        .exists({checkFalsy:true})
        .isLength({min:8, max:100})
        .withMessage("Quantity be a numeric")
    ]

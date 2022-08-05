import Joi from "joi";
import allschemas from "../schemas/allSchemas.js";

export default function Validate(validator) {
    console.log(allschemas.validator)
    console.log(allschemas)
    if(!allschemas.hasOwnProperty(validator)){
        return res.sendStatus(422)
    }
    return async function(req, res, next) {
        try {
            const validated = await allschemas.validator.validateAsync(req.body, { abortEarly: false })
            if (validated.error) {
                return res.status(422).send(validated.error);
            }
            next()
        } catch (err) {
            res.sendStatus(500)
        }
    }
}
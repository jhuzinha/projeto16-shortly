import allschemas from "../schemas/allSchemas.js";

export default function Validate(schema) {
    if(!allschemas.hasOwnProperty(schema)){
        return res.sendStatus(422)
    }
    return async function(req, res, next) {
        try {
            const validated = await allschemas[schema].validate(req.body, { abortEarly: false })
            if (validated.error) {
                return res.status(422).send(validated.error);
            }
            next();
        } catch (err) {
            res.sendStatus(500)
        }
    }
}
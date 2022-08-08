import joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';

const joiPassword = joi.extend(joiPasswordExtendCore);
const registerSchema = joi.object({
  name: joi.string().required().trim().min(3),
  email: joi.string().email().required(),
  password: joiPassword
            .string()
            .minOfLowercase(1)
            .minOfUppercase(1)
            .minOfNumeric(1)
            .noWhiteSpaces()
            .required()
            .messages({
              'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
              'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
              'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
              'password.noWhiteSpaces': '{#label} should not contain white spaces',
            })
            ,
  confirmPassword: joi.string().valid(joi.ref('password')).required()
});

export default registerSchema;
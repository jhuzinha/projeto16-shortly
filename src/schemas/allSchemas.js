import registerSchema from './registerSchema.js';
import loginSchema from './loginSchema.js';
import urlSchema from './urlSchema.js';

const allschemas = {
    'register': registerSchema, 
    'login': loginSchema,
    'url': urlSchema
}

export default allschemas;
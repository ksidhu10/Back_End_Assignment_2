import Joi from 'joi';

// Branch schema definition
const branchSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  address: Joi.string().min(5).required(),
  phone: Joi.string().pattern(/^[0-9]{10}$/).required()  // Assuming 10 digit phone number
});

export default branchSchema;

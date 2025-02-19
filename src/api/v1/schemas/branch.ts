import Joi from 'joi';

export const branchValidationSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().min(10).required(), // Ensure min length is properly set
  phone: Joi.string().pattern(/^\d{10}$/).required(),
});

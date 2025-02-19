import Joi from 'joi';

const branchValidationSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.min': 'Branch name should be at least 3 characters long',
  }),
  address: Joi.string().min(10).required(),
  phone: Joi.string().pattern(/^\d{10}$/).required(),
});

export default branchValidationSchema;

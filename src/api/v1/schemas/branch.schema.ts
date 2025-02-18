// src/api/v1/schemas/branch.schema.ts
import Joi from 'joi';

const branchValidationSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  address: Joi.string().min(10).max(200).required(),
  phone: Joi.string().min(10).max(15).required(),
});

export default branchValidationSchema;

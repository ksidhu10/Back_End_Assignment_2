// src/api/v1/schemas/employee.schema.ts
import Joi from 'joi';

const employeeValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  position: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  branchId: Joi.string().required(),  // Assuming branchId is a string; adjust if necessary
});

export default employeeValidationSchema;

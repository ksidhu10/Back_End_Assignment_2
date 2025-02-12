import Joi from 'joi';

// Employee schema definition
const employeeSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  position: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  branchId: Joi.string().required()  // Assuming branchId is a string
});

export default employeeSchema;

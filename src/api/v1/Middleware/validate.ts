// src/api/v1/middleware/validation.middleware.ts
import { Request, Response, NextFunction } from 'express';
import employeeValidationSchema from '../schemas/employee.schema';
import branchValidationSchema from '../schemas/branch.schema';

// Middleware to validate employee data
const validateEmployee = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = employeeValidationSchema.validate(req.body);
  
  if (error) {
    // Return a response if there's a validation error
    res.status(400).json({ message: error.details[0].message });
  } else {
    // Continue to the next middleware/controller if validation is successful
    next();
  }
};

// Middleware to validate branch data
const validateBranch = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = branchValidationSchema.validate(req.body);
  
  if (error) {
    // Return a response if there's a validation error
    res.status(400).json({ message: error.details[0].message });
  } else {
    // Continue to the next middleware/controller if validation is successful
    next();
  }
};

export { validateEmployee, validateBranch };

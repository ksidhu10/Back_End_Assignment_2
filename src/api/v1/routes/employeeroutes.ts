// src/api/v1/routes/employeeRoutes.ts
import express from 'express';
import { createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee } from '../controllers/employeeController';

const router = express.Router();

// Create a new employee
router.post('/employees', createEmployee);

// Get all employees
router.get('/employees', getAllEmployees);

// Get employee by ID
router.get('/employees/:id', getEmployeeById);

// Update an employee
router.put('/employees/:id', updateEmployee);

// Delete an employee
router.delete('/employees/:id', deleteEmployee);

export default router;

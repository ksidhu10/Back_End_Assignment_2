import { Request, Response, NextFunction } from 'express';
import * as employeeService from '../services/employeeService';

// Create a new employee
export const createEmployee = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    return res.status(201).json(employee); // Respond with the newly created employee
  } catch (error) {
    next(error); // pass error to the error handler
    return res.status(500).json({ message: 'Error creating employee' });
  }
};

// Get all employees
export const getAllEmployees = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const employees = await employeeService.getAllEmployees();
    return res.status(200).json(employees); // Respond with all employees
  } catch (error) {
    next(error); // pass error to the error handler
    return res.status(500).json({ message: 'Error fetching employees' });
  }
};

// Get an employee by ID
export const getEmployeeById = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    return res.status(200).json(employee); // Respond with the employee details
  } catch (error) {
    next(error); // pass error to the error handler
    return res.status(500).json({ message: 'Error fetching employee' });
  }
};

// Update an employee's data
export const updateEmployee = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const updatedEmployee = await employeeService.updateEmployee(req.params.id, req.body);
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    return res.status(200).json(updatedEmployee); // Respond with updated employee data
  } catch (error) {
    next(error); // pass error to the error handler
    return res.status(500).json({ message: 'Error updating employee' });
  }
};

// Delete an employee
export const deleteEmployee = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const result = await employeeService.deleteEmployee(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    return res.status(200).json({ message: 'Employee deleted successfully' }); // Respond with success message
  } catch (error) {
    next(error); // pass error to the error handler
    return res.status(500).json({ message: 'Error deleting employee' });
  }
};

// Get all employees for a specific branch
export const getEmployeesByBranch = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const branchId = req.params.branchId;
    const employees = await employeeService.getEmployeesByBranch(branchId);
    if (employees.length === 0) {
      return res.status(404).json({ message: 'No employees found for this branch' });
    }
    return res.status(200).json(employees); // Respond with the list of employees for the branch
  } catch (error) {
    next(error); // pass error to the error handler
    return res.status(500).json({ message: 'Error fetching employees by branch' });
  }
};

// Get all employees in a specific department
export const getEmployeesByDepartment = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const department = req.params.department;
    const employees = await employeeService.getEmployeesByDepartment(department);
    if (employees.length === 0) {
      return res.status(404).json({ message: 'No employees found in this department' });
    }
    return res.status(200).json(employees); // Respond with the list of employees for the department
  } catch (error) {
    next(error); // pass error to the error handler
    return res.status(500).json({ message: 'Error fetching employees by department' });
  }
};

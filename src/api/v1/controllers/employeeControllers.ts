import { Request, Response } from 'express';
import * as employeeService from '../services/employeeService';

// Create a new employee
export const createEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json(employee); // Respond with the newly created employee
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee', error });
  }
};

// Get all employees
export const getAllEmployees = async (req: Request, res: Response): Promise<void> => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json(employees); // Respond with all employees
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
  }
};

// Get an employee by ID
export const getEmployeeById = async (req: Request, res: Response): Promise<void> => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);
    if (!employee) {
      res.status(404).json({ message: 'Employee not found' });
      return;
    }
    res.status(200).json(employee); // Respond with the employee details
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employee', error });
  }
};

// Update an employee's data
export const updateEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedEmployee = await employeeService.updateEmployee(req.params.id, req.body);
    if (!updatedEmployee) {
      res.status(404).json({ message: 'Employee not found' });
      return;
    }
    res.status(200).json(updatedEmployee); // Respond with updated employee data
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee', error });
  }
};

// Delete an employee
export const deleteEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await employeeService.deleteEmployee(req.params.id);
    if (!result) {
      res.status(404).json({ message: 'Employee not found' });
      return;
    }
    res.status(200).json({ message: 'Employee deleted successfully' }); // Respond with success message
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee', error });
  }
};

// Get all employees for a specific branch
export const getEmployeesByBranch = async (req: Request, res: Response): Promise<void> => {
  try {
    const branchId = req.params.branchId;
    const employees = await employeeService.getEmployeesByBranch(branchId);
    if (employees.length === 0) {
      res.status(404).json({ message: 'No employees found for this branch' });
      return;
    }
    res.status(200).json(employees); // Respond with the list of employees for the branch
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees for branch', error });
  }
};

// Get all employees in a specific department
export const getEmployeesByDepartment = async (req: Request, res: Response): Promise<void> => {
  try {
    const department = req.params.department;
    const employees = await employeeService.getEmployeesByDepartment(department);
    if (employees.length === 0) {
      res.status(404).json({ message: 'No employees found in this department' });
      return;
    }
    res.status(200).json(employees); // Respond with the list of employees for the department
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees for department', error });
  }
};

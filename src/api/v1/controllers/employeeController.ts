// src/api/v1/controllers/employeeController.ts
import { Request, Response } from 'express';
import * as employeeService from '../services/employeeService';
import { Employee } from '../interfaces/Employee';

// Create an employee
export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee', error });
  }
};

// Get all employees
export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
  }
};

// Get an employee by ID
export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employee', error });
  }
};

// Update employee data
export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const updatedEmployee = await employeeService.updateEmployee(req.params.id, req.body);
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee', error });
  }
};

// Delete an employee
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const result = await employeeService.deleteEmployee(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee', error });
  }
};

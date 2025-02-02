// src/api/v1/services/employeeService.ts
import { Employee } from '../interfaces/Employee';

let employees: Employee[] = [];  // Dummy in-memory database

export const createEmployee = (employeeData: Omit<Employee, 'id'>): Employee => {
  const newEmployee = {
    id: (employees.length + 1).toString(),
    ...employeeData,
  };
  employees.push(newEmployee);
  return newEmployee;
};

export const getAllEmployees = (): Employee[] => {
  return employees;
};

export const getEmployeeById = (id: string): Employee | undefined => {
  return employees.find(employee => employee.id === id);
};

export const updateEmployee = (id: string, updates: Partial<Employee>): Employee | undefined => {
  const employee = getEmployeeById(id);
  if (employee) {
    Object.assign(employee, updates);
    return employee;
  }
  return undefined;
};

export const deleteEmployee = (id: string): boolean => {
  const index = employees.findIndex(employee => employee.id === id);
  if (index !== -1) {
    employees.splice(index, 1);
    return true;
  }
  return false;
};

import { Employee } from '../interfaces/Employee';

// In-memory employee "database"
let employees: Employee[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    position: 'Branch Manager',
    department: 'Management',
    email: 'alice.johnson@pixell-river.com',
    phone: '604-555-0148',
    branchId: '1',
  },
  {
    id: '2',
    name: 'Amandeep Singh',
    position: 'Customer Service Representative',
    department: 'Customer Service',
    email: 'amandeep.singh@pixell-river.com',
    phone: '780-555-0172',
    branchId: '2',
  },
  {
    id: '3',
    name: 'Maria Garcia',
    position: 'Loan Officer',
    department: 'Loans',
    email: 'maria.garcia@pixell-river.com',
    phone: '204-555-0193',
    branchId: '3',
  },
  {
    id: '4',
    name: 'James Wilson',
    position: 'IT Support Specialist',
    department: 'IT',
    email: 'james.wilson@pixell-river.com',
    phone: '604-555-0134',
    branchId: '1',
  },
  {
    id: '5',
    name: 'Linda Martinez',
    position: 'Financial Advisor',
    department: 'Advisory',
    email: 'linda.martinez@pixell-river.com',
    phone: '780-555-0165',
    branchId: '2',
  },
  {
    id: '6',
    name: 'Michael Brown',
    position: 'Teller',
    department: 'Operations',
    email: 'michael.brown@pixell-river.com',
    phone: '204-555-0187',
    branchId: '3',
  },
  {
    id: '7',
    name: 'Patricia Taylor',
    position: 'Operations Manager',
    department: 'Operations',
    email: 'patricia.taylor@pixell-river.com',
    phone: '204-555-0204',
    branchId: '3',
  },
];

// Create an employee
export const createEmployee = (employeeData: Omit<Employee, 'id'>): Employee => {
  const newEmployee: Employee = {
    id: (employees.length + 1).toString(),
    ...employeeData,
  };
  employees.push(newEmployee); // Add to the "database"
  return newEmployee;
};

// Get all employees
export const getAllEmployees = (): Employee[] => {
  return employees;
};

// Get an employee by ID
export const getEmployeeById = (id: string): Employee | undefined => {
  return employees.find(employee => employee.id === id);
};

// Update an employee's data
export const updateEmployee = (id: string, updates: Partial<Employee>): Employee | undefined => {
  const employee = employees.find(emp => emp.id === id);
  if (employee) {
    Object.assign(employee, updates); // Update fields
    return employee;
  }
  return undefined;
};

// Delete an employee
export const deleteEmployee = (id: string): boolean => {
  const index = employees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employees.splice(index, 1); // Remove from the "database"
    return true;
  }
  return false;
};

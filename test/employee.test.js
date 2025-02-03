
const request = require('supertest');
const app = require('../src/app');  // Assuming your Express app is exported from src/app.js

describe('Employee API', () => {

  let employeeId;

  // Test Create Employee
  it('should create a new employee', async () => {
    const response = await request(app)
      .post('/api/v1/employees')
      .send({
        name: 'John Doe',
        position: 'Developer',
        department: 'Engineering',
        email: 'john@example.com',
        phone: '123456789',
        branchId: '1',
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    employeeId = response.body.id;  // Save the employee ID for later tests
  });

  // Test Get All Employees
  it('should return a list of all employees', async () => {
    const response = await request(app).get('/api/v1/employees');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Test Get Employee by ID
  it('should return a specific employee by ID', async () => {
    const response = await request(app).get(`/api/v1/employees/${employeeId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(employeeId);
  });

  // Test Update Employee
  it('should update employee data', async () => {
    const response = await request(app)
      .put(`/api/v1/employees/${employeeId}`)
      .send({ phone: '987654321' });
    expect(response.status).toBe(200);
    expect(response.body.phone).toBe('987654321');
  });

  // Test Delete Employee
  it('should delete an employee', async () => {
    const response = await request(app).delete(`/api/v1/employees/${employeeId}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Employee deleted successfully');
  });
});

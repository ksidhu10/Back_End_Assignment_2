import express from 'express';
const app = express();

app.use(express.json());  // To parse JSON request bodies

// Dummy employee data for testing purposes
let employees = [
  { id: 1, name: 'John Doe', position: 'Developer', department: 'Engineering' }
];

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send({ message: 'Server is healthy' });
});

// Employee routes
app.post('/api/v1/employees', (req, res) => {
  const newEmployee = { id: employees.length + 1, ...req.body };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

app.get('/api/v1/employees', (req, res) => {
  res.status(200).json(employees);
});

app.get('/api/v1/employees/:id', (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (employee) {
    res.status(200).json(employee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

app.put('/api/v1/employees/:id', (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (employee) {
    Object.assign(employee, req.body);
    res.status(200).json(employee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

app.delete('/api/v1/employees/:id', (req, res) => {
  const index = employees.findIndex(e => e.id === parseInt(req.params.id));
  if (index !== -1) {
    employees.splice(index, 1);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

export default app;

import express from 'express';
import branchRoutes from './api/v1/routes/branchroutes';
import setupSwagger from './swagger'; // Fixed incorrect import path
import employeeRoutes from './api/v1/routes/employeeroutes';

const app = express();

app.use(express.json()); // Add middleware for JSON parsing
app.use('/api/v1/employees', employeeRoutes); // Ensure the versioning is consistent
app.use('/api/v1/branches', branchRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});

export default app;

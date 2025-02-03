import express from 'express';
import setupSwagger from "../src/swagger";
import employeeRoutes from "./api/v1/routes/employeeroutes";

const app = express();

app.use("/api/employees", employeeRoutes);
// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ message: "Server is healthy" });  // Returning JSON
});

export default app;

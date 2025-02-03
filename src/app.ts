import express from 'express';
import branchRoutes from "./api/v1/routes/branchroutes";
import setupSwagger from "../src/swagger";
import employeeRoutes from "./api/v1/routes/employeeroutes";

const app = express();

app.use("/api/employees", employeeRoutes);
app.use("/api/branches", branchRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ message: "Server is healthy" });  
});



export default app;

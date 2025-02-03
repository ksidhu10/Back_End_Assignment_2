import express from "express";
import setupSwagger from "./swagger"; // Make sure the path to swagger setup is correct
import employeeRoutes from "./api/v1/routes/employeeroutes";

const app = express();

// Set up Swagger
setupSwagger(app);

// Use routes
app.use("/api/employees", employeeRoutes);

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;

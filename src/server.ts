import express from "express";
import dotenv from "dotenv"; // Load environment variables
import setupSwagger from "./swagger";
import employeeRoutes from "./api/v1/routes/employeeroutes";

dotenv.config(); // Configure dotenv

const app = express();

// Set up Swagger
setupSwagger(app);

// Use routes
app.use("/api/employees", employeeRoutes);

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});

// Start the server using PORT from .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;

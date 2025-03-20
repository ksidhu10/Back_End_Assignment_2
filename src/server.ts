import express from "express";
import dotenv from "dotenv";
import helmet from "helmet"; // Import Helmet
import setupSwagger from "./swagger";
import employeeRoutes from "./api/v1/routes/employeeroutes";

dotenv.config(); // Configure dotenv

const app = express();

app.use(helmet()); // Apply Helmet security middleware

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

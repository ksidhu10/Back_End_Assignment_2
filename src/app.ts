import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

// Initialize Express app
const app = express();

// Use morgan for HTTP request logging
app.use(morgan("combined"));

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // OpenAPI version
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "A simple Express API"
    }
  },
  // Path to the API docs
  apis: ["./src/api/v1/routes/*.ts"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

// Set up Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Example health check route
app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy");
});

export default app;

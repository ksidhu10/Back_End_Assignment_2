import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

// Swagger definition options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Employee Directory API",  // Your API title
      description: "API for managing employees and their branches", // Description
      version: "1.0.0",  // Version of your API
    },
    basePath: "/api",  // Your base path for routes
  },
  apis: ["./src/api/v1/routes/*.ts"],  // Path to your route files (for Swagger documentation)
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const setupSwagger = (app: Express): void => {
  // Serving the Swagger UI at /api-docs
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;

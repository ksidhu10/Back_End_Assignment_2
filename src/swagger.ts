import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

// Swagger definition options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Employee Directory API",  
      description: "API for managing employees and their branches", 
      version: "1.0.0",  
    },
    basePath: "/api",  
  },
  apis: ["./src/api/v1/routes/*.ts"],  
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const setupSwagger = (app: Express): void => {
  // Serving the Swagger UI at /api-docs
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;

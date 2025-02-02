import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'A simple Express API',
    },
  },
  // Point Swagger to versioned routes
  apis: ['./src/api/v1/routes/*.ts'],  // Point to v1 routes
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;

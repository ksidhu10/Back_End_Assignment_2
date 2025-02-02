import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger';  // Import the Swagger docs

const app = express();

app.use(morgan("combined"));

// Serve Swagger UI at /api-docs endpoint
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/health", (req, res) => {
  res.status(200).send({ message: "Server is healthy" });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;

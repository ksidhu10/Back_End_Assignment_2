import express from "express";
import dotenv from "dotenv";
import helmet from "helmet"; // Import Helmet
import cors from "cors"; // Import CORS
import setupSwagger from "./swagger";
import employeeRoutes from "./api/v1/routes/employeeroutes";

dotenv.config(); // Load environment variables

const app = express();

// ✅ Apply Helmet security middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://trusted-cdn.com"],
      },
    },
    frameguard: { action: "deny" }, // Prevent Clickjacking
    noSniff: true, // Prevent MIME sniffing
    hidePoweredBy: true, // Remove "X-Powered-By" header
  })
);

// ✅ Enable JSON Parsing for API Requests (Should be placed before routes)
app.use(express.json());

// ✅ CORS Configuration with Better Error Handling
const allowedOrigins = ["https://yourtrusteddomain.com", "https://anothertrusteddomain.com"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow request
      } else {
        console.error(`Blocked CORS request from origin: ${origin}`);
        callback(new Error("Not allowed by CORS"), false);
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true, // Allow cookies and authentication headers
  })
);

// ✅ Set up Swagger API Documentation
setupSwagger(app);

// ✅ Use Employee Routes
app.use("/api/employees", employeeRoutes);

// ✅ Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});

// ✅ Start the Server on the Configured Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

export default app;

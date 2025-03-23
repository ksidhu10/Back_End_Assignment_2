# Employee Management API

This is an API built with TypeScript and Express that helps manage employees and branches in a company. You can use it to add, view, update, and delete employee and branch details.

## Key Features
- Add, view, update, and delete employees and branches
- Filter employees by department or branch
- Validate input data to keep it safe and clean
- API documentation available using Swagger (OpenAPI)

## 🔧 Installation

Follow these steps to set up and run the project on your computer:

1. **Clone the repository**  
   (This means downloading the project to your computer)
   git clone https://github.com/ksidhu10/public-api-docs.git


2. Install required packages (This will install all dependencies the project needs.)
  npm install

3. Create a .env file (Add the environment variables in a .env file at the root of the project.)
 For example:
 # PORT=3000
# DATABASE_URL= https://assignment3-7ad94-default-rtdb.firebaseio.com/


4. Run the server in development mode
This starts the API locally.
 npm start
# Access the API and Swagger Docs
API Base URL: http://localhost:3000/api-docs/
Swagger UI Docs:(https://ksidhu10.github.io/public-api-docs/)
*https://github.com/ksidhu10/public-api-docs.git


##  Example Usage (TypeScript)

Here is a simple example of how to send a request to the API using TypeScript and Axios.

###  Example: Create a New Employee

```ts
import axios from "axios";


// New employee data
const newEmployee = {
  name: "Shubh Rapper",
  position: "Software Engineer",
  department: "Engineering",
  email: "shubh.rapper@example.com",
  phone: "1234567890",
  branchId: "branch123"
};

// Send POST request to create employee
axios.post(API_URL, newEmployee)
  .then(response => {
    console.log("Employee created successfully:", response.data);
  })
  .catch(error => {
    console.error("Error creating employee:", error.response?.data || error.message);
  });


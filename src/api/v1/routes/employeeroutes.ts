import express, { Request, Response } from "express";
import { 
  createEmployee, 
  getAllEmployees, 
  getEmployeeById, 
  updateEmployee, 
  deleteEmployee, 
  getEmployeesByBranch, 
  getEmployeesByDepartment 
} from "../controllers/employeeControllers";

const router = express.Router();

/**
 * @openapi
 * /employees:
 *   post:
 *     description: Create a new employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               position:
 *                 type: string
 *               department:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               branchId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: The created employee
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 position:
 *                   type: string
 *                 department:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 branchId:
 *                   type: integer
 */
router.post("/", (req: Request, res: Response) => {
  createEmployee(req, res);
});

/**
 * @openapi
 * /employees:
 *   get:
 *     description: Get all employees
 *     responses:
 *       200:
 *         description: A list of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   position:
 *                     type: string
 *                   department:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   branchId:
 *                     type: integer
 */
router.get("/", (req: Request, res: Response) => {
  getAllEmployees(req, res);
});

/**
 * @openapi
 * /employees/{id}:
 *   get:
 *     description: Get a single employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single employee
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 position:
 *                   type: string
 *                 department:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 branchId:
 *                   type: integer
 */
router.get("/:id", (req: Request, res: Response) => {
  getEmployeeById(req, res);
});

/**
 * @openapi
 * /employees/{id}:
 *   put:
 *     description: Update an existing employee's details
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               position:
 *                 type: string
 *               department:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               branchId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The updated employee
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 position:
 *                   type: string
 *                 department:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 branchId:
 *                   type: integer
 */
router.put("/:id", (req: Request, res: Response) => {
  updateEmployee(req, res);
});

/**
 * @openapi
 * /employees/{id}:
 *   delete:
 *     description: Delete an employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The deleted employee
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 position:
 *                   type: string
 *                 department:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 branchId:
 *                   type: integer
 */
router.delete("/:id", (req: Request, res: Response) => {
  deleteEmployee(req, res);
});

/**
 * @openapi
 * /employees/branch/{branchId}:
 *   get:
 *     description: Get all employees for a specific branch
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of employees in the specified branch
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   position:
 *                     type: string
 *                   department:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   branchId:
 *                     type: integer
 */
router.get("/branch/:branchId", (req: Request, res: Response) => {
  getEmployeesByBranch(req, res);
});

/**
 * @openapi
 * /employees/department/{department}:
 *   get:
 *     description: Get all employees in a specific department
 *     parameters:
 *       - in: path
 *         name: department
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of employees in the specified department
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   position:
 *                     type: string
 *                   department:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   branchId:
 *                     type: integer
 */
router.get("/department/:department", (req: Request, res: Response) => {
  getEmployeesByDepartment(req, res);
});

export default router;

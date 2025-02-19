import express, { Request, Response, NextFunction } from "express";
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
router.post("/", (req: Request, res: Response, next: NextFunction) => {
  createEmployee(req, res, next);
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  getAllEmployees(req, res, next);
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  getEmployeeById(req, res, next);
});

router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
  updateEmployee(req, res, next);
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  deleteEmployee(req, res, next);
});

router.get("/branch/:branchId", (req: Request, res: Response, next: NextFunction) => {
  getEmployeesByBranch(req, res, next);
});

router.get("/department/:department", (req: Request, res: Response, next: NextFunction) => {
  getEmployeesByDepartment(req, res, next);
});

export default router;

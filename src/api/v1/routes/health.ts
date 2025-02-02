// src/api/v1/routes/healthRoute.ts
import { Router, Request, Response } from 'express';

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Check the health of the server
 *     description: Returns a simple message indicating the server is healthy
 *     responses:
 *       200:
 *         description: Server is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Server is healthy'
 */
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).send({ message: 'Server is healthy' }) ;
});

export default router;

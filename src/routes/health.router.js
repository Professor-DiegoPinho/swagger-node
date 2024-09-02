import { Router } from "express";

const healthRouter = Router();

/**
  * @openapi
  * /health:
  *  get:
  *     tags:
  *     - Healthcheck
  *     description: Responds if the app is up and running
  *     responses:
  *       200:
  *         description: App is up and running
  */
healthRouter.get("/health", (req, res) => {
  return res.send("Ok!");
});

export default healthRouter;
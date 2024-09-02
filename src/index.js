import express from "express";

import swaggerJsdoc from "swagger-jsdoc";
import { setup, serve } from "swagger-ui-express";

import healthRouter from "./routes/health.router.js";
import swaggerOptions from "./config/swagger-options.js";
import recipesRouter from "./routes/recipes.router.js";


const app = express();

const specs = swaggerJsdoc(swaggerOptions);
app.use("/docs", serve, setup(specs));
app.use(healthRouter);
app.use(recipesRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
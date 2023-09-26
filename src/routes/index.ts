import { Router } from "express";
import HealthRouter from "./health";

const routes = Router();

routes.use(HealthRouter);

export default routes;

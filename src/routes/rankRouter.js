import { Router } from "express";
import { validateToken } from "../middlewares/authMiddlewares.js";
import { AllUserLinks } from "../controllers/rankControllers.js";
import { verifyUserValid } from "../middlewares/rankMiddlewares.js";
import { rank } from "../controllers/rankControllers.js";

const rankRouter = Router();

rankRouter.get("/users/me", validateToken, verifyUserValid, AllUserLinks);
rankRouter.get("/ranking", rank);

export default rankRouter;
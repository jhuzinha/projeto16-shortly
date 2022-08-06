import { Router } from "express";
import { signIn, signUp } from "../controllers/authControllers.js";
import Validate from "../middlewares/joiValidationMiddleware.js";
import { verifyUser, existingUser } from "../middlewares/authMiddlewares.js";

const authRouter = Router();

authRouter.post("/login", Validate("login"), existingUser, signIn)
authRouter.post("/register", Validate("register"), verifyUser, signUp)

export default authRouter;
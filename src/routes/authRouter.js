import { Router } from "express";
import { signIn, signUp } from "../controllers/authControllers.js";
import Validate from "../middlewares/joiValidationMiddleware.js";

const authRouter = Router();

authRouter.post("/login", Validate("login"), signIn)
authRouter.post("/register", Validate("register"), signUp)

export default authRouter;
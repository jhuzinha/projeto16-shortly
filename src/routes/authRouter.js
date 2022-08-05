import { Router } from "express";
import { signUp } from "../controllers/authControllers.js";
import Validate from "../middlewares/joiValidationMiddleware.js";

const authRouter = Router();

authRouter.post("/login", )
authRouter.post("/register", Validate("register"), signUp)

export default authRouter;
import { Router } from "express";
import { signUp } from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post("/login", )
authRouter.post("/register", signUp)

export default authRouter;
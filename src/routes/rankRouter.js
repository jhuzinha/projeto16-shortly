import { Router } from "express";

const rankRouter = Router();

rankRouter.get("/users/me");
rankRouter.get("/ranking");

export default rankRouter;
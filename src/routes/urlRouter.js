import { Router } from "express";
import { createShortUrl, getUrlById, openShortUrl } from "../controllers/urlControllers.js";
import { validateToken } from "../middlewares/authMiddlewares.js";
import Validate from "../middlewares/joiValidationMiddleware.js";
import { verifyUserUrl } from "../middlewares/urlMiddlewares.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", validateToken, Validate("url"), verifyUserUrl, createShortUrl);
urlRouter.get("/urls/:id", getUrlById);
urlRouter.get("/urls/open/:shortUrl", openShortUrl);
urlRouter.delete("/urls/:id", validateToken);

export default urlRouter;
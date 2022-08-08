import { Router } from "express";
import { createShortUrl, getUrlById, openShortUrl, deleteUrl } from "../controllers/urlControllers.js";
import { validateToken } from "../middlewares/authMiddlewares.js";
import Validate from "../middlewares/joiValidationMiddleware.js";
import { verifyUserUrl, verifyUrl } from "../middlewares/urlMiddlewares.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", validateToken, Validate("url"), verifyUserUrl, createShortUrl);
urlRouter.get("/urls/:id", getUrlById);
urlRouter.get("/urls/open/:shortUrl", openShortUrl);
urlRouter.delete("/urls/:id", verifyUrl, validateToken, deleteUrl);

export default urlRouter;
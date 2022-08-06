import { Router } from "express";
import { createShortUrl } from "../controllers/urlControllers.js";
import { validateToken } from "../middlewares/authMiddlewares.js";
import Validate from "../middlewares/joiValidationMiddleware.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", validateToken, Validate("url"), createShortUrl);
urlRouter.get("/urls/:id");
urlRouter.get("/url/open/:shortUrl");
urlRouter.delete("/urls/:id");

export default urlRouter;
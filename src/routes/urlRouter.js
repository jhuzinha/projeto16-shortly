import { Router } from "express";

const urlRouter = Router();

urlRouter.post("/url/shorten");
urlRouter.get("/urls/:id");
urlRouter.get("/url/open/:shortUrl");
urlRouter.delete("/urls/:id");

export default urlRouter;
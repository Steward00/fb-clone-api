import { Router } from "express";
import { authentification } from "../middleware/auth-middleware.js";
import post from "../controller/post-controller.js";

const postRouter = Router();

postRouter.post("/post", authentification, post);

export default postRouter;

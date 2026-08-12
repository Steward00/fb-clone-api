import { Router } from "express";
import commentaire from "../controller/comment-controller.js";
import { authentification } from "../middleware/auth-middleware.js";

const CommentRouter = Router();

CommentRouter.post("/comment", authentification, commentaire);

export default CommentRouter;

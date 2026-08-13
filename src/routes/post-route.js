import { Router } from "express";
import { authentification } from "../middleware/auth-middleware.js";
import {
  post,
  deletePost,
  updatePost,
  allPost,
} from "../controller/post-controller.js";

const postRouter = Router();

postRouter.post("/", authentification, post);
postRouter.delete("/:id", authentification, post);
postRouter.put("/:id", authentification, updatePost);
postRouter.get("/", authentification, allPost);

export default postRouter;

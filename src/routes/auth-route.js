import { Router } from "express";
import {
  registerUser,
  loginUser,
  logout,
  allUser,
} from "../controller/auth-controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);

export default router;

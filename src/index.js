import express from "express";
import { prisma } from "./db.js";
import cors from "cors";
import "dotenv/config";
import route from "./routes/auth-route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", route);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});

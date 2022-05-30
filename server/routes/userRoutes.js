import express from "express";
import { createUser } from "../controllers/user";

const router = express.Router();

router.post("/register", createUser)

export default router;
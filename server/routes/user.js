import express from "express";
import { authenticateUser, createUser, loginUser, userPage } from "../controllers/user.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/userpage", authenticateUser, userPage)

export default router;
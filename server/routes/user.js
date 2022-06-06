import express from "express";
import { authenticateUser, userPage, getDoses, createUser, loginUser, modifyUser } from "../controllers/user";

const router = express.Router();

router.get("/user/:userId", authenticateUser, userPage);
router.get("/user/:userId/doses", authenticateUser, getDoses);
router.post("/register", createUser);
router.post("/login", loginUser);
router.patch("/user/:userId/dose/:doseId", modifyUser);

export default router;
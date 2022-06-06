import express from "express";

import { authenticateUser } from "../controllers/user.js"
import { createDose, displayDose } from "../controllers/dose.js";

const router = express.Router();

router.post("/dose", authenticateUser, createDose);
router.get("/dose", authenticateUser, displayDose);

export default router;
import express from "express";

import { authenticateUser } from "../controllers/user.js"
import { createCard, displayCard } from "../controllers/card.js";

const router = express.Router();

router.post("/card", authenticateUser, createCard);
router.get("/card", authenticateUser, displayCard);

export default router;
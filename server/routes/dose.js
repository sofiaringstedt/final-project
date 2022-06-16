import express from "express";

import { createDose, displayDose, deleteDose } from "../controllers/dose.js";

const router = express.Router();

router.get("/dose", displayDose);
router.post("/dose", createDose);
router.delete("/dose/:doseId", deleteDose);

export default router;
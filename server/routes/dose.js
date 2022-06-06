import express from "express";

import { createDose, displayDose } from "../controllers/dose.js";

const router = express.Router();

router.get("/dose", displayDose);
router.post("/dose", createDose);

export default router;
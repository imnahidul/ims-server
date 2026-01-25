

import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addFaulty,
  getFaultys,
  updateFaulty,
  deleteFaulty,
} from "../controllers/faultyController.js";

const router = express.Router();

router.post("/add", authMiddleware, addFaulty);
router.get("/", authMiddleware, getFaultys);
router.put("/:id", authMiddleware, updateFaulty);
router.delete("/:id", authMiddleware, deleteFaulty);

export default router;
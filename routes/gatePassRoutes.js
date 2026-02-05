import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addGatePass,
  getGatePasses,
  updateGatePass,
  deleteGatePass,
} from "../controllers/gatePassController.js";

const router = express.Router();

router.post("/add", authMiddleware, addGatePass);
router.get("/", authMiddleware, getGatePasses);
router.put("/:id", authMiddleware, updateGatePass);
router.delete("/:id", authMiddleware, deleteGatePass);

export default router;
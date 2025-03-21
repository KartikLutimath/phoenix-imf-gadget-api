import express from "express";
import {
  getGadgets,
  createGadget,
  updateGadget,
  decommissionGadget,
  selfDestructGadget,
} from "../controllers/gadgetController.js";
import { authenticateToken } from "../middleware/middleware.js";

const router = express.Router();

router.get("/", authenticateToken, getGadgets);
router.post("/", authenticateToken, createGadget);
router.patch("/:id", authenticateToken, updateGadget);
router.delete("/:id", authenticateToken, decommissionGadget);
router.post("/:id/self-destruct", authenticateToken, selfDestructGadget);

export default router;
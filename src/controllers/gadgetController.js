import client from "../config/db.js";
import { v4 as uuidv4 } from "uuid";
import {
  generateSuccessProbability,
  generateCodename,
} from "../utils/helper.js";

// GET all gadgets with optional status filter
export const getGadgets = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM gadgets");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch gadgets" });
  }
};

// POST new gadget
export const createGadget = async (req, res) => {
  try {
    const newGadget = {
      id: uuidv4(),
      name: generateCodename(),
      status: "Available",
    };

    await client.query(
      "INSERT INTO gadgets (id, name, status) VALUES ($1, $2, $3)",
      [newGadget.id, newGadget.name, newGadget.status]
    );

    res.status(201).json(newGadget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PATCH update gadget
export const updateGadget = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;
  try {
    await client.query(
      "UPDATE gadgets SET name = $1, status = $2 WHERE id = $3",
      [name, status, id]
    );
    res.json({ message: "Gadget updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const decommissionGadget = async (req, res) => {
  const { id } = req.params;
  try {
    await client.query(
      "UPDATE gadgets SET status = 'Decommissioned', decommissioned_at = NOW() WHERE id = $1",
      [id]
    );
    res.json({ message: "Gadget decommissioned" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST trigger self-destruct
export const selfDestructGadget = async (req, res) => {
  const { id } = req.params;
  const confirmationCode = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();
  try {
    await client.query("UPDATE gadgets SET status = 'Destroyed' WHERE id = $1", [
      id,
    ]);
    res.json({ message: "Self-destruct initiated", confirmationCode });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

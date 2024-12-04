import express from "express";
import { Receta } from "../models/Receta.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.status(200).json(recetas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", (req, res) => {
  console.log(req);
  res.send("Request POST");
});

router.put("/", (req, res) => {
  res.send("Request PUT");
});

router.delete("/", (req, res) => {
  console.log(req);
  res.send("Request DELETE");
});

export default router;

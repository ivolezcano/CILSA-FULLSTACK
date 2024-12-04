import mongoose from "mongoose";

const RecetaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  ingredientes: {
    type: [
      {
        nombre: String,
        cantidad: Number,
        unidad: String,
      },
    ],
    required: true,
  },
  descripcion: {
    type: String,
  },
});
export const Receta = mongoose.model("Receta", RecetaSchema);

import mongoose from "mongoose";

const RecetaSchema = new mongoose.Schema({
  nombreReceta: {
    type: String,
    required: true,
  },
  ingredientes: {
    type: [
      {
        ingrediente: String,
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

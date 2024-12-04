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
  realizada: {
    type: Boolean,
    default: false,
  },
});
export const Receta = mongoose.model("Receta", RecetaSchema);

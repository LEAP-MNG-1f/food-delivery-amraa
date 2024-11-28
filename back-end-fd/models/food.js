import mongoose, { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredient: { type: String, required: true },
  price: { type: Number, required: true },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
});

const foodModel = model("Food", foodSchema);

export default foodModel;

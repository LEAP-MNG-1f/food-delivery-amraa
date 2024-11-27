import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredient: { type: String, required: true },
  price: { type: Number, required: true },
  categoryId: { type: String, required: true },
});

const foodModel = model("food", foodSchema);

export default foodModel;

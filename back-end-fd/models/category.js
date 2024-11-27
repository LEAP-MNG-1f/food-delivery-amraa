import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: { type: String, required: true },
});

const categoryModel = model("Category", categorySchema);

export default categoryModel;

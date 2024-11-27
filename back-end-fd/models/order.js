import mongoose, { Schema, model } from "mongoose";

const processEnum = {
  values: ["active", "waiting", "progress", "delivered"],
};

const orderSchema = new Schema({
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foodIds: {
    type: Array,
    ref: "food",
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    enum: processEnum,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  Khoroo: {
    type: String,
    required: true,
  },
  Apartment: {
    type: String,
    required: true,
  },
});

const orderModel = model("order", orderSchema);
export default orderModel;

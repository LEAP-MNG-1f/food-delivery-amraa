import mongoose, { Schema, model } from "mongoose";

const processEnum = {
  values: ["active", "waiting", "progress", "delivered"],
};

const paymentEnum = {
  values: ["card", "cash"],
};

const orderSchema = new Schema({
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foodIds: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Food",
      required: true,
    },
  ],
  totalPrice: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    enum: processEnum,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
  },
  paymentType: {
    type: String,
    enum: paymentEnum,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const orderModel = model("Order", orderSchema);
export default orderModel;

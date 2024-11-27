import orderModel from "../models/order.js";

const createOrder = async (req, res) => {
  const result = await orderModel.create({
    customer: "674685f87f735716a2701b52",
    orderNumber: 1,
    foodIds: ["6743f625e4f657c90d562163", "6744157116c213fc463d90ce"],
    totalPrice: "100000",
    process: "active",
    createDate: new Date(),
    district: "Harhorin district",
    Khoroo: "100",
    Apartment: "Diamond Budhha",
  });
  res.json({
    success: true,
    data: result,
  });
};

const getAllorder = async (req, res) => {
  const result = await orderModel.find().populate("customer");
  res.json({
    success: true,
    data: result,
  });
};

export { createOrder, getAllorder };

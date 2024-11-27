import orderModel from "../models/order.js";

const createOrder = async (req, res) => {
  const result = await orderModel.create({
    customer: "674685f87f735716a2701b52",
    orderNumber: 3,
    foodIds: ["67468fc4cc0602ac4ef8e505", "67469016d43659e24f07748f"],
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
  const result = await orderModel
    .find()
    .populate("customer")
    .populate("foodIds");
  res.json({
    success: true,
    data: result,
  });
};

export { createOrder, getAllorder };

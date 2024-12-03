import Order from "../models/order.js";

const getOrder = async (request, response) => {
  const result = await Order.find().populate("customer").populate("foodIds");
  response.json({ success: true, data: result });
};

const createOrder = async (request, response) => {
  try {
    const {
      customer,
      orderNumber,
      foodIds,
      totalPrice,
      process,
      district,
      khoroo,
      apartment,
      detail,
      phoneNumber,
      paymentType,
    } = request.body;

    // Ensure foodIds is an array of objects (if needed)
    const parsedFoodIds = foodIds.map((item) => JSON.parse(item));

    const result = await Order.create({
      customer,
      orderNumber,
      foodIds: parsedFoodIds, // Ensure foodIds is saved correctly
      totalPrice,
      process: process || "active",
      createdDate: new Date(),
      district,
      khoroo,
      apartment,
      detail,
      phoneNumber,
      paymentType: paymentType,
    });

    response.status(201).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      success: false,
      message: "Error creating order",
    });
  }
};

const updateOrder = async (request, response) => {
  try {
    const { _id } = request.params; // Ensure `_id` is extracted correctly

    // Validate _id
    if (!_id || !_id.match(/^[0-9a-fA-F]{24}$/)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid or missing order ID" });
    }

    // Extract fields to update from request body
    const {
      customer,
      orderNumber,
      foodIds,
      totalPrice,
      process,
      district,
      khoroo,
      apartment,
      detail,
      phoneNumber,
      paymentType,
    } = request.body;

    // Update the order in the database
    const result = await Order.findByIdAndUpdate(
      _id,
      {
        customer,
        orderNumber,
        foodIds,
        totalPrice,
        process,
        district,
        khoroo,
        apartment,
        detail,
        phoneNumber,
        paymentType,
      },
      { new: true, runValidators: true } // Options to return the updated document and validate data
    );

    // Check if the order was found and updated
    if (!result) {
      return response.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Respond with success and updated order data
    response.json({ success: true, data: result });
  } catch (error) {
    console.error("Error updating order:", error);

    // Respond with a generic server error message
    response.status(500).json({
      success: false,
      message: "An error occurred while updating the order",
    });
  }
};

const deleteOrder = async (request, response) => {
  const { id } = request.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return response
      .status(400)
      .json({ success: false, message: "Invalid user ID" });
  }

  const result = await Order.findByIdAndDelete(id);
  if (!result) {
    return response.status(404).json({
      success: false,
      message: "Order not found",
    });
  }
  response.json({ success: true, data: result });
};

export { getOrder, createOrder, updateOrder, deleteOrder };

import foodModel from "../models/food.js";

const createFood = async (req, res) => {
  const result = await foodModel.create({
    name: "Бууз",
    image:
      "https://mongolamerican.wordpress.com/wp-content/uploads/2012/07/buuz_831.jpg",
    ingredient: "гурил мах давс сонгино, шидэт шингэн",
    price: 15000,
    categoryId: "67468f42dc26a5aeb49c7495",
  });

  res.json({
    success: true,
    data: result,
  });
};

const getAllFood = async (req, res) => {
  const result = await foodModel.find();

  res.json({
    success: true,
    data: result,
  });
};

export { createFood, getAllFood };

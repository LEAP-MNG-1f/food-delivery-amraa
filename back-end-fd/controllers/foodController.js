import foodModel from "../model/food.js";

const createFood = async (req, res) => {
  const result = await foodModel.create({
    name: "Бууз",
    image:
      "https://mongolamerican.wordpress.com/wp-content/uploads/2012/07/buuz_831.jpg",
    ingredient: "гурил мах давс сонгино",
    price: 15000,
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

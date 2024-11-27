import categoryModel from "../model/category.js";

const createCategory = async (req, res) => {
  const result = await categoryModel.create({
    name: "Soup",
  });

  res.json({
    success: true,
    data: result,
  });
};

const getAllCategory = async (req, res) => {
  const result = await categoryModel.find();

  res.json({
    success: true,
    data: result,
  });
};

export { createCategory, getAllCategory };

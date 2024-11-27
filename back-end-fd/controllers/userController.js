import userModel from "../models/user.js";

const createUser = async (req, res) => {
  const result = await userModel.create({
    name: "Amraa",
    email: "amraa@gmail.com",
    password: "chi taahgui",
    phoneNumber: 91402449,
    role: "admin",
  });

  res.json({
    success: true,
    data: result,
  });
};

const getAllUser = async (req, res) => {
  const result = await userModel.find();

  res.json({
    success: true,
    data: result,
  });
};

export { createUser, getAllUser };

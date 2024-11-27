import { Schema, model } from "mongoose";

const roleEnum = {
  values: ["admin", "user"],
};

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  role: {
    type: String,
    enum: roleEnum,
    default: "user",
  },
});

const userModel = model("User", userSchema);

export default userModel;

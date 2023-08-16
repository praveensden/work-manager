import mongoose from "mongoose";
// design scema
// then model

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  about: String,
  profileUrl: String,
  //   address: {
  //     street: String,
  //     city: String,
  //     state: String,
  //     pincode: Number,
  //   },
});

export const User = mongoose.model.users || mongoose.model("users", userSchema);

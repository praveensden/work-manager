import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  addedDate: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    require: true,
    default: "pending",
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

export const Task =
  mongoose.model.tasks || new mongoose.model("works", taskSchema);

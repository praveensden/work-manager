import { User } from "@/models/user";
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONOGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("db connecting....");

    // const user = new User({
    //   name: "Praveen",
    //   email: "praveen@divami.com",
    //   password: "1234",
    //   about: "This is test",
    // });
    // await user.save();
    // console.log("user is created");

    console.log("connnected with host", connection.host);
  } catch (error) {
    console.log("failed connecting to db....");
    console.log(error);
  }
};

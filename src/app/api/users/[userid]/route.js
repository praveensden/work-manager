import { connectDb } from "@/helpers/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request, { params }) {
  const { userid } = params;
  try {
    const user = await User.findById(userid).select("-password");
    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "user not found",
    });
  }
}
export async function DELETE(request, { params }) {
  const { userid } = params;

  try {
    await User.deleteOne({
      _id: userid,
    });
    return NextResponse.json({
      success: true,
      message: "user deleted sucessfuly",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "failed to delete user",
    });
  }
}

export async function PUT(request, { params }) {
  const { userid } = params;
  try {
    const { name, password, about } = request.json();
    const user = await User.findById(userid);
    user.name = name;
    user.password = password;
    user.about = about;

    const updatedUser = await user.save();
    return NextResponse.json({
      success: true,
      message: "user Updated sucessfully ",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "user not updated",
    });
  }
}

// value == 9471800
// updated value  6945300

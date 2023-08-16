import { connectDb } from "@/helpers/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDb();
export async function GET() {
  try {
    let users = [];
    users = await User.find().select("-password");
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to find users",
      status: false,
    });
  }
}
export async function POST(request) {
  const { name, email, password, about, profileURL } = await request.json();

  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });
  console.log(name, "namesss");

  user.password = await bcrypt.hash(
    user.password,
    Number(process.env.BCRYPT_SALT)
  );
  try {
    const createdUser = await user.save();
    console.log(createdUser, "createdUser");
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create user",
      status: false,
    });
  }
  // const body = request.body;
  // console.log(body);
  // console.log(request.headers);
  // console.log(request.cookies);
  // console.log(request.method);
  // console.log(request.nextUrl.pathname);
  // return NextResponse.json("posting user data", body);
}
export function PUT() {}
export function DELETE() {
  console.log("delete api called");
  return NextResponse.json(
    {
      message: "deleted !",
      status: true,
    },
    {
      status: 201,
      statusText: "hello",
    }
  );
}

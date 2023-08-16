import { connectDb } from "@/helpers/db";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

connectDb();
export async function GET(request, { params }) {
  const { userid } = params;

  try {
    const tasks = await Task.find({
      userId: userid,
    });
    return NextResponse.json({
      success: true,
      data: tasks,
      message: "task fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "failed to  fetch tasks",
    });
  }
}

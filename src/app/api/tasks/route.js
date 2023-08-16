// import { NextResponse } from "next/server";
import { connectDb } from "@/helpers/db";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

connectDb();
export async function GET(request) {
  try {
    const tasks = await Task.find();
    return NextResponse.json({
      sucess: true,
      message: "all task fetched successfully",
      data: tasks,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      sucess: false,
      message: "failed to fetch successfully",
    });
  }
}

export async function POST(request) {
  const { title, content, userId } = await request.json();
  try {
    const task = new Task({
      title,
      content,
      userId,
    });
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      sucess: true,
      status: 201,
      message: "task created successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      sucess: false,
      message: "unable to create task",
    });
  }
}

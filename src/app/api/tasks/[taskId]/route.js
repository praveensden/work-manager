import { connectDb } from "@/helpers/db";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

connectDb();
export async function GET(request, { params }) {
  const { taskId } = await params;
  try {
    const task = await Task.findById(taskId);
    return NextResponse.json(task, {
      success: true,
      message: "task fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "unable to fetch task",
    });
  }
}

export async function PUT(request, { params }) {
  const { taskId } = params;
  const { title, content, status } = await request.json();
  try {
    const task = Task.findById(taskId);
    task.title = title;
    task.content = content;
    task.status = status;
    console.log(task, "taskssss");
    const updatedTask = await task.save();
    return NextResponse.json({
      success: true,
      data: updatedTask,
      message: "task updated successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "failed to update task",
    });
  }
}

export async function DELETE(request, { params }) {
  const { taskId } = params;

  try {
    await Task.deleteOne({
      _id: taskId,
    });
    return NextResponse.json({
      success: true,
      message: "task deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "failed to delete task",
    });
  }
}

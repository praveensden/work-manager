"use client";
import React, { useEffect, useState } from "react";
import loginSvg from "../../assets/login.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "64d278e256d3698dc2dc7d1e",
  });
  const resetFields = () => {
    setTask({
      title: "",
      content: "",
      status: "none",
      userId: "",
    });
  };
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddTask = async (event) => {
    event.preventDefault();
    try {
      const res = await addTask(task);
      console.log(res);
      toast.success("task added successfully", {
        position: "top-center",
      });
      resetFields();
    } catch (error) {
      console.log(error);
      toast.error("failed to add task", {
        position: "top-center",
      });
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="grid justify-center grid-cols-12">
      <div className=" border border-white-500 grid  col-span-6 col-start-4 p-4 ">
        <div className="text-center flex justify-center">
          <Image src={loginSvg} style={{ width: "30%" }} alt="image" />
        </div>
        <h1>Add your task here</h1>
        <form action="!#" className="mt-5" onSubmit={handleAddTask}>
          <div>
            <label
              htmlFor="task_title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="task_title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Task Title"
              name="title"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Content
            </label>
            <textarea
              id="task_content"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Task Content"
              required
              rows={5}
              name="content"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="task_status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              value={task.status}
              onChange={handleChange}
              id="task_status"
              className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Task Status"
              required
              name="status"
            >
              <option value={"none"} disabled>
                -- Select Status --
              </option>
              <option value={"pending"}>Pending</option>
              <option value={"completed"}>Completed</option>
            </select>
          </div>
          <div className="mt-5 justify-center flex">
            <button
              type="submit"
              className="text-white mx-3 bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
              onClick={() => resetFields()}
              type="reset"
              className="text-white mx-3 cursor-pointer bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;

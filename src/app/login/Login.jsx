"use client";
import Image from "next/image";
import React, { useState } from "react";
import signupsvg from "../../assets/signup.svg";
import { SignUpUser } from "@/services/userService";
import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleResetFields = () => {
    setData({
      email: "",
      password: "",
    });
  };
  const doLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await SignUpUser(data);
      console.log(response);
      if (response) {
        toast.success("user successfully created", {
          position: "top-center",
        });
        handleResetFields();
      }
    } catch (error) {
      console.log(error);
      toast.error("user not created", { position: "top-center" });
    }
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 col-start-4 border border-white-400 p-5">
        <div>
          <div className="text-center flex justify-center">
            <Image src={signupsvg} style={{ width: "30%" }} alt="image" />
          </div>
          <h1 className="text-3xl">Login Here</h1>
          <form action="#!" className="mt-5" onSubmit={doLogin}>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                value={data.email}
                onChange={handleChangeData}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                value={data.password}
                onChange={handleChangeData}
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>

            <div className="mt-5 justify-center flex">
              <button
                type="submit"
                className="text-white mx-3 bg-green-700 cursor-pointer hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Submit
              </button>
              <button
                onClick={() => handleResetFields()}
                type="reset"
                className="text-white mx-3 cursor-pointer bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

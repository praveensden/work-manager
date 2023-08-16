"use client";
import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  return (
    <nav className="flex px-3 py-2 h-12 bg-blue-500 justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl ">
          <a href="#!">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link href="/" className="hover:text-blue-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/add-task" className="hover:text-blue-200">
              Add Task
            </Link>
          </li>
          <li>
            <Link href="/show-task">Show Task</Link>
          </li>
        </ul>
      </div>
      <ul className="flex gap-5">
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/signup">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CustomNavbar;

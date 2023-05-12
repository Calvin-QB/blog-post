import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-teal-600">
      <h1 className=" mb-5 text-3xl">Login</h1>
      <form className="flex flex-col gap-5 bg-white p-10 ">
        <input
          className="border-b-2 border-black "
          type="text"
          placeholder="username"
        ></input>
        <input
          className="border-b-2 border-black"
          type="password"
          placeholder="password"
        ></input>
        <button className="border-2 bg-teal-600 text-white py-2">Login</button>
        <div className="">
          Dont have an account?{" "}
          <Link to="/register" className="text-blue-700 underline ">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

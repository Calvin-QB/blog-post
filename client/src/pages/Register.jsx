import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-teal-600">
      <h1 className=" mb-5 text-3xl">Register</h1>
      <form className="flex flex-col gap-5 bg-white p-10 ">
        <input
          className="border-b-2 border-black "
          type="text"
          placeholder="username"
        ></input>
        <input
          className="border-b-2 border-black"
          type="password"
          placeholder="email"
        ></input>
        <input
          className="border-b-2 border-black"
          type="password"
          placeholder="password"
        ></input>
        <button className="border-2 bg-teal-600 text-white py-2">
          Register
        </button>
        <div className="">
          Have an account?{" "}
          <Link to="/login" className="text-blue-700 underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;

"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa"; // Import the appropriate React Icons components
import { FaUser } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, Toaster } from "sonner";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUpForm = () => {


  const { register, reset, handleSubmit } = useForm();
  
  const onSubmit = async (data: {}) => {
    try {
      const { name, email, password }: any = data;
      const res = await axios.post("/api/signup", { name, email, password });
      toast.success("user successfully created");
      reset();
      return res.data;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-white">
      <div className="p-8 lg:w-1/2 mx-auto">
        <div className="bg-white rounded-t-lg p-8">
          <p className="text-center text-sm text-gray-400 font-light">
            Sign up with
          </p>

          <SocialLogin />

        </div>
        <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
          <p className="text-center text-sm text-gray-500 font-light">
            Or sign up with credentials
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="relative">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Full Name"
                {...register("name")}
              />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <FaUser className="h-7 w-7 ml-3 text-gray-400 p-1" />
              </div>
            </div>
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                {...register("email")}
              />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <FaGoogle className="h-7 w-7 ml-3 text-gray-400 p-1" />
              </div>
            </div>
            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <FaGoogle className="h-7 w-7 ml-3 text-gray-400 p-1" />
              </div>
            </div>
            <p className="mt-4 italic text-gray-500 font-light text-xs">
              Already have an account Please:{" "}
              <span className="font-bold text-green-400 text-xs">
                <Link href="/login">Login</Link>
              </span>
            </p>
            <div className="mt-4 flex items-center text-gray-500">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
              />
              <label className="text-sm" htmlFor="remember">
                I agree with the{" "}
                <a className="text-cyan-400 hover:text-cyan-500">
                  Privacy Policy
                </a>
              </label>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button className="text-white py-2 px-4 uppercase rounded bg-cyan-500 hover:bg-cyan-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default SignUpForm;

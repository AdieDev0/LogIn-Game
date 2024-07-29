// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Game from "../assets/Game.jpg";

const Surface = () => {
  return (
    <div className="w-full h-screen flex items-start flex-col md:flex-row">
      {/* Left Side: Image Section */}
      <div className="relative w-full md:w-1/2 h-full flex flex-col">
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGtpeHRwdXdvOTRqaWJtb3dzZnB4eWZ4YTRvbTVtcTg3eHZoMmo3MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tAnvFB51UTTBoJMbZj/giphy.webp"
          alt="Game Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute text-white top-[20%] left-[10%] md:top-[20%] md:left-[15%] flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold my-4 font-pixelify">
            Transform Your Gaming Dreams into Reality
          </h1>
          <p className="text-md md:text-lg font-semibold">
            Start for free and unlock exclusive gaming deals from the community
          </p>
        </div>
      </div>

      {/* Right Side: Form Section */}
      <div className="w-full md:w-1/2 h-full flex flex-col p-4 md:p-8 lg:p-10">
        <h1 className="w-full text-lg md:text-xl font-semibold max-w-[500px] mx-auto mb-10">
          Engaging Gaming Brand
        </h1>

        <div className="w-full max-w-[500px] mx-auto flex flex-col">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 font-pixelify ">
              Login
            </h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black border-b py-2 mb-2 border-black focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-black border-b py-2 mb-2 border-black focus:outline-none"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me for 30 days</p>
            </div>
            <p className="text-sm underline cursor-pointer mt-2 md:mt-0">
              Forgot Password?
            </p>
          </div>

          <div className="w-full flex flex-col mb-4">
            <button className="font-semibold w-full bg-black rounded-md my-2 p-4 text-center text-white font-pixelify">
              Log in
            </button>
            <button className="font-semibold w-full bg-white border border-black rounded-md my-2 p-4 text-center text-black font-pixelify ">
              Register
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative mb-2">
            <div className="w-full h-[1px] bg-black/40"></div>
            <p className="text-lg absolute bg-white px-2 text-black/70 left-1/2 transform -translate-x-1/2">
              or
            </p>
          </div>

          <div className="font-semibold w-full bg-white border border-black/40 rounded-md my-2 p-4 text-center text-black cursor-pointer flex items-center justify-center">
            <img
              src="https://th.bing.com/th?id=ODLS.4fa32477-c059-4e6f-bdda-4eb51c372ca3&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
              alt="Google Logo"
              className="w-7 h-7 mr-2"
            />
            Sign in with Google
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-4 md:mt-16">
          <p className="text-sm">
            Don't have an account?
            <span className="underline cursor-pointer ml-1 font-semibold">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Surface;

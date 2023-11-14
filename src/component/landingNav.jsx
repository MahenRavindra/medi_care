import React from "react";

const landingNav = () => {
  return (
    <nav className="w-full h-14 bg-blue-500 flex justify-between">
      <div className="text-white flex justify-center items-center mx-10">
        <h1 className="text-2xl font-[700]">
          <a href="/">Medi Care</a>
        </h1>
      </div>
      <ul className="text-white flex justify-center items-center gap-10 mx-10 font-[500] max-lg:hidden">
        <li>
          {" "}
          <a href="/">E-Channel</a>
        </li>
        <li>
          <a href="/">Health Tips</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
      <ul className="text-white flex justify-center items-center gap-10 mx-10 max-md:hidden">
        <li className="font-[600] w-32 border-2 p-1 rounded-lg">
          <a href="/login" className="hover:font-[800]">
            Login
          </a>
          &nbsp;|&nbsp;
          <a href="/" className="hover:font-[800]">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default landingNav;

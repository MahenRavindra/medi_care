import React from "react";

const serviceCard = ({heading}) => {
  return (
    <>
      <div className="m-4 hover:mb-10  hover:bg-black hover:text-white bg-white hover:shadow-gray-300 rounded-lg shadow-sm hover:shadow-2xl cursor-pointer border-black w-52">
        <h1 className="uppercase text-sm text-center font-[600] p-4">
          <a href="/">{heading}</a>
        </h1>
      </div>
    </>
  );
};

export default serviceCard;

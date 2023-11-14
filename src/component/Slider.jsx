import React from "react";
import e1 from "../assets/images/e1.png";
import e2 from "../assets/images/e2.png";
import e3 from "../assets/images/e3.png";
import e4 from "../assets/images/e4.png";
import e5 from "../assets/images/doctor.png";
import {useEffect, useState} from "react";

const Slider = () => {
  const images = [e1, e2, e3, e4, e5];
  const textArray = [
    {
      header: "At least exercise ",
      descrption: "30 minutes per Day ",
      itag: "fa-solid fa-person-walking fa-beat",
    },
    {
      header: "Eat Healthy food  ",
      descrption: "never junk food",
      itag: "fa-solid fa-utensils fa-beat",
    },
    {
      header: "realx you mind",
      descrption: "manage situations without panic",
      itag: "fa-solid fa-spa fa-beat",
    },
    {
      header: "Sleep well ",
      descrption: "at least 6 hours per day ",
      itag: "fa-solid fa-bed fa-beat",
    },
    {
      header: "Meet Doctor ",
      descrption: "Get checkup when you feel bad.",
      itag: "fa-solid fa-stethoscope fa-beat",
    },
  ];
  const [img, setImg] = useState(images[0]);
  const [text, setText] = useState(textArray[0]);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickIndex, setClickedIndex] = useState(textArray[0]);
  useEffect(() => {}, []);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    setImg(images[index]);
    setClickedIndex(index);
    setText(textArray[index]);
  };
  return (
    <div className="flex mx-36 max-md:flex-col max-sm:items-center max-sm:justify-center">
      <div className="p-20 max-sm:p-5 max-md:p-10">
        <img
          src={img}
          alt=""
          className=" w-[600px] max-lg:w-full max-sm:w-full block mx-auto "
        />
      </div>
      <div className="max-md:text-center max-lg:text-start">
        <h1 className="text-black text-3xl w-[320px] h-[120px] max-sm:h-[80px]  max-lg:w-auto font-[500] mt-32 uppercase border-black max-sm:text-lg max-sm:mt-1 max-lg:absolute max-sm:relative">
          {text.header} <br />
          <span className="text-lg max-sm:text-lg">
            {text.descrption} &nbsp; <br className="max-sm:hidden" />
            <i className={text.itag}></i> ____
          </span>
        </h1>

        <div className="mt-10 slider-controller max-sm:mt-2 w-max max-sm:mx-auto">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`fa-2xs fa-circle cursor-pointer ${
                index === hoveredIndex
                  ? "fa-solid"
                  : "fa-regular" && index === clickIndex
                  ? "fa-solid"
                  : "fa-regular"
              }`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(index)}></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

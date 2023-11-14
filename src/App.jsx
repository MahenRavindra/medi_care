import "./App.css";
import b1 from "./assets/images/h1.png";
import e1 from "./assets/images/e1.png";
import e2 from "./assets/images/e2.png";
import e3 from "./assets/images/e2.png";
import e4 from "./assets/images/e2.png";
import e5 from "./assets/images/e2.png";
import LandingNav from "./component/landingNav";
import {useState} from "react";
import {useEffect} from "react";

function App() {
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
    <>
      <LandingNav />
      <section className=" w-full bg-gray-100 flex items-start py-16 text-blue-500 justify-between relative max-sm:flex-col-reverse max-sm:items-center">
        <div className="mx-10 max-sm:text-center max-sm:mt-10">
          <h1 className="text-5xl font-[300] max-sm:text-3xl">
            Hey , Dont worry?
          </h1>
          <h1 className="text-4xl font-[600] mt-5 max-sm:text-2xl">
            If you not well
          </h1>
          <h1 className="text-6xl font-[800] mt-3 max-sm:text-3xl">
            We take care of You!{" "}
          </h1>
          <button className="border-4 text-xl max-sm:text-md max-sm:px-5 max-sm:py-2 px-10 py-4 mt-10 font-[600] bg-blue-500 text-white border-gray-200 hover:border-white rounded-full shadow-2xl hover:bg-blue-600">
            Get Started{" "}
            <i className="fa-solid fa-sm fa-arrow-right fa-beat ml-5 "></i>
          </button>
        </div>
        <img
          src={b1}
          alt="b1"
          className="block mx-auto w-96  max-lg:w-60 max-lg:mt-10 max-sm:w-1/2"
        />
      </section>
      <div className="bg-gray-100 h-max">
        <div className="w-full flex justify-between  bg-gray-100 pb-10 ">
          <div className="bg-blue-300 w-1/4 h-[70vh] rounded-tr-full rounded-br-full max-xl:hidden max-sm:hidden"></div>
          <div className="flex mx-10 max  max-md:flex-col max-sm:items-center max-sm:justify-center">
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
          <div className=" w-1/4 h-[70vh] rounded-tl-full rounded-bl-full bg-blue-300 max-xl:w-1/2 max-md:hidden "></div>
        </div>
      </div>

      <div className="h-20"></div>
    </>
  );
}

export default App;

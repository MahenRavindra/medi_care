import {Footer} from "flowbite-react";
import "./App.css";
import b1 from "./assets/images/h1.png";

import LandingNav from "./component/landingNav";
import Services from "./component/Services";
import Slider from "./component/Slider";
import Last from "./component/Footer";

function App() {
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
          className="block mx-auto w-96  max-lg:w-60 max-lg:mt-10 max-sm:hidden "
        />
      </section>
      <Services />
      <div className="bg-gray-100 h-[100vh] ">
        <div className="w-full flex justify-between  bg-gray-100 pb-10 relative">
          <div className="bg-green-400 w-1/4 absolute h-[90vh] top-10  -left-10 rounded-tr-full rounded-br-full max-xl:hidden max-sm:hidden"></div>
          <Slider />
        </div>
      </div>
      <Last />
    </>
  );
}

export default App;

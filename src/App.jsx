import "./App.css";
import b1 from "./assets/images/h1.png";
import e1 from "./assets/images/e1.png";
import LandingNav from "./component/landingNav";
import {useState} from "react";

function App() {
  const [img, setImg] = useState(e1);
  return (
    <>
      <LandingNav />
      <section className=" w-full bg-gray-100 flex items-start py-16 text-blue-500 justify-between">
        <div className="mx-10">
          <h1 className="text-5xl font-[300] ">Hey , Dont worry?</h1>
          <h1 className="text-4xl font-[600] mt-5">If you not good</h1>
          <h1 className="text-6xl font-[800] mt-3">We take care of You! </h1>
          <button className="border-4 text-xl px-10 py-4 mt-10 font-[600] bg-blue-500 text-white border-gray-200 hover:border-white rounded-full shadow-2xl hover:bg-blue-600">
            Get Started{" "}
            <i className="fa-solid fa-sm fa-arrow-right fa-beat ml-5 "></i>
          </button>
        </div>
        <img
          src={b1}
          alt="b1"
          className="block mx-auto w-96 max-md:hidden max-lg:hidden"
        />
      </section>
      <div className="w-full flex justify-between  bg-gray-100 pb-10 ">
        <div className="bg-blue-300 w-1/4 rounded-tr-full rounded-br-full"></div>
        <div className="flex mx-10 ">
          <div className="p-20 ">
            <img src={img} alt="" className=" w-[500px] hover:grayscale" />
          </div>
          <div>
            <h1 className="text-black text-3xl font-[500] mt-32 uppercase   border-black">
              At least exercise <br />
              <span className="text-2xl">
                30 minutes per Day &nbsp;
                <i class="fa-solid fa-person-walking fa-beat"></i> ____
              </span>
            </h1>
          </div>
        </div>
        <div className=" w-1/4 rounded-tl-full rounded-bl-full bg-blue-300"></div>
      </div>

      <div className="h-20"></div>
    </>
  );
}

export default App;

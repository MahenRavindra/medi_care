import React from "react";
import ServiceCard from "../component/serviceCard";

const Services = () => {
  return (
    <section className="bg-gray-100">
      <h1 className="mx-12 text-xl font-[600]">
        Services___<i class="fa-solid fa-gears fa-bounce"></i>
      </h1>
      <div className="flex justify-center items-center gap-2 mt-5  mx-auto w-11/12 h-20 max-md:flex-wrap max-md:h-auto">
        <ServiceCard heading={"Manage Dispensary"} />
        <ServiceCard heading={"E-channeling"} />
        <ServiceCard heading={"Doctor Meetings"} />
        <ServiceCard heading={"track records"} />
        <ServiceCard heading={"Bio calculator"} />
      </div>
    </section>
  );
};

export default Services;

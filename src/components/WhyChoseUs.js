import React from "react";
import pashmak from "../assets/images/pashm.svg";

const WhyChoseUs = () => {
  return (
    <div className="my-container my-12 bg-slate-50  py-8 relative">
      <div className="absolute left-0 top-0">
        <img src={pashmak} alt="" />
      </div>
      <div className="text-center">
        <p className="text-sm text-blue-700 font-semibold">Why Fainancy</p>
        <p className="text-3xl text-gray-800 font-bold">Why Choose Us</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 px-32 mt-8">
        <div className="rounded-lg bg-white px-4 py-6">
          <div className="flex  justify-start">
            <div className=" w-1/6  ">
              <div className="bg-red-100 w-10 h-10 rounded-full"></div>
            </div>
            <div className="w-4/6">
              <h2 className="text-gray-800 font-bold text-base">No Extra Fee</h2>
              <p className="text-gray-500 text-sm mt-4 font-semibold ">
                End-to-end payments and financial management in a single solution. Meet the right
                platform.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white px-4 py-6">
          <div className="flex  justify-start">
            <div className=" w-1/6  ">
              <div className="bg-indigo-100 w-10 h-10 rounded-full"></div>
            </div>
            <div className="w-4/6">
              <h2 className="text-gray-800 font-bold text-base">No Extra Fee</h2>
              <p className="text-gray-500 text-sm mt-4 font-semibold">
                End-to-end payments and financial management in a single solution. Meet the right
                platform.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white px-4 py-6">
          <div className="flex  justify-start">
            <div className=" w-1/6  ">
              <div className="bg-blue-100 w-10 h-10 rounded-full"></div>
            </div>
            <div className="w-4/6">
              <h2 className="text-gray-800 font-bold text-base">No Extra Fee</h2>
              <p className="text-gray-500 text-sm mt-4 font-semibold">
                End-to-end payments and financial management in a single solution. Meet the right
                platform.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white px-4 py-6">
          <div className="flex  justify-start">
            <div className=" w-1/6  ">
              <div className="bg-yellow-100 w-10 h-10 rounded-full"></div>
            </div>
            <div className="w-4/6">
              <h2 className="text-gray-800 font-bold text-base">No Extra Fee</h2>
              <p className="text-gray-500 text-sm mt-4 font-semibold">
                End-to-end payments and financial management in a single solution. Meet the right
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;

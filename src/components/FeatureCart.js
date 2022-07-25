import React from "react";
import user from "../assets/images/user.png";
import { HiBadgeCheck } from "react-icons/hi";
import svg from "../assets/images/Union (1).svg";
import pashmak from "../assets/images/pashm.svg";

const FeatureCart = () => {
  return (
    <div className="relative">
      <div className="my-container mt-12 relative">
        <div className="absolute right-0">
          <img src={pashmak} alt="" />
        </div>

        <div className=" py-12  grid md:grid-cols-2 gap-y-10">
          <div>
            <h2 className="text-blue-600 font-semibold mb-4">Our Feature</h2>
            <h1 className="text-4xl text-gray-900 font-bold leading-[3rem]">
              Resive Payment Quikly from AnyWhere
            </h1>
            <p className="text-gray-700 text-sm mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam fugit
              velit, officia amet obcaecati.amet consectetur adipisicing elit. Veritatis aperiam
              fugit velit, officia amet obcaecati.
            </p>
            <button className="btn btn-primary mt-6 ">Get Started</button>
          </div>
          <div className=" relative ">
            <div className=" md:absolute -top-10 left-10 w-full  md:w-1/2 z-0 bg-white rounded-md">
              <div className="absolute -right-5 -top-5 bg-teal-500 text-white text-6xl flex  justify-center items-center rounded-full w-16 h-16">
                <HiBadgeCheck />
              </div>
              <div className="rounded-md shadow-xl  p-4 ">
                <h2 className="text-gray-800 font-bold mb-4">100+ varify teachers</h2>
                <div className="flex items-center justify-start space-x-2 mb-4">
                  <div className="rounded-full border-2 bg-orange-400  w-max">
                    <img src={user} alt="user" className="object-cover w-8  inline-block " />
                  </div>
                  <div>
                    <h2 className="text-gray-800 font-semibold mb-[-5px] ">Mornr Morkel</h2>
                    <p className="text-sm text-gray-400">Lorem ipsum</p>
                  </div>
                </div>
                <div className="flex items-center justify-start space-x-2 mb-4">
                  <div className="rounded-full border-2 bg-orange-400  w-max">
                    <img src={user} alt="user" className="object-cover w-8  inline-block " />
                  </div>
                  <div>
                    <h2 className="text-gray-800 font-semibold mb-[-5px] ">Mornr Morkel</h2>
                    <p className="text-sm text-gray-400">Lorem ipsum</p>
                  </div>
                </div>
                <div className="flex items-center justify-start space-x-2 mb-4">
                  <div className="rounded-full border-2 bg-orange-400  w-max">
                    <img src={user} alt="user" className="object-cover w-8  inline-block " />
                  </div>
                  <div>
                    <h2 className="text-gray-800 font-semibold mb-[-5px] ">Mornr Morkel</h2>
                    <p className="text-sm text-gray-400">Lorem ipsum</p>
                  </div>
                </div>
                <a href="/" className="text-orange-400 text-sm font-semibold">
                  See More
                </a>
              </div>
            </div>
            <div className=" md:absolute bottom-0  w-full   md:w-1/2 right-7 z-10 bg-white mt-5 md:mt-0 rounded-md">
              <div className="rounded-md shadow-xl  p-4 text-center">
                <div className="rounded-full border-2 bg-orange-400 mx-auto w-max">
                  <img src={user} alt="user" className="object-cover w-16  inline-block " />
                </div>
                <h2 className="text-gray-800 font-semibold ">Mornr Morkel</h2>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>
                <button className="btn btn-primary py-1 bg-teal-600 mt-6">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 -z-10">
        <img src={svg} alt="svg" />
      </div>
    </div>
  );
};

export default FeatureCart;

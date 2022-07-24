import React from "react";
import user from "../assets/images/user.png";
import pashmak from "../assets/images/pashm.svg";

const FainancyAccount = () => {
  return (
    <div className="my-container mt-12 relative">
      <div className="absolute right-0 bottom-0 z-50">
        <img src={pashmak} alt="" />
      </div>
      <div className=" py-12  grid md:grid-cols-2 gap-y-10 gap-x-28">
        <div>
          <h2 className="text-blue-600 font-semibold mb-4">Our Feature</h2>
          <h1 className="text-4xl text-gray-900 font-bold leading-[3rem]">
            Resive Payment Quikly from AnyWhere
          </h1>
          <p className="text-gray-700 text-sm mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam fugit velit,
            officia amet obcaecati.amet consectetur adipisicing elit. Veritatis aperiam fugit velit,
            officia amet obcaecati.
          </p>
          <button className="btn btn-primary mt-6 ">Get Started</button>
        </div>
        <div className="bg-slate-50 flex flex-col justify-center rounded-2xl relative overflow-hidden p-10">
          <div className="z-10  w-36 h-36 bg-orange-200 rounded-full absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2"></div>
          <div className="z-10 w-36 h-36 bg-indigo-200 rounded-full absolute right-0   translate-x-1/2"></div>
          <div className="z-10 w-52 h-52 bg-red-200 rounded-full absolute left-0 bottom-0 translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-20 flex flex-col gap-y-5">
            <div className=" flex items-center rounded-lg p-4 justify-start space-x-2  bg-white shadow-md">
              <div className="rounded-full border-2 bg-orange-400  w-max">
                <img src={user} alt="user" className="object-cover w-8  inline-block " />
              </div>
              <div>
                <h2 className="text-gray-800 font-semibold  ">
                  <span className="text-indigo-800 bg-indigo-200 text-sm px-4 rounded-full">
                    28.900$
                  </span>
                </h2>
                <p className="text-sm text-gray-400">Received from Michael V</p>
              </div>
            </div>
            <div className=" flex items-center rounded-lg p-4 justify-start space-x-2  bg-white shadow-md">
              <div className="rounded-full border-2 bg-orange-400  w-max">
                <img src={user} alt="user" className="object-cover w-8  inline-block " />
              </div>
              <div>
                <h2 className="text-gray-800 font-semibold  ">
                  <span className="text-indigo-800 bg-indigo-200 text-sm px-4 rounded-full">
                    28.900$
                  </span>
                </h2>
                <p className="text-sm text-gray-400">Received from Michael V</p>
              </div>
            </div>
            <div className=" flex items-center rounded-lg p-4 justify-start space-x-2  bg-white shadow-md">
              <div className="rounded-full border-2 bg-orange-400  w-max">
                <img src={user} alt="user" className="object-cover w-8  inline-block " />
              </div>
              <div>
                <h2 className="text-gray-800 font-semibold  ">
                  <span className="text-indigo-800 bg-indigo-200 text-sm px-4 rounded-full">
                    28.900$
                  </span>
                </h2>
                <p className="text-sm text-gray-400">Received from Michael V</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FainancyAccount;

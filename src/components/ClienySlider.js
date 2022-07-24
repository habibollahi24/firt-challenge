import React from "react";
import imageSlider from "../assets/images/imageSlider.png";
import { FaQuoteRight, FaStar, FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const ClienySlider = () => {
  return (
    <div className="my-container mt-12">
      <div>
        <div className="text-indigo-700 text-sm font-semibold">TestImonials</div>
        <div className="text-gray-800 font-bold text-3xl md:w-64 mt-2">
          Check What Our Client Are Saying
        </div>
      </div>
      <div className="grid grid-cols-2 mt-12">
        <div>
          <div className="bg-gray-50 rounded-2xl relative ">
            <div className="bg-orange-400 rounded-full p-3 text-3xl absolute right-0 bottom-1/2 translate-x-1/2 translate-y-1/2 text-white ">
              <FaQuoteRight />
            </div>
            <img src={imageSlider} alt="slider" />
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <FaLongArrowAltLeft className="cursor-pointer flex items-center justify-center bg-transparent text-gray-600 p-1 w-6 h-6 rounded-full hover:bg-indigo-700 hover:text-white  " />
            <FaLongArrowAltRight className="cursor-pointer flex items-center justify-center bg-transparent text-gray-600 p-1 w-6 h-6 rounded-full hover:bg-indigo-700 hover:text-white  " />
          </div>
        </div>
        <div className="pl-16 space-y-3">
          <div className="text-orange-400 text-3xl">
            <FaQuoteRight />
          </div>
          <h2 className="text-gray-800 font-bold text-base">
            Save Time Managing Social Media For Your Business
          </h2>
          <p className="text-sm text-gray-500 text-justify">
            Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you
            off its like like six. Among sex are leave law built now. In built table in an rapid
            blush. Merits behind on afraid or warmly.
          </p>
          <p className="text-sm text-gray-500 text-justify">
            Believing neglected so so allowance existence departure in. In design active temper be
            uneasy.
          </p>
          <div className=" text-orange-500 flex items-center cursor-pointer">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h3 className="text-gray-800 font-bold text-base  ">Angela Taylor</h3>
          <p className="text-sm font-semibold  text-gray-500 text-justify !-mt-[2px]">
            CEO SAMSUNG
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClienySlider;

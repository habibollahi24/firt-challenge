import React from "react";

import imageOne from "../assets/images/companies/Group (1).png";
import imageTwo from "../assets/images/companies/Group (2).png";
import imageThree from "../assets/images/companies/Group (3).png";
import imageFour from "../assets/images/companies/Group (4).png";
import imageFive from "../assets/images/companies/Group (5).png";
import imageSex from "../assets/images/companies/Group (6).png";

const Companies = () => {
  return (
    <div className="my-container">
      <h2 className="text-gray-900 font-semibold text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-x-5 mt-4">
        <div className="p-6">
          <img src={imageOne} alt="" />
        </div>
        <div className="p-6">
          <img src={imageTwo} alt="" />
        </div>
        <div className="p-6">
          <img src={imageThree} alt="" />
        </div>
        <div className="p-6">
          <img src={imageFour} alt="" />
        </div>
        <div className="p-6">
          <img src={imageFive} alt="" />
        </div>
        <div className="p-6">
          <img src={imageSex} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Companies;

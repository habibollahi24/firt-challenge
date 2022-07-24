import React from "react";

import headerImage from "../assets/images/header.png";
import { BsFillCaretRightFill } from "react-icons/bs";
import svg from "../assets/images/Union (1).svg";

const Header = () => {
  return (
    <div className="relative">
      <div className="my-container md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-10 ">
          <div className="">
            <h1 className="text-4xl text-gray-900 font-bold leading-[3rem]">
              Managig Busines Payment Has Never been easer
            </h1>
            <p className="text-gray-700  mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatibus.
            </p>
            <div className="flex items-center gap-x-8 mt-4">
              <div>
                <button className="btn  btn-primary rounded-full">Get Started</button>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="text-white bg-lime-500 flex items-center justify-center rounded-full w-max p-2">
                  <BsFillCaretRightFill />
                </div>
                <a href="/" className="text-sm text-blue-600 font-semibold">
                  See How Its Work
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={headerImage} alt="headerImage" />
          </div>
        </div>
      </div>
      <div className="absolute top-0">
        <img src={svg} alt="svg" />
      </div>
    </div>
  );
};

export default Header;

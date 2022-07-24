import React from "react";
import featureImage from "../assets/images/features.png";

const Features = () => {
  return (
    <div className="my-container mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-10">
        <div>
          <img src={featureImage} alt="headerImage" />
        </div>
        <div className="">
          <h2 className="text-blue-600 font-semibold mb-4">Our Feature</h2>
          <h1 className="text-4xl text-gray-900 font-bold leading-[3rem]">
            Resive Payment Quikly from AnyWhere
          </h1>
          <p className="text-gray-700  mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatibus.
          </p>
          <div className="flex items-center gap-x-8 mt-4">
            <div>
              <button className="btn btn-primary ">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

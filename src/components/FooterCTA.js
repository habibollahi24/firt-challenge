import React from "react";

const FooterCTA = () => {
  return (
    <div className="bg-indigo-900">
      <div className="my-container">
        <div className=" py-12 px-4 grid md:grid-cols-2 gap-y-10 items-center ">
          <div className="text-white">
            <h2 className=" font-semibold mb-4">Our Feature</h2>
            <h1 className="text-4xl  font-bold leading-[3rem]">
              Resive Payment Quikly from AnyWhere
            </h1>
            <p className=" text-sm mt-6">
              End-to-end payments and financial management in a single solution. Meet the right
              platform to help realize.
            </p>
          </div>
          <div className="md:flex  md:justify-center">
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  className=" bg-indigo-400 w-full rounded-md border-none focus:border-orange-400 focus:outline-none focus:border-none placeholder:text-gray-600 "
                  placeholder="EmailAdress"
                />
              </div>
              <div>
                <input
                  type="text"
                  className=" bg-indigo-400 w-full rounded-md border-none focus:border-orange-400 focus:outline-none focus:border-none placeholder:text-gray-600"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="btn w-full bg-orange-500 text-white ">
                Get Srated
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;

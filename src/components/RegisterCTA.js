import React from "react";

const RegisterCTA = () => {
  return (
    <div className="my-container mt-12">
      <div className="bg-slate-100 rounded-3xl py-12 px-4 grid md:grid-cols-2 gap-y-10">
        <div className="md:px-8">
          <h2 className="text-blue-600 font-semibold mb-4">Our Feature</h2>
          <h1 className="text-4xl text-gray-900 font-bold leading-[3rem]">
            Resive Payment Quikly from AnyWhere
          </h1>
          <p className="text-gray-700 text-sm mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam fugit velit,
            officia amet obcaecati.
          </p>
        </div>
        <div className="md:flex  md:justify-center">
          <form className="space-y-5">
            <h2 className="text-blue-600 font-semibold mb-4 ">Get Start For Free</h2>
            <div>
              <input
                type="text"
                className=" w-full rounded-md border-none focus:border-orange-400 focus:outline-none focus:border-none placeholder:text-gray-400 "
                placeholder="EmailAdress"
              />
            </div>
            <div>
              <input
                type="text"
                className=" w-full rounded-md border-none focus:border-orange-400 focus:outline-none focus:border-none placeholder:text-gray-400"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn w-full bg-orange-400 text-white ">
              Get Srated
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCTA;

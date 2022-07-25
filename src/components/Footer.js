import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 py-16  ">
        <div className="my-container">
          <div className="grid md:grid-cols-5 gap-8 justify-center">
            <div className="col-span-2">
              <h2 className="text-white mb-4">AR Shakir</h2>
              <p className="text-gray-500 text-sm">
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all
                exercise blessing. Indulgence way everything joy alteration boisterous the
                attachment.
              </p>
            </div>
            <div className="">
              <div className="text-white mb-4 text-lg">Company</div>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-300">
                  <a href="/">About Us</a>
                </li>
                <li className="text-gray-300">
                  <a href="/">Careers</a>
                </li>
                <li className="text-gray-300">
                  <a href="/">Blog</a>
                </li>
                <li className="text-gray-300">
                  <a href="/">Pricing</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-white mb-4 text-lg">Product</div>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-300">
                  <a href="/">Invoicing Platform</a>
                </li>
                <li className="text-gray-300">
                  <a href="/">Accounting Plateform</a>
                </li>
                <li className="text-gray-300">
                  <a href="/">Create Proposal</a>
                </li>
                <li className="text-gray-300">
                  <a href="/">Contracts</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-white mb-4 text-lg">Resources</div>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-300">
                  <a href="/">Proposal Template</a>
                </li>
                <li className="text-gray-300">
                  <a href="/">Invoice Template</a>
                </li>
                <li className="text-gray-300">
                  <a href="/">Tuturoial</a>
                </li>
                <li className="text-gray-300">
                  <a href="/">How to write a contract</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 border-t-2 border-gray-400">
        <div className="my-container">
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 text-center justify-center md:justify-between items-center text-gray-200  ">
            <p>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</p>
            <p>Supported by Microsoft Startup</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

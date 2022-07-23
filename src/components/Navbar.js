import React from "react";
import { HiChevronDown } from "react-icons/hi";

const menuNavbar = [
  { id: 1, title: "Product", isChevrom: true },
  { id: 2, title: "Template", isChevrom: true },
  { id: 3, title: "Blog", isChevrom: false },
  { id: 4, title: "Pricing", isChevrom: false },
];

const Navbar = () => {
  return (
    <div className="my-container">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-gray-800">AR SHAKIR</div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-5 text-sm text-gray-600 font-semibold">
            {menuNavbar.map((menu) => {
              return (
                <li key={menu.id} className="flex items-center gap-x-1">
                  <div>{menu.title}</div>
                  {menu.isChevrom && (
                    <div>
                      <HiChevronDown />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-x-3">
          <button className="btn ">Sign in</button>
          <button className="btn btn-primary ">Start Free</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

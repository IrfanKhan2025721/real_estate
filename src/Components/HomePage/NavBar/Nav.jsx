import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navData from "./NavData";
import { TbHomeSearch, TbMenu2 } from "react-icons/tb";
import { IoPersonCircleOutline, IoClose } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50">
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-2xl shadow-md px-4 lg:px-10 py-4">
          {/* Main Nav Row */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 text-xl font-bold">
              <TbHomeSearch className="text-3xl" />
              <h1>Real Estate</h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6">
              {navData.map((navLink) => {
                const Icon = navLink.icon;
                return (
                  <li key={navLink.id} className="flex items-center gap-2">
                    <Icon />
                    <NavLink
                      to={navLink.path}
                      className={({ isActive }) =>
                        `transition duration-200 ${
                          isActive
                            ? "border-b-2 border-black"
                            : "hover:border-b-2 hover:border-black"
                        }`
                      }
                    >
                      {navLink.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            {/* Login and number */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2 cursor-pointer">
                <IoPersonCircleOutline className="text-2xl" />
                <span>Login</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>+93 78 140 4483</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-3xl"
            >
              {open ? <IoClose /> : <TbMenu2 />}
            </button>
          </div>

          {/* Mobile / Tablet Menu */}
          {open && (
            <div className="lg:hidden mt-6 space-y-6">
              <ul className="flex flex-col gap-4">
                {navData.map((navLink) => {
                  const Icon = navLink.icon;
                  return (
                    <li
                      key={navLink.id}
                      className="flex items-center gap-2"
                      onClick={() => setOpen(false)}
                    >
                      <Icon />
                      <Link to={navLink.path}>{navLink.title}</Link>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t pt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <IoPersonCircleOutline className="text-2xl" />
                  <span>Login</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaPhoneAlt />
                  <span>+93 78 140 4483</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;

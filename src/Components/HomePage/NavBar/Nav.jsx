import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import navData from "./NavData";
import { TbHomeSearch, TbMenu2 } from "react-icons/tb";
import { IoPersonCircleOutline, IoClose } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import LoginPage from "./LoginPage";

function Nav() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      const heroSection = document.getElementById("hero");
      heroSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="sticky top-4 z-40">
        <div className="max-w-8xl mx-auto px-4 lg:px-8">
          <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl shadow-lg px-5 lg:px-10 py-4 transition-all">
            {/* MAIN NAV */}
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <div onClick={handleLogoClick} className="cursor-pointer">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-xl font-bold tracking-wide"
                >
                  <TbHomeSearch className="text-3xl text-blue-600" />
                  <span className="text-gray-900">Real Estate</span>
                </Link>
              </div>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex items-center gap-8">
                {navData.map((navLink) => {
                  const Icon = navLink.icon;
                  return (
                    <li key={navLink.id} className="flex items-center gap-2">
                      <Icon className="text-gray-500" />
                      <NavLink
                        to={navLink.path}
                        className={({ isActive }) =>
                          `font-medium transition-all ${
                            isActive
                              ? "text-blue-600 border-b-2 border-blue-600"
                              : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
                          }`
                        }
                      >
                        {navLink.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>

              {/* Login and Number */}
              <div className="hidden lg:flex items-center gap-6">
                <button
                  onClick={() => setLoginOpen(true)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  <IoPersonCircleOutline className="text-2xl" />
                  Login
                </button>

                <div className="flex items-center gap-2 text-gray-700">
                  <FaPhoneAlt />
                  <span className="font-medium">+93 78 140 4483</span>
                </div>
              </div>

              {/* Mobile Button */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden text-3xl text-gray-700"
              >
                {open ? <IoClose /> : <TbMenu2 />}
              </button>
            </div>

            {/* Mobile Menu */}
            {open && (
              <div className="lg:hidden mt-6 space-y-6 animate-fadeIn">
                <ul className="flex flex-col gap-4">
                  {navData.map((navLink) => {
                    const Icon = navLink.icon;
                    return (
                      <li
                        key={navLink.id}
                        className="flex items-center gap-3 text-gray-700 font-medium"
                        onClick={() => setOpen(false)}
                      >
                        <Icon />
                        <Link to={navLink.path}>{navLink.title}</Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="border-t pt-4 space-y-4">
                  <button
                    onClick={() => {
                      setLoginOpen(true);
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 w-full bg-blue-600 text-white py-2 rounded-full justify-center"
                  >
                    <IoPersonCircleOutline className="text-2xl" />
                    Login
                  </button>

                  <div className="flex items-center gap-2 text-gray-700 justify-center">
                    <FaPhoneAlt />
                    <span>+93 78 140 4483</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* LOGIN MODAL */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <button
            onClick={() => setLoginOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <IoClose />
          </button>
          <LoginPage />
        </div>
      )}
    </>
  );
}

export default Nav;

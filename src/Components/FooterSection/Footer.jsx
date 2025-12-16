import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";

function Footer() {
  return (
    <footer className="bg-[#100E2C] text-white pt-16 pb-6 px-6 md:px-12 lg:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Opening hours */}
        <div className="leading-8">
          <h1 className="mb-4 text-xl font-semibold">Opening hours</h1>
          <p>Mon–Fri 08:00AM – 08:00PM</p>
          <p>Sat–Sun 08:00AM – 08:00PM</p>
        </div>

        {/* Find us */}
        <div className="leading-7">
          <h1 className="mb-4 text-xl font-semibold">Find Us</h1>
          <p>
            Kart-e-Char, 3rd Street <br /> Kabul, Afghanistan
          </p>
          <p>+93 78 140 4483</p>
          <p>realestate@gmail.com</p>
        </div>

        {/* Property */}
        <div>
          <h1 className="mb-4 text-xl font-semibold">Property</h1>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/property" className="hover:text-white transition">
                Apartments
              </Link>
            </li>
            <li>
              <Link to="/property" className="hover:text-white transition">
                Villas
              </Link>
            </li>
            <li>
              <Link to="/property" className="hover:text-white transition">
                Houses
              </Link>
            </li>
            <li>
              <Link to="/property" className="hover:text-white transition">
                Commercial
              </Link>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h1 className="mb-4 text-xl font-semibold">Links</h1>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/property" className="hover:text-white transition">
                Property
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-500 mt-12 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} MyRealEstate. All rights reserved.
        </p>

        {/* Social Media */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-2 rounded-full hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-2 rounded-full hover:text-gray-600 transition"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-2 rounded-full hover:text-pink-500 transition"
          >
            <IoLogoInstagram />
          </a>

          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-2 rounded-full hover:text-sky-500 transition"
          >
            <BiLogoTelegram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

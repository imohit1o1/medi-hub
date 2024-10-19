import React from "react";
import { axios } from "../import-export/ImportExport";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { toast } from "react-toastify";
// icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const navLinks = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/aboutus",
      display: "About Us",
    },
    {
      path: "/privacypolicy",
      display: "Privacy Policy",
    },
    {
      path: "/termsandconditions",
      display: "Terms and Conditions",
    },
  ];

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "/message/send",
          { email, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setEmail("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-light_theme w-full text-center py-10">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center px-4 space-y-10">
        {/* footer top */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Title */}
          <div className="col-span-1 md:col-span-4 text-left md:text-center">
            <h1 className="text-lg lg:text-xl font-bold text-black/80 mb-6">
              MediHub
            </h1>
            {/* desc */}
            <p className="text-md lg:text-lg text-black/70 font-medium">
              MediHub is a web-based platform facilitating seamless management
              of healthcare services, including appointments, patient records,
              and doctor interactions.
            </p>
            {/* icons */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="border border-white/70 rounded-full px-3 py-3 hover:bg-slate-700/30 cursor-pointer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="border border-white/70 rounded-full px-3 py-3 hover:bg-slate-700/30 cursor-pointer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                className="border border-white/70 rounded-full px-3 py-3 hover:bg-slate-700/30 cursor-pointer"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
          {/* Quick links */}
          <div className="col-span-1 md:col-span-4">
            <h1 className="text-lg text-left md:text-center lg:text-xl font-semibold mb-6">
              Quick Links
            </h1>
            <ul className="flex flex-col justify-between gap-3 md:items-center text-md font-semibold text-left">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="text-black/70 text-md relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-main_theme before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-black"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Operating Hours */}
          <div className="col-span-1 md:col-span-4">
            <h1 className="text-lg text-left md:text-center lg:text-xl font-semibold mb-6">
              Operating Hours
            </h1>
            <ul className="space-y-2 text-md font-semibold text-black/70">
              <li>
                <span className="font-medium">Monday-Friday:</span> 9:00 AM -
                6:00 PM
              </li>
              <li>
                <span className="font-medium">Saturday:</span> 10:00 AM - 4:00
                PM
              </li>
              <li>
                <span className="font-medium">Sunday:</span> Closed
              </li>
            </ul>
          </div>
        </div>

        {/* footer bottom */}
        <div className="w-full text-center py-4 border-t border-gray-200">
          <p className="text-sm lg:text-md font-medium">
            © {new Date().getFullYear()} Mohit Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

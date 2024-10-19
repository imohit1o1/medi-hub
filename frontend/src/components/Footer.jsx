import React, { useState } from "react";
import { axios } from "../import-export/ImportExport";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const navLinks = [
    { path: "/", display: "Home" },
    { path: "/aboutus", display: "About Us" },
    { path: "/privacypolicy", display: "Privacy Policy" },
    { path: "/termsandconditions", display: "Terms and Conditions" },
  ];

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubscription = async (e) => {
    e.preventDefault();
    // Dummy validation check
    if (!newsletterEmail.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      await axios.post("/newsletter/subscribe", { email: newsletterEmail });
      toast.success("Subscribed successfully!");
      setNewsletterEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="bg-light_theme w-full text-center">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center px-3 space-y-9 pt-8">
        {/* footer top */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Title */}
          <div className="cols-span-1 md:col-span-4 text-left">
            <h1 className="text-lg lg:text-xl font-bold text-black/80 mb-6">MediHub</h1>
            <p className="text-md lg:text-lg text-black/70 font-medium">
              MediHub is a web-based platform facilitating seamless management of healthcare services.
            </p>
            <div className="flex items-center gap-4 mt-10">
              <a href="https://www.instagram.com" target="_blank" className="border border-white/70 rounded-full px-2 py-2 hover:bg-slate-700/30 cursor-pointer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" target="_blank" className="border border-white/70 rounded-full px-2 py-2 hover:bg-slate-700/30 cursor-pointer">
                <FaLinkedin />
              </a>
              <a href="https://www.twitter.com" target="_blank" className="border border-white/70 rounded-full px-2 py-2 hover:bg-slate-700/30 cursor-pointer">
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="cols-span-1 md:col-span-3">
            <h1 className="text-lg text-left md:text-center lg:text-xl font-semibold mb-6">Quick Links</h1>
            <ul className="flex flex-col justify-between gap-3 md:items-center text-md font-semibold md:gap-y-4 text-left">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="text-black/70 text-md relative cursor-pointer hover:before:w-full hover:text-black"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="cols-span-1 md:col-span-5">
            <h1 className="text-left text-xl font-bold text-black/80">Subscribe to our Newsletter</h1>
            <form onSubmit={handleNewsletterSubscription} className="grid gap-y-5">
              <div className="relative flex flex-col justify-left space-y-3">
                <label htmlFor="newsletter-email" className="text-md font-normal">
                  Email Address
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-3 py-3 rounded-md grow"
                />
              </div>
              <button type="submit" className="grow bg-main_theme text-white py-3 rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* footer bottom */}
        <div className="w-full py-4">
          <p className="text-sm lg:text-[1rem] font-medium text-center">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

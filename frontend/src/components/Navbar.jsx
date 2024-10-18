import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// react icons
import {
  FaDiscord,
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaRegCalendarCheck,
  FaRegHeart,
  FaRegCircleUser,
} from "react-icons/fa";
import { IoCartOutline, IoIosLogOut } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { Context } from "../Context/Context";

function Navbar() {
  const { isAuth } = useContext(Context); // Assuming 'isAuth' was the intended variable
  const [show, setShow] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogIn = async () => {
    console.log("Login working");
  };
  const handleLogOut = async () => {
    console.log("Logout working");
  };

  const navItems = [
    { to: "/alldoctors", label: "All Doctors" },
    { to: "/specialities", label: "Specialities" },
    { to: "/medicines", label: "Medicines" },
    { to: "/appointment", label: "Appointment" },
  ];

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-dark_theme ${
      isActive ? "text-dark_theme" : "text-main_theme"
    }`;

  const dropdownMenus = [
    { to: "/profile", label: "My Profile", icon: FaRegCircleUser },
    { to: "/appointments", label: "Appointments", icon: FaRegCalendarCheck },
    { to: "medicines/wishlist", label: "Wishlist", icon: FaRegHeart },
    { to: "medicines/order_history", label: "Orders", icon: LuBox },
    { to: "/logout", label: "Logout", icon: IoIosLogOut },
  ];

  const socialLinks = [
    {
      to: "https://github.com/itsmohit097/medi-hub",
      label: "github",
      icon: FaGithub,
    },
    {
      to: "https://www.linkedin.com/in/itsmohit097/",
      label: "linkedin",
      icon: FaLinkedinIn,
    },
    { to: "https://discord.gg/krQd2Fss", label: "discord", icon: FaDiscord },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  const handleNavigation = () => navigate("/medicines/cart");

  return (
    <div className="w-full h-[8vh] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 md:px-4 h-full">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-3xl text-dark_theme tracking-wide font-bold">
            MediHub
          </h1>
        </NavLink>

        {/* Nav Menus */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8 items-center">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <NavLink to={navItem.to} className={navLinkClass}>
                  {navItem.label}
                </NavLink>
              </li>
            ))}
            <li
              className="relative hover:scale-105"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/login"
                className="text-md font-semibold flex items-center border border-dark_theme text-dark_theme px-4 py-2 gap-2"
                onClick={handleLogIn}
              >
                <FaRegCircleUser />
                <span>Login</span>
              </NavLink>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-0 w-56 bg-light_theme border border-dark_theme rounded shadow-lg z-50">
                  {dropdownMenus.map((menu, index) => (
                    <NavLink
                      key={index}
                      to={menu.to}
                      className="flex items-center px-4 py-3 gap-2 text-sm font-medium hover:bg-main_theme/10"
                    >
                      {React.createElement(menu.icon)}
                      {menu.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-dark_theme">
            {isMobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>

        {/* Social Icons and Cart */}
        <div className="hidden lg:flex gap-3 items-center">
          <div onClick={handleNavigation} className="relative cursor-pointer">
            <IoCartOutline size={24} />
            <div className="absolute bottom-4 left-4 border border-main_theme rounded-full bg-main_theme text-light_theme px-2 py-1 text-xs">
              7
            </div>
          </div>

          {socialLinks.map((socialLink, index) => (
            <NavLink key={index} to={socialLink.to} target="_blank">
              {React.createElement(socialLink.icon, {
                size: 20,
                className: "hover:scale-110",
              })}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleMobileMenu}
          ></div>
          <div className="bg-gray-200 w-3/5 min-h-screen absolute right-0 z-50 p-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((navItem, index) => (
                <li key={index}>
                  <NavLink to={navItem.to} onClick={toggleMobileMenu}>
                    {navItem.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/login" onClick={toggleMobileMenu}>
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

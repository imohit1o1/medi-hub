import { NavLink } from "react-router-dom";

// react icons
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Navbar() {

  return (
    <div
      className={"w-full h-[12vh]  bg-main_theme fixed top-0 z-50 shadow-md"}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:px-6  px-3 py-5">
        {/* logo */}
        <div className="flex items-center gap-3">
          <h1 className="font-medium text-2xl text-text">MediHub</h1>
        </div>

        {/* Nav Menus */}
        <div className="hidden md:block">
          <ul className="flex justify-between gap-8 items-center">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/alldoctors"}
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                All Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/appointment"}
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Appointment
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/aboutus"}
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  `text-sm font-semibold relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-text before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-text ${isActive ? "text-text" : "text-text/70"
                  }`
                }
              >
                Login
              </NavLink>
            </li>
            <li className="hover:scale-105">
              <NavLink
                to={"/signup"}
                className="text-sm text-theme bg-text font-semibold relative cursor-pointer border rounded-3xl px-5 py-2 "
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>

        {/* social icons */}
        <div className="flex gap-4 items-center">
          <NavLink
            to={
              "https://github.com/itsmohit097/mern_stack_hospital_management_system"
            }
            target="_blank"
          >
            <FaDiscord className="text-text size-5 hidden md:block hover:scale-110" />
          </NavLink>
          <NavLink
            to={
              "https://github.com/itsmohit097/mern_stack_hospital_management_system"
            }
            target="_blank"
          >
            <FaGithub className="text-text size-5 hover:scale-110 " />
          </NavLink>
          <NavLink
            to={"https://www.linkedin.com/in/itsmohit097/"}
            target="_blank"
          >
            <FaLinkedinIn className="text-text size-5 hidden md:block hover:scale-110" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import img from "../assets/logo.png";
import { navLinks, menu, close } from "../constants/index";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className=" w-full bg-slate-900 sm:h-[100px] h-[70px] flex sm:justify-between sm:px-20 px-8 items-center sticky top-0 z-[10]">
        {/* logo */}
        <div>
           <img src={img} alt="logo" className="sm:w-[70px] w-[50px]  drop-shadow-3xl" />
        </div>
        <div>
          {/* menu - navlinks */}
          <ul className="sm:flex hidden ">
            {navLinks.map((link) => (
              <li key={link.id} className=" mx-5 text-[20px] text-yellow-100">
                <Link
                  to={`${link.id}`}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                  className=" cursor-pointer"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* navlinks for small devices */}
          <div className="sm:hidden flex">
            <img
              src={toggle ? close : menu}
              className=" h-10 w-10 cursor-pointer absolute right-10 top-5"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <motion.div
              className={`${
                toggle ? "flex" : "hidden"
              } absolute top-[100px] right-[10px]`}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
            >
              <ul className="flex flex-col bg-slate-800 py-10 pr-10 pl-5 text-white rounded-xl">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className=" mx-3 text-lg leading-9"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <Link
                      to={`${link.id}`}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={1000}
                      className=" cursor-pointer"
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="h-[6%] bg-greendark text-cream border-b-2 border-night flex justify-between items-center px-4 md:px-10">
      <NavLink to={"/"} className="text-xl font-semibold md:text-2xl">
        Taiju
      </NavLink>
      <button className="md:hidden bg-greenlight text-night border text-sm  px-2 py-1 rounded shadow">
        Preview
      </button>
      <motion.a
        href={"/setting"}
        className="hidden md:block"
        whileHover={{ rotate: 45 }}
        whileTap={{ rotate: -45 }}
      >
        <IoSettingsOutline className="text-2xl" />
      </motion.a>
    </section>
  );
};

export default Navbar;

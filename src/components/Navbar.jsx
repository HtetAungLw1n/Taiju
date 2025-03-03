import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <section className="h-[6%] bg-white2 flex justify-between items-center px-4 md:px-10">
      <h1 className="text-xl font-semibold md:text-2xl">Taiju</h1>
      <button className="md:hidden bg-green-200 text-deepgreen border border-deepgreen px-2 py-1 rounded shadow">
        Preview
      </button>
      <motion.div
        className="hidden md:block"
        whileHover={{ rotate: 45 }}
        whileTap={{ rotate: -45 }}
      >
        <IoSettingsOutline className="text-2xl" />
      </motion.div>
    </section>
  );
};

export default Navbar;

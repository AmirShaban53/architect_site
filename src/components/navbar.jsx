import { useState } from "react";
import { Container } from "./layout";
import { Menu } from "@mui/icons-material";
import { motion } from "framer-motion";
import { btnVart, parentVart, navItemVart } from "../animations";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };
  const handleCloseMenu = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="py-4 top-0">
      <Container>
        <div className="flex justify-between items-center">
          <div className="z-30">
            <p className="font-bold text-lg">DRAKO</p>
          </div>
          <div className="z-30 md:hidden">
            <button onClick={handleToggleMenu}>
              <Menu />
            </button>
          </div>
          <div
            className={`fixed w-screen bg-white md:bg-transparent h-screen z-10 flex items-center transition-all duration-500 top-0 ${
              mobileOpen ? "left-0" : "-left-full"
            }
            md:static md:w-auto md:h-auto`}
          >
            <motion.ul
              variants={parentVart}
              className="md:flex  gap-12 font-semibold space-y-12 md:space-y-0 text-center w-full"
            >
              <motion.li variants={navItemVart} className="capitalize">
                <a href="#about" onClick={handleCloseMenu}>About Us</a>
              </motion.li>
              <motion.li variants={navItemVart} className="capitalize">
                <a href="#services" onClick={handleCloseMenu}>Services</a>
              </motion.li>
              <motion.li variants={navItemVart} className="capitalize">
                <a href="#projects" onClick={handleCloseMenu}>Projects</a>
              </motion.li>
              <motion.li variants={navItemVart} className="capitalize">
                <a href="#awards" onClick={handleCloseMenu}>Awards</a>
              </motion.li>
              {/* <li className="capitalize">
                <a href="#support">support</a>
              </li> */}
            </motion.ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

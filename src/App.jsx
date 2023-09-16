import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";
import Awards from "./components/awards";
import Footer from "./components/footer";

import { motion } from "framer-motion";

function App() {
  return (
    <motion.main initial="initial" animate="animate">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Awards />
      <Footer />
    </motion.main>
  );
}

export default App;

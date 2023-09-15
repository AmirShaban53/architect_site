import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";
import Awards from "./components/awards";
import Footer from "./components/footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects/>
      <Awards />
      <Footer/>
    </main>
  );
}

export default App;

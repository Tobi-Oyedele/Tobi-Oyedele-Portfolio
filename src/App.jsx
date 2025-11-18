import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/sections/Home";
import { Contact } from "./components/sections/Contact";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />

      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;

import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/sections/Home";
import Contact from "./components/sections/Contact";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import { ThemeProvider } from "./context/ThemeContext";

import Background from "./components/Background";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 relative">
        <Background />
        <header>
          <Navbar />
        </header>
        
        <main>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        <footer className="py-10 text-center opacity-50 text-sm">
          <p>© {new Date().getFullYear()} Tobi Oyedele. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;

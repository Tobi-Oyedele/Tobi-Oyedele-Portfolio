import { Home } from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const MainContent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="max-w-2xl mx-auto min-h-screen px-6 sm:px-8 py-12 sm:py-16 md:py-20 flex flex-col justify-between">
      <div>
        {/* Navigation / Theme Toggle */}
        <nav className="flex items-center justify-end mb-14 sm:mb-16">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg border border-hairline hover:bg-hairline transition-all cursor-pointer flex items-center justify-center text-muted"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>
        </nav>

        <main>
          <Home />
          <Projects />
        </main>
      </div>

      {/* Editorial Footer */}
      <footer className="mt-20 sm:mt-24 pt-8 border-t border-hairline">
        <p className="font-serif text-sm text-muted">
          © {new Date().getFullYear()} · Oluwatobiloba
        </p>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

export default App;

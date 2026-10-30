import { Home } from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";
import More from "./components/sections/More";
import Bookshelf from "./pages/Bookshelf";
import List100 from "./pages/List100";
import Guestbook from "./pages/Guestbook";
import About from "./pages/About";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const MainContent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const pages = { "/about": About, "/bookshelf": Bookshelf, "/list-100": List100, "/guestbook": Guestbook };
  const Page = pages[path];

  return (
    <div className="max-w-2xl mx-auto min-h-screen px-6 sm:px-8 py-12 sm:py-16 md:py-20 flex flex-col justify-between">
      <div>
        {/* Navigation / Theme Toggle */}
        <nav className="flex items-center justify-between mb-14 sm:mb-16">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
            <a href="/">Home</a>
            <a href="/about" aria-current={path === "/about" ? "page" : undefined}>About</a>
            <a href="/bookshelf" aria-current={path === "/bookshelf" ? "page" : undefined}>Bookshelf</a>
            <a href="/list-100" aria-current={path === "/list-100" ? "page" : undefined}>List 100</a>
            <a href="/guestbook" aria-current={path === "/guestbook" ? "page" : undefined}>Guestbook</a>
          </div>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <svg
              className={`theme-icon${isDarkMode ? " is-dark" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3v18m0-12 4.65-4.65M12 14.3l7.37-7.37M12 19.6l8.85-8.85" />
            </svg>
          </button>
        </nav>

        <main>
          {Page ? <Page /> : (
            <>
              <Home />
              <Projects />
              <TechStack />
              <More />
            </>
          )}
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

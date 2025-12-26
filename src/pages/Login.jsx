import { useState, useEffect } from "react";
import authStore from "../store/authStore";

const Login = () => {
  const login = authStore((state) => state.login);

  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ name: fullName }, "fake-jwt-token");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 transition-colors">

      {/* Dark mode toggle */}
      <button
  onClick={() => setDarkMode(!darkMode)}
  className="fixed bottom-6 right-6 z-50
             w-12 h-12 rounded-full
             flex items-center justify-center
             bg-gray-200 dark:bg-gray-700
             text-gray-800 dark:text-gray-200
             shadow-lg hover:scale-105 transition"
  aria-label="Toggle dark mode"
>
  {darkMode ? "☀" : "🌙"}
</button>

     <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-5xl
                grid grid-cols-1 md:grid-cols-2 overflow-hidden">
  
  {/* WELCOME PANEL: visible and stacked on mobile */}
  <div className="flex flex-col justify-center p-6 md:p-10 bg-gray-50 dark:bg-gray-700">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
      Welcome back
    </h2>

    <p className="text-gray-600 dark:text-gray-300 mb-8">
      Learn, Grow, Collaborate and Build with Colleagues.
    </p>

    <div className="grid grid-cols-3 gap-6 opacity-60">
      <NotebookIcon />
      <PenIcon />
      <LaptopIcon />
      <CoffeeIcon />
      <GrowthIcon />
      <BookIcon />
    </div>
  </div>

        {/* RIGHT PANEL */}
        <div className="p-8 md:p-10">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Login to StudyHub
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600
                         bg-white dark:bg-gray-700
                         text-gray-800 dark:text-gray-100
                         px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600
                         bg-white dark:bg-gray-700
                         text-gray-800 dark:text-gray-100
                         px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            Enjoy a productive time here.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ---------------- ICONS ---------------- */

const IconWrapper = ({ children }) => (
  <div className="flex items-center justify-center w-20 h-20
                  bg-gray-100 dark:bg-gray-600 rounded-xl">
    {children}
  </div>
);

const NotebookIcon = () => (
  <IconWrapper>
    <svg width="36" height="36" fill="none" stroke="gray" strokeWidth="1.5">
      <rect x="8" y="4" width="20" height="28" rx="2" />
      <line x1="12" y1="8" x2="24" y2="8" />
      <line x1="12" y1="12" x2="24" y2="12" />
    </svg>
  </IconWrapper>
);

const PenIcon = () => (
  <IconWrapper>
    <svg width="36" height="36" fill="none" stroke="gray" strokeWidth="1.5">
      <line x1="8" y1="28" x2="28" y2="8" />
      <line x1="22" y1="6" x2="30" y2="14" />
    </svg>
  </IconWrapper>
);

const LaptopIcon = () => (
  <IconWrapper>
    <svg width="36" height="36" fill="none" stroke="gray" strokeWidth="1.5">
      <rect x="6" y="8" width="24" height="16" rx="2" />
      <line x1="4" y1="28" x2="32" y2="28" />
    </svg>
  </IconWrapper>
);

const CoffeeIcon = () => (
  <IconWrapper>
    <svg width="36" height="36" fill="none" stroke="gray" strokeWidth="1.5">
      <rect x="10" y="12" width="14" height="12" rx="2" />
      <path d="M24 14h4a4 4 0 010 8h-4" />
    </svg>
  </IconWrapper>
);

const GrowthIcon = () => (
  <IconWrapper>
    <svg width="36" height="36" fill="none" stroke="gray" strokeWidth="1.5">
      <line x1="8" y1="26" x2="14" y2="18" />
      <line x1="14" y1="18" x2="22" y2="22" />
      <line x1="22" y1="22" x2="28" y2="12" />
    </svg>
  </IconWrapper>
);

export default Login;

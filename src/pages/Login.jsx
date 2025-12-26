import { useState } from "react";
import authStore from "../store/authStore";

const Login = () => {
  const login = authStore((state) => state.login);

  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ name: fullName }, "fake-jwt-token");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl grid md:grid-cols-2 overflow-hidden">

        {/* LEFT PANEL */}
        <div className="hidden md:flex flex-col justify-center p-10 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome back
          </h2>

          <p className="text-gray-600 mb-8">
            Learn, Grow, Collaborate and Build with Colleagues.
          </p>

          {/* Greyed-out illustrations */}
          <div className="grid grid-cols-3 gap-6 opacity-60">
            <NotebookIcon />
            <PenIcon />
            <LaptopIcon />
            <CoffeeIcon />
            <GrowthIcon />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-8 md:p-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Login to StudyHub
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-500">
            Enjoy a productive time here.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ---------------- ICONS (SVGs) ---------------- */

const IconWrapper = ({ children }) => (
  <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-xl">
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

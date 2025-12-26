import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side: Logo or title */}
        <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">
          <Link to="/">StudyHub</Link>
        </div>

        {/* Right side: Links */}
        <div className="flex space-x-6">
          <Link
            to="/login"
            className="text-blue-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-blue-900 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import authStore from "../store/authStore";

const Navbar = () => {
  const { isAuthenticated, logout } = authStore();

  return (
    <nav className="p-4 bg-white-900 text-purple-800 ml-20 mr-10 flex justify-between">
      <Link to="/" className="font-bold text-4xl">StudyHub</Link>

      <div className="space-x-4">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import { Navigate, Outlet } from "react-router-dom";
import authStore from "../store/authStore";

const PrivateRoute = () => {
  const isAuthenticated = authStore((state) => state.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

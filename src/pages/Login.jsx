import authStore from "../store/authStore";

const Login = () => {
  const login = authStore((state) => state.login);

  const handleLogin = () => {
    login({ name: "Demo User" }, "fake-jwt-token");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2"
      >
        Login
      </button>
    </div>
  );
};

export default Login;

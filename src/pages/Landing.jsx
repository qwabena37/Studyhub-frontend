import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Learn. Build. Collaborate.
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          StudyHub helps students and developers manage projects, collaborate
          with peers, and grow together.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white text-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <Feature
            title="Project Management"
            text="Create, organize, and track your study or development projects."
          />
          <Feature
            title="Secure Authentication"
            text="Your data is protected with modern authentication practices."
          />
          <Feature
            title="Collaboration"
            text="Work together with classmates and teammates effortlessly."
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-200">
        © {new Date().getFullYear()} StudyHub. All rights reserved.
      </footer>
    </div>
  );
};

const Feature = ({ title, text }) => (
  <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default Landing;

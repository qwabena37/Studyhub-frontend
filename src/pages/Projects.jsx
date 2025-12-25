import { Link } from "react-router-dom";

const Projects = () => {
  // Mock data (replace with API later)
  const projects = [
    { id: 1, title: "StudyHub API" },
    { id: 2, title: "Frontend Dashboard" },
    { id: 3, title: "Mobile Notes App" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Link
          to="/projects/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Project
        </Link>
      </div>

      <ul className="space-y-3">
        {projects.map((project) => (
          <li
            key={project.id}
            className="p-4 border rounded hover:bg-gray-50"
          >
            <Link
              to={`/projects/${project.id}`}
              className="text-blue-600 font-medium"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

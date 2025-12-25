import { useParams, Link } from "react-router-dom";

const SingleProject = () => {
  const { id } = useParams();

  // Mock project (replace with API fetch later)
  const project = {
    id,
    title: `Project ${id}`,
    description: "This is a sample project description.",
  };

  return (
    <div className="p-6">
      <Link to="/projects" className="text-blue-600">
        ← Back to Projects
      </Link>

      <h1 className="text-2xl font-bold mt-4">{project.title}</h1>
      <p className="mt-2 text-gray-700">{project.description}</p>
    </div>
  );
};

export default SingleProject;

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#0f172a]">{project.title}</h3>
        <p className="text-gray-700 mt-2">{project.description}</p>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Tech: {project.techStack.join(", ")}
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3b82f6] font-semibold hover:underline"
          >
            GitHub
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
